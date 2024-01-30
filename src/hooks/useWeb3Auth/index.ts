import { Web3Auth } from "@web3auth/modal";
import { useEffect, useState } from "react";
import { CHAIN_NAMESPACES } from "@web3auth/base";
// import { SolanaWalletConnectorPlugin } from "@web3auth/solana-wallet-connector-plugin";
import { SolflareAdapter } from "@web3auth/solflare-adapter";
import { SlopeAdapter } from "@web3auth/slope-adapter";
import useAuth from "../useAuth";

import { createUSer, findUser } from "../../Services/createUser";
import { useNavigate } from "react-router-dom";

const clientId = "BEiqaHl8u_pJCiWD2z1k5dnUS24MrMNiGcr94iobGYuDCDkDuXMpK7fItVJPTr_PhnJ37iVKtUViaQrxGrH4j_0";
function useWeb3Auth() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  // const [provider, setProvider] = useState<IProvider | null>(null);
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.SOLANA,
            chainId: "0x3", // Please use 0x1 for Mainnet, 0x2 for Testnet, 0x3 for Devnet
            rpcTarget: "https://api.devnet.solana.com", // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        });

        // // adding solana wallet connector plugin
        // const torusPlugin = new SolanaWalletConnectorPlugin({
        //   torusWalletOpts: {},
        //   walletInitOptions: {
        //     whiteLabel: {
        //       name: "Whitelabel Demo",
        //       theme: { isDark: true, colors: { torusBrand1: "#00a8ff" } },
        //       logoDark: "https://web3auth.io/images/w3a-L-Favicon-1.svg",
        //       logoLight: "https://web3auth.io/images/w3a-D-Favicon-1.svg",
        //       topupHide: true,
        //       defaultLanguage: "en",
        //     },
        //     enableLogging: true,
        //   },
        // });
        // await web3auth.addPlugin(torusPlugin);

        const solflareAdapter = new SolflareAdapter({
          clientId,
        });
        web3auth.configureAdapter(solflareAdapter);

        const slopeAdapter = new SlopeAdapter({
          clientId,
        });
        web3auth.configureAdapter(slopeAdapter);

        setWeb3auth(web3auth);
        await web3auth.initModal();
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  async function login() {
    try {
      if (!web3auth) {
        throw new Error("Web3Auth not initialized");
      }
      await web3auth.connect();
      const info = await web3auth.getUserInfo();
      const idss = await web3auth.authenticateUser();
      console.log(idss);

      setAuth({
        email: info.email,
        name: info.name,
        authToken: info.idToken,
        profileImage: info.profileImage,
      });
      const findusers = await findUser({ email: info.email });
      if (findusers.length > 0) {
        setAuth({
          email: info.email,
          name: info.name?.split(" ").join(""),
          authToken: info.idToken,
          profileImage: info.profileImage,
        });
        navigate("/app");
        return;
      }
      createUSer({
        email: info.email,
        profile: info.name?.split(" ").join(""),
      });
      navigate("/app");
    } catch (error) {
      console.error(error);
    }
  }
  async function logout() {
    if (web3auth) {
      web3auth.logout();
      setAuth({
        email: "",
        name: "",
        authToken: "",
        profileImage: "",
      });
    }
  }
  return [login, logout];
}

export default useWeb3Auth;

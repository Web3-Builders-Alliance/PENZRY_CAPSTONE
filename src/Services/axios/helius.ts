import axios from "axios";

const BASE_URL =
  "https://devnet.helius-rpc.com/?api-key=";

export default axios.create({
  baseURL: BASE_URL,
});

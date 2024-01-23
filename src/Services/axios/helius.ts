import axios from "axios";

const BASE_URL =
  "https://devnet.helius-rpc.com/?api-key=e4565d31-8f06-40e9-b783-2e42a4e229f1";

export default axios.create({
  baseURL: BASE_URL,
});

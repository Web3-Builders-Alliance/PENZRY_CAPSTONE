import axios from "axios";

const BASE_URL = "https://devnet.underdogprotocol.com/v2";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    authorization: "Bearer b5b2075b10c23d.8178e68d7aeb43f698b1586b64e50dec",
  },
});

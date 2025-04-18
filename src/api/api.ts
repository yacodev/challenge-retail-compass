import axios from "axios";
import config from "../config";

export const productsApi = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    APIKey: config.API_KEY,
  },
});

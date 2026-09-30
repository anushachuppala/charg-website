import axios from "axios";
import { getAccessToken } from "./authToken";

export const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ?? import.meta.env.VITE_API_URL ?? "/api",

  timeout: 30_000,

  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

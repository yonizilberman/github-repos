import axios from "axios";

export const https = axios.create({
  baseURL: "https://api.github.com",
});

https.defaults.headers.common["Content-Type"] =
  "application/vnd.github.v3+json";

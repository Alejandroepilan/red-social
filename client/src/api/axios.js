import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-redsocial.epila.dev/api",
  withCredentials: true,
});

export default instance;

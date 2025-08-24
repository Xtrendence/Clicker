import axios from "axios";

export function authAxios() {
  const token = new URLSearchParams(window.location.search).get("token");
  return axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
      key: token,
    },
  });
}

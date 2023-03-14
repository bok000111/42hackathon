import axios from "axios";

export const accessClient = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 180000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

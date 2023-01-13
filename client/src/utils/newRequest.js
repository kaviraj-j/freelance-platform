import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL

const newRequest = axios.create({
  // baseURL: "http://localhost:8800/api/",
  baseURL: `${apiUrl}`,
  withCredentials: true,
});

export default newRequest;

import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://task-list-mevn.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",   
  },
});
export default axiosInstance;

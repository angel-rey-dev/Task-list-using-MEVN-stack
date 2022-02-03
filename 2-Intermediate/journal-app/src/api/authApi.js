import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyABHJGEtl3F7F1oI1YzWZwsCwzg4wZJWYY",
  },
});

export default authApi;

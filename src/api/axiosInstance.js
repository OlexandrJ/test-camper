import axios from "axios";

const baseURL = "https://6622679b27fcd16fa6c9b698.mockapi.io/api/v1/";

export const axiosInstance = axios.create({
  baseURL,
});
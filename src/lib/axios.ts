import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://rightguitar-us.backendless.app/api",
});
export const axiosInstance2 = axios.create({
  baseURL: "http://localhost:8000",
});

//dudu@mail.com
//Admin123
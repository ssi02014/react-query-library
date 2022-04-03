import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER
    ? process.env.REACT_APP_API_SERVER
    : "http://localhost:4000",
});

export const getAPI = async (url: string, params?: any, options?: any) => {
  const response = await request({
    method: "GET",
    url,
    params,
    ...options,
  });
  return response;
};

export const postAPI = async (url: string, data?: object, params?: object) => {
  const response = await request({
    method: "GET",
    url,
    data,
    params,
  });
  return response;
};

export default request;
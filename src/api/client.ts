import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const client: AxiosInstance = axios.create({
  baseURL,
});

client.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

client.interceptors.response.use((response: AxiosResponse) => {
  return response;
});

client.interceptors.response.use(null, async (error) => {
  try {
    const config = error.config;
    return axios.request(config);
  } catch (error) {
    const Error = error as AxiosError;
    throw Error;
  }
});

export default client;

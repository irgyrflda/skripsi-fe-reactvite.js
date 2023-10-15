import axios from 'axios';
import { BaseUrl } from './BaseUrl';

const API_BASE_URL = BaseUrl;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const setupInterceptorsTo = (axiosInstance) => {
  return axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        console.log('401');
      }
      return Promise.reject(error);
    }
  );
};

const instances = setupInterceptorsTo(axiosInstance);

export { instances };

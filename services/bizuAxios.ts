import axios, { AxiosError, AxiosResponse } from 'axios';
import globalAlerts from '../common/alerts';

// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'https://www.api.bizudesign.io';

const bizuAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

bizuAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      globalAlerts('warning', 'bottom', 'faça seu login : )', 2500);
      return Promise.reject(error);
    }

    globalAlerts('error', 'bottom', 'ops, algo não saiu como esperado... tente novamente em alguns minutos!', 4000);
    return Promise.reject(error);
  },
);

export default bizuAxios;

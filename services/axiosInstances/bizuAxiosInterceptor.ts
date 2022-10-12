import axios, { AxiosError, AxiosResponse } from 'axios';
import Router from 'next/router';
import BASE_URL from './baseUrl';
import globalAlerts from '../../common/alerts';

const bizuAxiosInterceptor = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

bizuAxiosInterceptor.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (Router.pathname === '/') {
        return Promise.reject(error);
      }

      Router.push('/acessar/conta');
      return globalAlerts('warning', 'bottom', 'faça seu login : )', 2500);
    }

    globalAlerts('error', 'bottom', 'ops, algo não saiu como esperado... tente novamente em alguns minutos!', 4000);
    return Promise.reject(error);
  },
);

export default bizuAxiosInterceptor;

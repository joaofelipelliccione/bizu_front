import axios from 'axios';
import BASE_URL from './baseUrl';

const bizuAxiosPlain = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

export default bizuAxiosPlain;

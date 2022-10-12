import axios from 'axios';

// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'https://www.api.bizudesign.io';

const bizuAxiosPlain = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

export default bizuAxiosPlain;

import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.api.bizudesign.io',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.api.bizudesign.io',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json;charset=UTF-8',
  },
});

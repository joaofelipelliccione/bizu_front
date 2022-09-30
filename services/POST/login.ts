import axios from 'axios';
import { ISignInFormData } from '../../interfaces/users';

import bizuAxios from '../bizuAxios';

const login = async (payload: ISignInFormData):
  Promise<number> => bizuAxios.post('/users/login', payload)
  .then(({ data }) => data.statusCode)
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }

    return 500;
  });

export default login;

import axios from 'axios';
import { ISignInFormData } from '../../interfaces/users';
import { IGenericResponse } from '../../interfaces/genericResponse';
import bizuAxios from '../bizuAxios';

bizuAxios.interceptors.response.eject(0); // Removendo interceptador da instância.

const login = async (payload: ISignInFormData):
  Promise<IGenericResponse> => bizuAxios.post('/users/login', payload)
  .then(({ data }) => data)
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }

    return {
      statusCode: 500,
      message: 'Algo deu errado ao realizar o login do usuário :(',
    };
  });

export default login;

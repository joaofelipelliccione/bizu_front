import axios from 'axios';
import bizuAxiosPlain from '../axiosInstances/bizuAxiosPlain';
import { ISignInFormData } from '../../interfaces/users';
import { IGenericResponse } from '../../interfaces/genericResponse';

const login = async (payload: ISignInFormData):
  Promise<IGenericResponse> => bizuAxiosPlain.post('/users/login', payload)
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

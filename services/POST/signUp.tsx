import axios from 'axios';
import { ISignUpFormData } from '../../interfaces/users';
import { IGenericResponse } from '../../interfaces/genericResponse';
import bizuAxios from '../bizuAxios';

bizuAxios.interceptors.response.eject(0); // Removendo interceptador da instância.

const signUp = async (payload: ISignUpFormData):
  Promise<IGenericResponse> => bizuAxios.post('/users', payload)
  .then(({ data }) => data)
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }

    return {
      statusCode: 500,
      message: 'Algo deu errado ao criar a conta do usuário :(',
    };
  });

export default signUp;

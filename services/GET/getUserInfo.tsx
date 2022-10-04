import bizuAxios from '../bizuAxios';
import { IUser } from '../../interfaces/users';
import { IGenericResponse } from '../../interfaces/genericResponse';

const getUserInfo = async ():
Promise<IUser | IGenericResponse> => bizuAxios.get('/users/current')
  .then(({ data }) => (data))
  .catch((error) => ({
    statusCode: 401,
    message: `Erro ao buscar informações do usuário - ${error}`,
  }));

export default getUserInfo;

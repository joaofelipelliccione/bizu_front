import { IGenericResponse } from '../../interfaces/genericResponse';

import bizuAxios from '../bizuAxios';

const getUserInfo = async ():
Promise<IGenericResponse> => bizuAxios.get('/users/current')
  .then(({ data }) => ({ statusCode: 200, message: data }))
  .catch((error) => ({
    statusCode: 401,
    message: `Erro ao buscar informações do usuário - ${error}`,
  }));

export default getUserInfo;

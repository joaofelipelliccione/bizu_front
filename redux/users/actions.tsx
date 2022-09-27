import { IUser } from '../../interfaces/users';

export const SET_USERS_INFO = 'SET_USERS_INFO';
export const setUsersInfoAC = (payload: IUser) => ({
  type: SET_USERS_INFO,
  id: payload.id,
  username: payload.username,
  email: payload.email,
  profilePicture: payload.profilePicture,
});

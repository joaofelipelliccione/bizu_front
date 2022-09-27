/* eslint-disable default-param-last */
import { AnyAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/users';
import { SET_USERS_INFO } from './actions';

const INITIAL_STATE: IUser = {
  id: null,
  username: null,
  email: null,
  profilePicture: null,
};

const usersReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case SET_USERS_INFO:
    return {
      ...state,
      id: action.id,
      username: action.username,
      email: action.email,
      profilePicture: action.profilePicture,
    };
  default: return state;
  }
};

export default usersReducer;

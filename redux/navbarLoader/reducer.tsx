/* eslint-disable default-param-last */
import { AnyAction } from '@reduxjs/toolkit';
import { NAVBAR_LOADER } from './actions';

const INITIAL_STATE = {
  isActive: false,
};

const navbarLoaderReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case NAVBAR_LOADER:
    return {
      ...state,
      isActive: action.isActive,
    };
  default: return state;
  }
};

export default navbarLoaderReducer;

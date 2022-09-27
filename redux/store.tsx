import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';

const initStore = configureStore({ reducer: { users: usersReducer } });

export default initStore;

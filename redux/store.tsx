import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';

const initStore = configureStore({ reducer: { users: usersReducer } });

export type RootState = ReturnType<typeof initStore.getState>

export type AppDispatch = typeof initStore.dispatch

export default initStore;

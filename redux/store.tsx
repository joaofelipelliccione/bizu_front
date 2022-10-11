import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/reducer';
import navbarLoaderReducer from './navbarLoader/reducer';

const initStore = configureStore({
  reducer: {
    users: usersReducer,
    navbarLoader: navbarLoaderReducer,
  },
});

export type RootState = ReturnType<typeof initStore.getState>

export type AppDispatch = typeof initStore.dispatch

export default initStore;

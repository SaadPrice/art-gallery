import { configureStore } from '@reduxjs/toolkit';
import artReducer from './Features/artSlice';
import loggerMiddleware from './Features/middleware';

const store = configureStore({
  reducer: {
    art: artReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;

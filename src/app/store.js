import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../app/weather/weatherSlice';

export const store = configureStore({
  reducer: {
    weather : weatherReducer
  },
});

import { configureStore } from '@reduxjs/toolkit';
import truckReducer from './trucks/slice'



export const store = configureStore({
  reducer: {
    truck: truckReducer,
  },
});


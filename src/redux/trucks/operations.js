import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../API/apiInstance';

export const getTrucks = createAsyncThunk(
  'trucks/getAllTrucks',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/campers');
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

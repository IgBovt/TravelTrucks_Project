import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../API/apiInstance';

export const getAllTrucks = createAsyncThunk(
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

export const getTruck = createAsyncThunk(
  'trucks/getTruck',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/campers/${id}`);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

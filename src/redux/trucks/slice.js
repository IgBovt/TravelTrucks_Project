import { createSlice } from '@reduxjs/toolkit';
import { getAllTrucks, getTruck } from './operations';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    trucks: [],
    total: null,
    truck: null,
    loading: false,
  },
  reducers: {
    resetTruck: (state) => {
      state.truck = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(getAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload.total
        state.trucks = action.payload.items;

      })
      .addCase(getAllTrucks.rejected, state => {
        state.loading = false;
      })
      .addCase(getTruck.pending, state => {
        state.loading = true;
      })
      .addCase(getTruck.fulfilled, (state, action) => {
        state.loading = false;
        state.truck = action.payload;
      })
      .addCase(getTruck.rejected, state => {
        state.loading = false;
      }),
});

export default slice.reducer;
export const { resetTruck } = slice.actions;
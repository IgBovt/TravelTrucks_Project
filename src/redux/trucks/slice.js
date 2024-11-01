import { createSlice } from '@reduxjs/toolkit';
import { getAllTrucks, getTruck } from './operations';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    trucks: [],
    truck: null,
    loading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(getAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
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

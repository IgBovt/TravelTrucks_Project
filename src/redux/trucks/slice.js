import { createSlice } from '@reduxjs/toolkit';
import { getTrucks } from './operations';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    trucks: [],
    loading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(getTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(getTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.trucks.trucks = action.payload;
      })
      .addCase(getTrucks.rejected, state => {
        state.loading = false;
      }),
});

export default slice.reducer;

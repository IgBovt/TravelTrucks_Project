import { createSlice } from '@reduxjs/toolkit';
import { getAllTrucks, getTruck } from './operations';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    trucks: [],
    filteredTrucks: [],
    total: null,
    truck: null,
    loading: false,
    displayedTrucks: [],
    currentPage: 1,
    itemsPerPage: 4,
  },
  reducers: {
    resetTruck: state => {
      state.truck = null;
    },
    loadMoreTrucks: state => {
      const sourceTrucks =
        state.filteredTrucks.length > 0 ? state.filteredTrucks : state.trucks;

      const startIndex = state.currentPage * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      const newItems = sourceTrucks.slice(startIndex, endIndex);

      state.displayedTrucks = [...state.displayedTrucks, ...newItems];
      state.currentPage += 1;
    },
    resetDisplayedTrucks: state => {
      state.displayedTrucks = [];
      state.currentPage = 1;
    },
    changeFilter: (state, action) => {
      state.filteredTrucks = action.payload;
      state.displayedTrucks = action.payload.slice(0, state.itemsPerPage);
      state.currentPage = 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getAllTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(getAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.total = action.payload.total;
        state.trucks = action.payload.items || [];

        const initialItems = action.payload.items.slice(0, state.itemsPerPage);
        state.displayedTrucks = initialItems;
        state.currentPage = 1;
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
export const {
  resetTruck,
  loadMoreTrucks,
  resetDisplayedTrucks,
  changeFilter,
} = slice.actions;

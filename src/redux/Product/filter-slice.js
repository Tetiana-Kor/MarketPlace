import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    origins: [],
    minPrice: null,
    maxPrice: null,
    isEditable: true,
  },
  reducers: {
    filterCountries: (state, action) => {
      state.origins = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },
});

export const { filterCountries, setMinPrice, setMaxPrice } =
  filterSlice.actions;

export default filterSlice.reducer;

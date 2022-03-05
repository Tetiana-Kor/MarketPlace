import { createSlice } from '@reduxjs/toolkit';

import { fetchProductById } from './product-operations';

const productDetailsSlice = createSlice({
  name: 'productsDetails',
  initialState: {
    productDetails: {},
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProductById.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.productDetails = action.payload;
      state.status = 'success';
    },
    [fetchProductById.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default productDetailsSlice.reducer;

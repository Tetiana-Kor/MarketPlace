import { createSlice } from '@reduxjs/toolkit';

import { fetchProducts, addNewProduct } from './product-operations';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'rejected';
    },
    [addNewProduct.pending]: (state, action) => {
      state.status = 'pending';
    },
    [addNewProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload);
      state.status = 'success';
    },
    [addNewProduct.rejected]: (state, action) => {
      state.status = 'rejected';
    },
  },
});

export default productSlice.reducer;

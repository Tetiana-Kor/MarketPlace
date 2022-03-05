import * as API from '../../api/service-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await API.fetchAllProducts(params);
      return response.data.items;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductsById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await API.fetchProductsDetails(productId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addNewProduct = createAsyncThunk(
  'addNewProduct',
  async ({ name, price, origin }, { rejectWithValue }) => {
    const product = { name, price, origin };
    try {
      const response = await API.postProduct(product);
      return response.data;
    } catch (error) {
      console.log('rejectWithValue: ', error);
      return rejectWithValue(error);
    }
  },
);

// export const fetchOwnProducts = createAsyncThunk(
//   'myproducts/fetchOwnProducts',
//   async (params, { rejectWithValue }) => {
//     try {
//       const response = await API.fetchAllOwnProducts(params);
//       console.log('operation: ', response.data.items);

//       return response.data.items;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const fetchOwnProductsById = createAsyncThunk(
//   'myproducts/fetchOwnProductsById',
//   async (productId, { rejectWithValue }) => {
//     try {
//       const response = await API.fetchProductsDetails(productId);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const editProduct = createAsyncThunk(
  'myproducts/editProduct',
  async ({ productId, product }, { rejectWithValue }) => {
    try {
      const response = await API.updateProduct(productId, product);
      console.log('editProduct', response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const makeOrder = createAsyncThunk(
  'orders/postOrder',
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.postOrder(data);
      return response.data;
    } catch (error) {
      console.log('rejectWithValue: ', error);
      return rejectWithValue(error);
    }
  },
);

export const fetchOrder = createAsyncThunk(
  'orders/getOrder',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.getOrder();
      return response.data.items;
    } catch (error) {
      console.log('rejectWithValue: ', error);
      return rejectWithValue(error);
    }
  },
);

export const fetchOrderById = createAsyncThunk(
  'getOrderById',
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await API.orderDetails(orderId);
      console.log('getOrderById: ', response.data);
      return response.data;
    } catch (error) {
      console.log('rejectWithValue: ', error);
      return rejectWithValue(error);
    }
  },
);

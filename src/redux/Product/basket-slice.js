import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: localStorage.getItem('basket')
      ? JSON.parse(localStorage.getItem('basket'))
      : [],
  },

  reducers: {
    addProduct: (state, { payload }) => {
      const itemIndex = state.basket.findIndex(
        (item) => item.id === payload.id
      );

      if (itemIndex < 0) {
        const tempProduct = { ...payload, count: 1 };
        state.basket.push(tempProduct);
      } else {
        state.basket[itemIndex].count += 1;
      }

      localStorage.setItem('basket', JSON.stringify(state.basket));
    },

    removeProduct: (state, action) => {
      const newState = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
      state.basket = newState;
      localStorage.setItem('basket', JSON.stringify(state.basket));
    },

    decreaseProduct: (state, { payload }) => {
      const itemIndex = state.basket.findIndex(
        (item) => item.id === payload.id
      );

      if (state.basket[itemIndex].count > 1) {
        state.basket[itemIndex].count -= 1;
      } else if (state.basket[itemIndex].count === 1) {
        const newState = state.basket.filter((item) => item.id !== payload.id);
        state.basket = newState;
      }

      localStorage.setItem('basket', JSON.stringify(state.basket));
    },

    clearBasket: (state, { payload }) => {
      state.basket = [];
      localStorage.setItem('basket', JSON.stringify(state.basket));
    },
  },
});
export const { addProduct, removeProduct, decreaseProduct, clearBasket } =
  basketSlice.actions;

export default basketSlice.reducer;

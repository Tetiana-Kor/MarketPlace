import { combineReducers } from 'redux';
import productReducer from './Product/product-slice';
import basketReducer from './Product/basket-slice';
import filterReducer from './Product/filter-slice';
import productDetailsReducer from './Product/productDetails-slice';
// import changedProductReducer from './Product/ownProduct-slice';
// import orderReducer from './Product/order-slice';

const rootReducer = combineReducers({
  product: productReducer,
  productDetails: productDetailsReducer,
  basket: basketReducer,
  filter: filterReducer,
  // ownProduct: changedProductReducer,
  // orders: orderReducer,
});

export default rootReducer;

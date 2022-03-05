import ProductView from '../pages/ProductView';
import ProductSubView from '../pages/ProductSubView';
import Basket from '../pages/Basket';

import {
  BASKET_ROUTE,
  PRODUCTID_ROUTE,
  PRODUCT_ROUTE,
} from './constantsRoutes';

export const routes = [
  { path: PRODUCT_ROUTE, element: <ProductView /> },
  { path: PRODUCTID_ROUTE, element: <ProductSubView /> },
  { path: BASKET_ROUTE, element: <Basket /> },
];

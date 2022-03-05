export const getProducts = (state) => state.product.products;
export const getProductDetails = (state) => state.productDetails.productDetails;

export const getBasket = (state) => state.basket.basket;
export const getFilteredItems = (state) => state.filter;

export const getMyProduct = (state) => state.ownProduct.myproduct;
export const getMyProductDetails = (state) => state.ownProduct.myProductDetails;
export const changeProduct = (state) => state.ownProduct.changedProduct;

export const postOrders = (state) => state.orders.order;
export const getOrderById = (state) => state.orders.orderDetails;

export const setStatusProduct = (state) => state.product.status;
export const setStatusProductDetails = (state) => state.productDetails.status;
export const setStatusMyProduct = (state) => state.ownProduct.status;
export const setStatusOrder = (state) => state.order.status;

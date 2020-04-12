
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const addProduct = (id) => ({
  type: ADD_PRODUCT,
  id,
});

export const PLACE_ORDER = 'PLACE_ORDER';
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
export const PLACE_ORDER_FAIL = 'PLACE_ORDER_FAIL';

export const placeOrder = (data) => ({
  type: PLACE_ORDER,
  ...data,
});


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

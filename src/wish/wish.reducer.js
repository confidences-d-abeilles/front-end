import { ADD_PRODUCT, FETCH_PRODUCTS_SUCCESS } from './wish.actions';

const initialState = {
  products: [],
  cart: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.id]: (state.cart[action.id] || 0) + 1,
        },
      };
    default:
      return state;
  }
};


export default reducer;

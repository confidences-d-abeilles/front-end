import { FETCH_PRODUCTS_SUCCESS } from './wish.actions';

const initialState = {
  products: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
};


export default reducer;

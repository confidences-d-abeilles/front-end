import { FETCH_ORDERS_SUCCESS } from './orders.actions';

const initialState = {
  orders: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default reducer;

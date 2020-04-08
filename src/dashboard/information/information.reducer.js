import { FETCH_INFORMATION_SUCCESS } from './information.actions';

const initialState = {
  id: null,
  email: '',
  firstname: '',
  name: '',
  phone: '',
  deliveryAddress: null,
  billingAddress: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFORMATION_SUCCESS:
      return {
        ...action.user,
      };
    default:
      return state;
  }
};

export default reducer;

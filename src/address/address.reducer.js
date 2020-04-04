import { navigate } from '@reach/router';
import { SUBMIT_ADDRESS_FAIL, SUBMIT_ADDRESS_SUCCESS } from './address.actions';

const initialState = {
  error: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ADDRESS_SUCCESS:
      navigate('/dashboard');
      return {
        ...initialState,
      };
    case SUBMIT_ADDRESS_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};


export default reducer;

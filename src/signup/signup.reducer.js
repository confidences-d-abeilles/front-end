import { SIGNUP_FAIL, SIGNUP_SUCCESS } from './signup.actions';
import { navigate } from '@reach/router';

const initialState = {
  error: null,
  loading: false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      navigate('/login');
      return {
        ...state,
      };
    case SIGNUP_FAIL:
      return {
        error: action.message,
      };
    default:
      return state;
  }
};


export default reducer;

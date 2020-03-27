import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './login.actions';

const initialState = {
  email: '',
  password: '',
  loading: false,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return initialState;
    case LOGIN_FAIL:
      return { ...state, loading: false };
  }
  return state;
};

export default reducer;

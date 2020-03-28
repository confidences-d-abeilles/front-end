import {
  LOGIN, LOGIN_FAIL, LOGIN_RESUME, LOGIN_SUCCESS, LOGOUT,
} from './login.actions';

import client from '../utils/fetch';

const initialState = {
  email: '',
  password: '',
  loading: false,
  accessToken: null,
  refreshToken: null,
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        loading: true,
        message: initialState.message,
      };
    case LOGIN_RESUME:
      client.defaults.headers.common.Authorization = `Bearer ${state.accessToken}`;
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, message: action.message };
    case LOGOUT:
      return {
        ...state,
        accessToken: initialState.accessToken,
        refreshToken: initialState.refreshToken,
      };
    default:
      return state;
  }
};

export default reducer;

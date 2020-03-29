import {
  LOGIN, LOGIN_FAIL, LOGIN_RESUME, LOGIN_SUCCESS, LOGOUT,
} from './login.actions';

import client, { updateClientWithAuthorization } from '../utils/fetch';

const initialState = {
  email: '',
  password: '',
  loading: false,
  accessToken: null,
  refreshToken: null,
  message: null,
  roles: [],
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
      updateClientWithAuthorization(client, state.accessToken);
      return {
        ...state,
        loading: false,
      };
    case LOGIN_SUCCESS:
      updateClientWithAuthorization(client, action.accessToken);
      return {
        ...initialState,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        roles: action.roles,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, message: action.message };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;

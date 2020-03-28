import { decode } from 'jsonwebtoken';

import client, { updateClientWithAuthorization } from '../utils/fetch';
import { LOGIN_REFRESH_TOKEN, refreshTokenAction } from '../login/login.actions';

const authMiddleware = (store) => (next) => (action) => {
  const { getState } = store;
  const { login } = getState();
  const { accessToken, refreshToken } = login;
  if (!accessToken || !refreshToken || action.type === LOGIN_REFRESH_TOKEN) {
    return next(action);
  }

  const { exp } = decode(accessToken);
  const now = Date.now();
  if (exp * 1000 < now) {
    updateClientWithAuthorization(client);
    store.dispatch(refreshTokenAction(accessToken, refreshToken, action));
  }

  return next(action);
};

export default authMiddleware;

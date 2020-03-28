import { put, takeEvery } from 'redux-saga/effects';
import {
  LOGIN, LOGIN_FAIL, LOGIN_REFRESH_TOKEN, LOGIN_SUCCESS, LOGOUT,
} from './login.actions';

import client from '../utils/fetch';

function* login({ email, password }) {
  try {
    const { data: { accessToken, refreshToken } } = yield client.request({
      method: 'post',
      url: '/user/auth',
      data: {
        email,
        password,
      },
    });
    yield put({ type: LOGIN_SUCCESS, accessToken, refreshToken });
  } catch (e) {
    yield put({ type: LOGIN_FAIL, message: e.response.data });
  }
}

function* refresh({ accessToken, refreshToken, action }) {
  try {
    const { data: { accessToken: newAccessToken, refreshToken: newRefreshToken } } = yield client
      .request({
        method: 'post',
        url: '/user/renew',
        data: {
          accessToken,
          refreshToken,
        },
      });
    yield put({ type: LOGIN_SUCCESS, accessToken: newAccessToken, refreshToken: newRefreshToken });
    yield put(action);
  } catch (e) {
    yield put({ type: LOGIN_FAIL, message: e.response.data });
    yield put({ type: LOGOUT });
  }
}

function* loginSagas() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGIN_REFRESH_TOKEN, refresh);
}

export default loginSagas;

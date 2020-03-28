import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './login.actions';

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
    console.log(e);
    yield put({ type: LOGIN_FAIL, message: e.response.data });
  }
}

function* loginSagas() {
  yield takeEvery(LOGIN, login);
}

export default loginSagas;

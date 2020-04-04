import { put, takeEvery } from 'redux-saga/effects';
import { SIGNUP, SIGNUP_FAIL, SIGNUP_SUCCESS } from './signup.actions';
import client from '../utils/fetch';

function* signup({ data }) {
  try {
    if (data.password !== data.confirm) {
      throw new Error('Le mot de passe et sa confirmation ne sont pas identiques');
    }
    yield client.request({
      method: 'post',
      url: '/user/signup',
      data: {
        ...data,
      },
    });
    yield put({ type: SIGNUP_SUCCESS });
  } catch (e) {
    const apiMessage = e.response && e.response.data;
    yield put({ type: SIGNUP_FAIL, message: apiMessage || e.message });
  }
}

function* signupSagas() {
  yield takeEvery(SIGNUP, signup);
}

export default signupSagas;

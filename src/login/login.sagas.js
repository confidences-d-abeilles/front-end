import { put, takeEvery } from 'redux-saga/effects';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from './login.actions';


function* login() {
  try {
    yield put({ type: LOGIN_SUCCESS });
  } catch (e) {
    yield put({ type: LOGIN_FAIL });
  }
}

function* loginSagas() {
  yield takeEvery(LOGIN, login);
}

export default loginSagas;

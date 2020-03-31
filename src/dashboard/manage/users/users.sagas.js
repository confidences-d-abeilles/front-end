import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS } from './users.actions';
import client from '../../../utils/fetch';

function* fetchUsers() {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: '/user/all',
    });
    yield put({ type: FETCH_USERS_SUCCESS, users: data });
  } catch (e) {
    yield put({ type: FETCH_USERS_FAIL });
  }
}

function* usersSagas() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}

export default usersSagas;

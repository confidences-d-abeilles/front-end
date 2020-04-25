import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_USER, FETCH_USER_FAIL, FETCH_USER_SUCCESS } from './editUser.actions';
import client from '../../../../utils/fetch';


function* fetchUserSagas({ id }) {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: `/user/${id}`,
    });
    yield put({ type: FETCH_USER_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_USER_FAIL });
  }
}


function* editUserSagas() {
  yield takeEvery(FETCH_USER, fetchUserSagas);
}

export default editUserSagas;

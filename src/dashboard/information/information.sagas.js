
import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_INFORMATION, FETCH_INFORMATION_FAIL, FETCH_INFORMATION_SUCCESS } from './information.actions';
import client from '../../utils/fetch';

function* fetchInformation() {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: '/user',
    });
    yield put({ type: FETCH_INFORMATION_SUCCESS, user: data });
  } catch (e) {
    yield put({ type: FETCH_INFORMATION_FAIL });
  }
}

function* informationSagas() {
  yield takeEvery(FETCH_INFORMATION, fetchInformation);
}

export default informationSagas;

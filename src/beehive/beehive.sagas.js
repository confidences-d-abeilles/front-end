
import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_BEEHIVE, FETCH_BEEHIVE_FAIL, FETCH_BEEHIVE_SUCCESS } from './beehive.actions';
import client from '../utils/fetch';

function* fetchBeehive({ id }) {
  console.log(id);
  try {
    const { data } = yield client.request({
      method: 'get',
      url: `/beehive/${id}`,
    });
    yield put({ type: FETCH_BEEHIVE_SUCCESS, beehive: data });
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    yield put({ type: FETCH_BEEHIVE_FAIL });
  }
}

function* beehiveSagas() {
  yield takeEvery(FETCH_BEEHIVE, fetchBeehive);
}

export default beehiveSagas;

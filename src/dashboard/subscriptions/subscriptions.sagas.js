
import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_SUBSCRIPTONS, FETCH_SUBSCRIPTONS_FAIL, FETCH_SUBSCRIPTONS_SUCCESS } from './subscriptions.actions';
import client from '../../utils/fetch';

function* fetchSubscriptions() {
  try {
    const { data } = yield client.request({
      url: '/subscription',
      method: 'get',
    });
    yield put({ type: FETCH_SUBSCRIPTONS_SUCCESS, subscriptions: data });
  } catch (e) {
    yield put({ type: FETCH_SUBSCRIPTONS_FAIL });
  }
}

function* subscriptionsSaga() {
  yield takeEvery(FETCH_SUBSCRIPTONS, fetchSubscriptions);
}

export default subscriptionsSaga;

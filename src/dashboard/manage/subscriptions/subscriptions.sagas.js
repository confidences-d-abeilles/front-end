import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_SUBSCRIPTIONS, FETCH_SUBSCRIPTIONS_FAIL, FETCH_SUBSCRIPTIONS_SUCCESS } from './subscriptions.actions';
import client from '../../../utils/fetch';

function* fetchSubscriptions() {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: '/subscription/all',
    });
    yield put({ type: FETCH_SUBSCRIPTIONS_SUCCESS, subscriptions: data });
  } catch (e) {
    yield put({ type: FETCH_SUBSCRIPTIONS_FAIL });
  }
}

function* subscriptionsSagas() {
  yield takeEvery(FETCH_SUBSCRIPTIONS, fetchSubscriptions);
}

export default subscriptionsSagas;

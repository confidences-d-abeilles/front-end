
import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_ORDERS, FETCH_ORDERS_FAIL, FETCH_ORDERS_SUCCESS } from './orders.actions';
import client from '../../utils/fetch';

function* fetchOrders() {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: '/order',
    });
    yield put({ type: FETCH_ORDERS_SUCCESS, orders: data });
  } catch (e) {
    yield put({ type: FETCH_ORDERS_FAIL });
  }
}

function* ordersSaga() {
  yield takeEvery(FETCH_ORDERS, fetchOrders);
}

export default ordersSaga;

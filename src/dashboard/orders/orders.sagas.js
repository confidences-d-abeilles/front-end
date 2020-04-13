
import { loadStripe } from '@stripe/stripe-js';
import { put, takeEvery } from 'redux-saga/effects';
import { CHECKOUT, FETCH_ORDERS, FETCH_ORDERS_FAIL, FETCH_ORDERS_SUCCESS } from './orders.actions';
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

function* checkout({ id }) {
  try {
    const stripe = yield loadStripe('pk_test_s7BlNGEVT1AouDdu9gEcxcx600PKi9gxkV');
    const { data } = yield client.request({
      method: 'post',
      url: `/order/checkout/${id}`,
    });
    yield stripe.redirectToCheckout({
      sessionId: data.id,
    });
  } catch (e) {
    console.error(e);
  }
}

function* ordersSaga() {
  yield takeEvery(FETCH_ORDERS, fetchOrders);
  yield takeEvery(CHECKOUT, checkout);
}

export default ordersSaga;

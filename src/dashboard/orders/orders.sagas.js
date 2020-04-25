
import { loadStripe } from '@stripe/stripe-js';
import { takeEvery } from 'redux-saga/effects';
import { CHECKOUT } from './orders.actions';
import client from '../../utils/fetch';


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
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

function* ordersSaga() {
  yield takeEvery(CHECKOUT, checkout);
}

export default ordersSaga;

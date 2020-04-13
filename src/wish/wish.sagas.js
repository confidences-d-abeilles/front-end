import { put, takeEvery, select } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS, FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS, PLACE_ORDER, PLACE_ORDER_FAIL,
} from './wish.actions';
import { getCart } from './wish.selectors';
import client from '../utils/fetch';

function* fetchProducts() {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: '/product',
    });
    yield put({ type: FETCH_PRODUCTS_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_PRODUCTS_FAIL });
  }
}

function* placeOrder() {
  try {
    const cart = yield select(getCart);
    yield client.request({
      method: 'post',
      url: '/order',
      data: {
        products: cart,
      },
    });
  } catch (e) {
    console.error(e);
    yield put({ type: PLACE_ORDER_FAIL });
  }
}

function* wishSagas() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
  yield takeEvery(PLACE_ORDER, placeOrder);
}


export default wishSagas;

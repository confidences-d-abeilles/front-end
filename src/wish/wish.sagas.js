import { put, takeEvery } from 'redux-saga/effects';
import { FETCH_PRODUCTS, FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS } from './wish.actions';
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

function* wishSagas() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}

export default wishSagas;

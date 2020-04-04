import { put, takeEvery } from 'redux-saga/effects';
import { SUBMIT_ADDRESS, SUBMIT_ADDRESS_FAIL, SUBMIT_ADDRESS_SUCCESS } from './address.actions';
import client from '../utils/fetch';

function* submitAddress({ data }) {
  try {
    yield client.request({
      method: 'post',
      url: 'address/delivery',
      data,
    });
    yield put({ type: SUBMIT_ADDRESS_SUCCESS });
  } catch (e) {
    yield put({ type: SUBMIT_ADDRESS_FAIL, error: e.response && e.response.data });
  }
}

function* addressSagas() {
  yield takeEvery(SUBMIT_ADDRESS, submitAddress);
}

export default addressSagas;

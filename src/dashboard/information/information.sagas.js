
import { put, takeEvery } from 'redux-saga/effects';
import pick from 'ramda/src/pick';
import {
  EDIT_INFORMATION, EDIT_INFORMATION_FAIL, EDIT_INFORMATION_SUCCESS,
} from './information.actions';
import client from '../../utils/fetch';

function* editInformation(data) {
  try {
    const fields = ['name', 'firstname', 'email', 'phone'];
    yield client.request({
      method: 'patch',
      url: '/user',
      data: pick(fields, data),
    });
    yield put({ type: EDIT_INFORMATION_SUCCESS, user: data });
  } catch (e) {
    yield put({ type: EDIT_INFORMATION_FAIL });
  }
}

function* informationSagas() {
  yield takeEvery(EDIT_INFORMATION, editInformation);
}

export default informationSagas;

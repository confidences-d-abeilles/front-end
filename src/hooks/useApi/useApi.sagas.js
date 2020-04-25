import { put, takeEvery } from 'redux-saga/effects';
import client from '../../utils/fetch';
import { FETCH_DATA_REGEX, fetchDataFail, fetchDataSuccess } from './useApi.actions';

function* fetch({ resource, id }) {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: id === 'mine' ? resource : `${resource}/${id}`,
    });
    yield put(fetchDataSuccess(resource, id, data));
  } catch (e) {
    yield put(fetchDataFail(resource, id));
  }
}

function* useApiSagas() {
  yield takeEvery((action) => FETCH_DATA_REGEX.test(action.type), fetch);
}

export default useApiSagas;

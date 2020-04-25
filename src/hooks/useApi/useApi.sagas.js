import { put, takeEvery } from 'redux-saga/effects';
import client from '../../utils/fetch';
import { fetchDataFail, fetchDataSuccess, matchFetch } from './useApi.actions';

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
  yield takeEvery((action) => matchFetch(action.type), fetch);
}

export default useApiSagas;


import { put, takeEvery } from 'redux-saga/effects';
import {
  CREATE_BEEHIVE,
  CREATE_BEEHIVE_FAIL,
  CREATE_BEEHIVE_SUCCESS,
  FETCH_BEEHIVES,
  FETCH_BEEHIVES_FAIL,
  FETCH_BEEHIVES_SUCCESS
} from './beehives.actions';
import client from '../../../utils/fetch';

function* fetchBeehives({ search }) {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: search ? `/beehive/search/${search}` : '/beehive',
    });
    yield put({ type: FETCH_BEEHIVES_SUCCESS, beehives: data });
  } catch (e) {
    yield put({ type: FETCH_BEEHIVES_FAIL });
  }
}

function* createBeehive({ name }) {
  try {
    yield client.request({
      method: 'post',
      url: '/beehive',
      data: {
        name,
      },
    });
    yield put({ type: CREATE_BEEHIVE_SUCCESS });
    yield put({ type: FETCH_BEEHIVES });
  } catch (e) {
    yield put({ type: CREATE_BEEHIVE_FAIL });
  }
}

function* beehivesSagas() {
  yield takeEvery(FETCH_BEEHIVES, fetchBeehives);
  yield takeEvery(CREATE_BEEHIVE, createBeehive);
}

export default beehivesSagas;

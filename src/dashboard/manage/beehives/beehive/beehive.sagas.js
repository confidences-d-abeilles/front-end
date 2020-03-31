import { put, takeEvery } from 'redux-saga/effects';
import {
  FETCH_MANAGE_BEEHIVE,
  FETCH_MANAGE_BEEHIVE_FAIL,
  FETCH_MANAGE_BEEHIVE_SUCCESS, fetchManageBeehiveAction, SAVE_NEWS, SAVE_NEWS_FAIL, SAVE_NEWS_SUCCESS,
  UPDATE_BEEHIVE, UPDATE_BEEHIVE_FAIL, UPDATE_BEEHIVE_SUCCESS, UPLOAD_BEEHIVE,
} from './beehive.actions';
import client from '../../../../utils/fetch';

function* fetchBeehive({ id }) {
  try {
    const { data } = yield client.request({
      method: 'get',
      url: `/beehive/${id}`,
    });
    yield put({ type: FETCH_MANAGE_BEEHIVE_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCH_MANAGE_BEEHIVE_FAIL });
  }
}

function* updateBeehive({ data, id }) {
  try {
    yield client.request({
      method: 'patch',
      url: `/beehive/${id}`,
      data,
    });
    yield put({ type: UPDATE_BEEHIVE_SUCCESS });
    yield put(fetchManageBeehiveAction(id));
  } catch (e) {
    yield put({ type: UPDATE_BEEHIVE_FAIL });
    yield put(fetchManageBeehiveAction(id));
  }
}

function* uploadImg({ files, id }) {
  try {
    const data = new FormData();
    files.forEach((file) => data.append('images', file));

    yield client.request({
      method: 'post',
      url: `/file/beehive/${id}`,
      data,
      timeout: 30000,
    });
  } catch (e) {
    console.error(e);
  }
}

function* saveNews({ data, beehiveId }) {
  try {
    const { title, content, id } = data;
    yield client.request({
      method: id ? 'put' : 'post',
      url: id ? `/news/${id}` : '/news',
      data: {
        title,
        content,
        beehive: beehiveId,
      },
    });
    yield put(fetchManageBeehiveAction(beehiveId));
    yield put({ type: SAVE_NEWS_SUCCESS });
  } catch (e) {
    console.error(e);
    yield put({ type: SAVE_NEWS_FAIL });
  }
}

function* beehiveSagas() {
  yield takeEvery(FETCH_MANAGE_BEEHIVE, fetchBeehive);
  yield takeEvery(UPDATE_BEEHIVE, updateBeehive);
  yield takeEvery(UPLOAD_BEEHIVE, uploadImg);
  yield takeEvery(SAVE_NEWS, saveNews);
}

export default beehiveSagas;

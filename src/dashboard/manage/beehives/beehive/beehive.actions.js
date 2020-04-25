
export const UPDATE_BEEHIVE = 'UPDATE_BEEHIVE';
export const UPDATE_BEEHIVE_SUCCESS = 'UPDATE_BEEHIVE_SUCCESS';
export const UPDATE_BEEHIVE_FAIL = 'UPDATE_BEEHIVE_FAIL';

export const UPLOAD_BEEHIVE = 'UPLOAD_BEEHIVE';
export const UPLOAD_BEEHIVE_SUCCESS = 'UPLOAD_BEEHIVE_SUCCESS';
export const UPLOAD_BEEHIVE_FAIL = 'UPLOAD_BEEHIVE_FAIL';

export const SAVE_NEWS = 'SAVE_NEWS';
export const SAVE_NEWS_SUCCESS = 'SAVE_NEWS_SUCCESS';
export const SAVE_NEWS_FAIL = 'SAVE_NEWS_FAIL';

export const updateBeehive = (id, data) => ({
  type: UPDATE_BEEHIVE,
  id,
  data,
});

export const uploadBeehiveAction = (id, files) => ({
  type: UPLOAD_BEEHIVE,
  files,
  id,
});

export const saveNews = (beehiveId, data) => ({
  type: SAVE_NEWS,
  beehiveId,
  data,
});

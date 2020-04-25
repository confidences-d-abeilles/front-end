
const FETCH_DATA_REGEX = /^useApi\/FETCH_[^_\W]*_[^_\W]*$/;
export const matchFetch = (str) => FETCH_DATA_REGEX.test(str);

export const fetchData = (resource, id) => ({
  type: `useApi/FETCH_${resource}_${id}`,
  resource,
  id,
});

const FETCH_DATA_REGEX_SUCCESS = /^useApi\/FETCH_[^_\W]*_[^_\W]*_SUCCESS$/;
export const matchFetchSuccess = (str) => FETCH_DATA_REGEX_SUCCESS.test(str);

export const fetchDataSuccess = (resource, id, data) => ({
  type: `useApi/FETCH_${resource}_${id}_SUCCESS`,
  resource,
  id,
  data,
});

export const fetchDataFail = (resource, id) => ({
  type: `useApi/FETCH_${resource}_${id}_FAIL`,
  resource,
  id,
});

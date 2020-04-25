
export const FETCH_INFORMATION = 'FETCH_INFORMATION';
export const FETCH_INFORMATION_SUCCESS = 'FETCH_INFORMATION_SUCCESS';
export const FETCH_INFORMATION_FAIL = 'FETCH_INFORMATION_FAIL';

export const fetchInformation = () => ({
  type: FETCH_INFORMATION,
});

export const EDIT_INFORMATION = 'EDIT_INFORMATION';
export const EDIT_INFORMATION_SUCCESS = 'EDIT_INFORMATION_SUCCESS';
export const EDIT_INFORMATION_FAIL = 'EDIT_INFORMATION_FAIL';

export const updateInformation = (data) => ({
  type: EDIT_INFORMATION,
  ...data,
});

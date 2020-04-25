
export const EDIT_INFORMATION = 'EDIT_INFORMATION';
export const EDIT_INFORMATION_SUCCESS = 'EDIT_INFORMATION_SUCCESS';
export const EDIT_INFORMATION_FAIL = 'EDIT_INFORMATION_FAIL';

export const updateInformation = (data) => ({
  type: EDIT_INFORMATION,
  ...data,
});

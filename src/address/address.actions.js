export const SUBMIT_ADDRESS = 'SUBMIT_ADDRESS';
export const SUBMIT_ADDRESS_SUCCESS = 'SUBMIT_ADDRESS_SUCCESS';
export const SUBMIT_ADDRESS_FAIL = 'SUBMIT_ADDRESS_FAIL';

export const submitAddress = (data) => ({
  type: SUBMIT_ADDRESS,
  data,
});

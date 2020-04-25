
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';

export const fetchUser = (id) => {
  if (!id) {
    throw new Error('Missing id in fetchUser action');
  }
  return ({
    type: FETCH_USER,
    id,
  });
};

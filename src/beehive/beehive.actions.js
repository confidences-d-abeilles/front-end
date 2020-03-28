
export const FETCH_BEEHIVE = 'FETCH_BEEHIVE';
export const FETCH_BEEHIVE_SUCCESS = 'FETCH_BEEHIVE_SUCCESS';
export const FETCH_BEEHIVE_FAIL = 'FETCH_BEEHIVE_FAIL';

export const fetchBeehiveAction = (id) => ({
  type: FETCH_BEEHIVE,
  id,
});

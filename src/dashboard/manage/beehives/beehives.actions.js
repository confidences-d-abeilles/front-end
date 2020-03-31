
export const FETCH_BEEHIVES = 'FETCH_BEEHIVES';
export const FETCH_BEEHIVES_SUCCESS = 'FETCH_BEEHIVES_SUCCESS';
export const FETCH_BEEHIVES_FAIL = 'FETCH_BEEHIVES_FAIL';

export const CREATE_BEEHIVE = 'CREATE_BEEHIVE';
export const CREATE_BEEHIVE_SUCCESS = 'CREATE_BEEHIVE_SUCCESS';
export const CREATE_BEEHIVE_FAIL = 'CREATE_BEEHIVE_FAIL';

export const fetchBeehivesAction = (search) => ({
  type: FETCH_BEEHIVES,
  search,
});

export const createBeehiveAction = (name) => ({
  type: CREATE_BEEHIVE,
  name,
});

import { fetchData, fetchDataFail, fetchDataSuccess, matchFetch, matchFetchSuccess } from '../useApi.actions';

jest.unmock('../useApi.actions');

const SAMPLE_GOOD_FETCH = 'useApi/FETCH_user_26';
const SAMPLE_BAD_FETCH = 'useApi/FETCH_user_26_SUCCESS';

describe('matchFetch', () => {
  it(`should match with ${SAMPLE_GOOD_FETCH}`, () => {
    expect(matchFetch(SAMPLE_GOOD_FETCH)).toBe(true);
  });

  it(`should match with ${SAMPLE_BAD_FETCH}`, () => {
    expect(matchFetch(SAMPLE_BAD_FETCH)).toBe(false);
  });

  it('should match without params', () => {
    expect(matchFetch()).toBe(false);
  });
});


const SAMPLE_GOOD_FETCH_SUCCESS = 'useApi/FETCH_user_26_SUCCESS';
const SAMPLE_BAD_FETCH_SUCCESS = 'useApi/FETCH_user_26';

describe('matchFetchSuccess', () => {
  it(`should match with ${SAMPLE_GOOD_FETCH_SUCCESS}`, () => {
    expect(matchFetchSuccess(SAMPLE_GOOD_FETCH_SUCCESS)).toBe(true);
  });

  it(`should not match with ${SAMPLE_BAD_FETCH_SUCCESS}`, () => {
    expect(matchFetchSuccess(SAMPLE_BAD_FETCH_SUCCESS)).toBe(false);
  });

  it('should not match without params', () => {
    expect(matchFetchSuccess()).toBe(false);
  });
});

const resource = 'beehive';
const id = '21';

const PROPERLY_FORMATTED_FETCH_ACTION = {
  type: `useApi/FETCH_${resource}_${id}`,
  resource,
  id,
};

describe('fetchData', () => {
  it('should create a properly formatted action', () => {
    expect(fetchData(resource, id)).toStrictEqual(PROPERLY_FORMATTED_FETCH_ACTION);
  });
});

const data = {
  id,
  name: 'flower',
};

const PROPERLY_FORMATTED_FETCH_SUCCESS_ACTION = {
  type: `useApi/FETCH_${resource}_${id}_SUCCESS`,
  resource,
  id,
  data,
};

describe('fetchDataSuccess', () => {
  it('should create a properly formatted action', () => {
    expect(fetchDataSuccess(resource, id, data)).toStrictEqual(PROPERLY_FORMATTED_FETCH_SUCCESS_ACTION);
  });
});

const PROPERLY_FORMATTED_FETCH_ACTION_FAIL = {
  type: `useApi/FETCH_${resource}_${id}_FAIL`,
  resource,
  id,
};

describe('fetchDataFail', () => {
  it('should create a properly formatted action', () => {
    expect(fetchDataFail(resource, id)).toStrictEqual(PROPERLY_FORMATTED_FETCH_ACTION_FAIL);
  });
});

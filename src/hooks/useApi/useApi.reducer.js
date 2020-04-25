import { matchFetchSuccess } from './useApi.actions';

const initialState = {
};


const reducer = (state = initialState, action) => {
  const {
    resource, id, data, type,
  } = action;
  switch (true) {
    case matchFetchSuccess(type):
      return {
        ...state,
        [resource]: {
          [id]: data,
        },
      };
    default:
      return state;
  }
};


export default reducer;

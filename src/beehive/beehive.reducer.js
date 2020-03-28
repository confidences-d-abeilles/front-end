import { FETCH_BEEHIVE_SUCCESS } from './beehive.actions';

const initialState = {
  name: null,
  news: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BEEHIVE_SUCCESS:
      return {
        ...state,
        ...action.beehive,
      };
    default:
      return state;
  }
};

export default reducer;

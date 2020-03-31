import { FETCH_MANAGE_BEEHIVE, FETCH_MANAGE_BEEHIVE_SUCCESS } from './beehive.actions';

const initialState = {
  data: null,
  loading: false,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANAGE_BEEHIVE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MANAGE_BEEHIVE_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;

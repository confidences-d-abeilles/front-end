import { FETCH_BEEHIVES_SUCCESS } from './beehives.actions';

const initialState = {
  beehives: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEEHIVES_SUCCESS:
      return {
        ...state,
        beehives: action.beehives,
      };
    default:
      return state;
  }
};


export default reducer;

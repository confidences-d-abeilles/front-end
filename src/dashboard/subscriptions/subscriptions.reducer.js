import { FETCH_SUBSCRIPTONS_SUCCESS } from './subscriptions.actions';

const initialState = {
  subscriptions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUBSCRIPTONS_SUCCESS:
      return {
        ...state,
        subscriptions: action.subscriptions,
      };
    default:
      return state;
  }
};

export default reducer;

import { FETCH_USERS_SUCCESS } from './users.actions';

const initialState = {
  users: [],
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.users };
    default:
      return state;
  }
};


export default reducer;

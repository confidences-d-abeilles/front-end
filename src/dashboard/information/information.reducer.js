import { FETCH_INFORMATION_SUCCESS } from './information.actions';

const initialState = {
  email: '',
  firstname: '',
  name: '',
  phone: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INFORMATION_SUCCESS:
      return {
        ...action.user,
      };
    default:
      return state;
  }
};

export default reducer;

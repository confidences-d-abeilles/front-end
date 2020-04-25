import
{ combineReducers } from 'redux';

import login from './login/login.reducer';
import information from './dashboard/information/information.reducer';
import beehives from './dashboard/manage/beehives/beehives.reducer';
import signup from './signup/signup.reducer';
import address from './address/address.reducer';
import wish from './wish/wish.reducer';
import useApi from './hooks/useApi/useApi.reducer';

const rootReducer = combineReducers({
  login,
  information,
  beehives,
  signup,
  address,
  wish,
  useApi,
});

export default rootReducer;

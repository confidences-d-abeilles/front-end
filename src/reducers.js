import { combineReducers } from 'redux';

import login from './login/login.reducer';
import information from './dashboard/information/information.reducer';
import subscriptions from './dashboard/subscriptions/subscriptions.reducer';

const rootReducer = combineReducers({
  login,
  information,
  subscriptions,
});

export default rootReducer;

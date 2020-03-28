import { combineReducers } from 'redux';

import login from './login/login.reducer';
import information from './dashboard/information/information.reducer';
import subscriptions from './dashboard/subscriptions/subscriptions.reducer';
import orders from './dashboard/orders/orders.reducer';
import beehive from './beehive/beehive.reducer';

const rootReducer = combineReducers({
  login,
  information,
  subscriptions,
  orders,
  beehive,
});

export default rootReducer;

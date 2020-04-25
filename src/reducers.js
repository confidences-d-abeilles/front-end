import
{ combineReducers } from 'redux';

import login from './login/login.reducer';
import information from './dashboard/information/information.reducer';
import subscriptions from './dashboard/subscriptions/subscriptions.reducer';
import orders from './dashboard/orders/orders.reducer';
import beehive from './beehive/beehive.reducer';
import beehives from './dashboard/manage/beehives/beehives.reducer';
import users from './dashboard/manage/users/users.reducer';
import manageBeehive from './dashboard/manage/beehives/beehive/beehive.reducer';
import signup from './signup/signup.reducer';
import address from './address/address.reducer';
import wish from './wish/wish.reducer';
import manageSubscriptions from './dashboard/manage/subscriptions/subscriptions.reducer';

const rootReducer = combineReducers({
  login,
  information,
  subscriptions,
  beehive,
  orders,
  beehives,
  users,
  manageBeehive,
  signup,
  address,
  wish,
  manageSubscriptions,
});

export default rootReducer;

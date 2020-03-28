
import { all } from 'redux-saga/effects';

import loginSagas from './login/login.sagas';
import informationSagas from './dashboard/information/information.sagas';
import subscriptionsSagas from './dashboard/subscriptions/subscriptions.sagas';
import ordersSagas from './dashboard/orders/orders.sagas';
import beehiveSagas from './beehive/beehive.sagas';

export default function* rootSaga() {
  yield all([
    loginSagas(),
    informationSagas(),
    subscriptionsSagas(),
    ordersSagas(),
    beehiveSagas(),
  ]);
}

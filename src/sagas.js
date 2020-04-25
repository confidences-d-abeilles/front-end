
import { all } from 'redux-saga/effects';

import loginSagas from './login/login.sagas';
import informationSagas from './dashboard/information/information.sagas';
import ordersSagas from './dashboard/orders/orders.sagas';
import beehivesSagas from './dashboard/manage/beehives/beehives.sagas';
import beehiveManageSagas from './dashboard/manage/beehives/beehive/beehive.sagas';
import signupSagas from './signup/signup.sagas';
import addressSagas from './address/address.sagas';
import wishSagas from './wish/wish.sagas';
import useApiSagas from './hooks/useApi/useApi.sagas';

export default function* rootSaga() {
  yield all([
    loginSagas(),
    informationSagas(),
    ordersSagas(),
    beehivesSagas(),
    beehiveManageSagas(),
    signupSagas(),
    addressSagas(),
    wishSagas(),
    useApiSagas(),
  ]);
}

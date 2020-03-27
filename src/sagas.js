
import { all } from 'redux-saga/effects';

import loginSagas from './login/login.sagas';

export default function* rootSaga() {
  yield all([
    loginSagas(),
  ]);
}

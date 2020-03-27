import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'emotion-theming';
import theme from '@cda/theme';
import { Router } from '@reach/router';

import Login from './login/login';
import SignUp from './signup/signup';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router><Login path="/login" /></Router>
      <Router><SignUp path="/signup" /></Router>
    </ThemeProvider>
  </Provider>
);

export default render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

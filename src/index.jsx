import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { connect, Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@cda/theme';
import { Router } from '@reach/router';

import Login from './login/login';
import SignUp from './signup/signup';
import rootReducer from './reducers';
import rootSaga from './sagas';
import { loginResume as loginResumeAction } from './login/login.actions';
import Dashboard from './dashboard/dashboard';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const App = ({ loginResume }) => {
  useEffect(() => {
    loginResume();
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Router>
          <Login path="login" />
          <SignUp path="signup" />
          <Dashboard path="dashboard/*" />
        </Router>
      </ThemeProvider>
    </PersistGate>
  );
};

App.propTypes = {
  loginResume: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProp = (dispatch) => ({
  loginResume: () => dispatch(loginResumeAction()),
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProp)(App);

export default render(<Provider store={store}><ConnectedApp /></Provider>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@cda/theme';
import { Router } from '@reach/router';
import loadable from '@loadable/component';

import { loginResume as loginResumeAction } from './login/login.actions';
import { store, persistor } from './redux';
import ErrorBoundary from './utils/errorBoundary';

const Dashboard = loadable(() => import(/* webpackChunkName: "dashboard" */ './dashboard/dashboard'));
const Beehive = loadable(() => import(/* webpackChunkName: "beehive" */ './beehive/beehive'));
const Address = loadable(() => import(/* webpackChunkName: "address" */ './address/address'));
const Wish = loadable(() => import(/* webpackChunkName: "wish" */ './wish/wish'));
const Login = loadable(() => import(/* webpackChunkName: "login" */ './login/login'));
const SignUp = loadable(() => import(/* webpackChunkName: "signup" */ './signup/signup'));

const App = ({ loginResume }) => {
  useEffect(() => {
    loginResume();
  }, []);

  return (
    <ErrorBoundary>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Router>
            <Login path="/" />
            <SignUp path="/signup" />
            <Address path="/address" />
            <Wish path="/wish" />
            <Dashboard path="/dashboard/*" />
            <Beehive path="/beehive/:beehiveId" />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </ErrorBoundary>
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

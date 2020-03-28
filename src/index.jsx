import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@cda/theme';
import { Router } from '@reach/router';

import Login from './login/login';
import SignUp from './signup/signup';
import { loginResume as loginResumeAction } from './login/login.actions';
import Dashboard from './dashboard/dashboard';
import { store, persistor } from './redux';
import Beehive from './beehive/beehive';


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
          <Beehive path="beehive/:beehiveId" />
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

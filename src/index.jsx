import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import theme from '@cda/theme';
import { Router } from '@reach/router';

import Login from './login/login';
import Signup from './signup/signup';


const store = createStore(null);

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router><Login path="/login" /></Router>
      <Router><Signup path="/signup" /></Router>
    </ThemeProvider>
  </Provider>
);

export default render(<App />, document.getElementById('root'));

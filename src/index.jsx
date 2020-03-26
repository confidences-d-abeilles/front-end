import React from 'react';
import { render } from 'react-dom';
import Login from './login/login';
import { ThemeProvider } from 'emotion-theming';
import theme from '@cda/theme';

const App = () => <ThemeProvider theme={theme}><Login /></ThemeProvider>;

export default render(<App />, document.getElementById('root'));
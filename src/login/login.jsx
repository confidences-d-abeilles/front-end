import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@cda/input';
import Button from '@cda/button';
import { Rows, Item } from '@cda/flex';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import useInput from '../hooks/useInput';
import { loginAction } from './login.actions';
import { getLogin } from './login.selectors.js';

const CustomRows = styled(Rows)`
  height: 100vh;
`;

const Login = () => {
  const dispatch = useDispatch();
  const { message, accessToken, loading, initialEmail, initialPassword } = useSelector(getLogin);
  const [email, handleEmail, setEmail] = useInput(initialEmail);
  const [password, handlePassword, setPassword] = useInput(initialPassword);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  }, [email, password]);

  useEffect(() => {
    setEmail(initialEmail);
    setPassword(initialPassword);
  }, [initialEmail, initialPassword]);

  return (
    <CustomRows justifyContent="center" alignItems="center">
      <Item>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <Input type="text" placeholder="email" onChange={handleEmail} value={email} disabled={loading} />
          <Input type="password" placeholder="password" onChange={handlePassword} value={password} disabled={loading} />
          <Button type="submit" disabled={loading}>Valider</Button>{message}
        </form>
        <Link to="/signup">Pas encore de compte</Link>
      </Item>
    </CustomRows>
  );
};

export default Login;


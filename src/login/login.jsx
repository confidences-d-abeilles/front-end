import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '@cda/input';
import Button from '@cda/button';
import { Rows, Item } from '@cda/flex';
import styled from '@emotion/styled';
import { Link, navigate } from '@reach/router';

import useInput from '../hooks/useInput';
import { loginAction } from './login.actions';

const CustomRows = styled(Rows)`
  height: 100vh;
`;

const Login = ({
  loginAction: login, loading, email: initialEmail, password: initialPassword, message, accessToken,
}) => {
  const [email, handleEmail, setEmail] = useInput(initialEmail);
  const [password, handlePassword, setPassword] = useInput(initialPassword);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    login(email, password);
  }, [email, password]);

  useEffect(() => {
    setEmail(initialEmail);
    setPassword(initialPassword);
  }, [initialEmail, initialPassword]);

  useEffect(() => {
    if (accessToken) {
      navigate('/dashboard');
    }
  }, accessToken);

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

const mapStateToProps = ({ login }) => ({
  ...login,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (email, password) => dispatch(loginAction(email, password)),
});

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

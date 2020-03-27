import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '@cda/input';
import Button from '@cda/button';
import { Rows, Item } from '@cda/flex';
import styled from '@emotion/styled';
import { Link } from '@reach/router';

import useInput from '../hooks/useInput';
import { login } from './login.actions';

const CustomRows = styled(Rows)`
  height: 100vh;
`;

const Login = ({ loginAction, loading }) => {
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    loginAction(email, password);
  }, [email, password]);

  return (
    <CustomRows justifyContent="center" alignItems="center">
      <Item>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <Input type="text" placeholder="email" onChange={handleEmail} value={email} disabled={loading} />
          <Input type="password" placeholder="password" onChange={handlePassword} value={password} disabled={loading} />
          <Button type="submit" disabled={loading}>Valider</Button>
        </form>
        <Link to="/signup">Pas encore de compte</Link>
      </Item>
    </CustomRows>
  );
};

const mapStateToProps = ({ login: { loading } }) => ({
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (email, password) => dispatch(login(email, password)),
});

Login.propTypes = {
  loginAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

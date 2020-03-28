import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import { connect } from 'react-redux';
import { navigate, Link, Router } from '@reach/router';

import Information from './information/information';
import Subscriptions from './subscriptions/subscriptions';
import { logoutAction } from '../login/login.actions';

const Dashboard = ({ logout, isLoggedIn }) => {
  const logoutHandler = useCallback(() => {
    logout();
  }, [logout]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Button onClick={logoutHandler} type="button">Deconnexion</Button>
      <br />
      <Link to="/dashboard/subscriptions"><Button type="button">Mes parrainages</Button></Link>
      <br />
      <Link to="/dashboard/orders"><Button type="button">Mes commandes</Button></Link>
      <br />
      <Link to="/dashboard/information"><Button type="button">Mes informations</Button></Link>
      <br />
      <Link to="/dashboard/account"><Button type="button">Mon compte</Button></Link>
      <br />

      <Router>
        <Information path="information" />
        <Subscriptions path="subscriptions" />
      </Router>
    </>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => ({
  isLoggedIn: Boolean(login.accessToken),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

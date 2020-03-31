import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import { connect } from 'react-redux';
import { navigate, Link, Router } from '@reach/router';

import { Item, Rows } from '@cda/flex/src';
import Information from './information/information';
import Subscriptions from './subscriptions/subscriptions';
import { logoutAction } from '../login/login.actions';
import Orders from './orders/orders';
import Restrict from '../utils/restrict';
import Beehives from './manage/beehives/beehives';
import Users from './manage/users/users';
import Beehive from './manage/beehives/beehive/beehive';

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
    <Rows>
      <Item>
        <Restrict allowed={['admin']}>
          <Link to="/dashboard/manage/users"><Button type="button">Gérer les utilisateurs</Button></Link>
          <br />
        </Restrict>
        <Restrict allowed={['admin']}>
          <Link to="/dashboard/manage/beehives"><Button type="button">Gérer les ruches</Button></Link>
          <br />
        </Restrict>
        <Restrict allowed={['admin']}>
          <Link to="/dashboard/manage/subscriptions"><Button type="button">Gérer les parrainages</Button></Link>
          <br />
        </Restrict>
        <Restrict allowed={['admin']}>
          <Link to="/dashboard/manage/labels"><Button type="button">Gérer les étiquettes</Button></Link>
          <br />
        </Restrict>
        <Restrict allowed={['admin']}>
          <Link to="/dashboard/manage/products"><Button type="button">Gérer les produits</Button></Link>
          <br />
        </Restrict>
        <Restrict allowed={['admin']}>
          <Link to="/dashboard/manage/discounts"><Button type="button">Gérer les coupons</Button></Link>
          <br />
        </Restrict>
        <Link to="/dashboard/subscriptions"><Button type="button">Mes parrainages</Button></Link>
        <br />
        <Link to="/dashboard/orders"><Button type="button">Mes commandes</Button></Link>
        <br />
        <Link to="/dashboard/information"><Button type="button">Mes informations</Button></Link>
        <br />
        <Link to="/dashboard/account"><Button type="button">Mon compte</Button></Link>
        <br />
        <Button onClick={logoutHandler} type="button" primary>Deconnexion</Button>
        <br />
      </Item>
      <Item flex="1">
        <Router>
          <Information path="information" />
          <Subscriptions path="subscriptions" />
          <Orders path="orders" />
          <Beehives path="manage/beehives" />
          <Beehive path="manage/beehive/:beehiveId" />
          <Users path="manage/users" />
        </Router>
      </Item>
    </Rows>
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

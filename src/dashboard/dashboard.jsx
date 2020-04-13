import React, { useCallback, useEffect } from 'react';
import Button from '@cda/button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Router } from '@reach/router';
import loadable from '@loadable/component'

import { Item, Rows } from '@cda/flex/src';
import { logoutAction } from '../login/login.actions';
import { fetchInformation } from './information/information.actions';
import { fetchOrdersAction } from './orders/orders.actions';

const Information = loadable(() => import(/* webpackChunkName: "information" */ './information/information'));
const Subscriptions = loadable(() => import(/* webpackChunkName: "subscriptions" */ './subscriptions/subscriptions'));
const Orders = loadable(() => import(/* webpackChunkName: "orders" */ './orders/orders'));
const Restrict = loadable(() => import(/* webpackChunkName: "restrict" */ '../utils/restrict'));
const Beehives = loadable(() => import(/* webpackChunkName: "beehives" */ './manage/beehives/beehives'));
const Users = loadable(() => import(/* webpackChunkName: "users" */ './manage/users/users'));
const Beehive = loadable(() => import(/* webpackChunkName: "manageBeehive" */ './manage/beehives/beehive/beehive'));

const Dashboard = ({ logout }) => {
  const dispatch = useDispatch();
  const userInformation = useSelector(({ information }) => information);

  const logoutHandler = useCallback(() => {
    dispatch(logoutAction());
  }, [logout]);


  useEffect(() => {
    dispatch(fetchInformation());
    dispatch(fetchOrdersAction());
  }, []);

  if (!userInformation.id) {
    return 'Your dashboard is loading';
  }

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

export default Dashboard;

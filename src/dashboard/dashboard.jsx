import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Router } from '@reach/router';
import loadable from '@loadable/component'
import styled from '@emotion/styled';
import { Item, Rows } from '@cda/flex';

import logo from '../logo-square.png';
import me from '../me.png';

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
const ManageSubscriptions = loadable(() => import(/* webpackChunkName: "manageSubscriptions" */ './manage/subscriptions/subscriptions'));
const ManageUser = loadable(() => import(/* webpackChunkName: "manageUser" */ './manage/users/edit/editUser'));

const LeftItem = styled(Item)`
  width: 25rem;
`;

const Background = styled('div')`
  position: fixed;
  margin-right: 10rem;
  background-color: #F0F0F0;
  height: 100vh;
  padding-top: 0;
  width: 20rem;
  margin-right: 1rem;
`;

const ClickableItem = styled('button')`
  padding: 0.5rem 3rem;
  width: 100%;
  background: none;
  font-size: 1rem;
  color: ${({ active }) => active ? 'black' : 'gray'};
  font-weight: ${({ active }) => active ? '500' : '300'};
  letter-spacing: 0.1rem;
  border-style: solid;
  border-color: ${({ active }) => active ? '#E49C00' : 'transparent'};
  border-width: 0 4px 0 0;
  outline: none;
  cursor: pointer;
  text-align: left;
  
  transition: color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out;
  
  &:hover, &:focus {
    border-color: ${({ active }) => active ? '#E49C00' : 'silver'};
    outline: none;
    color: black;
  }
`;

const Logo = styled('img')`
  display: block;
  width: 5rem;
  margin: 1rem auto;
  z-index: 0;
`;

const Avatar = styled('img')`
  position: relative;
  background-color: white;
  display: block;
  width: 6rem;
  height: 6rem;
  margin: 1rem auto;
  margin-top: 0rem;
  border-radius: 50%;
  border: solid 2px white;
  box-shadow: 0 0 10px silver;
  z-index: 10;
`;

const Name = styled('p')`
 text-align: center;
 font-weight: 900;
`;

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
  const path = window.location.pathname;

  return (
    <Rows>
      <LeftItem>
        <Background>
          <Link to="/"><Logo src={logo} alt="Logo de l'association Confidences d'Abeilles" /></Link>
          <Avatar src={me} alt="Logo de l'association Confidences d'Abeilles" />
          <Name>{`${userInformation.firstname} ${userInformation.name}`}</Name>
          <Restrict allowed={['admin']}>
            <Link to="/dashboard/manage/users">
              <ClickableItem active={path === '/dashboard/manage/users'}>
                Utilisateurs
              </ClickableItem>
            </Link>
            <br />
          </Restrict>
          <Restrict allowed={['admin']}>
            <Link to="/dashboard/manage/beehives">
              <ClickableItem active={path === '/dashboard/manage/beehives'}>
                Ruches
              </ClickableItem>
            </Link>
            <br />
          </Restrict>
          <Restrict allowed={['admin']}>
            <Link to="/dashboard/manage/subscriptions">
              <ClickableItem active={path === '/dashboard/manage/subscriptions'}>
                Parrainages
              </ClickableItem>
            </Link>
            <br />
          </Restrict>
          <Restrict allowed={['admin']}>
            <Link to="/dashboard/manage/labels">
              <ClickableItem active={path === '/dashboard/manage/labels'}>
                Étiquettes
              </ClickableItem>
            </Link>
            <br />
          </Restrict>
          <Restrict allowed={['admin']}>
            <Link to="/dashboard/manage/products">
              <ClickableItem active={path === '/dashboard/manage/products'}>
                Produits
              </ClickableItem>
            </Link>
            <br />
          </Restrict>
          <Restrict allowed={['admin']}>
            <Link to="/dashboard/manage/discounts">
              <ClickableItem active={path === '/dashboard/manage/discounts'}>
                Gérer les coupons
              </ClickableItem>
            </Link>
            <br />
          </Restrict>
          <Link to="/dashboard/subscriptions">
            <ClickableItem active={path === '/dashboard/subscriptions'}>
              Mes parrainages
            </ClickableItem>
          </Link>
          <br />
          <Link to="/dashboard/orders">
            <ClickableItem active={path === '/dashboard/orders'}>
              Mes commandes
            </ClickableItem>
          </Link>
          <br />
          <Link to="/dashboard/information">
            <ClickableItem active={path === '/dashboard/information'}>
              Mes informations
            </ClickableItem>
          </Link>
          <br />
          <Link to="/dashboard/account">
            <ClickableItem active={path === '/dashboard/account'}>
              Mon compte
            </ClickableItem>
          </Link>
          <br />
          <ClickableItem onClick={logoutHandler}>
            Deconnexion
          </ClickableItem>
          <br />
        </Background>
      </LeftItem>
      <Item flex="1">
        <Router>
          <Information path="information" />
          <Subscriptions path="subscriptions" />
          <Orders path="orders" />
          <Beehives path="manage/beehives" />
          <Beehive path="manage/beehive/:beehiveId" />
          <Users path="manage/users" />
          <ManageUser path="manage/users/:id" />
          <ManageSubscriptions path="manage/subscriptions" />
        </Router>
      </Item>
    </Rows>
  );
};

export default Dashboard;

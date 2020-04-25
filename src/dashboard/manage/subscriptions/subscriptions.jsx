import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubscriptionsAction } from './subscriptions.actions';
import H2 from '../../../components/h2';
import Card from '../../../components/card';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const subscriptions = useSelector(({ manageSubscriptions }) => manageSubscriptions.subscriptions);

  useEffect(() => {
    dispatch(fetchSubscriptionsAction());
  }, []);

  return (
    <>
      <H2>Gestion des parrainages</H2>
      {subscriptions.map(({ product }) => <Card>{product.name}</Card>)}
    </>
  );
};

Subscriptions.propTypes = {};

export default Subscriptions;

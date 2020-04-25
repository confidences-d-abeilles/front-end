import React from 'react';
import H2 from '../../../components/h2';
import Card from '../../../components/card';
import useApi from '../../../hooks/useApi';
import Loading from '../../../components/loading';

const Subscriptions = () => {
  const subscriptions = useApi('subscription', 'all');

  if (!subscriptions) {
    return <Loading />;
  }

  return (
    <>
      <H2>Gestion des parrainages</H2>
      {subscriptions.map(({ product, id }) => <Card key={id}>{product.name}</Card>)}
    </>
  );
};

Subscriptions.propTypes = {};

export default Subscriptions;

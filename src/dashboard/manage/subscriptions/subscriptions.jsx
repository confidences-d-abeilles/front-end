import React from 'react';
import H2 from '../../../components/h2';
import Loading from '../../../components/loading';
import Item from './widget/subscriptionListItem';
import useApi from '../../../hooks/useApi';

const Subscriptions = () => {
  const subscriptions = useApi('subscription', 'all');

  if (!subscriptions) {
    return <Loading />;
  }

  return (
    <>
      <H2>Gestion des parrainages</H2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {subscriptions.map((subscription) => <Item key={subscription.id} {...subscription} />)}
    </>
  );
};

Subscriptions.propTypes = {};

export default Subscriptions;

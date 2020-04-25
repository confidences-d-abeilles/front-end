import React from 'react';
import Subscription from './widgets/subscription';
import H2 from '../../components/h2';
import useApi from '../../hooks/useApi';
import Loading from '../../components/loading';

const Subscriptions = () => {
  const subscriptions = useApi('subscription', 'mine');

  if (!subscriptions) {
    return <Loading />;
  }

  return (
    <div>
      <H2>Mes parrainages</H2>
      {subscriptions
        // eslint-disable-next-line react/jsx-props-no-spreading
        .map((subscription) => <Subscription {...subscription} key={subscription.id} />)}
    </div>
  );
};

export default Subscriptions;

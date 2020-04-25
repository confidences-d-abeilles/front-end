import React from 'react';
import Order from './widget/order';
import H2 from '../../components/h2';
import useApi from '../../hooks/useApi';
import Loading from '../../components/loading';


const Orders = () => {
  const orders = useApi('order', 'mine');

  if (!orders) {
    return <Loading />;
  }

  return (
    <div>
      <H2>Mes commandes</H2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {orders.map((order) => <Order {...order} key={order.id} />)}
    </div>
  );
};

export default Orders;

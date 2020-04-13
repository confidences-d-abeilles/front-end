import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Button from '@cda/button';
import { checkout, fetchOrdersAction } from './orders.actions';
import Order from './widget/order';
import H2 from '../../components/h2';


const Orders = ({ fetchOrders, orders }) => {
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <H2>Mes commandes</H2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {orders.map((order) => <Order {...order} key={order.id} />)}
    </div>
  );
};


const mapStateToProps = ({ orders }) => ({
  orders: orders.orders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrdersAction()),
});

Orders.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchOrdersAction } from './orders.actions';
import Order from './widget/order';

const Orders = ({ fetchOrders, orders }) => {
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Mes commandes</h2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {orders.map((order) => <Order {...order} />)}
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
  orders: PropTypes.arrayOf(Order.propTypes).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

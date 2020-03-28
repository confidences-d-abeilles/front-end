import React from 'react';
import PropTypes from 'prop-types';
import stringifyAmount from '../../../utils/currency';

const Order = ({ price }) => (<div><p>{stringifyAmount(price)}</p></div>);

Order.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Order;

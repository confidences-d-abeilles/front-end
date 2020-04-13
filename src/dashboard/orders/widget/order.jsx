import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import stringifyAmount from '../../../utils/currency';
import { checkout } from '../orders.actions';
import Card from '../../../components/card';

const Order = ({ price, id }) => {
  const dispatch = useDispatch();

  const checkoutCb = useCallback(() => dispatch(checkout(id)), [id]);

  return (
    <Card>
      <h3>Commande du 13 avril 2020</h3>
      {stringifyAmount(price)}
      <p style={{ textAlign: 'right' }}>
        <Button onClick={checkoutCb} flat>Régler</Button>
      </p>
    </Card>
  );
};

Order.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Order;

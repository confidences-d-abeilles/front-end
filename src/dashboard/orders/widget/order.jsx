import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import stringifyAmount from '../../../utils/currency';
import { checkout } from '../orders.actions';
import Card from '../../../components/card';
import Badge, { WARNING } from '../../../components/badge';

const Order = ({ price, id, products }) => {
  const dispatch = useDispatch();

  const checkoutCb = useCallback(() => dispatch(checkout(id)), [id]);

  return (
    <Card>
      <h3>
        Commande du 13 avril 2020
        <Badge severity={WARNING}>Non réglée</Badge>
      </h3>
      {products.map(({ name, quantity }) => <p>{`${name} (${quantity})`}</p>)}
      <p style={{ textAlign: 'right' }}>
        {stringifyAmount(price)}
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

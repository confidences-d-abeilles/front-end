import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import stringifyAmount from '../../../utils/currency';
import { checkout } from '../orders.actions';
import Card from '../../../components/card';
import Badge, { SUCCESS, WARNING } from '../../../components/badge';

const getStatusInformation = (status) => {
  switch (status) {
    case 0:
      return [WARNING, 'Non reglé'];
    case 2:
      return [SUCCESS, 'Reglé'];
    default:
      return [null, 'Non renseigné'];
  }
};

const Order = ({ price, id, products, status }) => {
  const dispatch = useDispatch();

  const checkoutCb = useCallback(() => dispatch(checkout(id)), [id]);
  const [severity, readableStatus] = getStatusInformation(status);

  return (
    <Card>
      <h3>
        Commande du 13 avril 2020
        <Badge severity={severity}>{readableStatus}</Badge>
      </h3>
      {products.map(({ id, name, quantity }, index) => <p key={index}>{`${name} (${quantity})`}</p>)}
      <p style={{ textAlign: 'right' }}>
        {stringifyAmount(price)}
        {status === 0 && <Button onClick={checkoutCb} flat primary>Régler</Button>}
      </p>
    </Card>
  );
};

Order.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default Order;

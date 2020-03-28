import React from 'react';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import { Link } from '@reach/router';

const Subscription = ({ product, beehive }) => (
  <div>
    <p>
      {product.name}
      <Link to={`/beehive/${beehive.id}`}><Button type="button" primary>{`👁 ${beehive.name}`}</Button></Link>
    </p>
  </div>
);

Subscription.propTypes = {
  product: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  beehive: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
  }).isRequired,
};


export default Subscription;

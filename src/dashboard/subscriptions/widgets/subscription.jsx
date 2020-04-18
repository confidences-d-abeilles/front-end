import React from 'react';
import PropTypes from 'prop-types';
import Button from '@cda/button';
import { Link } from '@reach/router';
import { humanReadable } from '../../../utils/date';
import Card from '../../../components/card';

const Subscription = ({
  product, beehive, start, end,
}) => (
  <Card>
    <p>
      {product.name}
      {beehive && <Link to={`/beehive/${beehive.id}`}><Button type="button" primary>{`👁 ${beehive.name}`}</Button></Link>}
      &nbsp;
      {humanReadable(start)}
      &nbsp;
      {humanReadable(end)}
    </p>
  </Card>
);

Subscription.defaultProps = {
  beehive: null,
};

Subscription.propTypes = {
  product: PropTypes.objectOf(PropTypes.string).isRequired,
  beehive: PropTypes.objectOf(PropTypes.string),
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};


export default Subscription;

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/card';

const Address = ({
  firstname, name, line1, line2, city, country,
}) => (
  <Card>
    <p>{`${firstname} ${name}`}</p>
    <p>{line1}</p>
    {line2 && <p>{line2}</p>}
    <p>{`${city} ${country}`}</p>
  </Card>
);

Address.defaultProps = {
  line2: null,
};

Address.propTypes = {
  firstname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default Address;

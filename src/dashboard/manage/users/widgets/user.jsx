import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../components/card';
import { Link } from '@reach/router';

const User = ({ id, name, firstname }) => (
  <Card>
    {`${firstname} ${name}`}
    <Link to={id.toString()}>Editer</Link>
  </Card>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default User;

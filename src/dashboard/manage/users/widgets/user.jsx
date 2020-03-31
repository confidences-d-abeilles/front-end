import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, firstname }) => (
  <p>
    {`${firstname} ${name}`}
  </p>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
};

export default User;

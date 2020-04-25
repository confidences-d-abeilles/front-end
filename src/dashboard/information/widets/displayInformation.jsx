import React from 'react';
import PropTypes from 'prop-types';

const DisplayInformation = ({
  name,
  firstName,
  email,
  phone,
}) => (
  <>
    <p>{`${firstName} ${name}`}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </>
);

DisplayInformation.propTypes = {
  name: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default DisplayInformation;

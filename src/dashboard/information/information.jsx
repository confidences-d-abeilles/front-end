import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchInformation as fetchInformationAction } from './information.actions';
import Address from './widets/address';

const Information = ({
  fetchInformation, email, phone, name, firstname, billingAddress, deliveryAddress,
}) => {
  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <div>
      <h2>Mes informations</h2>
      <p>{firstname}</p>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {billingAddress && <Address {...billingAddress} />}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {deliveryAddress && <Address {...deliveryAddress} />}
    </div>
  );
};

const mapStateToProps = ({ information }) => ({
  ...information,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInformation: () => dispatch(fetchInformationAction()),
});

Information.propTypes = {
  fetchInformation: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Information);

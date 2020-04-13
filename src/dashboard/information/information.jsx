import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Rows } from '@cda/flex';
import { fetchInformation as fetchInformationAction } from './information.actions';
import Address from './widets/address';
import Card from '../../components/card';
import Hr from '../../components/hr';
import H2 from '../../components/h2';

const Information = ({
  fetchInformation, email, phone, name, firstname, billingAddress, deliveryAddress,
}) => {
  useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <div>
      <H2>Mes informations</H2>
      <Rows>
        <Card>
          <p>{`${firstname} ${name}`}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </Card>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {billingAddress && <Address {...billingAddress} />}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {deliveryAddress && <Address {...deliveryAddress} />}
      </Rows>
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

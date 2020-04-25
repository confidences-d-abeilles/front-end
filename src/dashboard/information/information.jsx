import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@cda/button';
import { Rows } from '@cda/flex';
import { fetchInformation as fetchInformationAction } from './information.actions';
import Address from './widets/address';
import Card from '../../components/card';
import H2 from '../../components/h2';
import DisplayInformation from './widets/displayInformation';
import EditInformation from './widets/editInformation';

const Information = ({
  fetchInformation, email, phone, name, firstname, billingAddress, deliveryAddress,
}) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    fetchInformation();
  }, []);

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  return (
    <div>
      <H2>Mes informations</H2>
      <Rows>
        <Card>
          {edit
            ? <EditInformation email={email} firstName={firstname} name={name} phone={phone} cb={toggleEdit} />
            : (
              <>
                <DisplayInformation email={email} firstName={firstname} name={name} phone={phone} />
                <Button onClick={toggleEdit} flat>Modifier</Button>
              </>
            )}
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

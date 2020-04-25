import React from 'react';
import PropTypes from 'prop-types';
import H2 from '../../../../components/h2';
import Loading from '../../../../components/loading';
import useApi from '../../../../hooks/useApi';

const EditUser = ({ id }) => {
  const user = useApi('user', id);

  if (!user) {
    return <Loading />;
  }

  return (
    <>
      <H2>{`${user.firstname} ${user.name}`}</H2>
      <p>
        {user.email}
        <br />
        {user.phone}
      </p>
    </>
  );
};

EditUser.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditUser;

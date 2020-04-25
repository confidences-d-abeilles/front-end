import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchUser } from './editUser.actions';

const EditUser = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return null;
};

EditUser.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditUser;

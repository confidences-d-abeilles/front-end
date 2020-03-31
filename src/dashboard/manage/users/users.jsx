import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from './users.actions';
import User from './widgets/user';

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ users }) => users.users);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return (
    <div>
      <h2>Gestion des utilisateurs</h2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {data.map((user) => <User {...user} />)}
    </div>
  );
};

Users.propTypes = {};

export default Users;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from './users.actions';
import User from './widgets/user';
import H2 from '../../../components/h2';

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector(({ users }) => users.users);

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return (
    <div>
      <H2>Gestion des utilisateurs</H2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {data.map((user) => <User {...user} key={user.id} />)}
    </div>
  );
};

Users.propTypes = {};

export default Users;

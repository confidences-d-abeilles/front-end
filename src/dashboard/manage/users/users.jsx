import React from 'react';
import User from './widgets/user';
import H2 from '../../../components/h2';
import useApi from '../../../hooks/useApi';
import Loading from '../../../components/loading';

const Users = () => {
  const users = useApi('user', 'all');

  if (!users) {
    return <Loading />;
  }

  return (
    <div>
      <H2>Gestion des utilisateurs</H2>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {users.map((user) => <User {...user} key={user.id} />)}
    </div>
  );
};

export default Users;

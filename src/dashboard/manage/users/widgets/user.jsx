import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Card from '../../../../components/card';
import { Rows } from '@cda/flex/src';

const User = ({ id, name, firstname }) => (
  <Card>
    <Rows justifyContent="space-between">
      {`${firstname} ${name}`}
      <div>
        <Link to={id.toString()}>
          <span role="img" aria-label="wrench">🔧</span>
        </Link>
      </div>
    </Rows>
  </Card>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default User;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Rows } from '@cda/flex/src';

const Beehive = ({ name, identifier, id }) => (
  <div>
    <Rows justifyContent="space-between">
      {`${name} ${identifier || ''} `}
      <div>
        <Link to={id.toString()}>
          <span role="img" aria-label="wrench">🔧</span>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={`/dashboard/manage/beehive/${id}`}>
          <span role="img" aria-label="wrench">🗑</span>
        </Link>
      </div>
    </Rows>
  </div>
);

Beehive.defaultProps = {
  identifier: '',
};

Beehive.propTypes = {
  name: PropTypes.string.isRequired,
  identifier: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Beehive;

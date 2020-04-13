import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Beehive = ({ name, identifier, id }) => (
  <div>
    <p>
      {`${name} ${identifier || ''} `}
      <Link to={`/dashboard/manage/beehive/${id}`}>
        <span role="img" aria-label="wrench">🔧</span>
      </Link>
    </p>
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

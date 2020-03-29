import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Restrict = ({ children, allowed }) => {
  const roles = useSelector(({ login }) => login.roles);

  return roles.reduce((acc, curr) => allowed.includes(curr) || acc, false) ? children : null;
};

Restrict.propTypes = {
  allowed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Restrict;

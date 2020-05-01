import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export const WARNING = 'warn';
export const ERROR = 'err';
export const SUCCESS = 'succ';

const Paragraph = styled('div')`
  background-color: ${({ severity }) => {
    switch (severity) {
      case WARNING:
        return '#ff8328';
      case ERROR:
        return '#ff2828';
      case SUCCESS:
        return '#00c44a';
      default:
        return '#74dbff';
    }
  }};
  color: white;
  padding: 10px;
  border-radius: 3px;
`;


const SEVERITIES = [WARNING, ERROR, SUCCESS];

const Alert = ({ children, severity }) => {
  if (!children) {
    return null;
  }

  return (
    <Paragraph severity={severity}>
      {children}
    </Paragraph>
  );
};

Alert.defaultProps = {
  children: null,
};

Alert.propTypes = {
  children: PropTypes.node,
  severity: PropTypes.oneOf(SEVERITIES).isRequired,
};

export default Alert;

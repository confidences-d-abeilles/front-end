import styled from '@emotion/styled';

export const SUCCESS = 'SUCCESS';
export const WARNING = 'WARNING';
export const ERROR = 'ERROR';

const getColor = ({
  severity,
}) => {
  switch (severity) {
    case SUCCESS:
      return '#77AA77';
    case WARNING:
      return 'orange';
    case ERROR:
      return 'red';
    default:
      return 'black';
  }
};

const Badge = styled('span')`
  display: inline-block;
  color: white;
  font-weight: 500;
  letter-spacing: 0.09rem;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  background-color: ${getColor};
  border-radius: 1rem;
  margin: 0 1rem;
  position: relative;
  text-transform: uppercase;
`;

export default Badge;

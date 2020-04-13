import styled from '@emotion/styled';

const H2 = styled('h2')`
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: #222222;
  font-weight: 200;
  
  ::after {
    content: ' ';
    display: block;
    position: relative;
    left: 0%;
    top: 0.5rem;
    width: 4rem;
    border-style: solid;
    margin: 0;
    border-width: 3px 0 0 0;
    border-color: #E49C00;
  }
`;

export default H2;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Item = styled('p')`
  cursor: pointer;
  padding: 1rem;
  margin: 0 1rem;
  border-style: solid;
  border-color: #DDDDDD;
  border-width: 0 0 1px;
  width: 10rem;
`;

const NewItem = ({ data, onClick }) => {

  return <Item onClick={onClick}>{data.title}</Item>;
};

NewItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewItem;
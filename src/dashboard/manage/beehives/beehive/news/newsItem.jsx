import React from 'react';
import PropTypes from 'prop-types';

const NewItem = ({ data, onClick}) => {

  return <p onClick={onClick}>{data.title}</p>;
};

NewItem.propTypes = {};

export default NewItem;
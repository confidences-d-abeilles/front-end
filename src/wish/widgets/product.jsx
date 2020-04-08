import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '@cda/button/src';
import { useDispatch } from 'react-redux';
import { addProduct } from '../wish.actions';

const Product = ({ name, id }) => {
  const dispatch = useDispatch();

  const addProductCallback = useCallback(() => {
    dispatch(addProduct(id));
  }, [id]);

  return (
    <p>
      {name}
      <Button type="button" onClick={addProductCallback}>Ajouter</Button>
    </p>
  );
};

Product.propTypes = {};

export default Product;

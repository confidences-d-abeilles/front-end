import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@cda/button';
import { fetchProducts, placeOrder } from './wish.actions';
import Product from './widgets/product';
import { getProducts } from './wish.selectors';

const Wish = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(placeOrder());
  });

  return (
    <form onSubmit={onSubmit}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {products.map((product) => <Product {...product} key={product.id} />)}
      <Button type="submit">Passer commande</Button>
    </form>
  );
};

Wish.propTypes = {};

export default Wish;

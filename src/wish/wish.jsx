import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './wish.actions';
import Product from './widgets/product';
import { getProducts } from './wish.selectors';

const Wish = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return products.map((product) => <Product {...product} key={product.id} />);
};

Wish.propTypes = {};

export default Wish;

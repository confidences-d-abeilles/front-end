import { path } from 'ramda';

export const getProducts = (state) => path(['wish', 'products'], state);

export const getCart = (state) => path(['wish', 'cart'], state);


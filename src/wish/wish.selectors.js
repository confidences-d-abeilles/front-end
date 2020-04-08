import { path } from 'ramda';

export const getProducts = (state) => path(['wish', 'products'], state);

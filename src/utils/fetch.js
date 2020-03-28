
import { create } from 'axios';

const client = create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

export default client;


import { create } from 'axios';

const client = create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

export const updateClientWithAuthorization = (clientToUpdate, accessToken) => {
  if (accessToken) {
    // eslint-disable-next-line no-param-reassign
    clientToUpdate.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    // eslint-disable-next-line no-param-reassign
    delete clientToUpdate.defaults.headers.common.Authorization;
  }
};

export default client;


import { create } from 'axios';

const client = create({
  baseURL: 'http://192.168.1.44:3000/',
  timeout: 1000,
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

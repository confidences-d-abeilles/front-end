
import { create } from 'axios';
import { store } from '../redux';
import { logoutAction } from '../login/login.actions';

const client = create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

client.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    store.dispatch(logoutAction());
  }

  return Promise.reject(error);
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

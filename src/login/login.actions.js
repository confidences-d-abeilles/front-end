
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_RESUME = 'LOGIN_RESUME';
export const LOGIN_REFRESH_TOKEN = 'LOGIN_REFRESH_TOKEN';

export const loginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const loginResume = () => ({
  type: LOGIN_RESUME,
});

export const refreshTokenAction = (accessToken, refreshToken, action) => ({
  type: LOGIN_REFRESH_TOKEN,
  accessToken,
  refreshToken,
  action,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

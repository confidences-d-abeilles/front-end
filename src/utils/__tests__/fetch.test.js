import client, { updateClientWithAuthorization } from '../fetch';

jest.unmock('../fetch');

const SAMPLE_CLIENT = {
  sampleClient: true,
  defaults: { headers: { common: { contentType: 'text/css' } } },
};

const accessToken = '1234567890';

const SAMPLE_CLIENT_WITH_TOKEN = {
  sampleClient: true,
  defaults: { headers: { common: { contentType: 'text/css' } } },
};

jest.mock('axios', () => ({
  Axios: null,
  create: jest.fn().mockImplementation(() => ({
    sampleClient: true,
    defaults: { headers: { common: { contentType: 'text/css' } } },
  })),
}));

describe('client', () => {
  it('should contain create function return', () => {
    expect(client).toEqual(SAMPLE_CLIENT);
  })
});

describe('updateClientWithAuthorization', () => {
  it('should add token to headers', () => {
    const fakeClient = SAMPLE_CLIENT;
    updateClientWithAuthorization(fakeClient, accessToken);
    expect(fakeClient).toStrictEqual({
      sampleClient: true,
      defaults: { headers: { common: { contentType: 'text/css', Authorization: 'Bearer 1234567890' } } },
    });
  });

  it('should remove token from headers', () => {
    const fakeClient = SAMPLE_CLIENT_WITH_TOKEN;
    updateClientWithAuthorization(fakeClient);
    expect(fakeClient).toStrictEqual({
      sampleClient: true,
      defaults: { headers: { common: { contentType: 'text/css' } } },
    });
  });
});
import axios, { Method } from 'axios';
import { BASE_API_URL } from '../constants';
import { paramsSerializer, spotifyAxios } from './spotifyAxios';
import { Cache } from './Cache';

jest.mock('axios');

const axiosMock = jest.mocked(axios, true);

let cacheData: { [key: string]: any } = {};

const cache = new Cache(
  (key: string) => {
    return Promise.resolve(key in cacheData ? cacheData[key] : null);
  },
  (key: string, expiration: number, value: any) => {
    cacheData[key] = {
      ...value,
      fromCache: true,
      expiration: expiration,
    };
    return Promise.resolve();
  },
);

describe('spotifyAxios', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    cacheData = {};
  });

  it("should successfully call Spotify's Web API with the default content type", async () => {
    axiosMock.mockResolvedValue({
      data: 'foo',
      status: 200,
      statusText: 'OK',
      config: {},
      headers: {},
    });
    await spotifyAxios('foo', 'GET', 'token', {
      params: {
        bar: 'baz',
      },
    });
    expect(axiosMock).toBeCalledWith({
      params: {
        bar: 'baz',
      },
      baseURL: BASE_API_URL,
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
      },
      paramsSerializer,
      url: 'foo',
      method: 'GET',
    });
  });

  it("should successfully call Spotify's Web API with a custom content type", async () => {
    axiosMock.mockResolvedValue({
      data: 'foo',
      status: 200,
      statusText: 'OK',
      config: {},
      headers: {},
    });
    await spotifyAxios('foo', 'GET', 'token', {
      contentType: 'image/jpeg',
      data: 'bar',
    });
    expect(axiosMock).toBeCalledWith({
      data: 'bar',
      baseURL: BASE_API_URL,
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'image/jpeg',
      },
      paramsSerializer,
      url: 'foo',
      method: 'GET',
    });
  });

  it('should re-throw non axios errors', async () => {
    const testError = new Error('foo');
    axiosMock.isAxiosError.mockReturnValue(false);
    axiosMock.mockRejectedValue(testError);

    await expect(spotifyAxios('bar', 'GET', 'token')).rejects.toThrow(
      new Error('foo'),
    );
  });

  it('should handle axios errors and the spotify error message', async () => {
    axiosMock.isAxiosError.mockReturnValue(true);

    const testError = {
      message: 'foo',
      response: {
        data: {
          error: {
            status: 400,
            message: 'Error message from Spotify',
          },
        },
      },
    };

    axiosMock.mockRejectedValue(testError);
    await expect(spotifyAxios('bar', 'GET', 'token')).rejects.toThrow(
      'foo: Error message from Spotify',
    );
  });

  describe('cache', () => {
    it("should successfully cache Spotify's Web GET API calls with a public cache control", async () => {
      axiosMock.mockResolvedValue({
        data: { id: 123 },
        status: 200,
        statusText: 'OK',
        config: {},
        headers: {
          'cache-control': 'public, max-age=600',
        },
      });
      const freshResult = await spotifyAxios('/foo', 'GET', 'token', {}, cache);
      expect(axiosMock).toBeCalledTimes(1);
      expect(axiosMock).toBeCalledWith({
        baseURL: BASE_API_URL,
        headers: {
          Authorization: 'Bearer token',
          'Content-Type': 'application/json',
        },
        paramsSerializer,
        url: '/foo',
        method: 'GET',
      });
      expect(cacheData).toMatchObject({
        '/foo': { id: 123, fromCache: true, expiration: 600 },
      });
      const cachedResult = await spotifyAxios(
        '/foo',
        'GET',
        'token',
        {},
        cache,
      );
      expect(axiosMock).toBeCalledTimes(1);

      expect(freshResult).toMatchObject({ id: 123 });
      expect(cachedResult).toMatchObject({
        id: 123,
        fromCache: true,
        expiration: 600,
      });
    });

    it("should not cache Spotify's Web API GET calls with a private cache control", async () => {
      axiosMock.mockResolvedValue({
        data: { id: 123 },
        status: 200,
        statusText: 'OK',
        config: {},
        headers: {
          'cache-control': 'private, max-age=0',
        },
      });
      const freshResult = await spotifyAxios('foo', 'GET', 'token', {}, cache);
      expect(axiosMock).toBeCalledTimes(1);
      expect(axiosMock).toBeCalledWith({
        baseURL: BASE_API_URL,
        headers: {
          Authorization: 'Bearer token',
          'Content-Type': 'application/json',
        },
        paramsSerializer,
        url: 'foo',
        method: 'GET',
      });
      expect(cacheData).toMatchObject({});
      const secondFreshResult: any = await spotifyAxios(
        'foo',
        'GET',
        'token',
        {},
        cache,
      );
      expect(axiosMock).toBeCalledTimes(2);
      expect(cacheData).toMatchObject({});
      expect(freshResult).toMatchObject({
        id: 123,
      });
      expect(secondFreshResult).toMatchObject({
        id: 123,
      });
      expect(secondFreshResult.fromCache).toBeUndefined();
    });

    test.each(['DELETE', 'POST', 'PUT'] as Method[])(
      "should not cache Spotify's Web API %s calls with a public cache control",
      async (method: Method) => {
        axiosMock.mockResolvedValue({
          data: { id: 123 },
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {
            'cache-control': 'private, max-age=0',
          },
        });
        const freshResult = await spotifyAxios(
          'foo',
          method,
          'token',
          {},
          cache,
        );
        expect(axiosMock).toBeCalledTimes(1);
        expect(axiosMock).toBeCalledWith({
          baseURL: BASE_API_URL,
          headers: {
            Authorization: 'Bearer token',
            'Content-Type': 'application/json',
          },
          paramsSerializer,
          url: 'foo',
          method: method,
        });
        expect(cacheData).toMatchObject({});
        const secondFreshResult: any = await spotifyAxios(
          'foo',
          method,
          'token',
          {},
          cache,
        );
        expect(axiosMock).toBeCalledTimes(2);
        expect(cacheData).toMatchObject({});
        expect(freshResult).toMatchObject({
          id: 123,
        });
        expect(secondFreshResult).toMatchObject({
          id: 123,
        });
        expect(secondFreshResult.fromCache).toBeUndefined();
      },
    );
  });

  it('should wait and retry after being rate limited', async () => {
    axiosMock.isAxiosError.mockReturnValue(true);

    axiosMock.mockRejectedValueOnce({
      response: {
        status: 429,
        headers: { 'retry-after': '1' },
      },
    });

    axiosMock.mockResolvedValueOnce({
      data: { id: 123 },
      status: 200,
      statusText: 'OK',
      config: {},
      headers: {},
    });

    jest.spyOn(global, 'setTimeout');

    const data = await spotifyAxios('foo', 'GET', 'token', {});
    expect(axiosMock).toHaveBeenCalledTimes(2);
    expect(data).toMatchObject({ id: 123 });
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});

describe('paramsSerializer', () => {
  it('should stringify arrays using the comma format', () => {
    expect(paramsSerializer({ foo: ['bar', 'baz'] })).toEqual('foo=bar%2Cbaz');
  });
});

import axios, { AxiosRequestConfig, Method } from 'axios';
import qs from 'qs';
import { BASE_API_URL } from '../constants';
import { parse } from '@tusbar/cache-control';
import { Cache } from './Cache';
import { generateCacheKeyForRequest } from './generateCacheKeyForRequest';

export type SpotifyAxiosConfig = AxiosRequestConfig & { contentType?: string };

export async function spotifyAxios<T>(
  url: string,
  method: Method,
  accessToken: string,
  config?: SpotifyAxiosConfig,
  cache?: Cache,
): Promise<T> {
  const cacheKey = generateCacheKeyForRequest(url, config);

  if (method === 'GET' && cache) {
    const value = await cache.get(cacheKey);
    if (value) {
      return value as T;
    }
  }

  try {
    const { contentType, ...axiosConfig } = config ?? {};
    const response = await axios({
      ...axiosConfig,
      baseURL: BASE_API_URL,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': contentType ?? 'application/json',
      },
      paramsSerializer,
      url,
      method,
    });

    if (
      method === 'GET' &&
      response.headers &&
      'cache-control' in response.headers &&
      cache
    ) {
      const cacheControl = parse(response.headers['cache-control']);
      if (
        cacheControl.public &&
        typeof cacheControl.maxAge === 'number' &&
        cacheControl.maxAge !== 0
      ) {
        cache.set(cacheKey, cacheControl.maxAge, response.data);
      }
    }

    return response.data as T;
  } catch (error: any) {
    if (!axios.isAxiosError(error)) {
      throw error;
    }

    if (error?.response?.data?.error?.message) {
      throw new Error(`${error.message}: ${error.response.data.error.message}`);
    }
    throw new Error(error.message);
  }
}

export function paramsSerializer(params: any) {
  return qs.stringify(params, { arrayFormat: 'comma' });
}

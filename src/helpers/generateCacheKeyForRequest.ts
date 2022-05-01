import { SpotifyAxiosConfig } from './spotifyAxios';

export function generateCacheKeyForRequest(
  url: string,
  config?: SpotifyAxiosConfig,
) {
  return config?.params && Object.keys(config.params).length > 0
    ? `${url}?${new URLSearchParams(config.params).toString()}`
    : url;
}

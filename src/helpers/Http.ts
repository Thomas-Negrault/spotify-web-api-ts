import { spotifyAxios, SpotifyAxiosConfig } from './spotifyAxios';
import { Cache } from './Cache';

export class Http {
  private accessToken: string;
  private readonly cache?: Cache;

  constructor(accessToken: string, cache?: Cache) {
    this.cache = cache;
    this.accessToken = accessToken;
  }

  getAccessToken() {
    return this.accessToken;
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  get<T>(url: string, config?: SpotifyAxiosConfig) {
    return spotifyAxios<T>(url, 'GET', this.accessToken, config, this.cache);
  }

  post<T>(url: string, config?: SpotifyAxiosConfig) {
    return spotifyAxios<T>(url, 'POST', this.accessToken, config);
  }

  put<T>(url: string, config?: SpotifyAxiosConfig) {
    return spotifyAxios<T>(url, 'PUT', this.accessToken, config);
  }

  delete<T>(url: string, config?: SpotifyAxiosConfig) {
    return spotifyAxios<T>(url, 'DELETE', this.accessToken, config);
  }
}

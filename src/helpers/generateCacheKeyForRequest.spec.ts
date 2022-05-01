import { generateCacheKeyForRequest } from './generateCacheKeyForRequest';

describe('generateCacheKeyForRequest', () => {
  it('should return only the url without config', () => {
    expect(generateCacheKeyForRequest('/artists/abcde')).toStrictEqual(
      '/artists/abcde',
    );
  });

  it('should return only the url with empty config', () => {
    expect(generateCacheKeyForRequest('/artists/abcde', {})).toStrictEqual(
      '/artists/abcde',
    );
  });

  it('should return only the url with empty config.params', () => {
    expect(
      generateCacheKeyForRequest('/artists/abcde', { params: {} }),
    ).toStrictEqual('/artists/abcde');
  });

  it('should return the url and parameter', () => {
    expect(
      generateCacheKeyForRequest('/artists/abcde', { params: { foo: 'bar' } }),
    ).toStrictEqual('/artists/abcde?foo=bar');
  });

  it('should return the url and parameters with special chars', () => {
    expect(
      generateCacheKeyForRequest('/artists/abcde', {
        params: { foo: 'bar', specialChars: ' !"#$%&\'()*+,-./' },
      }),
    ).toStrictEqual(
      '/artists/abcde?foo=bar&specialChars=+%21%22%23%24%25%26%27%28%29*%2B%2C-.%2F',
    );
  });
});

import { Cache } from './Cache';

let cache = {};
const objectCache = new Cache(
  async (key: string) => {
    // @ts-ignore
    return Promise.resolve(cache[key] ?? null);
  },
  async (key: string, expiration: number, value: any) => {
    // @ts-ignore
    cache[key] = { ...value, expiration: expiration };
  },
);

beforeEach(() => {
  cache = {};
});

describe('Cache', () => {
  it('should store and retrieve value using getter and setters', async () => {
    await objectCache.set('test-key', 123, { foo: 'bar' });

    const cacheResult = await objectCache.get('test-key');
    expect(cacheResult).toMatchObject({
      foo: 'bar',
      expiration: 123,
    });
  });

  it('should return null is the key is not known', async () => {
    const cacheResult = await objectCache.get('unknown-key');
    expect(cacheResult).toBeNull();
  });
});

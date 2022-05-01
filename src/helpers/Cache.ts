export class Cache {
  public get: (key: string) => Promise<any>;
  public set: (key: string, expiration: number, value: any) => Promise<void>;

  constructor(
    get: (key: string) => Promise<any>,
    set: (key: string, expiration: number, value: any) => Promise<void>,
  ) {
    this.get = get;
    this.set = set;
  }
}

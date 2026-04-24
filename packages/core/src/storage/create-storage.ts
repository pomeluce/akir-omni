interface StorageData<T> {
  data: T;
  expire?: number;
}

export interface StorageOptions {
  type?: 'local' | 'session';
  prefix?: string;
}

export interface StorageAdapter<T> {
  get(key: string, defaultValue?: T): T | null;
  set(key: string, data: T, expireSeconds?: number): void;
  remove(key: string): void;
}

export function createStorage<T>(options?: StorageOptions): StorageAdapter<T> {
  const driver = options?.type === 'session' ? sessionStorage : localStorage;
  const prefix = options?.prefix;

  const resolveKey = (key: string): string => (prefix ? `${prefix}:${key}` : key);

  const get = (key: string, defaultValue?: T): T | null => {
    try {
      const raw = driver.getItem(resolveKey(key));
      if (!raw) return defaultValue ?? null;
      const entry = JSON.parse(raw) as StorageData<T>;
      if (entry.expire && entry.expire < Date.now()) {
        remove(key);
        return defaultValue ?? null;
      }
      return entry.data;
    } catch {
      return defaultValue ?? null;
    }
  };

  const set = (key: string, data: T, expireSeconds?: number): void => {
    const entry: StorageData<T> = { data };
    if (expireSeconds) {
      entry.expire = Date.now() + expireSeconds * 1000;
    }
    driver.setItem(resolveKey(key), JSON.stringify(entry));
  };

  const remove = (key: string): void => {
    driver.removeItem(resolveKey(key));
  };

  return { get, set, remove };
}

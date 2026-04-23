import type { PlatformInfo } from './platform.js';

export interface DeviceAdapter {
  getInfo(): Promise<PlatformInfo>;
  isOnline(): boolean;
  onNetworkChange(cb: (online: boolean) => void): () => void;
}

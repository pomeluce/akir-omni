import type { DeviceAdapter } from '@/types/device.js';
import type { PlatformInfo } from '@/types/platform.js';
import { detectPlatform } from '@/detect-platform.js';

function parseUserAgent(): { os: string; version: string } {
  const ua = navigator.userAgent;
  let os = 'unknown';
  if (ua.includes('win')) os = 'windows';
  else if (ua.includes('mac')) os = 'macos';
  else if (ua.includes('linux')) os = 'linux';
  return { os, version: navigator.userAgent.slice(0, 64) };
}

export const browserDevice: DeviceAdapter = {
  async getInfo(): Promise<PlatformInfo> {
    const platform = detectPlatform();
    const { os, version } = parseUserAgent();
    return {
      platform,
      isElectron: platform === 'desktop',
      os,
      version,
    };
  },
  isOnline(): boolean {
    return navigator.onLine;
  },
  onNetworkChange(cb: (online: boolean) => void): () => void {
    const handler = () => cb(navigator.onLine);
    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);
    return () => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    };
  },
};

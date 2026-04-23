import type { WindowAdapter } from '@/types/window.js';

export const browserWindow: WindowAdapter = {
  isSupported(): boolean {
    return false;
  },
  async minimize(): Promise<void> {
    throw new Error('Window operations are not supported in browser');
  },
  async maximize(): Promise<void> {
    throw new Error('Window operations are not supported in browser');
  },
  async close(): Promise<void> {
    throw new Error('Window operations are not supported in browser');
  },
  async isFullscreen(): Promise<boolean> {
    return !!document.fullscreenElement;
  },
  async toggleFullscreen(): Promise<void> {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  },
};

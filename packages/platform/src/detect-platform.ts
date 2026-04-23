import type { AppPlatform } from './types/platform.js';

export function detectPlatform(): AppPlatform {
  if (typeof window === 'undefined') return 'web';

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes(' electron/')) {
    return 'desktop';
  }

  return 'web';
}

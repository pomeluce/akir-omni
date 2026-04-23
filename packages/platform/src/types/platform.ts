export type AppPlatform = 'web' | 'desktop';

export interface PlatformInfo {
  platform: AppPlatform;
  isElectron: boolean;
  os: string;
  version: string;
}

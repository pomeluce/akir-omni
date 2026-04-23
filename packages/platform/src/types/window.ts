export interface WindowAdapter {
  minimize(): Promise<void>;
  maximize(): Promise<void>;
  close(): Promise<void>;
  isFullscreen(): Promise<boolean>;
  toggleFullscreen(): Promise<void>;
  isSupported(): boolean;
}

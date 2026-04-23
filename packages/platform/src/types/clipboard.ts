export interface ClipboardAdapter {
  writeText(text: string): Promise<void>;
  readText(): Promise<string>;
  isSupported(): boolean;
}

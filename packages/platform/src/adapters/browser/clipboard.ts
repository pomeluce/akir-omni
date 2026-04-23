import type { ClipboardAdapter } from '@/types/clipboard.js';

export const browserClipboard: ClipboardAdapter = {
  isSupported(): boolean {
    return !!navigator.clipboard;
  },
  async writeText(text: string): Promise<void> {
    await navigator.clipboard.writeText(text);
  },
  async readText(): Promise<string> {
    return await navigator.clipboard.readText();
  },
};

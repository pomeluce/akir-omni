import type { FileAdapter } from '@/types/file.js';

export const browserFile: FileAdapter = {
  async pickFile(): Promise<null> {
    console.warn('File picker is not supported in browser environment');
    return null;
  },
  async saveFile(): Promise<void> {
    console.warn('File save is not supported in browser environment');
  },
  async readFile(): Promise<string> {
    throw new Error('File read is not supported in browser environment');
  },
};

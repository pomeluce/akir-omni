export interface FilePickOptions {
  accept?: string;
  multiple?: boolean;
}

export interface FileResult {
  name: string;
  content: string;
  size: number;
  type: string;
}

export interface FileSaveOptions {
  fileName: string;
  content: string;
  contentType?: string;
}

export interface FileAdapter {
  pickFile(options?: FilePickOptions): Promise<FileResult | null>;
  saveFile(options: FileSaveOptions): Promise<void>;
  readFile(path: string): Promise<string>;
}

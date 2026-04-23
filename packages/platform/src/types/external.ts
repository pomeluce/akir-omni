export interface ExternalAdapter {
  openUrl(url: string): Promise<void>;
  openEmail(email: string, subject?: string): Promise<void>;
}

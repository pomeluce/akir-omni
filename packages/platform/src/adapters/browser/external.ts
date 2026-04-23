import type { ExternalAdapter } from '@/types/external.js';

export const browserExternal: ExternalAdapter = {
  async openUrl(url: string): Promise<void> {
    window.open(url, '_blank', 'noopener,noreferrer');
  },
  async openEmail(email: string, subject?: string): Promise<void> {
    const params = new URLSearchParams();
    if (subject) params.set('subject', subject);
    window.open(`mailto:${email}?${params.toString()}`, '_self');
  },
};

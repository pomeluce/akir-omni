import type { NotificationAdapter } from '@/types/notification.js';

export const browserNotification: NotificationAdapter = {
  isSupported(): boolean {
    return 'Notification' in window;
  },
  async requestPermission(): Promise<NotificationPermission> {
    return await Notification.requestPermission();
  },
  async send(options): Promise<void> {
    new Notification(options.title, { body: options.body, icon: options.icon });
  },
};

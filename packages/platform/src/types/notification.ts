export interface NotificationOptions {
  title: string;
  body?: string;
  icon?: string;
}

export interface NotificationAdapter {
  requestPermission(): Promise<NotificationPermission>;
  send(options: NotificationOptions): Promise<void>;
  isSupported(): boolean;
}

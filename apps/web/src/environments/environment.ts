export const env = {
  API_BASE_URL: import.meta.env['VITE_API_BASE_URL'] ?? 'http://localhost:3000/api',
  APP_ENV: (import.meta.env['VITE_APP_ENV'] ?? 'development') as 'development' | 'production',
  APP_VERSION: import.meta.env['VITE_APP_VERSION'] ?? '0.1.0',
  APP_TITLE: import.meta.env['VITE_APP_TITLE'] ?? 'Akir Omni',
} as const;

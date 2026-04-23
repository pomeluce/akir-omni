import axios from 'axios';
import type { AxiosRequestConfig } from 'axios';
import { requestInterceptor, responseInterceptor, responseErrorInterceptor } from './interceptors.js';

const DEFAULT_CONFIG: AxiosRequestConfig = {
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
};

export function createHttpClient(baseURL?: string) {
  const client = axios.create({ ...DEFAULT_CONFIG, baseURL });
  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
  return client;
}

export const httpClient = createHttpClient(import.meta.env?.['VITE_API_BASE_URL'] as string);

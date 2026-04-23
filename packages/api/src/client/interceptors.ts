import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export function requestInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
  return config;
}

export function responseInterceptor<T>(response: AxiosResponse<T>): AxiosResponse<T> {
  return response;
}

export function responseErrorInterceptor(error: unknown): Promise<never> {
  throw error;
}

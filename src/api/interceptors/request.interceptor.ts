import { InternalAxiosRequestConfig } from 'axios';

/**
 * 请求拦截器
 * 处理身份验证和其他请求修改
 */
export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // 从 localStorage 获取认证令牌
  const token = localStorage.getItem('auth_token');

  // 如果令牌存在，将其添加到请求头中
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

/**
 * 请求错误拦截器
 * 处理请求错误
 */
export const requestErrorInterceptor = (error: any): Promise<never> => {
  console.error('请求错误:', error);
  return Promise.reject(error instanceof Error ? error : new Error(String(error)));
};

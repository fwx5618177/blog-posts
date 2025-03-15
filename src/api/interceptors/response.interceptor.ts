import { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { API_ENDPOINTS } from '../config';
import { AuthTokens, ApiErrorResponse } from '../types';
import message from '../../components/Message';

/**
 * 响应拦截器
 * 处理成功的响应
 */
export const responseInterceptor = (response: AxiosResponse): AxiosResponse => {
  // 检查响应是否成功
  if (response.data && response.data.success === false) {
    // 如果后端返回错误状态，显示错误消息
    const errorMsg: string =
      typeof response.data.message === 'string' ? response.data.message : '操作失败';
    message.error(errorMsg);
  }
  return response;
};

/**
 * 响应错误拦截器
 * 处理响应错误，包括身份验证错误
 */
export const responseErrorInterceptor = async (error: AxiosError): Promise<any> => {
  const originalRequest = error.config as AxiosRequestConfig;

  // 处理 401 未授权错误
  if (error.response?.status === 401 && originalRequest) {
    // 检查是否不是刷新令牌请求，以避免无限循环
    if (originalRequest.url && !originalRequest.url.includes(API_ENDPOINTS.auth.refreshToken)) {
      try {
        // 尝试刷新令牌
        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken) {
          // 动态导入 axios 以避免循环依赖
          const axios = (await import('axios')).default;
          const { API_CONFIG } = await import('../config');

          // 为刷新令牌请求创建新的 axios 实例
          const refreshClient = axios.create(API_CONFIG);

          // 调用刷新令牌端点
          const response = await refreshClient.post<AuthTokens>(API_ENDPOINTS.auth.refreshToken, {
            refreshToken,
          });

          // 如果成功，更新令牌
          if (response.data.token) {
            localStorage.setItem('auth_token', response.data.token);
            if (response.data.refreshToken) {
              localStorage.setItem('refresh_token', response.data.refreshToken);
            }

            // 使用新令牌更新 Authorization 头
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
            }

            // 重试原始请求
            return axios(originalRequest);
          }
        }
      } catch (refreshError) {
        console.error('令牌刷新失败:', refreshError);
        // 处理刷新令牌失败时的登出
        localStorage.removeItem('auth_token');
        localStorage.removeItem('refresh_token');
        message.error('登录已过期，请重新登录');
        window.location.href = '/login';
      }
    } else {
      // 如果这是一个失败的刷新令牌请求，登出用户
      localStorage.removeItem('auth_token');
      localStorage.removeItem('refresh_token');
      message.error('登录已过期，请重新登录');
      window.location.href = '/login';
    }
  }

  // 获取错误响应数据
  const errorData = error.response?.data as ApiErrorResponse | undefined;
  const errorMessage: string = typeof errorData?.message === 'string' ? errorData.message : '';

  // 处理其他错误状态
  switch (error.response?.status) {
    case 400:
      console.error('错误请求:', errorData);
      message.error(errorMessage || '请求参数错误');
      break;
    case 403:
      console.error('禁止访问:', errorData);
      message.error(errorMessage || '您没有权限执行此操作');
      break;
    case 404:
      console.error('未找到:', errorData);
      message.error(errorMessage || '请求的资源不存在');
      break;
    case 500:
      console.error('服务器错误:', errorData);
      message.error(errorMessage || '服务器错误，请稍后再试');
      break;
    default:
      console.error('API 错误:', error);
      message.error(errorMessage || '请求失败，请稍后再试');
  }

  // 返回带有错误的被拒绝的 Promise
  return Promise.reject(error instanceof Error ? error : new Error(String(error)));
};

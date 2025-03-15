import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_CONFIG } from './config';
import { requestInterceptor, requestErrorInterceptor } from './interceptors/request.interceptor';
import { responseInterceptor, responseErrorInterceptor } from './interceptors/response.interceptor';
import { ApiResponse } from '../types';

// 使用默认配置创建 axios 实例
export const apiClient: AxiosInstance = axios.create(API_CONFIG);

// 添加请求拦截器
apiClient.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

// 添加响应拦截器
apiClient.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

// 带有类型安全的通用 API 请求方法
export const apiRequest = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await apiClient(config);

    // 检查响应状态
    if (!response.data.success || response.data.code !== 200) {
      return Promise.reject(new Error(response.data.message || '请求失败'));
    }

    return response.data.data;
  } catch (error) {
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  }
};

// HTTP 方法包装器
export const api = {
  /**
   * HTTP GET 请求
   * @param url - 发送请求的 URL
   * @param params - 与请求一起发送的 URL 参数
   * @param config - 额外的 axios 请求配置
   * @returns 带有响应数据的 Promise
   */
  get: <T = any>(
    url: string,
    params?: Record<string, any>,
    config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'params'>
  ): Promise<T> => {
    return apiRequest<T>({
      url,
      method: 'GET',
      params,
      ...config,
    });
  },

  /**
   * HTTP POST 请求
   * @param url - 发送请求的 URL
   * @param data - 作为请求体发送的数据
   * @param config - 额外的 axios 请求配置
   * @returns 带有响应数据的 Promise
   */
  post: <T = any>(
    url: string,
    data?: any,
    config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
  ): Promise<T> => {
    return apiRequest<T>({
      url,
      method: 'POST',
      data,
      ...config,
    });
  },

  /**
   * HTTP PUT 请求
   * @param url - 发送请求的 URL
   * @param data - 作为请求体发送的数据
   * @param config - 额外的 axios 请求配置
   * @returns 带有响应数据的 Promise
   */
  put: <T = any>(
    url: string,
    data?: any,
    config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
  ): Promise<T> => {
    return apiRequest<T>({
      url,
      method: 'PUT',
      data,
      ...config,
    });
  },

  /**
   * HTTP PATCH 请求
   * @param url - 发送请求的 URL
   * @param data - 作为请求体发送的数据
   * @param config - 额外的 axios 请求配置
   * @returns 带有响应数据的 Promise
   */
  patch: <T = any>(
    url: string,
    data?: any,
    config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data'>
  ): Promise<T> => {
    return apiRequest<T>({
      url,
      method: 'PATCH',
      data,
      ...config,
    });
  },

  /**
   * HTTP DELETE 请求
   * @param url - 发送请求的 URL
   * @param config - 额外的 axios 请求配置
   * @returns 带有响应数据的 Promise
   */
  delete: <T = any>(
    url: string,
    config?: Omit<AxiosRequestConfig, 'url' | 'method'>
  ): Promise<T> => {
    return apiRequest<T>({
      url,
      method: 'DELETE',
      ...config,
    });
  },
};

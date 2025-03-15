import { AxiosRequestConfig } from 'axios';

/**
 * 扩展的 Axios 请求配置，包含额外属性
 */
export interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

/**
 * API 错误响应
 */
export interface ApiErrorResponse {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

/**
 * API 成功响应
 */
export interface ApiSuccessResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

/**
 * 认证令牌
 */
export interface AuthTokens {
  token: string;
  refreshToken: string;
  expiresIn: number;
}

/**
 * 登录凭证
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * 注册数据
 */
export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

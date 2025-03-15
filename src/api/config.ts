/**
 * API 配置
 * 此文件包含 API 客户端的配置信息
 */

// 不同环境的基础 URL
const API_URLS = {
  development: 'http://localhost:3000/api',
  test: 'http://test-api.example.com/api',
  production: 'https://api.example.com/api',
};

// 获取当前环境
const ENV = import.meta.env.MODE || 'development';

// 配置对象
export const API_CONFIG = {
  baseURL: API_URLS[ENV as keyof typeof API_URLS],
  timeout: 30000, // 30秒超时
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// API 端点
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
  },
  posts: {
    list: '/posts',
    detail: (id: string) => `/posts/${id}`,
    create: '/posts',
    update: (id: string) => `/posts/${id}`,
    delete: (id: string) => `/posts/${id}`,
  },
  categories: {
    list: '/categories',
    detail: (id: string) => `/categories/${id}`,
    posts: (id: string) => `/categories/${id}/posts`,
  },
  tags: {
    list: '/tags',
    detail: (id: string) => `/tags/${id}`,
    posts: (id: string) => `/tags/${id}/posts`,
  },
  users: {
    profile: '/users/profile',
    update: '/users/profile',
  },
};

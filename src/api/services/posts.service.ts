import { api } from '../client';
import { API_ENDPOINTS } from '../config';
import { Post, ApiResponse, PostFilters, PostSortOptions } from '../../types';

/**
 * 文章服务
 * 处理所有与文章相关的 API 请求
 */
export const PostsService = {
  /**
   * 获取所有文章，支持可选的过滤和排序
   * @param filters - 可选的文章过滤条件
   * @param sort - 可选的排序选项
   * @param page - 分页的页码
   * @param limit - 每页项目数量
   * @returns 包含文章数据和分页信息的 Promise
   */
  getPosts: (
    filters?: PostFilters,
    sort?: PostSortOptions,
    page = 1,
    limit = 10
  ): Promise<ApiResponse<Post[]>> => {
    return api.get<ApiResponse<Post[]>>(API_ENDPOINTS.posts.list, {
      ...filters,
      ...(sort && { sort_by: sort.field, sort_order: sort.order }),
      page,
      limit,
    });
  },

  /**
   * 通过 ID 获取单个文章
   * @param id - 文章 ID
   * @returns 包含文章数据的 Promise
   */
  getPost: (id: string): Promise<Post> => {
    return api.get<Post>(API_ENDPOINTS.posts.detail(id));
  },

  /**
   * 创建新文章
   * @param postData - 要创建的文章数据
   * @returns 包含已创建文章数据的 Promise
   */
  createPost: (postData: Partial<Post>): Promise<Post> => {
    return api.post<Post>(API_ENDPOINTS.posts.create, postData);
  },

  /**
   * 更新现有文章
   * @param id - 文章 ID
   * @param postData - 要更新的文章数据
   * @returns 包含已更新文章数据的 Promise
   */
  updatePost: (id: string, postData: Partial<Post>): Promise<Post> => {
    return api.put<Post>(API_ENDPOINTS.posts.update(id), postData);
  },

  /**
   * 删除文章
   * @param id - 文章 ID
   * @returns 包含成功消息的 Promise
   */
  deletePost: (id: string): Promise<{ success: boolean; message: string }> => {
    return api.delete<{ success: boolean; message: string }>(API_ENDPOINTS.posts.delete(id));
  },

  /**
   * 点赞文章
   * @param id - 文章 ID
   * @returns 包含已更新文章数据的 Promise
   */
  likePost: (id: string): Promise<Post> => {
    return api.post<Post>(`${API_ENDPOINTS.posts.detail(id)}/like`);
  },

  /**
   * 获取文章的评论
   * @param id - 文章 ID
   * @returns 包含评论数据的 Promise
   */
  getPostComments: (id: string): Promise<Comment[]> => {
    return api.get<Comment[]>(`${API_ENDPOINTS.posts.detail(id)}/comments`);
  },

  /**
   * 为文章添加评论
   * @param id - 文章 ID
   * @param commentData - 评论数据
   * @returns 包含已创建评论数据的 Promise
   */
  addComment: (id: string, commentData: { content: string }): Promise<Comment> => {
    return api.post<Comment>(`${API_ENDPOINTS.posts.detail(id)}/comments`, commentData);
  },
};

import { useState, useEffect } from 'react';
import { PostsService } from '../../api/services/posts.service';
import { Post, ApiResponse, PostFilters, PostSortOptions } from '../../types';
import message from '../../components/Message';

interface UsePostsDataProps {
  initialFilters?: PostFilters;
  initialSort?: PostSortOptions;
  initialPage?: number;
  initialLimit?: number;
}

interface UsePostsDataReturn {
  posts: Post[];
  loading: boolean;
  error: Error | null;
  totalPosts: number;
  totalPages: number;
  currentPage: number;
  filters: PostFilters;
  sort: PostSortOptions | undefined;
  setFilters: (filters: PostFilters) => void;
  setSort: (sort: PostSortOptions) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  refetch: () => Promise<void>;
}

/**
 * 用于获取和管理文章数据的自定义钩子
 */
export const usePostsData = ({
  initialFilters = {},
  initialSort,
  initialPage = 1,
  initialLimit = 10,
}: UsePostsDataProps = {}): UsePostsDataReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [limit, setLimit] = useState<number>(initialLimit);
  const [filters, setFilters] = useState<PostFilters>(initialFilters);
  const [sort, setSort] = useState<PostSortOptions | undefined>(initialSort);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await PostsService.getPosts(filters, sort, currentPage, limit);

      if (response.success && response.code === 200) {
        setPosts(response.data);

        if (response.meta?.pagination) {
          setTotalPosts(response.meta.pagination.total);
          setTotalPages(response.meta.pagination.pageCount);
        }

        if (response.data.length === 0 && currentPage > 1) {
          // 如果当前页没有数据，且不是第一页，则回到上一页
          setCurrentPage(prev => Math.max(prev - 1, 1));
        }
      } else {
        throw new Error(response.message || '获取文章失败');
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('获取文章失败'));
      setPosts([]);
      message.error('获取文章列表失败，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  // 当依赖项变化时获取文章
  useEffect(() => {
    void fetchPosts();
  }, [currentPage, limit, filters, sort]);

  // 处理页面变化
  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  return {
    posts,
    loading,
    error,
    totalPosts,
    totalPages,
    currentPage,
    filters,
    sort,
    setFilters,
    setSort,
    setPage,
    setLimit,
    refetch: fetchPosts,
  };
};

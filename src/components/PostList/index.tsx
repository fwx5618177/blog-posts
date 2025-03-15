import React from 'react';
import PostCard from '../PostCard';
import Pagination from '../Pagination';
import Loading from '../Loading';
import { usePostsData } from './usePostsData';
import { PostFilters, PostSortOptions } from '../../types';
import './PostList.scss';

interface PostListProps {
  initialFilters?: PostFilters;
  initialSort?: PostSortOptions;
  layout?: 'grid' | 'list';
  showFeatured?: boolean;
}

const PostList: React.FC<PostListProps> = ({
  initialFilters,
  initialSort,
  layout = 'grid',
  showFeatured = false,
}) => {
  const { posts, loading, error, totalPages, currentPage, setPage, setFilters, setSort } =
    usePostsData({
      initialFilters,
      initialSort,
      initialPage: 1,
      initialLimit: 10,
    });

  // 处理页面变化
  const handlePageChange = (page: number) => {
    setPage(page);
    // 页面变化时滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 处理排序变化
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const [field, order] = value.split('-');
    setSort({
      field: field as PostSortOptions['field'],
      order: order as PostSortOptions['order'],
    });
  };

  // 渲染加载状态
  if (loading && posts.length === 0) {
    return <Loading />;
  }

  // 渲染错误状态
  if (error) {
    return (
      <div className="error-container">
        <h3>加载文章时出错</h3>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()} className="btn">
          重试
        </button>
      </div>
    );
  }

  // 渲染空状态
  if (posts.length === 0) {
    return (
      <div className="empty-container">
        <h3>未找到文章</h3>
        <p>尝试更改过滤条件或稍后再查看。</p>
      </div>
    );
  }

  return (
    <div className="post-list-container">
      <div className="post-list-header">
        <div className="post-count">
          显示 <span>{posts.length}</span> 篇文章
        </div>
        <div className="post-list-controls">
          <div className="sort-control">
            <label htmlFor="sort-select">排序方式：</label>
            <select
              id="sort-select"
              onChange={handleSortChange}
              value={`${initialSort?.field || 'publishedAt'}-${initialSort?.order || 'desc'}`}
            >
              <option value="publishedAt-desc">最新优先</option>
              <option value="publishedAt-asc">最旧优先</option>
              <option value="title-asc">标题 (A-Z)</option>
              <option value="title-desc">标题 (Z-A)</option>
              <option value="views-desc">最多浏览</option>
              <option value="likes-desc">最多点赞</option>
            </select>
          </div>
          <div className="layout-control">
            <button
              className={`layout-button ${layout === 'grid' ? 'active' : ''}`}
              aria-label="网格布局"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
            <button
              className={`layout-button ${layout === 'list' ? 'active' : ''}`}
              aria-label="列表布局"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`post-list ${layout}`}>
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            variant={showFeatured && post.featured ? 'featured' : 'default'}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PostList;

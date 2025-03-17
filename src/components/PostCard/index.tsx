import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PostCardProps } from '../../types';
import './PostCard.scss';

const PostCard: React.FC<PostCardProps> = ({ post, variant = 'default' }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // 在小屏幕和中等屏幕上使用更简短的日期格式
    if (windowWidth <= 1200) {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(date);
    }

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  // 根据屏幕尺寸确定显示的标签数量
  const getTagsToShow = () => {
    if (windowWidth <= 768) {
      return 3; // 移动设备显示3个标签
    } else if (windowWidth <= 1200) {
      return 4; // 中等屏幕显示4个标签
    }
    return 5; // 大屏幕显示5个标签
  };

  const tagsToShow = getTagsToShow();

  return (
    <article className={`post-card post-card-${variant}`}>
      {post.coverImage ? (
        <Link to={`/blog/${post.slug}`} className="post-card-image-link">
          <div
            className="post-card-image"
            style={{ backgroundImage: `url(${post.coverImage})` }}
            aria-label={post.title}
          ></div>
          {post.featured && variant !== 'compact' && (
            <span className="post-card-featured-badge">Featured</span>
          )}
        </Link>
      ) : (
        <Link to={`/blog/${post.slug}`} className="post-card-image-link">
          <div className="post-card-image post-card-image-placeholder" aria-label={post.title}>
            <span className="post-card-image-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </span>
          </div>
          {post.featured && variant !== 'compact' && (
            <span className="post-card-featured-badge">Featured</span>
          )}
        </Link>
      )}

      <div className="post-card-content">
        <header className="post-card-header">
          {post.categories.length > 0 && (
            <div className="post-card-categories">
              {post.categories.map(category => (
                <Link
                  key={category.id}
                  to={`/categories/${category.slug}`}
                  className="post-card-category"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}

          <h2 className="post-card-title">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
        </header>

        {variant !== 'compact' && (
          <div className="post-card-excerpt">
            <p>{post.excerpt}</p>
          </div>
        )}

        <footer className="post-card-meta">
          <div className="post-card-author">
            {post.author.avatar && (
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="post-card-author-image"
              />
            )}
            <span className="post-card-author-name">{post.author.name}</span>
          </div>

          <div className="post-card-meta-right">
            <span className="post-card-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="post-card-icon"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {formatDate(post.publishedAt)}
            </span>
            <span className="post-card-reading-time">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="post-card-icon"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {post.readingTime} min
            </span>
          </div>
        </footer>

        {post.tags && post.tags.length > 0 && (
          <div className="post-card-tags">
            {post.tags.slice(0, tagsToShow).map(tag => (
              <Link key={tag.id} to={`/tags/${tag.slug}`} className="post-card-tag">
                #{tag.name}
              </Link>
            ))}
            {post.tags.length > tagsToShow && (
              <span className="post-card-tag">+{post.tags.length - tagsToShow}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default PostCard;

import React from 'react';
import { Link } from 'react-router-dom';
import { PostCardProps } from '../../types';
import './PostCard.scss';

const PostCard: React.FC<PostCardProps> = ({ post, variant = 'default' }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <article className={`post-card post-card-${variant}`}>
      {post.coverImage && (
        <Link to={`/blog/${post.slug}`} className="post-card-image-link">
          <div
            className="post-card-image"
            style={{ backgroundImage: `url(${post.coverImage})` }}
            aria-label={post.title}
          ></div>
          {post.featured && variant !== 'compact' && (
            <span className="post-card-featured">Featured</span>
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
            <span className="post-card-date">{formatDate(post.publishedAt)}</span>
            <span className="post-card-reading-time">{post.readingTime} min read</span>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default PostCard;

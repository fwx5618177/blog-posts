import React, { useState } from 'react';
import classnames from 'classnames';
import PostCard from '@/components/PostCard';
import { MOCK_POSTS } from './mockData';
import styles from './index.module.scss';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className={styles.blogPage}>
      <div className={styles.blogHeader}>
        <div className={styles.container}>
          <h1 className={styles.blogTitle}>Blog</h1>
          <p className={styles.blogDescription}>
            Explore our latest articles, tutorials, and insights on web development, design, and
            technology.
          </p>

          <div className={styles.blogFilters}>
            <div className={styles.searchFilter}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchQuery(e.target.value)
                }
                className={styles['search-input']}
              />
            </div>

            <div className={styles['category-filter']}>
              <button
                className={classnames(styles['category-btn'], {
                  [styles.active]: selectedCategory === null,
                })}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {MOCK_POSTS.map(post => (
                <button
                  key={post.category.id}
                  className={classnames(styles['category-btn'], {
                    [styles.active]: selectedCategory === post.category.slug,
                  })}
                  onClick={() => setSelectedCategory(post.category.slug)}
                >
                  {post.category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles['blog-content']}>
        <div className={styles.container}>
          {MOCK_POSTS.length > 0 ? (
            <div className={styles['posts-grid']}>
              {MOCK_POSTS.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className={styles['no-posts']}>
              <h3>No posts found</h3>
              <p>Try adjusting your search or filter criteria.</p>
              <button
                className={styles['reset-btn']}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

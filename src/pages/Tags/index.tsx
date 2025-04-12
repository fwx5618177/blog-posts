import React from 'react';
import { Link } from 'react-router-dom';
import styles from './tags.module.scss';
import { MOCK_TAGS } from './mock.data';

const TagsPage: React.FC = () => {
  return (
    <div className={styles['tags-page']}>
      <div className="container">
        <div className={styles['tags-header']}>
          <h1 className={styles['tags-title']}>Tags</h1>
          <p className={styles['tags-description']}>
            Browse all our articles by tag. Find content that matches your interests.
          </p>
        </div>

        <div className={styles['tags-cloud']}>
          {MOCK_TAGS.map(tag => (
            <Link
              key={tag.id}
              to={`/tags/${tag.slug}`}
              className={styles['tag-item']}
              style={{
                fontSize: `calc(var(--font-size-base) + ${Math.min(tag.postCount / 3, 5) * 0.1}rem)`,
              }}
            >
              <span className="tag-name">{tag.name}</span>
              <span className={styles['tag-count']}>{tag.postCount}</span>
            </Link>
          ))}
        </div>

        <div className={styles['tags-list']}>
          <h2 className={styles['section-title']}>All Tags</h2>
          <div className={styles['tags-grid']}>
            {MOCK_TAGS.map(tag => (
              <Link key={tag.id} to={`/tags/${tag.slug}`} className={styles['tag-card']}>
                <h3 className={styles['tag-title']}>{tag.name}</h3>
                <span className={styles['tag-count']}>{tag.postCount} articles</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_CATEGORIES } from './mockData';
import styles from './index.module.scss';

/**
 * Categories page component
 *
 * Displays a list of all blog categories
 */
const CategoriesPage: React.FC = () => {
  return (
    <div className={styles['categories-page']}>
      <div className={styles.container}>
        <div className={styles['categories-header']}>
          <h1 className={styles['categories-title']}>Categories</h1>
          <p className={styles['categories-description']}>
            Browse all our articles by category. Find content that matches your interests.
          </p>
        </div>

        <div className={styles['categories-grid']}>
          {MOCK_CATEGORIES.map(category => (
            <Link
              key={category.id}
              to={`/categories/${category.slug}`}
              className={styles['category-card']}
            >
              <div className={styles['category-image']}>
                {category.featuredImage && <img src={category.featuredImage} alt={category.name} />}
              </div>
              <div className={styles['category-content']}>
                <h2 className={styles['category-title']}>{category.name}</h2>
                <p className={styles['category-description']}>{category.description}</p>
                <div className={styles['category-meta']}>
                  <span className={styles['post-count']}>{category.postCount} articles</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

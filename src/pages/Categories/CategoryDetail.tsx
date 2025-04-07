import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import { MOCK_CATEGORIES, MOCK_CATEGORY_POSTS } from './mockData';
import ErrorPage from './ErrorPage';
import styles from './detail.module.scss';

/**
 * Category Detail page component
 *
 * Displays all blog posts for a specific category
 */
const CategoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? MOCK_CATEGORIES.find(c => c.slug === slug) : null;
  const posts = slug ? MOCK_CATEGORY_POSTS.filter(p => p.category.slug === slug) : [];

  if (!category) {
    return (
      <ErrorPage
        type="category"
        title="Category Not Found"
        message="The category "
        highlightText={`"${slug}"`}
        messageSuffix=" doesn't exist or has been removed."
        primaryAction={{
          text: 'Browse All Categories',
          to: '/categories',
        }}
        secondaryAction={{
          text: 'Explore Blog',
          to: '/blog',
        }}
      />
    );
  }

  return (
    <div className={styles['category-detail-page']}>
      <div className={styles.container}>
        <div className={styles['category-header']}>
          <h1 className={styles['category-title']}>
            Category: <span>{category.name}</span>
          </h1>
          <p className={styles['category-description']}>{category.description}</p>
          <div className={styles['category-meta']}>
            <span className={styles['post-count']}>
              {category.postCount} articles in this category
            </span>
          </div>
        </div>

        <div className={styles['category-content']}>
          {posts.length > 0 ? (
            <div className={styles['category-posts']}>
              <div className={styles['posts-grid']}>
                {posts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          ) : (
            <ErrorPage
              type="posts"
              title="No Posts Found"
              message="We couldn't find any articles in the "
              highlightText={category.name}
              messageSuffix=" category. New content is added regularly, so please check back soon!"
              primaryAction={{
                text: 'Browse All Posts',
                to: '/blog',
              }}
              secondaryAction={{
                text: 'View All Categories',
                to: '/categories',
              }}
            />
          )}
        </div>

        <div className={styles['category-footer']}>
          <Link to="/categories" className={styles['back-link']}>
            ← Back to Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;

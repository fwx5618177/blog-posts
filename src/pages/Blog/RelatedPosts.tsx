import styles from './related-posts.module.scss';
import { Link } from 'react-router-dom';
import { PostDetail } from './types';
import { formatDate } from '@/utils/formatDate';

const RelatedPosts: React.FC<{ posts: PostDetail[] }> = ({ posts }) => {
  return (
    <div className={styles.relatedPosts}>
      <h3 className={styles.relatedPostsTitle}>You Might Also Like</h3>
      <div className={styles.relatedPostsGrid}>
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} key={post.id} className={styles.relatedPostCard}>
            <div className={styles.relatedPostImage}>
              <img src={post.featuredImage} alt={post.title} />
              <span className={styles.postCategoryLabel}>{post.category.name}</span>
            </div>
            <div className={styles.relatedPostContent}>
              <h4 className={styles.relatedPostTitle}>{post.title}</h4>
              <div className={styles.relatedPostMeta}>
                <span className={styles.relatedPostDate}>
                  {formatDate(post.publishedAt, 'short')}
                </span>
                <span className={styles.relatedPostReadTime}>{post.readingTime}</span>
              </div>
              <p className={styles.relatedPostPreview}>{post.excerpt.substring(0, 100)}...</p>
              <span className={styles.relatedPostReadMore}>Read Article</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;

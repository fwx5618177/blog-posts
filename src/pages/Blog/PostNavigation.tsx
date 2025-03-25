import styles from './index.module.scss';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { PostDetail } from './types';
import { formatDate } from '@/utils/formatDate';

const PostNavigation: React.FC<{ previous: PostDetail | null; next: PostDetail | null }> = ({
  previous,
  next,
}) => {
  return (
    <div className={styles.postNavigation}>
      <div className={styles.container}>
        <h3 className={styles.postNavHeading}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Continue Your Reading Journey
        </h3>
        <div className={styles.postNavLinks}>
          {previous ? (
            <Link
              to={`/blog/${previous.slug}`}
              className={classnames(styles.postNavLink, styles.prevPost)}
            >
              <span className={styles.postNavArrow}>&larr;</span>
              <span className={styles.postNavLabel}>Previous Post</span>
              <span className={styles.postNavTitle}>{previous.title}</span>
              <div className={styles.postNavMeta}>
                <span className={styles.postNavDate}>
                  {formatDate(previous.publishedAt, 'short')}
                </span>
              </div>
              <div className={styles.postNavPreview}>{previous.excerpt.substring(0, 120)}...</div>
            </Link>
          ) : (
            <div className={classnames(styles.postNavLink, styles.prevPost, styles.disabled)}>
              <span className={styles.postNavArrow}>&larr;</span>
              <span className={styles.postNavLabel}>Previous Post</span>
              <span className={styles.postNavTitle}>No previous posts</span>
            </div>
          )}

          {next ? (
            <Link
              to={`/blog/${next.slug}`}
              className={classnames(styles.postNavLink, styles.nextPost)}
            >
              <span className={styles.postNavArrow}>&rarr;</span>
              <span className={styles.postNavLabel}>Next Post</span>
              <span className={styles.postNavTitle}>{next.title}</span>
              <div className={styles.postNavMeta}>
                <span className={styles.postNavDate}>{formatDate(next.publishedAt, 'short')}</span>
              </div>
              <div className={styles.postNavPreview}>{next.excerpt.substring(0, 120)}...</div>
            </Link>
          ) : (
            <div className={classnames(styles.postNavLink, styles.nextPost, styles.disabled)}>
              <span className={styles.postNavArrow}>&rarr;</span>
              <span className={styles.postNavLabel}>Next Post</span>
              <span className={styles.postNavTitle}>No newer posts</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostNavigation;

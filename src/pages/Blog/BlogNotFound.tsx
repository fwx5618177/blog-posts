import FileIcon from './FileIcon';
import classnames from 'classnames';
import styles from './blog-not-found.module.scss';
import { Link, useParams } from 'react-router-dom';

export const BlogNotFound: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLDivElement;
    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    container.style.setProperty('--mouse-x', `${x}%`);
    container.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <div className={styles.errorPageContainer} onMouseMove={handleMouseMove}>
      <div className={styles.errorContent}>
        <div className={styles.errorIcon}>
          <FileIcon />
        </div>
        <h1 className={styles.errorTitle}>Post Not Found</h1>
        <p className={styles.errorMessage}>
          The post <span className={styles.highlight}>"{slug}"</span> doesn't exist or has been
          removed.
        </p>
        <div className={styles.errorActions}>
          <Link to="/blog" className={classnames(styles.button, styles.buttonPrimary)}>
            Back to Blog
          </Link>
          <Link to="/" className={classnames(styles.button, styles.buttonSecondary)}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogNotFound;

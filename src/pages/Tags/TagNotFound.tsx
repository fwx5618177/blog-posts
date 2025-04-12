import React from 'react';
import { Link } from 'react-router-dom';
import styles from './tag-not-found.module.scss';

interface TagNotFoundProps {
  message?: string;
}

const TagNotFound: React.FC<TagNotFoundProps> = ({
  message = "The tag you're looking for doesn't exist. Please check the URL and try again.",
}) => {
  return (
    <div className={styles['not-found-container']}>
      <div className={styles['not-found-icon']}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 14h.01M12 16h.01M12 18h.01M12 20h.01M12 22h.01"
          />
        </svg>
      </div>
      <h2 className={styles['not-found-title']}>Tag Not Found</h2>
      <p className={styles['not-found-message']}>{message}</p>
      <Link to="/tags" className="button button-primary">
        View All Tags
      </Link>
    </div>
  );
};

export default TagNotFound;

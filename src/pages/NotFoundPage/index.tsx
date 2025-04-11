import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './not-found-page.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.message}>
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>

        <div className={styles.actions}>
          <button
            className={classNames(styles.button, styles.buttonSecondary)}
            onClick={() => window.history.back()}
          >
            Go Back
          </button>

          <Link to="/" className={classNames(styles.button, styles.buttonPrimary)}>
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

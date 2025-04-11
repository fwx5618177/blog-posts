import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ServerErrorPage.module.scss';

const ServerErrorPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <div className={styles.serverSvg} role="img" aria-label="Server Error Illustration" />
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.statusCode}>500</span>
            <span className={styles.message}>Server Error</span>
          </h1>

          <p className={styles.description}>
            Oops! Something went wrong on our servers. We're working to fix this issue.
          </p>

          <div className={styles.actions}>
            <button
              className={classNames(styles.button, styles.refreshButton)}
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>

            <Link to="/" className={classNames(styles.button, styles.homeButton)}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorPage;

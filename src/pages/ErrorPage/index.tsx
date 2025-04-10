import React, { useEffect } from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import ErrorIcon from './components/ErrorIcon';
import styles from './error-page.module.scss';

const ErrorPage: React.FC = () => {
  const error = useRouteError();

  let errorMessage = 'An unexpected error has occurred.';
  let errorStatus = '500';

  if (isRouteErrorResponse(error)) {
    errorStatus = String(error.status);
    errorMessage = error.statusText || errorMessage;

    if (error.data?.message) {
      errorMessage = error.data.message;
    }
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ErrorIcon className={styles.icon} />
        <div className={styles.status}>{errorStatus}</div>
        <div
          className={styles.statusSVG}
          aria-hidden="true"
          role="img"
          aria-label={`Error ${errorStatus}`}
        ></div>
        <h1 className={styles.title}>Oops! Something went wrong</h1>
        <p className={styles.message}>{errorMessage}</p>

        <div className={styles.actions}>
          <button
            onClick={() => window.history.back()}
            className={styles.secondaryButton}
            aria-label="Go back to previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Go Back</span>
          </button>

          <Link to="/" className={styles.primaryButton} aria-label="Go to homepage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Go to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

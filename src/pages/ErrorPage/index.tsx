import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import './ErrorPage.scss';

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
    <div className="error-page-container">
      <div className="error-content">
        <div className="error-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <div className="error-status">{errorStatus}</div>
        <h1 className="error-title highlight">Oops! Something went wrong</h1>
        <p className="error-message">{errorMessage}</p>

        <div className="error-actions">
          <button onClick={() => window.history.back()} className="button button-secondary">
            Go Back
          </button>

          <Link to="/" className="button button-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

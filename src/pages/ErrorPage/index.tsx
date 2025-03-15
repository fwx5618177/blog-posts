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
    <div className="error-page">
      <div className="error-container">
        <div className="error-status">{errorStatus}</div>
        <h1 className="error-title">Oops! Something went wrong</h1>
        <p className="error-message">{errorMessage}</p>

        <div className="error-actions">
          <button className="btn btn-outline" onClick={() => window.history.back()}>
            Go Back
          </button>

          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

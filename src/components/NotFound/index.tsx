import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

interface NotFoundProps {
  title?: string;
  message?: string;
  showHomeLink?: boolean;
  showBackButton?: boolean;
  customAction?: React.ReactNode;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = 'No Results Found',
  message = "We couldn't find what you're looking for.",
  showHomeLink = true,
  showBackButton = true,
  customAction,
}) => {
  return (
    <div className="not-found">
      <div className="not-found-icon">
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
      <h2 className="not-found-title">{title}</h2>
      <p className="not-found-message">{message}</p>

      <div className="not-found-actions">
        {customAction}

        {showBackButton && (
          <button className="btn btn-outline" onClick={() => window.history.back()}>
            Go Back
          </button>
        )}

        {showHomeLink && (
          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        )}
      </div>
    </div>
  );
};

export default NotFound;

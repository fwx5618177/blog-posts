import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
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
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        </div>
        <div className="error-status">404</div>
        <h1 className="error-title highlight">Page Not Found</h1>
        <p className="error-message">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>

        <div className="error-actions">
          <button className="button button-secondary" onClick={() => window.history.back()}>
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

export default NotFoundPage;

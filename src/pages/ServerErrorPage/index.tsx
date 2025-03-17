import React from 'react';
import { Link } from 'react-router-dom';
import './ServerErrorPage.scss';

const ServerErrorPage: React.FC = () => {
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
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <div className="error-status">503</div>
        <h1 className="error-title highlight">Service Unavailable</h1>
        <p className="error-message">
          The server is temporarily unable to handle your request due to maintenance or overloading.
          Please try again later.
        </p>

        <div className="error-actions">
          <button className="button button-secondary" onClick={() => window.location.reload()}>
            Refresh Page
          </button>

          <Link to="/" className="button button-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorPage;

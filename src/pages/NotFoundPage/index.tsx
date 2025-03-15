import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-status">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          The page you are looking for might have been removed, had its name changed, or is
          temporarily unavailable.
        </p>

        <div className="not-found-actions">
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

export default NotFoundPage;

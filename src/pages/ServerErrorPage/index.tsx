import React from 'react';
import { Link } from 'react-router-dom';
import './ServerErrorPage.scss';

const ServerErrorPage: React.FC = () => {
  return (
    <div className="server-error-page">
      <div className="server-error-container">
        <div className="server-error-status">503</div>
        <h1 className="server-error-title">Service Unavailable</h1>
        <p className="server-error-message">
          The server is temporarily unable to handle your request due to maintenance or overloading.
          Please try again later.
        </p>

        <div className="server-error-actions">
          <button className="btn btn-outline" onClick={() => window.location.reload()}>
            Refresh Page
          </button>

          <Link to="/" className="btn btn-primary">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerErrorPage;

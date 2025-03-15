import React from 'react';
import './MaintenancePage.scss';

const MaintenancePage: React.FC = () => {
  return (
    <div className="maintenance-page">
      <div className="maintenance-container">
        <div className="maintenance-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="7"></circle>
            <polyline points="12 9 12 12 13.5 13.5"></polyline>
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
          </svg>
        </div>
        <h1 className="maintenance-title">We'll Be Right Back</h1>
        <p className="maintenance-message">
          Our site is currently undergoing scheduled maintenance. We apologize for the inconvenience
          and appreciate your patience. Please check back soon.
        </p>

        <div className="maintenance-info">
          <div className="maintenance-time">
            <h3>Estimated Completion</h3>
            <p>We expect to be back online in a few hours.</p>
          </div>
        </div>

        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default MaintenancePage;

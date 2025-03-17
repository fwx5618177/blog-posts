import React from 'react';
import { Link } from 'react-router-dom';
import './Archives.scss';

// Mock data for archive years
const ARCHIVE_YEARS = [
  { year: '2023', count: 24 },
  { year: '2022', count: 36 },
  { year: '2021', count: 28 },
  { year: '2020', count: 19 },
  { year: '2019', count: 15 },
  { year: '2018', count: 12 },
];

/**
 * Archives page component
 *
 * Displays a list of all blog posts organized by year
 */
const ArchivesPage: React.FC = () => {
  return (
    <div className="archives-page">
      <div className="archives-header">
        <h1 className="archives-title">Archives</h1>
        <p className="archives-description">
          Browse all our articles organized by year. Explore our content archive to find older posts
          and resources.
        </p>
      </div>

      <div className="archives-content">
        <div className="year-grid">
          {ARCHIVE_YEARS.map(year => (
            <Link key={year.year} to={`/archives/${year.year}`} className="year-card">
              <h2 className="year-card-title">{year.year}</h2>
              <p className="year-card-count">
                {year.count} {year.count === 1 ? 'article' : 'articles'}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="year-card-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchivesPage;

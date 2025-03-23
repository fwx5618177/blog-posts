import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { ARCHIVE_YEARS } from './mockData';
import { ArrowRight } from './ArrorwRight';

const ArchivesPage: React.FC = () => {
  return (
    <div className={styles['archives-page']}>
      <div className={styles['archives-header']}>
        <h1 className={styles['archives-title']}>Archives</h1>
        <p className={styles['archives-description']}>
          Browse all our articles organized by year. Explore our content archive to find older posts
          and resources.
        </p>
      </div>

      <div className={styles['archives-content']}>
        <div className={styles['year-grid']}>
          {ARCHIVE_YEARS.map(year => (
            <Link key={year.year} to={`/archives/${year.year}`} className={styles['year-card']}>
              <h2 className={styles['year-card-title']}>{year.year}</h2>
              <p className={styles['year-card-count']}>
                {year.count} {year.count === 1 ? 'article' : 'articles'}
              </p>
              <ArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchivesPage;

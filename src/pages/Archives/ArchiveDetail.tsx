import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.module.scss';
import detailStyles from './detail.module.scss';
import { MOCK_POSTS_BY_MONTH } from './mockData';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

const ArchiveDetailPage: React.FC = () => {
  const { year } = useParams<{ year: string }>();
  const currentYear = year || new Date().getFullYear().toString();
  const [activeMonth, setActiveMonth] = useState<string>('');
  const [isNavVisible, setIsNavVisible] = useState(false); // 控制移动端导航的显示状态

  // Get posts for the current year
  const postsForYear = MOCK_POSTS_BY_MONTH[currentYear] || {};
  const months = Object.keys(postsForYear);

  // Calculate total posts for the year
  const totalPosts = Object.values(postsForYear).reduce((total, posts) => total + posts.length, 0);

  // Update active month based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const month = hash.replace('#month-', '');
        setActiveMonth(month);
      } else if (months.length > 0) {
        // Default to first month if no hash
        setActiveMonth(months[0]);
      }
    };

    // Set initial active month
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [months]);

  // Handle month click
  const handleMonthClick = (month: string) => {
    setActiveMonth(month);
    setIsNavVisible(false); // 点击月份后关闭导航（在移动端）
  };

  // Toggle navigation visibility (for mobile)
  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={styles['archives-page']}>
      <div className={styles.container}>
        <div className={styles['archives-header']}>
          <h1 className={styles['archives-title']}>Archives: {currentYear}</h1>
          <p className={styles['archives-description']}>
            Browse all {totalPosts} articles published in {currentYear}.
          </p>
        </div>

        <div className={styles['archives-content']}>
          {months.length > 0 ? (
            <div className={styles['year-section']}>
              <div className={styles['year-header']}>
                <h2 className={styles['year-title']}>
                  {currentYear}
                  <span className={styles['year-count']}>{totalPosts}</span>
                </h2>
              </div>

              <div className={detailStyles['year-content']}>
                <button
                  className={classNames(
                    detailStyles['month-nav-toggle'],
                    detailStyles['mobile-only']
                  )}
                  onClick={toggleNavVisibility}
                  aria-expanded={isNavVisible}
                  aria-controls="month-navigation"
                >
                  {isNavVisible ? 'Hide Months' : 'Show Months'}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={classNames({ [detailStyles['rotate-180']]: isNavVisible })}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                <div
                  id="month-navigation"
                  className={classNames(detailStyles['month-navigation'], {
                    [detailStyles.visible]: isNavVisible,
                  })}
                >
                  <div className={detailStyles['month-nav-title']}>Jump to Month</div>
                  <ul className={detailStyles['month-nav-list']}>
                    {months.map(month => (
                      <li key={month} className={detailStyles['month-nav-item']}>
                        <a
                          href={`#month-${month}`}
                          className={classNames(detailStyles['month-nav-link'], {
                            [detailStyles.active]: activeMonth === month,
                          })}
                          onClick={() => handleMonthClick(month)}
                        >
                          {month}
                          <span className={detailStyles['month-nav-count']}>
                            {postsForYear[month].length}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={detailStyles['month-content']}>
                  {months.map(month => (
                    <div
                      key={month}
                      id={`month-${month}`}
                      className={detailStyles['month-section']}
                    >
                      <div className={detailStyles['month-header']}>
                        <h3 className={detailStyles['month-title']}>
                          {month}
                          <span className={detailStyles['month-count']}>
                            {postsForYear[month].length}
                          </span>
                        </h3>
                      </div>

                      <ul className={detailStyles['post-list']}>
                        {postsForYear[month].map(post => (
                          <li key={post.id} className={detailStyles['post-item']}>
                            <div className={detailStyles['post-meta']}>
                              <span className={detailStyles['post-date']}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={detailStyles['post-icon']}
                                >
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                {formatDate(post.date)}
                              </span>

                              {post.categories.length > 0 && (
                                <div className={detailStyles['post-categories']}>
                                  {post.categories.map(category => (
                                    <Link
                                      key={category.id}
                                      to={`/categories/${category.slug}`}
                                      className={detailStyles['post-category']}
                                    >
                                      {category.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>

                            <h3 className={detailStyles['post-title']}>
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>

                            <p className={detailStyles['post-excerpt']}>{post.excerpt}</p>

                            {post.tags.length > 0 && (
                              <div className={detailStyles['post-tags']}>
                                {post.tags.map(tag => (
                                  <Link
                                    key={tag.id}
                                    to={`/tags/${tag.slug}`}
                                    className={detailStyles['post-tag']}
                                  >
                                    #{tag.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className={detailStyles['error-page-container']}>
              <div className={detailStyles['error-content']}>
                <div className={detailStyles['error-icon']}>
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
                <h1 className={classNames(detailStyles['error-title'], detailStyles.highlight)}>
                  No Posts Found
                </h1>
                <p className={detailStyles['error-message']}>
                  No articles were published in{' '}
                  <span className={detailStyles.highlight}>{currentYear}</span>. Please check other
                  years in our archives.
                </p>
                <div className={detailStyles['error-actions']}>
                  <Link
                    to="/archives"
                    className={classNames(detailStyles.button, detailStyles['button-primary'])}
                  >
                    Back to Archives
                  </Link>
                  <Link
                    to="/blog"
                    className={classNames(detailStyles.button, detailStyles['button-secondary'])}
                  >
                    Browse All Posts
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchiveDetailPage;

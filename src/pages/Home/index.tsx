import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PostCard from '../../components/PostCard';
import styles from './home.module.scss';
import { homePageData } from './mockData';

/**
 * Home page component
 */
const HomePage: React.FC = () => {
  // Limit recent posts to a maximum of 6
  const displayedRecentPosts = homePageData.recentPosts.slice(0, 6);
  const hasMorePosts = homePageData.recentPosts.length > 6;

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={classnames(styles.section, styles.heroSection)}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Enterprise Web Development Insights</h1>
              <p className={styles.heroSubtitle}>
                Expert analysis, best practices, and cutting-edge techniques for building modern
                enterprise applications
              </p>
              <div className={styles.heroActions}>
                <Link to="/blog" className={classnames(styles.btn, styles.btnPrimary)}>
                  Explore Articles
                </Link>
                <Link to="/resources" className={classnames(styles.btn, styles.btnOutline)}>
                  View Resources
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Enterprise Web Development"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className={classnames(styles.section, styles.featuredSection)}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Articles</h2>
            <Link to="/blog" className={styles.viewAllLink}>
              View All Articles
            </Link>
          </div>

          <div className={styles.featuredGrid}>
            {homePageData.featuredPosts.map(post => (
              <PostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Categories Section */}
      <section className={classnames(styles.section, styles.categoriesSection)}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Enterprise Solutions</h2>
            <Link to="/categories" className={styles.viewAllLink}>
              View All Categories
            </Link>
          </div>

          <div className={styles.categoriesGrid}>
            {homePageData.enterpriseCategories.map(category => (
              <Link
                key={category.id}
                to={`/categories/${category.slug}`}
                className={styles.categoryCard}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <div className={styles.categoryContent}>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                  <span className={styles.categoryCount}>{category.count} articles</span>
                </div>
                <span className={styles.categoryArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics & Insights Section */}
      <section className={classnames(styles.section, styles.topicsInsightsSection)}>
        <div className="container">
          <div className={styles.topicsInsightsGrid}>
            <div className={styles.trendingTopics}>
              <h2 className={styles.sectionTitle}>Trending Topics</h2>
              <div className={styles.topicsList}>
                {homePageData.trendingTopics.map(topic => (
                  <Link
                    key={topic.id}
                    to={`/categories/${topic.slug}`}
                    className={styles.topicCard}
                  >
                    <span className={styles.topicIcon}>{topic.icon}</span>
                    <div className={styles.topicContent}>
                      <h3 className={styles.topicName}>{topic.name}</h3>
                      <span className={styles.topicCount}>{topic.count} articles</span>
                    </div>
                    <span className={styles.topicArrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.latestInsights}>
              <h2 className={styles.sectionTitle}>Latest Insights</h2>
              <div className={styles.insightsList}>
                {homePageData.latestInsights.map(insight => (
                  <Link key={insight.id} to={insight.link} className={styles.insightCard}>
                    <span className={styles.insightIcon}>{insight.icon}</span>
                    <div className={styles.insightContent}>
                      <h3 className={styles.insightTitle}>{insight.title}</h3>
                      <p className={styles.insightExcerpt}>{insight.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className={classnames(styles.section, styles.recentSection)}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Recent Articles</h2>
            <Link to="/blog" className={styles.viewAllLink}>
              View All Articles{' '}
              {hasMorePosts && (
                <span className={styles.moreIndicator}>
                  (+{homePageData.recentPosts.length - 6} more)
                </span>
              )}
            </Link>
          </div>

          <div className={styles.recentGrid}>
            {displayedRecentPosts.map(post => (
              <PostCard key={post.id} post={post} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className={classnames(styles.section, styles.eventsSection)}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Upcoming Events</h2>
            <Link to="/events" className={styles.viewAllLink}>
              View All Events
            </Link>
          </div>

          <div className={styles.eventsGrid}>
            {homePageData.upcomingEvents.map(event => (
              <Link key={event.id} to={event.link} className={styles.eventCard}>
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <div className={styles.eventDetails}>
                    <span className={styles.eventDate}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.eventIcon}
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {event.date}
                    </span>
                    <span className={styles.eventLocation}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={styles.eventIcon}
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                <span className={styles.eventArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

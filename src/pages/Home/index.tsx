import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
// import { useTheme } from '../../contexts/ThemeContext';
import { Post } from '../../types';
import './Home.scss';

// Mock data for demonstration
const FEATURED_POSTS: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt:
      'Learn how to set up a new project with React and TypeScript to build type-safe applications.',
    content: '',
    publishedAt: '2023-03-15T10:00:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '1', name: 'React', slug: 'react' }],
    tags: [
      { id: '1', name: 'TypeScript', slug: 'typescript' },
      { id: '7', name: 'JavaScript', slug: 'javascript' },
    ],
    readingTime: 5,
    featured: true,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=React+TypeScript',
  },
  {
    id: '2',
    title: 'Advanced CSS Techniques for Modern Layouts',
    slug: 'advanced-css-techniques',
    excerpt:
      'Explore modern CSS techniques like Grid, Flexbox, and CSS Variables to create responsive layouts.',
    content: '',
    publishedAt: '2023-03-10T14:30:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '2', name: 'CSS', slug: 'css' }],
    tags: [
      { id: '2', name: 'Web Design', slug: 'web-design' },
      { id: '8', name: 'HTML', slug: 'html' },
    ],
    readingTime: 8,
    featured: true,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=CSS+Techniques',
  },
];

const RECENT_POSTS: Post[] = [
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express',
    slug: 'building-rest-api-nodejs-express',
    excerpt:
      'Learn how to create a RESTful API using Node.js and Express with MongoDB as the database.',
    content: '',
    publishedAt: '2023-03-05T09:15:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '3', name: 'Node.js', slug: 'nodejs' }],
    tags: [
      { id: '3', name: 'API', slug: 'api' },
      { id: '9', name: 'Backend', slug: 'backend' },
    ],
    readingTime: 10,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=Node.js+API',
  },
  {
    id: '4',
    title: 'Introduction to State Management with Redux',
    slug: 'introduction-state-management-redux',
    excerpt:
      'Understand the core concepts of Redux and how to implement it in your React applications.',
    content: '',
    publishedAt: '2023-03-01T11:45:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '1', name: 'React', slug: 'react' }],
    tags: [
      { id: '4', name: 'Redux', slug: 'redux' },
      { id: '7', name: 'JavaScript', slug: 'javascript' },
    ],
    readingTime: 7,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=Redux+State',
  },
  {
    id: '5',
    title: 'Optimizing Web Performance: A Comprehensive Guide',
    slug: 'optimizing-web-performance',
    excerpt:
      'Learn techniques and best practices to improve the performance of your web applications.',
    content: '',
    publishedAt: '2023-02-25T16:20:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '4', name: 'Performance', slug: 'performance' }],
    tags: [
      { id: '5', name: 'Optimization', slug: 'optimization' },
      { id: '10', name: 'Web Vitals', slug: 'web-vitals' },
    ],
    readingTime: 12,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=Web+Performance',
  },
  {
    id: '6',
    title: 'Creating Accessible Web Applications',
    slug: 'creating-accessible-web-applications',
    excerpt:
      'Discover how to make your web applications accessible to all users, including those with disabilities.',
    content: '',
    publishedAt: '2023-02-20T13:10:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '5', name: 'Accessibility', slug: 'accessibility' }],
    tags: [
      { id: '6', name: 'Inclusive Design', slug: 'inclusive-design' },
      { id: '11', name: 'ARIA', slug: 'aria' },
    ],
    readingTime: 9,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=Web+Accessibility',
  },
  {
    id: '7',
    title: 'Mastering Git Workflows for Teams',
    slug: 'mastering-git-workflows',
    excerpt:
      'Learn effective Git branching strategies and workflows for collaborative development teams.',
    content: '',
    publishedAt: '2023-02-15T10:30:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '7', name: 'DevOps', slug: 'devops' }],
    tags: [
      { id: '12', name: 'Git', slug: 'git' },
      { id: '13', name: 'Collaboration', slug: 'collaboration' },
    ],
    readingTime: 8,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=Git+Workflows',
  },
  {
    id: '8',
    title: 'Microservices Architecture: Patterns and Best Practices',
    slug: 'microservices-architecture-patterns',
    excerpt:
      'Explore the key patterns and best practices for designing and implementing microservices architecture.',
    content: '',
    publishedAt: '2023-02-10T08:45:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '8', name: 'Architecture', slug: 'architecture' }],
    tags: [
      { id: '14', name: 'Microservices', slug: 'microservices' },
      { id: '15', name: 'System Design', slug: 'system-design' },
    ],
    readingTime: 11,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=Microservices+Architecture',
  },
  {
    id: '9',
    title: 'GraphQL vs REST: Choosing the Right API Paradigm',
    slug: 'graphql-vs-rest-api-paradigm',
    excerpt:
      'Compare GraphQL and REST API approaches to determine which is best for your application needs.',
    content: '',
    publishedAt: '2023-02-05T14:20:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    categories: [{ id: '9', name: 'API Design', slug: 'api-design' }],
    tags: [
      { id: '16', name: 'GraphQL', slug: 'graphql' },
      { id: '17', name: 'REST', slug: 'rest' },
    ],
    readingTime: 9,
    status: 'published',
    coverImage: 'https://via.placeholder.com/800x450?text=GraphQL+vs+REST',
  },
];

// Expanded trending topics data
const TRENDING_TOPICS = [
  { id: '1', name: 'React', slug: 'react', count: 15, icon: '⚛️' },
  { id: '2', name: 'CSS', slug: 'css', count: 12, icon: '🎨' },
  { id: '3', name: 'Node.js', slug: 'nodejs', count: 10, icon: '🚀' },
  { id: '4', name: 'Performance', slug: 'performance', count: 8, icon: '⚡' },
  { id: '5', name: 'Accessibility', slug: 'accessibility', count: 7, icon: '♿' },
  { id: '6', name: 'TypeScript', slug: 'typescript', count: 14, icon: '📘' },
  { id: '7', name: 'JavaScript', slug: 'javascript', count: 20, icon: '📜' },
  { id: '8', name: 'DevOps', slug: 'devops', count: 6, icon: '🔄' },
];

// New insights data
const LATEST_INSIGHTS = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt:
      'Exploring upcoming trends and technologies that will shape the web in the coming years.',
    icon: '🔮',
    link: '/blog/future-of-web-development',
  },
  {
    id: '2',
    title: 'Enterprise Architecture Patterns',
    excerpt: 'Best practices for designing scalable and maintainable enterprise applications.',
    icon: '🏗️',
    link: '/blog/enterprise-architecture-patterns',
  },
  {
    id: '3',
    title: 'Security in Modern Web Applications',
    excerpt: 'Essential security considerations for protecting your web applications from threats.',
    icon: '🔒',
    link: '/blog/security-modern-web-applications',
  },
  {
    id: '4',
    title: 'Microservices vs Monoliths',
    excerpt: 'Comparing architectural approaches for enterprise applications.',
    icon: '⚖️',
    link: '/blog/microservices-vs-monoliths',
  },
];

// New categories data
const ENTERPRISE_CATEGORIES = [
  { id: '1', name: 'Frontend Development', slug: 'frontend', count: 24, icon: '🖥️' },
  { id: '2', name: 'Backend Systems', slug: 'backend', count: 18, icon: '⚙️' },
  { id: '3', name: 'DevOps & CI/CD', slug: 'devops', count: 12, icon: '🔄' },
  { id: '4', name: 'Cloud Solutions', slug: 'cloud', count: 15, icon: '☁️' },
  { id: '5', name: 'Security & Compliance', slug: 'security', count: 9, icon: '🔐' },
  { id: '6', name: 'Data Engineering', slug: 'data', count: 11, icon: '📊' },
];

// New events data
const UPCOMING_EVENTS = [
  {
    id: '1',
    title: 'React Conference 2023',
    date: 'June 15-17, 2023',
    location: 'San Francisco, CA',
    link: '/events/react-conference-2023',
  },
  {
    id: '2',
    title: 'Web Performance Workshop',
    date: 'July 10, 2023',
    location: 'Online',
    link: '/events/web-performance-workshop',
  },
  {
    id: '3',
    title: 'Enterprise Architecture Summit',
    date: 'August 5-7, 2023',
    location: 'New York, NY',
    link: '/events/enterprise-architecture-summit',
  },
  {
    id: '4',
    title: 'DevOps Pipeline Optimization',
    date: 'September 12, 2023',
    location: 'Online',
    link: '/events/devops-pipeline-optimization',
  },
];

const HomePage: React.FC = () => {
  // Limit recent posts to a maximum of 6
  const displayedRecentPosts = RECENT_POSTS.slice(0, 6);
  const hasMorePosts = RECENT_POSTS.length > 6;

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Enterprise Web Development Insights</h1>
              <p className="hero-subtitle">
                Expert analysis, best practices, and cutting-edge techniques for building modern
                enterprise applications
              </p>
              <div className="hero-actions">
                <Link to="/blog" className="btn btn-primary">
                  Explore Articles
                </Link>
                <Link to="/resources" className="btn btn-outline">
                  View Resources
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Enterprise Web Development"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Articles</h2>
            <Link to="/blog" className="view-all-link">
              View All Articles
            </Link>
          </div>

          <div className="featured-grid">
            {FEATURED_POSTS.map(post => (
              <PostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise Solutions</h2>
            <Link to="/categories" className="view-all-link">
              View All Categories
            </Link>
          </div>

          <div className="categories-grid">
            {ENTERPRISE_CATEGORIES.map(category => (
              <Link key={category.id} to={`/categories/${category.slug}`} className="category-card">
                <span className="category-icon">{category.icon}</span>
                <div className="category-content">
                  <h3 className="category-name">{category.name}</h3>
                  <span className="category-count">{category.count} articles</span>
                </div>
                <span className="category-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Topics & Insights Section */}
      <section className="topics-insights-section">
        <div className="container">
          <div className="topics-insights-grid">
            <div className="trending-topics">
              <h2 className="section-title">Trending Topics</h2>
              <div className="topics-list">
                {TRENDING_TOPICS.map(topic => (
                  <Link key={topic.id} to={`/categories/${topic.slug}`} className="topic-card">
                    <span className="topic-icon">{topic.icon}</span>
                    <div className="topic-content">
                      <h3 className="topic-name">{topic.name}</h3>
                      <span className="topic-count">{topic.count} articles</span>
                    </div>
                    <span className="topic-arrow">→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="latest-insights">
              <h2 className="section-title">Latest Insights</h2>
              <div className="insights-list">
                {LATEST_INSIGHTS.map(insight => (
                  <Link key={insight.id} to={insight.link} className="insight-card">
                    <span className="insight-icon">{insight.icon}</span>
                    <div className="insight-content">
                      <h3 className="insight-title">{insight.title}</h3>
                      <p className="insight-excerpt">{insight.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="recent-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Articles</h2>
            <Link to="/blog" className="view-all-link">
              View All Articles{' '}
              {hasMorePosts && (
                <span className="more-indicator">(+{RECENT_POSTS.length - 6} more)</span>
              )}
            </Link>
          </div>

          <div className="recent-grid">
            {displayedRecentPosts.map(post => (
              <PostCard key={post.id} post={post} variant="default" />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <Link to="/events" className="view-all-link">
              View All Events
            </Link>
          </div>

          <div className="events-grid">
            {UPCOMING_EVENTS.map(event => (
              <Link key={event.id} to={event.link} className="event-card">
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <span className="event-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="event-icon"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {event.date}
                    </span>
                    <span className="event-location">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="event-icon"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                <span className="event-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

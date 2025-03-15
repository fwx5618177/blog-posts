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
    tags: [{ id: '1', name: 'TypeScript', slug: 'typescript' }],
    readingTime: 5,
    featured: true,
    status: 'published',
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
      id: '2',
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    categories: [{ id: '2', name: 'CSS', slug: 'css' }],
    tags: [{ id: '2', name: 'Web Design', slug: 'web-design' }],
    readingTime: 8,
    featured: true,
    status: 'published',
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
    tags: [{ id: '3', name: 'API', slug: 'api' }],
    readingTime: 10,
    status: 'published',
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
      id: '2',
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    categories: [{ id: '1', name: 'React', slug: 'react' }],
    tags: [{ id: '4', name: 'Redux', slug: 'redux' }],
    readingTime: 7,
    status: 'published',
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
      id: '3',
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    categories: [{ id: '4', name: 'Performance', slug: 'performance' }],
    tags: [{ id: '5', name: 'Optimization', slug: 'optimization' }],
    readingTime: 12,
    status: 'published',
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
    tags: [{ id: '6', name: 'Inclusive Design', slug: 'inclusive-design' }],
    readingTime: 9,
    status: 'published',
  },
];

const POPULAR_CATEGORIES = [
  { id: '1', name: 'React', slug: 'react', count: 15 },
  { id: '2', name: 'CSS', slug: 'css', count: 12 },
  { id: '3', name: 'Node.js', slug: 'nodejs', count: 10 },
  { id: '4', name: 'Performance', slug: 'performance', count: 8 },
  { id: '5', name: 'Accessibility', slug: 'accessibility', count: 7 },
  { id: '6', name: 'JavaScript', slug: 'javascript', count: 20 },
];

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to FWX Blog</h1>
            <p className="hero-subtitle">
              Exploring the world of web development, design, and technology
            </p>
            <div className="hero-actions">
              <Link to="/categories" className="btn btn-primary">
                Explore Categories
              </Link>
              <Link to="/about" className="btn btn-outline">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-posts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Posts</h2>
            <Link to="/posts" className="view-all-link">
              View All Posts
            </Link>
          </div>

          <div className="featured-posts-grid">
            {FEATURED_POSTS.map(post => (
              <PostCard key={post.id} post={post} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="recent-posts-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Posts</h2>
            <Link to="/posts" className="view-all-link">
              View All Posts
            </Link>
          </div>

          <div className="recent-posts-grid">
            {RECENT_POSTS.map(post => (
              <PostCard key={post.id} post={post} variant="default" />
            ))}
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular Categories</h2>
            <Link to="/categories" className="view-all-link">
              View All Categories
            </Link>
          </div>

          <div className="categories-grid">
            {POPULAR_CATEGORIES.map(category => (
              <Link key={category.id} to={`/categories/${category.slug}`} className="category-card">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-count">{category.count} posts</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Subscribe to My Newsletter</h2>
            <p className="newsletter-description">
              Get the latest posts and updates delivered directly to your inbox.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

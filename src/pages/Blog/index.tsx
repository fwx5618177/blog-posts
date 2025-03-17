import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import { Post, Author, Category, Tag } from '../../types';
import './Blog.scss';

// Simplified Post type for our mock data
interface SimplifiedPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  tags: {
    id: string;
    name: string;
    slug: string;
  }[];
}

// Mock data for blog posts
const MOCK_POSTS: SimplifiedPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt:
      'Learn how to set up a new React project with TypeScript and understand the benefits of using TypeScript with React.',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '1',
      name: 'Jane Smith',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    date: '2023-06-15T10:00:00Z',
    readTime: '8 min read',
    category: {
      id: '1',
      name: 'React',
      slug: 'react',
    },
    tags: [
      { id: '1', name: 'React', slug: 'react' },
      { id: '2', name: 'TypeScript', slug: 'typescript' },
      { id: '3', name: 'Web Development', slug: 'web-development' },
    ],
  },
  {
    id: '2',
    title: 'Advanced CSS Techniques for Modern Layouts',
    slug: 'advanced-css-techniques',
    excerpt:
      'Explore advanced CSS techniques like Grid, Flexbox, and CSS Variables to create responsive and maintainable layouts.',
    featuredImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '2',
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    date: '2023-05-28T14:30:00Z',
    readTime: '10 min read',
    category: {
      id: '2',
      name: 'CSS',
      slug: 'css',
    },
    tags: [
      { id: '4', name: 'CSS', slug: 'css' },
      { id: '5', name: 'Web Design', slug: 'web-design' },
      { id: '6', name: 'Responsive Design', slug: 'responsive-design' },
    ],
  },
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express',
    slug: 'building-rest-api-nodejs-express',
    excerpt:
      'Learn how to create a RESTful API using Node.js and Express, with MongoDB as the database.',
    featuredImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '3',
      name: 'Alex Johnson',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    date: '2023-05-10T09:15:00Z',
    readTime: '12 min read',
    category: {
      id: '3',
      name: 'Node.js',
      slug: 'nodejs',
    },
    tags: [
      { id: '7', name: 'Node.js', slug: 'nodejs' },
      { id: '8', name: 'Express', slug: 'express' },
      { id: '9', name: 'API', slug: 'api' },
      { id: '10', name: 'MongoDB', slug: 'mongodb' },
    ],
  },
  {
    id: '4',
    title: 'Introduction to State Management with Redux',
    slug: 'introduction-state-management-redux',
    excerpt:
      'Understand the core concepts of Redux and learn how to implement it in your React applications.',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '4',
      name: 'Sarah Williams',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    date: '2023-04-22T11:45:00Z',
    readTime: '9 min read',
    category: {
      id: '1',
      name: 'React',
      slug: 'react',
    },
    tags: [
      { id: '1', name: 'React', slug: 'react' },
      { id: '11', name: 'Redux', slug: 'redux' },
      { id: '12', name: 'State Management', slug: 'state-management' },
    ],
  },
  {
    id: '5',
    title: 'Optimizing Web Performance: A Comprehensive Guide',
    slug: 'optimizing-web-performance',
    excerpt:
      'Learn strategies and techniques to optimize your web applications for better performance and user experience.',
    featuredImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    author: {
      id: '5',
      name: 'Michael Brown',
      avatar:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    date: '2023-04-05T08:30:00Z',
    readTime: '15 min read',
    category: {
      id: '4',
      name: 'Performance',
      slug: 'performance',
    },
    tags: [
      { id: '13', name: 'Performance', slug: 'performance' },
      { id: '14', name: 'Optimization', slug: 'optimization' },
      { id: '3', name: 'Web Development', slug: 'web-development' },
    ],
  },
  {
    id: '6',
    title: 'Creating Accessible Web Applications',
    slug: 'creating-accessible-web-applications',
    excerpt:
      'Discover best practices for building web applications that are accessible to all users, including those with disabilities.',
    featuredImage:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    author: {
      id: '6',
      name: 'Emily Chen',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    date: '2023-03-18T13:20:00Z',
    readTime: '11 min read',
    category: {
      id: '5',
      name: 'Accessibility',
      slug: 'accessibility',
    },
    tags: [
      { id: '15', name: 'Accessibility', slug: 'accessibility' },
      { id: '16', name: 'Inclusive Design', slug: 'inclusive-design' },
      { id: '3', name: 'Web Development', slug: 'web-development' },
    ],
  },
];

// Convert simplified post to match the Post type expected by PostCard
const convertToPostType = (post: SimplifiedPost): any => {
  return {
    ...post,
    coverImage: post.featuredImage,
    publishedAt: post.date,
    readingTime: parseInt(post.readTime),
    categories: [post.category],
    status: 'published',
  };
};

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search query and selected category
  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category.slug === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from posts
  const categories = Array.from(new Set(MOCK_POSTS.map(post => post.category.name))).map(name => {
    const post = MOCK_POSTS.find(p => p.category.name === name);
    return {
      id: post?.category.id || '',
      name,
      slug: post?.category.slug || '',
    };
  });

  return (
    <div className="blog-page">
      <div className="blog-header">
        <div className="container">
          <h1 className="blog-title">Blog</h1>
          <p className="blog-description">
            Explore our latest articles, tutorials, and insights on web development, design, and
            technology.
          </p>

          <div className="blog-filters">
            <div className="search-filter">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="category-filter">
              <button
                className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.slug ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="posts-grid">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={convertToPostType(post)} />
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <h3>No posts found</h3>
              <p>Try adjusting your search or filter criteria.</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

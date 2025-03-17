import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import './Categories.scss';

// 定义分类详情类型
interface CategoryDetail {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

// 定义文章类型
interface Post {
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
  isFeatured?: boolean;
}

// 模拟分类详情数据
const MOCK_CATEGORIES: Record<string, CategoryDetail> = {
  react: {
    id: '1',
    name: 'React',
    slug: 'react',
    description: 'Articles about React, a JavaScript library for building user interfaces.',
    postCount: 12,
  },
  css: {
    id: '2',
    name: 'CSS',
    slug: 'css',
    description: 'Articles about CSS, including modern techniques, frameworks, and best practices.',
    postCount: 8,
  },
  nodejs: {
    id: '3',
    name: 'Node.js',
    slug: 'nodejs',
    description:
      "Articles about Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    postCount: 6,
  },
  performance: {
    id: '4',
    name: 'Performance',
    slug: 'performance',
    description: 'Articles about web performance optimization techniques and best practices.',
    postCount: 5,
  },
  accessibility: {
    id: '5',
    name: 'Accessibility',
    slug: 'accessibility',
    description:
      'Articles about web accessibility, including WCAG guidelines and inclusive design.',
    postCount: 4,
  },
  typescript: {
    id: '6',
    name: 'TypeScript',
    slug: 'typescript',
    description:
      'Articles about TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    postCount: 7,
  },
  javascript: {
    id: '7',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'Articles about JavaScript, the programming language of the web.',
    postCount: 15,
  },
  'web-development': {
    id: '8',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Articles about web development, including frontend and backend technologies.',
    postCount: 20,
  },
};

// 模拟分类下的文章数据
const MOCK_CATEGORY_POSTS: Record<string, Post[]> = {
  react: [
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
        {
          id: '1',
          name: 'React',
          slug: 'react',
        },
        {
          id: '2',
          name: 'TypeScript',
          slug: 'typescript',
        },
      ],
      isFeatured: true,
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
        {
          id: '1',
          name: 'React',
          slug: 'react',
        },
        {
          id: '11',
          name: 'Redux',
          slug: 'redux',
        },
      ],
    },
    {
      id: '7',
      title: 'Building Custom Hooks in React',
      slug: 'building-custom-hooks-react',
      excerpt: 'Learn how to create and use custom hooks to share logic between React components.',
      featuredImage:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2031&q=80',
      author: {
        id: '1',
        name: 'Jane Smith',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      },
      date: '2023-04-05T10:30:00Z',
      readTime: '7 min read',
      category: {
        id: '1',
        name: 'React',
        slug: 'react',
      },
      tags: [
        {
          id: '1',
          name: 'React',
          slug: 'react',
        },
        {
          id: '7',
          name: 'Hooks',
          slug: 'hooks',
        },
      ],
    },
  ],
  css: [
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
      date: '2023-05-22T14:30:00Z',
      readTime: '6 min read',
      category: {
        id: '2',
        name: 'CSS',
        slug: 'css',
      },
      tags: [
        {
          id: '3',
          name: 'CSS',
          slug: 'css',
        },
        {
          id: '5',
          name: 'Web Design',
          slug: 'web-design',
        },
      ],
      isFeatured: true,
    },
  ],
  nodejs: [
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
        {
          id: '7',
          name: 'Node.js',
          slug: 'nodejs',
        },
        {
          id: '8',
          name: 'Express',
          slug: 'express',
        },
        {
          id: '9',
          name: 'API',
          slug: 'api',
        },
      ],
    },
  ],
  performance: [
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
        {
          id: '13',
          name: 'Performance',
          slug: 'performance',
        },
        {
          id: '14',
          name: 'Optimization',
          slug: 'optimization',
        },
      ],
    },
  ],
  accessibility: [
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
        {
          id: '15',
          name: 'Accessibility',
          slug: 'accessibility',
        },
        {
          id: '16',
          name: 'Inclusive Design',
          slug: 'inclusive-design',
        },
      ],
    },
  ],
  typescript: [
    {
      id: '7',
      title: 'Advanced TypeScript Patterns',
      slug: 'advanced-typescript-patterns',
      excerpt:
        'Explore advanced TypeScript patterns and techniques to improve your code quality and developer experience.',
      featuredImage:
        'https://images.unsplash.com/photo-1599837487527-e009248aa71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      author: {
        id: '2',
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      },
      date: '2023-03-20T15:45:00Z',
      readTime: '12 min read',
      category: {
        id: '6',
        name: 'TypeScript',
        slug: 'typescript',
      },
      tags: [
        {
          id: '2',
          name: 'TypeScript',
          slug: 'typescript',
        },
        {
          id: '8',
          name: 'Advanced',
          slug: 'advanced',
        },
      ],
    },
  ],
  javascript: [
    {
      id: '8',
      title: 'JavaScript Best Practices for 2023',
      slug: 'javascript-best-practices-2023',
      excerpt:
        'Learn the latest JavaScript best practices and patterns to write clean, efficient, and maintainable code.',
      featuredImage:
        'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      author: {
        id: '3',
        name: 'Alex Johnson',
        avatar:
          'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      },
      date: '2023-02-15T10:30:00Z',
      readTime: '10 min read',
      category: {
        id: '7',
        name: 'JavaScript',
        slug: 'javascript',
      },
      tags: [
        {
          id: '17',
          name: 'JavaScript',
          slug: 'javascript',
        },
        {
          id: '18',
          name: 'Best Practices',
          slug: 'best-practices',
        },
      ],
    },
  ],
  'web-development': [
    {
      id: '9',
      title: 'Full-Stack Development with MERN Stack',
      slug: 'full-stack-development-mern-stack',
      excerpt:
        'Learn how to build full-stack web applications using MongoDB, Express, React, and Node.js (MERN stack).',
      featuredImage:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      author: {
        id: '4',
        name: 'Sarah Williams',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      },
      date: '2023-01-25T09:00:00Z',
      readTime: '14 min read',
      category: {
        id: '8',
        name: 'Web Development',
        slug: 'web-development',
      },
      tags: [
        {
          id: '19',
          name: 'MERN Stack',
          slug: 'mern-stack',
        },
        {
          id: '20',
          name: 'Full-Stack',
          slug: 'full-stack',
        },
      ],
    },
  ],
};

// 转换为PostCard组件需要的格式
const convertToPostType = (post: Post): any => {
  return {
    ...post,
    coverImage: post.featuredImage,
    publishedAt: post.date,
    readingTime: parseInt(post.readTime),
    categories: [post.category],
    status: 'published',
  };
};

/**
 * Category Detail page component
 *
 * Displays all blog posts for a specific category
 */
const CategoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? MOCK_CATEGORIES[slug] : null;
  const posts = slug ? MOCK_CATEGORY_POSTS[slug] || [] : [];

  if (!category) {
    return (
      <div className="error-page-container">
        <div className="error-content">
          <div className="error-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
            </svg>
          </div>
          <h1 className="error-title highlight">Category Not Found</h1>
          <p className="error-message">
            The category <span className="highlight">"{slug}"</span> doesn't exist or has been
            removed.
          </p>
          <div className="error-actions">
            <Link to="/categories" className="button button-primary">
              Browse All Categories
            </Link>
            <Link to="/blog" className="button button-secondary">
              Explore Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="category-detail-page">
      <div className="container">
        <div className="category-header">
          <h1 className="category-title">Category: {category.name}</h1>
          <p className="category-description">{category.description}</p>
          <div className="category-meta">
            <span className="post-count">{category.postCount} articles</span>
          </div>
        </div>

        <div className="category-content">
          {posts.length > 0 ? (
            <div className="category-posts">
              <div className="posts-grid">
                {posts.map(post => (
                  <PostCard key={post.id} post={convertToPostType(post)} />
                ))}
              </div>
            </div>
          ) : (
            <div className="error-page-container">
              <div className="error-content">
                <div className="error-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                </div>
                <h1 className="error-title highlight">No Posts Found</h1>
                <p className="error-message">
                  We couldn't find any articles in the{' '}
                  <span className="highlight">{category.name}</span> category. New content is added
                  regularly, so please check back soon!
                </p>
                <div className="error-actions">
                  <Link to="/blog" className="button button-primary">
                    Browse All Posts
                  </Link>
                  <Link to="/categories" className="button button-secondary">
                    View All Categories
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="category-footer">
          <Link to="/categories" className="back-link">
            ← Back to All Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailPage;

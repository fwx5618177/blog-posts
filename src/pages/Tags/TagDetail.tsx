import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import './Tags.scss';

// 定义标签详情类型
interface TagDetail {
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

// 模拟标签详情数据
const MOCK_TAGS: Record<string, TagDetail> = {
  typescript: {
    id: '1',
    name: 'TypeScript',
    slug: 'typescript',
    description:
      'Articles about TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    postCount: 8,
  },
  'web-design': {
    id: '2',
    name: 'Web Design',
    slug: 'web-design',
    description: 'Articles about web design principles, trends, and best practices.',
    postCount: 10,
  },
  api: {
    id: '3',
    name: 'API',
    slug: 'api',
    description: 'Articles about API design, development, and integration.',
    postCount: 6,
  },
  redux: {
    id: '4',
    name: 'Redux',
    slug: 'redux',
    description: 'Articles about Redux, a predictable state container for JavaScript apps.',
    postCount: 5,
  },
  optimization: {
    id: '5',
    name: 'Optimization',
    slug: 'optimization',
    description: 'Articles about performance optimization techniques for web applications.',
    postCount: 7,
  },
  'inclusive-design': {
    id: '6',
    name: 'Inclusive Design',
    slug: 'inclusive-design',
    description:
      'Articles about designing web applications that are accessible to all users, regardless of their abilities or disabilities.',
    postCount: 3,
  },
  javascript: {
    id: '7',
    name: 'JavaScript',
    slug: 'javascript',
    description:
      'Articles about JavaScript, the programming language of the web, including best practices, patterns, and new features.',
    postCount: 15,
  },
  html: {
    id: '8',
    name: 'HTML',
    slug: 'html',
    description:
      'Articles about HTML, semantic markup, and best practices for structuring web content.',
    postCount: 9,
  },
};

// 模拟标签下的文章数据
const MOCK_TAG_POSTS: Record<string, Post[]> = {
  typescript: [
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
      id: '8',
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
  'web-design': [
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
    {
      id: '9',
      title: 'Principles of Responsive Web Design',
      slug: 'principles-responsive-web-design',
      excerpt:
        'Learn the core principles of responsive web design and how to implement them in your projects.',
      featuredImage:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      author: {
        id: '3',
        name: 'Alice Johnson',
        avatar:
          'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      },
      date: '2023-02-15T09:30:00Z',
      readTime: '9 min read',
      category: {
        id: '2',
        name: 'CSS',
        slug: 'css',
      },
      tags: [
        {
          id: '5',
          name: 'Web Design',
          slug: 'web-design',
        },
        {
          id: '9',
          name: 'Responsive',
          slug: 'responsive',
        },
      ],
    },
  ],
  api: [
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
  redux: [
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
  ],
  optimization: [
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
  'inclusive-design': [
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
  html: [
    {
      id: '10',
      title: 'Semantic HTML: Best Practices for Web Accessibility',
      slug: 'semantic-html-best-practices',
      excerpt:
        'Learn how to use semantic HTML elements to improve the accessibility and SEO of your web pages.',
      featuredImage:
        'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      author: {
        id: '6',
        name: 'Emily Chen',
        avatar:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      },
      date: '2023-01-10T11:15:00Z',
      readTime: '8 min read',
      category: {
        id: '8',
        name: 'Web Development',
        slug: 'web-development',
      },
      tags: [
        {
          id: '21',
          name: 'HTML',
          slug: 'html',
        },
        {
          id: '15',
          name: 'Accessibility',
          slug: 'accessibility',
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
 * Tag Detail page component
 *
 * Displays all blog posts for a specific tag
 */
const TagDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tag = slug ? MOCK_TAGS[slug] : null;
  const posts = slug ? MOCK_TAG_POSTS[slug] || [] : [];

  // 获取推荐标签（按文章数量排序，最多5个）
  const recommendedTags = Object.values(MOCK_TAGS)
    .filter(t => t.slug !== slug)
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

  if (!tag) {
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
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
          </div>
          <h1 className="error-title highlight">Tag Not Found</h1>
          <p className="error-message">
            The tag <span className="highlight">"{slug}"</span> doesn't exist or has been removed.
          </p>
          <div className="error-actions">
            <Link to="/tags" className="button button-primary">
              Browse All Tags
            </Link>
            <Link to="/blog" className="button button-secondary">
              Explore Blog
            </Link>
          </div>

          {recommendedTags.length > 0 && (
            <div className="recommended-section">
              <h2 className="recommended-title">Popular Tags</h2>
              <div className="recommended-items">
                {recommendedTags.map(tag => (
                  <Link key={tag.id} to={`/tags/${tag.slug}`} className="recommended-item">
                    <span className="item-name">{tag.name}</span>
                    <span className="item-count">{tag.postCount}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="tag-detail-page">
      <div className="container">
        <div className="tag-header">
          <h1 className="tag-title">Tag: {tag.name}</h1>
          <p className="tag-description">{tag.description}</p>
          <div className="tag-meta">
            <span className="post-count">{tag.postCount} articles</span>
          </div>
        </div>

        <div className="tag-content">
          {posts.length > 0 ? (
            <div className="tag-posts">
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
                  We couldn't find any articles with the tag{' '}
                  <span className="highlight">"{tag.name}"</span>. New content is added regularly,
                  so please check back soon!
                </p>
                <div className="error-actions">
                  <Link to="/blog" className="button button-primary">
                    Browse All Posts
                  </Link>
                  <Link to="/tags" className="button button-secondary">
                    View All Tags
                  </Link>
                </div>

                {/* 相关标签推荐 */}
                {recommendedTags.length > 0 && (
                  <div className="recommended-section">
                    <h3 className="recommended-title">You might be interested in</h3>
                    <div className="recommended-items">
                      {recommendedTags.map(relatedTag => (
                        <Link
                          key={relatedTag.id}
                          to={`/tags/${relatedTag.slug}`}
                          className="recommended-item"
                        >
                          <span className="item-name">{relatedTag.name}</span>
                          <span className="item-count">{relatedTag.postCount}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="tag-footer">
          <Link to="/tags" className="back-link">
            ← Back to All Tags
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TagDetailPage;

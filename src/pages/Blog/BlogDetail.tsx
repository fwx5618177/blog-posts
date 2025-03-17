import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.scss';

// 定义文章详情类型
interface PostDetail {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
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

// 模拟文章详情数据
const MOCK_POST_DETAILS: Record<string, PostDetail> = {
  'getting-started-with-react-typescript': {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>TypeScript has become increasingly popular in the React ecosystem, offering type safety and improved developer experience. This guide will help you get started with using TypeScript in your React projects.</p>

      <h2 id="getting-started">Getting Started</h2>
      <p>Setting up a new React project with TypeScript is straightforward. You can use Create React App with the TypeScript template:</p>

      <pre><code>npx create-react-app my-app --template typescript</code></pre>

      <h3 id="installation">Installation</h3>
      <p>If you have an existing React project, you can add TypeScript to it:</p>

      <pre><code>npm install --save typescript @types/node @types/react @types/react-dom @types/jest</code></pre>

      <h3 id="configuration">Configuration</h3>
      <p>Create a <code>tsconfig.json</code> file in your project root:</p>

      <pre><code>{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}</code></pre>

      <h2 id="basic-usage">Basic Usage</h2>
      <p>Let's look at how to define component props with TypeScript:</p>

      <pre><code>interface GreetingProps {
  name: string;
  age?: number; // Optional prop
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};</code></pre>

      <h3 id="examples">Examples</h3>
      <p>Here's an example of a component with state:</p>

      <pre><code>import React, { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState<number>(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};</code></pre>

      <h2 id="advanced-techniques">Advanced Techniques</h2>
      <p>TypeScript offers many advanced features that can improve your React code:</p>

      <h3 id="performance-optimization">Performance Optimization</h3>
      <p>Using TypeScript can help catch errors early in the development process, leading to more robust applications.</p>

      <h3 id="best-practices">Best Practices</h3>
      <p>Here are some best practices for using TypeScript with React:</p>
      <ul>
        <li>Use interfaces for props and state</li>
        <li>Leverage TypeScript's type inference when possible</li>
        <li>Use union types for props that can accept multiple types</li>
        <li>Create reusable type definitions for common patterns</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>TypeScript provides significant benefits when working with React, including better tooling, improved code quality, and a better developer experience. By following the steps in this guide, you'll be well on your way to building type-safe React applications.</p>
    `,
    featuredImage: '/images/posts/react-typescript.jpg',
    author: {
      id: '1',
      name: 'Jane Smith',
      avatar: '/images/authors/jane-smith.jpg',
      bio: 'Frontend developer passionate about React and TypeScript.',
    },
    date: '2023-06-15',
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
      {
        id: '3',
        name: 'Web Development',
        slug: 'web-development',
      },
    ],
  },
  'advanced-css-techniques': {
    id: '2',
    title: 'Advanced CSS Techniques for Modern Layouts',
    slug: 'advanced-css-techniques',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Modern CSS has evolved significantly, offering powerful features for creating complex layouts with less code. This article explores advanced CSS techniques that can elevate your web design skills.</p>

      <h2 id="css-grid">CSS Grid</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns.</p>

      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}</code></pre>

      <h2 id="flexbox">Flexbox</h2>
      <p>Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.</p>

      <pre><code>.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>

      <h2 id="css-variables">CSS Variables</h2>
      <p>CSS Variables (Custom Properties) allow you to store specific values to be reused throughout your document.</p>

      <pre><code>:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-base: 16px;
}

.element {
  color: var(--primary-color);
  font-size: var(--font-size-base);
}</code></pre>

      <h2 id="responsive-design">Responsive Design</h2>
      <p>Creating layouts that work well on different screen sizes is essential for modern web development.</p>

      <pre><code>@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}</code></pre>

      <h2 id="conclusion">Conclusion</h2>
      <p>By mastering these advanced CSS techniques, you can create more flexible, maintainable, and responsive layouts for your web projects.</p>
    `,
    featuredImage: '/images/posts/css-techniques.jpg',
    author: {
      id: '2',
      name: 'John Doe',
      avatar: '/images/authors/john-doe.jpg',
      bio: 'CSS enthusiast and web designer with 5+ years of experience.',
    },
    date: '2023-05-22',
    readTime: '6 min read',
    category: {
      id: '2',
      name: 'CSS',
      slug: 'css',
    },
    tags: [
      {
        id: '4',
        name: 'CSS',
        slug: 'css',
      },
      {
        id: '5',
        name: 'Web Design',
        slug: 'web-design',
      },
      {
        id: '6',
        name: 'Responsive Design',
        slug: 'responsive-design',
      },
    ],
  },
};

// 格式化日期
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/**
 * Blog Detail page component
 *
 * Displays a single blog post with full content
 */
const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? MOCK_POST_DETAILS[slug] : null;

  if (!post) {
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <h1 className="error-title highlight">Post Not Found</h1>
          <p className="error-message">
            The post <span className="highlight">"{slug}"</span> doesn't exist or has been removed.
          </p>
          <div className="error-actions">
            <Link to="/blog" className="button button-primary">
              Back to Blog
            </Link>
            <Link to="/" className="button button-secondary">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      <div className="container">
        <article className="blog-post">
          {/* Post Header */}
          <header className="post-header">
            <div className="post-meta">
              <Link to={`/categories/${post.category.slug}`} className="post-category">
                {post.category.name}
              </Link>
              <span className="post-date">{formatDate(post.date)}</span>
              <span className="post-read-time">{post.readTime}</span>
            </div>

            <h1 className="post-title">{post.title}</h1>

            <div className="post-author">
              <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
              <div className="author-info">
                <span className="author-name">{post.author.name}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="post-featured-image">
            <img src={post.featuredImage} alt={post.title} />
          </div>

          {/* Post Content */}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Post Footer */}
          <footer className="post-footer">
            <div className="post-tags">
              {post.tags.map(tag => (
                <Link key={tag.id} to={`/tags/${tag.slug}`} className="post-tag">
                  #{tag.name}
                </Link>
              ))}
            </div>

            <div className="post-author-bio">
              <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
              <div className="author-info">
                <h3 className="author-name">{post.author.name}</h3>
                <p className="author-bio">{post.author.bio}</p>
              </div>
            </div>

            <div className="post-navigation">
              <Link to="/blog" className="back-to-blog">
                ← Back to Blog
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogDetailPage;

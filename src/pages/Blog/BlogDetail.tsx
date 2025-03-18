import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Blog.scss';

// 定义文章详情类型
interface PostDetail {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string; // 文章摘要/前言
  conclusion: string; // 结语/后记
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

// 定义评论类型
interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  replies?: Comment[];
}

// 模拟文章详情数据
const MOCK_POST_DETAILS: Record<string, PostDetail> = {
  'getting-started-with-react-typescript': {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt: `TypeScript is becoming the standard for React development, offering improved type safety, better tooling, and enhanced developer experience. This comprehensive guide will walk you through setting up and getting started with TypeScript in your React projects.`,
    conclusion: `TypeScript and React make an excellent combination for building robust web applications. By using TypeScript with React, you can catch errors earlier in the development process, improve code maintainability, and enhance team collaboration. We hope this guide helps you on your journey to building better React applications with TypeScript!`,
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
    excerpt: `Modern web design demands efficient and flexible layout solutions. This article explores advanced CSS techniques that will help you create stunning, responsive layouts with less code and better maintainability.`,
    conclusion: `CSS has evolved dramatically over the years, providing web developers with powerful tools for creating layouts that were once only possible with JavaScript or complex hacks. By mastering these advanced CSS techniques, you'll be able to build more efficient, maintainable, and visually appealing websites. Keep experimenting with these techniques and your web designs will stand out in today's competitive landscape.`,
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
  'javascript-async-await': {
    id: '3',
    title: 'Understanding JavaScript Async/Await',
    slug: 'javascript-async-await',
    excerpt: `Asynchronous programming is essential for modern web development. This article explains the async/await syntax in JavaScript, how it works under the hood, and how to use it effectively in your projects.`,
    conclusion: `Async/await provides a clean, intuitive way to handle asynchronous operations in JavaScript. By understanding how it works and following best practices, you can write more maintainable and efficient code. Remember to handle errors properly and avoid common pitfalls to make the most of this powerful feature.`,
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>JavaScript's async/await syntax makes asynchronous programming much more intuitive. This article dives into how it works and how to use it effectively.</p>

      <h2 id="basics">The Basics</h2>
      <p>Async/await is built on Promises and provides a more readable way to work with asynchronous code:</p>

      <pre><code>async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}</code></pre>

      <h2 id="error-handling">Error Handling</h2>
      <p>There are multiple ways to handle errors with async/await:</p>

      <pre><code>// Using try/catch
async function method1() {
  try {
    const result = await riskyOperation();
    return result;
  } catch (error) {
    console.error(error);
  }
}

// Using Promise's catch
async function method2() {
  const result = await riskyOperation().catch(error => {
    console.error(error);
    return defaultValue;
  });
  return result;
}</code></pre>

      <h2 id="conclusion">Conclusion</h2>
      <p>Async/await simplifies asynchronous JavaScript code, making it more readable and maintainable. Understanding its foundations and best practices is essential for modern web development.</p>
    `,
    featuredImage: '/images/posts/async-await.jpg',
    author: {
      id: '3',
      name: 'Alex Johnson',
      avatar: '/images/authors/alex-johnson.jpg',
      bio: 'JavaScript developer specializing in modern ECMAScript features and web performance.',
    },
    date: '2023-07-10',
    readTime: '7 min read',
    category: {
      id: '3',
      name: 'JavaScript',
      slug: 'javascript',
    },
    tags: [
      {
        id: '7',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        id: '8',
        name: 'Async',
        slug: 'async',
      },
      {
        id: '9',
        name: 'Web Development',
        slug: 'web-development',
      },
    ],
  },
};

// 模拟评论数据
const MOCK_COMMENTS: Record<string, Comment[]> = {
  'getting-started-with-react-typescript': [
    {
      id: '1',
      author: {
        name: 'Robert Chen',
        avatar: '/images/avatars/user1.jpg',
      },
      content:
        'Great article! Very helpful for beginners like me who are just starting with TypeScript in React projects.',
      date: '2023-06-18',
      replies: [
        {
          id: '2',
          author: {
            name: 'Jane Smith',
            avatar: '/images/authors/jane-smith.jpg',
          },
          content:
            "Thanks Robert! I'm glad you found it helpful. Let me know if you have any questions!",
          date: '2023-06-19',
        },
      ],
    },
    {
      id: '3',
      author: {
        name: 'Sarah Williams',
        avatar: '/images/avatars/user2.jpg',
      },
      content:
        'Could you write a follow-up article about using TypeScript with React hooks? That would be super useful!',
      date: '2023-06-20',
    },
  ],
  'advanced-css-techniques': [
    {
      id: '1',
      author: {
        name: 'Michael Torres',
        avatar: '/images/avatars/user3.jpg',
      },
      content:
        "I've been using CSS Grid for a while now, and it's definitely a game-changer. Thanks for the clear examples!",
      date: '2023-05-25',
    },
  ],
  'javascript-async-await': [
    {
      id: '1',
      author: {
        name: 'Emma Davis',
        avatar: '/images/avatars/user4.jpg',
      },
      content:
        'This helped me understand async/await so much better. The error handling section was particularly useful.',
      date: '2023-07-12',
    },
    {
      id: '2',
      author: {
        name: 'Jamal Wilson',
        avatar: '/images/avatars/user5.jpg',
      },
      content:
        'Great explanation of the internals. I never fully grasped how async/await worked under the hood until now.',
      date: '2023-07-15',
    },
  ],
};

// 获取所有文章的数组
const getAllPosts = (): PostDetail[] => {
  return Object.values(MOCK_POST_DETAILS);
};

// 获取相关文章
const getRelatedPosts = (currentPost: PostDetail, limit = 2): PostDetail[] => {
  // 根据相同标签和分类获取相关文章
  const allPosts = getAllPosts();

  return allPosts
    .filter(
      post =>
        post.id !== currentPost.id && // 排除当前文章
        (post.category.id === currentPost.category.id || // 相同分类
          post.tags.some(tag => currentPost.tags.some(t => t.id === tag.id))) // 有相同标签
    )
    .slice(0, limit); // 限制数量
};

// 获取上一篇和下一篇文章
const getAdjacentPosts = (
  currentPost: PostDetail
): { previous: PostDetail | null; next: PostDetail | null } => {
  const allPosts = getAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const currentIndex = allPosts.findIndex(post => post.id === currentPost.id);

  return {
    previous: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    next: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
  };
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
 * Comment component
 */
const CommentItem: React.FC<{ comment: Comment; level?: number }> = ({ comment, level = 0 }) => {
  return (
    <div className={`comment-item ${level > 0 ? 'comment-reply' : ''}`}>
      <div className="comment-header">
        <div className="comment-author">
          <img src={comment.author.avatar} alt={comment.author.name} className="comment-avatar" />
          <span className="comment-author-name">{comment.author.name}</span>
        </div>
        <span className="comment-date">{formatDate(comment.date)}</span>
      </div>
      <div className="comment-content">
        <p>{comment.content}</p>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Comments section component
 */
const CommentsSection: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the comment to a backend
    alert(`Comment submitted: ${newComment}`);
    setNewComment('');
  };

  return (
    <div className="comments-section">
      <h3 className="comments-title">Comments ({comments.length})</h3>

      {comments.length > 0 ? (
        <div className="comments-list">
          {comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      ) : (
        <div className="no-comments">
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}

      <div className="comment-form-container">
        <h4 className="form-title">Leave a Comment</h4>
        <form className="comment-form" onSubmit={handleSubmit}>
          <textarea
            className="comment-textarea"
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            required
          />
          <button type="submit" className="comment-submit">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

/**
 * Post navigation component
 */
const PostNavigation: React.FC<{ previous: PostDetail | null; next: PostDetail | null }> = ({
  previous,
  next,
}) => {
  return (
    <div className="post-navigation">
      <div className="post-nav-links">
        {previous ? (
          <Link to={`/blog/${previous.slug}`} className="post-nav-link prev-post">
            <span className="post-nav-label">← Previous Post</span>
            <span className="post-nav-title">{previous.title}</span>
          </Link>
        ) : (
          <div className="post-nav-link prev-post disabled">
            <span className="post-nav-label">← Previous Post</span>
            <span className="post-nav-empty">No previous posts</span>
          </div>
        )}

        {next ? (
          <Link to={`/blog/${next.slug}`} className="post-nav-link next-post">
            <span className="post-nav-label">Next Post →</span>
            <span className="post-nav-title">{next.title}</span>
          </Link>
        ) : (
          <div className="post-nav-link next-post disabled">
            <span className="post-nav-label">Next Post →</span>
            <span className="post-nav-empty">No newer posts</span>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Related posts component
 */
const RelatedPosts: React.FC<{ posts: PostDetail[] }> = ({ posts }) => {
  if (posts.length === 0) return null;

  return (
    <div className="related-posts">
      <h3 className="related-posts-title">You Might Also Like</h3>
      <div className="related-posts-grid">
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="related-post-card">
            <div className="related-post-image">
              <img src={post.featuredImage} alt={post.title} />
            </div>
            <div className="related-post-content">
              <h4 className="related-post-title">{post.title}</h4>
              <span className="related-post-date">{formatDate(post.date)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
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

  const { previous, next } = getAdjacentPosts(post);
  const relatedPosts = getRelatedPosts(post);
  const comments = MOCK_COMMENTS[post.slug] || [];

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

          {/* Post Excerpt/Introduction */}
          <div className="post-excerpt">
            <p>{post.excerpt}</p>
          </div>

          {/* Tags */}
          <div className="post-tags post-tags-header">
            {post.tags.map(tag => (
              <Link key={tag.id} to={`/tags/${tag.slug}`} className="post-tag">
                #{tag.name}
              </Link>
            ))}
          </div>

          {/* Post Content */}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Post Conclusion */}
          <div className="post-conclusion">
            <h3>Final Thoughts</h3>
            <p>{post.conclusion}</p>
          </div>

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

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* Post Navigation */}
            <PostNavigation previous={previous} next={next} />
          </footer>
        </article>

        {/* Comments Section */}
        <section className="blog-comments">
          <CommentsSection comments={comments} />
        </section>
      </div>
    </div>
  );
};

export default BlogDetailPage;

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
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000',
    author: {
      id: '1',
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Frontend developer passionate about React and TypeScript.',
    },
    date: '2023-06-15T14:30:00',
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
      <p>CSS Variables, also known as custom properties, allow you to store specific values to reuse throughout your stylesheet.</p>

      <pre><code>:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.button {
  background-color: var(--primary-color);
  color: white;
}</code></pre>

      <h2 id="responsive-design">Responsive Design</h2>
      <p>Creating responsive layouts is essential for modern web development. Use media queries to adapt your design to different screen sizes.</p>

      <pre><code>@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}</code></pre>

      <h2 id="conclusion">Conclusion</h2>
      <p>These advanced CSS techniques will help you create more flexible, maintainable, and visually appealing web layouts. Experiment with these techniques and continue to learn as CSS evolves.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1000',
    author: {
      id: '2',
      name: 'Alex Johnson',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'UI/UX designer and CSS enthusiast with 5+ years of experience in creating beautiful web interfaces.',
    },
    date: '2023-07-22T09:15:00',
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
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000',
    author: {
      id: '3',
      name: 'Mike Taylor',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'JavaScript developer specializing in modern ECMAScript features and web performance optimization.',
    },
    date: '2023-07-10T11:25:00',
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
        name: 'Mark Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      },
      content:
        "This was incredibly helpful! I've been trying to get started with TypeScript in my React projects and this guide made it so much clearer. Thanks for the detailed explanations.",
      date: '2023-06-18T13:45:00',
      replies: [
        {
          id: '2',
          author: {
            name: 'Jane Smith',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          },
          content:
            'Glad you found it helpful, Mark! Let me know if you have any specific questions as you implement TypeScript in your projects.',
          date: '2023-06-18T15:20:00',
          replies: [
            {
              id: '5',
              author: {
                name: 'Mark Wilson',
                avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
              },
              content:
                'Thanks Jane! I am having trouble with generics. Do you have any good resources that explain them well for React?',
              date: '2023-06-18T16:30:00',
            },
            {
              id: '6',
              author: {
                name: 'Jane Smith',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              },
              content:
                'I recommend checking out the TypeScript documentation on generics. Also, the React TypeScript Cheatsheet project on GitHub is excellent for React-specific TypeScript patterns.',
              date: '2023-06-18T17:15:00',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      },
      content:
        "I've been using TypeScript with React for about a year now and can confirm it's totally worth the initial learning curve. The type safety has saved me from countless bugs that would have been hard to catch otherwise.",
      date: '2023-06-20T10:15:00',
      replies: [
        {
          id: '4',
          author: {
            name: 'David Thompson',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
          },
          content:
            "How do you handle third-party libraries that don't have TypeScript definitions? This has been a challenge for me.",
          date: '2023-06-20T11:30:00',
        },
        {
          id: '7',
          author: {
            name: 'Sarah Chen',
            avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
          },
          content:
            "For libraries without TypeScript definitions, I try to find @types packages on npm. If those don't exist, you can create your own declaration files (.d.ts) with just the types you need. It's easier than it sounds!",
          date: '2023-06-20T14:20:00',
        },
      ],
    },
  ],
  'advanced-css-techniques': [
    {
      id: '1',
      author: {
        name: 'David Parker',
        avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      },
      content:
        "Great overview of modern CSS techniques! I've been stuck using older approaches and this has inspired me to refactor some of my projects. CSS Grid is a game changer.",
      date: '2023-07-23T16:30:00',
      replies: [
        {
          id: '2',
          author: {
            name: 'Alex Johnson',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          },
          content:
            'Thanks David! CSS Grid definitely changed how I approach layouts. If you need any examples for your refactoring, feel free to ask!',
          date: '2023-07-24T09:45:00',
          replies: [
            {
              id: '3',
              author: {
                name: 'David Parker',
                avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
              },
              content:
                "I'd love to see how you handle responsive image galleries with Grid. That's one area I'm still struggling with.",
              date: '2023-07-24T10:30:00',
            },
            {
              id: '4',
              author: {
                name: 'Alex Johnson',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              },
              content:
                "I'll create a CodePen example and share it with you. The key is using grid-template-columns with minmax() and auto-fill/auto-fit. It creates amazingly flexible layouts!",
              date: '2023-07-24T11:15:00',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      author: {
        name: 'Michelle Lee',
        avatar: 'https://randomuser.me/api/portraits/women/89.jpg',
      },
      content:
        "Have you explored CSS container queries yet? They're going to be another game-changer for component-based design systems.",
      date: '2023-07-25T14:20:00',
      replies: [
        {
          id: '6',
          author: {
            name: 'Alex Johnson',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          },
          content:
            "Container queries are amazing! I've been testing them in Chrome Canary. They solve so many problems that media queries couldn't address for component-based designs.",
          date: '2023-07-25T15:10:00',
        },
      ],
    },
  ],
  'javascript-async-await': [
    {
      id: '1',
      author: {
        name: 'Emma Davis',
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      },
      content:
        'This helped me understand async/await so much better. The error handling section was particularly useful. I was struggling with how to properly catch errors in my application, and your examples clarified things perfectly.',
      date: '2023-07-12T14:30:00',
      replies: [
        {
          id: '4',
          author: {
            name: 'Ryan Garcia',
            avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
          },
          content:
            "I've found that wrapping async/await calls in a custom try/catch utility function makes error handling even cleaner. It's similar to the Go language's approach.",
          date: '2023-07-12T16:45:00',
        },
        {
          id: '5',
          author: {
            name: 'Emma Davis',
            avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
          },
          content: 'That sounds interesting, Ryan! Do you have an example you could share?',
          date: '2023-07-12T17:20:00',
          replies: [
            {
              id: '6',
              author: {
                name: 'Ryan Garcia',
                avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
              },
              content:
                "Sure! Here's a simple version: `const [data, error] = await catchAsync(fetchData());` The catchAsync function returns a tuple with the result and error. It makes error flows very explicit in your code.",
              date: '2023-07-12T18:05:00',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      author: {
        name: 'Jamal Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      },
      content:
        'Great explanation of the internals. I never fully grasped how async/await worked under the hood until now. Do you plan to cover more advanced topics like handling concurrent operations with async/await?',
      date: '2023-07-15T09:45:00',
      replies: [
        {
          id: '3',
          author: {
            name: 'Mike Taylor',
            avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
          },
          content:
            "Thanks Jamal! Yes, I'll be covering concurrent operations and Promise.all() patterns in my next article. Stay tuned!",
          date: '2023-07-15T10:20:00',
        },
      ],
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
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

/**
 * Comment component with enhanced functionality for likes and multi-level replies
 */
const CommentItem: React.FC<{ comment: Comment; level?: number }> = ({ comment, level = 0 }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 10));
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reply submitted: ${replyText}`);
    setReplyText('');
    setShowReplyForm(false);
  };

  // Prevent excessive nesting levels
  const currentLevel = level > 3 ? 3 : level;

  return (
    <div className={`comment-item ${currentLevel > 0 ? 'comment-reply' : ''}`}>
      <div className="comment-header">
        <div className="comment-author">
          <img src={comment.author.avatar} alt={comment.author.name} className="comment-avatar" />
          <div className="author-info">
            <span className="comment-author-name">{comment.author.name}</span>
            <span className="author-platform guest">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Verified User
            </span>
          </div>
        </div>
        <span className="comment-date">{formatDate(comment.date)}</span>
      </div>
      <div className="comment-content">
        <p>{comment.content}</p>
      </div>
      <div className="comment-actions">
        <button onClick={() => setShowReplyForm(!showReplyForm)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Reply
        </button>
        <button className={liked ? 'active' : ''} onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={liked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          Like{likeCount > 0 && ` (${likeCount})`}
        </button>
      </div>

      {showReplyForm && (
        <div className="reply-form-container">
          <form onSubmit={handleReplySubmit}>
            <textarea
              placeholder="Write your reply..."
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              required
            />
            <div className="reply-form-actions">
              <button type="button" onClick={() => setShowReplyForm(false)}>
                Cancel
              </button>
              <button type="submit">Post Reply</button>
            </div>
          </form>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} level={currentLevel + 1} />
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    avatar: string;
    platform: string;
  } | null>(null);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the comment to a backend
    alert(`Comment submitted: ${newComment}`);
    setNewComment('');
  };

  const handleLogin = (platform: string) => {
    // In a real app, this would authenticate with the platform
    console.log(`Logging in with ${platform}`);

    // Mock login - in a real app this would come from the authentication service
    setCurrentUser({
      name:
        platform === 'google'
          ? 'Jane Smith'
          : platform === 'facebook'
            ? 'Alex Johnson'
            : platform === 'twitter'
              ? 'Mike Taylor'
              : platform === 'github'
                ? 'Sarah Chen'
                : 'Guest User',
      avatar:
        platform === 'google'
          ? 'https://randomuser.me/api/portraits/women/44.jpg'
          : platform === 'facebook'
            ? 'https://randomuser.me/api/portraits/men/32.jpg'
            : platform === 'twitter'
              ? 'https://randomuser.me/api/portraits/men/22.jpg'
              : platform === 'github'
                ? 'https://randomuser.me/api/portraits/women/63.jpg'
                : 'https://randomuser.me/api/portraits/lego/1.jpg',
      platform,
    });
    setIsLoggedIn(true);
    setShowLoginOptions(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleGuestComment = () => {
    setShowLoginOptions(false);
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

      {showLoginOptions && (
        <div className="comment-login-section">
          <h4 className="login-heading">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Sign in to comment
          </h4>
          <p className="login-text">
            Connect with your favorite social network to comment on this post. Your information is
            kept private and you can comment immediately.
          </p>

          <div className="social-login-options">
            <button className="social-login-button google" onClick={() => handleLogin('google')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              Google
            </button>
            <button
              className="social-login-button facebook"
              onClick={() => handleLogin('facebook')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
            <button className="social-login-button twitter" onClick={() => handleLogin('twitter')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              Twitter
            </button>
            <button className="social-login-button github" onClick={() => handleLogin('github')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </button>
          </div>

          <div className="login-divider">
            <span className="divider-text">or</span>
          </div>

          <button className="guest-comment-button" onClick={handleGuestComment}>
            Continue as Guest
          </button>
        </div>
      )}

      <div className="comment-form-container">
        <h4 className="form-title">Leave a Comment</h4>

        {isLoggedIn && currentUser && (
          <div className="logged-in-as">
            <img src={currentUser.avatar} alt={currentUser.name} className="user-avatar" />
            <div className="user-info">
              <div className="user-name">{currentUser.name}</div>
              <div className="user-platform">
                {currentUser.platform === 'google' && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                    Signed in with Google
                  </>
                )}
                {currentUser.platform === 'facebook' && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Signed in with Facebook
                  </>
                )}
                {currentUser.platform === 'twitter' && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Signed in with Twitter
                  </>
                )}
                {currentUser.platform === 'github' && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    Signed in with GitHub
                  </>
                )}
                {currentUser.platform === 'guest' && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Commenting as Guest
                  </>
                )}
              </div>
            </div>
            <button className="logout-button" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        )}

        <form className="comment-form" onSubmit={handleSubmit}>
          {!isLoggedIn && !showLoginOptions && (
            <div className="comment-form-fields">
              <div className="form-field">
                <label htmlFor="commenter-name">Name</label>
                <input type="text" id="commenter-name" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="commenter-email">Email</label>
                <input
                  type="email"
                  id="commenter-email"
                  placeholder="Your email (not published)"
                  required
                />
              </div>
            </div>
          )}

          <textarea
            className="comment-textarea"
            placeholder="Share your thoughts..."
            value={newComment}
            onChange={e => setNewComment(e.target.value)}
            required
            onClick={() => {
              if (!isLoggedIn && !showLoginOptions) {
                setShowLoginOptions(true);
              }
            }}
          />

          <div className="comment-footer">
            <p className="comment-policy">
              By submitting this comment, you agree to our <a href="#">community guidelines</a>.
            </p>
            <button type="submit" className="comment-submit">
              Post Comment
            </button>
          </div>
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
      <div className="container">
        <h3 className="post-nav-heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          Continue Your Reading Journey
        </h3>
        <div className="post-nav-links">
          {previous ? (
            <Link to={`/blog/${previous.slug}`} className="post-nav-link prev-post">
              <span className="post-nav-arrow">&larr;</span>
              <span className="post-nav-label">Previous Post</span>
              <span className="post-nav-title">{previous.title}</span>
              <div className="post-nav-meta">
                <span className="post-nav-date">{formatDate(previous.date)}</span>
              </div>
              <div className="post-nav-preview">{previous.excerpt.substring(0, 120)}...</div>
            </Link>
          ) : (
            <div className="post-nav-link prev-post disabled">
              <span className="post-nav-arrow">&larr;</span>
              <span className="post-nav-label">Previous Post</span>
              <span className="post-nav-title">No previous posts</span>
            </div>
          )}

          {next ? (
            <Link to={`/blog/${next.slug}`} className="post-nav-link next-post">
              <span className="post-nav-arrow">&rarr;</span>
              <span className="post-nav-label">Next Post</span>
              <span className="post-nav-title">{next.title}</span>
              <div className="post-nav-meta">
                <span className="post-nav-date">{formatDate(next.date)}</span>
              </div>
              <div className="post-nav-preview">{next.excerpt.substring(0, 120)}...</div>
            </Link>
          ) : (
            <div className="post-nav-link next-post disabled">
              <span className="post-nav-arrow">&rarr;</span>
              <span className="post-nav-label">Next Post</span>
              <span className="post-nav-title">No newer posts</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Related posts component with preview
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
              <span className="post-category-label">{post.category.name}</span>
            </div>
            <div className="related-post-content">
              <h4 className="related-post-title">{post.title}</h4>
              <div className="related-post-meta">
                <span className="related-post-date">{formatDate(post.date)}</span>
                <span className="related-post-read-time">{post.readTime}</span>
              </div>
              <p className="related-post-preview">{post.excerpt.substring(0, 100)}...</p>
              <span className="related-post-read-more">Read Article</span>
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

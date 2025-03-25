import { PostDetail, PostInfo, Comment } from './types';

export const MOCK_POSTS: PostInfo[] = [
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
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bio: 'Frontend developer passionate about React and TypeScript.',
    },
    publishedAt: '2023-06-15T10:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000',
    readingTime: '8 min read',
    category: {
      id: '1',
      name: 'React',
      slug: 'react',
    },
    status: 'published',
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
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'UI/UX designer and CSS enthusiast with 5+ years of experience.',
    },
    publishedAt: '2023-05-28T14:30:00Z',
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2000',
    readingTime: '10 min read',
    category: {
      id: '2',
      name: 'CSS',
      slug: 'css',
    },
    status: 'published',
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
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      bio: 'Backend developer specializing in Node.js and API design.',
    },
    publishedAt: '2023-05-10T09:15:00Z',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000',
    readingTime: '12 min read',
    category: {
      id: '3',
      name: 'Node.js',
      slug: 'nodejs',
    },
    status: 'published',
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
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      bio: 'Frontend architect with expertise in state management solutions.',
    },
    publishedAt: '2023-04-22T11:45:00Z',
    coverImage: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2000',
    readingTime: '9 min read',
    category: {
      id: '1',
      name: 'React',
      slug: 'react',
    },
    status: 'published',
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
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      bio: 'Performance optimization specialist and web developer.',
    },
    publishedAt: '2023-04-05T08:30:00Z',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000',
    readingTime: '15 min read',
    category: {
      id: '4',
      name: 'Performance',
      slug: 'performance',
    },
    status: 'published',
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
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
      bio: 'Accessibility advocate and frontend developer.',
    },
    publishedAt: '2023-03-18T13:20:00Z',
    coverImage: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000',
    readingTime: '11 min read',
    category: {
      id: '5',
      name: 'Accessibility',
      slug: 'accessibility',
    },
    status: 'published',
    tags: [
      { id: '15', name: 'Accessibility', slug: 'accessibility' },
      { id: '16', name: 'Inclusive Design', slug: 'inclusive-design' },
      { id: '3', name: 'Web Development', slug: 'web-development' },
    ],
  },
];

// 模拟文章详情数据
export const MOCK_POST_DETAILS: Record<string, PostDetail> = {
  'getting-started-with-react-typescript': {
    ...MOCK_POSTS[0],
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
  },
  'advanced-css-techniques': {
    ...MOCK_POSTS[1],
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
  },
  'javascript-async-await': {
    ...MOCK_POSTS[2],
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
  },
};

// 模拟评论数据
export const MOCK_COMMENTS: Record<string, Comment[]> = {
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

// 模拟相关文章数据
export const MOCK_RELATED_POSTS: Record<string, PostDetail[]> = {
  'getting-started-with-react-typescript': [
    MOCK_POST_DETAILS['advanced-css-techniques'],
    MOCK_POST_DETAILS['javascript-async-await'],
  ],
  'advanced-css-techniques': [
    MOCK_POST_DETAILS['getting-started-with-react-typescript'],
    MOCK_POST_DETAILS['javascript-async-await'],
  ],
  'javascript-async-await': [
    MOCK_POST_DETAILS['getting-started-with-react-typescript'],
    MOCK_POST_DETAILS['advanced-css-techniques'],
  ],
};

// 模拟上一篇和下一篇文章数据
export const MOCK_ADJACENT_POSTS: Record<
  string,
  { previous: PostDetail | null; next: PostDetail | null }
> = {
  'getting-started-with-react-typescript': {
    previous: null,
    next: MOCK_POST_DETAILS['advanced-css-techniques'],
  },
  'advanced-css-techniques': {
    previous: MOCK_POST_DETAILS['getting-started-with-react-typescript'],
    next: MOCK_POST_DETAILS['javascript-async-await'],
  },
  'javascript-async-await': {
    previous: MOCK_POST_DETAILS['advanced-css-techniques'],
    next: null,
  },
};

import { CategoryDetail } from './types';
import { PostInfo } from '@/pages/Blog/types';

export const MOCK_CATEGORIES: CategoryDetail[] = [
  {
    id: '1',
    name: 'React',
    slug: 'react',
    description: 'Articles about React, a JavaScript library for building user interfaces.',
    postCount: 12,
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    name: 'CSS',
    slug: 'css',
    description: 'Articles about CSS, including modern techniques, frameworks, and best practices.',
    postCount: 8,
    featuredImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '3',
    name: 'Node.js',
    slug: 'nodejs',
    description:
      "Articles about Node.js, a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    postCount: 6,
    featuredImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    name: 'Performance',
    slug: 'performance',
    description: 'Articles about web performance optimization techniques and best practices.',
    postCount: 5,
    featuredImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
  },
  {
    id: '5',
    name: 'Accessibility',
    slug: 'accessibility',
    description:
      'Articles about web accessibility, including WCAG guidelines and inclusive design.',
    postCount: 4,
    featuredImage:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: '6',
    name: 'TypeScript',
    slug: 'typescript',
    description:
      'Articles about TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    postCount: 7,
    featuredImage:
      'https://images.unsplash.com/photo-1599837487527-e009248aa71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: '7',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'Articles about JavaScript, the programming language of the web.',
    postCount: 15,
    featuredImage:
      'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '8',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Articles about web development, including frontend and backend technologies.',
    postCount: 20,
    featuredImage:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
  },
];

export const MOCK_CATEGORY_POSTS: PostInfo[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt:
      'Learn how to set up a new React project with TypeScript and understand the benefits of using TypeScript with React.',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '1',
      name: 'Jane Smith',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Frontend developer specializing in React and TypeScript. Passionate about creating beautiful and accessible user interfaces.',
    },
    publishedAt: '2023-06-15T10:00:00Z',
    readingTime: '8 min read',
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
    status: 'published',
  },
  {
    id: '2',
    title: 'Advanced CSS Techniques for Modern Layouts',
    slug: 'advanced-css-techniques',
    excerpt:
      'Explore advanced CSS techniques like Grid, Flexbox, and CSS Variables to create responsive and maintainable layouts.',
    featuredImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '2',
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'CSS expert and frontend developer with a focus on responsive design and modern layout techniques.',
    },
    publishedAt: '2023-05-22T14:30:00Z',
    readingTime: '6 min read',
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
    status: 'published',
  },
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express',
    slug: 'building-rest-api-nodejs-express',
    excerpt:
      'Learn how to create a RESTful API using Node.js and Express, with MongoDB as the database.',
    featuredImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '3',
      name: 'Alex Johnson',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Backend developer specializing in Node.js and API development. Experienced in building scalable server-side applications.',
    },
    publishedAt: '2023-05-10T09:15:00Z',
    readingTime: '12 min read',
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
    status: 'published',
  },
  {
    id: '4',
    title: 'React Performance Optimization Techniques',
    slug: 'react-performance-optimization',
    excerpt:
      'Learn advanced techniques for optimizing React applications, including code splitting, memoization, and virtual list implementations.',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '1',
      name: 'Jane Smith',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Frontend developer specializing in React and TypeScript.',
    },
    publishedAt: '2023-07-01T10:00:00Z',
    readingTime: '10 min read',
    category: {
      id: '1',
      name: 'React',
      slug: 'react',
    },
    tags: [
      { id: '1', name: 'React', slug: 'react' },
      { id: '10', name: 'Performance', slug: 'performance' },
    ],
    status: 'published',
  },
  {
    id: '5',
    title: 'Building Custom React Hooks',
    slug: 'building-custom-react-hooks',
    excerpt:
      'Discover how to create reusable custom hooks in React and best practices for hook design patterns.',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '2',
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Senior React developer and technical writer.',
    },
    publishedAt: '2023-06-28T14:30:00Z',
    readingTime: '7 min read',
    category: {
      id: '1',
      name: 'React',
      slug: 'react',
    },
    tags: [
      { id: '1', name: 'React', slug: 'react' },
      { id: '11', name: 'Hooks', slug: 'hooks' },
    ],
    status: 'published',
  },
  {
    id: '6',
    title: 'CSS Grid Layout Mastery',
    slug: 'css-grid-layout-mastery',
    excerpt:
      'Master CSS Grid Layout with practical examples and learn how to create complex layouts with ease.',
    featuredImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '2',
      name: 'John Doe',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'CSS expert and frontend developer.',
    },
    publishedAt: '2023-06-25T09:15:00Z',
    readingTime: '8 min read',
    category: {
      id: '2',
      name: 'CSS',
      slug: 'css',
    },
    tags: [
      { id: '3', name: 'CSS', slug: 'css' },
      { id: '12', name: 'Grid', slug: 'grid' },
    ],
    status: 'published',
  },
  {
    id: '7',
    title: 'Modern CSS Animation Techniques',
    slug: 'modern-css-animation-techniques',
    excerpt:
      'Explore modern CSS animation techniques using keyframes, transitions, and transforms.',
    featuredImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '3',
      name: 'Alex Johnson',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Animation specialist and frontend developer.',
    },
    publishedAt: '2023-06-20T11:45:00Z',
    readingTime: '6 min read',
    category: {
      id: '2',
      name: 'CSS',
      slug: 'css',
    },
    tags: [
      { id: '3', name: 'CSS', slug: 'css' },
      { id: '13', name: 'Animation', slug: 'animation' },
    ],
    status: 'published',
  },
  {
    id: '8',
    title: 'Node.js Microservices Architecture',
    slug: 'nodejs-microservices-architecture',
    excerpt:
      'Learn how to design and implement a microservices architecture using Node.js and Docker.',
    featuredImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      id: '3',
      name: 'Alex Johnson',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Backend developer specializing in Node.js.',
    },
    publishedAt: '2023-06-15T13:20:00Z',
    readingTime: '15 min read',
    category: {
      id: '3',
      name: 'Node.js',
      slug: 'nodejs',
    },
    tags: [
      { id: '7', name: 'Node.js', slug: 'nodejs' },
      { id: '14', name: 'Microservices', slug: 'microservices' },
      { id: '15', name: 'Docker', slug: 'docker' },
    ],
    status: 'published',
  },
];

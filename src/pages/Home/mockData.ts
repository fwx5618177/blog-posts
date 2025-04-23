import {
  EnterpriseCategory,
  HomePageData,
  LatestInsight,
  TrendingTopic,
  UpcomingEvent,
} from './types';
import { PostInfo } from '../Blog/types';

// 特色文章数据
export const FEATURED_POSTS: PostInfo[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
    excerpt:
      'Learn how to set up a new project with React and TypeScript to build type-safe applications.',
    publishedAt: '2023-03-15T10:00:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Frontend developer passionate about React and TypeScript',
    },
    category: { id: '1', name: 'React', slug: 'react' },
    tags: [
      { id: '1', name: 'TypeScript', slug: 'typescript' },
      { id: '7', name: 'JavaScript', slug: 'javascript' },
    ],
    readingTime: '5 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '2',
    title: 'Advanced CSS Techniques for Modern Layouts',
    slug: 'advanced-css-techniques',
    excerpt:
      'Explore modern CSS techniques like Grid, Flexbox, and CSS Variables to create responsive layouts.',
    publishedAt: '2023-03-10T14:30:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'CSS expert with a passion for modern web design',
    },
    category: { id: '2', name: 'CSS', slug: 'css' },
    tags: [
      { id: '2', name: 'Web Design', slug: 'web-design' },
      { id: '8', name: 'HTML', slug: 'html' },
    ],
    readingTime: '8 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

// 最近文章数据
export const RECENT_POSTS: PostInfo[] = [
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express',
    slug: 'building-rest-api-nodejs-express',
    excerpt:
      'Learn how to create a RESTful API using Node.js and Express with MongoDB as the database.',
    publishedAt: '2023-03-05T09:15:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Backend developer specializing in Node.js and Express',
    },
    category: { id: '3', name: 'Node.js', slug: 'nodejs' },
    tags: [
      { id: '3', name: 'API', slug: 'api' },
      { id: '9', name: 'Backend', slug: 'backend' },
    ],
    readingTime: '10 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '4',
    title: 'Introduction to State Management with Redux',
    slug: 'introduction-state-management-redux',
    excerpt:
      'Understand the core concepts of Redux and how to implement it in your React applications.',
    publishedAt: '2023-03-01T11:45:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Frontend architect with expertise in state management',
    },
    category: { id: '1', name: 'React', slug: 'react' },
    tags: [
      { id: '4', name: 'Redux', slug: 'redux' },
      { id: '7', name: 'JavaScript', slug: 'javascript' },
    ],
    readingTime: '7 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
  {
    id: '5',
    title: 'Optimizing Web Performance: A Comprehensive Guide',
    slug: 'optimizing-web-performance',
    excerpt:
      'Learn techniques and best practices to improve the performance of your web applications.',
    publishedAt: '2023-02-25T16:20:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Performance optimization specialist and web architect',
    },
    category: { id: '4', name: 'Performance', slug: 'performance' },
    tags: [
      { id: '5', name: 'Optimization', slug: 'optimization' },
      { id: '10', name: 'Web Vitals', slug: 'web-vitals' },
    ],
    readingTime: '12 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
  },
  {
    id: '6',
    title: 'Creating Accessible Web Applications',
    slug: 'creating-accessible-web-applications',
    excerpt:
      'Discover how to make your web applications accessible to all users, including those with disabilities.',
    publishedAt: '2023-02-20T13:10:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'Accessibility advocate and inclusive design expert',
    },
    category: { id: '5', name: 'Accessibility', slug: 'accessibility' },
    tags: [
      { id: '6', name: 'Inclusive Design', slug: 'inclusive-design' },
      { id: '11', name: 'ARIA', slug: 'aria' },
    ],
    readingTime: '9 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  },
  {
    id: '7',
    title: 'Mastering Git Workflows for Teams',
    slug: 'mastering-git-workflows',
    excerpt:
      'Learn effective Git branching strategies and workflows for collaborative development teams.',
    publishedAt: '2023-02-15T10:30:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'DevOps engineer and version control expert',
    },
    category: { id: '7', name: 'DevOps', slug: 'devops' },
    tags: [
      { id: '12', name: 'Git', slug: 'git' },
      { id: '13', name: 'Collaboration', slug: 'collaboration' },
    ],
    readingTime: '8 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
  },
  {
    id: '8',
    title: 'Microservices Architecture: Patterns and Best Practices',
    slug: 'microservices-architecture-patterns',
    excerpt:
      'Explore the key patterns and best practices for designing and implementing microservices architecture.',
    publishedAt: '2023-02-10T08:45:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'System architect specializing in distributed systems',
    },
    category: { id: '8', name: 'Architecture', slug: 'architecture' },
    tags: [
      { id: '14', name: 'Microservices', slug: 'microservices' },
      { id: '15', name: 'System Design', slug: 'system-design' },
    ],
    readingTime: '11 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
  },
  {
    id: '9',
    title: 'GraphQL vs REST: Choosing the Right API Paradigm',
    slug: 'graphql-vs-rest-api-paradigm',
    excerpt:
      'Compare GraphQL and REST API approaches to determine which is best for your application needs.',
    publishedAt: '2023-02-05T14:20:00Z',
    author: {
      id: '1',
      name: 'Jane Doe',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      bio: 'API design expert and software architect',
    },
    category: { id: '9', name: 'API Design', slug: 'api-design' },
    tags: [
      { id: '16', name: 'GraphQL', slug: 'graphql' },
      { id: '17', name: 'REST', slug: 'rest' },
    ],
    readingTime: '9 min read',
    status: 'published',
    coverImage:
      'https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    featuredImage:
      'https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  },
];

// Enterprise categories data
export const ENTERPRISE_CATEGORIES: EnterpriseCategory[] = [
  { id: '1', name: 'Frontend Development', slug: 'frontend', count: 24, icon: '⚛️' },
  { id: '2', name: 'Backend Systems', slug: 'backend', count: 18, icon: '🖥️' },
  { id: '3', name: 'DevOps & Infrastructure', slug: 'devops', count: 15, icon: '🚀' },
  { id: '4', name: 'API Design', slug: 'api', count: 12, icon: '🔄' },
  { id: '5', name: 'Security & Compliance', slug: 'security', count: 9, icon: '🔐' },
  { id: '6', name: 'Data Engineering', slug: 'data', count: 11, icon: '📊' },
];

// Trending topics data
export const TRENDING_TOPICS: TrendingTopic[] = [
  { id: '1', name: 'Microservices', slug: 'microservices', count: 15, icon: '🔌' },
  { id: '2', name: 'AI Integration', slug: 'ai-integration', count: 12, icon: '🤖' },
  { id: '3', name: 'Web Performance', slug: 'web-performance', count: 18, icon: '⚡' },
  { id: '4', name: 'TypeScript', slug: 'typescript', count: 25, icon: '📝' },
  { id: '5', name: 'Serverless', slug: 'serverless', count: 14, icon: '☁️' },
];

// Latest insights data
export const LATEST_INSIGHTS: LatestInsight[] = [
  {
    id: '1',
    title: 'The Future of Web Development in 2023',
    excerpt: 'Predictions and trends for enterprise web development.',
    icon: '🔮',
    link: '/insights/future-web-development-2023',
  },
  {
    id: '2',
    title: 'Building Resilient Microservices',
    excerpt: 'Strategies for fault-tolerant microservice architecture.',
    icon: '🛡️',
    link: '/insights/resilient-microservices',
  },
  {
    id: '3',
    title: 'AI-Driven Development Tools',
    excerpt: 'How AI is transforming the development workflow.',
    icon: '🤖',
    link: '/insights/ai-driven-development-tools',
  },
];

// Upcoming events data
export const UPCOMING_EVENTS: UpcomingEvent[] = [
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

// Combined data for the home page
export const homePageData: HomePageData = {
  featuredPosts: FEATURED_POSTS,
  recentPosts: RECENT_POSTS,
  enterpriseCategories: ENTERPRISE_CATEGORIES,
  trendingTopics: TRENDING_TOPICS,
  latestInsights: LATEST_INSIGHTS,
  upcomingEvents: UPCOMING_EVENTS,
};

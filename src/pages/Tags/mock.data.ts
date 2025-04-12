import { PostInfo } from '../Blog/types';
import { TagDetail } from './types';

export const MOCK_TAGS: TagDetail[] = [
  {
    id: '1',
    name: 'TypeScript',
    slug: 'typescript',
    description:
      'Articles about TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
    postCount: 8,
  },
  {
    id: '2',
    name: 'Web Design',
    slug: 'web-design',
    description: 'Articles about web design principles, trends, and best practices.',
    postCount: 10,
  },
  {
    id: '3',
    name: 'API',
    slug: 'api',
    description: 'Articles about API design, development, and integration.',
    postCount: 6,
  },
  {
    id: '4',
    name: 'Redux',
    slug: 'redux',
    description: 'Articles about Redux, a predictable state container for JavaScript apps.',
    postCount: 5,
  },
  {
    id: '5',
    name: 'Optimization',
    slug: 'optimization',
    description: 'Articles about performance optimization techniques for web applications.',
    postCount: 7,
  },
  {
    id: '6',
    name: 'Inclusive Design',
    slug: 'inclusive-design',
    description:
      'Articles about designing web applications that are accessible to all users, regardless of their abilities or disabilities.',
    postCount: 3,
  },
  {
    id: '7',
    name: 'JavaScript',
    slug: 'javascript',
    description:
      'Articles about JavaScript, the programming language of the web, including best practices, patterns, and new features.',
    postCount: 15,
  },
  {
    id: '8',
    name: 'HTML',
    slug: 'html',
    description:
      'Articles about HTML, semantic markup, and best practices for structuring web content.',
    postCount: 9,
  },
];

export const MOCK_TAG_POSTS: Record<string, PostInfo[]> = {
  typescript: [
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
      publishedAt: '2023-06-15T10:00:00Z',
      author: {
        id: '1',
        name: 'Jane Smith',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        bio: 'Frontend developer passionate about TypeScript and React',
      },
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
      id: '8',
      title: 'Advanced TypeScript Patterns',
      slug: 'advanced-typescript-patterns',
      excerpt:
        'Explore advanced TypeScript patterns and techniques to improve your code quality and developer experience.',
      featuredImage:
        'https://images.unsplash.com/photo-1599837487527-e009248aa71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      coverImage:
        'https://images.unsplash.com/photo-1599837487527-e009248aa71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      publishedAt: '2023-03-20T15:45:00Z',
      author: {
        id: '2',
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        bio: 'Senior developer with a focus on TypeScript and architecture',
      },
      readingTime: '12 min read',
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
      status: 'published',
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
      coverImage:
        'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      publishedAt: '2023-05-22T14:30:00Z',
      author: {
        id: '2',
        name: 'John Doe',
        avatar:
          'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
        bio: 'Senior developer with a passion for web design and CSS',
      },
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
  ],
  // ... 其他标签的文章数据
};

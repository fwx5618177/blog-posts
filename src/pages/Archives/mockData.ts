import { ArchiveYearProps, PostsByMonth } from './types';

export const ARCHIVE_YEARS: ArchiveYearProps[] = [
  { year: '2023', count: 24 },
  { year: '2022', count: 36 },
  { year: '2021', count: 28 },
  { year: '2020', count: 19 },
  { year: '2019', count: 15 },
  { year: '2018', count: 12 },
];

export const MOCK_POSTS_BY_MONTH: PostsByMonth = {
  '2023': {
    December: [
      {
        id: '1',
        title: 'Getting Started with React and TypeScript',
        slug: 'getting-started-with-react-typescript',
        excerpt:
          'Learn how to set up a new React project with TypeScript and understand the benefits of using TypeScript with React.',
        date: '2023-12-15T10:00:00Z',
        categories: [{ id: '1', name: 'React', slug: 'react' }],
        tags: [
          { id: '1', name: 'React', slug: 'react' },
          { id: '2', name: 'TypeScript', slug: 'typescript' },
        ],
      },
      {
        id: '2',
        title: 'Advanced CSS Techniques for Modern Layouts',
        slug: 'advanced-css-techniques',
        excerpt:
          'Explore advanced CSS techniques like Grid, Flexbox, and CSS Variables to create responsive and maintainable layouts.',
        date: '2023-12-05T14:30:00Z',
        categories: [{ id: '2', name: 'CSS', slug: 'css' }],
        tags: [
          { id: '3', name: 'CSS', slug: 'css' },
          { id: '5', name: 'Web Design', slug: 'web-design' },
        ],
      },
    ],
    November: [
      {
        id: '3',
        title: 'Building a REST API with Node.js and Express',
        slug: 'building-rest-api-nodejs-express',
        excerpt:
          'Learn how to create a RESTful API using Node.js and Express, with MongoDB as the database.',
        date: '2023-11-20T09:15:00Z',
        categories: [{ id: '3', name: 'Node.js', slug: 'nodejs' }],
        tags: [
          { id: '7', name: 'Node.js', slug: 'nodejs' },
          { id: '8', name: 'Express', slug: 'express' },
          { id: '9', name: 'API', slug: 'api' },
        ],
      },
    ],
    October: [
      {
        id: '4',
        title: 'Introduction to State Management with Redux',
        slug: 'introduction-state-management-redux',
        excerpt:
          'Understand the core concepts of Redux and learn how to implement it in your React applications.',
        date: '2023-10-15T11:45:00Z',
        categories: [{ id: '1', name: 'React', slug: 'react' }],
        tags: [
          { id: '1', name: 'React', slug: 'react' },
          { id: '11', name: 'Redux', slug: 'redux' },
        ],
      },
    ],
    September: [
      {
        id: '5',
        title: 'Optimizing Web Performance: A Comprehensive Guide',
        slug: 'optimizing-web-performance',
        excerpt:
          'Learn strategies and techniques to optimize your web applications for better performance and user experience.',
        date: '2023-09-05T08:30:00Z',
        categories: [{ id: '4', name: 'Performance', slug: 'performance' }],
        tags: [
          { id: '13', name: 'Performance', slug: 'performance' },
          { id: '14', name: 'Optimization', slug: 'optimization' },
        ],
      },
    ],
    August: [
      {
        id: '6',
        title: 'Creating Accessible Web Applications',
        slug: 'creating-accessible-web-applications',
        excerpt:
          'Discover best practices for building web applications that are accessible to all users, including those with disabilities.',
        date: '2023-08-18T13:20:00Z',
        categories: [{ id: '5', name: 'Accessibility', slug: 'accessibility' }],
        tags: [
          { id: '15', name: 'Accessibility', slug: 'accessibility' },
          { id: '16', name: 'Inclusive Design', slug: 'inclusive-design' },
        ],
      },
    ],
    July: [
      {
        id: '7',
        title: 'Advanced TypeScript Patterns',
        slug: 'advanced-typescript-patterns',
        excerpt:
          'Explore advanced TypeScript patterns and techniques to improve your code quality and developer experience.',
        date: '2023-07-20T15:45:00Z',
        categories: [{ id: '6', name: 'TypeScript', slug: 'typescript' }],
        tags: [
          { id: '2', name: 'TypeScript', slug: 'typescript' },
          { id: '8', name: 'Advanced', slug: 'advanced' },
        ],
      },
    ],
    June: [
      {
        id: '8',
        title: 'JavaScript Best Practices for 2023',
        slug: 'javascript-best-practices-2023',
        excerpt:
          'Learn the latest JavaScript best practices and patterns to write clean, efficient, and maintainable code.',
        date: '2023-06-15T10:30:00Z',
        categories: [{ id: '7', name: 'JavaScript', slug: 'javascript' }],
        tags: [
          { id: '17', name: 'JavaScript', slug: 'javascript' },
          { id: '18', name: 'Best Practices', slug: 'best-practices' },
        ],
      },
    ],
  },
  '2022': {
    December: [
      {
        id: '9',
        title: 'Full-Stack Development with MERN Stack',
        slug: 'full-stack-development-mern-stack',
        excerpt:
          'Learn how to build full-stack web applications using MongoDB, Express, React, and Node.js (MERN stack).',
        date: '2022-12-25T09:00:00Z',
        categories: [{ id: '8', name: 'Web Development', slug: 'web-development' }],
        tags: [
          { id: '19', name: 'MERN Stack', slug: 'mern-stack' },
          { id: '20', name: 'Full-Stack', slug: 'full-stack' },
        ],
      },
    ],
    November: [
      {
        id: '10',
        title: 'Semantic HTML: Best Practices for Web Accessibility',
        slug: 'semantic-html-best-practices',
        excerpt:
          'Learn how to use semantic HTML elements to improve the accessibility and SEO of your web pages.',
        date: '2022-11-10T11:15:00Z',
        categories: [{ id: '8', name: 'Web Development', slug: 'web-development' }],
        tags: [
          { id: '21', name: 'HTML', slug: 'html' },
          { id: '15', name: 'Accessibility', slug: 'accessibility' },
        ],
      },
    ],
    October: [
      {
        id: '11',
        title: 'Building Progressive Web Apps (PWAs)',
        slug: 'building-progressive-web-apps',
        excerpt:
          'Learn how to create Progressive Web Apps that offer native-like experiences on the web.',
        date: '2022-10-05T14:20:00Z',
        categories: [{ id: '8', name: 'Web Development', slug: 'web-development' }],
        tags: [
          { id: '22', name: 'PWA', slug: 'pwa' },
          { id: '23', name: 'Mobile', slug: 'mobile' },
        ],
      },
    ],
    September: [
      {
        id: '12',
        title: 'Introduction to GraphQL',
        slug: 'introduction-to-graphql',
        excerpt: 'Learn the basics of GraphQL and how it differs from traditional REST APIs.',
        date: '2022-09-15T10:45:00Z',
        categories: [{ id: '9', name: 'API Design', slug: 'api-design' }],
        tags: [
          { id: '24', name: 'GraphQL', slug: 'graphql' },
          { id: '9', name: 'API', slug: 'api' },
        ],
      },
    ],
  },
  '2021': {
    December: [
      {
        id: '13',
        title: 'Mastering CSS Grid Layout',
        slug: 'mastering-css-grid-layout',
        excerpt: 'A comprehensive guide to using CSS Grid Layout for creating complex web layouts.',
        date: '2021-12-20T09:30:00Z',
        categories: [{ id: '2', name: 'CSS', slug: 'css' }],
        tags: [
          { id: '3', name: 'CSS', slug: 'css' },
          { id: '25', name: 'Grid', slug: 'grid' },
        ],
      },
    ],
    November: [
      {
        id: '14',
        title: 'React Hooks: A Complete Guide',
        slug: 'react-hooks-complete-guide',
        excerpt:
          'Learn how to use React Hooks to manage state and side effects in functional components.',
        date: '2021-11-10T14:15:00Z',
        categories: [{ id: '1', name: 'React', slug: 'react' }],
        tags: [
          { id: '1', name: 'React', slug: 'react' },
          { id: '26', name: 'Hooks', slug: 'hooks' },
        ],
      },
    ],
    October: [
      {
        id: '15',
        title: 'Serverless Architecture: Benefits and Challenges',
        slug: 'serverless-architecture-benefits-challenges',
        excerpt:
          'Explore the advantages and potential pitfalls of adopting serverless architecture for your applications.',
        date: '2021-10-05T11:30:00Z',
        categories: [{ id: '10', name: 'Cloud Computing', slug: 'cloud-computing' }],
        tags: [
          { id: '27', name: 'Serverless', slug: 'serverless' },
          { id: '28', name: 'AWS', slug: 'aws' },
        ],
      },
    ],
  },
  '2020': {
    December: [
      {
        id: '16',
        title: 'Introduction to Docker for Web Developers',
        slug: 'introduction-to-docker-web-developers',
        excerpt:
          'Learn how to use Docker to containerize your web applications for consistent development and deployment.',
        date: '2020-12-15T10:00:00Z',
        categories: [{ id: '11', name: 'DevOps', slug: 'devops' }],
        tags: [
          { id: '29', name: 'Docker', slug: 'docker' },
          { id: '30', name: 'Containers', slug: 'containers' },
        ],
      },
    ],
    November: [
      {
        id: '17',
        title: 'Building Real-Time Applications with WebSockets',
        slug: 'building-real-time-applications-websockets',
        excerpt:
          'Learn how to create real-time web applications using WebSockets for bidirectional communication.',
        date: '2020-11-10T14:30:00Z',
        categories: [{ id: '8', name: 'Web Development', slug: 'web-development' }],
        tags: [
          { id: '31', name: 'WebSockets', slug: 'websockets' },
          { id: '32', name: 'Real-Time', slug: 'real-time' },
        ],
      },
    ],
  },
  '2019': {
    December: [
      {
        id: '18',
        title: 'Introduction to Vue.js',
        slug: 'introduction-to-vuejs',
        excerpt:
          'Learn the basics of Vue.js and how to build interactive web applications with this progressive JavaScript framework.',
        date: '2019-12-20T09:15:00Z',
        categories: [{ id: '12', name: 'Frontend Frameworks', slug: 'frontend-frameworks' }],
        tags: [
          { id: '33', name: 'Vue.js', slug: 'vuejs' },
          { id: '17', name: 'JavaScript', slug: 'javascript' },
        ],
      },
    ],
    November: [
      {
        id: '19',
        title: 'Getting Started with Test-Driven Development (TDD)',
        slug: 'getting-started-with-tdd',
        excerpt:
          'Learn the principles of Test-Driven Development and how to apply them to your projects.',
        date: '2019-11-15T11:45:00Z',
        categories: [{ id: '13', name: 'Testing', slug: 'testing' }],
        tags: [
          { id: '34', name: 'TDD', slug: 'tdd' },
          { id: '35', name: 'Jest', slug: 'jest' },
        ],
      },
    ],
  },
};

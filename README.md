# FWX Post - Personal Blog System

A modern, responsive personal blog system built with React, TypeScript, and SCSS.

## Features

- Modern React with TypeScript
- Component-based architecture
- Responsive design for all devices
- Theme switching (light, dark, sepia, high-contrast)
- Optimized performance
- Accessibility focused
- SEO friendly

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: SCSS (no Tailwind)
- **Routing**: React Router v7
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Markdown Parsing**: Marked + Highlight.js

## Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable UI components
├── config/         # Configuration files
├── constants/      # Constants and enums
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── layouts/        # Page layout components
├── pages/          # Page components
├── routes/         # Routing configuration
├── services/       # API services and data fetching
├── styles/         # Global styles and SCSS variables
├── test/           # Test utilities and setup
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fwx-post.git
cd fwx-post

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Run tests
npm run test

# Run tests with watch mode
npm run test:watch

# Lint code
npm run lint

# Format code
npm run format
```

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Analyze bundle size
npm run analyze
```

## Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `lint`: Run ESLint
- `lint:fix`: Run ESLint with auto-fix
- `format`: Format code with Prettier
- `format:check`: Check code formatting
- `typecheck`: Run TypeScript type checking
- `test`: Run tests
- `test:watch`: Run tests in watch mode
- `test:coverage`: Run tests with coverage
- `clean`: Clean build output
- `analyze`: Analyze bundle size

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## API Client Architecture

The project includes a robust API client built with Axios that provides:

### Features

- **Centralized Configuration**: Environment-specific API URLs and common headers
- **Interceptors**: Request and response interceptors for authentication and error handling
- **Token Management**: Automatic token refresh when authentication expires
- **Type Safety**: TypeScript interfaces for all API responses and requests
- **Service-Based Structure**: Organized API services for different resources
- **Error Handling**: Consistent error handling across the application

### Directory Structure

```
src/api/
├── client.ts              # Main API client with axios instance and interceptors
├── config.ts              # API configuration (base URLs, endpoints, etc.)
├── index.ts               # Exports for API client and services
├── types.ts               # API-specific TypeScript interfaces
├── interceptors/          # Request and response interceptors
│   ├── request.interceptor.ts
│   └── response.interceptor.ts
└── services/              # API services for different resources
    └── posts.service.ts   # Example service for posts
```

### Usage Example

```typescript
// Import the API service
import { PostsService } from '../api/services/posts.service';

// Use in a component or custom hook
const fetchPosts = async () => {
  try {
    const posts = await PostsService.getPosts({ category: 'react' });
    // Handle successful response
  } catch (error) {
    // Handle error
  }
};

// Or use the generic API client directly
import { api } from '../api/client';

const fetchData = async () => {
  try {
    const data = await api.get('/custom-endpoint', { param1: 'value1' });
    // Handle successful response
  } catch (error) {
    // Handle error
  }
};
```

### Authentication Flow

The API client handles authentication automatically:

1. Adds authentication token to all requests (if available)
2. Detects 401 Unauthorized responses
3. Attempts to refresh the token automatically
4. Retries the original request with the new token
5. Redirects to login if token refresh fails

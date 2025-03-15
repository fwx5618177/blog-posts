import React from 'react';

// Theme Types
export type ThemeType = 'light' | 'dark' | 'sepia' | 'high-contrast' | 'dark-high-contrast';

// Post Types
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  readingTime: number; // in minutes
  views?: number;
  likes?: number;
  comments?: Comment[];
  featured?: boolean;
  status: 'draft' | 'published';
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parentId?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Comment {
  id: string;
  content: string;
  author: {
    name: string;
    email?: string;
    avatar?: string;
  };
  createdAt: string;
  parentId?: string;
  replies?: Comment[];
}

// Component Props Types
export interface PostCardProps {
  post: Post;
  variant?: 'default' | 'compact' | 'featured';
}

export interface PostListProps {
  posts: Post[];
  layout?: 'grid' | 'list';
  showFeatured?: boolean;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  highlight?: number[];
  caption?: string;
  theme?: string;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export interface ThemeToggleProps {
  currentTheme: ThemeType;
  onThemeChange: (theme: ThemeType) => void;
}

// Layout Props Types
export interface LayoutProps {
  children?: React.ReactNode;
  showSidebar?: boolean;
  showFooter?: boolean;
}

// SEO Types
export interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  code: number;
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Filter and Sort Types
export interface PostFilters {
  category?: string;
  tag?: string;
  author?: string;
  search?: string;
  featured?: boolean;
  status?: 'draft' | 'published';
}

export type SortOrder = 'asc' | 'desc';

export interface PostSortOptions {
  field: 'publishedAt' | 'updatedAt' | 'title' | 'views' | 'likes';
  order: SortOrder;
}

// Route Types
export interface RouteConfig {
  path: string;
  component: React.ComponentType<unknown>;
  exact?: boolean;
  routes?: RouteConfig[];
}

// Theme Context Types
export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
  availableThemes: ThemeType[];
}

// Markdown Parser Options
export interface MarkdownParserOptions {
  sanitize?: boolean;
  breaks?: boolean;
  smartLists?: boolean;
  smartypants?: boolean;
  highlight?: (code: string, language: string) => string;
}

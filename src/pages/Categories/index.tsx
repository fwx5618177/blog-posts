import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

// 定义分类类型
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
  featuredImage?: string;
}

// 模拟分类数据
const MOCK_CATEGORIES: Category[] = [
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

/**
 * Categories page component
 *
 * Displays a list of all blog categories
 */
const CategoriesPage: React.FC = () => {
  return (
    <div className="categories-page">
      <div className="container">
        <div className="categories-header">
          <h1 className="categories-title">Categories</h1>
          <p className="categories-description">
            Browse all our articles by category. Find content that matches your interests.
          </p>
        </div>

        <div className="categories-grid">
          {MOCK_CATEGORIES.map(category => (
            <Link key={category.id} to={`/categories/${category.slug}`} className="category-card">
              <div className="category-image">
                {category.featuredImage && <img src={category.featuredImage} alt={category.name} />}
              </div>
              <div className="category-content">
                <h2 className="category-title">{category.name}</h2>
                <p className="category-description">{category.description}</p>
                <div className="category-meta">
                  <span className="post-count">{category.postCount} articles</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;

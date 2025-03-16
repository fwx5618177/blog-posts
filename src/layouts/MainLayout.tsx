import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { LayoutProps } from '../types';
import './MainLayout.scss';

// Mock data for sidebar
const MOCK_CATEGORIES = [
  { id: '1', name: 'React', slug: 'react' },
  { id: '2', name: 'CSS', slug: 'css' },
  { id: '3', name: 'Node.js', slug: 'nodejs' },
  { id: '4', name: 'Performance', slug: 'performance' },
  { id: '5', name: 'Accessibility', slug: 'accessibility' },
];

const MOCK_TAGS = [
  { id: '1', name: 'TypeScript', slug: 'typescript' },
  { id: '2', name: 'Web Design', slug: 'web-design' },
  { id: '3', name: 'API', slug: 'api' },
  { id: '4', name: 'Redux', slug: 'redux' },
  { id: '5', name: 'Optimization', slug: 'optimization' },
  { id: '6', name: 'Inclusive Design', slug: 'inclusive-design' },
  { id: '7', name: 'JavaScript', slug: 'javascript' },
  { id: '8', name: 'HTML', slug: 'html' },
];

const MOCK_RECENT_POSTS = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-typescript',
  },
  { id: '2', title: 'Advanced CSS Techniques for Modern Layouts', slug: 'advanced-css-techniques' },
  {
    id: '3',
    title: 'Building a REST API with Node.js and Express',
    slug: 'building-rest-api-nodejs-express',
  },
  {
    id: '4',
    title: 'Introduction to State Management with Redux',
    slug: 'introduction-state-management-redux',
  },
];

// Mock table of contents for article pages
const MOCK_TABLE_OF_CONTENTS = [
  { id: 'introduction', title: 'Introduction', level: 1 },
  { id: 'getting-started', title: 'Getting Started', level: 1 },
  { id: 'installation', title: 'Installation', level: 2 },
  { id: 'configuration', title: 'Configuration', level: 2 },
  { id: 'basic-usage', title: 'Basic Usage', level: 1 },
  { id: 'examples', title: 'Examples', level: 2 },
  { id: 'advanced-techniques', title: 'Advanced Techniques', level: 1 },
  { id: 'performance-optimization', title: 'Performance Optimization', level: 2 },
  { id: 'best-practices', title: 'Best Practices', level: 2 },
  { id: 'conclusion', title: 'Conclusion', level: 1 },
];

/**
 * MainLayout - The primary layout component for the application
 *
 * This layout provides a consistent structure for all pages, including:
 * - Header with navigation
 * - Main content area with optional sidebar
 * - Footer with site information
 *
 * The layout is designed to be responsive and adaptable for both blog and enterprise use cases.
 */
const MainLayout: React.FC<LayoutProps> = ({
  children,
  showSidebar = true,
  showFooter = true,
  contentWidth = 'standard', // 'standard', 'wide', or 'full'
}) => {
  const location = useLocation();
  const content = children || <Outlet />;
  const isArticlePage = location.pathname.includes('/blog/') && location.pathname !== '/blog/';

  return (
    <div className="layout">
      {/* Fixed header */}
      <Header />

      {/* Header spacer to prevent content from being hidden under fixed header */}
      <div className="layout-spacer"></div>

      {/* Main content area */}
      <div className={`layout-container ${contentWidth}`}>
        <main className={`main-content ${showSidebar ? 'with-sidebar' : ''}`}>
          {/* Primary content area */}
          <div className="content-container">{content}</div>

          {/* Optional sidebar */}
          {showSidebar && (
            <aside className="sidebar-container">
              <Sidebar
                categories={MOCK_CATEGORIES}
                tags={MOCK_TAGS}
                recentPosts={MOCK_RECENT_POSTS}
                tableOfContents={isArticlePage ? MOCK_TABLE_OF_CONTENTS : []}
              />
            </aside>
          )}
        </main>
      </div>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

import React, { useEffect } from 'react';
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

const MainLayout: React.FC<LayoutProps> = ({ children, showSidebar = true, showFooter = true }) => {
  const location = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="layout">
      <Header />

      <div className="layout-spacer"></div>

      <main className={`main-content ${showSidebar ? 'with-sidebar' : ''}`}>
        <div className="content-container">{children || <Outlet />}</div>

        {showSidebar && (
          <div className="sidebar-container">
            <Sidebar
              categories={MOCK_CATEGORIES}
              tags={MOCK_TAGS}
              recentPosts={MOCK_RECENT_POSTS}
            />
          </div>
        )}
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

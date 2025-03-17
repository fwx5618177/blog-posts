import React, { useState, useEffect } from 'react';
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

// Mock archive years
const MOCK_ARCHIVE_YEARS = [
  { year: '2023', count: 24 },
  { year: '2022', count: 36 },
  { year: '2021', count: 28 },
  { year: '2020', count: 19 },
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

  // 判断当前页面类型
  const isBlogPage = location.pathname === '/blog' || location.pathname === '/blog/';
  const isBlogDetailPage = location.pathname.includes('/blog/') && !isBlogPage;
  const isArchiveListPage = location.pathname === '/archives' || location.pathname === '/archives/';
  const isArchiveDetailPage = location.pathname.includes('/archives/') && !isArchiveListPage;
  const isResourcesPage = location.pathname.includes('/resources');
  const isCategoriesPage =
    location.pathname === '/categories' || location.pathname === '/categories/';
  const isCategoryDetailPage = location.pathname.includes('/categories/') && !isCategoriesPage;
  const isTagsPage = location.pathname === '/tags' || location.pathname === '/tags/';
  const isTagDetailPage = location.pathname.includes('/tags/') && !isTagsPage;

  // 添加状态控制侧边栏在移动端的显示
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // 当路由变化时，自动隐藏移动端侧边栏
  useEffect(() => {
    setShowMobileSidebar(false);
  }, [location.pathname]);

  // 是否显示侧边栏（在指定页面显示）
  const shouldShowSidebar =
    showSidebar &&
    (isBlogPage ||
      isBlogDetailPage ||
      isArchiveListPage ||
      isArchiveDetailPage ||
      isResourcesPage ||
      isCategoriesPage ||
      isCategoryDetailPage ||
      isTagsPage ||
      isTagDetailPage);

  // 是否显示目录（只在博客详情页和资源详情页显示）
  const shouldShowTableOfContents =
    isBlogDetailPage ||
    (isResourcesPage && location.pathname !== '/resources' && location.pathname !== '/resources/');

  // 切换侧边栏显示状态
  const toggleSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);

    // 当侧边栏显示时，禁止背景滚动
    if (!showMobileSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  // 关闭侧边栏
  const closeSidebar = () => {
    setShowMobileSidebar(false);
    document.body.style.overflow = '';
  };

  // 组件卸载时恢复滚动
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="layout">
      {/* Fixed header */}
      <Header />

      {/* Header spacer to prevent content from being hidden under fixed header */}
      <div className="layout-spacer"></div>

      {/* Main content area */}
      <div className={`layout-container ${contentWidth}`}>
        <main className={`main-content ${shouldShowSidebar ? 'with-sidebar' : ''}`}>
          {/* Primary content area */}
          <div className="content-container">{content}</div>

          {/* Optional sidebar - 在指定页面显示 */}
          {shouldShowSidebar && (
            <>
              {/* 背景遮罩，点击可关闭侧边栏 */}
              <div
                className={`sidebar-overlay ${showMobileSidebar ? 'show' : ''}`}
                onClick={closeSidebar}
              ></div>

              {/* 移动端侧边栏切换按钮 */}
              <button
                className="sidebar-toggle"
                onClick={toggleSidebar}
                aria-label={showMobileSidebar ? '隐藏侧边栏' : '显示侧边栏'}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {showMobileSidebar ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </>
                  )}
                </svg>
              </button>

              <aside className={`sidebar-container ${showMobileSidebar ? 'show-mobile' : ''}`}>
                <Sidebar
                  categories={MOCK_CATEGORIES}
                  tags={MOCK_TAGS}
                  recentPosts={MOCK_RECENT_POSTS}
                  tableOfContents={shouldShowTableOfContents ? MOCK_TABLE_OF_CONTENTS : []}
                  archiveYears={MOCK_ARCHIVE_YEARS}
                  currentPage={
                    isBlogPage
                      ? 'blog'
                      : isBlogDetailPage
                        ? 'blog-detail'
                        : isArchiveListPage
                          ? 'archive-list'
                          : isArchiveDetailPage
                            ? 'archive-detail'
                            : isCategoriesPage || isCategoryDetailPage
                              ? 'categories'
                              : isTagsPage || isTagDetailPage
                                ? 'tags'
                                : 'resources'
                  }
                />
              </aside>
            </>
          )}
        </main>
      </div>

      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayout;

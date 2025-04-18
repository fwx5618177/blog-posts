import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

interface SidebarProps {
  categories?: { id: string; name: string; slug: string }[];
  tags?: { id: string; name: string; slug: string }[];
  recentPosts?: { id: string; title: string; slug: string }[];
  tableOfContents?: { id: string; title: string; level: number }[];
  archiveYears?: { year: string; count: number }[];
  currentPage?:
    | 'blog'
    | 'blog-detail'
    | 'archive-list'
    | 'archive-detail'
    | 'resources'
    | 'categories'
    | 'tags';
}

/**
 * Sidebar component for displaying supplementary content and navigation
 *
 * Features:
 * - Author profile with social links
 * - Search functionality
 * - Recent posts listing
 * - Categories and tags navigation
 * - Table of contents for article details
 * - Archives by year
 */
const Sidebar: React.FC<SidebarProps> = ({
  categories = [],
  tags = [],
  recentPosts = [],
  tableOfContents = [],
  archiveYears = [],
  currentPage = 'blog',
}) => {
  const location = useLocation();

  // 判断是否显示目录
  const shouldShowTableOfContents =
    (currentPage === 'blog-detail' ||
      (currentPage === 'resources' &&
        location.pathname !== '/resources' &&
        location.pathname !== '/resources/')) &&
    tableOfContents.length > 0;

  return (
    <div className="sidebar">
      {/* Table of Contents - Only shown on article pages and resource detail pages */}
      {shouldShowTableOfContents && (
        <div className="sidebar-widget toc-widget">
          <h3 className="widget-title">Table of Contents</h3>
          <nav className="toc-nav">
            <ul className="toc-list">
              {tableOfContents.map(item => (
                <li key={item.id} className={`toc-item toc-level-${item.level}`}>
                  <a href={`#${item.id}`} className="toc-link">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Author Profile - Not shown on article detail pages */}
      {currentPage !== 'blog-detail' && currentPage !== 'resources' && (
        <div className="sidebar-widget author-widget">
          <div className="author-profile">
            <div className="author-avatar">
              <img src="https://i.pravatar.cc/300?img=5" alt="Author" />
            </div>
            <div className="author-info">
              <h3 className="author-name">John Doe</h3>
              <p className="author-bio">
                Frontend developer passionate about creating beautiful and functional user
                interfaces.
              </p>
            </div>
          </div>
          <div className="author-social">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="social-link"
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
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
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
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RSS Feed"
              className="social-link"
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
                <path d="M4 11a9 9 0 0 1 9 9"></path>
                <path d="M4 4a16 16 0 0 1 16 16"></path>
                <circle cx="5" cy="19" r="1"></circle>
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* Search Widget */}
      <div className="sidebar-widget search-widget">
        <h3 className="widget-title">Search</h3>
        <form className="search-form" role="search">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button type="submit" aria-label="Submit search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </div>

      {/* Archives Widget */}
      {archiveYears.length > 0 && (
        <div className="sidebar-widget archives-widget">
          <h3 className="widget-title">Archives</h3>
          <ul className="archives-list">
            {archiveYears.map(archive => (
              <li key={archive.year} className="archive-item">
                <Link to={`/archives/${archive.year}`} className="archive-link">
                  <span className="archive-year">{archive.year}</span>
                  <span className="archive-count">{archive.count}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/archives" className="view-all-link">
            View all archives
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      )}

      {/* Recent Posts Widget */}
      {recentPosts.length > 0 && (
        <div className="sidebar-widget recent-posts-widget">
          <h3 className="widget-title">Recent Posts</h3>
          <ul className="recent-posts-list">
            {recentPosts.map(post => (
              <li key={post.id} className="recent-post-item">
                <Link to={`/blog/${post.slug}`} className="recent-post-link">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/blog" className="view-all-link">
            View all posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      )}

      {/* Categories Widget */}
      {categories.length > 0 && (
        <div className="sidebar-widget categories-widget">
          <h3 className="widget-title">Categories</h3>
          <ul className="categories-list">
            {categories.map(category => (
              <li key={category.id} className="category-item">
                <Link to={`/categories/${category.slug}`} className="category-link">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/categories" className="view-all-link">
            View all categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      )}

      {/* Tags Widget */}
      {tags.length > 0 && (
        <div className="sidebar-widget tags-widget">
          <h3 className="widget-title">Tags</h3>
          <div className="tags-cloud">
            {tags.map(tag => (
              <Link key={tag.id} to={`/tags/${tag.slug}`} className="tag-link">
                {tag.name}
              </Link>
            ))}
          </div>
          <Link to="/tags" className="view-all-link">
            View all tags
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon-arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

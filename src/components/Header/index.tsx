import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import SearchBar from '../SearchBar';
import './Header.scss';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle = 'FWX Blog' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleSearch = (query: string) => {
    // Replace console.log with navigation to search results page
    if (query.trim()) {
      void navigate(`/search?q=${encodeURIComponent(query)}`);
    }
    setIsSearchOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <Link to="/" className="logo">
              <span className="logo-text">{siteTitle}</span>
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}></span>
          </button>

          <nav className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/categories"
                  className={`nav-link ${location.pathname.startsWith('/categories') ? 'active' : ''}`}
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/tags"
                  className={`nav-link ${location.pathname.startsWith('/tags') ? 'active' : ''}`}
                >
                  Tags
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
            </ul>

            <div className="mobile-header-actions">
              <button
                className="icon-button search-toggle-mobile"
                onClick={toggleSearch}
                aria-label="Search"
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>Search</span>
              </button>
              <div className="mobile-theme-toggle">
                <ThemeToggle />
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <div className="search-toggle">
              <button className="icon-button" onClick={toggleSearch} aria-label="Search">
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
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-overlay">
          <div className="container">
            <div className="search-container">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Search for articles, topics, or keywords..."
              />
              <button className="close-search" onClick={toggleSearch} aria-label="Close search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

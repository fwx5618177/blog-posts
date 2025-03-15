import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

interface FooterProps {
  siteTitle?: string;
}

const Footer: React.FC<FooterProps> = ({ siteTitle = 'FWX Blog' }) => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    // Implement newsletter subscription
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                {siteTitle}
              </Link>
              <p className="footer-tagline">
                A personal blog about coding, design, and everything in between.
              </p>

              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
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
                  className="social-link"
                  aria-label="Twitter"
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
                  className="social-link"
                  aria-label="LinkedIn"
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
              </div>

              <div className="footer-newsletter">
                <h4 className="newsletter-heading">Subscribe to Newsletter</h4>
                <p className="newsletter-description">
                  Get the latest posts delivered right to your inbox.
                </p>
                {isSubscribed ? (
                  <div className="newsletter-success">Thank you for subscribing!</div>
                ) : (
                  <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="Your email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      aria-label="Email address"
                    />
                    <button type="submit" className="btn">
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-nav-section">
                <h4 className="footer-heading">Navigation</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/categories">Categories</Link>
                  </li>
                  <li>
                    <Link to="/tags">Tags</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-nav-section">
                <h4 className="footer-heading">Categories</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/categories/programming">Programming</Link>
                  </li>
                  <li>
                    <Link to="/categories/design">Design</Link>
                  </li>
                  <li>
                    <Link to="/categories/technology">Technology</Link>
                  </li>
                  <li>
                    <Link to="/categories/tutorials">Tutorials</Link>
                  </li>
                  <li>
                    <Link to="/categories/tools">Tools & Resources</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-nav-section">
                <h4 className="footer-heading">Resources</h4>
                <ul className="footer-links">
                  <li>
                    <Link to="/resources/ebooks">Free E-Books</Link>
                  </li>
                  <li>
                    <Link to="/resources/templates">Templates</Link>
                  </li>
                  <li>
                    <Link to="/resources/tools">Recommended Tools</Link>
                  </li>
                  <li>
                    <Link to="/resources/courses">Online Courses</Link>
                  </li>
                  <li>
                    <Link to="/resources/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              &copy; {currentYear} {siteTitle}. All rights reserved.
            </div>
            <div className="footer-meta-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

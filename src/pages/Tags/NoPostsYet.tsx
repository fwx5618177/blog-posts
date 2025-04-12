import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './no-posts-yet.module.scss';

interface NoPostsYetProps {
  message?: string;
}

const NoPostsYet: React.FC<NoPostsYetProps> = ({
  message = 'There are no posts with this tag yet. Check back later for new content.',
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setShowMessage(false);

    // Simulate checking for new content
    setTimeout(() => {
      setIsRefreshing(false);
      setShowMessage(true);
    }, 2000);
  };

  useEffect(() => {
    // Animation sequence on initial load
    const timer = setTimeout(() => {
      setIsHovering(true);

      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Easter egg: Random messages to show when refreshing
  const refreshMessages = [
    'Still searching the void...',
    'Exploring the digital emptiness...',
    'Looking for content in the ether...',
    'Content is being crafted somewhere...',
    'The posts are shy today...',
  ];

  const randomMessage = refreshMessages[Math.floor(Math.random() * refreshMessages.length)];

  return (
    <div
      className={styles['no-posts-container']}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* SVG is loaded via CSS background-image */}
      <div
        className={styles['no-posts-icon']}
        style={{
          transform: isHovering ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />

      <h2 className={styles['no-posts-title']}>No Posts Yet</h2>

      {showMessage ? (
        <p className={styles['no-posts-message']} key={isRefreshing ? 'refreshed' : 'initial'}>
          {message}
        </p>
      ) : (
        <p className={styles['no-posts-message']} key="searching">
          {randomMessage}
        </p>
      )}

      <div className={styles['buttons-container']}>
        {isRefreshing ? (
          <div className={styles['loading-dots']}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        ) : (
          <>
            <button className={styles['refresh-button']} onClick={handleRefresh}>
              Check for new posts
            </button>

            <Link to="/tags" className={styles['back-button']}>
              Browse all tags
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NoPostsYet;

import { useState } from 'react';
import { Comment } from './types';
import CommentItem from './CommentItem';
import styles from './comment-section.module.scss';
import classnames from 'classnames';

const CommentSection: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  const [newComment, setNewComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    avatar: string;
    platform: string;
  } | null>(null);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the comment to a backend
    alert(`Comment submitted: ${newComment}`);
    setNewComment('');
  };

  const handleLogin = (platform: string) => {
    // In a real app, this would authenticate with the platform
    console.log(`Logging in with ${platform}`);

    // Mock login - in a real app this would come from the authentication service
    setCurrentUser({
      name:
        platform === 'google'
          ? 'Jane Smith'
          : platform === 'facebook'
            ? 'Alex Johnson'
            : platform === 'twitter'
              ? 'Mike Taylor'
              : platform === 'github'
                ? 'Sarah Chen'
                : 'Guest User',
      avatar:
        platform === 'google'
          ? 'https://randomuser.me/api/portraits/women/44.jpg'
          : platform === 'facebook'
            ? 'https://randomuser.me/api/portraits/men/32.jpg'
            : platform === 'twitter'
              ? 'https://randomuser.me/api/portraits/men/22.jpg'
              : platform === 'github'
                ? 'https://randomuser.me/api/portraits/women/63.jpg'
                : 'https://randomuser.me/api/portraits/lego/1.jpg',
      platform,
    });
    setIsLoggedIn(true);
    setShowLoginOptions(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleGuestComment = () => {
    setShowLoginOptions(false);
  };

  return (
    <section className={styles.blogComments}>
      <div className={styles.commentsSection}>
        <h3 className={styles.commentsTitle}>Comments ({comments.length})</h3>

        {comments.length > 0 ? (
          <div className={styles.commentsList}>
            {comments.map(comment => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        ) : (
          <div className={styles.noComments}>
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}

        {showLoginOptions && (
          <div className={styles.commentLoginSection}>
            <h4 className={styles.loginHeading}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Sign in to comment
            </h4>
            <p className={styles.loginText}>
              Connect with your favorite social network to comment on this post. Your information is
              kept private and you can comment immediately.
            </p>

            <div className={styles.socialLoginOptions}>
              <button
                className={classnames(styles.socialLoginButton, styles.google)}
                onClick={() => handleLogin('google')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                Google
              </button>
              <button
                className={classnames(styles.socialLoginButton, styles.facebook)}
                onClick={() => handleLogin('facebook')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
              <button
                className={classnames(styles.socialLoginButton, styles.twitter)}
                onClick={() => handleLogin('twitter')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Twitter
              </button>
              <button
                className={classnames(styles.socialLoginButton, styles.github)}
                onClick={() => handleLogin('github')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </button>
            </div>

            <div className={styles.loginDivider}>
              <span className={styles.dividerText}>or</span>
            </div>

            <button className={styles.guestCommentButton} onClick={handleGuestComment}>
              Continue as Guest
            </button>
          </div>
        )}

        <div className={styles.commentFormContainer}>
          <h4 className={styles.formTitle}>Leave a Comment</h4>

          {isLoggedIn && currentUser && (
            <div className={styles.loggedInAs}>
              <img src={currentUser.avatar} alt={currentUser.name} className={styles.userAvatar} />
              <div className={styles.userInfo}>
                <div className={styles.userName}>{currentUser.name}</div>
                <div className={styles.userPlatform}>
                  {currentUser.platform === 'google' && (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                      </svg>
                      Signed in with Google
                    </>
                  )}
                  {currentUser.platform === 'facebook' && (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Signed in with Facebook
                    </>
                  )}
                  {currentUser.platform === 'twitter' && (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      Signed in with Twitter
                    </>
                  )}
                  {currentUser.platform === 'github' && (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      Signed in with GitHub
                    </>
                  )}
                  {currentUser.platform === 'guest' && (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Commenting as Guest
                    </>
                  )}
                </div>
              </div>
              <button className={styles.logoutButton} onClick={handleLogout}>
                Sign Out
              </button>
            </div>
          )}

          <form className={styles.commentForm} onSubmit={handleSubmit}>
            {!isLoggedIn && !showLoginOptions && (
              <div className={styles.commentFormFields}>
                <div className={styles.formField}>
                  <label htmlFor="commenter-name">Name</label>
                  <input type="text" id="commenter-name" placeholder="Your name" required />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="commenter-email">Email</label>
                  <input
                    type="email"
                    id="commenter-email"
                    placeholder="Your email (not published)"
                    required
                  />
                </div>
              </div>
            )}

            <textarea
              className={styles.commentTextarea}
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              required
              onClick={() => {
                if (!isLoggedIn && !showLoginOptions) {
                  setShowLoginOptions(true);
                }
              }}
            />

            <div className={styles.commentFooter}>
              <p className={styles.commentPolicy}>
                By submitting this comment, you agree to our <a href="#">community guidelines</a>.
              </p>
              <button type="submit" className={styles.commentSubmit}>
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;

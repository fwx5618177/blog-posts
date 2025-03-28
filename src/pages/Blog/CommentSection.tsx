import { useState } from 'react';
import { Comment } from './types';
import CommentItem from './CommentItem';
import styles from './comment-section.module.scss';
import classnames from 'classnames';
import UsersIcon from './icons/UsersIcon';
import GoogleIcon from './icons/GoogleIcon';
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import GitHubIcon from './icons/GitHubIcon';
import UserIcon from './icons/UserIcon';

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
              <UsersIcon />
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
                <GoogleIcon />
                Google
              </button>
              <button
                className={classnames(styles.socialLoginButton, styles.facebook)}
                onClick={() => handleLogin('facebook')}
              >
                <FacebookIcon />
                Facebook
              </button>
              <button
                className={classnames(styles.socialLoginButton, styles.twitter)}
                onClick={() => handleLogin('twitter')}
              >
                <TwitterIcon />
                Twitter
              </button>
              <button
                className={classnames(styles.socialLoginButton, styles.github)}
                onClick={() => handleLogin('github')}
              >
                <GitHubIcon />
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
                      <GoogleIcon />
                      Signed in with Google
                    </>
                  )}
                  {currentUser.platform === 'facebook' && (
                    <>
                      <FacebookIcon />
                      Signed in with Facebook
                    </>
                  )}
                  {currentUser.platform === 'twitter' && (
                    <>
                      <TwitterIcon />
                      Signed in with Twitter
                    </>
                  )}
                  {currentUser.platform === 'github' && (
                    <>
                      <GitHubIcon />
                      Signed in with GitHub
                    </>
                  )}
                  {currentUser.platform === 'guest' && (
                    <>
                      <UserIcon />
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
              placeholder="Write your comment here..."
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
                By submitting a comment, you agree to our{' '}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-of-service" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
                .
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

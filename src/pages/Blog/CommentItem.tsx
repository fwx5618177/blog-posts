import { useState } from 'react';
import styles from './comment-item.module.scss';
import classnames from 'classnames';
import { Comment } from './types';
import { formatDate } from '@/utils/formatDate';

const CommentItem: React.FC<{ comment: Comment; level?: number }> = ({ comment, level = 0 }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 10));
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reply submitted: ${replyText}`);
    setReplyText('');
    setShowReplyForm(false);
  };

  const currentLevel = level > 3 ? 3 : level;

  return (
    <div className={classnames(styles.commentItem, currentLevel > 0 && styles.commentReply)}>
      <div className={styles.commentItemHeader}>
        <div className={styles.commentItemAuthor}>
          <img
            src={comment.author.avatar}
            alt={comment.author.name}
            className={styles.commentItemAvatar}
          />
          <div className={styles.commentItemAuthorInfo}>
            <span className={styles.commentItemAuthorName}>{comment.author.name}</span>
            <span className={classnames(styles.commentItemPlatform, styles.guest)}>
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
              Verified User
            </span>
          </div>
        </div>
        <span className={styles.commentItemDate}>{formatDate(comment.date, 'long')}</span>
      </div>
      <div className={styles.commentItemContent}>
        <p>{comment.content}</p>
      </div>
      <div className={styles.commentItemActions}>
        <button onClick={() => setShowReplyForm(!showReplyForm)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Reply
        </button>
        <button className={classnames(liked && styles.active)} onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={liked ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          Like{likeCount > 0 && ` (${likeCount})`}
        </button>
      </div>

      {showReplyForm && (
        <div className={styles.commentItemReplyForm}>
          <form onSubmit={handleReplySubmit}>
            <textarea
              placeholder="Write your reply..."
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              required
            />
            <div className={styles.commentItemReplyActions}>
              <button type="button" onClick={() => setShowReplyForm(false)}>
                Cancel
              </button>
              <button type="submit">Post Reply</button>
            </div>
          </form>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className={styles.commentItemReplies}>
          {comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} level={currentLevel + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;

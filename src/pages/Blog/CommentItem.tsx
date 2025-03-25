import { useState } from 'react';
import styles from './comment-item.module.scss';
import classnames from 'classnames';
import { Comment } from './types';
import { formatDate } from '@/utils/formatDate';
import UserIcon from './icons/UserIcon';
import ReplyIcon from './icons/ReplyIcon';
import LikeIcon from './icons/LikeIcon';

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
              <UserIcon className={styles.commentItemIcon} />
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
          <ReplyIcon className={styles.commentItemIcon} />
          Reply
        </button>
        <button className={classnames(liked && styles.active)} onClick={handleLike}>
          <LikeIcon className={styles.commentItemIcon} filled={liked} />
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

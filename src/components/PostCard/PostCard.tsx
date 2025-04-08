import React from 'react';
import classNames from 'classnames';
import styles from './PostCard.module.scss';
import { Post } from '../../types/post';

interface PostCardProps {
  post: Post;
  className?: string; // Add optional className prop
}

export const PostCard: React.FC<PostCardProps> = ({ post, className }) => {
  return (
    <article className={classNames(styles.postCard, className)}>
      {/* Post content goes here */}
    </article>
  );
};

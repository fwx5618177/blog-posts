import { FC } from 'react';
import styles from './post-content.module.scss';

interface PostContentProps {
  content: string;
}

const PostContent: FC<PostContentProps> = ({ content }) => {
  return <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: content }} />;
};

export default PostContent;

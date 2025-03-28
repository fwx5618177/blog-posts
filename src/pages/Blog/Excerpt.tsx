import { FC } from 'react';
import styles from './excerpt.module.scss';

interface ExcerptProps {
  excerpt: string;
}

const Excerpt: FC<ExcerptProps> = ({ excerpt }) => {
  return (
    <div className={styles.postExcerpt}>
      <p>{excerpt}</p>
    </div>
  );
};

export default Excerpt;

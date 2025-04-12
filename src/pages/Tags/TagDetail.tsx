import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import styles from './tag-detail.module.scss';
import { MOCK_TAGS, MOCK_TAG_POSTS } from './mock.data';
import TagNotFound from './TagNotFound';
import NoPostsYet from './NoPostsYet';

const TagDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const tag = MOCK_TAGS.find(tag => tag.slug === slug);
  const posts = MOCK_TAG_POSTS[slug || ''] || [];

  // 获取推荐标签（按文章数量排序，最多5个）
  const recommendedTags = MOCK_TAGS.filter(t => t.slug !== slug)
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, 5);

  if (!tag) {
    return <TagNotFound />;
  }

  return (
    <div className={styles['tag-detail-page']}>
      <div className="container">
        <div className={styles['tag-header']}>
          <h1 className={styles['tag-title']}>{tag.name}</h1>
          <p className={styles['tag-description']}>{tag.description}</p>
          <div className={styles['tag-meta']}>
            <span className={styles['post-count']}>{tag.postCount} articles</span>
          </div>
        </div>

        {posts.length > 0 ? (
          <div className={styles['posts-grid']}>
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <NoPostsYet />
        )}

        {recommendedTags.length > 0 && (
          <div className={styles['recommended-tags']}>
            <h2 className={styles['recommended-title']}>You might also be interested in</h2>
            <div className={styles['tags-grid']}>
              {recommendedTags.map(tag => (
                <Link key={tag.id} to={`/tags/${tag.slug}`} className={styles['tag-link']}>
                  <span>{tag.name}</span>
                  <span className={styles['tag-count']}>{tag.postCount}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagDetailPage;

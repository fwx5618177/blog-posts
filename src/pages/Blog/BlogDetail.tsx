import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './blog-detail.module.scss';
import {
  MOCK_POST_DETAILS,
  MOCK_COMMENTS,
  MOCK_RELATED_POSTS,
  MOCK_ADJACENT_POSTS,
} from './mockData';
import { formatDate } from '@/utils/formatDate';
import CommentSection from './CommentSection';
import RelatedPosts from './RelatedPosts';
import PostNavigation from './PostNavigation';
import BlogNotFound from './BlogNotFound';

const BlogDetailPage: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const post = MOCK_POST_DETAILS[slug];

  if (!post) {
    return <BlogNotFound />;
  }

  const adjacentPosts = MOCK_ADJACENT_POSTS[slug] || { previous: null, next: null };
  const relatedPosts = MOCK_RELATED_POSTS[slug] || [];
  const comments = MOCK_COMMENTS[slug] || [];

  return (
    <div className={styles.blogDetailPage}>
      <div className={styles.container}>
        <article className={styles.blogPost}>
          {/* Post Header */}
          <header className={styles.postHeader}>
            <div className={styles.postMeta}>
              <Link to={`/categories/${post.category.slug}`} className={styles.postCategory}>
                {post.category.name}
              </Link>
              <span className={styles.postDate}>{formatDate(post.publishedAt, 'long')}</span>
              <span className={styles.postReadTime}>{post.readingTime}</span>
            </div>

            <h1 className={styles.postTitle}>{post.title}</h1>

            <div className={styles.postAuthor}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className={styles.authorAvatar}
              />
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author.name}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className={styles.postFeaturedImage}>
            <img src={post.featuredImage} alt={post.title} />
          </div>

          {/* Post Excerpt/Introduction */}
          <div className={styles.postExcerpt}>
            <p>{post.excerpt}</p>
          </div>

          {/* Tags */}
          <div className={classnames(styles.postTags, styles.postTagsHeader)}>
            {post.tags.map(tag => (
              <Link key={tag.id} to={`/tags/${tag.slug}`} className={styles.postTag}>
                #{tag.name}
              </Link>
            ))}
          </div>

          {/* Post Content */}
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Post Conclusion */}
          <div className={styles.postConclusion}>
            <h3>Final Thoughts</h3>
            <p>{post.conclusion}</p>
          </div>

          {/* Post Footer */}
          <footer className={styles.postFooter}>
            <div className={styles.postTags}>
              {post.tags.map(tag => (
                <Link key={tag.id} to={`/tags/${tag.slug}`} className={styles.postTag}>
                  #{tag.name}
                </Link>
              ))}
            </div>

            <div className={styles.postAuthorBio}>
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className={styles.authorAvatar}
              />
              <div className={styles.authorInfo}>
                <h3 className={styles.authorName}>{post.author.name}</h3>
                <p className={styles.authorBio}>{post.author.bio}</p>
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPosts posts={relatedPosts} />

            {/* Post Navigation */}
            <PostNavigation previous={adjacentPosts.previous} next={adjacentPosts.next} />
          </footer>
        </article>

        {/* Comments Section */}
        <CommentSection comments={comments} />
      </div>
    </div>
  );
};

export default BlogDetailPage;

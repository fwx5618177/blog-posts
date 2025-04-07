export interface Author {
  /**
   * 作者唯一标识
   */
  id: string;
  /**
   * 作者名称
   */
  name: string;
  /**
   * 作者头像URL
   */
  avatar: string;
  /**
   * 作者简介
   */
  bio: string;
}

export interface Category {
  /**
   * 分类唯一标识
   */
  id: string;
  /**
   * 分类名称
   */
  name: string;
  /**
   * 分类URL标识
   */
  slug: string;
}

export interface Tag {
  /**
   * 标签唯一标识
   */
  id: string;
  /**
   * 标签名称
   */
  name: string;
  /**
   * 标签URL标识
   */
  slug: string;
}

export interface PostInfo {
  /**
   * 文章唯一标识
   */
  id: string;
  /**
   * 文章标题
   */
  title: string;
  /**
   * 文章URL标识
   */
  slug: string;
  /**
   * 文章摘要
   */
  excerpt: string;
  /**
   * 文章特色图片URL
   */
  featuredImage: string;
  /**
   * 文章作者
   */
  author: Author;
  /**
   * 文章发布时间
   */
  publishedAt: string;
  /**
   * 文章特色图片URL
   */
  coverImage: string;
  /**
   * 文章阅读时间
   */
  readingTime: string;
  category: Category;
  /**
   * 文章状态
   */
  status: 'published' | 'draft';
  tags: Tag[];
}

export type PostDetail = PostInfo & {
  content: string;
  conclusion: string;
};

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
  replies?: Comment[];
}

export interface CommentItemProps {
  comment: Comment;
  level?: number;
}

export interface CommentsSectionProps {
  comments: Comment[];
}

export interface PostNavigationProps {
  previous: PostDetail | null;
  next: PostDetail | null;
}

export interface RelatedPostsProps {
  posts: PostDetail[];
}

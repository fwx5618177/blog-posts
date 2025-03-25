export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface PostInfo {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  author: Author;
  publishedAt: string;
  coverImage: string;
  readingTime: string;
  category: Category;
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

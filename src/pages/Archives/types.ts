export interface ArchiveYearProps {
  year: string;
  count: number;
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
}

export interface PostTag {
  id: string;
  name: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  categories: PostCategory[];
  tags: PostTag[];
}

export type PostsByMonth = Record<string, Record<string, Post[]>>;

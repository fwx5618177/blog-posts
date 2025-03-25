import { PostInfo } from '@/pages/Blog/types';

export interface PostCardProps {
  post: PostInfo;
  variant?: 'default' | 'compact' | 'featured';
}

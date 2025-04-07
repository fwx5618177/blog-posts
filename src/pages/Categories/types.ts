/**
 * 分类详情接口
 */
export interface CategoryDetail {
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
  /**
   * 分类描述
   */
  description: string;
  /**
   * 分类下的文章数量
   */
  postCount: number;
  /**
   * 分类特色图片URL
   */
  featuredImage: string;
}

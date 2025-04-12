import { PostInfo } from '../Blog/types';

/**
 * 企业类别接口
 * 用于呈现企业解决方案类别
 */
export interface EnterpriseCategory {
  id: string; // 类别唯一标识符
  name: string; // 类别名称
  slug: string; // 类别URL slug
  count: number; // 该类别下的文章数量
  icon: string; // 类别图标
}

/**
 * 热门话题接口
 * 用于呈现trending topics部分
 */
export interface TrendingTopic {
  id: string; // 话题唯一标识符
  name: string; // 话题名称
  slug: string; // 话题URL slug
  count: number; // 该话题下的文章数量
  icon: string; // 话题图标
}

/**
 * 最新洞察接口
 * 用于呈现latest insights部分
 */
export interface LatestInsight {
  id: string; // 洞察唯一标识符
  title: string; // 洞察标题
  excerpt: string; // 洞察摘要
  icon: string; // 洞察图标
  link: string; // 洞察链接
}

/**
 * 即将到来的活动接口
 * 用于呈现upcoming events部分
 */
export interface UpcomingEvent {
  id: string; // 活动唯一标识符
  title: string; // 活动标题
  date: string; // 活动日期
  location: string; // 活动地点
  link: string; // 活动详情链接
}

/**
 * 首页数据接口
 * 包含首页所有展示数据
 */
export interface HomePageData {
  featuredPosts: PostInfo[]; // 特色文章列表
  recentPosts: PostInfo[]; // 最近文章列表
  enterpriseCategories: EnterpriseCategory[]; // 企业类别列表
  trendingTopics: TrendingTopic[]; // 热门话题列表
  latestInsights: LatestInsight[]; // 最新洞察列表
  upcomingEvents: UpcomingEvent[]; // 即将到来的活动列表
}

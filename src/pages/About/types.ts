export interface SkillProps {
  name: string;
  level: number;
}

export interface TechnicalExpertiseProps {
  name: string;
  level: string;
  skills: SkillProps[];
}

export interface KeyAchievementsProps {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLinkProps {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface CategorySkillProps {
  category: string;
  skills: string[];
}

export interface JourneyProps {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface ConnectLinkProps {
  platform: string;
  url: string;
  className: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

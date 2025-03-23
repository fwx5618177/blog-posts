import { DiscordIcon } from './icons/DiscordIcon';
import { GithubIcon } from './icons/GithubIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { TwitterChannelIcon } from './icons/TwitterChannelIcon';
import { TwitterIcon } from './icons/TwitterIcon';
import {
  CategorySkillProps,
  ConnectLinkProps,
  JourneyProps,
  KeyAchievementsProps,
  SocialLinkProps,
  TechnicalExpertiseProps,
} from './types';

// 技术专长数据
export const technicalExpertise: TechnicalExpertiseProps[] = [
  {
    name: 'Frontend Development',
    level: 'Advanced',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue', level: 90 },
      { name: 'Webpack', level: 85 },
    ],
  },
  {
    name: 'Backend Development',
    level: 'Proficient',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    name: 'DevOps & Tools',
    level: 'Intermediate',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Linux', level: 70 },
    ],
  },
];

// 主要成就数据
export const keyAchievements: KeyAchievementsProps[] = [
  {
    icon: '🚀',
    title: '8+ Years Experience',
    description: 'Full-stack development expertise with modern web technologies',
  },
  {
    icon: '💼',
    title: '50+ Projects Completed',
    description: 'Successfully delivered projects across various industries',
  },
  {
    icon: '📝',
    title: '20+ Technical Articles',
    description: 'Sharing knowledge and best practices with the community',
  },
];

// 社交媒体链接数据
export const socialLinks: SocialLinkProps[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: <GithubIcon />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: <TwitterIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: <LinkedinIcon />,
  },
];

// 技能数据
export const skillsData: CategorySkillProps[] = [
  {
    category: 'Frontend',
    skills: [
      'HTML5',
      'CSS3 / Sass / Less',
      'JavaScript (ES6+)',
      'TypeScript',
      'React',
      'Redux',
      'Next.js',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST API Design'],
  },
  {
    category: 'Tools & Others',
    skills: [
      'Git / GitHub',
      'Webpack / Vite',
      'Jest / React Testing Library',
      'Responsive Web Design',
      'Web Accessibility (WCAG)',
      'Performance Optimization',
    ],
  },
];

// 职业经历数据
export const journeyData: JourneyProps[] = [
  {
    period: '2023 - Present',
    role: 'Senior Full Stack Developer',
    company: 'Tech Lead at Innovation Studio',
    description:
      'Leading a team of developers in building scalable web applications and microservices architecture.',
    achievements: [
      'Architected and implemented a cloud-native microservices platform',
      'Improved system performance by 40% through optimization',
      'Mentored junior developers and established best practices',
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
  },
  {
    period: '2021 - 2023',
    role: 'Full Stack Developer',
    company: 'Senior Developer at TechFlow Solutions',
    description:
      'Developed and maintained enterprise-level web applications with focus on performance and scalability.',
    achievements: [
      'Led the migration from monolith to microservices architecture',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Developed real-time analytics dashboard used by 50k+ users',
    ],
    tags: ['Vue.js', 'Python', 'MongoDB', 'Kubernetes'],
  },
  {
    period: '2020 - 2021',
    role: 'Frontend Developer',
    company: 'UI/UX Developer at DesignCraft',
    description:
      'Specialized in creating responsive and accessible web interfaces with modern design principles.',
    achievements: [
      'Developed component library used across multiple projects',
      'Improved accessibility scores to 98% across all platforms',
      'Reduced page load times by 45% through optimization',
    ],
    tags: ['React', 'SASS', 'Webpack', 'Jest'],
  },
  {
    period: '2019 - 2020',
    role: 'Backend Developer',
    company: 'Systems Engineer at DataFlow',
    description: 'Focused on building robust backend services and data processing pipelines.',
    achievements: [
      'Designed and implemented RESTful APIs serving 1M+ requests daily',
      'Optimized database queries reducing response time by 35%',
      'Built automated data processing pipelines handling 5TB+ data',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
  },
  {
    period: '2018 - 2019',
    role: 'DevOps Engineer',
    company: 'Cloud Infrastructure at CloudTech',
    description:
      'Managed cloud infrastructure and implemented DevOps practices for large-scale applications.',
    achievements: [
      'Implemented infrastructure as code using Terraform',
      'Reduced deployment failures by 75% through automation',
      'Set up monitoring and alerting systems for 100+ services',
    ],
    tags: ['AWS', 'Terraform', 'Jenkins', 'Ansible'],
  },
  {
    period: '2017 - 2018',
    role: 'Mobile Developer',
    company: 'Mobile App Developer at AppWorks',
    description:
      'Developed cross-platform mobile applications with focus on user experience and performance.',
    achievements: [
      'Built and launched 3 successful mobile apps with 100k+ downloads',
      'Implemented offline-first architecture for better user experience',
      'Reduced app size by 40% through optimization',
    ],
    tags: ['React Native', 'Flutter', 'Firebase', 'GraphQL'],
  },
  {
    period: '2016 - 2017',
    role: 'Junior Developer',
    company: 'Web Developer at StartupHub',
    description: 'Started career as a full stack developer working on various startup projects.',
    achievements: [
      'Developed and maintained multiple client websites',
      'Implemented responsive designs and modern UI components',
      'Collaborated with design team to improve user experience',
    ],
    tags: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
  },
  {
    period: '2015 - 2016',
    role: 'Intern Developer',
    company: 'Software Engineering Intern at TechStart',
    description: 'Gained hands-on experience in software development and agile methodologies.',
    achievements: [
      'Contributed to the development of internal tools',
      'Learned and implemented best coding practices',
      'Participated in code reviews and team meetings',
    ],
    tags: ['HTML/CSS', 'jQuery', 'Git', 'Agile'],
  },
];

// 社交连接数据
export const connectLinks: ConnectLinkProps[] = [
  {
    platform: 'Discord',
    url: 'https://discord.gg/your-discord',
    className: 'discord',
    icon: <DiscordIcon />,
    title: 'Discord Community',
    description: 'Join our tech community',
  },
  {
    platform: 'Telegram',
    url: 'https://t.me/your-telegram',
    className: 'telegram',
    icon: <TelegramIcon />,
    title: 'Telegram Channel',
    description: 'Get instant updates',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/your-twitter',
    className: 'twitter',
    icon: <TwitterChannelIcon />,
    title: 'Twitter/X',
    description: 'Follow for updates',
  },
];

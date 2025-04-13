import { EventItem } from './types';

// 辅助函数，用当前日期加减天数生成日期
const today = new Date();
const formatDate = (date: Date): string => date.toISOString();

// 添加天数的辅助函数
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
};

// 减去天数的辅助函数
const subDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(date.getDate() - days);
  return result;
};

// 模拟活动数据
export const eventsData: EventItem[] = [
  {
    id: 'event-001',
    title: '前端技术分享会',
    description:
      '探讨React最新特性和性能优化技巧，分享实践经验和最佳实践。本次活动将邀请行业资深开发者进行深度交流，包括React 18新特性、并发模式及Suspense的实际应用。',
    startDate: formatDate(addDays(today, 7)),
    endDate: formatDate(addDays(today, 7)),
    location: '线上 Zoom 会议',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', '前端', '技术分享'],
  },
  {
    id: 'event-002',
    title: 'Web3 开发者大会',
    description:
      '深入探讨区块链技术和去中心化应用开发，包括智能合约、DeFi、NFT等热门话题。与业内领先开发者一起探索Web3的未来和实际应用场景。',
    startDate: formatDate(addDays(today, 15)),
    endDate: formatDate(addDays(today, 16)),
    location: '上海国际会议中心',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Web3', '区块链', '开发者大会'],
  },
  {
    id: 'event-003',
    title: '全栈工程师训练营',
    description:
      '为期一个月的强化训练，涵盖前端、后端、DevOps和云服务等技能，帮助开发者打造完整的全栈技能体系。课程包括实战项目开发和一对一导师指导。',
    startDate: formatDate(addDays(today, 1)),
    endDate: formatDate(addDays(today, 30)),
    location: '北京科技园区',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['全栈', '训练营', '实战项目'],
  },
  {
    id: 'event-004',
    title: '人工智能与前端交互体验设计研讨会',
    description:
      '探讨如何将AI技术融入前端开发，打造智能化、个性化的用户体验。分享AI驱动的UI/UX设计案例和实现方法，探索未来交互设计趋势。',
    startDate: formatDate(today),
    endDate: formatDate(addDays(today, 1)),
    location: '深圳创新中心',
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['AI', '前端', 'UX设计'],
  },
  {
    id: 'event-005',
    title: '开源贡献者工作坊',
    description:
      '学习如何有效参与开源项目，提交高质量的PR，与社区协作。邀请多位知名开源项目维护者分享经验，指导参与者实际操作。',
    startDate: formatDate(subDays(today, 5)),
    endDate: formatDate(subDays(today, 3)),
    location: '线上 Discord 社区',
    imageUrl:
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['开源', '社区协作', '工作坊'],
  },
  {
    id: 'event-006',
    title: '微服务架构实践分享',
    description:
      '分享大规模微服务架构的实战经验，包括服务拆分、容器化、服务网格等技术选型和最佳实践。案例剖析知名企业的微服务迁移过程和成果。',
    startDate: formatDate(subDays(today, 10)),
    endDate: formatDate(subDays(today, 10)),
    location: '广州科技中心',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['微服务', '架构', '容器化'],
  },
  {
    id: 'event-007',
    title: 'TypeScript高级编程技巧',
    description:
      '深入TypeScript的类型系统，探讨高级类型、泛型编程和类型推导等进阶主题。通过实际案例讲解如何利用TypeScript提升代码质量和开发效率。',
    startDate: formatDate(subDays(today, 15)),
    endDate: formatDate(subDays(today, 15)),
    location: '线上直播',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['TypeScript', '编程技巧', '类型系统'],
  },
  {
    id: 'event-008',
    title: '性能优化极致指南工作坊',
    description:
      '从网络、渲染、资源加载到JavaScript执行，全方位剖析Web应用性能优化技巧。包含实战练习和性能分析工具使用指南。',
    startDate: formatDate(addDays(today, 20)),
    endDate: formatDate(addDays(today, 21)),
    location: '成都创业大厦',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['性能优化', '工作坊', 'Web开发'],
  },
];

// 获取所有可用的标签
export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  eventsData.forEach(event => {
    event.tags.forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet);
};

// 合并所有事件数据
const getAllEvents = (): EventItem[] => {
  // 合并数据
  const allEvents = [...eventsData, ...mockEvents];

  // 去重（根据id）
  return allEvents.filter((event, index, self) => index === self.findIndex(e => e.id === event.id));
};

// 获取即将到来的活动
export const getUpcomingEvents = (): EventItem[] => {
  const now = new Date();
  return getAllEvents()
    .filter(event => {
      const startDate = new Date(event.startDate);
      return startDate > now;
    })
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
};

// 获取正在进行的活动
export const getOngoingEvents = (): EventItem[] => {
  const now = new Date();
  return getAllEvents().filter(event => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    return startDate <= now && endDate >= now;
  });
};

// 获取过去的活动
export const getPastEvents = (): EventItem[] => {
  const now = new Date();
  return getAllEvents()
    .filter(event => {
      const endDate = new Date(event.endDate);
      return endDate < now;
    })
    .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()); // 倒序排列
};

// 根据ID获取活动详情
export const getEventById = (id: string): EventItem | undefined => {
  // 首先从enhancedEventsData中查找
  const enhancedEvent = enhancedEventsData.find(event => event.id === id);
  if (enhancedEvent) return enhancedEvent;

  // 然后从标准eventsData中查找
  const standardEvent = eventsData.find(event => event.id === id);
  if (standardEvent) return standardEvent;

  // 最后从mockEvents中查找
  const mockEvent = mockEvents.find(event => event.id === id);
  if (mockEvent) return mockEvent;

  // 如果上述都未找到，尝试将数字ID转换为字符串ID并再次查找
  // (解决路由中数字ID与mock数据中字符串ID不匹配的问题)
  if (!isNaN(Number(id))) {
    const numericId = id;
    const matchingMockEvent = mockEvents.find(event => event.id === numericId);
    if (matchingMockEvent) return matchingMockEvent;
  }

  // 所有尝试都失败后返回undefined
  return undefined;
};

export const mockEvents: EventItem[] = [
  // 添加与eventsData相同ID的数据，以便测试路由匹配
  {
    id: 'event-001',
    title: '前端技术分享会（Mock）',
    description:
      '探讨React最新特性和性能优化技巧，分享实践经验和最佳实践。本次活动将邀请行业资深开发者进行深度交流，包括React 18新特性、并发模式及Suspense的实际应用。',
    startDate: formatDate(addDays(today, 7)),
    endDate: formatDate(addDays(today, 7)),
    location: '线上 Zoom 会议',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', '前端', '技术分享'],
    organizer: 'TechFusion',
    attendees: {
      current: 75,
      capacity: 100,
    },
    price: '免费',
  },
  {
    id: 'event-002',
    title: 'Web3 开发者大会（Mock）',
    description:
      '深入探讨区块链技术和去中心化应用开发，包括智能合约、DeFi、NFT等热门话题。与业内领先开发者一起探索Web3的未来和实际应用场景。',
    startDate: formatDate(addDays(today, 15)),
    endDate: formatDate(addDays(today, 16)),
    location: '上海国际会议中心',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Web3', '区块链', '开发者大会'],
    organizer: 'BlockChain联盟',
    attendees: {
      current: 120,
      capacity: 200,
    },
    price: 399,
  },
  // 原有的mockEvents数据
  {
    id: '1',
    title: '前端开发技术分享会',
    description:
      '探讨React、Vue、Angular等前端框架的最新动态和实践经验，分享前端性能优化和组件设计的最佳实践。',
    startDate: '2023-11-15T13:00:00Z',
    endDate: '2023-11-15T16:00:00Z',
    location: '上海市浦东新区张江高科技园区',
    imageUrl:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['前端', 'React', 'Vue', '技术分享'],
    organizer: 'TechFusion',
    capacity: 100,
    registered: 78,
    price: '免费',
  },
  {
    id: '2',
    title: 'DevOps实践工作坊',
    description:
      '通过实际案例讲解DevOps的核心理念和工具链，包括CI/CD、容器化、自动化测试等内容，帮助团队提升开发效率。',
    startDate: '2023-12-05T09:00:00Z',
    endDate: '2023-12-06T17:00:00Z',
    location: '北京市海淀区中关村软件园',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['DevOps', 'CI/CD', '自动化', '工作坊'],
    organizer: 'CloudNative社区',
    capacity: 50,
    registered: 42,
    price: 499,
    ticketUrl: 'https://example.com/tickets/devops-workshop',
  },
  {
    id: '3',
    title: '人工智能与机器学习峰会',
    description:
      '汇聚业内顶尖专家，探讨AI和机器学习的前沿进展，包括深度学习、自然语言处理、计算机视觉等热门领域。',
    startDate: '2023-10-18T08:30:00Z',
    endDate: '2023-10-20T18:00:00Z',
    location: '深圳市南山区科技园',
    imageUrl:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['AI', '机器学习', '深度学习', '峰会'],
    organizer: 'AI研究院',
    capacity: 300,
    registered: 287,
    price: 1299,
    ticketUrl: 'https://example.com/tickets/ai-summit',
  },
  {
    id: '4',
    title: '数据库优化与高可用架构分享',
    description:
      '分享MySQL、PostgreSQL、MongoDB等数据库的优化技巧，探讨分布式数据库和高可用架构设计方案。',
    startDate: '2024-01-12T14:00:00Z',
    endDate: '2024-01-12T17:30:00Z',
    location: '杭州市西湖区云栖小镇',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['数据库', 'MySQL', '高可用', '架构'],
    organizer: 'DBTech社区',
    capacity: 80,
    registered: 35,
    price: '免费',
  },
  {
    id: '5',
    title: '区块链技术与应用创新大会',
    description:
      '探讨区块链技术的最新发展趋势和落地应用案例，涵盖金融科技、供应链、数字身份等多个领域。',
    startDate: '2023-09-25T09:00:00Z',
    endDate: '2023-09-26T18:00:00Z',
    location: '广州市天河区珠江新城',
    imageUrl:
      'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['区块链', '金融科技', '创新', '大会'],
    organizer: 'BlockTech联盟',
    capacity: 200,
    registered: 186,
    price: 899,
    ticketUrl: 'https://example.com/tickets/blockchain-conference',
  },
  {
    id: '6',
    title: '敏捷开发与项目管理研讨会',
    description:
      '分享敏捷开发方法论和实践经验，讨论如何通过Scrum、Kanban等方法提升团队协作效率和项目交付质量。',
    startDate: '2024-02-03T13:30:00Z',
    endDate: '2024-02-03T17:00:00Z',
    location: '成都市高新区天府软件园',
    imageUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['敏捷开发', 'Scrum', '项目管理', '研讨会'],
    organizer: 'Agile社区',
    capacity: 60,
    registered: 28,
    price: 299,
    ticketUrl: 'https://example.com/tickets/agile-workshop',
  },
];

// 获取即将到来的活动（从mockEvents）
export const getUpcomingEventsMock = (): EventItem[] => {
  const now = new Date();
  return mockEvents
    .filter(event => {
      const startDate = new Date(event.startDate);
      return startDate > now;
    })
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
};

// 获取正在进行的活动（从mockEvents）
export const getOngoingEventsMock = (): EventItem[] => {
  const now = new Date();
  return mockEvents.filter(event => {
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);
    return startDate <= now && endDate >= now;
  });
};

// 获取过去的活动（从mockEvents）
export const getPastEventsMock = (): EventItem[] => {
  return mockEvents.filter(event => {
    const endDate = new Date(event.endDate);
    return endDate < new Date();
  });
};

// 根据状态获取活动
export const getEventsByStatus = (status: 'all' | 'upcoming' | 'ongoing' | 'past'): EventItem[] => {
  const now = new Date();
  const allEvents = getAllEvents();

  switch (status) {
    case 'upcoming':
      return allEvents
        .filter(event => new Date(event.startDate) > now)
        .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    case 'ongoing':
      return allEvents.filter(
        event => new Date(event.startDate) <= now && new Date(event.endDate) >= now
      );
    case 'past':
      return allEvents
        .filter(event => new Date(event.endDate) < now)
        .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
    case 'all':
    default:
      return [...allEvents];
  }
};

// 创建增强版事件数据的辅助函数
const createEnhancedEvent = (event: EventItem): EventItem => {
  // 已经是增强版的数据，直接返回
  if (event.longDescription && event.speakers && event.agenda && event.faqs) {
    return event;
  }

  return {
    ...event,
    // Add detailed description
    longDescription:
      event.longDescription ||
      `${event.description}

本次活动将深入探讨${event.tags.join('、')}等相关技术领域的最新发展和实践经验。参与者将有机会与行业专家面对面交流，获取第一手的技术洞察和实战经验。

活动环节包括主题演讲、panel讨论、实战工作坊以及自由交流环节，旨在为参与者提供全方位的学习和交流机会。无论您是经验丰富的开发者还是刚入行的新人，都能在本次活动中有所收获。`,

    // Add venue details
    venue: event.venue || {
      name: event.location,
      address: `${event.location}附近，${['北京', '上海', '广州', '深圳', '杭州'][Math.floor(Math.random() * 5)]}`,
      coordinates: {
        lat: 31.23 + Math.random() * 8,
        lng: 121.47 + Math.random() * 8,
      },
    },

    // Add attendees info if not present
    attendees: event.attendees || {
      current: event.registered || Math.floor(Math.random() * 80) + 20,
      capacity: event.capacity || 100,
    },

    // Add organizer if not present
    organizer:
      event.organizer ||
      ['TechFusion', 'DevCommunity', 'CodeCraft', 'ByteMasters', 'CloudNative社区'][
        Math.floor(Math.random() * 5)
      ],

    // Add speakers
    speakers: event.speakers || [
      {
        id: `speaker-${Math.floor(Math.random() * 1000)}`,
        name: ['张伟', '李明', '王芳', '赵刚', '陈晓'][Math.floor(Math.random() * 5)],
        title: ['高级工程师', '技术总监', '首席架构师', '开发者关系负责人', '社区负责人'][
          Math.floor(Math.random() * 5)
        ],
        company: ['字节跳动', '阿里巴巴', '腾讯', '百度', '华为'][Math.floor(Math.random() * 5)],
        bio: '拥有10年以上技术研发和架构设计经验，专注于大规模分布式系统和高性能应用开发。',
        avatarUrl: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
      },
      {
        id: `speaker-${Math.floor(Math.random() * 1000)}`,
        name: ['刘强', '周华', '吴佳', '孙立', '杨柳'][Math.floor(Math.random() * 5)],
        title: ['产品经理', '研发经理', '社区领袖', 'DevOps专家', '前端架构师'][
          Math.floor(Math.random() * 5)
        ],
        company: ['小米', '京东', '网易', '滴滴', '美团'][Math.floor(Math.random() * 5)],
        bio: '技术社区活跃贡献者，热衷于开源项目和技术分享，在业内多个技术大会担任讲师。',
        avatarUrl: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`,
      },
    ],

    // Add agenda
    agenda: event.agenda || [
      {
        time: new Date(new Date(event.startDate).getTime()).toLocaleTimeString('zh-CN', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        title: '签到',
        description: '参会者签到并领取活动资料',
      },
      {
        time: new Date(new Date(event.startDate).getTime() + 30 * 60000).toLocaleTimeString(
          'zh-CN',
          { hour: '2-digit', minute: '2-digit' }
        ),
        title: '开场致辞',
        description: `由${['TechFusion', 'DevCommunity', 'CodeCraft', 'ByteMasters', 'CloudNative社区'][Math.floor(Math.random() * 5)]}负责人带来开场致辞`,
      },
      {
        time: new Date(new Date(event.startDate).getTime() + 45 * 60000).toLocaleTimeString(
          'zh-CN',
          { hour: '2-digit', minute: '2-digit' }
        ),
        title: `主题演讲：${event.tags[0]}实战经验分享`,
        description: '行业专家分享前沿技术与最佳实践',
        speaker: '张伟 - 高级工程师@字节跳动',
      },
      {
        time: new Date(new Date(event.startDate).getTime() + 105 * 60000).toLocaleTimeString(
          'zh-CN',
          { hour: '2-digit', minute: '2-digit' }
        ),
        title: '茶歇与交流',
        description: '自由交流与讨论',
      },
      {
        time: new Date(new Date(event.startDate).getTime() + 135 * 60000).toLocaleTimeString(
          'zh-CN',
          { hour: '2-digit', minute: '2-digit' }
        ),
        title: `Panel讨论：${event.tags.join('与')}的未来发展`,
        description: '多位嘉宾共同探讨技术趋势与挑战',
        speakers: ['刘强 - 研发经理@小米', '周华 - 技术总监@阿里巴巴'],
      },
      {
        time: new Date(new Date(event.endDate).getTime() - 30 * 60000).toLocaleTimeString('zh-CN', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        title: '抽奖与结束',
        description: '活动总结与幸运抽奖环节',
      },
    ],

    // Add price if not present
    price:
      event.price !== undefined
        ? event.price
        : Math.random() > 0.5
          ? '免费'
          : Math.floor(Math.random() * 500) + 99,

    // Add sponsored status
    isSponsored: event.isSponsored !== undefined ? event.isSponsored : Math.random() > 0.7,

    // Add featured status if not present
    isFeatured: event.isFeatured !== undefined ? event.isFeatured : Math.random() > 0.7,

    // Add registration URL if not present
    ticketUrl:
      event.ticketUrl ||
      (Math.random() > 0.5 ? `https://example.com/events/${event.id}` : undefined),

    // Add FAQs
    faqs: event.faqs || [
      {
        question: '活动是否提供餐饮？',
        answer: '是的，活动期间将提供茶点和午餐。',
      },
      {
        question: '是否可以获得活动的PPT和视频回放？',
        answer: '参会者将在活动结束后收到演讲PPT和视频回放链接。',
      },
      {
        question: '如何取消报名？',
        answer: '请至少提前48小时发送邮件至contact@example.com申请取消报名。',
      },
    ],
  };
};

// Enhanced event data for detail page
export const enhancedEventsData: EventItem[] = [
  ...eventsData.map(event => createEnhancedEvent(event)),
  ...mockEvents.map(event => createEnhancedEvent(event)),
];

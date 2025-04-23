import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getEventById, getEventsByStatus } from './mockData';
import { EventItem } from './types';
import EventCard from './components/EventCard';
import styles from './event-detail.module.scss';
// 使用react-icons替代自定义SVG图标
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowLeft,
  FaShare,
  FaTag,
  FaTicketAlt,
  FaWeibo,
  FaWeixin,
  FaLink,
  FaMapMarkedAlt,
  FaMicrophone,
  FaInfoCircle,
  FaList,
  FaRegStar,
  FaQuestionCircle,
  FaGlobe,
  FaUserTie,
} from 'react-icons/fa';

const EventsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventItem | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'detail' | 'agenda' | 'location' | 'speakers' | 'faq'>(
    'detail'
  );

  // 装饰性光效背景的动画状态
  const [animationState, setAnimationState] = useState(0);

  const loadEventDetails = async () => {
    try {
      setLoading(true);

      // 模拟网络请求延迟
      await new Promise(resolve => setTimeout(resolve, 500));

      if (id) {
        const eventData = getEventById(id);

        if (eventData) {
          setEvent(eventData);

          // 获取相关活动（同类型标签的其他活动）
          const upcomingEvents = getEventsByStatus('upcoming');
          const filteredRelated = upcomingEvents
            .filter(item => item.id !== id && item.tags.some(tag => eventData.tags.includes(tag)))
            .slice(0, 3);

          setRelatedEvents(filteredRelated);
        } else {
          // 活动不存在，跳转到404页面
          void navigate('/404');
        }
      }
    } catch (error) {
      console.error('加载活动详情失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 更新动画状态的效果
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 加载活动详情和相关活动
  useEffect(() => {
    void loadEventDetails();
  }, []);

  // 计算活动状态
  const getEventStatus = () => {
    if (!event) return '';

    const now = new Date();
    const startDate = new Date(event.startDate);
    const endDate = new Date(event.endDate);

    if (now < startDate) {
      return 'upcoming';
    } else if (now > endDate) {
      return 'past';
    } else {
      return 'ongoing';
    }
  };

  // 格式化日期和时间
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDateTime = (dateString: string) => {
    return `${formatDate(dateString)} ${formatTime(dateString)}`;
  };

  // 计算倒计时
  const getCountdown = () => {
    if (!event) return null;

    const now = new Date();
    const startDate = new Date(event.startDate);

    if (now >= startDate) return null;

    const diff = startDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const countdown = getCountdown();

  // 处理活动注册
  const handleRegister = async () => {
    try {
      setRegisterLoading(true);

      // 模拟注册过程
      await new Promise(resolve => setTimeout(resolve, 1500));

      setRegistrationSuccess(true);

      // 重置成功状态（用于UI反馈）
      setTimeout(() => {
        setRegistrationSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('注册活动失败:', error);
    } finally {
      setRegisterLoading(false);
    }
  };

  // 处理社交分享
  const handleShare = (platform: string) => {
    if (!event) return;

    const url = window.location.href;
    const title = `参加活动: ${event.title}`;
    const text = `我发现了一个有趣的活动: ${event.title}。时间: ${formatDateTime(event.startDate)}。地点: ${event.location}`;

    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'weibo':
        shareUrl = `http://service.weibo.com/share/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'wechat':
        // 微信分享通常需要使用特定SDK，这里仅作示例
        alert('请打开微信，使用"扫一扫"功能扫描网页中的二维码进行分享。');
        return;
      default:
        void navigator.clipboard
          .writeText(url)
          .then(() => {
            alert('链接已复制到剪贴板，请手动分享。');
          })
          .catch(err => {
            console.error('复制链接失败:', err);
            alert('复制链接失败，请手动复制。');
          });
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  // 获取状态标签样式
  const getStatusLabelClass = () => {
    const status = getEventStatus();
    switch (status) {
      case 'upcoming':
        return styles.statusUpcoming;
      case 'ongoing':
        return styles.statusOngoing;
      case 'past':
        return styles.statusPast;
      default:
        return '';
    }
  };

  // 获取状态文本
  const getStatusText = () => {
    const status = getEventStatus();
    switch (status) {
      case 'upcoming':
        return '即将开始';
      case 'ongoing':
        return '进行中';
      case 'past':
        return '已结束';
      default:
        return '';
    }
  };

  if (loading) {
    return (
      <div className={styles.eventDetailPage}>
        <div className={styles.container}>
          <div className={styles.loadingIndicator}>
            <div className={styles.spinner} />
            <p>加载活动详情...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className={styles.eventDetailPage}>
        <div className={styles.container}>
          <div className={styles.errorMessage}>
            <h2>未找到活动</h2>
            <p>抱歉，无法找到指定的活动信息。</p>
            <Link to="/events" className={styles.backButton}>
              <FaArrowLeft className={styles.backIcon} />
              返回活动列表
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.eventDetailPage}>
      {/* 装饰性光效背景 */}
      <div className={classNames(styles.decorativeLight1, styles[`animState${animationState}`])} />
      <div className={classNames(styles.decorativeLight2, styles[`animState${animationState}`])} />
      <div className={classNames(styles.decorativeLight3, styles[`animState${animationState}`])} />

      <div className={styles.container}>
        <Link to="/events" className={styles.backButton}>
          <FaArrowLeft className={styles.backIcon} />
          返回活动列表
        </Link>

        {/* 倒计时区块 - 仅对即将到来的活动显示 */}
        {countdown && (
          <div className={styles.countdownWrapper}>
            <div className={styles.countdownContainer}>
              <div className={styles.countdownTitle}>距离活动开始还有</div>
              <div className={styles.countdownItems}>
                <div className={styles.countdownItem}>
                  <div className={styles.countdownValue}>{countdown.days}</div>
                  <div className={styles.countdownLabel}>天</div>
                </div>
                <div className={styles.countdownItem}>
                  <div className={styles.countdownValue}>{countdown.hours}</div>
                  <div className={styles.countdownLabel}>小时</div>
                </div>
                <div className={styles.countdownItem}>
                  <div className={styles.countdownValue}>{countdown.minutes}</div>
                  <div className={styles.countdownLabel}>分钟</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={styles.eventDetailHeader}>
          <div className={styles.eventDetailImage}>
            <img src={event.imageUrl || '/images/event-placeholder.jpg'} alt={event.title} />
            <div className={classNames(styles.statusLabel, getStatusLabelClass())}>
              {getStatusText()}
            </div>

            {event.isFeatured && (
              <div className={styles.featuredBadge}>
                <span>精选</span>
              </div>
            )}
          </div>

          <div className={styles.eventInfo}>
            <h1 className={styles.detailTitle}>{event.title}</h1>

            <div className={styles.infoItem}>
              <FaCalendarAlt className={styles.infoIcon} />
              <span>日期: {formatDate(event.startDate)}</span>
            </div>

            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <span>
                时间: {formatTime(event.startDate)} - {formatTime(event.endDate)}
              </span>
            </div>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <span>地点: {event.venue ? event.venue.address : event.location}</span>
            </div>

            {event.organizer && (
              <div className={styles.infoItem}>
                <FaUsers className={styles.infoIcon} />
                <span>主办方: {event.organizer}</span>
              </div>
            )}

            {event.price !== undefined && (
              <div className={styles.infoItem}>
                <FaTicketAlt className={styles.infoIcon} />
                <span>
                  费用:{' '}
                  {typeof event.price === 'number'
                    ? event.price === 0
                      ? '免费'
                      : `¥${event.price.toFixed(2)}`
                    : event.price}
                </span>
              </div>
            )}

            {event.attendees && (
              <div className={styles.attendanceDetail}>
                <div className={styles.attendanceInfo}>
                  <span className={styles.attendanceCount}>
                    {event.attendees.current} / {event.attendees.capacity}
                  </span>
                  <span className={styles.attendanceLabel}>参与者</span>
                </div>

                <div className={styles.progressContainer}>
                  <div
                    className={styles.progressBar}
                    style={{
                      width: `${Math.min(
                        Math.round((event.attendees.current / event.attendees.capacity) * 100),
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {event.tags && (
              <div className={styles.detailTags}>
                <FaTag className={styles.tagIcon} />
                {event.tags.map(tag => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {getEventStatus() !== 'past' && (
              <div className={styles.actionButtons}>
                {event.ticketUrl ? (
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.registerButton}
                  >
                    <FaTicketAlt className={styles.buttonIcon} />
                    立即报名
                  </a>
                ) : (
                  <button
                    className={classNames(styles.registerButton, {
                      [styles.loading]: registerLoading,
                      [styles.success]: registrationSuccess,
                    })}
                    onClick={handleRegister}
                    disabled={registerLoading || registrationSuccess}
                  >
                    <FaTicketAlt className={styles.buttonIcon} />
                    {registerLoading ? '处理中...' : registrationSuccess ? '报名成功!' : '立即报名'}
                  </button>
                )}
              </div>
            )}

            <div className={styles.shareButtons}>
              <button
                className={styles.shareButton}
                onClick={() => handleShare('weibo')}
                title="分享到微博"
              >
                <FaWeibo />
              </button>
              <button
                className={styles.shareButton}
                onClick={() => handleShare('wechat')}
                title="分享到微信"
              >
                <FaWeixin />
              </button>
              <button
                className={styles.shareButton}
                onClick={() => {
                  void navigator.clipboard
                    .writeText(window.location.href)
                    .then(() => {
                      alert('链接已复制到剪贴板！');
                    })
                    .catch(err => {
                      console.error('复制链接失败:', err);
                      alert('复制链接失败，请手动复制。');
                    });
                }}
                title="复制链接"
              >
                <FaLink />
              </button>
            </div>
          </div>
        </div>

        {/* 内容标签栏 */}
        <div className={styles.detailTabs}>
          <button
            className={classNames(styles.detailTab, {
              [styles.activeTab]: activeTab === 'detail',
            })}
            onClick={() => setActiveTab('detail')}
          >
            <FaInfoCircle className={styles.tabIcon} />
            活动详情
          </button>
          <button
            className={classNames(styles.detailTab, {
              [styles.activeTab]: activeTab === 'agenda',
            })}
            onClick={() => setActiveTab('agenda')}
          >
            <FaList className={styles.tabIcon} />
            活动议程
          </button>
          {event.speakers && event.speakers.length > 0 && (
            <button
              className={classNames(styles.detailTab, {
                [styles.activeTab]: activeTab === 'speakers',
              })}
              onClick={() => setActiveTab('speakers')}
            >
              <FaUserTie className={styles.tabIcon} />
              演讲嘉宾
            </button>
          )}
          <button
            className={classNames(styles.detailTab, {
              [styles.activeTab]: activeTab === 'location',
            })}
            onClick={() => setActiveTab('location')}
          >
            <FaMapMarkedAlt className={styles.tabIcon} />
            活动地点
          </button>
          {event.faqs && event.faqs.length > 0 && (
            <button
              className={classNames(styles.detailTab, {
                [styles.activeTab]: activeTab === 'faq',
              })}
              onClick={() => setActiveTab('faq')}
            >
              <FaQuestionCircle className={styles.tabIcon} />
              常见问题
            </button>
          )}
        </div>

        {/* 活动详情内容 */}
        {activeTab === 'detail' && (
          <div className={styles.eventDetailContent}>
            <div className={styles.detailSection}>
              <h2 className={styles.sectionTitle}>
                <FaInfoCircle className={styles.sectionIcon} /> 活动详情
              </h2>
              <div className={styles.richDescription}>
                <p>{event.longDescription || event.description}</p>

                <h3>活动亮点</h3>
                <ul className={styles.highlightsList}>
                  <li>
                    <FaRegStar className={styles.highlightIcon} />
                    <div>
                      <strong>行业领袖</strong>
                      <p>邀请行业专家分享最新技术趋势和实践案例</p>
                    </div>
                  </li>
                  <li>
                    <FaRegStar className={styles.highlightIcon} />
                    <div>
                      <strong>互动交流</strong>
                      <p>提供充分的交流机会，促进同行之间的知识共享</p>
                    </div>
                  </li>
                  <li>
                    <FaRegStar className={styles.highlightIcon} />
                    <div>
                      <strong>实战演练</strong>
                      <p>通过实践工作坊，掌握关键技术的实际应用</p>
                    </div>
                  </li>
                </ul>

                <h3>参与收获</h3>
                <p>
                  参与者不仅能够学习到最新的技术知识，还能够结识行业内的优秀人才，拓展职业人脉。活动结束后，所有参与者将获得：
                </p>
                <ul>
                  <li>完整的活动材料和演讲幻灯片</li>
                  <li>精选技术资源和学习路径推荐</li>
                  <li>活动纪念礼品和参与证书</li>
                </ul>
              </div>

              {event.organizer && (
                <div className={styles.organizerInfo}>
                  <h3>
                    <FaUsers className={styles.sectionIcon} /> 主办方介绍
                  </h3>
                  <div className={styles.organizerCard}>
                    <div className={styles.organizerLogo}>
                      {/* 使用首字母作为Logo占位符 */}
                      {event.organizer[0]}
                    </div>
                    <div className={styles.organizerDetail}>
                      <h4>{event.organizer}</h4>
                      <p>
                        专注于技术创新与知识分享的组织，致力于推动行业发展和人才培养。通过举办各类活动和提供优质内容，连接开发者社区，促进技术交流与合作。
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 活动议程Tab */}
        {activeTab === 'agenda' && (
          <div className={styles.eventDetailContent}>
            <div className={styles.detailSection}>
              <h2 className={styles.sectionTitle}>
                <FaList className={styles.sectionIcon} /> 活动议程
              </h2>
              <div className={styles.agendaTimeline}>
                {(event.agenda || []).map((item, index) => (
                  <div
                    key={index}
                    className={classNames(styles.agendaItem, {
                      [styles.agendaHighlight]: item.title.includes('主题演讲'), // 高亮主题演讲
                    })}
                  >
                    <div className={styles.agendaTime}>{item.time}</div>
                    <div className={styles.agendaConnector}>
                      <div className={styles.agendaDot} />
                      {index < (event.agenda?.length || 0) - 1 && (
                        <div className={styles.agendaLine} />
                      )}
                    </div>
                    <div className={styles.agendaContent}>
                      <h3 className={styles.agendaTitle}>
                        {item.title.includes('主题演讲') && (
                          <FaMicrophone className={styles.agendaIcon} />
                        )}
                        {item.title}
                      </h3>
                      <p className={styles.agendaDescription}>{item.description}</p>
                      {item.speaker && <div className={styles.agendaSpeaker}>{item.speaker}</div>}
                      {item.speakers && item.speakers.length > 0 && (
                        <div className={styles.agendaSpeakers}>
                          {item.speakers.map((speaker, i) => (
                            <span key={i} className={styles.agendaSpeaker}>
                              {speaker}
                              {i < item.speakers!.length - 1 ? ', ' : ''}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 演讲嘉宾Tab */}
        {activeTab === 'speakers' && event.speakers && (
          <div className={styles.eventDetailContent}>
            <div className={styles.detailSection}>
              <h2 className={styles.sectionTitle}>
                <FaUserTie className={styles.sectionIcon} /> 演讲嘉宾
              </h2>
              <div className={styles.speakersGrid}>
                {event.speakers.map((speaker, index) => (
                  <div key={index} className={styles.speakerCard}>
                    <div className={styles.speakerAvatar}>
                      <img src={speaker.avatarUrl} alt={speaker.name} />
                    </div>
                    <div className={styles.speakerInfo}>
                      <h3 className={styles.speakerName}>{speaker.name}</h3>
                      <div className={styles.speakerTitle}>
                        {speaker.title} @ {speaker.company}
                      </div>
                      <p className={styles.speakerBio}>{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 活动地点Tab */}
        {activeTab === 'location' && (
          <div className={styles.eventDetailContent}>
            <div className={styles.detailSection}>
              <h2 className={styles.sectionTitle}>
                <FaMapMarkedAlt className={styles.sectionIcon} /> 活动地点
              </h2>
              <div className={styles.locationDetail}>
                <div className={styles.locationAddress}>
                  <h3>地址</h3>
                  <p>{event.venue ? event.venue.address : event.location}</p>
                  <div className={styles.locationDirections}>
                    <h4>交通指南</h4>
                    <ul>
                      <li>
                        <strong>公共交通：</strong>地铁2号线至科技园站，从A出口步行5分钟
                      </li>
                      <li>
                        <strong>自驾：</strong>导航至"
                        {event.venue ? event.venue.name : event.location}"，园区内设有停车场
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.mapContainer}>
                  {/* 这里可以集成真实地图，例如使用百度地图或高德地图API */}
                  {/* 作为示例，这里使用占位符图片 */}
                  <div className={styles.mapPlaceholder}>
                    <FaMapMarkedAlt className={styles.mapIcon} />
                    <div className={styles.mapPlaceholderText}>
                      <p className={styles.mapPlaceholderTitle}>地图加载中</p>
                      <p className={styles.mapPlaceholderDesc}>
                        {event.venue ? event.venue.address : event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 常见问题Tab */}
        {activeTab === 'faq' && event.faqs && (
          <div className={styles.eventDetailContent}>
            <div className={styles.detailSection}>
              <h2 className={styles.sectionTitle}>
                <FaQuestionCircle className={styles.sectionIcon} /> 常见问题
              </h2>
              <div className={styles.faqList}>
                {event.faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>
                      <FaQuestionCircle className={styles.faqIcon} />
                      {faq.question}
                    </h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {relatedEvents.length > 0 && (
          <div className={styles.relatedEvents}>
            <h2 className={styles.sectionTitle}>
              <FaCalendarAlt className={styles.sectionIcon} /> 相关活动
            </h2>

            <div className={styles.eventsList}>
              {relatedEvents.map(relatedEvent => (
                <EventCard key={relatedEvent.id} event={relatedEvent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsDetailPage;

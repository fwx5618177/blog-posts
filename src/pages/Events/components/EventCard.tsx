import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { EventItem, EventStatus } from '../types';
import styles from './eventCard.module.scss';
// 引入react-icons
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaTag,
  FaChevronRight,
  FaStar,
  FaTicketAlt,
  FaHeart,
} from 'react-icons/fa';

export interface EventCardProps {
  event: EventItem;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  // 计算事件状态
  const getEventStatus = (): EventStatus => {
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

  // 格式化事件日期和时间
  const formatEventDate = (date: string): string => {
    return new Date(date).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatEventTime = (date: string): string => {
    return new Date(date).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // 获取状态标签样式和文本
  const getStatusLabelClass = (status: EventStatus): string => {
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

  const getStatusText = (status: EventStatus): string => {
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

  const status = getEventStatus();
  const statusLabelClass = getStatusLabelClass(status);
  const statusText = getStatusText(status);

  // 计算参与进度
  const attendanceProgress = event.attendees
    ? Math.min(Math.round((event.attendees.current / event.attendees.capacity) * 100), 100)
    : 0;

  // 格式化价格显示
  const formatPrice = (price: string | number): string => {
    if (typeof price === 'number') {
      return price === 0 ? '免费' : `¥${price.toFixed(2)}`;
    }
    return price;
  };

  // 计算剩余参与名额
  const getRemainingSlots = () => {
    if (!event.attendees) return null;
    const remaining = event.attendees.capacity - event.attendees.current;
    return remaining > 0 ? remaining : 0;
  };

  const remainingSlots = getRemainingSlots();

  return (
    <div className={classNames(styles.eventCard, { [styles.featured]: event.isFeatured })}>
      {event.isFeatured && (
        <div className={styles.featuredBadge}>
          <FaStar className={styles.featuredIcon} />
          <span>精选</span>
        </div>
      )}

      <div className={styles.imageContainer}>
        <img
          src={event.imageUrl || '/images/event-placeholder.jpg'}
          alt={event.title}
          className={styles.eventImage}
        />
        <div className={classNames(styles.statusLabel, statusLabelClass)}>{statusText}</div>
        {event.price !== undefined && (
          <div className={styles.priceTag}>{formatPrice(event.price)}</div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </h3>

        <div className={styles.metaInfo}>
          <div className={styles.metaItem}>
            <FaCalendarAlt className={styles.icon} />
            <span>{formatEventDate(event.startDate)}</span>
          </div>

          <div className={styles.metaItem}>
            <FaClock className={styles.icon} />
            <span>
              {formatEventTime(event.startDate)} - {formatEventTime(event.endDate)}
            </span>
          </div>

          {event.location && (
            <div className={styles.metaItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <span>{event.location}</span>
            </div>
          )}

          {event.organizer && (
            <div className={styles.metaItem}>
              <FaUsers className={styles.icon} />
              <span>主办方: {event.organizer}</span>
            </div>
          )}
        </div>

        <p className={styles.description}>{event.description}</p>

        {event.tags && event.tags.length > 0 && (
          <div className={styles.tags}>
            <FaTag className={styles.tagIcon} />
            {event.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {event.attendees && (
          <div className={styles.attendance}>
            <div className={styles.attendanceInfo}>
              <span className={styles.attendanceCount}>
                {event.attendees.current} / {event.attendees.capacity}
              </span>
              <span className={styles.attendanceLabel}>
                参与者
                {remainingSlots !== null && remainingSlots <= 10 && remainingSlots > 0 && (
                  <span className={styles.limitedSpots}>（仅剩 {remainingSlots} 名额）</span>
                )}
                {remainingSlots !== null && remainingSlots === 0 && (
                  <span className={styles.soldOut}>（已满）</span>
                )}
              </span>
            </div>
            <div className={styles.progressContainer}>
              <div
                className={classNames(styles.progressBar, {
                  [styles.almostFull]: attendanceProgress >= 80,
                  [styles.full]: attendanceProgress >= 100,
                })}
                style={{ width: `${attendanceProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className={styles.cardFooter}>
          <Link to={`/events/${event.id}`} className={styles.detailsButton}>
            {status === 'upcoming' ? (
              <>
                <FaTicketAlt className={styles.buttonIcon} />
                立即报名
              </>
            ) : (
              <>
                查看详情
                <FaChevronRight className={styles.arrowIcon} />
              </>
            )}
          </Link>
          <button className={styles.favoriteButton} title="收藏此活动">
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

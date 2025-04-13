import { FC, memo } from 'react';
import styles from './styles.module.scss';
import { FaChevronRight, FaClock, FaGlobe, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/formatDate';
import { truncateText } from '@/utils/truncateText';
import { EventItem } from '../../../types';

// 列表视图事件卡片组件
const EventCard: FC<{ event: EventItem; index: number }> = memo(({ event, index }) => {
  return (
    <div
      key={event.id}
      className={styles.listViewCard}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.eventBadge}>
          <FaGlobe className={styles.eventTypeIcon} />
          <span>公开活动</span>
        </div>
        <div className={styles.eventDate}>
          <div className={styles.eventDateDay}>{new Date(event.startDate).getDate()}</div>
          <div className={styles.eventDateMonth}>
            {formatDate(event.startDate, 'short', 'zh-CN').split(' ')[0]}
          </div>
        </div>
      </div>

      <h4 className={styles.cardTitle}>{event.title}</h4>

      <div className={styles.cardMeta}>
        <span className={styles.metaItem}>
          <FaClock className={styles.metaIcon} />
          {formatDate(event.startDate, 'time', 'zh-CN')} -{' '}
          {formatDate(event.endDate, 'time', 'zh-CN')}
        </span>

        <span className={styles.metaItem}>
          {event.location.includes('线上') ? (
            <FaVideo className={styles.metaIcon} />
          ) : (
            <FaGlobe className={styles.metaIcon} />
          )}
          {event.location}
        </span>
      </div>

      <p className={styles.cardDescription}>
        {truncateText(event.description, 150, {
          preserveWords: true,
          stripHtml: true,
          suffix: '...',
        })}
      </p>

      <div className={styles.cardFooter}>
        <div className={styles.eventTags}>
          {event.tags.slice(0, 3).map((tag, tagIndex) => (
            <span key={tagIndex} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/events/${event.id}`} className={styles.cardButton}>
          查看详情
          <FaChevronRight className={styles.buttonIcon} />
        </Link>
      </div>
    </div>
  );
});

export default EventCard;

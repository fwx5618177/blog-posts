import { FC, memo } from 'react';
import styles from './styles.module.scss';
import { FaChevronRight, FaClock, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/formatDate';
import { truncateText } from '@/utils/truncateText';
import { EventItem } from '../../../types';

// 事件悬停卡片组件
const EventHoverCard: FC<{ event: EventItem }> = memo(({ event }) => {
  return (
    <div className={styles.eventHoverCard}>
      <div className={styles.hoverCardHeader}>
        <h4 className={styles.hoverCardTitle}>
          <FaGlobe className={styles.hoverCardIcon} />
          {event.title}
        </h4>
        <div className={styles.hoverCardTime}>
          <FaClock className={styles.hoverCardTimeIcon} />
          {formatDate(event.startDate, 'time', 'zh-CN')} -{' '}
          {formatDate(event.endDate, 'time', 'zh-CN')}
        </div>
      </div>

      <div className={styles.hoverCardDescription}>
        {truncateText(event.description, 120, {
          preserveWords: true,
          suffix: '...',
          stripHtml: false,
        })}
      </div>

      <div className={styles.hoverCardFooter}>
        <div className={styles.hoverCardTags}>
          {event.tags.slice(0, 2).map((tag, tagIndex) => (
            <span key={tagIndex} className={styles.hoverCardTag}>
              {tag}
            </span>
          ))}
        </div>
        <Link to={`/events/${event.id}`} className={styles.hoverCardButton}>
          查看详情
          <FaChevronRight className={styles.buttonIcon} />
        </Link>
      </div>
    </div>
  );
});

export default EventHoverCard;

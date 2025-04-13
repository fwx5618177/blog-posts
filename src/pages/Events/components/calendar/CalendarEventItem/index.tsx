import { FC, memo } from 'react';
import styles from './styles.module.scss';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/formatDate';
import { truncateText } from '@/utils/truncateText';
import { EventItem } from '../../../types';

// 日历单元格中的事件组件
const CalendarEventItem: FC<{ event: EventItem }> = memo(({ event }) => {
  return (
    <div className={styles.eventContainer}>
      <Link to={`/events/${event.id}`} className={styles.calendarEvent} title={event.title}>
        <div className={styles.eventIndicator}></div>
        <span className={styles.eventTime}>{formatDate(event.startDate, 'time', 'zh-CN')}</span>
        <span className={styles.eventTitle}>
          {truncateText(event.title, 30, {
            preserveWords: true,
            stripHtml: false,
            suffix: '...',
          })}
        </span>
        <FaGlobe className={styles.eventIcon} />
      </Link>
    </div>
  );
});

export default CalendarEventItem;

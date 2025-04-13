import { FC, memo } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { getDayOfMonth, isToday } from '@/utils/dateUtils';
import { getCalendarData } from '../utils';
import CalendarEventItem from '../CalendarEventItem';
import { EventItem } from '../../../types';

// 日历单元格组件
const CalendarDay: FC<{
  day: ReturnType<typeof getCalendarData>[number];
  onEventHover?: (event: EventItem, e: React.MouseEvent) => void;
  onEventLeave?: () => void;
}> = memo(({ day, onEventHover, onEventLeave }) => {
  // 处理事件悬停
  const handleEventHover = (event: EventItem) => (e: React.MouseEvent) => {
    if (onEventHover) {
      onEventHover(event, e);
    }
  };

  return (
    <div
      className={classNames(styles.calendarDay, {
        [styles.currentMonth]: day.isCurrentMonth,
        [styles.otherMonth]: !day.isCurrentMonth,
        [styles.today]: isToday(day.date),
        [styles.hasEvents]: day.events.length > 0,
      })}
    >
      <div className={styles.dayHeader}>
        <span className={styles.dayNumber}>{getDayOfMonth(day.date)}</span>
        {day.events.length > 0 && <span className={styles.eventCount}>{day.events.length}</span>}
      </div>

      <div className={styles.dayEvents}>
        {day.events.slice(0, 3).map((event, eventIndex) => (
          <div
            key={eventIndex}
            onMouseEnter={handleEventHover(event)}
            onMouseLeave={onEventLeave}
            className={styles.eventWrapper}
          >
            <CalendarEventItem key={eventIndex} event={event} />
          </div>
        ))}

        {day.events.length > 3 && (
          <div
            className={styles.moreEvents}
            onMouseEnter={handleEventHover(day.events[3])}
            onMouseLeave={onEventLeave}
          >
            +{day.events.length - 3} 更多
          </div>
        )}
      </div>
    </div>
  );
});

export default CalendarDay;

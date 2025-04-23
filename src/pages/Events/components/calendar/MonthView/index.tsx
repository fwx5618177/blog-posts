import { FC, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';
import { WEEKDAY_NAMES, getCalendarWeeks } from '../utils';
import CalendarDay from '../CalendarDay';
import EventHoverCard from '../EventHoverCard';
import { EventItem } from '../../../types';

// 月视图组件
const MonthView: FC<{
  calendarWeeks: ReturnType<typeof getCalendarWeeks>;
}> = ({ calendarWeeks }) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [showHoverCard, setShowHoverCard] = useState<boolean>(false);
  const [hoverCardPosition, setHoverCardPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // 处理月历事件悬停
  const handleMonthDayHover = (event: EventItem, e: React.MouseEvent) => {
    setSelectedEvent(event);

    // 计算悬停卡片位置
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + window.scrollX;
    const y = rect.top;

    setHoverCardPosition({ x, y });
    setShowHoverCard(true);
  };

  const handleMonthDayLeave = () => {
    setShowHoverCard(false);
  };

  // 创建一个 useEffect 来处理点击外部区域关闭悬停卡片
  useEffect(() => {
    const handleClickOutside = () => {
      setShowHoverCard(false);
    };

    if (showHoverCard) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showHoverCard]);

  return (
    <div className={styles.calendarGridContainer}>
      <div className={styles.calendarGrid}>
        <div className={styles.weekdayLabels}>
          {WEEKDAY_NAMES.map((day, index) => (
            <div key={index} className={styles.weekdayLabel}>
              {day}
            </div>
          ))}
        </div>

        {calendarWeeks.map((week, weekIndex) => (
          <div key={weekIndex} className={styles.calendarWeek}>
            {week.map((day, dayIndex) => (
              <CalendarDay key={dayIndex} day={day} onEventHover={handleMonthDayHover} />
            ))}
          </div>
        ))}
      </div>

      {showHoverCard &&
        selectedEvent &&
        createPortal(
          <div
            className={styles.hoverCardPortal}
            style={{
              left: `${hoverCardPosition.x}px`,
              top: `${hoverCardPosition.y + 30}px`,
            }}
            onClick={e => e.stopPropagation()}
            onMouseLeave={handleMonthDayLeave}
          >
            <EventHoverCard event={selectedEvent} />
          </div>,
          document.body
        )}
    </div>
  );
};

export default MonthView;

import { FC, useState, useMemo, useCallback } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import {
  FaChevronRight,
  FaCalendarDay,
  FaChevronLeft,
  FaList,
  FaCalendarAlt,
} from 'react-icons/fa';
import { formatDate } from '@/utils/formatDate';
import { getNextMonth, getPreviousMonth } from '@/utils/dateUtils';
import { EventItem } from '../../types';
import { getCalendarData, getCalendarWeeks } from './utils';
import MonthView from './MonthView';
import ListView from './ListView';

// 主日历组件
const Calendar: FC<{ upcomingEvents: EventItem[] }> = ({ upcomingEvents }) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [calendarView, setCalendarView] = useState<'month' | 'list'>('month');

  // 使用 useMemo 缓存计算结果
  const calendarData = useMemo(
    () => getCalendarData(currentMonth, upcomingEvents),
    [currentMonth, upcomingEvents]
  );

  // 使用 useMemo 缓存日历周数据
  const calendarWeeks = useMemo(() => getCalendarWeeks(calendarData), [calendarData]);

  // 切换月份的回调函数
  const goToNextMonth = useCallback(() => {
    setCurrentMonth(getNextMonth(currentMonth));
  }, [currentMonth]);

  const goToPrevMonth = useCallback(() => {
    setCurrentMonth(getPreviousMonth(currentMonth));
  }, [currentMonth]);

  return (
    <section className={styles.calendarSection}>
      <div className={styles.calendarHeader}>
        <h2 className={styles.calendarHeaderTitle}>
          <FaCalendarDay className={styles.calendarHeaderIcon} />
          <span>即将到来的活动</span>
        </h2>

        <div className={styles.calendarControls}>
          <div className={styles.monthNavigation}>
            <button
              onClick={goToPrevMonth}
              className={styles.monthNavigationButton}
              aria-label="前一个月"
            >
              <FaChevronLeft />
            </button>
            <h3 className={styles.currentMonthDisplay}>
              {formatDate(currentMonth, 'default', 'zh-CN')}
            </h3>
            <button
              onClick={goToNextMonth}
              className={styles.monthNavigationButton}
              aria-label="下一个月"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className={styles.viewToggle}>
            <button
              className={classNames(styles.viewToggleButton, {
                [styles.active]: calendarView === 'month',
              })}
              onClick={() => setCalendarView('month')}
            >
              <FaCalendarAlt className={styles.viewToggleIcon} />
              月视图
            </button>
            <button
              className={classNames(styles.viewToggleButton, {
                [styles.active]: calendarView === 'list',
              })}
              onClick={() => setCalendarView('list')}
            >
              <FaList className={styles.viewToggleIcon} />
              列表视图
            </button>
          </div>
        </div>
      </div>

      {calendarView === 'month' ? (
        <MonthView calendarWeeks={calendarWeeks} />
      ) : (
        <ListView upcomingEvents={upcomingEvents} />
      )}
    </section>
  );
};

export default Calendar;

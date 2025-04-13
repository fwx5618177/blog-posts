import { EventItem } from '../../types';
import {
  filterEventsByDate,
  getDaysInMonth,
  getFirstDayOfMonth,
  getWeekdayNames,
} from '@/utils/dateUtils';

// 提取星期名称为常量
export const WEEKDAY_NAMES = getWeekdayNames('zh-CN', 'min');

// 获取事件日历数据
export const getCalendarData = (currentMonth: Date, upcomingEvents: EventItem[]) => {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  // 填充日历网格的数组
  const days = [];

  // 添加上个月的日期填充
  for (let i = 0; i < firstDayOfMonth; i++) {
    const prevMonthDate = new Date(year, month, -firstDayOfMonth + i + 1);
    days.push({
      date: prevMonthDate,
      isCurrentMonth: false,
      events: [],
    });
  }

  // 添加当月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);

    // 查找当天的事件
    const dayEvents = filterEventsByDate(upcomingEvents, date);

    days.push({
      date,
      isCurrentMonth: true,
      events: dayEvents,
    });
  }

  // 如果不是7的倍数，添加下个月的日期填充
  const remainingDays = 7 - (days.length % 7);
  if (remainingDays < 7) {
    for (let i = 1; i <= remainingDays; i++) {
      const nextMonthDate = new Date(year, month + 1, i);
      days.push({
        date: nextMonthDate,
        isCurrentMonth: false,
        events: [],
      });
    }
  }

  return days;
};

// 将日历数据拆分为周
export const getCalendarWeeks = (calendarData: ReturnType<typeof getCalendarData>) => {
  const calendarWeeks = [];
  for (let i = 0; i < calendarData.length; i += 7) {
    calendarWeeks.push(calendarData.slice(i, i + 7));
  }
  return calendarWeeks;
};

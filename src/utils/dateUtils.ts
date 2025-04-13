import moment from 'moment';

/**
 * 获取某个月的总天数
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 该月的总天数
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return moment({ year, month }).daysInMonth();
};

/**
 * 获取某个月第一天是星期几
 * @param year - 年份
 * @param month - 月份（0-11）
 * @returns 该月第一天的星期几（0-6，0表示星期日）
 */
export const getFirstDayOfMonth = (year: number, month: number): number => {
  return moment({ year, month, day: 1 }).day();
};

/**
 * 获取上一个月的日期
 * @param currentDate - 当前日期
 * @returns 上一个月的日期对象
 */
export const getPreviousMonth = (currentDate: Date): Date => {
  return moment(currentDate).subtract(1, 'month').toDate();
};

/**
 * 获取下一个月的日期
 * @param currentDate - 当前日期
 * @returns 下一个月的日期对象
 */
export const getNextMonth = (currentDate: Date): Date => {
  return moment(currentDate).add(1, 'month').toDate();
};

/**
 * 判断两个日期是否是同一天
 * @param date1 - 第一个日期
 * @param date2 - 第二个日期
 * @returns 布尔值，表示是否是同一天
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return moment(date1).isSame(moment(date2), 'day');
};

/**
 * 判断日期是否是今天
 * @param date - 要判断的日期
 * @returns 布尔值，表示是否是今天
 */
export const isToday = (date: Date): boolean => {
  return moment(date).isSame(moment(), 'day');
};

/**
 * 提取日期的日（1-31）
 * @param date - 日期对象
 * @returns 日（1-31）
 */
export const getDayOfMonth = (date: Date): number => {
  return moment(date).date();
};

/**
 * 获取日期的月份名称
 * @param date - 日期对象
 * @param locale - 区域设置，默认为中文
 * @param format - 月份格式，short为简写，long为全称
 * @returns 月份名称
 */
export const getMonthName = (
  date: Date,
  locale = 'zh-CN',
  format: 'short' | 'long' = 'short'
): string => {
  moment.locale(locale);
  return moment(date).format(format === 'short' ? 'MMM' : 'MMMM');
};

/**
 * 获取一周所有日期的名称（星期日到星期六）
 * @param locale - 区域设置，默认为中文
 * @param format - 格式，min为最短（一个字符），short为简写，long为全称
 * min 获取一个字符的简写 - 日 一 二 三 四 五 六
 * short 获取简写的星期名 - 日 一 二 三 四 五 六
 * long 获取全称的星期名 - 星期日 星期一 星期二 星期三 星期四 星期五 星期六
 * @returns 星期名称数组
 */
export const getWeekdayNames = (
  locale = 'zh-CN',
  format: 'min' | 'short' | 'long' = 'long'
): string[] => {
  // 设置语言
  moment.locale(locale);

  // 为中文提供特殊处理
  if (locale === 'zh-CN') {
    const zhCNWeekdays = {
      min: ['日', '一', '二', '三', '四', '五', '六'],
      short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      long: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    };
    return zhCNWeekdays[format];
  }

  // 对其他语言使用moment
  return Array.from({ length: 7 }, (_, index) => {
    const day = moment().day(index);
    if (format === 'min') {
      return day.format('dd').substring(0, 1); // 获取一个字符的简写
    } else if (format === 'short') {
      return day.format('dd'); // 简写的星期名
    } else {
      return day.format('dddd'); // 全称的星期名
    }
  });
};

/**
 * 判断日期是否在指定日期范围之前
 * @param date - 要判断的日期
 * @param compareWith - 比较的目标日期
 * @returns 布尔值，表示是否在目标日期之前
 */
export const isBefore = (date: Date, compareWith: Date): boolean => {
  return moment(date).isBefore(moment(compareWith));
};

/**
 * 判断日期是否在指定日期范围之后
 * @param date - 要判断的日期
 * @param compareWith - 比较的目标日期
 * @returns 布尔值，表示是否在目标日期之后
 */
export const isAfter = (date: Date, compareWith: Date): boolean => {
  return moment(date).isAfter(moment(compareWith));
};

/**
 * 获取日期的状态（即将到来、正在进行中、已结束）
 * @param startDate - 开始日期
 * @param endDate - 结束日期
 * @returns 日期状态：'upcoming'|'ongoing'|'past'
 */
export const getDateStatus = (startDate: Date, endDate: Date): 'upcoming' | 'ongoing' | 'past' => {
  const now = moment();
  const start = moment(startDate);
  const end = moment(endDate);

  if (now.isBefore(start)) {
    return 'upcoming';
  } else if (now.isAfter(end)) {
    return 'past';
  } else {
    return 'ongoing';
  }
};

/**
 * 按日期过滤事件
 * @param events - 事件数组
 * @param date - 目标日期
 * @returns 过滤后的事件数组
 */
export const filterEventsByDate = <T extends { startDate: string | Date }>(
  events: T[],
  date: Date
): T[] => {
  const targetDate = moment(date);
  return events.filter(event => {
    const eventDate = moment(event.startDate);
    return (
      eventDate.year() === targetDate.year() &&
      eventDate.month() === targetDate.month() &&
      eventDate.date() === targetDate.date()
    );
  });
};

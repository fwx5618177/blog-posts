import moment from 'moment';

export type DateFormat =
  | 'default'
  | 'short'
  | 'long'
  | 'compact'
  | 'time'
  | 'relative'
  | 'calendar';

/**
 * 格式化日期的工具函数
 * @param date - 要格式化的日期（Date 对象、时间戳或 ISO 字符串）
 * @param format - 预定义的格式类型或自定义的 moment 格式字符串
 * @param locale - 可选的语言设置（默认为 'en'）
 * @returns 格式化后的日期字符串
 *
 * @example
 * // 使用预定义格式
 * formatDate('2023-01-01', 'default')  // => "January 1, 2023"
 * formatDate('2023-01-01', 'short')    // => "Jan 1, 2023"
 * formatDate('2023-01-01', 'long')     // => "January 1, 2023 12:00 AM"
 * formatDate('2023-01-01', 'compact')  // => "01/01/23"
 * formatDate('2023-01-01', 'time')     // => "12:00 AM"
 * formatDate('2023-01-01', 'relative') // => "2 years ago"
 *
 * // 使用自定义格式
 * formatDate('2023-01-01', 'YYYY年MM月DD日') // => "2023年01月01日"
 */
export const formatDate = (
  date: string | Date | number,
  format: DateFormat = 'default',
  locale = 'en'
): string => {
  moment.locale(locale);
  const momentDate = moment(date);

  if (!momentDate.isValid()) {
    console.warn('Invalid date provided to formatDate:', date);
    return 'Invalid date';
  }

  // 预定义的格式映射
  const formatMap: Record<DateFormat, string | (() => string)> = {
    default: 'MMMM D, YYYY',
    short: 'MMM D, YYYY',
    long: 'MMMM D, YYYY h:mm A',
    compact: 'MM/DD/YY',
    time: 'h:mm A',
    relative: () => momentDate.fromNow(),
    calendar: () => momentDate.calendar(),
  };

  // 如果是预定义格式，使用映射的格式
  if (format in formatMap) {
    const formatValue = formatMap[format];
    return typeof formatValue === 'function' ? formatValue() : momentDate.format(formatValue);
  }

  // 使用自定义格式
  return momentDate.format(format);
};

/**
 * 获取相对时间的工具函数
 * @param date - 要计算相对时间的日期
 * @param locale - 可选的语言设置（默认为 'en'）
 * @returns 相对时间字符串
 *
 * @example
 * getRelativeTime('2023-01-01') // => "2 years ago"
 */
export const getRelativeTime = (date: string | Date | number, locale = 'en'): string => {
  moment.locale(locale);
  return moment(date).fromNow();
};

/**
 * 获取日历时间的工具函数
 * @param date - 要格式化的日期
 * @param locale - 可选的语言设置（默认为 'en'）
 * @returns 日历格式的时间字符串
 *
 * @example
 * getCalendarTime('2023-01-01') // => "Last Sunday at 12:00 AM"
 */
export const getCalendarTime = (date: string | Date | number, locale = 'en'): string => {
  moment.locale(locale);
  return moment(date).calendar();
};

/**
 * 检查日期是否有效
 * @param date - 要检查的日期
 * @returns 布尔值，表示日期是否有效
 *
 * @example
 * isValidDate('2023-01-01') // => true
 * isValidDate('invalid-date') // => false
 */
export const isValidDate = (date: string | Date | number): boolean => {
  return moment(date).isValid();
};

/**
 * 格式化持续时间（例如阅读时间）
 * @param minutes - 分钟数
 * @returns 格式化后的持续时间字符串
 *
 * @example
 * formatDuration(90) // => "1h 30min"
 * formatDuration(45) // => "45min"
 */
export const formatDuration = (minutes: number): string => {
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
};

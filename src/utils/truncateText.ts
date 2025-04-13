/**
 * 文本截断工具函数 - 将长文本截断为指定长度，并添加省略号或自定义后缀
 *
 * @param text 需要截断的文本
 * @param maxLength 最大长度，默认为120个字符
 * @param options 可选配置项
 * @param options.suffix 截断后的后缀，默认为"..."
 * @param options.preserveWords 是否保留完整单词（仅适用于英文），默认为true
 * @param options.stripHtml 是否移除HTML标签，默认为false
 * @returns 截断后的文本
 */
export const truncateText = (
  text: string,
  maxLength = 120,
  options = {
    suffix: '...',
    preserveWords: true,
    stripHtml: false,
  }
): string => {
  if (!text) return '';

  // 提取配置并应用默认值
  const { suffix, preserveWords, stripHtml } = options;

  // 移除HTML标签
  let processedText = text;
  if (stripHtml) {
    processedText = text.replace(/<\/?[^>]+(>|$)/g, '');
  }

  // 如果文本长度小于等于最大长度，直接返回
  if (processedText.length <= maxLength) {
    return processedText;
  }

  // 截断文本
  let truncated = processedText.substring(0, maxLength);

  // 保留完整单词（仅英文）
  if (preserveWords) {
    // 如果最后一个字符不是空格，且不是句子的结尾
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex > 0 && !/[.!?。！？]$/.test(truncated)) {
      truncated = truncated.substring(0, lastSpaceIndex);
    }
  }

  // 移除末尾的标点符号，避免省略号前出现标点
  truncated = truncated.replace(/[,，.。;；:：!！?？、]$/, '');

  return truncated + suffix;
};

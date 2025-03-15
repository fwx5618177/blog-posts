import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
// 移除静态导入的主题样式
// import 'highlight.js/styles/vs2015.css';
import html2canvas from 'html2canvas';

import { CodeBlockProps } from '../../types';
import './CodeBlock.scss';
import message from '../Message'; // 导入 Message 组件

// 支持的主题列表
const THEMES = [
  {
    id: 'atom-one-dark',
    name: '深色-atom-one-dark',
    cssPath: 'highlight.js/styles/atom-one-dark.css',
  },
  {
    id: 'atom-one-light',
    name: '浅色-atom-one-light',
    cssPath: 'highlight.js/styles/atom-one-light.css',
  },
  { id: 'github', name: 'GitHub', cssPath: 'highlight.js/styles/github.css' },
  { id: 'a11y-dark', name: 'A11y Dark', cssPath: 'highlight.js/styles/a11y-dark.css' },
  { id: 'a11y-light', name: 'A11y Light', cssPath: 'highlight.js/styles/a11y-light.css' },
  { id: 'agate', name: 'Agate', cssPath: 'highlight.js/styles/agate.css' },
  { id: 'an-old-hope', name: 'An Old Hope', cssPath: 'highlight.js/styles/an-old-hope.css' },
  { id: 'androidstudio', name: 'Android Studio', cssPath: 'highlight.js/styles/androidstudio.css' },
  { id: 'arduino-light', name: 'Arduino Light', cssPath: 'highlight.js/styles/arduino-light.css' },
  { id: 'arta', name: 'Arta', cssPath: 'highlight.js/styles/arta.css' },
  { id: 'ascetic', name: 'Ascetic', cssPath: 'highlight.js/styles/ascetic.css' },
  {
    id: 'atom-one-dark-reasonable',
    name: 'Atom One Dark Reasonable',
    cssPath: 'highlight.js/styles/atom-one-dark-reasonable.css',
  },
  { id: 'brown-paper', name: 'Brown Paper', cssPath: 'highlight.js/styles/brown-paper.css' },
  { id: 'codepen-embed', name: 'Codepen Embed', cssPath: 'highlight.js/styles/codepen-embed.css' },
  { id: 'color-brewer', name: 'Color Brewer', cssPath: 'highlight.js/styles/color-brewer.css' },
  {
    id: 'cybertopia-cherry',
    name: 'Cybertopia Cherry',
    cssPath: 'highlight.js/styles/cybertopia-cherry.css',
  },
  { id: 'dark', name: 'Dark', cssPath: 'highlight.js/styles/dark.css' },
  { id: 'default', name: 'Default', cssPath: 'highlight.js/styles/default.css' },
  { id: '1c-light', name: '1C-Light', cssPath: 'highlight.js/styles/1c-light.css' },
  { id: 'hybrid', name: 'Hybrid', cssPath: 'highlight.js/styles/hybrid.css' },
  { id: 'vs2015', name: 'VS2015', cssPath: 'highlight.js/styles/vs2015.css' },
];

// 截图背景颜色
const SNAPSHOT_BACKGROUND_COLOR = '#2b5b84'; // 纯蓝色背景
// 最大文件大小（MB），超过此大小将提供下载而非复制到剪贴板
const MAX_CLIPBOARD_SIZE_MB = 5;
// 截图缩放比例，提高清晰度
const SNAPSHOT_SCALE = 2;

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  showLineNumbers = true,
  highlight = [],
  caption,
  theme = 'atom-one-dark',
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [isCopied, setIsCopied] = useState(false);
  const [isGeneratingSnapshot, setIsGeneratingSnapshot] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const [themeStyleLoaded, setThemeStyleLoaded] = useState(false);

  // 获取当前主题的CSS路径
  const getCurrentThemeCssPath = () => {
    const themeObj = THEMES.find(t => t.id === currentTheme);
    return themeObj ? themeObj.cssPath : 'highlight.js/styles/atom-one-dark.css';
  };

  // 动态加载主题样式
  useEffect(() => {
    const loadThemeStyle = () => {
      try {
        // 移除之前可能存在的主题样式
        const existingThemeLink = document.getElementById('hljs-theme-link');
        if (existingThemeLink) {
          existingThemeLink.remove();
        }

        const cssPath = getCurrentThemeCssPath();

        // 创建新的样式链接
        const link = document.createElement('link');
        link.id = 'hljs-theme-link';
        link.rel = 'stylesheet';
        link.href = `https://cdn.jsdelivr.net/npm/${cssPath}`;

        // 监听加载完成事件
        link.onload = () => {
          setThemeStyleLoaded(true);
          // 重新应用高亮
          if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
          }
        };

        link.onerror = err => {
          console.error(`Failed to load theme CSS: ${cssPath}`, err);
          // 加载失败时回退到默认主题
          if (currentTheme !== 'atom-one-dark') {
            setCurrentTheme('atom-one-dark');
          }
        };

        document.head.appendChild(link);
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };

    loadThemeStyle();

    // 清理函数
    return () => {
      const themeLink = document.getElementById('hljs-theme-link');
      if (themeLink) {
        themeLink.remove();
      }
    };
  }, [currentTheme]);

  // 高亮代码
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language, themeStyleLoaded]);

  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
        // 显示复制成功的消息提示
        message.success('代码已复制到剪贴板', 2);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy code:', err);
        // 显示复制失败的消息提示
        message.error('复制失败，请重试', 2);
      });
  };

  const handleThemeChange = (themeId: string) => {
    setThemeStyleLoaded(false);
    setCurrentTheme(themeId);
    setShowThemeSelector(false);
    // 显示主题切换的消息提示
    const themeName = THEMES.find(t => t.id === themeId)?.name || themeId;
    message.info(`主题已切换为: ${themeName}`, 1.5);
  };

  // 使用 html2canvas 生成代码截图
  const handleGenerateSnapshot = async () => {
    if (!codeBlockRef.current) return;

    try {
      setIsGeneratingSnapshot(true);
      message.info('正在生成高清代码截图...', 1);

      // 获取代码块元素
      const codeBlock = codeBlockRef.current;

      // 创建一个包装容器，添加背景色和样式
      const wrapper = document.createElement('div');
      wrapper.style.position = 'absolute';
      wrapper.style.left = '-9999px';
      wrapper.style.top = '-9999px';
      wrapper.style.padding = '30px';
      wrapper.style.backgroundColor = SNAPSHOT_BACKGROUND_COLOR;
      wrapper.style.borderRadius = '12px';
      wrapper.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.12)';
      // 添加渐变背景，增加质感
      wrapper.style.background = `linear-gradient(135deg, #2b5b84 0%, #1e4976 100%)`;

      // 克隆代码块并添加到包装容器
      const clone = codeBlock.cloneNode(true) as HTMLElement;

      // 添加内边距，使代码块与边缘有一定距离
      clone.style.margin = '0';
      clone.style.boxShadow = 'none'; // 移除可能存在的阴影，避免重复

      // 重要：确保克隆的代码块内容完全展开，不受滚动限制
      const codeContent = clone.querySelector('.code-content');
      if (codeContent) {
        // 移除可能导致内容被截断的样式
        (codeContent as HTMLElement).style.maxHeight = 'none';
        (codeContent as HTMLElement).style.overflow = 'visible';

        // 确保 pre 元素也不受限制
        const preElement = codeContent.querySelector('pre');
        if (preElement) {
          (preElement as HTMLElement).style.maxHeight = 'none';
          (preElement as HTMLElement).style.overflow = 'visible';
          (preElement as HTMLElement).style.margin = '0';
        }

        // 确保行号和代码对齐
        const lineNumbers = codeContent.querySelector('.line-numbers');
        const codeElement = codeContent.querySelector('code');

        if (lineNumbers && codeElement) {
          // 保持行号容器的原始宽度并确保不会被压缩
          const originalLineNumbersWidth = window.getComputedStyle(lineNumbers).width;
          (lineNumbers as HTMLElement).style.width = originalLineNumbersWidth;
          (lineNumbers as HTMLElement).style.flexShrink = '0';
          (lineNumbers as HTMLElement).style.textAlign = 'right';
          (lineNumbers as HTMLElement).style.paddingRight = '10px';

          // 确保行高一致
          const lineHeight = window.getComputedStyle(codeElement).lineHeight;
          const lineNumberSpans = lineNumbers.querySelectorAll('.line-number');
          Array.from(lineNumberSpans).forEach(span => {
            (span as HTMLElement).style.height = lineHeight;
            (span as HTMLElement).style.lineHeight = lineHeight;
            (span as HTMLElement).style.display = 'block';
            (span as HTMLElement).style.textAlign = 'right';
            (span as HTMLElement).style.paddingRight = '8px';
          });

          // 确保字体大小和字体一致
          const fontSize = window.getComputedStyle(codeElement).fontSize;
          const fontFamily = window.getComputedStyle(codeElement).fontFamily;
          (lineNumbers as HTMLElement).style.fontSize = fontSize;
          (lineNumbers as HTMLElement).style.fontFamily = fontFamily;

          // 确保垂直对齐
          (lineNumbers as HTMLElement).style.paddingTop =
            window.getComputedStyle(codeElement).paddingTop;
        }
      }

      wrapper.appendChild(clone);
      document.body.appendChild(wrapper);

      // 使用 html2canvas 生成截图
      try {
        // 配置 html2canvas
        const canvas = await html2canvas(wrapper, {
          backgroundColor: null, // 使用透明背景，让渐变背景显示
          scale: SNAPSHOT_SCALE, // 使用更高的缩放比例以获得更清晰的图像
          logging: false, // 关闭日志
          useCORS: true, // 允许跨域图像
          allowTaint: true, // 允许污染画布
          scrollX: 0,
          scrollY: 0,
          height: wrapper.scrollHeight, // 确保捕获完整高度
          windowHeight: wrapper.scrollHeight, // 设置窗口高度为实际高度
          onclone: (clonedDoc, clonedElement) => {
            // 在克隆的文档中再次确保所有内容都是可见的
            const clonedContent = clonedElement.querySelector('.code-content');
            if (clonedContent) {
              (clonedContent as HTMLElement).style.maxHeight = 'none';
              (clonedContent as HTMLElement).style.overflow = 'visible';

              const clonedPre = clonedContent.querySelector('pre');
              if (clonedPre) {
                (clonedPre as HTMLElement).style.maxHeight = 'none';
                (clonedPre as HTMLElement).style.overflow = 'visible';
                (clonedPre as HTMLElement).style.margin = '0';
              }

              // 再次确保行号和代码对齐
              const clonedLineNumbers = clonedContent.querySelector('.line-numbers');
              const clonedCodeElement = clonedContent.querySelector('code');

              if (clonedLineNumbers && clonedCodeElement) {
                // 保持行号容器的宽度并确保不会被压缩
                (clonedLineNumbers as HTMLElement).style.flexShrink = '0';
                (clonedLineNumbers as HTMLElement).style.textAlign = 'right';
                (clonedLineNumbers as HTMLElement).style.paddingRight = '10px';
                // 确保行高一致
                const lineHeight = window.getComputedStyle(clonedCodeElement as Element).lineHeight;
                const lineNumberSpans = clonedLineNumbers.querySelectorAll('.line-number');
                lineNumberSpans.forEach(span => {
                  (span as HTMLElement).style.height = lineHeight;
                  (span as HTMLElement).style.lineHeight = lineHeight;
                  (span as HTMLElement).style.display = 'block';
                  (span as HTMLElement).style.textAlign = 'right';
                  (span as HTMLElement).style.paddingRight = '8px';
                });

                // 确保字体大小和字体一致
                const fontSize = window.getComputedStyle(clonedCodeElement as Element).fontSize;
                const fontFamily = window.getComputedStyle(clonedCodeElement as Element).fontFamily;
                (clonedLineNumbers as HTMLElement).style.fontSize = fontSize;
                (clonedLineNumbers as HTMLElement).style.fontFamily = fontFamily;

                // 确保垂直对齐
                (clonedLineNumbers as HTMLElement).style.paddingTop = window.getComputedStyle(
                  clonedCodeElement as Element
                ).paddingTop;
              }
            }
          },
        });

        // 从 canvas 获取 blob
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (blob: Blob | null) => {
              if (blob) resolve(blob);
              else reject(new Error('无法创建图像 Blob'));
            },
            'image/png',
            1.0
          ); // 使用最高质量
        });

        // 移除临时元素
        document.body.removeChild(wrapper);

        // 检查图像大小
        const fileSizeInMB = blob.size / (1024 * 1024);

        if (fileSizeInMB > MAX_CLIPBOARD_SIZE_MB) {
          // 图像太大，提供下载
          message.warning(`图像大小为${fileSizeInMB.toFixed(2)}MB，已自动下载`, 3);
          downloadBlob(blob);
        } else {
          // 尝试复制到剪贴板
          try {
            await copyBlobToClipboard(blob);
            message.success('高清代码截图已复制到剪贴板', 2);
          } catch (error) {
            console.error('Failed to copy image to clipboard:', error);
            // 如果复制失败，提供下载
            message.warning('无法复制到剪贴板，将提供下载链接', 3);
            downloadBlob(blob);
          }
        }
      } catch (error) {
        console.error('Failed to generate snapshot with html2canvas:', error);
        message.error('生成截图失败，请重试', 2);

        // 确保移除临时元素
        if (document.body.contains(wrapper)) {
          document.body.removeChild(wrapper);
        }
      }
    } catch (error) {
      console.error('Error generating snapshot:', error);
      message.error('生成截图失败，请重试', 2);
    } finally {
      setIsGeneratingSnapshot(false);
    }
  };

  // 复制 Blob 到剪贴板
  const copyBlobToClipboard = async (blob: Blob): Promise<void> => {
    try {
      // 检查是否支持 Clipboard API 的 write 方法
      if (navigator.clipboard?.write) {
        const clipboardItem = new ClipboardItem({
          [blob.type]: blob,
        });
        await navigator.clipboard.write([clipboardItem]);
      } else {
        throw new Error('浏览器不支持复制图像到剪贴板');
      }
    } catch (error) {
      console.error('Failed to copy image to clipboard:', error);
      throw error;
    }
  };

  // 下载 Blob
  const downloadBlob = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code-snapshot-${new Date().getTime()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    message.success('截图已下载');
  };

  const renderLineNumbers = () => {
    if (!showLineNumbers) return null;

    const lines = code.split('\n');
    return (
      <div className="line-numbers">
        {lines.map((_, index) => (
          <span
            key={index}
            className={`line-number ${highlight.includes(index + 1) ? 'highlighted' : ''}`}
          >
            {index + 1}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="code-block-wrapper">
      <div ref={codeBlockRef} className={`code-block mac-style theme-${currentTheme}`}>
        <div className="code-header">
          <div className="window-controls">
            <span className="control close" aria-label="Close"></span>
            <span className="control minimize" aria-label="Minimize"></span>
            <span className="control maximize" aria-label="Maximize"></span>
          </div>

          <div className="code-info">
            <span className="code-language">{language}</span>
          </div>

          <div className="code-actions">
            <div className="theme-selector-container">
              <button
                className="theme-button"
                onClick={() => setShowThemeSelector(!showThemeSelector)}
                aria-label="Change theme"
                title="切换主题"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8a5 5 0 0 1 10 0h-2a3 3 0 0 0-6 0H7z" />
                </svg>
              </button>
              {showThemeSelector && (
                <div className="theme-dropdown">
                  {THEMES.map(themeOption => (
                    <button
                      key={themeOption.id}
                      className={`theme-option ${currentTheme === themeOption.id ? 'active' : ''}`}
                      onClick={() => handleThemeChange(themeOption.id)}
                    >
                      {themeOption.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="snapshot-button"
              onClick={handleGenerateSnapshot}
              disabled={isGeneratingSnapshot}
              aria-label="Generate snapshot"
              title="生成代码截图"
            >
              {isGeneratingSnapshot ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="spinning"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M12 4v4l2.5 2.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3-5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z" />
                </svg>
              )}
            </button>
            <button
              className="copy-button"
              onClick={handleCopyCode}
              aria-label={isCopied ? 'Copied!' : 'Copy code'}
              title="复制代码"
            >
              {isCopied ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="code-content">
          {renderLineNumbers()}
          <pre>
            <code ref={codeRef} className={`language-${language}`}>
              {code}
            </code>
          </pre>
        </div>
      </div>
      {caption && <div className="code-caption">{caption}</div>}
    </div>
  );
};

export default CodeBlock;

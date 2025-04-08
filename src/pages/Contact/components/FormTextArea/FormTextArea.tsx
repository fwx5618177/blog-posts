import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './form-textarea.module.scss';

interface FormTextAreaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  icon?: string;
  label: string;
  error?: string;
  touched?: boolean;
  status?: 'focused' | 'error' | 'success' | 'empty' | '';
  isRequired?: boolean;
  maxLength?: number;
  minRows?: number;
  maxRows?: number;
  preserveFormatting?: boolean;
  characterCount?: {
    remaining: number;
    isNearLimit: boolean;
    isAtLimit: boolean;
  };
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  id,
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  icon,
  label,
  error,
  touched,
  status,
  isRequired = true,
  maxLength,
  minRows = 3,
  maxRows = 10,
  preserveFormatting = true,
  characterCount,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = useState(minRows);

  // 自动调整高度
  useEffect(() => {
    if (!textareaRef.current || !preserveFormatting) return;

    const textarea = textareaRef.current;
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = parseInt(computedStyle.lineHeight);

    // 重置高度以获取实际内容高度
    textarea.style.height = 'auto';

    // 计算所需行数
    const contentHeight = textarea.scrollHeight;
    const minHeight = lineHeight * minRows;
    const maxHeight = lineHeight * maxRows;

    // 设置新高度
    const newHeight = Math.min(Math.max(contentHeight, minHeight), maxHeight);
    textarea.style.height = `${newHeight}px`;

    // 更新行数
    const newRows = Math.floor(newHeight / lineHeight);
    setRows(newRows);
  }, [value, minRows, maxRows, preserveFormatting]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (preserveFormatting) {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = e.currentTarget.selectionStart;
        const end = e.currentTarget.selectionEnd;
        const newValue = `${value.substring(0, start)}\t${value.substring(end)}`;

        const event = {
          target: {
            name,
            value: newValue,
          },
        } as React.ChangeEvent<HTMLTextAreaElement>;

        onChange(event);

        // 恢复光标位置
        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1;
          }
        }, 0);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    if (preserveFormatting) {
      e.preventDefault();
      const text = e.clipboardData.getData('text/plain');
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      const newValue = value.substring(0, start) + text + value.substring(end);
      const event = {
        target: {
          name,
          value: newValue,
        },
      } as React.ChangeEvent<HTMLTextAreaElement>;

      onChange(event);

      // 恢复光标位置
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd =
            start + text.length;
        }
      }, 0);
    }
  };

  return (
    <div className={styles['form-group']}>
      <label
        htmlFor={id}
        className={classNames({
          [styles.focused]: status === 'focused',
        })}
      >
        {label}
        {isRequired && <span className={styles['required-mark']}>*</span>}
      </label>
      <div className={styles['input-wrapper']}>
        <textarea
          ref={textareaRef}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
          wrap={preserveFormatting ? 'off' : 'soft'}
          spellCheck={!preserveFormatting}
          className={classNames(styles.textarea, {
            [styles.error]: status === 'error',
            [styles.success]: status === 'success',
            [styles.empty]: status === 'empty',
            [styles['preserve-formatting']]: preserveFormatting,
          })}
        />
        {icon && <span className={styles['input-icon']}>{icon}</span>}
        {characterCount && (
          <span
            className={classNames(styles['character-count'], {
              [styles['near-limit']]: characterCount.isNearLimit,
              [styles['at-limit']]: characterCount.isAtLimit,
            })}
          >
            {characterCount.remaining} characters left
          </span>
        )}
      </div>
      {error && touched && (
        <div
          className={classNames(styles['error-message'], {
            [styles.visible]: error,
          })}
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default FormTextArea;

import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import styles from './form-input-select.module.scss';

interface FormInputSelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: string;
  label: string;
  error?: string;
  touched?: boolean;
  status?: 'focused' | 'error' | 'success' | 'empty' | '';
  isRequired?: boolean;
  maxLength?: number;
  type?: 'email' | 'text';
}

const COMMON_EMAIL_DOMAINS = [
  'gmail.com',
  'outlook.com',
  'yahoo.com',
  'hotmail.com',
  'icloud.com',
  'qq.com',
  '163.com',
];

const FormInputSelect: React.FC<FormInputSelectProps> = ({
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
  type = 'email',
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (type === 'email') {
      const parts = value.split('@');
      const prefix = parts[0];
      const domain = parts[1]?.toLowerCase() || '';

      if (prefix) {
        const filtered = COMMON_EMAIL_DOMAINS.filter(d => d.toLowerCase().includes(domain)).map(
          d => `${prefix}@${d}`
        );
        setSuggestions(filtered);
        setShowSuggestions(filtered.length > 0);
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }
  }, [value, type]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndex(-1);
    onChange(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          const event = {
            target: {
              name,
              value: suggestions[selectedIndex],
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
          setShowSuggestions(false);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
      case 'Tab':
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          e.preventDefault();
          const event = {
            target: {
              name,
              value: suggestions[selectedIndex],
            },
          } as React.ChangeEvent<HTMLInputElement>;
          onChange(event);
          setShowSuggestions(false);
        }
        break;
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const event = {
      target: {
        name,
        value: suggestion,
      },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(event);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData('text');
    if (pastedText) {
      const event = {
        target: {
          name,
          value: pastedText.trim(),
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
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
        <input
          ref={inputRef}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={placeholder}
          maxLength={maxLength}
          className={classNames({
            [styles.error]: status === 'error',
            [styles.success]: status === 'success',
            [styles.empty]: status === 'empty',
          })}
          autoComplete="off"
        />
        {icon && <span className={styles['input-icon']}>{icon}</span>}

        {showSuggestions && suggestions.length > 0 && (
          <ul ref={suggestionsRef} className={styles['suggestions-list']} role="listbox">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                role="option"
                aria-selected={index === selectedIndex}
                className={classNames(styles['suggestion-item'], {
                  [styles.selected]: index === selectedIndex,
                })}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
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

export default FormInputSelect;

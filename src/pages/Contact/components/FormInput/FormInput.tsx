import React from 'react';
import classNames from 'classnames';
import styles from './form-input.module.scss';

interface FormInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  icon?: string;
  label: string;
  error?: string;
  touched?: boolean;
  status?: string;
  isRequired?: boolean;
  maxLength?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  type = 'text',
  icon,
  label,
  error,
  touched,
  status,
  isRequired = true,
  maxLength,
}) => {
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
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          maxLength={maxLength}
          className={classNames({
            [styles.error]: status === 'error',
            [styles.success]: status === 'success',
            [styles.empty]: status === 'empty',
          })}
        />
        {icon && <span className={styles['input-icon']}>{icon}</span>}
      </div>
      {error && touched && (
        <div
          className={classNames(styles['error-message'], {
            [styles.visible]: error,
          })}
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default FormInput;

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './ErrorPage.module.scss';
import FolderIcon from './components/FolderIcon';
import FileIcon from './components/FileIcon';

interface ErrorPageProps {
  type: 'category' | 'posts';
  title: string;
  message: string;
  highlightText?: string;
  messageSuffix?: string;
  primaryAction?: {
    text: string;
    to: string;
  };
  secondaryAction?: {
    text: string;
    to: string;
  };
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  type,
  title,
  message,
  highlightText,
  messageSuffix,
  primaryAction,
  secondaryAction,
}) => {
  return (
    <div className={styles['error-page-container']}>
      <div className={styles['error-content']}>
        <div className={styles['error-icon']}>
          {type === 'category' ? <FolderIcon /> : <FileIcon />}
        </div>
        <h1 className={classNames(styles['error-title'], styles.highlight)}>{title}</h1>
        <p className={styles['error-message']}>
          {message}
          {highlightText && <span className={styles.highlight}>{highlightText}</span>}
          {messageSuffix}
        </p>
        <div className={styles['error-actions']}>
          {primaryAction && (
            <Link
              to={primaryAction.to}
              className={classNames(styles.button, styles['button-primary'])}
            >
              {primaryAction.text}
            </Link>
          )}
          {secondaryAction && (
            <Link
              to={secondaryAction.to}
              className={classNames(styles.button, styles['button-secondary'])}
            >
              {secondaryAction.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

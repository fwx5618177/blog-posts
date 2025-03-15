import React from 'react';
import './Loading.scss';

interface LoadingProps {
  fullPage?: boolean;
  size?: 'small' | 'medium' | 'large';
  text?: string;
  transparent?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  fullPage = false,
  size = 'medium',
  text = 'Loading...',
  transparent = false,
}) => {
  const containerClass = `loading-container ${fullPage ? 'full-page' : ''} ${transparent ? 'transparent' : ''}`;
  const spinnerClass = `loading-spinner ${size}`;

  return (
    <div className={containerClass}>
      <div className="loading-content">
        <div className={spinnerClass}>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        {text && <p className="loading-text">{text}</p>}
      </div>
    </div>
  );
};

export default Loading;

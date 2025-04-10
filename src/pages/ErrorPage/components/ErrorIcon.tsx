import React, { useState, useEffect } from 'react';
import styles from './error-icon.module.scss';

interface ErrorIconProps {
  className?: string;
  size?: number;
}

const ErrorIcon: React.FC<ErrorIconProps> = ({ className, size = 80 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // 初始动画效果
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 500);

    // 随机动画效果
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`${styles.iconContainer} ${className || ''} ${isAnimating ? styles.animated : ''}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="Error indicator"
    >
      <div className={`${styles.glow} ${isHovered || isAnimating ? styles.hoveredGlow : ''}`}></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${styles.icon} ${isHovered || isAnimating ? styles.hoveredIcon : ''}`}
      >
        <circle className={styles.circle} cx="12" cy="12" r="10" />
        <path className={styles.alertPaths} d="M12 8L12 12" />
        <path className={styles.alertPaths} d="M12 16L12 16.01" />
      </svg>
      <div
        className={`${styles.pulse} ${isHovered || isAnimating ? styles.hoveredPulse : ''}`}
      ></div>

      {/* 装饰性粒子 */}
      <div
        className={`${styles.particles} ${isHovered || isAnimating ? styles.showParticles : ''}`}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          // 随机角度和距离
          const angle = Math.random() * Math.PI * 2;
          const distance = 30 + Math.random() * 40;
          const translateX = Math.cos(angle) * distance;
          const translateY = Math.sin(angle) * distance;

          return (
            <div
              key={i}
              className={styles.particle}
              style={
                {
                  '--translateX': `${translateX}px`,
                  '--translateY': `${translateY}px`,
                  animationDelay: `${i * 0.1}s`,
                  left: `${40 + Math.random() * 20}%`,
                  top: `${40 + Math.random() * 20}%`,
                } as React.CSSProperties
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ErrorIcon;

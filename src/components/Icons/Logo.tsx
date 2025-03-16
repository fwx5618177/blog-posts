import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  width = 40,
  height = 40,
  variant = 'full',
}) => {
  // For icon variant, we'll use a cropped version of the full logo
  const viewBox = variant === 'full' ? '0 0 109 30' : '0 0 35 30';
  const finalWidth = variant === 'full' ? width * 2.725 : width;

  return (
    <svg
      width={finalWidth}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M104.492 8.41996H108.732V29.54H104.492V8.41996ZM104.492 0.459961H108.772V5.37996H104.492V0.459961Z"
        fill="#E4DFB7"
      />
      <path
        d="M94.1797 8.41996H98.4197V29.54H94.1797V8.41996ZM94.1797 0.459961H98.4597V5.37996H94.1797V0.459961Z"
        fill="#E4DFB7"
      />
      <path
        d="M65.3529 8.41992H70.7129L77.7129 16.0599L84.9929 8.41992H90.2729L80.3529 18.9399L90.3929 29.5399H84.9929L77.5528 21.4199L69.9529 29.5399H64.6729L74.9529 18.5399L65.3529 8.41992Z"
        fill="#81DEE5"
      />
      <path
        d="M49.4491 8.41992H53.8891C59.4891 8.41992 63.0491 11.8599 63.0491 18.9799C63.0491 26.0999 59.4891 29.5399 53.8891 29.5399H49.4491C43.8091 29.5399 40.2891 26.0999 40.2891 18.9799C40.2891 11.8599 43.8091 8.41992 49.4491 8.41992ZM53.4891 12.4999H49.8491C46.1691 12.4999 44.5691 14.4199 44.5691 18.9799C44.5691 23.5399 46.1691 25.4199 49.8491 25.4199H53.4891C57.1291 25.4199 58.7691 23.5399 58.7691 18.9799C58.7691 14.4199 57.1291 12.4999 53.4891 12.4999Z"
        fill="#81DEE5"
      />
      <path
        d="M2.96 8.41992H24.68C31.84 8.41992 35.36 11.8199 35.36 17.6599V29.5399H31.08V17.6599C31.08 14.3399 29.16 12.4999 24.72 12.4999H19.76V29.5399H15.48V12.4999H4.76C4.4 12.4999 4.24 12.6999 4.24 13.0999V29.5399H0V11.6999C0 9.21992 0.84 8.41992 2.96 8.41992Z"
        fill="#F8C686"
      />
    </svg>
  );
};

export default Logo;

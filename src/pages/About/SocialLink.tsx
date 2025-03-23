import { FC, JSX } from 'react';
import styles from './SocialLink.module.scss';

interface SocialLinkProps {
  name: string;
  url: string;
  icon: JSX.Element;
}

const SocialLink: FC<{
  data: SocialLinkProps[];
}> = ({ data }) => {
  return (
    <div className={styles.aboutSocial}>
      {data?.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={social.name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {social.icon}
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialLink;

import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './location-map.module.scss';

const LocationMap: React.FC = () => {
  const [animateMap, setAnimateMap] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimateMap(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className={classNames(styles['map-container'], {
        [styles.animated]: animateMap,
      })}
    >
      <h2 className={styles['map-title']}>Find Us Here</h2>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.0440407079665!2d121.50742367607656!3d31.23030896732011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b27040b1f53c33%3A0x295129423c364a1!2z5LiK5rW35Lit5b-D!5e0!3m2!1szh-CN!2scn!4v1710400631044!5m2!1szh-CN!2scn"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Our location"
        ></iframe>
      </div>

      <div className={styles['business-hours']}>
        <h3>Business Hours</h3>
        <div className={styles['hours-grid']}>
          <div className={styles.day}>Monday - Friday</div>
          <div className={styles.hours}>9:00 AM - 6:00 PM</div>
          <div className={styles.day}>Saturday</div>
          <div className={styles.hours}>10:00 AM - 4:00 PM</div>
          <div className={styles.day}>Sunday</div>
          <div className={styles.hours}>Closed</div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

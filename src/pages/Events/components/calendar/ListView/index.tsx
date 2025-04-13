import { FC, memo } from 'react';
import styles from './styles.module.scss';
import { EventItem } from '../../../types';
import EventCard from '../EventCard';

// 列表视图组件
const ListView: FC<{ upcomingEvents: EventItem[] }> = memo(({ upcomingEvents }) => {
  if (upcomingEvents.length === 0) {
    return (
      <div className={styles.listView}>
        <div className={styles.noResults}>
          <p>暂无即将到来的活动</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.listView}>
      <div className={styles.listViewGrid}>
        {upcomingEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </div>
  );
});

export default ListView;

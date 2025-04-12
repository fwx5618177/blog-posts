import React, { useState, useEffect, memo } from 'react';
import classnames from 'classnames';
import styles from './maintenance.module.scss';

/**
 * 维护图标组件 - 使用memo优化性能
 */
const MaintenanceIcon = memo(() => {
  return <div className={styles.icon} aria-hidden="true" />;
});

MaintenanceIcon.displayName = 'MaintenanceIcon';

/**
 * 倒计时组件 - 使用memo优化性能
 */
const CountdownTimer = memo(({ count, onComplete }: { count: number; onComplete: () => void }) => {
  useEffect(() => {
    if (count === 0) {
      onComplete();
    }
  }, [count, onComplete]);

  return <span className={styles.countdownText}>{count}</span>;
});

CountdownTimer.displayName = 'CountdownTimer';

/**
 * 维护页面组件
 * 当网站进行计划维护时显示
 * 包含动画和交互元素，使用性能优化
 */
const MaintenancePage: React.FC = () => {
  const [countdown, setCountdown] = useState<number>(60);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // 自动倒计时定时器
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 处理刷新按钮点击
  const handleRefresh = () => {
    if (isRefreshing) return;

    setIsRefreshing(true);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  // 处理倒计时结束
  const handleCountdownComplete = () => {
    if (!isRefreshing) {
      handleRefresh();
    }
  };

  return (
    <div className={styles.maintenancePage}>
      <div className={styles.contentWrapper}>
        {/* 维护图标区域 */}
        <div className={styles.iconSection}>
          <MaintenanceIcon />
          <h1 className={styles.title}>系统维护中</h1>
        </div>

        {/* 信息卡片 */}
        <div className={styles.container}>
          <p className={styles.message}>
            我们的网站正在进行升级维护。对给您带来的不便，我们深表歉意并感谢您的耐心等待。
            我们的技术团队正在努力提升系统性能与用户体验。
          </p>

          <div className={styles.info}>
            <div className={styles.timeInfo}>
              <h3>预计完成时间</h3>
              <p>
                我们预计很快就会恢复服务。页面将在{' '}
                <CountdownTimer count={countdown} onComplete={handleCountdownComplete} />{' '}
                秒后自动刷新。
              </p>
            </div>
          </div>

          <button
            className={classnames(styles.btn, styles.btnPrimary)}
            onClick={handleRefresh}
            disabled={isRefreshing}
            aria-label="刷新页面"
          >
            {isRefreshing ? '正在刷新...' : '立即刷新'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;

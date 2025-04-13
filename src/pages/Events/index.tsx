import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import EventCard from './components/EventCard';
import { EventsFilterState, EventItem } from './types';
import { getAllTags, getEventsByStatus, getUpcomingEvents } from './mockData';
import styles from './events.module.scss';
import {
  FaSearch,
  FaCalendarAlt,
  FaFilter,
  FaTag,
  FaSadTear,
  FaChevronDown,
  FaExclamationCircle,
  FaRedo,
  FaCalendarCheck,
  FaClock,
  FaThumbsUp,
} from 'react-icons/fa';
import Calendar from './components/calendar';
const EventsPage: React.FC = () => {
  // 状态
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState<EventItem[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [filterState, setFilterState] = useState<EventsFilterState>({
    searchQuery: '',
    selectedTags: [],
    selectedStatus: 'all',
  });
  const [tagsVisible, setTagsVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isFiltering, setIsFiltering] = useState(false);

  // 活动类别选项
  const categoryOptions = ['技术', '设计', '商业', '教育'];

  // 引用
  const eventsListRef = useRef<HTMLDivElement>(null);

  // 光标动效元素参考
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // 初始数据加载
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        setLoadError(null);

        // 模拟网络请求
        await new Promise(resolve => setTimeout(resolve, 800));

        // 获取即将到来的活动
        const upcoming = getUpcomingEvents();
        setUpcomingEvents(upcoming);

        // 获取所有活动（默认显示全部）
        const allEvents = getEventsByStatus('all');
        setFilteredEvents(allEvents);

        // 获取所有可用标签
        const tags = getAllTags();
        setAvailableTags(tags);

        setLoading(false);
      } catch (error) {
        console.error('加载活动数据失败', error);
        setLoading(false);
        setLoadError('加载活动数据时发生错误，请重试');
      }
    };

    void loadInitialData();
  }, []);

  // 过滤活动
  useEffect(() => {
    const applyFilters = async () => {
      try {
        setIsFiltering(true);

        // 模拟网络请求延迟
        await new Promise(resolve => setTimeout(resolve, 300));

        // 获取基于状态的活动
        let events = getEventsByStatus(filterState.selectedStatus);

        // 搜索查询过滤
        if (filterState.searchQuery.trim()) {
          const searchLower = filterState.searchQuery.toLowerCase();
          events = events.filter(
            event =>
              event.title.toLowerCase().includes(searchLower) ||
              event.description.toLowerCase().includes(searchLower) ||
              event.location?.toLowerCase().includes(searchLower)
          );
        }

        // 标签过滤
        if (filterState.selectedTags.length > 0) {
          events = events.filter(event =>
            filterState.selectedTags.some(tag => event.tags.includes(tag))
          );
        }

        setFilteredEvents(events);
        setIsFiltering(false);
      } catch (error) {
        console.error('过滤活动失败', error);
        setIsFiltering(false);
        setLoadError('过滤活动时发生错误，请重试');
      }
    };

    void applyFilters();
  }, [filterState]);

  // 处理搜索查询变更
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterState(prev => ({
      ...prev,
      searchQuery: e.target.value,
    }));
  };

  // 处理状态选择变更
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterState(prev => ({
      ...prev,
      selectedStatus: e.target.value as 'all' | 'upcoming' | 'ongoing' | 'past',
    }));
  };

  // 处理标签选择
  const handleTagToggle = (tag: string) => {
    setFilterState(prev => {
      const isSelected = prev.selectedTags.includes(tag);
      return {
        ...prev,
        selectedTags: isSelected
          ? prev.selectedTags.filter(t => t !== tag)
          : [...prev.selectedTags, tag],
      };
    });
  };

  // 重置所有过滤器
  const resetFilters = () => {
    setFilterState({
      searchQuery: '',
      selectedTags: [],
      selectedStatus: 'all',
    });
  };

  // 重试加载
  const handleRetry = async () => {
    setLoadError(null);
    try {
      setLoading(true);

      // 模拟网络请求
      await new Promise(resolve => setTimeout(resolve, 800));

      // 获取即将到来的活动
      const upcoming = getUpcomingEvents();
      setUpcomingEvents(upcoming);

      // 获取所有活动（默认显示全部）
      const allEvents = getEventsByStatus('all');
      setFilteredEvents(allEvents);

      // 获取所有可用标签
      const tags = getAllTags();
      setAvailableTags(tags);

      setLoading(false);
    } catch (error) {
      console.error('重试加载数据失败', error);
      setLoading(false);
      setLoadError('重试加载活动数据时发生错误，请稍后再试');
    }
  };

  // 获取状态图标
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <FaCalendarCheck />;
      case 'ongoing':
        return <FaClock />;
      case 'past':
        return <FaThumbsUp />;
      default:
        return <FaCalendarAlt />;
    }
  };

  // 切换过滤器可见性
  const toggleFilters = () => {
    setFiltersVisible(prev => !prev);
  };

  return (
    <div className={styles.eventsPage} onMouseMove={handleMouseMove}>
      {/* 光标跟随效果 */}
      <div
        className={styles.cursor}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* 装饰性光效背景 */}
      <div className={styles.decorativeLight1} />
      <div className={styles.decorativeLight2} />
      <div className={styles.decorativeLight3} />

      <div className={styles.container}>
        {/* 页面标题 */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderContent}>
            <h1 className={styles.pageTitle}>活动与讲座</h1>
            <p className={styles.pageDescription}>
              探索我的公开活动与讲座，这里提供各类精彩的学术讨论、技术分享与文化交流。
            </p>
          </div>
        </div>

        {/* 错误信息显示 */}
        {loadError && (
          <div className={styles.errorMessage}>
            <FaExclamationCircle className={styles.errorIcon} />
            <p>{loadError}</p>
            <button className={styles.retryButton} onClick={handleRetry}>
              <FaRedo className={styles.retryIcon} />
              重试
            </button>
          </div>
        )}

        {/* 即将到来的活动日历视图 - 移到过滤器部分前面 */}
        {!loadError && upcomingEvents.length > 0 && <Calendar upcomingEvents={upcomingEvents} />}

        {/* 过滤器部分 */}
        {!loadError && (
          <section className={styles.filtersSection}>
            <div className={styles.filterHeader}>
              <h2 className={styles.sectionTitle}>
                <FaFilter className={styles.sectionIcon} />
                <span>浏览活动</span>
                {(filterState.selectedTags.length > 0 ||
                  filterState.searchQuery ||
                  filterState.selectedStatus !== 'all') && (
                  <span className={styles.tagFilterBadge}>
                    已应用{' '}
                    {filterState.selectedTags.length > 0
                      ? `${filterState.selectedTags.length}个标签`
                      : ''}
                    {filterState.searchQuery
                      ? filterState.selectedTags.length > 0
                        ? '和搜索'
                        : '搜索'
                      : ''}
                    {filterState.selectedStatus !== 'all'
                      ? filterState.selectedTags.length > 0 || filterState.searchQuery
                        ? '和状态'
                        : '状态'
                      : ''}
                  </span>
                )}
              </h2>

              <button
                className={styles.mobileFilterToggle}
                onClick={toggleFilters}
                aria-expanded={filtersVisible}
              >
                <FaFilter className={styles.filterIcon} />
                <span>{filtersVisible ? '隐藏过滤器' : '显示过滤器'}</span>
                <FaChevronDown
                  className={classNames(styles.toggleIcon, {
                    [styles.expanded]: filtersVisible,
                  })}
                />
              </button>
            </div>

            <div
              className={classNames(styles.filtersForm, {
                [styles.filtersVisible]: filtersVisible,
              })}
            >
              <div className={styles.formControl}>
                <label className={styles.formLabel}>搜索活动</label>
                <div className={styles.searchInputWrapper}>
                  <FaSearch className={styles.searchIcon} />
                  <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="搜索活动标题、描述或地点..."
                    value={filterState.searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              <div className={styles.formControl}>
                <label className={styles.formLabel}>活动类型</label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.selectInput}
                    value={filterState.selectedStatus}
                    onChange={handleStatusChange}
                  >
                    <option value="all">所有活动</option>
                    <option value="upcoming">可预约时间</option>
                    <option value="ongoing">进行中活动</option>
                    <option value="past">已结束活动</option>
                  </select>
                  {getStatusIcon(filterState.selectedStatus)}
                </div>
              </div>

              <div className={styles.formControl}>
                <label className={styles.formLabel}>
                  <FaTag className={styles.labelIcon} /> 按标签筛选
                </label>
                <button
                  className={styles.mobileFilterToggle}
                  onClick={() => setTagsVisible(!tagsVisible)}
                >
                  <FaFilter className={styles.filterIcon} />
                  <span>{tagsVisible ? '隐藏标签' : '显示标签'}</span>
                  <FaChevronDown
                    className={classNames(styles.toggleIcon, {
                      [styles.expanded]: tagsVisible,
                    })}
                  />
                </button>
                <div
                  className={classNames(styles.tagGroup, {
                    [styles.tagsVisible]: tagsVisible,
                  })}
                >
                  {availableTags
                    .filter(tag => !categoryOptions.includes(tag))
                    .map(tag => (
                      <button
                        key={tag}
                        className={classNames(styles.filterTag, {
                          [styles.active]: filterState.selectedTags.includes(tag),
                        })}
                        onClick={() => handleTagToggle(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                </div>
              </div>

              <div className={styles.formControl}>
                <label className={styles.formLabel}>
                  <FaFilter className={styles.labelIcon} /> 活动类别
                </label>
                <div className={styles.categoriesGroup}>
                  {categoryOptions.map(category => (
                    <button
                      key={category}
                      className={classNames(styles.filterTag, {
                        [styles.active]: filterState.selectedTags.includes(category),
                      })}
                      onClick={() => handleTagToggle(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {(filterState.selectedTags.length > 0 ||
                filterState.searchQuery ||
                filterState.selectedStatus !== 'all') && (
                <button
                  className={styles.resetButton}
                  onClick={resetFilters}
                  title="重置所有过滤器"
                >
                  <FaRedo className={styles.resetIcon} />
                  重置过滤器
                </button>
              )}
            </div>
          </section>
        )}

        {/* 活动列表 */}
        {!loadError && (
          <section className={styles.eventListSection} ref={eventsListRef}>
            <h2 className={styles.sectionTitle}>
              {getStatusIcon(filterState.selectedStatus)}
              <span>
                {filterState.selectedStatus === 'all' && '浏览全部活动'}
                {filterState.selectedStatus === 'upcoming' && '可预约时间'}
                {filterState.selectedStatus === 'ongoing' && '正在进行的活动'}
                {filterState.selectedStatus === 'past' && '已结束的活动'}
              </span>
            </h2>

            {loading || isFiltering ? (
              <div className={styles.loadingIndicator}>
                <div className={styles.spinner} />
                <p>{loading ? '正在加载活动数据...' : '正在筛选活动...'}</p>
              </div>
            ) : filteredEvents.length > 0 ? (
              <div className={styles.eventsList}>
                {filteredEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={styles.eventCardWrapper}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <FaSadTear className={styles.noResultsIcon} />
                <p>没有找到符合条件的活动</p>
                {(filterState.searchQuery ||
                  filterState.selectedTags.length > 0 ||
                  filterState.selectedStatus !== 'all') && (
                  <button className={styles.resetButton} onClick={resetFilters}>
                    <FaRedo className={styles.resetIcon} />
                    重置过滤器
                  </button>
                )}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default EventsPage;

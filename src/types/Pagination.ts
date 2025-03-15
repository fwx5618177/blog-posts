export interface PaginationProps {
  /**
   * The current active page
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Callback function when page changes
   */
  onPageChange: (page: number) => void;

  /**
   * Maximum number of page buttons to show
   * @default 5
   */
  maxVisiblePages?: number;

  /**
   * Custom class name for the pagination container
   */
  className?: string;
}

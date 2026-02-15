export type TimeFilter = 'TODAY' | 'WEEK' | 'MONTH' | 'ALL';
export type PriorityFilter = 'HIGH' | 'MEDIUM' | 'LOW' | 'ALL';

export interface ISidebarProps {
  activeTime: TimeFilter;
  onTimeChange: (filter: TimeFilter) => void;
  activePriority: PriorityFilter;
  onPriorityChange: (filter: PriorityFilter) => void;
  onAddTask: () => void;
}
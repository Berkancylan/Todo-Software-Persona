export type PriorityLevel = 'HIGH' | 'MEDIUM' | 'LOW';

export interface ITask {
  id: string;
  title: string;
  description: string;
  priority: PriorityLevel;
  dueDate: string;
  isCompleted: boolean;
  createdAt: Date;
}   
import { type ITask } from '../models/ITask';

export interface IAddTaskFormProps {
    onSave: (newTask: Omit<ITask, 'id' | 'createdAt' | 'isCompleted'>) => void;
    onCancel: () => void;
    initialData?: ITask;
}
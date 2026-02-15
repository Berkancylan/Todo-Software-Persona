import React from 'react';
import { type ITask } from '../../models/ITask';

interface ITaskCardProps {
  task: ITask;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: ITask) => void;
  showDate?: boolean;
}

const TaskCard: React.FC<ITaskCardProps> = ({ task, onToggle, onDelete, onEdit, showDate }) => {
  return (
    <div
      className={`group bg-white p-6 rounded-[32px] border-2 transition-all duration-300 flex items-center justify-between ${
        task.isCompleted
          ? 'opacity-40 border-gray-300 grayscale bg-gray-50/50 shadow-none' 
          : 'shadow-sm border-gray-200 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500 hover:-translate-y-0.5'
      }`}
    >
      <div onClick={() => onToggle(task.id)} className="flex-1 cursor-pointer min-w-0">
        {showDate && (
          <span className="text-[9px] font-black text-blue-400 uppercase mb-1 block tracking-widest">
            {new Date(task.dueDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
          </span>
        )}
        <h3 className={`font-bold text-lg leading-tight transition-all truncate ${
          task.isCompleted ? 'text-gray-400 line-through' : 'text-gray-800 group-hover:text-blue-600'
        }`}>
          {task.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-1 font-medium italic opacity-80">{task.description}</p>
      </div>

      <div className="flex items-center gap-4 ml-4">
        <button
          onClick={(e) => { e.stopPropagation(); onEdit(task); }}
          className="opacity-0 group-hover:opacity-100 text-[10px] font-black text-blue-400 hover:text-blue-600 transition-all uppercase tracking-tighter"
        >
          Düzenle
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(task.id); }}
          className="opacity-0 group-hover:opacity-100 text-[10px] font-black text-red-400 hover:text-red-600 transition-all uppercase tracking-tighter"
        >
          Sil
        </button>

        <div className={`w-1.5 h-10 rounded-full flex-shrink-0 transition-all duration-500 ${
          task.isCompleted ? 'bg-gray-200' :
          task.priority === 'HIGH' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' :
          task.priority === 'MEDIUM' ? 'bg-amber-400' : 'bg-emerald-400'
        }`} />
      </div>
    </div>
  );
};

export default TaskCard;
import React from 'react';
import { type ITask } from '../models/ITask';
import { type TimeFilter, type PriorityFilter } from '../models/Filters';
import TaskCard from '../components/Tasks/TaskCard';

interface IDashboardProps {
  tasks: ITask[]; activeTime: TimeFilter; activePriority: PriorityFilter;
  onToggle: (id: string) => void; onDelete: (id: string) => void; onEdit: (task: ITask) => void;
  scrollRef: React.RefObject<HTMLDivElement | null>; todayStr: string;
}

const DashboardPage: React.FC<IDashboardProps> = ({
  tasks, activeTime, activePriority, onToggle, onDelete, onEdit, scrollRef, todayStr
}) => {

  const priorityWeight = { 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };

  const getProcessedTasks = (taskList: ITask[]) => {
    return taskList
      .filter(t => (activePriority === 'ALL' || t.priority === activePriority))
      .sort((a, b) => {
        if (a.isCompleted !== b.isCompleted) return a.isCompleted ? 1 : -1;
        return priorityWeight[b.priority] - priorityWeight[a.priority];
      });
  };

  const getDatesWithTasks = () => {
    const nextSeven = Array.from({ length: 7 }, (_, i) => {
      const d = new Date(); d.setDate(d.getDate() + i);
      return new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0];
    });
    return [...new Set(tasks.filter(t => nextSeven.includes(t.dueDate)).map(t => t.dueDate))].sort();
  };

  const weekDates = getDatesWithTasks();

  return (
    <div className="h-full flex flex-col px-12 py-8 animate-in fade-in duration-700 overflow-hidden">
      <header className="mb-8 border-b border-gray-100 pb-6 flex-shrink-0">
        <h2 className="text-5xl font-black tracking-tighter text-gray-900 leading-none">
          {activeTime === 'TODAY' && "Bugün"}
          {activeTime === 'WEEK' && "Bu Hafta"}
          {activeTime === 'MONTH' && "Bu Ay"}
          {activeTime === 'ALL' && "Tüm Ajanda"}
        </h2>
        <p className="text-gray-400 font-bold uppercase tracking-[0.25em] text-[9px] mt-3 ml-1">
          {activePriority !== 'ALL' ? `${activePriority} ÖNCELİKLİ ANALİZ` : 'SİSTEM VERİLERİ'}
        </p>
      </header>

      <div
        ref={scrollRef}
        className={`overflow-y-auto custom-scroll pb-20 ${
          activeTime === 'WEEK' 
            ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 auto-rows-min' 
            : 'flex flex-col max-w-4xl gap-8'
        }`}
      >
        {activeTime === 'TODAY' && (
          <TaskColumn tasks={getProcessedTasks(tasks.filter(t => t.dueDate === todayStr))} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
        )}

        {activeTime === 'WEEK' && weekDates.map(date => (
          <div key={date} className="flex flex-col min-w-0 bg-gray-50/50 p-4 rounded-3xl border border-gray-100/50">
            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 px-1 flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${date === todayStr ? 'bg-blue-500' : 'bg-gray-300'}`}></span>
              {date === todayStr ? "Bugün" : new Date(date).toLocaleDateString('tr-TR', { weekday: 'long' })}
            </h4>
            <TaskColumn tasks={getProcessedTasks(tasks.filter(t => t.dueDate === date))} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
          </div>
        ))}

        {(activeTime === 'MONTH' || activeTime === 'ALL') && (
          <TaskColumn
            tasks={getProcessedTasks(activeTime === 'MONTH' ? tasks.filter(t => new Date(t.dueDate).getMonth() === new Date().getMonth()) : tasks)}
            onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} showDate
          />
        )}
      </div>
    </div>
  );
};

const TaskColumn: React.FC<{ tasks: ITask[]; onToggle: (id: string) => void; onDelete: (id: string) => void; onEdit: (task: ITask) => void; showDate?: boolean }> = ({ tasks, onToggle, onDelete, onEdit, showDate }) => (
  <div className="flex flex-col gap-3">
    {tasks.map(task => <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} showDate={showDate} />)}
    {tasks.length === 0 && (
      <div className="py-8 border-2 border-dashed border-gray-100 rounded-[24px] text-gray-300 text-[9px] font-black uppercase text-center tracking-widest hover:bg-gray-50 transition-colors">
        Plan Yok
      </div>
    )}
  </div>
);

export default DashboardPage;
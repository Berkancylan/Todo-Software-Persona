import React from 'react';
import { type TimeFilter, type PriorityFilter, type ISidebarProps } from '../../models/Filters';

const Sidebar: React.FC<ISidebarProps> = ({ 
  activeTime, 
  onTimeChange, 
  activePriority, 
  onPriorityChange,
  onAddTask 
}) => {

  const timeOptions: { label: string; value: TimeFilter }[] = [
    { label: 'Hepsi', value: 'ALL' },
    { label: 'Bugün', value: 'TODAY' },
    { label: 'Bu Hafta', value: 'WEEK' },
    { label: 'Bu Ay', value: 'MONTH' },
  ];

  const priorityOptions: { label: string; value: PriorityFilter }[] = [
    { label: 'Hepsi', value: 'ALL' },
    { label: 'Yüksek', value: 'HIGH' },
    { label: 'Orta', value: 'MEDIUM' },
    { label: 'Düşük', value: 'LOW' },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-50 border-r border-gray-200 p-6 flex flex-col gap-10">
      
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-black text-gray-800 tracking-tighter uppercase italic">
          ToDO<span className="text-blue-600">.APP</span>
        </h1>
        <button 
          onClick={onAddTask}
          className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200"
        >
          <span className="text-xl font-bold">+</span>
        </button>
      </div>

      <nav>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Zamanlama</p>
        <ul className="space-y-1">
          {timeOptions.map((opt) => (
            <li 
              key={opt.value}
              onClick={() => onTimeChange(opt.value)}
              className={`cursor-pointer px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                activeTime === opt.value 
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-100' 
                : 'text-gray-500 hover:bg-gray-200/50 hover:text-gray-800'
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Öncelik</p>
        <ul className="space-y-1">
          {priorityOptions.map((opt) => (
            <li 
              key={opt.value}
              onClick={() => onPriorityChange(opt.value)}
              className={`cursor-pointer px-4 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                activePriority === opt.value 
                ? 'bg-gray-800 text-white font-semibold shadow-md' 
                : 'text-gray-500 hover:bg-gray-200/50 hover:text-gray-800'
              }`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
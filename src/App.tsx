import React, { useState, useRef } from 'react'; // useEffect'i sildim gerek kalmadı
import Sidebar from './components/SideBar/Sidebar';
import DashboardPage from './pages/DashboardPage';
import TaskFormPage from './pages/TaskFormPage'; 
import { type ITask } from './models/ITask';
import { type TimeFilter, type PriorityFilter } from './models/Filters';
import { TEMP_TASKS } from './data/tempData';

type ViewMode = 'BOARD' | 'FORM';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(TEMP_TASKS);

  const [currentView, setCurrentView] = useState<ViewMode>('BOARD');
  const [activeTime, setActiveTime] = useState<TimeFilter>('ALL');
  const [activePriority, setActivePriority] = useState<PriorityFilter>('ALL');
  const [editingTask, setEditingTask] = useState<ITask | null>(null);
  
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleSaveTask = (taskData: any) => {
    if (editingTask) {
      setTasks(prev => prev.map(t => t.id === editingTask.id ? { ...t, ...taskData } : t));
    } else {
      const newTask: ITask = { 
        ...taskData, 
        id: crypto.randomUUID(), 
        isCompleted: false, 
        createdAt: new Date() 
      };
      setTasks([newTask, ...tasks]);
    }
    setEditingTask(null);
    setCurrentView('BOARD');
  };

  const handleToggle = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Bu görevi siliyoruz Berkan, emin misin?")) {
      setTasks(prev => prev.filter(t => t.id !== id));
    }
  };

  const handleEdit = (task: ITask) => {
    setEditingTask(task);
    setCurrentView('FORM');
  };

  return (
    <div className="flex h-screen bg-[#FDFDFD] text-gray-900 font-sans overflow-hidden">
      
      <Sidebar 
        activeTime={activeTime} onTimeChange={setActiveTime} 
        activePriority={activePriority} onPriorityChange={setActivePriority}
        onAddTask={() => { setEditingTask(null); setCurrentView('FORM'); }}
      />

      <main className="flex-1 h-full overflow-hidden relative">
        <div className="flex-1 h-full overflow-y-auto custom-scroll">
          
          {currentView === 'FORM' ? (
            <TaskFormPage 
              onSave={handleSaveTask} 
              onCancel={() => { setCurrentView('BOARD'); setEditingTask(null); }} 
              initialData={editingTask || undefined} 
            />
          ) : (
            <div className="p-12">
              <DashboardPage 
                tasks={tasks} activeTime={activeTime} activePriority={activePriority}
                onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit}
                scrollRef={scrollRef} 
                todayStr={new Date().toISOString().split('T')[0]} 
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
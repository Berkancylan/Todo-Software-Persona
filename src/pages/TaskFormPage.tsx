import React from 'react';
import AddTasksForm from '../components/Tasks/AddTasksForm';
import { type ITask } from '../models/ITask';

interface ITaskFormPageProps {
  onSave: (taskData: any) => void;
  onCancel: () => void;
  initialData?: ITask;
}

const TaskFormPage: React.FC<ITaskFormPageProps> = ({ onSave, onCancel, initialData }) => {
  return (
    <div className="min-h-full w-full bg-[#FDFDFD] flex flex-col items-center py-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
      <div className="w-full max-w-4xl px-6">
        
        <header className="mb-10 flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 leading-none">
              {initialData ? "Görevi\nDüzenle" : "Yeni Görev\nOluştur"}
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[9px] opacity-70 ml-1">
              {initialData ? "Parametre Optimizasyonu" : "Sistem Girdi Tanımı"}
            </p>
          </div>
        </header>

        <div className="bg-white p-10 rounded-[50px] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
          <AddTasksForm 
            onSave={onSave} 
            onCancel={onCancel} 
            initialData={initialData} 
          />
        </div>
      </div>
    </div>
  );
};

export default TaskFormPage;
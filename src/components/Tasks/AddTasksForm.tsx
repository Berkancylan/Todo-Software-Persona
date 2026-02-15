import React, { useState } from 'react';
import { type PriorityLevel } from '../../models/ITask';
import { type IAddTaskFormProps } from '../../interface/IAddTaskFormProps';

const AddTasksForm: React.FC<IAddTaskFormProps> = ({ onSave, onCancel, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [priority, setPriority] = useState<PriorityLevel>(initialData?.priority || 'MEDIUM');
  const [dueDate, setDueDate] = useState(initialData?.dueDate || new Date().toISOString().split('T')[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, description, priority, dueDate });
  };

  const priorityOptions: { level: PriorityLevel; label: string; color: string }[] = [
    { level: 'HIGH', label: 'Yüksek', color: 'bg-red-500' },
    { level: 'MEDIUM', label: 'Orta', color: 'bg-amber-400' },
    { level: 'LOW', label: 'Düşük', color: 'bg-emerald-400' },
  ];

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Görevin Adı Ne?</label>
        <input
          autoFocus type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="Örn: .NET projesine devam et"
          className="w-full text-4xl font-bold bg-transparent border-none outline-none placeholder:text-gray-100 text-gray-800 tracking-tighter"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Detaylar (Opsiyonel)</label>
        <textarea
          value={description} onChange={(e) => setDescription(e.target.value)}
          placeholder="İşin detaylarını not al..."
          className="w-full text-lg bg-transparent border-none outline-none placeholder:text-gray-100 text-gray-500 resize-none h-20 font-medium"
        />
      </div>

      <div className="flex flex-wrap gap-12">
        <div className="flex flex-col gap-4">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Öncelik Seviyesi</label>
          <div className="flex gap-3">
            {priorityOptions.map((opt) => (
              <button
                key={opt.level} type="button" onClick={() => setPriority(opt.level)}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  priority === opt.level ? `${opt.color} text-white shadow-lg scale-105` : 'bg-gray-50 text-gray-300 hover:bg-gray-100'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Hedef Tarih</label>
          <input
            type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}
            className="bg-gray-50 px-6 py-3 rounded-2xl text-xs font-black text-gray-500 outline-none hover:bg-gray-100 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 pt-8 border-t border-gray-50">
        <button
          type="button" onClick={onCancel}
          className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-red-500 bg-red-50 px-6 py-4 rounded-[24px] transition-all hover:bg-red-100 hover:scale-105 active:scale-95"
        >
          <span className="text-lg transition-transform group-hover:-rotate-90">✕</span> Vazgeç
        </button>
        <button
          type="submit"
          className="bg-gray-900 text-white px-10 py-5 rounded-[24px] text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-gray-900/10 hover:scale-105 active:scale-95 transition-all"
        >
          {initialData ? 'Değişiklikleri Uygula' : 'Listeye Ekle'}
        </button>
      </div>
    </form>
  );
};

export default AddTasksForm;
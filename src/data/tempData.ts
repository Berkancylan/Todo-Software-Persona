// src/data/tempData.ts
import { type ITask } from '../models/ITask';

const getOffsetDate = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

export const TEMP_TASKS: ITask[] = [
  { id: "t1", title: "Sprint Planlama", description: "Haftalık task dağılımı yapılacak.", priority: "HIGH", dueDate: getOffsetDate(0), isCompleted: false, createdAt: new Date() },
  { id: "t2", title: "Kedi Maması Al", description: "Marketten somonlu olandan.", priority: "LOW", dueDate: getOffsetDate(0), isCompleted: false, createdAt: new Date() },
  { id: "t3", title: "Fatura Ödemeleri", description: "Elektrik ve internet son gün.", priority: "MEDIUM", dueDate: getOffsetDate(0), isCompleted: true, createdAt: new Date() },
  { id: "t4", title: "Code Review", description: "Junior dev PR'ları kontrol edilecek.", priority: "MEDIUM", dueDate: getOffsetDate(1), isCompleted: false, createdAt: new Date() },
  { id: "t5", title: "Netflix Aboneliği", description: "Kart bilgilerini güncelle.", priority: "LOW", dueDate: getOffsetDate(1), isCompleted: false, createdAt: new Date() },
  { id: "t6", title: "SQL Query Fix", description: "Dashboard yavaş açılıyor, bakılacak.", priority: "HIGH", dueDate: getOffsetDate(2), isCompleted: false, createdAt: new Date() },
  { id: "t7", title: "Diş Hekimi", description: "Saat 14:30'da randevu.", priority: "HIGH", dueDate: getOffsetDate(3), isCompleted: false, createdAt: new Date() },
  { id: "t8", title: "Medium Blog Yazısı", description: "React Hooks hakkında taslak.", priority: "MEDIUM", dueDate: getOffsetDate(3), isCompleted: false, createdAt: new Date() },
  { id: "t9", title: "Araç Muayene", description: "Randevu saati onaylanacak.", priority: "HIGH", dueDate: getOffsetDate(4), isCompleted: false, createdAt: new Date() },
  { id: "t10", title: "Halı Saha Maçı", description: "Akşam 21:00 kadro eksik.", priority: "LOW", dueDate: getOffsetDate(5), isCompleted: false, createdAt: new Date() },
  { id: "t11", title: "Sunucu Yedekleme", description: "Haftalık backup kontrolü.", priority: "HIGH", dueDate: getOffsetDate(5), isCompleted: false, createdAt: new Date() },
  { id: "t12", title: "Udemy Kursu", description: "Advanced TypeScript modülü bitir.", priority: "MEDIUM", dueDate: getOffsetDate(6), isCompleted: false, createdAt: new Date() },
  { id: "t13", title: "Banka Görüşmesi", description: "Kredi faiz oranları sorulacak.", priority: "MEDIUM", dueDate: getOffsetDate(7), isCompleted: false, createdAt: new Date() },
  { id: "t14", title: "Evi Temizle", description: "Robot süpürge bakımı.", priority: "LOW", dueDate: getOffsetDate(7), isCompleted: false, createdAt: new Date() },
  { id: "t15", title: "Deploy to Prod", description: "Versiyon 2.1 yayına alınacak.", priority: "HIGH", dueDate: getOffsetDate(7), isCompleted: false, createdAt: new Date() },
  { id: "t16", title: "Kitap Okuma", description: "'Temiz Kod' 3. bölüm.", priority: "LOW", dueDate: getOffsetDate(8), isCompleted: false, createdAt: new Date() },
  { id: "t17", title: "Müşteri Toplantısı", description: "Yeni proje isterleri konuşulacak.", priority: "HIGH", dueDate: getOffsetDate(9), isCompleted: false, createdAt: new Date() },
  { id: "t18", title: "Berber", description: "Saç sakal tıraşı.", priority: "MEDIUM", dueDate: getOffsetDate(10), isCompleted: false, createdAt: new Date() },
  { id: "t19", title: "Docker Image Opt.", description: "Image boyutu küçültülecek.", priority: "HIGH", dueDate: getOffsetDate(11), isCompleted: false, createdAt: new Date() },
  { id: "t20", title: "Oyun Gecesi", description: "Discord tayfasıyla Valorant.", priority: "LOW", dueDate: getOffsetDate(11), isCompleted: false, createdAt: new Date() },
  { id: "t21", title: "Yıllık İzin Planı", description: "Uçak biletlerine bak.", priority: "MEDIUM", dueDate: getOffsetDate(12), isCompleted: false, createdAt: new Date() },
  { id: "t22", title: "System Update", description: "MacOS güncellemeleri yapılacak.", priority: "LOW", dueDate: getOffsetDate(13), isCompleted: false, createdAt: new Date() },
  { id: "t23", title: "API Dokümantasyon", description: "Swagger eksikleri tamamlanacak.", priority: "HIGH", dueDate: getOffsetDate(13), isCompleted: false, createdAt: new Date() }
];
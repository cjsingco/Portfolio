"use client";
import React, { useState } from 'react';
import { Star, TrendingUp, Map, Key, Zap, Home, X, ChevronUp, ChevronDown } from 'lucide-react';

// 1. DATA MUST BE DEFINED FIRST
const categories = [
  { id: 'all', name: 'All', icon: Home },
  { id: 'strategy', name: 'Strategy', icon: TrendingUp },
  { id: 'roadmap', name: 'Roadmap', icon: Map },
  { id: 'vip', name: 'VIP Access', icon: Key },
  { id: 'impl', name: 'Execution', icon: Zap },
];

const services = [
  { id: 1, cat: 'strategy', title: "Standard Strategy", desc: "60 min Virtual Session", price: "$150", rating: "4.92", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
  { id: 2, cat: 'roadmap', title: "Executive Roadmap", desc: "90 min + Full Blueprint", price: "$350", rating: "5.0", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
  { id: 3, cat: 'vip', title: "VIP Implementation", desc: "24/7 Priority Support", price: "$950", rating: "4.98", img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80" },
  { id: 4, cat: 'impl', title: "Scale Masterclass", desc: "Group coaching session", price: "$200", rating: "4.85", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80" }
];

export default function BookingCard({ searchTerm = "" }) {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState(13); // Matches today's date in image_bf23a2.png

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const febDays = Array.from({ length: 28 }, (_, i) => i + 1);

  // 2. FILTERING LOGIC
  const filteredServices = services.filter((item) => {
    const matchesCategory = filter === 'all' || item.cat === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1600px] mx-auto px-6 pb-20">
      {/* Category Icons */}
      <div className="flex items-center gap-10 py-6 sticky top-20 bg-white z-40 overflow-x-auto no-scrollbar border-b mb-10">
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => setFilter(cat.id)}
            className={`flex flex-col items-center gap-2 pb-2 border-b-2 transition-all min-w-fit ${filter === cat.id ? 'border-black opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
          >
            <cat.icon size={24} strokeWidth={1.5} />
            <span className="text-[12px] font-semibold">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {filteredServices.map((item) => (
          <div key={item.id} className="group cursor-pointer animate-in fade-in duration-500" onClick={() => setSelected(item)}>
            <div className="relative aspect-square mb-3 overflow-hidden rounded-2xl bg-neutral-100">
              <img src={item.img} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt={item.title} />
            </div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-[15px]">{item.title}</h3>
              <div className="flex items-center gap-1"><Star size={14} className="fill-current" /><span>{item.rating}</span></div>
            </div>
            <p className="text-neutral-500 text-[15px]">{item.desc}</p>
            <p className="mt-1 font-bold text-[15px]">{item.price} <span className="font-normal text-neutral-500">session</span></p>
          </div>
        ))}
      </div>

      {/* 3. CALENDAR MODAL (Matching image_bf23a2.png) */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#1A1A1A] w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in duration-300 text-white border border-white/10" onClick={e => e.stopPropagation()}>
             
             {/* Header matching image_bf23a2.png */}
             <div className="p-6 flex justify-between items-center">
                <h2 className="text-xl font-medium text-neutral-200">February 2026</h2>
                <div className="flex gap-4">
                   <ChevronUp className="text-neutral-500 cursor-pointer" size={24} />
                   <ChevronDown className="text-neutral-500 cursor-pointer" size={24} />
                </div>
             </div>

             <div className="px-6 pb-8">
                <div className="grid grid-cols-7 gap-y-4">
                   {days.map(day => (
                     <span key={day} className="text-center text-sm font-medium text-neutral-400">{day}</span>
                   ))}
                   {febDays.map(date => (
                     <div key={date} className="flex justify-center items-center">
                        <button 
                          onClick={() => setSelectedDate(date)}
                          className={`w-10 h-10 flex items-center justify-center text-lg transition-all
                            ${date === selectedDate 
                              ? 'border-2 border-[#0081FF] text-white font-bold' 
                              : 'text-neutral-200 hover:bg-white/5 rounded-md'}
                          `}
                        >
                          {date}
                        </button>
                     </div>
                   ))}
                </div>
                <button className="w-full bg-[#FF385C] text-white py-4 rounded-2xl font-black mt-8">Confirm {selected.price}</button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
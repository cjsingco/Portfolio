"use client";
import React, { useState } from 'react';
import { Star, TrendingUp, Map, Key, Zap, Home, ChevronRight, X } from 'lucide-react';

const categories = [
  { name: 'Strategy', icon: TrendingUp },
  { name: 'Full Roadmap', icon: Map },
  { name: 'VIP Access', icon: Key },
  { name: 'Implementation', icon: Zap },
  { name: 'Coaching', icon: Home },
];

const services = [
  {
    id: 1,
    title: "Standard Strategy",
    desc: "60 min Virtual Session",
    price: "$150",
    rating: "4.92",
    img: "amaya.PNG"
  },
  {
    id: 2,
    title: "Executive Roadmap",
    desc: "90 min + Full Blueprint",
    price: "$350",
    rating: "5.0",
    img: "SleepDeb.png"
  },
  {
    id: 3,
    title: "VIP Implementation",
    desc: "24/7 Priority Support",
    price: "$950",
    rating: "4.98",
    // FIXED: High-quality luxury modern interior
    img: "Sherlock2.PNG" 
  },
  {
    id: 4,
    title: "Scale Masterclass",
    desc: "Group coaching session",
    price: "$200",
    rating: "4.85",
    img: "Sherlock.PNG"
  }
];

const BookingCard = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="max-w-[1600px] mx-auto px-6 pb-20">
      {/* Category Icons Bar */}
      <div className="flex items-center gap-10 py-6 sticky top-20 bg-white z-40 overflow-x-auto no-scrollbar border-b mb-10">
        {categories.map((cat) => (
          <div key={cat.name} className="flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 hover:border-b-2 border-black pb-2 transition-all min-w-fit">
            <cat.icon size={24} strokeWidth={1.5} />
            <span className="text-[12px] font-medium">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
        {services.map((item) => (
          <div key={item.id} className="group cursor-pointer" onClick={() => setSelected(item)}>
            <div className="relative aspect-square mb-3 overflow-hidden rounded-2xl">
              <img 
                src={item.img} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                alt={item.title}
              />
              <div className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-md rounded-full">
                <Star size={16} className="text-white fill-white" />
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-[15px]">{item.title}</h3>
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-current" />
                <span className="text-sm font-light">{item.rating}</span>
              </div>
            </div>
            <p className="text-neutral-500 text-[15px]">{item.desc}</p>
            <p className="mt-1 font-bold text-[15px]">
              {item.price} <span className="font-normal text-neutral-500">session</span>
            </p>
          </div>
        ))}
      </div>

      {/* Booking Calendar Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in zoom-in duration-300">
             <div className="flex justify-between mb-6">
                <h2 className="text-xl font-bold">Secure {selected.title}</h2>
                <button onClick={() => setSelected(null)}><X /></button>
             </div>
             <div className="space-y-4">
                <div className="p-4 border rounded-xl flex justify-between">
                   <span className="text-neutral-500 font-medium">Availability</span>
                   <span className="font-bold text-[#FF385C]">Next: Feb 15</span>
                </div>
                <button className="w-full bg-[#FF385C] text-white py-4 rounded-xl font-bold hover:brightness-110 transition">
                  Confirm Result
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
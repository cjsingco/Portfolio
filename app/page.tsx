"use client";
import React, { useState } from 'react';
import { Search, User, Menu, Globe } from 'lucide-react';
import BookingCard from '../components/BookingCard';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b sticky top-0 bg-white z-50 pt-4 pb-4">
        <div className="max-w-[1600px] mx-auto px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#FF385C]">
            <span className="font-black text-2xl tracking-tighter cursor-pointer">BNBKnowHow</span>
          </div>

          {/* FUNCTIONAL SEARCH BAR */}
          <div className="hidden lg:flex border rounded-full py-1 px-2 shadow-sm hover:shadow-md transition items-center gap-2 text-sm font-semibold">
            <input 
              type="text"
              placeholder="Search strategies..."
              className="pl-4 pr-2 py-2 bg-transparent outline-none w-[250px] placeholder:text-neutral-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="bg-[#FF385C] p-2.5 rounded-full text-white cursor-pointer hover:brightness-110 transition">
              <Search size={14} strokeWidth={4}/>
            </div>
          </div>

          {/* USER MENU & LOGIN FUNCTION */}
          <div className="flex items-center gap-4 relative">
             <span className="text-xs font-bold uppercase tracking-widest hidden md:block cursor-pointer hover:bg-neutral-100 p-3 rounded-full transition">BNB your grind</span>
             <Globe size={18} className="cursor-pointer text-neutral-600" />
             
             <div 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="flex items-center gap-3 border p-2 px-3 rounded-full hover:shadow-md cursor-pointer transition text-neutral-600 bg-white relative z-50"
             >
                <Menu size={18} />
                <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center text-white">
                   <User size={18} />
                </div>
             </div>

             {/* DROPDOWN MENU - LOGIN/SIGNUP */}
             {isMenuOpen && (
               <>
                 <div className="fixed inset-0 z-40" onClick={() => setIsMenuOpen(false)}></div>
                 <div className="absolute right-0 top-14 w-64 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button className="w-full text-left px-4 py-3 text-[14px] font-bold hover:bg-neutral-100 transition">Sign up</button>
                    <button className="w-full text-left px-4 py-3 text-[14px] hover:bg-neutral-100 transition">Log in</button>
                    <div className="h-[1px] bg-neutral-200 my-2"></div>
                    <button className="w-full text-left px-4 py-3 text-[14px] hover:bg-neutral-100 transition">Airbnb your home</button>
                    <button className="w-full text-left px-4 py-3 text-[14px] hover:bg-neutral-100 transition">Host an experience</button>
                    <button className="w-full text-left px-4 py-3 text-[14px] hover:bg-neutral-100 transition">Help Centre</button>
                 </div>
               </>
             )}
          </div>
        </div>
      </nav>

      <div className="px-12 pt-8">
        <div className="bg-neutral-900 rounded-[32px] p-16 text-white relative overflow-hidden min-h-[300px] flex items-center">
            <h1 className="text-6xl font-black tracking-tighter">"Belong Anywhere"</h1>
            <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-[#FF385C] rounded-full blur-[150px] opacity-20"></div>
        </div>
      </div>

      <BookingCard searchTerm={searchQuery} />
    </main>
  );
}
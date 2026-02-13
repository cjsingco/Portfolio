"use client";
import BookingCard from '../components/BookingCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Search-Centric Navigation */}
      <nav className="h-20 border-b flex items-center px-12 justify-between sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-red-500 overflow-hidden">
             <img src="/logo.png" className="object-cover" alt="Logo" />
          </div>
          <span className="font-bold text-[#FF385C] text-xl tracking-tighter">BNBKnowHow</span>
        </div>

        <div className="hidden lg:flex border rounded-full py-2 px-6 shadow-sm hover:shadow-md transition gap-4 text-xs font-bold items-center cursor-pointer uppercase tracking-tighter">
          <span>Schedule</span>
          <span className="border-l h-4"></span>
          <span>Strategy</span>
          <span className="border-l h-4"></span>
          <span className="text-neutral-400">Results</span>
          <div className="bg-[#FF385C] p-2 rounded-full text-white ml-2">
            <svg viewBox="0 0 32 32" className="w-3 h-3 stroke-[4px] fill-none stroke-current"><circle cx="12" cy="12" r="10"></circle><path d="m20 20 10 10"></path></svg>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest hidden md:block">BNB your grind</span>
          <div className="border p-2 px-3 rounded-full flex gap-3 items-center hover:shadow-md cursor-pointer transition">
             <div className="w-4 h-4 bg-neutral-200 rounded-sm"></div>
             <div className="w-8 h-8 bg-neutral-900 rounded-full overflow-hidden">
                <img src="/logo.png" className="w-full h-full object-cover opacity-80" alt="User" />
             </div>
          </div>
        </div>
      </nav>

      {/* Dark Mode Hero Banner */}
      <div className="px-12 pt-8">
        <div className="bg-neutral-900 rounded-[32px] p-12 text-white relative overflow-hidden h-[300px] flex flex-col justify-center">
            <div className="relative z-10 max-w-2xl">
                <h1 className="text-5xl font-bold mb-4 tracking-tighter">Master the Airbnb Grind.</h1>
                <p className="text-neutral-400 text-lg mb-8 max-w-md">Expert-led growth strategies to scale your portfolio to 6-figures and beyond.</p>
                <button className="bg-[#FF385C] text-white px-10 py-3 rounded-xl font-bold hover:scale-105 transition-transform">Get Started</button>
            </div>
            {/* Gradient Glow */}
            <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#FF385C] rounded-full blur-[150px] opacity-10"></div>
        </div>
      </div>

      <BookingCard />
    </main>
  );
}
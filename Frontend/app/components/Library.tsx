"use client";

import { motion } from "framer-motion";
import { Search, Compass, Clock, BookMarked } from "lucide-react";

export default function Library() {
  return (
    <div className="min-h-screen bg-paper pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <h1 className="text-4xl font-bold text-ink-wet font-heading">
            المكتبة
          </h1>
          
          <div className="relative w-full md:w-96 group">
            <input 
              type="text" 
              placeholder="ابحث عن شاعر، قصيدة، أو ديوان..." 
              className="w-full bg-paper-aged/50 border border-gold/20 rounded-full py-3 px-12 text-ink font-sans focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all placeholder:text-ink-faded/50"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-faded group-focus-within:text-gold transition-colors" />
          </div>
        </div>

        {/* Shelf: الشعراء الذين تتابعهم */}
        <Shelf title="شعراء تتابعهم" icon={Compass} items={[1, 2, 3, 4, 5]} type="poet" />
        
        {/* Shelf: مخطوطات جديدة */}
        <Shelf title="مخطوطات جديدة" icon={Clock} items={[1, 2, 3, 4, 5]} type="book" />

        {/* Shelf: الأكثر قراءة */}
        <Shelf title="الأكثر قراءة" icon={BookMarked} items={[1, 2, 3, 4, 5]} type="book" />
        
      </div>
    </div>
  );
}

function Shelf({ title, icon: Icon, items, type }: { title: string, icon: any, items: any[], type: 'poet' | 'book' }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-5 h-5 text-gold" />
        <h2 className="text-2xl font-bold text-ink-wet font-heading">{title}</h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
          {items.map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`snap-start shrink-0 cursor-pointer ${type === 'poet' ? 'w-48' : 'w-56'}`}
            >
              {type === 'poet' ? (
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-paper-dark/30 border-2 border-gold/20 mb-4 flex items-center justify-center overflow-hidden">
                     {/* Placeholder for avatar */}
                     <span className="font-heading text-3xl text-ink-faded/30">ش</span>
                  </div>
                  <h3 className="font-bold text-ink-wet font-sans">اسم الشاعر</h3>
                  <p className="text-xs text-ink-faded font-sans mt-1">آخر تحديث اليوم</p>
                </div>
              ) : (
                <div 
                  className="h-80 rounded-md bg-paper-aged border border-gold/15 p-5 flex flex-col items-center justify-center text-center relative shadow-sm hover:shadow-md transition-shadow"
                  style={{
                    background: "linear-gradient(to right, var(--paper-dark) 0%, var(--paper) 10%, var(--paper) 100%)",
                    borderLeft: "6px solid var(--gold-dim)"
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />
                  <div className="w-8 h-px bg-gold/30 mb-4" />
                  <h3 className="font-bold text-xl text-ink-wet font-heading mb-2">عنوان الديوان</h3>
                  <p className="text-sm text-ink-faded font-sans">اسم المؤلف</p>
                  <div className="w-8 h-px bg-gold/30 mt-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Shelf Base (Wood/Paper texture line) */}
        <div className="absolute bottom-6 left-0 right-0 h-2 bg-gradient-to-b from-ink/5 to-transparent rounded-full" />
      </div>
    </div>
  );
}

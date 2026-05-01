"use client";

import { motion } from "framer-motion";
import { 
  Library, 
  BookOpen, 
  Search, 
  Plus, 
  FileText, 
  Eye, 
  Edit2, 
  Trash2,
  MoreVertical,
  Feather
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import ScribeSidebar from "@/app/components/ScribeSidebar";
import { useState } from "react";

export default function ManuscriptsPage() {
  const t = useTranslations('Manuscripts');
  const locale = useLocale();
  const [view, setView] = useState("grid");

  const manuscripts = [
    { id: 1, title: "The Silent Desert", date: "Rajab 1445", length: "14 Verses", status: "Published" },
    { id: 2, title: "Echoes of Andalusia", date: "Shaban 1445", length: "32 Verses", status: "Published" },
    { id: 3, title: "Midnight Musings", date: "Ramadan 1445", length: "8 Verses", status: "Draft" },
  ];

  return (
    <div className="min-h-screen flex bg-paper relative">
      <ScribeSidebar />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 pb-32">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest flex items-center gap-4">
              <Library className="text-gold" />
              Your Manuscripts
            </h1>
            <p className="text-sm italic text-ink-faded mt-2" style={{ fontFamily: "var(--font-amiri), serif" }}>
              A collection of your contributions to the eternal circle.
            </p>
          </div>
          <button className="flex items-center gap-3 px-8 py-3 bg-gold text-ink-wet text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-ink-wet hover:text-paper transition-all shadow-lg group">
            <Plus size={16} className="group-hover:rotate-90 transition-transform duration-500" />
            New Manuscript
          </button>
        </header>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative group w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold" />
            <input 
              type="text" 
              placeholder="Search your library..."
              className="w-full bg-paper-aged/30 border-b-2 border-gold/10 py-3 pl-10 pr-4 text-xs outline-none focus:border-gold transition-all"
            />
          </div>
          <div className="flex gap-4">
             <button onClick={() => setView("grid")} className={`p-2 transition-colors ${view === "grid" ? 'text-gold' : 'text-ink-faded/40 hover:text-gold'}`}><Library size={20} /></button>
             <button onClick={() => setView("list")} className={`p-2 transition-colors ${view === "list" ? 'text-gold' : 'text-ink-faded/40 hover:text-gold'}`}><FileText size={20} /></button>
          </div>
        </div>

        {/* Manuscript Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {manuscripts.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper border border-gold/20 p-8 shadow-xl relative group overflow-hidden hover:rotate-1 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold/30 group-hover:bg-gold transition-colors" />
              
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-paper-aged border border-gold/10">
                  <Feather className="text-gold w-6 h-6" />
                </div>
                <span className={`text-[8px] uppercase tracking-widest font-bold px-2 py-1 border ${book.status === 'Draft' ? 'border-ink-faded/20 text-ink-faded' : 'border-gold/30 text-gold'}`}>
                  {book.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink-wet font-heading mb-2 leading-tight">{book.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-gold-dim font-bold mb-6">{book.date}</p>
              
              <div className="flex items-center justify-between text-[10px] text-ink-faded/60 border-t border-gold/5 pt-6">
                <span>{book.length}</span>
                <div className="flex gap-4">
                   <button className="hover:text-gold"><Eye size={14} /></button>
                   <button className="hover:text-gold"><Edit2 size={14} /></button>
                   <button className="hover:text-red-500"><Trash2 size={14} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

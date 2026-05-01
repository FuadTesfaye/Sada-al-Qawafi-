"use client";

import { motion } from "framer-motion";
import { 
  Feather, 
  Search, 
  Heart, 
  MessageSquare, 
  Share2, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Library,
  PenLine,
  MoreVertical,
  LogOut
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { useState } from "react";

// Mock Data
const MOCK_POEMS = [
  {
    id: 1,
    author: "Mahmoud Darwish",
    authorTitle: "Prince of Resistance",
    content: "على هذه الأرض ما يستحق الحياة: تردد إبريل، رائحة الخبز في الفجر، آراء امرأة في الرجال، كتابات أيسخيلوس، أول الحب، عشب على حجر..",
    translation: "On this earth there is what deserves life: April's hesitation, the smell of bread at dawn, a woman's opinions on men, the writings of Aeschylus, first love, grass on a stone..",
    likes: "12K",
    comments: "450",
    time: "2 hours ago",
    parchmentColor: "#FDF5E6"
  },
  {
    id: 2,
    author: "Al-Mutanabbi",
    authorTitle: "The Great Scribe",
    content: "الخيل والليل والبيداء تعرفني والسيف والرمح والقرطاس والقلمُ",
    translation: "The horse, the night and the desert know me; and the sword, the spear, the paper and the pen.",
    likes: "45K",
    comments: "1.2K",
    time: "Yesterday",
    parchmentColor: "#F5E6C4"
  },
  {
    id: 3,
    author: "Nizar Qabbani",
    authorTitle: "Poet of Love",
    content: "أحبك جداً.. وأعرف أن الطريق إلى المستحيل طويل..",
    translation: "I love you very much.. and I know the road to the impossible is long..",
    likes: "28K",
    comments: "890",
    time: "3 days ago",
    parchmentColor: "#E3DAC9"
  }
];

export default function FeedPage() {
  const t = useTranslations('Feed');
  const locale = useLocale();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen flex bg-paper relative">
      {/* Background Texture handled by globals.css */}

      {/* Sidebar - The Library Catalog */}
      <aside className="w-72 hidden lg:flex flex-col border-r border-gold/20 h-screen sticky top-0 p-8 bg-paper-aged/30 z-20 overflow-y-auto">
        <div className="flex items-center gap-3 mb-12">
          <Feather className="text-gold w-6 h-6" />
          <span className="text-xl font-bold text-ink-wet font-heading uppercase tracking-widest">Sada</span>
        </div>

        <nav className="space-y-8">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold block mb-4">Catalog</span>
            <ul className="space-y-4">
              {[
                { id: "all", label: "The Diwan", icon: BookOpen },
                { id: "following", label: "Circle of Peers", icon: Users },
                { id: "trending", label: "Echoing Verses", icon: TrendingUp },
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-4 text-sm font-sans tracking-wide transition-all group ${activeTab === item.id ? 'text-ink-wet font-bold' : 'text-ink-faded hover:text-gold'}`}
                  >
                    <item.icon className={`w-4 h-4 ${activeTab === item.id ? 'text-gold' : 'text-gold/40 group-hover:text-gold'}`} />
                    {item.label}
                    {activeTab === item.id && <motion.div layoutId="activeDot" className="w-1.5 h-1.5 rounded-full bg-gold ml-auto" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold block mb-4">Archives</span>
            <ul className="space-y-4">
              {[
                { label: "My Manuscripts", icon: Library },
                { label: "Bookmarked", icon: Feather },
              ].map((item, i) => (
                <li key={i}>
                  <button className="flex items-center gap-4 text-sm font-sans tracking-wide text-ink-faded hover:text-gold transition-all group">
                    <item.icon className="w-4 h-4 text-gold/40 group-hover:text-gold" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="mt-auto pt-8 border-t border-gold/10">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ink-faded hover:text-ink-wet transition-all"
          >
            <LogOut className="w-4 h-4" />
            Leave Library
          </button>
        </div>
      </aside>

      {/* Main Feed Area */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        {/* Top Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
              {t('title')}
            </h1>
            <p className="text-sm italic text-ink-faded" style={{ fontFamily: "var(--font-amiri), serif" }}>
              {t('subtitle')}
            </p>
          </div>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold" />
            <input 
              type="text" 
              placeholder={t('search')}
              className="bg-paper-aged/50 border-b border-gold/20 py-2 pl-10 pr-4 text-xs font-sans outline-none focus:border-gold transition-all w-48 focus:w-64"
            />
          </div>
        </header>

        {/* The Scribe's Desk (Post Input) */}
        <section className="mb-16 relative">
          <div className="bg-paper border-2 border-double border-gold/30 p-6 shadow-lg relative overflow-hidden group">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-paper-aged border border-gold/20 flex items-center justify-center shrink-0">
                <PenLine className="text-gold w-5 h-5" />
              </div>
              <textarea 
                placeholder={t('postPrompt')}
                className="flex-1 bg-transparent border-none outline-none text-lg italic text-ink-wet resize-none h-24 placeholder:text-ink-faded/40"
                style={{ fontFamily: "var(--font-amiri), serif" }}
              />
            </div>
            <div className="flex justify-end mt-4 pt-4 border-t border-gold/10">
              <button className="bg-ink-wet text-paper px-8 py-2 text-xs font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-ink-wet transition-all shadow-md">
                Publish
              </button>
            </div>
            
            {/* Subtle background ornament */}
            <div className="absolute top-0 right-0 p-2 opacity-[0.05] pointer-events-none">
              <Feather size={60} />
            </div>
          </div>
        </section>

        {/* Feed Items */}
        <div className="space-y-12">
          {MOCK_POEMS.map((poem, i) => (
            <motion.article
              key={poem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              {/* Manuscript Page Container */}
              <div 
                className="relative p-10 shadow-2xl border border-gold/10 group overflow-hidden"
                style={{ background: poem.parchmentColor }}
              >
                {/* Torn Edge Effect inside card */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold/5" />
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-ink-wet text-paper flex items-center justify-center font-heading text-lg border border-gold/30 shadow-md">
                      {poem.author[0]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-ink-wet font-heading" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
                        {poem.author}
                      </h3>
                      <p className="text-[10px] text-gold-dim uppercase tracking-widest font-bold">
                        {poem.authorTitle}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] uppercase tracking-widest text-ink-faded/50">{poem.time}</span>
                    <button className="text-ink-faded/40 hover:text-ink-wet transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Poem Content */}
                <div className="mb-10 text-center px-4">
                  <p 
                    className="text-2xl md:text-3xl leading-loose text-ink-wet mb-8"
                    style={{ fontFamily: "var(--font-amiri), serif", direction: "rtl" }}
                  >
                    {poem.content}
                  </p>
                  <div className="h-px w-24 bg-gold/20 mx-auto mb-8" />
                  <p className="text-sm font-sans italic text-ink-faded leading-relaxed">
                    {poem.translation}
                  </p>
                </div>

                {/* Interactions */}
                <div className="flex items-center justify-around py-4 border-t border-gold/10">
                  <button className="flex items-center gap-2 group transition-all">
                    <Heart size={16} className="text-ink-faded/60 group-hover:text-red-500 transition-colors" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-faded/60 font-bold group-hover:text-ink-wet">{t('echo')}</span>
                    <span className="text-[10px] text-ink-faded/40">{poem.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 group transition-all">
                    <MessageSquare size={16} className="text-ink-faded/60 group-hover:text-gold transition-colors" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-faded/60 font-bold group-hover:text-ink-wet">{t('recite')}</span>
                    <span className="text-[10px] text-ink-faded/40">{poem.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 group transition-all">
                    <Share2 size={16} className="text-ink-faded/60 group-hover:text-ink-wet transition-colors" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-faded/60 font-bold group-hover:text-ink-wet">{t('scribe')}</span>
                  </button>
                </div>

                {/* Wax Seal Decoration */}
                <div className="absolute -bottom-6 -left-6 w-20 h-20 opacity-[0.05] pointer-events-none select-none">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="var(--ink-wet)" />
                    <text x="50" y="60" textAnchor="middle" fill="white" fontSize="40" fontFamily="serif">S</text>
                  </svg>
                </div>
              </div>

              {/* Torn Edge Shadow Effect */}
              <div 
                className="h-6 w-full opacity-20 -mt-1 relative z-0"
                style={{
                  background: "rgba(0,0,0,0.1)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 98% 85%, 95% 95%, 92% 80%, 88% 100%, 85% 85%, 82% 95%, 78% 75%, 75% 100%, 72% 85%, 68% 95%, 65% 80%, 62% 100%, 58% 85%, 55% 95%, 52% 75%, 48% 100%, 45% 85%, 42% 95%, 38% 80%, 35% 100%, 32% 85%, 28% 95%, 25% 75%, 22% 100%, 18% 85%, 15% 95%, 12% 80%, 8% 100%, 5% 85%, 2% 95%, 0% 80%)",
                }}
              />
            </motion.article>
          ))}
        </div>
      </main>

      {/* Right Sidebar - Trending / People to Follow */}
      <aside className="w-80 hidden xl:flex flex-col h-screen sticky top-0 p-8 z-20">
        <div className="bg-paper p-6 border border-gold/20 shadow-lg mb-8">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold mb-4">Trending Scribes</h4>
          <ul className="space-y-6">
            {["Antara", "Al-Khansa", "Ahmed Shawqi"].map((name, i) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-paper-aged border border-gold/10" />
                  <span className="text-xs font-bold text-ink-wet">{name}</span>
                </div>
                <button className="text-[9px] uppercase tracking-widest text-gold hover:text-ink-wet transition-all font-bold">Follow</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-paper p-6 border border-gold/20 shadow-lg">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-gold-dim font-bold mb-4">Daily Verse</h4>
          <p className="text-xs italic text-ink-faded mb-4 leading-relaxed" style={{ fontFamily: "var(--font-amiri), serif" }}>
            "أَمُرُّ عَلَى الدِّيَارِ دِيَارِ لَيْلَى أُقَبِّلُ ذَا الجِدَارَ وَذَا الجِدَارَا"
          </p>
          <span className="text-[9px] uppercase tracking-widest text-gold-dim font-bold">— Majnun Layla</span>
        </div>
      </aside>
    </div>
  );
}

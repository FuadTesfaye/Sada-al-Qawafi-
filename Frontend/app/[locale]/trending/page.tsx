"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Heart, 
  MessageSquare, 
  Share2, 
  MoreVertical,
  Zap,
  BookOpen
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import ScribeSidebar from "@/app/components/ScribeSidebar";

export default function TrendingPage() {
  const t = useTranslations('Trending');
  const locale = useLocale();

  const trendingPoems = [
    {
      id: 1,
      author: "Nizar Qabbani",
      content: "أحبك جداً.. وأعرف أن الطريق إلى المستحيل طويل..",
      translation: "I love you very much.. and I know the road to the impossible is long..",
      echoes: "128K",
      rank: 1,
      color: "#FDF5E6"
    },
    {
      id: 2,
      author: "Mahmoud Darwish",
      content: "سجل أنا عربي.. ورقم بطاقتي خمسون ألف..",
      translation: "Record, I am an Arab.. and my ID number is fifty thousand..",
      echoes: "94K",
      rank: 2,
      color: "#F5E6C4"
    },
    {
      id: 3,
      author: "Al-Mutanabbi",
      content: "أنا الذي نظر الأعمى إلى أدبي.. وأسمعت كلماتي من به صممُ",
      translation: "I am the one whose literature even the blind has looked at.. and my words have made the deaf hear.",
      echoes: "82K",
      rank: 3,
      color: "#E3DAC9"
    }
  ];

  return (
    <div className="min-h-screen flex bg-paper relative">
      <ScribeSidebar activeTab="trending" />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 pb-32">
        <header className="mb-16">
          <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest flex items-center gap-4">
            <TrendingUp className="text-gold" />
            Echoing Verses
          </h1>
          <p className="text-sm italic text-ink-faded mt-2" style={{ fontFamily: "var(--font-amiri), serif" }}>
            The manuscripts that are resonating across the global halls of poetry.
          </p>
        </header>

        <div className="space-y-12">
          {trendingPoems.map((poem, i) => (
            <motion.article
              key={poem.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
                 <span className="text-4xl font-heading text-gold/20">#{poem.rank}</span>
                 <Zap size={20} className="text-gold/30" />
              </div>

              <div 
                className="relative p-10 shadow-2xl border border-gold/10 overflow-hidden"
                style={{ background: poem.color }}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full bg-ink-wet text-paper flex items-center justify-center font-heading text-xs border border-gold/30">
                      {poem.author[0]}
                    </div>
                    <span className="text-xs font-bold text-ink-wet uppercase tracking-widest">{poem.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-500/60 font-bold text-[10px]">
                    <Heart size={14} className="fill-current" />
                    <span>{poem.echoes} Echoes</span>
                  </div>
                </div>

                <div className="text-center mb-8">
                   <p className="text-2xl leading-loose text-ink-wet mb-6" style={{ fontFamily: "var(--font-amiri), serif", direction: "rtl" }}>
                     {poem.content}
                   </p>
                   <p className="text-xs italic text-ink-faded">{poem.translation}</p>
                </div>

                <div className="flex justify-center gap-8 pt-4 border-t border-gold/10">
                   <button className="text-ink-faded/50 hover:text-gold transition-all"><MessageSquare size={16} /></button>
                   <button className="text-ink-faded/50 hover:text-gold transition-all"><Share2 size={16} /></button>
                   <button className="text-ink-faded/50 hover:text-gold transition-all"><BookOpen size={16} /></button>
                </div>
              </div>

              {/* Card Shadow */}
              <div 
                className="h-6 w-full opacity-10 -mt-1 relative z-0"
                style={{
                  background: "rgba(0,0,0,0.1)",
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 98% 85%, 95% 95%, 92% 80%, 88% 100%, 85% 85%, 82% 95%, 78% 75%, 75% 100%, 72% 85%, 68% 95%, 65% 80%, 62% 100%, 58% 85%, 55% 95%, 52% 75%, 48% 100%, 45% 85%, 42% 95%, 38% 80%, 35% 100%, 32% 85%, 28% 95%, 25% 75%, 22% 100%, 18% 85%, 15% 95%, 12% 80%, 8% 100%, 5% 85%, 2% 95%, 0% 80%)",
                }}
              />
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}

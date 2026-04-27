"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';



export default function FeaturedDiwans() {
  const t = useTranslations('FeaturedDiwans');
  const locale = useLocale();

  const diwans = [
    { 
      id: 1, 
      title: locale === 'ar' ? "ديوان الحماسة" : "Diwan al-Hamasah", 
      author: locale === 'ar' ? "أبو تمام" : "Abu Tammam", 
      preview: locale === 'ar' ? "السيف أصدق أنباء من الكتب..." : "The sword is more truthful than books..." 
    },
    { 
      id: 2, 
      title: locale === 'ar' ? "رسالة الغفران" : "Epistle of Forgiveness", 
      author: locale === 'ar' ? "المعري" : "Al-Ma'arri", 
      preview: locale === 'ar' ? "ألا في سبيل المجد ما أنا فاعل..." : "Is it not for the sake of glory what I do..." 
    },
    { 
      id: 3, 
      title: locale === 'ar' ? "طوق الحمامة" : "The Ring of the Dove", 
      author: locale === 'ar' ? "ابن حزم" : "Ibn Hazm", 
      preview: locale === 'ar' ? "الحب أعزك الله أوله هزل..." : "Love, may God strengthen you, begins as a jest..." 
    },
    { 
      id: 4, 
      title: locale === 'ar' ? "ديوان الخنساء" : "Diwan al-Khansa", 
      author: locale === 'ar' ? "الخنساء" : "Al-Khansa", 
      preview: locale === 'ar' ? "قذى بعينك أم بالعين عوار..." : "Is there dust in your eye, or a blemish..." 
    },
  ];
  return (
    <section className="py-24 relative overflow-hidden bg-paper-aged/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink-wet font-heading mb-4">
            {t('title')}
          </h2>
          <div className="flex justify-center items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-l from-gold-dim to-transparent" />
            <BookOpen className="w-5 h-5 text-gold" />
            <div className="w-16 h-px bg-gradient-to-r from-gold-dim to-transparent" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {diwans.map((diwan, i) => (
            <motion.div
              key={diwan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer"
            >
              {/* Stacked Paper Effect */}
              <div className="absolute inset-0 bg-paper-dark/20 rounded-md transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-0 bg-paper-dark/40 rounded-md transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300" />
              
              <div 
                className="relative bg-paper p-8 rounded-sm h-full min-h-[280px] flex flex-col transition-all duration-300"
                style={{
                  boxShadow: "2px 4px 15px rgba(0,0,0,0.06)",
                  border: "1px solid rgba(212,175,55,0.1)",
                }}
              >
                {/* Paper fold corner */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-transparent via-paper-dark/20 to-paper-dark/40" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ink-wet font-heading mb-2">
                    {diwan.title}
                  </h3>
                  <p className="text-gold-dim font-sans text-sm mb-6">
                    {diwan.author}
                  </p>
                  <p className="text-ink-faded/80 font-sans leading-relaxed text-sm italic">
                    {diwan.preview}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-ink-faded text-xs border-t border-gold/10 pt-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/60 inline-block" />
                  <span className="font-sans">{t('browse')}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

const poets = [
  { id: 1, name: "محمود درويش", subs: "125K", tagline: "على هذه الأرض ما يستحق الحياة" },
  { id: 2, name: "نزار قباني", subs: "98K", tagline: "قصائد متوحشة" },
  { id: 3, name: "المتنبي", subs: "200K", tagline: "مالئ الدنيا وشاغل الناس" },
  { id: 4, name: "أحمد شوقي", subs: "150K", tagline: "أمير الشعراء" },
  { id: 5, name: "فدوى طوقان", subs: "85K", tagline: "رحلة جبلية رحلة صعبة" },
];

export default function FeaturedPoets() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ink-wet font-heading mb-3">
              أصوات خالدة
            </h2>
            <p className="text-ink-faded font-sans text-lg italic opacity-80">
              شعراء تركوا أثراً في الوجدان
            </p>
          </div>
          <button className="text-gold hover:text-gold-dim transition-colors font-sans text-sm tracking-widest border-b border-gold/30 pb-1">
            عرض الكل
          </button>
        </motion.div>

        {/* Horizontal Scroll Area */}
        <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory">
          {poets.map((poet, i) => (
            <motion.div
              key={poet.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="min-w-[280px] snap-center shrink-0 relative group cursor-pointer"
            >
              {/* Book Spine Aesthetic */}
              <div 
                className="h-[360px] rounded-l-2xl rounded-r-sm p-6 flex flex-col justify-between relative transition-shadow duration-300"
                style={{
                  background: "linear-gradient(to right, var(--paper-dark) 0%, var(--paper) 15%, var(--paper) 100%)",
                  boxShadow: "-8px 0 20px rgba(0,0,0,0.05), inset 4px 0 10px rgba(255,255,255,0.4)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  borderLeft: "4px solid var(--gold-dim)"
                }}
              >
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-l-2xl rounded-r-sm"
                     style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }}
                />
                
                <div className="relative z-10 flex flex-col items-center h-full text-center">
                  {/* Decorative element top */}
                  <div className="w-12 h-px bg-gold/40 mb-8" />
                  
                  <h3 className="text-2xl font-bold text-ink-wet font-heading mb-4">
                    {poet.name}
                  </h3>
                  
                  <p className="text-ink-faded font-sans leading-relaxed text-sm italic mb-auto">
                    "{poet.tagline}"
                  </p>
                  
                  {/* Divider */}
                  <div className="w-full flex justify-center py-6">
                    <span className="w-1 h-1 rounded-full bg-gold/50 mx-1"></span>
                    <span className="w-1 h-1 rounded-full bg-gold/50 mx-1"></span>
                    <span className="w-1 h-1 rounded-full bg-gold/50 mx-1"></span>
                  </div>

                  <div className="flex items-center gap-2 text-ink-faded/80 font-sans text-xs bg-paper-aged px-3 py-1.5 rounded-full border border-gold/10">
                    <Users className="w-3.5 h-3.5" />
                    <span>{poet.subs} مشترك</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Custom styles for hiding scrollbar but keeping functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

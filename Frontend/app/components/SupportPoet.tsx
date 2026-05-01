"use client";

import { motion } from "framer-motion";
import { Check, Feather } from "lucide-react";

export default function SupportPoet() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--paper)" }}>
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="h-[2px] w-12 bg-gold-dim/30" />
             <span className="text-[10px] tracking-[0.5em] uppercase text-gold-dim">Support the Art</span>
             <div className="h-[2px] w-12 bg-gold-dim/30" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-wet font-heading mb-6" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
            ادعم الشاعر
          </h2>
          <p className="text-ink-faded font-sans text-lg italic max-w-2xl mx-auto" style={{ fontFamily: "var(--font-amiri), serif" }}>
            "الكلمة الصادقة تستحق الدعم. اشترك للوصول إلى القصائد الحصرية والمخطوطات النادرة."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Free Tier — The Scribe's Guest */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 relative border-2 border-ink-wet/10 bg-paper-aged/30 flex flex-col items-center text-center shadow-lg group overflow-hidden"
          >
            {/* Corner ornaments */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-ink-wet/20" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-ink-wet/20" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-ink-wet/20" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-ink-wet/20" />

            <h3 className="text-2xl font-bold text-ink-wet font-heading mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-reem), sans-serif" }}>قارئ عابر</h3>
            <div className="text-sm italic text-ink-faded mb-6" style={{ fontFamily: "var(--font-amiri), serif" }}>The Casual Reader</div>
            
            <div className="text-4xl font-bold font-sans text-ink-wet mb-10 flex items-baseline gap-1">
              <span>مجانًا</span>
            </div>
            
            <ul className="space-y-6 mb-12 font-sans text-ink-faded text-sm w-full">
              {['قراءة القصائد العامة', 'متابعة الشعراء', 'الإعجاب والتعليق'].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 border-b border-ink-wet/5 pb-2">
                  <span className="text-ink-wet opacity-40">✦</span>
                  <span style={{ fontFamily: "var(--font-amiri), serif" }}>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 font-bold tracking-widest uppercase text-xs border-2 border-ink-wet/40 text-ink-wet hover:bg-ink-wet hover:text-paper transition-all duration-500">
              إنشاء حساب
            </button>
          </motion.div>

          {/* Paid Tier — The Poet's Companion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 relative border-4 border-double border-gold/40 shadow-2xl overflow-hidden flex flex-col items-center text-center group"
            style={{ background: "linear-gradient(135deg, var(--paper) 0%, var(--paper-dark) 100%)" }}
          >
            {/* Gold foil corners */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-gold/10 rotate-[-45deg] translate-x-[-50%] translate-y-[-50%]" />
            <div className="absolute top-0 right-0 w-12 h-12 bg-gold/10 rotate-[45deg] translate-x-[50%] translate-y-[-50%]" />
            
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gold text-paper text-[9px] px-4 py-1 uppercase tracking-[0.3em] font-bold shadow-md">
              Most Esteemed
            </div>

            <h3 className="text-2xl font-bold text-ink-wet font-heading mt-6 mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-reem), sans-serif" }}>نديم الشاعر</h3>
            <div className="text-sm italic text-ink-faded mb-6" style={{ fontFamily: "var(--font-amiri), serif" }}>The Poet's Companion</div>
            
            <div className="text-5xl font-bold font-sans text-gold mb-10 flex items-baseline gap-2">
              <span className="text-2xl">$</span>5 <span className="text-xs font-normal text-ink-faded/70 uppercase tracking-widest">/ Month</span>
            </div>
            
            <ul className="space-y-6 mb-12 font-sans text-ink-wet text-sm w-full font-medium">
              {['كل ميزات القارئ العابر', 'الوصول للقصائد الحصرية', 'تحميل المخطوطات (PDF)', 'التواصل المباشر مع الشاعر'].map((item, i) => (
                <li key={i} className="flex items-center justify-center gap-3 border-b border-gold/10 pb-2">
                  <Check className="w-3 h-3 text-gold" strokeWidth={4} />
                  <span style={{ fontFamily: "var(--font-amiri), serif" }}>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 font-bold tracking-widest uppercase text-xs bg-ink-wet text-paper hover:bg-gold hover:text-ink-wet transition-all duration-500 shadow-xl">
              ادعم الشاعر
            </button>
            
            {/* Subtle background seal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
               <Feather size={180} strokeWidth={0.5} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

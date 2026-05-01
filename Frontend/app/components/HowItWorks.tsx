"use client";

import { motion } from "framer-motion";
import { Feather, ScrollText, Users } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "اكتب قصيدتك",
    description: "استخدم المحرر العتيق لكتابة أبياتك بروح العصر الذهبي.",
    icon: Feather,
  },
  {
    id: 2,
    title: "انشر ديوانك",
    description: "اجمع قصائدك في ديوان يخلد اسمك في مكتبة صدى القوافي.",
    icon: ScrollText,
  },
  {
    id: 3,
    title: "اجمع القرّاء",
    description: "ابنِ جمهوراً يتذوق شعرك وادعم مسيرتك الأدبية.",
    icon: Users,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--paper-aged)" }}>
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }}
      />

      {/* Ornate Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-gold-dim mb-4 block">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-wet font-heading mb-6" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
            كيف تعمل المخطوطة
          </h2>
          <div className="flex items-center justify-center gap-4">
             <div className="h-px w-8 bg-gold-dim opacity-30" />
             <p className="text-ink-faded font-sans text-lg italic" style={{ fontFamily: "var(--font-amiri), serif" }}>
               ثلاث خطوات لتخليد حروفك
             </p>
             <div className="h-px w-8 bg-gold-dim opacity-30" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Parchment Card Effect */}
              <div className="relative p-10 bg-paper border border-gold/15 shadow-xl transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-gold/10 overflow-hidden">
                {/* Burned/Aged edges corners */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/20" />
                
                {/* Step Number Seal */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-ink-wet flex items-center justify-center text-paper font-bold shadow-lg border-2 border-gold/30 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-sm">0{step.id}</span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-8 relative flex items-center justify-center text-gold">
                    <step.icon className="w-8 h-8" strokeWidth={1} />
                    {/* Subtle ink blot */}
                    <div className="absolute inset-0 bg-gold/5 blur-lg rounded-full" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ink-wet font-heading mb-4" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-ink-faded font-sans leading-relaxed text-base" style={{ fontFamily: "var(--font-amiri), serif" }}>
                    {step.description}
                  </p>
                </div>

                {/* Texture overlay for the card */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.5\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Torn Edge Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 z-20 pointer-events-none opacity-50"
        style={{
          background: "var(--paper)",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 98% 15%, 95% 5%, 92% 20%, 88% 0%, 85% 15%, 82% 5%, 78% 25%, 75% 0%, 72% 15%, 68% 5%, 65% 20%, 62% 0%, 58% 15%, 55% 5%, 52% 25%, 48% 0%, 45% 15%, 42% 5%, 38% 20%, 35% 0%, 32% 15%, 28% 5%, 25% 25%, 22% 0%, 18% 15%, 15% 5%, 12% 20%, 8% 0%, 5% 15%, 2% 5%, 0% 20%)",
        }}
      />
    </section>
  );
}

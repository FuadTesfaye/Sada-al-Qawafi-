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
    <section className="py-24 relative overflow-hidden border-y border-gold/10">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink-wet font-heading mb-4">
            كيف تعمل المخطوطة
          </h2>
          <p className="text-ink-faded font-sans text-lg">
            ثلاث خطوات لتخليد حروفك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 mb-6 rounded-full relative flex items-center justify-center bg-paper-aged border border-gold/20 group-hover:bg-gold/5 transition-colors duration-500">
                <div className="absolute inset-0 rounded-full border border-gold/10 scale-110 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
                <step.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-ink-wet font-heading mb-3">
                {step.title}
              </h3>
              <p className="text-ink-faded font-sans leading-relaxed text-sm max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

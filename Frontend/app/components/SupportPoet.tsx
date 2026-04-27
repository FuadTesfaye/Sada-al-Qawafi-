"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function SupportPoet() {
  return (
    <section className="py-24 relative bg-paper">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-ink-wet font-heading mb-4">
            ادعم الشاعر
          </h2>
          <p className="text-ink-faded font-sans text-lg">
            الكلمة الصادقة تستحق الدعم. اشترك للوصول إلى القصائد الحصرية والمخطوطات النادرة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-ink-faded/10 bg-paper-aged/50"
          >
            <h3 className="text-xl font-bold text-ink font-heading mb-2">قارئ عابر</h3>
            <div className="text-3xl font-bold font-sans text-ink-wet mb-6">مجانًا</div>
            
            <ul className="space-y-4 mb-8 font-sans text-ink-faded text-sm">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-ink-faded/50" />
                <span>قراءة القصائد العامة</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-ink-faded/50" />
                <span>متابعة الشعراء</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-ink-faded/50" />
                <span>الإعجاب والتعليق</span>
              </li>
            </ul>
            
            <button className="w-full py-3 rounded-md font-sans border border-ink/20 text-ink hover:bg-ink/5 transition-colors">
              إنشاء حساب
            </button>
          </motion.div>

          {/* Paid Tier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-gold/40 relative shadow-[0_8px_30px_rgba(212,175,55,0.1)] overflow-hidden"
            style={{ background: "linear-gradient(145deg, var(--paper) 0%, var(--paper-dark) 100%)" }}
          >
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="absolute top-4 left-4 bg-gold/20 text-gold-dim text-xs px-3 py-1 rounded-full font-sans border border-gold/30">
              الموصى به
            </div>

            <h3 className="text-xl font-bold text-ink-wet font-heading mb-2 relative z-10">نديم الشاعر</h3>
            <div className="text-3xl font-bold font-sans text-gold-dim mb-6 relative z-10">
              $5 <span className="text-sm font-normal text-ink-faded">/ شهرياً</span>
            </div>
            
            <ul className="space-y-4 mb-8 font-sans text-ink text-sm relative z-10">
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold" strokeWidth={3} />
                <span className="font-bold">كل ميزات القارئ العابر</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold" strokeWidth={3} />
                <span>الوصول للقصائد الحصرية</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold" strokeWidth={3} />
                <span>تحميل الدواوين كملفات PDF</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-4 h-4 text-gold" strokeWidth={3} />
                <span>التواصل المباشر مع الشاعر</span>
              </li>
            </ul>
            
            <button className="w-full py-3 rounded-md font-sans bg-ink text-paper hover:bg-ink-wet transition-colors relative z-10 shadow-lg font-bold">
              ادعم الشاعر
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

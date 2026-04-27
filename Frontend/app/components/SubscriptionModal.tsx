"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";

export default function SubscriptionModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="w-full max-w-md bg-paper rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />

          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 p-2 text-ink-faded hover:text-ink transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSuccess ? (
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20">
                   <span className="text-2xl font-heading text-gold">ن</span>
                </div>
                <h2 className="text-2xl font-bold font-heading text-ink-wet mb-2">نديم الشاعر</h2>
                <p className="text-ink-faded font-sans text-sm">اشترك للوصول إلى كل قصائد محمود درويش</p>
              </div>

              <div className="bg-paper-aged rounded-xl p-5 mb-8 border border-gold/10 text-center">
                <div className="text-3xl font-bold font-sans text-ink-wet mb-1">
                  $5 <span className="text-base font-normal text-ink-faded">/ شهرياً</span>
                </div>
                <p className="text-xs font-sans text-ink-faded/80">يجدد تلقائياً، يمكنك الإلغاء في أي وقت</p>
              </div>

              <ul className="space-y-4 mb-8">
                {['قصائد حصرية جديدة أسبوعياً', 'الوصول لأرشيف الدواوين الكامل', 'التعليق والمناقشة'].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-sans text-ink">
                    <Check className="w-4 h-4 text-gold flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setIsSuccess(true)}
                className="w-full py-3 bg-ink text-paper rounded-lg font-bold font-sans hover:bg-ink-wet transition-colors shadow-md"
              >
                تأكيد الاشتراك
              </button>
            </div>
          ) : (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
             >
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ type: "spring", delay: 0.2 }}
                 className="w-20 h-20 bg-gold rounded-full flex items-center justify-center text-paper mb-6 shadow-lg"
               >
                 <Check className="w-10 h-10" strokeWidth={3} />
               </motion.div>
               <h2 className="text-3xl font-bold font-heading text-ink-wet mb-4">تم فتح المخطوطة</h2>
               <p className="text-ink-faded font-sans mb-8">شكراً لدعمك. يمكنك الآن قراءة جميع القصائد.</p>
               <button 
                 onClick={() => setIsOpen(false)}
                 className="px-8 py-3 bg-paper-aged border border-gold/30 text-ink rounded-full font-bold font-sans hover:bg-gold/10 transition-colors"
               >
                 ابدأ القراءة
               </button>
             </motion.div>
          )}

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

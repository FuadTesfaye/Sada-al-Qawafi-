"use client";

import { motion } from "framer-motion";
import { Feather, Mail, Lock, ArrowRight, Home } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';

export default function LoginPage() {
  const t = useTranslations('Login');
  const locale = useLocale();
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Texture is handled by globals.css body::before */}
      
      {/* Home Link */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 flex items-center gap-2 text-ink-faded hover:text-ink-wet transition-colors z-20"
      >
        <Home size={18} strokeWidth={1.5} />
        <span className="text-xs uppercase tracking-widest font-bold">Home</span>
      </Link>

      {/* Decorative Floating Ahruf (Background) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] select-none z-0">
        <span className="absolute top-[10%] left-[15%] text-9xl font-heading">ع</span>
        <span className="absolute bottom-[15%] right-[20%] text-9xl font-heading">ق</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        {/* The Scroll / Manuscript Container */}
        <div className="relative p-12 bg-paper border border-gold/20 shadow-2xl overflow-hidden">
          {/* Ornate corner ornaments */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/30" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/30" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/30" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/30" />

          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ink-wet/5 border border-gold/20 mb-6"
            >
              <Feather className="text-gold w-8 h-8" strokeWidth={1} />
            </motion.div>
            <h1 className="text-3xl font-bold text-ink-wet font-heading mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
              {t('title')}
            </h1>
            <p className="text-ink-faded font-sans italic text-sm" style={{ fontFamily: "var(--font-amiri), serif" }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Form */}
          <form 
            className="space-y-8" 
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/feed');
            }}
          >
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold-dim font-bold block mb-2 px-1">
                {t('email')}
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold transition-colors" strokeWidth={1.5} />
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold py-3 pl-10 pr-4 outline-none text-ink-wet font-sans transition-all placeholder:text-ink-faded/30"
                  placeholder="scribe@archives.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center mb-2 px-1">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold-dim font-bold block">
                  {t('password')}
                </label>
                <a href="#" className="text-[9px] uppercase tracking-[0.1em] text-ink-faded hover:text-gold transition-colors">
                  {t('forgotPassword')}
                </a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold transition-colors" strokeWidth={1.5} />
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold py-3 pl-10 pr-4 outline-none text-ink-wet font-sans transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 mt-8 bg-ink-wet text-paper font-bold uppercase tracking-[0.4em] text-xs shadow-xl hover:bg-gold hover:text-ink-wet transition-all duration-500 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t('signIn')}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </form>

          {/* Footer of the scroll */}
          <div className="mt-12 text-center">
            <p className="text-xs text-ink-faded font-sans" style={{ fontFamily: "var(--font-amiri), serif" }}>
              {t('noAccount')} <a href="#" className="text-gold font-bold hover:underline">{t('signUp')}</a>
            </p>
          </div>
          
          {/* Subtle ink blot in corner */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-ink-wet/5 blur-3xl rounded-full -z-10" />
        </div>

        {/* Torn Edge Effect below the form */}
        <div 
          className="h-8 w-full opacity-40 -mt-2 relative z-0"
          style={{
            background: "var(--paper)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 98% 85%, 95% 95%, 92% 80%, 88% 100%, 85% 85%, 82% 95%, 78% 75%, 75% 100%, 72% 85%, 68% 95%, 65% 80%, 62% 100%, 58% 85%, 55% 95%, 52% 75%, 48% 100%, 45% 85%, 42% 95%, 38% 80%, 35% 100%, 32% 85%, 28% 95%, 25% 75%, 22% 100%, 18% 85%, 15% 95%, 12% 80%, 8% 100%, 5% 85%, 2% 95%, 0% 80%)",
          }}
        />
      </motion.div>
    </main>
  );
}

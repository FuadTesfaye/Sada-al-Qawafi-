"use client";

import { motion } from "framer-motion";
import { Feather, Mail, Lock, User, PenTool, ArrowRight, Home } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function SignupPage() {
  const t = useTranslations('Signup');
  const locale = useLocale();

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

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg relative z-10"
      >
        {/* The Scroll / Registry Container */}
        <div className="relative p-12 bg-paper border border-gold/20 shadow-2xl overflow-hidden">
          {/* Ornate border accents */}
          <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ rotate: -15, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-paper-aged border-4 border-double border-gold/20 mb-6 shadow-inner"
            >
              <PenTool className="text-gold w-10 h-10" strokeWidth={1} />
            </motion.div>
            <h1 className="text-3xl font-bold text-ink-wet font-heading mb-3 uppercase tracking-widest" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
              {t('title')}
            </h1>
            <p className="text-ink-faded font-sans italic text-sm" style={{ fontFamily: "var(--font-amiri), serif" }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Name */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold-dim font-bold block mb-2 px-1">
                {t('name')}
              </label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold transition-colors" strokeWidth={1.5} />
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold py-3 pl-10 pr-4 outline-none text-ink-wet font-sans transition-all"
                  placeholder="Zuhair bin Abi Sulma"
                />
              </div>
            </div>

            {/* Pen Name */}
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold-dim font-bold block mb-2 px-1">
                {t('penName')}
              </label>
              <div className="relative group">
                <Feather className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold transition-colors" strokeWidth={1.5} />
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold py-3 pl-10 pr-4 outline-none text-ink-wet font-sans transition-all"
                  placeholder="Al-Hakim"
                />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold-dim font-bold block mb-2 px-1">
                {t('email')}
              </label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold transition-colors" strokeWidth={1.5} />
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold py-3 pl-10 pr-4 outline-none text-ink-wet font-sans transition-all"
                  placeholder="scribe@archives.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold-dim font-bold block mb-2 px-1">
                {t('password')}
              </label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold transition-colors" strokeWidth={1.5} />
                <input 
                  type="password" 
                  className="w-full bg-transparent border-b-2 border-gold/20 focus:border-gold py-3 pl-10 pr-4 outline-none text-ink-wet font-sans transition-all"
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-ink-wet text-paper font-bold uppercase tracking-[0.4em] text-xs shadow-xl hover:bg-gold hover:text-ink-wet transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {t('signUp')}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </div>
          </form>

          {/* Footer of the scroll */}
          <div className="mt-12 text-center">
            <p className="text-xs text-ink-faded font-sans" style={{ fontFamily: "var(--font-amiri), serif" }}>
              {t('alreadyMember')} <Link href="/login" className="text-gold font-bold hover:underline">{t('signIn')}</Link>
            </p>
          </div>
        </div>

        {/* Torn Edge Effect */}
        <div 
          className="h-10 w-full opacity-30 -mt-2 relative z-0"
          style={{
            background: "var(--paper)",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 98% 80%, 95% 90%, 92% 75%, 88% 100%, 85% 80%, 82% 90%, 78% 70%, 75% 100%, 72% 80%, 68% 90%, 65% 75%, 62% 100%, 58% 80%, 55% 90%, 52% 70%, 48% 100%, 45% 80%, 42% 90%, 38% 75%, 35% 100%, 32% 80%, 28% 90%, 25% 70%, 22% 100%, 18% 80%, 15% 90%, 12% 75%, 8% 100%, 5% 80%, 2% 90%, 0% 75%)",
          }}
        />
      </motion.div>
    </main>
  );
}

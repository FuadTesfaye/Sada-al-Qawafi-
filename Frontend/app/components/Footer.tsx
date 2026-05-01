"use client";

import { motion } from "framer-motion";
import { Feather, Mail, Globe, MapPin, Scroll } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden" style={{ background: "var(--paper-aged)" }}>
      {/* Decorative Top Border — Ornate divider */}
      <div className="absolute top-0 left-0 right-0 h-8 pointer-events-none opacity-30">
        <svg width="100%" height="32" viewBox="0 0 1200 32" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 31.5H1200M0 0.5H1200" stroke="var(--gold-dim)" strokeWidth="0.5"/>
          <path d="M600 0V32" stroke="var(--gold-dim)" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          
          {/* Brand Column — The Colophon */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <div className="flex items-center gap-3">
              <Feather className="w-6 h-6 text-gold" />
              <span className="text-2xl font-bold text-ink-wet uppercase tracking-widest" style={{ fontFamily: "var(--font-reem), sans-serif" }}>
                Sada al-Qawafi
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ink-faded italic max-w-xs" style={{ fontFamily: "var(--font-amiri), serif" }}>
              "Where every ink drop carries the weight of a thousand years, and every verse is a bridge between the mortal and the eternal."
            </p>
            <div className="flex gap-5">
              {[Feather, Scroll, Globe].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#" 
                  whileHover={{ y: -3, color: "var(--gold)" }}
                  className="text-ink-faded transition-colors"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Center Column — Navigation in old-print style */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-[10px] tracking-[0.4em] uppercase text-gold-dim">Sections</span>
              <div className="h-px w-12 bg-gold-dim opacity-40" />
            </div>
            <nav className="grid grid-cols-2 gap-x-12 gap-y-4">
              {['Library', 'The Scribe', 'Poets', 'Diwans', 'Journal', 'Archive'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-sm text-ink-faded hover:text-ink-wet transition-all uppercase tracking-widest hover:tracking-[0.15em] duration-300"
                  style={{ fontFamily: "var(--font-amiri), serif" }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column — The Seal */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-6">
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex items-center gap-2 text-ink-faded">
                <span className="text-xs uppercase tracking-widest">Correspondence</span>
                <Mail size={14} className="text-gold-dim" />
              </div>
              <p className="text-sm text-ink-wet font-medium tracking-wide">letters@sada-qawafi.com</p>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <div className="flex items-center gap-2 text-ink-faded">
                <span className="text-xs uppercase tracking-widest">Location</span>
                <MapPin size={14} className="text-gold-dim" />
              </div>
              <p className="text-sm text-ink-wet font-medium tracking-wide">Baghdad • Cairo • Cordoba</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar — Copyright & Credits */}
        <div className="mt-20 pt-8 border-t border-gold-dim/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-ink-faded/60">
            © MMXXVI SADA AL-QAWAFI • All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-ink-faded/60 hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-ink-faded/60 hover:text-gold transition-colors">Terms</a>
            <div className="flex items-center gap-2 ml-4">
               <Globe size={10} className="text-gold-dim" />
               <span className="text-[10px] uppercase tracking-[0.2em] text-ink-faded/60">Global Presence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Ornament — Large faint seal */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 pointer-events-none opacity-[0.03] select-none">
        <svg viewBox="0 0 200 200" fill="var(--ink-wet)">
          <path d="M100 0 C155 0 200 45 200 100 C200 155 155 200 100 200 C45 200 0 155 0 100 C0 45 45 0 100 0 M100 20 C56 20 20 56 20 100 C20 144 56 180 100 180 C144 180 180 144 180 100 C180 56 144 20 100 20" />
          <path d="M100 40 L110 90 L160 100 L110 110 L100 160 L90 110 L40 100 L90 90 Z" />
        </svg>
      </div>
    </footer>
  );
}

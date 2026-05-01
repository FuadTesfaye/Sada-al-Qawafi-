"use client";

import { motion } from "framer-motion";
import { 
  Settings, 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Globe, 
  ShieldCheck,
  PenTool,
  Save
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import ScribeSidebar from "@/app/components/ScribeSidebar";

export default function SettingsPage() {
  const t = useTranslations('Settings');
  const locale = useLocale();

  const sections = [
    {
      title: "Scribe's Identity",
      icon: User,
      fields: ["Pen Name", "Public Bio", "Location"]
    },
    {
      title: "Security & Keys",
      icon: Lock,
      fields: ["Cipher (Password)", "Two-Factor Auth"]
    },
    {
      title: "Atmosphere",
      icon: Palette,
      fields: ["Parchment Texture", "Ink Bleed Intensity", "Night Mode"]
    },
    {
      title: "Delivery (Notifications)",
      icon: Bell,
      fields: ["Email Digests", "Echo Alerts", "Circle Updates"]
    }
  ];

  return (
    <div className="min-h-screen flex bg-paper relative">
      <ScribeSidebar />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 pb-32">
        <header className="mb-16">
          <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest flex items-center gap-4">
            <Settings className="text-gold" />
            Scribe Settings
          </h1>
          <p className="text-sm italic text-ink-faded mt-2" style={{ fontFamily: "var(--font-amiri), serif" }}>
            Configure your pen, your ink, and your presence in the archives.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper border border-gold/20 p-8 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 bg-paper-aged border border-gold/10 text-gold">
                  <section.icon size={20} strokeWidth={1.5} />
                </div>
                <h2 className="text-sm font-bold text-ink-wet uppercase tracking-widest">{section.title}</h2>
              </div>

              <div className="space-y-6">
                {section.fields.map(field => (
                  <div key={field} className="flex justify-between items-center group cursor-pointer border-b border-gold/5 pb-4 hover:border-gold/30 transition-colors">
                    <span className="text-xs text-ink-faded font-sans">{field}</span>
                    <PenTool size={12} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>

              {/* Decorative Seal */}
              <div className="absolute -bottom-4 -right-4 opacity-[0.03] pointer-events-none">
                <section.icon size={100} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-4 px-12 py-4 bg-ink-wet text-paper text-xs font-bold uppercase tracking-[0.5em] hover:bg-gold hover:text-ink-wet transition-all shadow-2xl relative group overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <Save size={16} />
              Seal Changes
            </span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </div>
      </main>
    </div>
  );
}

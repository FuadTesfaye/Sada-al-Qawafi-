"use client";

import { motion } from "framer-motion";
import { 
  Bell, 
  Heart, 
  MessageSquare, 
  UserPlus, 
  Feather,
  MailOpen,
  MoreVertical
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import ScribeSidebar from "@/app/components/ScribeSidebar";

export default function NotificationsPage() {
  const t = useTranslations('Notifications');
  const locale = useLocale();

  const echoes = [
    {
      id: 1,
      type: "like",
      user: "Al-Khansa",
      content: "echoed your manuscript 'The Silent Desert'.",
      time: "12 minutes ago",
      icon: Heart,
      iconColor: "text-red-500",
      read: false
    },
    {
      id: 2,
      type: "comment",
      user: "Antara",
      content: "recited a new verse on your wall: 'Truly, the ink of scholars is holier than the blood of martyrs.'",
      time: "1 hour ago",
      icon: MessageSquare,
      iconColor: "text-gold",
      read: false
    },
    {
      id: 3,
      type: "follow",
      user: "Imru al-Qais",
      content: "joined your circle of peers.",
      time: "Yesterday",
      icon: UserPlus,
      iconColor: "text-ink-wet",
      read: true
    }
  ];

  return (
    <div className="min-h-screen flex bg-paper relative">
      <ScribeSidebar />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest flex items-center gap-4">
            <Bell className="text-gold" />
            Echoes & Alerts
          </h1>
          <p className="text-sm italic text-ink-faded mt-2" style={{ fontFamily: "var(--font-amiri), serif" }}>
            The vibrations of the world reaching your study.
          </p>
        </header>

        <div className="space-y-6">
          {echoes.map((echo, i) => (
            <motion.div
              key={echo.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 border border-gold/10 shadow-lg group transition-all hover:bg-paper-aged/20 ${!echo.read ? 'bg-paper border-l-4 border-l-gold' : 'bg-paper-aged/10'}`}
            >
              <div className="flex gap-6 items-start">
                <div className={`p-3 rounded-full bg-paper-aged border border-gold/10 ${echo.iconColor}`}>
                  <echo.icon size={20} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-bold text-ink-wet">
                      <span className="text-gold hover:underline cursor-pointer">{echo.user}</span>
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest text-ink-faded/50 font-bold">{echo.time}</span>
                  </div>
                  <p className="text-sm text-ink-faded italic leading-relaxed" style={{ fontFamily: "var(--font-amiri), serif" }}>
                    {echo.content}
                  </p>
                </div>
                <button className="text-ink-faded/30 hover:text-ink-wet opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical size={16} />
                </button>
              </div>

              {/* Decorative faint icon */}
              <div className="absolute top-0 right-0 p-2 opacity-[0.03] pointer-events-none">
                <echo.icon size={80} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold hover:text-ink-wet transition-all flex items-center gap-3 mx-auto">
            <MailOpen size={14} />
            Mark all archives as read
          </button>
        </div>
      </main>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  UserPlus, 
  MessageCircle, 
  MoreVertical,
  Feather,
  Check
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import ScribeSidebar from "@/app/components/ScribeSidebar";
import { useState } from "react";

export default function PeersPage() {
  const t = useTranslations('Peers');
  const locale = useLocale();

  const [peers, setPeers] = useState([
    { id: 1, name: "Mahmoud Darwish", title: "Prince of Resistance", following: true, followers: "1.2M" },
    { id: 2, name: "Al-Khansa", title: "Poetess of Elegies", following: true, followers: "800K" },
    { id: 3, name: "Nizar Qabbani", title: "The Poet of Love", following: false, followers: "2.4M" },
    { id: 4, name: "Adonis", title: "The Modernist", following: false, followers: "450K" },
  ]);

  const toggleFollow = (id: number) => {
    setPeers(peers.map(p => p.id === id ? { ...p, following: !p.following } : p));
  };

  return (
    <div className="min-h-screen flex bg-paper relative">
      <ScribeSidebar activeTab="following" />

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 pb-32">
        <header className="mb-16">
          <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest flex items-center gap-4">
            <Users className="text-gold" />
            Circle of Peers
          </h1>
          <p className="text-sm italic text-ink-faded mt-2" style={{ fontFamily: "var(--font-amiri), serif" }}>
            The gathering of scribes and poets whose voices resonate together.
          </p>
        </header>

        {/* Search Peers */}
        <div className="relative group mb-12 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40 group-focus-within:text-gold" />
          <input 
            type="text" 
            placeholder="Seek a specific scribe..."
            className="w-full bg-paper-aged/30 border-b-2 border-gold/10 py-3 pl-10 pr-4 text-xs outline-none focus:border-gold transition-all"
          />
        </div>

        {/* Peers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {peers.map((peer, i) => (
            <motion.div
              key={peer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-paper border border-gold/10 p-6 shadow-xl relative group overflow-hidden"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-ink-wet border-2 border-gold/20 flex items-center justify-center text-paper text-2xl font-heading shadow-inner">
                  {peer.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-ink-wet uppercase tracking-widest">{peer.name}</h3>
                  <p className="text-[10px] text-gold-dim font-bold tracking-widest mb-2">{peer.title}</p>
                  <p className="text-[9px] text-ink-faded/50 uppercase tracking-tighter">{peer.followers} followers</p>
                </div>
                <div className="flex flex-col gap-3">
                   <button 
                    onClick={() => toggleFollow(peer.id)}
                    className={`p-2 rounded-full transition-all border ${peer.following ? 'bg-gold border-gold text-paper' : 'border-gold/30 text-gold hover:bg-gold/5'}`}
                   >
                     {peer.following ? <Check size={16} /> : <UserPlus size={16} />}
                   </button>
                   <button className="p-2 border border-gold/30 text-gold hover:bg-gold/5 rounded-full transition-all">
                     <MessageCircle size={16} />
                   </button>
                </div>
              </div>
              
              {/* Subtle ink blot */}
              <div className="absolute -bottom-2 -right-2 opacity-[0.03] pointer-events-none">
                <Feather size={60} />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Feather, 
  MapPin, 
  Link as LinkIcon, 
  Calendar, 
  Edit3, 
  Share2, 
  MoreVertical,
  Heart,
  MessageSquare
} from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { useState } from "react";
import ScribeSidebar from "@/app/components/ScribeSidebar";

export default function ProfilePage() {
  const t = useTranslations('Profile');
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock User Data
  const scribe = {
    name: "Fuad Al-Qawafi",
    penName: "The Desert Scribe",
    bio: "Weaving verses from the threads of history. Seeking the eternal in the ephemeral ink.",
    location: "Cordoba Archives",
    joined: "Since Rajab 1445",
    followers: "12.4K",
    following: "840",
    manuscripts: "156"
  };

  const myPoems = [
    {
      id: 101,
      content: "ما كل ما يتمنى المرء يدركه.. تجري الرياح بما لا تشتهي السفنُ",
      translation: "Not everything a man wishes for is attained.. the winds blow as the ships do not desire.",
      likes: "3.2K",
      comments: "120",
      time: "2 days ago",
      parchmentColor: "#FDF5E6"
    },
    {
      id: 102,
      content: "وإذا أتتك مذمتي من ناقص.. فهي الشهادة لي بأني كاملُ",
      translation: "If my blame comes to you from an imperfect person.. then it is a testimony for me that I am perfect.",
      likes: "1.5K",
      comments: "45",
      time: "1 week ago",
      parchmentColor: "#F5E6C4"
    }
  ];

  return (
    <div className="min-h-screen flex bg-paper relative">
      {/* Reusable Sidebar */}
      <ScribeSidebar />

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 pb-32">
        
        {/* Profile Header (The Seal) */}
        <section className="mb-16 relative">
          <div className="bg-paper border-2 border-double border-gold/30 shadow-2xl relative overflow-hidden">
            {/* Header Banner Background */}
            <div className="h-48 w-full bg-paper-aged/50 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />
               <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-paper to-transparent" />
            </div>

            <div className="px-10 pb-10 -mt-16 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
                  {/* Large Profile Seal */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-36 h-36 rounded-full bg-ink-wet border-4 border-paper shadow-2xl flex items-center justify-center text-paper text-5xl font-heading relative group"
                  >
                    F
                    <div className="absolute inset-0 rounded-full border border-gold/20 scale-105" />
                    <button className="absolute bottom-1 right-1 p-2 bg-gold text-ink-wet rounded-full border-2 border-paper opacity-0 group-hover:opacity-100 transition-opacity">
                      <Edit3 size={14} />
                    </button>
                  </motion.div>
                  
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold text-ink-wet font-heading uppercase tracking-widest">{scribe.name}</h1>
                    <p className="text-gold-dim text-sm font-bold uppercase tracking-[0.3em] mb-4">{scribe.penName}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-ink-faded/60 font-sans">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {scribe.location}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} /> {scribe.joined}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button className="px-8 py-3 bg-ink-wet text-paper text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-ink-wet transition-all shadow-lg">
                    Edit Seal
                  </button>
                  <button className="p-3 border border-gold/20 text-gold hover:bg-gold/5 transition-all">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-10 max-w-2xl">
                <p className="text-lg italic text-ink-wet leading-relaxed" style={{ fontFamily: "var(--font-amiri), serif" }}>
                  "{scribe.bio}"
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 flex gap-10 border-t border-gold/10 pt-8">
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-ink-wet font-heading">{scribe.manuscripts}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-dim font-bold">Manuscripts</span>
                </div>
                <div className="flex flex-col cursor-pointer group">
                  <span className="text-xl font-bold text-ink-wet font-heading group-hover:text-gold transition-colors">{scribe.followers}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-dim font-bold">Followers</span>
                </div>
                <div className="flex flex-col cursor-pointer group">
                  <span className="text-xl font-bold text-ink-wet font-heading group-hover:text-gold transition-colors">{scribe.following}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-dim font-bold">Following</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <div className="flex gap-8 mb-12 border-b border-gold/10">
          {["Manuscripts", "Recitations", "Echoes"].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveFilter(tab.toLowerCase())}
              className={`pb-4 text-xs font-bold uppercase tracking-[0.3em] transition-all relative ${
                activeFilter === tab.toLowerCase() ? 'text-ink-wet' : 'text-ink-faded/50 hover:text-ink-wet'
              }`}
            >
              {tab}
              {activeFilter === tab.toLowerCase() && (
                <motion.div layoutId="profileTab" className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
              )}
            </button>
          ))}
        </div>

        {/* Post Feed */}
        <div className="space-y-16">
          {myPoems.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div 
                className="relative p-12 shadow-xl border border-gold/10 overflow-hidden"
                style={{ background: post.parchmentColor }}
              >
                <div className="flex justify-between items-start mb-10">
                   <span className="text-[9px] uppercase tracking-widest text-ink-faded/50 font-bold">{post.time}</span>
                   <button className="text-ink-faded/30 hover:text-ink-wet"><MoreVertical size={16} /></button>
                </div>
                <div className="text-center px-6">
                   <p className="text-2xl leading-loose text-ink-wet mb-10" style={{ fontFamily: "var(--font-amiri), serif", direction: "rtl" }}>
                     {post.content}
                   </p>
                   <p className="text-sm italic text-ink-faded">{post.translation}</p>
                </div>
                <div className="flex justify-center gap-12 mt-10 pt-6 border-t border-gold/10">
                   <div className="flex items-center gap-2 text-ink-faded/60">
                     <Heart size={14} />
                     <span className="text-[10px] font-bold">{post.likes}</span>
                   </div>
                   <div className="flex items-center gap-2 text-ink-faded/60">
                     <MessageSquare size={14} />
                     <span className="text-[10px] font-bold">{post.comments}</span>
                   </div>
                </div>
                
                {/* Torn edge decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/5" />
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}

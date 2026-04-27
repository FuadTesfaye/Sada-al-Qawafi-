"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Mail } from "lucide-react";

export default function PoetProfile() {
  const [activeTab, setActiveTab] = useState("poems");

  return (
    <div className="min-h-screen bg-paper pb-20">
      {/* Cover / Header Area (Cleaner, Substack-style but themed) */}
      <div className="pt-24 pb-12 border-b border-ink/5">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-paper-dark border-4 border-paper shadow-md mb-6 flex items-center justify-center overflow-hidden">
             <span className="font-heading text-4xl text-ink-faded/40">م</span>
          </div>
          
          <h1 className="text-3xl font-bold font-heading text-ink-wet mb-2">محمود درويش</h1>
          <p className="text-ink-faded font-sans text-lg mb-6 max-w-xl mx-auto">
            شاعر المقاومة والوطن. أكتب عن الأرض، الحب، والمنفى.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8 text-sm font-sans text-ink-faded">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>125,000 مشترك</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-ink text-paper rounded-full font-bold font-sans hover:bg-ink-wet transition-colors shadow-lg">
              اشترك الآن
            </button>
            <button className="p-3 border border-ink/20 text-ink rounded-full hover:bg-ink/5 transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-3xl mx-auto px-5 mt-10">
        {/* Tabs */}
        <div className="flex justify-center gap-8 border-b border-ink/10 mb-10">
          {["الدواوين", "القصائد", "المميزة"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-sans font-bold transition-colors relative ${
                activeTab === tab ? "text-ink" : "text-ink-faded hover:text-ink"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink"
                />
              )}
            </button>
          ))}
        </div>

        {/* Feed - Clear, reading focused */}
        <div className="space-y-12">
          {[1, 2, 3].map((post) => (
            <article key={post} className="group cursor-pointer">
              <div className="text-xs text-ink-faded font-sans mb-2">منذ يومين • ديوان الجدارية</div>
              <h2 className="text-2xl font-bold font-heading text-ink-wet mb-3 group-hover:text-gold transition-colors">
                أيها المارون بين الكلمات العابرة
              </h2>
              <p className="text-ink font-sans leading-relaxed opacity-80 mb-4 line-clamp-3">
                أيها المارون بين الكلمات العابرة.. احملوا أسماءكم وانصرفوا واسحبوا ساعاتكم من وقتنا، و انصرفوا وخذوا ما شئتم من زرقة البحر و رمل الذاكرة...
              </p>
              <div className="text-gold-dim font-sans text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                اقرأ المزيد <span>←</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Save, PenTool } from "lucide-react";

export default function WriterDesk() {
  const [content, setContent] = useState("");
  const [isAiWriting, setIsAiWriting] = useState(false);

  const triggerAi = () => {
    setIsAiWriting(true);
    // Simulate gradual ink writing
    const text = "وما زلت أبحث في مقلتيك\nعن وطن ضائع في الدروب\n";
    let i = 0;
    setContent(""); // Clear before rewrite
    
    const interval = setInterval(() => {
      setContent(prev => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsAiWriting(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-ink-wet flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Wood Desk Texture Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"wood\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.05 0.5\" numOctaves=\"3\" result=\"noise\"/%3E%3CfeColorMatrix type=\"matrix\" values=\"1 0 0 0 0.5  0 1 0 0 0.3  0 0 1 0 0.1  0 0 0 1 0\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23wood)\"/%3E%3C/svg%3E')", backgroundSize: "cover" }} />

      {/* The Paper Sheet */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-3xl min-h-[70vh] bg-paper shadow-2xl relative p-12 md:p-20 z-10"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(180,155,110,0.1)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />

        {/* Paper Header Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
           <button className="text-ink-faded hover:text-ink transition-colors flex items-center gap-2 text-sm font-sans">
             <Save className="w-4 h-4" /> حفظ
           </button>
           
           <button 
             onClick={triggerAi}
             disabled={isAiWriting}
             className="flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold-dim hover:bg-gold/20 rounded-full text-sm font-sans transition-colors"
           >
             <Sparkles className="w-4 h-4" />
             استعن بالورّاق
           </button>
        </div>

        {/* Editor Area */}
        <div className="mt-8 flex flex-col h-full">
          <input 
            type="text" 
            placeholder="عنوان القصيدة"
            className="w-full bg-transparent text-3xl font-bold font-heading text-ink-wet text-center mb-12 focus:outline-none placeholder:text-ink-faded/30"
          />
          
          <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="ابدأ بكتابة أبياتك هنا..."
            className="w-full flex-1 bg-transparent resize-none text-xl md:text-2xl font-sans text-ink leading-loose text-center focus:outline-none placeholder:text-ink-faded/20"
            style={{ 
              lineHeight: "2.5",
              backgroundImage: "repeating-linear-gradient(transparent, transparent 39px, rgba(212,175,55,0.1) 39px, rgba(212,175,55,0.1) 40px)",
              backgroundAttachment: "local",
            }}
          />
        </div>

        {/* Ink pot decoration bottom right */}
        <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none">
          <PenTool className="w-12 h-12 text-ink" />
        </div>
      </motion.div>
    </div>
  );
}

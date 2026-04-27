"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Bookmark, Share2, ChevronRight, ChevronLeft } from "lucide-react";

export default function BookReader() {
  const [isOpen, setIsOpen] = useState(true); // Assuming opened for demo
  const [currentPage, setCurrentPage] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-ink-wet/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
      >
        {/* Top Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-paper/10 text-paper hover:bg-paper/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex gap-4">
            <button className="p-2 rounded-full bg-paper/10 text-paper hover:bg-paper/20 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-paper/10 text-paper hover:bg-paper/20 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 rounded-full bg-gold text-ink font-bold font-sans text-sm hover:bg-gold-dim transition-colors shadow-lg">
              ادعم الشاعر
            </button>
          </div>
        </div>

        {/* The Book Container */}
        <motion.div 
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-5xl h-[85vh] flex shadow-2xl rounded-sm"
          style={{ perspective: "2000px" }}
        >
          {/* Book Spine Center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 z-20 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />

          {/* Right Page (Start in RTL) */}
          <div 
            className="flex-1 bg-paper h-full relative overflow-hidden flex flex-col justify-between"
            style={{ 
              borderRadius: "2px 8px 8px 2px",
              boxShadow: "inset 10px 0 20px rgba(0,0,0,0.05)",
            }}
          >
            <PageContent 
              title="قصيدة الروح"
              lines={[
                { right: "تذكرت والذكرى تهيج مشاعري", left: "زماناً تولى في ظلال المآثر" },
                { right: "وقلباً شجياً لا يقر قراره", left: "كأن به ناراً بغير شرارِ" },
                { right: "أيا ليت أيام الوصال تعود لي", left: "فأطفي بها شوقي وحر أواري" },
              ]}
              pageNum={1}
            />
          </div>

          {/* Left Page */}
          <div 
            className="flex-1 bg-paper h-full relative overflow-hidden flex flex-col justify-between"
            style={{ 
              borderRadius: "8px 2px 2px 8px",
              boxShadow: "inset -10px 0 20px rgba(0,0,0,0.05)",
            }}
          >
            <PageContent 
              title=""
              lines={[
                { right: "وما زال طيف منك يغشى نواظري", left: "ويسري مع الأنفاس سر الأسارِ" },
                { right: "فإن غبت عن عيني فشخصك حاضر", left: "بقلبي وروحي في دياجي الدياجرِ" },
              ]}
              pageNum={2}
            />
          </div>

          {/* Navigation Overlay Areas */}
          <div className="absolute inset-y-0 right-0 w-1/4 cursor-w-resize group flex items-center justify-end pr-4">
            <div className="w-10 h-10 rounded-full bg-black/5 text-ink-faded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ChevronRight className="w-6 h-6" />
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-1/4 cursor-e-resize group flex items-center justify-start pl-4">
             <div className="w-10 h-10 rounded-full bg-black/5 text-ink-faded flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <ChevronLeft className="w-6 h-6" />
            </div>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PageContent({ title, lines, pageNum }: { title: string, lines: {right:string, left:string}[], pageNum: number }) {
  return (
    <>
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noise\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.7\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noise)\"/%3E%3C/svg%3E')" }} />
      
      <div className="p-12 md:p-16 flex-1 flex flex-col relative z-10">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold font-heading text-ink-wet mb-4">{title}</h2>
            <div className="w-12 h-px bg-gold mx-auto" />
          </div>
        )}

        <div className="space-y-8 flex-1 flex flex-col justify-center">
          {lines.map((line, i) => (
            <div key={i} className="flex justify-between items-center w-full max-w-md mx-auto text-lg md:text-xl text-ink font-sans leading-loose">
              <span className="w-[45%] text-left">{line.right}</span>
              {/* Decorative divider between verses */}
              <span className="w-[10%] flex justify-center text-gold/40 text-sm opacity-50">✻</span>
              <span className="w-[45%] text-right">{line.left}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 flex justify-center text-ink-faded font-sans text-sm relative z-10 border-t border-ink/5 mx-12">
        {pageNum}
      </div>
    </>
  );
}

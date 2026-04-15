"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Feather } from "lucide-react";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"writing" | "logo" | "exit">("writing");

  useEffect(() => {
    const writingTimer = setTimeout(() => setPhase("logo"), 2800);
    const logoTimer = setTimeout(() => setPhase("exit"), 5200);
    const exitTimer = setTimeout(onComplete, 6000);

    return () => {
      clearTimeout(writingTimer);
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper overflow-hidden"
    >
      {/* Paper Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 40%, rgba(44,44,44,0.05) 100%)",
        }}
      />

      <div className="relative flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {phase === "writing" && (
            <motion.div
              key="writing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* The Quill Animation */}
              <motion.div
                animate={{
                  x: [0, 80, -60, 100, -40, 0],
                  y: [0, -15, 15, -10, 20, 0],
                  rotate: [15, 30, 0, 45, 10, 15],
                }}
                transition={{
                  duration: 2.8,
                  ease: "easeInOut",
                }}
                className="mb-12"
              >
                <Feather 
                  className="w-16 h-16 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" 
                  strokeWidth={1.2} 
                />
              </motion.div>

              {/* The Ink Reveal Text */}
              <div className="relative overflow-hidden">
                <motion.h1
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: 2.4, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="text-5xl md:text-7xl font-bold text-ink-wet"
                  style={{ fontFamily: "var(--font-reem), sans-serif" }}
                >
                  صدى القوافي
                </motion.h1>
                {/* Subtle ink "glow" during reveal */}
                <motion.div
                  initial={{ left: "0%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 2.4, delay: 0.2, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-8 bg-gold/20 blur-xl z-20"
                />
              </div>
            </motion.div>
          )}

          {(phase === "logo" || phase === "exit") && (
            <motion.div
              key="logo"
              initial={{ scale: 0.85, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 border border-gold/20 rounded-full"
                />
                <img
                  src="/icon.svg"
                  alt="Sada al-Qawafi Logo"
                  className="w-32 h-32 md:w-48 h-48 drop-shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 flex flex-col items-center gap-2"
              >
                <p 
                  className="text-xs tracking-[0.4em] text-gold uppercase"
                  style={{ fontFamily: "var(--font-amiri), serif" }}
                >
                  Where Ink Meets Eternity
                </p>
                <div className="w-12 h-px bg-gold/30" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/20" />
    </motion.div>
  );
}

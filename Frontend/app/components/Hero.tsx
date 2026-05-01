"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, Variants, Transition } from "framer-motion";
import { Feather, Scroll, Bot, BookHeart, PenLine, Menu, X, Search, Moon } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from "./LanguageSwitcher";

// ─────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────

const navVariant: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const drawerVariant: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring" as const, damping: 28, stiffness: 220 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

const overlayVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.5 },
  },
};

// Ink bleed: text reveals from left using clipPath
const inkBleedTitle: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0 round 4px)", opacity: 0.6 },
  visible: {
    clipPath: "inset(0 0% 0 0 round 4px)",
    opacity: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
  },
};

// Subtitle bleeds in from bottom
const inkBleedSubtitle: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0 round 4px)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0 round 4px)",
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.9 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const inkwellVariant: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 1.6 },
  },
};

// Floating Arabic ahruf — individual letter animation
const letterFloat = (delay: number, duration: number): any => ({
  animate: {
    y: [0, -22, 0],
    opacity: [0, 0.22, 0],
    rotate: [0, 8, -4, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const navLinks = [
  { label: "Library", arabic: "الديوان", icon: Scroll, href: "#library" },
  { label: "The Scribe", arabic: "الكاتب", icon: Bot, href: "#scribe" },
  { label: "My Collection", arabic: "مجموعتي", icon: BookHeart, href: "#collection" },
];

const floatingAhruf = [
  { char: "ع", x: 5, y: 12, size: 52, dur: 5.2, delay: 0 },
  { char: "ش", x: 14, y: 60, size: 38, dur: 6.8, delay: 1.1 },
  { char: "ق", x: 22, y: 25, size: 64, dur: 7.2, delay: 0.5 },
  { char: "ف", x: 32, y: 75, size: 44, dur: 5.8, delay: 2.3 },
  { char: "ي", x: 42, y: 40, size: 30, dur: 8.1, delay: 0.8 },
  { char: "ب", x: 55, y: 15, size: 56, dur: 6.3, delay: 1.7 },
  { char: "ر", x: 65, y: 70, size: 42, dur: 7.5, delay: 0.3 },
  { char: "م", x: 74, y: 30, size: 66, dur: 5.5, delay: 2.1 },
  { char: "ل", x: 82, y: 55, size: 36, dur: 6.9, delay: 1.4 },
  { char: "ه", x: 90, y: 20, size: 50, dur: 7.8, delay: 0.9 },
  { char: "و", x: 78, y: 82, size: 40, dur: 5.1, delay: 2.8 },
  { char: "ت", x: 48, y: 85, size: 48, dur: 6.4, delay: 1.9 },
];

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────

function Navbar() {
  const t = useTranslations('Navigation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t('library'), arabic: "الديوان", icon: Scroll, href: "#library" },
    { label: t('poets'), arabic: "الكاتب", icon: Bot, href: "#poets" },
    { label: t('subscription'), arabic: "مجموعتي", icon: BookHeart, href: "#subscription" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        variants={navVariant}
        initial="hidden"
        animate="visible"
        className="sticky top-0 z-50"
        style={{
          background: scrolled
            ? "rgba(245, 230, 196, 0.82)"
            : "rgba(245, 230, 196, 0.65)",
          backdropFilter: "blur(18px) saturate(1.4)",
          WebkitBackdropFilter: "blur(18px) saturate(1.4)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.18)",
          boxShadow: scrolled
            ? "0 4px 40px rgba(44,44,44,0.08), inset 0 -1px 0 rgba(212,175,55,0.15)"
            : "none",
          transition: "background 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Oiled-paper sheen overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212,175,55,0.025) 2px, rgba(212,175,55,0.025) 4px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group" aria-label="Sada al-Qawafi Home">
              <motion.div
                whileHover={{ rotate: -12, scale: 1.15 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 15 }}
                className="relative"
              >
                <Feather className="w-[26px] h-[26px] text-gold" strokeWidth={1.2} />
                {/* Subtle ink blot behind logo */}
                <div className="absolute inset-0 bg-ink-wet/5 blur-xl rounded-full -z-10" />
              </motion.div>
              {/* English small-cap label + Arabic primary */}
              <div className="flex flex-col leading-none -space-y-1">
                <span
                  className="font-heading text-[10px] tracking-[0.3em] text-gold-dim uppercase font-bold"
                  style={{ fontFamily: "var(--font-amiri), serif" }}
                >
                  Sada al-Qawafi
                </span>
                <span
                  className="text-[26px] font-bold text-ink-wet tracking-tight"
                  style={{ fontFamily: "var(--font-reem), sans-serif", filter: "drop-shadow(1px 1px 0px rgba(255,255,255,0.4))" }}
                >
                  صدى القوافي
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative flex items-center gap-1.5 text-ink-faded hover:text-ink-wet transition-colors duration-300"
                >
                  <link.icon className="w-3.5 h-3.5 text-gold/60 group-hover:text-gold transition-colors duration-300" strokeWidth={1.7} />
                  <span
                    className="text-sm tracking-wide"
                    style={{ fontFamily: "var(--font-amiri), serif" }}
                  >
                    {link.label}
                  </span>
                  {/* Ink underline on hover */}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-400" />
                </a>
              ))}

              {/* Search icon */}
              <button
                aria-label="Search poetry"
                className="p-2 text-ink-faded hover:text-ink-wet hover:bg-paper-dark/30 rounded-full transition-all duration-300"
              >
                <Search className="w-4 h-4" strokeWidth={1.7} />
              </button>

              {/* Login Link */}
              <Link 
                href="/login"
                className="text-sm font-bold text-ink-faded hover:text-gold transition-colors uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-amiri), serif" }}
              >
                Sign In
              </Link>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Wax-Seal "Write" CTA */}
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="relative flex items-center gap-1.5 px-5 py-2 rounded-full overflow-hidden"
                  style={{
                    border: "2px solid var(--gold)",
                    color: "var(--gold)",
                    fontFamily: "var(--font-reem), sans-serif",
                    fontSize: "0.875rem",
                    letterSpacing: "0.06em",
                    background: "transparent",
                    boxShadow: "0 0 0 0 rgba(212,175,55,0)",
                    transition: "box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 20px rgba(212,175,55,0.35), inset 0 0 16px rgba(212,175,55,0.08)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(212,175,55,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <PenLine className="w-3.5 h-3.5" strokeWidth={1.8} />
                  <span>اكتب</span>
                  <span className="text-xs opacity-60 ml-0.5">Write</span>
                </motion.button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-ink-faded hover:text-ink transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer — Book-cover slide */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 z-40"
              style={{ background: "rgba(44,44,44,0.45)", backdropFilter: "blur(4px)" }}
            />

            {/* Drawer panel */}
            <motion.aside
              key="drawer"
              variants={drawerVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden fixed inset-y-0 right-0 z-50 w-72 flex flex-col"
              style={{
                background: "linear-gradient(160deg, #E3DAC9 0%, #D4C5A8 100%)",
                boxShadow: "-8px 0 50px rgba(44,44,44,0.18)",
                borderLeft: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              {/* Book spine texture */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-8"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.08), transparent)",
                  borderRight: "1px solid rgba(212,175,55,0.15)",
                }}
              />

              {/* Drawer header */}
              <div className="flex items-center justify-between px-7 pt-6 pb-4">
                <div className="flex items-center gap-2">
                  <Feather className="w-5 h-5 text-gold" strokeWidth={1.6} />
                  <span
                    className="text-lg font-bold text-ink-wet"
                    style={{ fontFamily: "var(--font-reem), sans-serif" }}
                  >
                    صدى القوافي
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 text-ink-faded hover:text-ink transition-colors rounded-full hover:bg-paper-dark/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Decorative divider */}
              <div
                className="mx-7 mb-5"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)",
                }}
              />

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-5 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center gap-3 px-3 py-3.5 rounded-xl text-ink-faded hover:text-ink-wet hover:bg-paper-dark/30 transition-all duration-300"
                  >
                    <link.icon className="w-4.5 h-4.5 text-gold/70 group-hover:text-gold transition-colors" strokeWidth={1.7} />
                    <div className="flex flex-col leading-tight">
                      <span style={{ fontFamily: "var(--font-amiri), serif", fontSize: "0.95rem" }}>
                        {link.label}
                      </span>
                      <span
                        className="text-xs text-ink-faded/60"
                        style={{ fontFamily: "var(--font-reem), sans-serif" }}
                      >
                        {link.arabic}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </nav>

              {/* Write CTA in drawer */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="px-6 pb-8 pt-4"
              >
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold tracking-wide transition-all duration-300"
                  style={{
                    border: "2px solid var(--gold)",
                    color: "var(--ink-wet)",
                    background: "rgba(212,175,55,0.12)",
                    fontFamily: "var(--font-reem), sans-serif",
                    fontSize: "1rem",
                    boxShadow: "0 2px 16px rgba(212,175,55,0.15)",
                  }}
                >
                  <PenLine className="w-4 h-4 text-gold" strokeWidth={1.8} />
                  <span>اكتب</span>
                  <span className="text-sm text-ink-faded ml-1">/ Write</span>
                </button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ─────────────────────────────────────────────
// FLOATING ARABIC LETTERS (DUST MOTES)
// ─────────────────────────────────────────────

function FloatingAhruf() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
    >
      {floatingAhruf.map((item, i) => (
        <motion.span
          key={i}
          {...letterFloat(item.delay, item.dur)}
          className="absolute font-heading"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: item.size,
            color: "var(--ink-faded)",
            opacity: 0,
            fontFamily: "var(--font-reem), sans-serif",
            willChange: "transform, opacity",
          }}
        >
          {item.char}
        </motion.span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// INKWELL BUTTON (THE ARTIFACT)
// ─────────────────────────────────────────────

function InkwellButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      {/* Echo / Sound-wave ripples */}
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: "100%",
            height: "100%",
            border: `1.5px solid rgba(212,175,55,${0.55 - i * 0.1})`,
          }}
          animate={
            hovered
              ? {
                  scale: [1, 2.4 + i * 0.35],
                  opacity: [0.7, 0],
                }
              : { scale: 1, opacity: 0 }
          }
          transition={
            hovered
              ? {
                  duration: 1.8,
                  delay: i * 0.38,
                  repeat: Infinity,
                  ease: "easeOut" as const,
                }
              : { duration: 0.2 }
          }
        />
      ))}

      {/* Outer ring — always visible, subtle pulse */}
      <motion.span
        aria-hidden="true"
        className="absolute rounded-full"
        style={{
          width: "calc(100% + 16px)",
          height: "calc(100% + 16px)",
          border: "1px solid rgba(212,175,55,0.25)",
        }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as const }}
      />

      {/* Main Inkwell Circle */}
      <motion.button
        id="inkwell-explore"
        aria-label="Explore the poetry library"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring" as const, stiffness: 300, damping: 18 }}
        className="relative z-10 w-28 h-28 rounded-full flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        style={{
          background:
            "radial-gradient(circle at 38% 35%, #3a3a3a 0%, #1e1e1e 60%, #111 100%)",
          boxShadow: hovered
            ? "0 0 40px rgba(212,175,55,0.35), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.2)"
            : "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
          transition: "box-shadow 0.4s ease",
          border: "2px solid rgba(212,175,55,0.3)",
        }}
      >
        {/* Inner highlight — mimics ink surface sheen */}
        <span
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: "60%",
            height: "40%",
            top: "12%",
            left: "20%",
            background:
              "radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)",
          }}
        />
        <Feather
          className="w-7 h-7 relative z-10"
          strokeWidth={1.4}
          style={{ color: "var(--gold)" }}
        />
        <span
          className="text-[11px] tracking-widest relative z-10"
          style={{
            fontFamily: "var(--font-reem), sans-serif",
            color: "rgba(212,175,55,0.75)",
            letterSpacing: "0.2em",
          }}
        >
          استكشف
        </span>
      </motion.button>
    </div>
  );
}

// ─────────────────────────────────────────────
// GRAIN / NOISE OVERLAY
// ─────────────────────────────────────────────

function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 w-full h-full z-0"
      style={{ opacity: 0.045, mixBlendMode: "multiply" }}
    >
      <filter id="paper-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.72"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paper-noise)" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────

function HeroSection() {
  const t = useTranslations('HomePage.hero');
  const locale = useLocale();

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-68px)] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--paper)" }}
    >
      {/* Paper grain texture */}
      <GrainOverlay />

      {/* Vignette edge darkening — mimics aged paper edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(139,115,80,0.3) 100%)",
          boxShadow: "inset 0 0 100px rgba(0,0,0,0.15)",
        }}
      />

      {/* Torn Paper Edge Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 z-20 pointer-events-none"
        style={{
          background: "var(--paper)",
          clipPath: "polygon(0% 100%, 100% 100%, 100% 20%, 98% 25%, 95% 15%, 92% 30%, 88% 10%, 85% 25%, 82% 15%, 78% 35%, 75% 10%, 72% 25%, 68% 15%, 65% 30%, 62% 10%, 58% 25%, 55% 15%, 52% 35%, 48% 10%, 45% 25%, 42% 15%, 38% 30%, 35% 10%, 32% 25%, 28% 15%, 25% 35%, 22% 10%, 18% 25%, 15% 15%, 12% 30%, 8% 10%, 5% 25%, 2% 15%, 0% 30%)",
          filter: "drop-shadow(0 -5px 10px rgba(0,0,0,0.1))",
        }}
      />

      {/* Subtle horizontal ruled lines — aged paper lines */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, transparent, transparent 38px, rgba(176,150,106,0.09) 38px, rgba(176,150,106,0.09) 39px)",
        }}
      />

      {/* Floating Arabic dust motes */}
      <FloatingAhruf />

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-5 max-w-5xl mx-auto"
      >
        {/* Arabic eyebrow — small chapter marker */}
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs tracking-[0.3em] uppercase"
          style={{
            fontFamily: "var(--font-amiri), serif",
            color: "var(--gold-dim)",
            letterSpacing: "0.28em",
          }}
        >
          ✦ &nbsp; مكتبة الشعر العربي &nbsp; ✦
        </motion.p>

        {/* Arabic title — ink bleed from left */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={inkBleedTitle}
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-reem), sans-serif",
              fontSize: "clamp(3rem, 10vw, 7.5rem)",
              color: "var(--ink-wet)",
              textShadow: "2px 4px 20px rgba(44,44,44,0.12)",
            }}
          >
            {locale === 'en' ? "Sada al-Qawafi" : "صدى القوافي"}
          </motion.h1>
        </div>

        {/* Decorative gold rule */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 mb-5 w-full max-w-md"
        >
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, var(--gold-dim))" }} />
          <Moon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, var(--gold-dim))" }} />
        </motion.div>

        {/* English subtitle — bleeds up from bottom */}
        <div className="overflow-hidden mb-12">
          <motion.p
            variants={inkBleedSubtitle}
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-amiri), serif",
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              color: "var(--ink-faded)",
              fontStyle: "italic",
              letterSpacing: "0.04em",
            }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Inkwell explore button */}
        <motion.div variants={inkwellVariant} className="flex flex-col items-center gap-3">
          <InkwellButton />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-[11px] tracking-[0.25em]"
            style={{
              fontFamily: "var(--font-amiri), serif",
              color: "rgba(67,75,76,0.5)",
              textTransform: "uppercase",
            }}
          >
            Hover to Explore
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(67,75,76,0.4)", fontFamily: "var(--font-amiri), serif" }}
        >
          Scroll
        </span>
        <motion.span
          className="w-px h-8 block"
          style={{ background: "linear-gradient(to bottom, var(--gold-dim), transparent)" }}
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
        />
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ROOT EXPORT
// ─────────────────────────────────────────────

export default function Hero() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

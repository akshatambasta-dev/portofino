import React from 'react';
import { ArrowDown, Terminal, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface TheIntroductionProps {
  reducedMotion?: boolean;
}

export const TheIntroduction: React.FC<TheIntroductionProps> = ({ reducedMotion = false }) => {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full z-10"
      aria-label="Chapter 01: The Introduction"
    >
      {/* Top Metadata Line */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A9A9A9] border-b border-[#303030]/60 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
          <span className="tracking-widest uppercase text-[#F0EEE8]">SIGNAL / SYSTEM</span>
        </div>
        <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
          <span>SAII PUNE // 18.5204° N, 73.8567° E</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline">SYS.VER // 2026.10</span>
        </div>
      </div>

      {/* Hero Headline & Identity Body */}
      <div className="my-auto py-12 max-w-4xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#A9A9A9] uppercase tracking-widest mb-3 flex items-center gap-2"
        >
          <span>AKSHAT AMBASTA</span>
          <span className="text-white/30">/</span>
          <span>ENGINEERING BUILDER</span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          initial={reducedMotion ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-normal text-[#F0EEE8] tracking-tight leading-[1.08] mb-6"
        >
          I build things that connect intelligence to the real world.
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 20, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl font-light text-[#A9A9A9] max-w-2xl leading-relaxed mb-8 font-sans"
        >
          AI. Software. Connected systems.
        </motion.p>

        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="text-xs sm:text-sm text-[#A9A9A9]/80 max-w-xl leading-relaxed font-sans mb-10"
        >
          B.Sc. Artificial Intelligence student at Symbiosis Centre for Applied AI, exploring the practical continuum between machine learning, data engineering, and embedded hardware.
        </motion.p>

        {/* Direct CTAs */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex flex-wrap items-center gap-4 font-mono text-xs"
        >
          <a
            href="#systems"
            className="px-6 py-3 rounded bg-[#F0EEE8] hover:bg-[#D4D0C8] text-[#050505] font-semibold tracking-wider transition-all flex items-center gap-2"
          >
            <span>EXPLORE SYSTEMS (CH 03)</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#channel"
            className="px-6 py-3 rounded bg-[#111111] hover:bg-[#171717] border border-[#303030] hover:border-[#606060] text-[#F0EEE8] transition-all flex items-center gap-2"
          >
            <span>OPEN CHANNEL (CH 06)</span>
            <Terminal className="w-3.5 h-3.5 text-[#A9A9A9]" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Status & Atelier-Style Interactive Cues */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-[#303030]/60 gap-4 font-mono text-xs text-[#A9A9A9]">
        <div className="flex flex-wrap items-center gap-3 text-[11px]">
          <span className="flex items-center gap-1.5 text-[#F0EEE8]">
            <Cpu className="w-3.5 h-3.5 text-[#A9A9A9]" />
            <span>SAII PUNE</span>
          </span>
          <span className="text-white/20">|</span>
          <span>1ST PLACE IEEE EIG PITCH 2026</span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#111111] border border-[#303030] text-[10px] text-[#D4D0C8]">
            <span className="w-1 h-1 rounded-full bg-[#F0EEE8] animate-pulse" />
            <span>CLICK CANVAS TO TRANSMIT RIPPLE</span>
          </span>
        </div>

        <a
          href="#thinking"
          className="group flex items-center gap-2 hover:text-[#F0EEE8] transition-colors select-none text-[11px]"
        >
          <span className="tracking-widest uppercase">SCROLL // DESCENT</span>
          <div className="w-4 h-4 rounded-full border border-[#404040] group-hover:border-[#888888] flex items-center justify-center transition-all">
            <ArrowDown className="w-2.5 h-2.5 group-hover:translate-y-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};

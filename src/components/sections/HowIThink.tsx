import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Binary, Terminal, Cpu } from 'lucide-react';

interface HowIThinkProps {
  reducedMotion?: boolean;
}

const domains = [
  {
    id: 'ai-data',
    code: 'DOMAIN 01',
    title: 'Artificial Intelligence & Data',
    icon: <Binary className="w-4 h-4 text-[#F0EEE8]" />,
    headline: 'Turning noisy physical sensor signals into structured, actionable telemetry.',
    details:
      'Grounding statistical pattern recognition in physical phenomena: calculating regional carbon footprints using empirical grid coefficients and designing non-intrusive electrical disaggregation concepts.',
    applications: ['Empirical Emission Modeling', 'Signal Filtering', 'Python Scientific Stack']
  },
  {
    id: 'software',
    code: 'DOMAIN 02',
    title: 'Software Engineering',
    icon: <Terminal className="w-4 h-4 text-[#F0EEE8]" />,
    headline: 'Deterministic backends, clean relational schemas, and responsive interfaces.',
    details:
      'Architecting systems that handle data reliably: Flask server runtimes, SQLite event stores with millisecond precision, and multi-terminal LAN state synchronization.',
    applications: ['Flask Microframework', 'Relational SQLite', 'Distributed LAN State']
  },
  {
    id: 'embedded',
    code: 'DOMAIN 03',
    title: 'Embedded Systems & IoT',
    icon: <Cpu className="w-4 h-4 text-[#F0EEE8]" />,
    headline: 'Where code meets physical constraints, currents, and component tolerances.',
    details:
      'Writing C/C++ firmware for ESP32 and Arduino, reading UART telemetry from PZEM-004T AC power meters, calibrating capacitive soil probes, and building optocoupled relay controls.',
    applications: ['ESP32 & Arduino C++', 'PZEM-004T AC Metering', 'Relay Actuation']
  }
];

export const HowIThink: React.FC<HowIThinkProps> = ({ reducedMotion = false }) => {
  const [selectedDomain, setSelectedDomain] = useState(0);

  return (
    <section
      id="thinking"
      className="relative min-h-screen flex flex-col justify-center py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full z-10"
      aria-label="Chapter 02: How I Think"
    >
      {/* Chapter Metadata Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A9A9A9] border-b border-[#303030]/60 pb-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A9A9A9]" />
          <span className="tracking-widest uppercase">CHAPTER 02 // HOW I THINK</span>
        </div>
        <span>DISCIPLINARY CONTINUUM</span>
      </div>

      {/* Main Statement — Headline only, without engineering subtext */}
      <div className="max-w-3xl mb-16">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal text-[#F0EEE8] leading-tight"
        >
          Ideas become useful when they become systems.
        </motion.h2>
      </div>

      {/* Three Domains Interactive Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Domain Selector Tabs */}
        <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
          {domains.map((dom, idx) => {
            const isSelected = selectedDomain === idx;
            return (
              <button
                key={dom.id}
                onClick={() => setSelectedDomain(idx)}
                className={`p-4 sm:p-5 rounded-lg border text-left transition-all font-mono text-xs w-full relative ${
                  isSelected
                    ? 'bg-[#171717] border-[#888888] shadow-[0_0_24px_rgba(255,255,255,0.04)] text-[#F0EEE8]'
                    : 'bg-[#111111]/70 border-[#303030] hover:border-[#505050] text-[#A9A9A9]'
                }`}
              >
                {isSelected && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-[#F0EEE8] rounded-r" />
                )}

                <div className="flex items-center justify-between mb-1.5">
                  <span className={isSelected ? 'text-[#F0EEE8] font-bold' : 'text-[#888888]'}>
                    {dom.code}
                  </span>
                  {dom.icon}
                </div>
                <div className="font-sans font-medium text-sm sm:text-base text-[#F0EEE8] mb-1">
                  {dom.title}
                </div>
                <div className="text-[11px] text-[#A9A9A9] font-sans line-clamp-2">
                  {dom.headline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Focused Domain Inspection Card */}
        <div className="lg:col-span-7 bg-[#111111]/90 border border-[#303030] rounded-xl p-5 sm:p-8 flex flex-col justify-between shadow-2xl relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDomain}
              initial={reducedMotion ? false : { opacity: 0, y: 12, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -10, filter: 'blur(3px)' }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#303030] mb-4 font-mono text-xs">
                  <span className="text-[#888888] uppercase tracking-wider font-semibold">
                    {domains[selectedDomain].code} // TELEMETRY FOCUS
                  </span>
                  <span className="text-[10px] bg-[#171717] border border-[#303030] text-[#F0EEE8] px-2 py-0.5 rounded flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
                    <span>NODE 0{selectedDomain + 1} ACTIVE</span>
                  </span>
                </div>

                <h3 className="font-display font-medium text-xl sm:text-2xl text-[#F0EEE8] mb-2.5">
                  {domains[selectedDomain].title}
                </h3>

                <p className="text-sm sm:text-base text-[#F0EEE8]/90 font-sans leading-relaxed mb-3">
                  {domains[selectedDomain].headline}
                </p>

                <p className="text-xs sm:text-sm text-[#A9A9A9] font-sans leading-relaxed mb-5">
                  {domains[selectedDomain].details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#303030] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap gap-2">
                  {domains[selectedDomain].applications.map((app) => (
                    <span
                      key={app}
                      className="px-2.5 py-1 rounded bg-[#171717] border border-[#303030] text-[#A9A9A9] text-[11px]"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <a
                  href="#systems"
                  className="text-[#F0EEE8] hover:underline flex items-center gap-1 font-semibold group"
                >
                  <span>EXPLORE SYSTEMS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
};

import React, { useState, useEffect } from 'react';

interface ChapterProgressProps {
  activeSection: string;
}

const chapters = [
  { id: 'intro', roman: 'I', code: '01', name: 'THE INTRODUCTION' },
  { id: 'thinking', roman: 'II', code: '02', name: 'HOW I THINK' },
  { id: 'systems', roman: 'III', code: '03', name: 'THE SYSTEMS' },
  { id: 'experiments', roman: 'IV', code: '04', name: 'THE EXPERIMENTS' },
  { id: 'proof', roman: 'V', code: '05', name: 'THE PROOF' },
  { id: 'channel', roman: 'VI', code: '06', name: 'OPEN CHANNEL' },
];

export const ChapterProgress: React.FC<ChapterProgressProps> = ({ activeSection }) => {
  const [pulseCount, setPulseCount] = useState(0);
  const [lastPulse, setLastPulse] = useState(false);

  useEffect(() => {
    const handlePulse = () => {
      setPulseCount((prev) => prev + 1);
      setLastPulse(true);
      const timer = setTimeout(() => setLastPulse(false), 900);
      return () => clearTimeout(timer);
    };

    window.addEventListener('atelier-pulse', handlePulse);
    return () => window.removeEventListener('atelier-pulse', handlePulse);
  }, []);

  return (
    <aside
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 select-none pointer-events-auto"
      aria-label="Atelier Chapter Scroll Progress"
    >
      {/* Atelier-Style Connected Roman Stops */}
      <div className="relative bg-[#111111]/90 backdrop-blur-md border border-[#303030] rounded-full p-2 py-4 flex flex-col items-center gap-2.5 shadow-2xl">
        {/* Continuous Connecting Thread */}
        <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-[#303030] pointer-events-none" />

        {chapters.map((ch) => {
          const isActive = activeSection === ch.id;
          return (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              title={`Jump to Chapter ${ch.roman}: ${ch.name}`}
              className="group relative z-10 flex items-center justify-center"
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 px-2.5 py-1 rounded bg-[#171717] border border-[#303030] font-mono text-[10px] text-[#F0EEE8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                <span className="text-[#D4D0C8] font-bold mr-1.5">{ch.roman}</span>
                <span>// {ch.name}</span>
              </span>

              {/* Indicator Pill */}
              <span
                className={`transition-all rounded-full flex items-center justify-center font-mono text-[10px] ${
                  isActive
                    ? 'w-6 h-6 bg-[#F0EEE8] text-[#050505] font-bold shadow-[0_0_12px_rgba(240,238,232,0.4)] scale-110'
                    : 'w-4 h-4 bg-[#171717] border border-[#404040] text-[#A9A9A9] group-hover:text-[#F0EEE8] group-hover:border-[#606060]'
                }`}
              >
                {ch.roman}
              </span>
            </a>
          );
        })}
      </div>

      {/* Atelier Interactive Ripple Status Cue */}
      <div className="font-mono text-[9px] text-[#A9A9A9] bg-[#111111]/80 backdrop-blur-sm border border-[#303030] rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-md">
        <span
          className={`w-1.5 h-1.5 rounded-full transition-all ${
            lastPulse
              ? 'bg-[#FFFFFF] scale-150 shadow-[0_0_6px_#FFF]'
              : 'bg-[#D4D0C8]'
          }`}
        />
        <span className="tracking-wider">
          {pulseCount > 0 ? `PULSES: ${pulseCount}` : 'CLICK TO PULSE'}
        </span>
      </div>

      <div className="font-mono text-[8px] text-[#A9A9A9]/50 tracking-widest rotate-90 origin-right translate-y-6">
        ATELIER // HUD
      </div>
    </aside>
  );
};

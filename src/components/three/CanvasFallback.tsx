import React from 'react';

interface CanvasFallbackProps {
  reason?: string;
}

export const CanvasFallback: React.FC<CanvasFallbackProps> = ({ reason }) => {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center p-6 select-none"
      aria-label="Monochromatic System Schematic (2D Fallback)"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial from-white/[0.04] via-transparent to-transparent opacity-60" />

      {/* SVG Architectural Schematic */}
      <svg className="w-64 h-64 sm:w-80 sm:h-80 text-[#F0EEE8]" viewBox="0 0 300 300" fill="none">
        {/* Outer Ring */}
        <circle cx="150" cy="150" r="130" stroke="#303030" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="150" cy="150" r="105" stroke="#454545" strokeWidth="1" opacity="0.6" />
        
        {/* Cardinal calibration ticks */}
        <line x1="150" y1="12" x2="150" y2="24" stroke="#F0EEE8" strokeWidth="1.5" />
        <line x1="150" y1="276" x2="150" y2="288" stroke="#F0EEE8" strokeWidth="1.5" />
        <line x1="12" y1="150" x2="24" y2="150" stroke="#F0EEE8" strokeWidth="1.5" />
        <line x1="276" y1="150" x2="288" y2="150" stroke="#F0EEE8" strokeWidth="1.5" />

        {/* Orbit Ellipses */}
        <ellipse cx="150" cy="150" rx="90" ry="40" stroke="#303030" strokeWidth="1" transform="rotate(-25 150 150)" />
        <ellipse cx="150" cy="150" rx="90" ry="40" stroke="#505050" strokeWidth="1" transform="rotate(45 150 150)" />

        {/* Central Geometric Core */}
        <polygon points="150,90 200,120 200,180 150,210 100,180 100,120" stroke="#F0EEE8" strokeWidth="1" fill="rgba(240, 238, 232, 0.02)" />
        <polygon points="150,105 185,126 185,174 150,195 115,174 115,126" stroke="#888888" strokeWidth="1" strokeDasharray="2 3" />

        {/* Central Monochromatic Beacon */}
        <circle cx="150" cy="150" r="8" fill="#F0EEE8" opacity="0.8" />
        <circle cx="150" cy="150" r="20" stroke="#303030" strokeWidth="1" opacity="0.6" />
        <circle cx="150" cy="150" r="3" fill="#050505" />

        {/* Orbital Particle Points */}
        <circle cx="85" cy="125" r="2.5" fill="#F0EEE8" />
        <circle cx="215" cy="165" r="2" fill="#A9A9A9" />
        <circle cx="185" cy="95" r="2.5" fill="#D4D0C8" />
        <circle cx="115" cy="200" r="2" fill="#F0EEE8" />
      </svg>

      {/* Telemetry Annotation Box */}
      <div className="absolute bottom-6 bg-[#111111]/90 border border-[#303030] backdrop-blur-md px-3.5 py-1.5 rounded text-[11px] font-mono text-[#A9A9A9] flex items-center gap-3 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
        <span className="text-[#F0EEE8] font-medium tracking-wide">SYSTEM CORE // 2D SCHEMATIC</span>
        <span className="text-[#A9A9A9]/60">{reason || "FALLBACK ACTIVE"}</span>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

interface NavbarProps {
  force2D: boolean;
  onToggle2D: () => void;
  activeSection: string;
}

const navItems = [
  { id: 'intro', label: 'INTRO', roman: 'I', code: '01' },
  { id: 'thinking', label: 'THINKING', roman: 'II', code: '02' },
  { id: 'systems', label: 'SYSTEMS', roman: 'III', code: '03' },
  { id: 'experiments', label: 'EXPERIMENTS', roman: 'IV', code: '04' },
  { id: 'proof', label: 'PROOF', roman: 'V', code: '05' },
  { id: 'channel', label: 'CHANNEL', roman: 'VI', code: '06' },
];

export const Navbar: React.FC<NavbarProps> = ({
  force2D,
  onToggle2D,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/92 backdrop-blur-md border-b border-[#303030]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Node */}
        <a
          href="#intro"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('intro');
          }}
          className="group flex items-center gap-2.5 text-left select-none"
        >
          <div className="w-7 h-7 rounded bg-[#111111] border border-[#303030] flex items-center justify-center text-[#F0EEE8] group-hover:border-[#606060] transition-all">
            <span className="font-mono text-[11px] font-bold">AA</span>
          </div>
          <div>
            <div className="font-display font-medium text-xs sm:text-sm tracking-wider text-[#F0EEE8]">
              AKSHAT AMBASTA
            </div>
            <div className="font-mono text-[9px] text-[#A9A9A9] tracking-widest flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#F0EEE8]" />
              <span>SIGNAL / SYSTEM</span>
            </div>
          </div>
        </a>

        {/* Desktop 6-Chapter Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/80 border border-[#303030] rounded-full px-3 py-1 backdrop-blur-sm" aria-label="Main Portfolio Chapters">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#171717] text-[#F0EEE8] font-bold border border-[#505050] shadow-sm'
                    : 'text-[#A9A9A9] hover:text-[#F0EEE8] hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[9px] opacity-70 font-semibold">{item.roman}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* System Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* 2D / 3D Toggle */}
          <button
            onClick={onToggle2D}
            title={force2D ? "Switch to 3D Particle Canvas" : "Switch to 2D Schematic"}
            className={`px-2.5 py-1 rounded border font-mono text-[10px] transition-all flex items-center gap-1.5 ${
              force2D
                ? 'bg-[#171717] border-[#606060] text-[#F0EEE8]'
                : 'bg-[#111111] border-[#303030] text-[#A9A9A9] hover:text-[#F0EEE8] hover:border-[#404040]'
            }`}
          >
            <Activity className="w-3 h-3" />
            <span>{force2D ? 'MODE: 2D' : 'MODE: 3D'}</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggle2D}
            className="px-2 py-1 rounded bg-[#111111] border border-[#303030] text-[#F0EEE8] font-mono text-xs"
            aria-label="Toggle 2D/3D Mode"
          >
            {force2D ? '2D' : '3D'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded bg-[#111111] border border-[#303030] text-[#F0EEE8]"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050505]/98 border-b border-[#303030] px-6 py-5 backdrop-blur-xl animate-in fade-in duration-150">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-3 py-2 rounded font-mono text-xs flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#171717] text-[#F0EEE8] border border-[#505050]'
                    : 'text-[#A9A9A9] hover:text-[#F0EEE8] hover:bg-white/[0.04]'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] opacity-70 font-semibold">{item.roman}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#303030] flex items-center justify-between text-xs font-mono text-[#A9A9A9]">
            <span className="text-[10px] text-[#A9A9A9] tracking-wider">AKSHAT AMBASTA</span>
            <span className="text-[10px] text-[#A9A9A9]">SAII PUNE</span>
          </div>
        </div>
      )}
    </header>
  );
};

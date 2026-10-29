import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../../data/projects';
import type { ProjectCaseStudy } from '../../data/projects';
import { Award, Terminal, Layers, Network, Droplet, Leaf } from 'lucide-react';

interface TheExperimentsProps {
  reducedMotion?: boolean;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const TheExperiments: React.FC<TheExperimentsProps> = ({
  reducedMotion = false,
  onOpenCaseStudy
}) => {
  const smartPlant = projects.find((p) => p.id === 'smart-plant')!;
  const doomsday = projects.find((p) => p.id === 'doomsday')!;
  const carbon = projects.find((p) => p.id === 'carbon-tracker')!;

  const [activeTab, setActiveTab] = useState<'plant' | 'doomsday' | 'carbon'>('plant');

  return (
    <section
      id="experiments"
      className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full z-10"
      aria-label="Chapter 04: The Experiments"
    >
      {/* Chapter Metadata Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A9A9A9] border-b border-[#303030]/60 pb-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
          <span className="tracking-widest uppercase">CHAPTER 04 // THE EXPERIMENTS</span>
        </div>
        <span>CONSTELLATION &amp; TEST BENCHES</span>
      </div>

      {/* Main Section Headline */}
      <div className="max-w-3xl mb-16">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal text-[#F0EEE8] leading-tight"
        >
          Hardware circuits, local networks &amp; emissions modeling.
        </motion.h2>
      </div>

      {/* Tri-Node Constellation Navigation with Staggered Entrance */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 font-mono text-xs"
        role="tablist"
      >
        <button
          onClick={() => setActiveTab('plant')}
          className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
            activeTab === 'plant'
              ? 'bg-[#171717] border-[#888888] text-[#F0EEE8] shadow-md'
              : 'bg-[#111111]/70 border-[#303030] text-[#A9A9A9] hover:border-[#505050] hover:text-[#F0EEE8]'
          }`}
        >
          <div className="flex items-center gap-3">
            <Droplet className="w-4 h-4 text-[#D4D0C8]" />
            <div>
              <div className="text-[10px] text-[#888888]">SYS-04 // HARDWARE</div>
              <div className="font-sans text-sm font-medium">Smart Irrigation System</div>
            </div>
          </div>
          <span className="text-[10px] bg-[#111111] border border-[#303030] text-[#D4D0C8] px-2 py-0.5 rounded">
            ARDUINO
          </span>
        </button>

        <button
          onClick={() => setActiveTab('doomsday')}
          className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
            activeTab === 'doomsday'
              ? 'bg-[#171717] border-[#888888] text-[#F0EEE8] shadow-md'
              : 'bg-[#111111]/70 border-[#303030] text-[#A9A9A9] hover:border-[#505050] hover:text-[#F0EEE8]'
          }`}
        >
          <div className="flex items-center gap-3">
            <Network className="w-4 h-4 text-[#D4D0C8]" />
            <div>
              <div className="text-[10px] text-[#888888]">SYS-03 // DISTRIBUTED</div>
              <div className="font-sans text-sm font-medium">DOOMSDAY PROTOCOL</div>
            </div>
          </div>
          <span className="text-[10px] bg-[#111111] border border-[#303030] text-[#D4D0C8] px-2 py-0.5 rounded">
            FLASK LAN
          </span>
        </button>

        <button
          onClick={() => setActiveTab('carbon')}
          className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
            activeTab === 'carbon'
              ? 'bg-[#171717] border-[#888888] text-[#F0EEE8] shadow-md'
              : 'bg-[#111111]/70 border-[#303030] text-[#A9A9A9] hover:border-[#505050] hover:text-[#F0EEE8]'
          }`}
        >
          <div className="flex items-center gap-3">
            <Leaf className="w-4 h-4 text-[#D4D0C8]" />
            <div>
              <div className="text-[10px] text-[#888888]">SYS-05 // DATA</div>
              <div className="font-sans text-sm font-medium">Carbon Emissions Tracker</div>
            </div>
          </div>
          <span className="text-[10px] bg-[#111111] border border-[#303030] text-[#D4D0C8] px-2 py-0.5 rounded">
            PYTHON
          </span>
        </button>
      </motion.div>

      {/* Selected Experiment Detail Exhibit with Coordinated AnimatePresence */}
      <AnimatePresence mode="wait">
        {activeTab === 'plant' && (
          <motion.div
            key="plant"
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -16, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111]/90 border border-[#303030] rounded-2xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#303030] font-mono text-xs text-[#D4D0C8]">
                  <Award className="w-3.5 h-3.5" />
                  <span>KVS NATIONAL SCIENCE EXHIBITION SELECTION &amp; REGIONAL 2ND PLACE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F0EEE8]">
                  Smart Plant Monitoring &amp; Irrigation
                </h3>
                <p className="text-xs sm:text-sm text-[#A9A9A9] leading-relaxed font-sans">
                  {smartPlant.problem}
                </p>
                <div className="p-4 rounded-lg bg-[#0B0B0B] border border-[#262626] space-y-2 text-xs font-mono text-[#A9A9A9]">
                  <div className="text-[#F0EEE8] font-semibold text-[11px]">CLOSED-LOOP MECHANISM:</div>
                  <div>Sensor Input: Capacitive probe samples soil moisture</div>
                  <div>Threshold Logic: Arduino checks hysteresis cutoff bounds</div>
                  <div>Irrigation Output: 5V relay triggers 12V pump to root zone</div>
                </div>
                <button
                  onClick={() => onOpenCaseStudy(smartPlant)}
                  className="px-5 py-2.5 rounded bg-[#F0EEE8] hover:bg-[#D4D0C8] text-[#050505] font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>INSPECT CIRCUIT SPECIFICATION</span>
                </button>
              </div>

              <div className="lg:col-span-6 bg-[#0B0B0B] p-6 rounded-xl border border-[#303030] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#262626] text-[#A9A9A9]">
                  <span>ARDUINO FIRMWARE STATUS</span>
                  <span>ATMEGA328P</span>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] flex items-center justify-between">
                  <span className="text-[#888888]">SOIL MOISTURE VOLUMETRIC:</span>
                  <span className="text-[#F0EEE8] font-bold">38% (BELOW 45% THRESHOLD)</span>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] flex items-center justify-between">
                  <span className="text-[#888888]">RELAY PUMP STATE:</span>
                  <span className="text-[#D4D0C8] font-bold">ENERGIZED // RUNNING</span>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] text-[11px] text-[#A9A9A9] leading-relaxed">
                  <span className="text-[#F0EEE8] font-semibold block mb-1">PROPOSED AI RESEARCH DIRECTION:</span>
                  Envisioned feeding historical soil moisture degradation rates into a predictive model to anticipate drying based on ambient weather forecasts.
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'doomsday' && (
          <motion.div
            key="doomsday"
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -16, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111]/90 border border-[#303030] rounded-2xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#303030] font-mono text-xs text-[#D4D0C8]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>DISTRIBUTED LAN ESCAPE-ROOM PROTOTYPE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F0EEE8]">
                  DOOMSDAY PROTOCOL
                </h3>
                <p className="text-xs sm:text-sm text-[#A9A9A9] leading-relaxed font-sans">
                  {doomsday.shortDescription}
                </p>
                <div className="p-4 rounded-lg bg-[#0B0B0B] border border-[#262626] space-y-2 text-xs font-mono text-[#A9A9A9]">
                  <div className="text-[#F0EEE8] font-semibold text-[11px]">DISTRIBUTED LAN DESIGN:</div>
                  <div>Host: Central Python/Flask runtime orchestrating game loop</div>
                  <div>Clients: 4 networked PC workstations with puzzle interfaces</div>
                  <div>Storage: SQLite logging millisecond session progression &amp; penalties</div>
                </div>
                <button
                  onClick={() => onOpenCaseStudy(doomsday)}
                  className="px-5 py-2.5 rounded bg-[#F0EEE8] hover:bg-[#D4D0C8] text-[#050505] font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>INSPECT MULTI-TERMINAL FLOW</span>
                </button>
              </div>

              <div className="lg:col-span-6 bg-[#0B0B0B] p-6 rounded-xl border border-[#303030] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#262626] text-[#A9A9A9]">
                  <span>WORKSTATION PROGRESSION</span>
                  <span>OFFLINE LAN HUB</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2.5 rounded bg-[#111111] border border-[#262626]">
                    <div className="text-[#F0EEE8] font-bold">TERMINAL 01</div>
                    <div className="text-[#888888]">Cipher Station: SOLVED</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#111111] border border-[#262626]">
                    <div className="text-[#F0EEE8] font-bold">TERMINAL 02</div>
                    <div className="text-[#888888]">Logic Matrix: SOLVED</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#111111] border border-[#262626]">
                    <div className="text-[#F0EEE8] font-bold">TERMINAL 03</div>
                    <div className="text-[#D4D0C8]">Protocol: ACTIVE</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#111111] border border-[#262626]">
                    <div className="text-[#F0EEE8] font-bold">TERMINAL 04</div>
                    <div className="text-[#888888]">Core Override: LOCKED</div>
                  </div>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] text-[11px] text-[#A9A9A9]">
                  Master Operator Console gives administrators real-time event logs and manual override capability over the local network.
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'carbon' && (
          <motion.div
            key="carbon"
            initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -16, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111]/90 border border-[#303030] rounded-2xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#171717] border border-[#303030] font-mono text-xs text-[#D4D0C8]">
                  <Award className="w-3.5 h-3.5" />
                  <span>KVS REGIONAL SCIENCE EXHIBITION PRESENTATION SELECTION (2024)</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#F0EEE8]">
                  Carbon Emissions Tracker
                </h3>
                <p className="text-xs sm:text-sm text-[#A9A9A9] leading-relaxed font-sans">
                  {carbon.shortDescription}
                </p>
                <div className="p-4 rounded-lg bg-[#0B0B0B] border border-[#262626] space-y-2 text-xs font-mono text-[#A9A9A9]">
                  <div className="text-[#F0EEE8] font-semibold text-[11px]">CALCULATION PIPELINE:</div>
                  <div>User Inputs: Monthly kWh, LPG cylinders, vehicle transit km</div>
                  <div>Emission Factors: Official state-wise grid coefficients (CEA)</div>
                  <div>Output: Categorized footprint report and behavioral levers</div>
                </div>
                <button
                  onClick={() => onOpenCaseStudy(carbon)}
                  className="px-5 py-2.5 rounded bg-[#F0EEE8] hover:bg-[#D4D0C8] text-[#050505] font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>INSPECT CALCULATION PIPELINE</span>
                </button>
              </div>

              <div className="lg:col-span-6 bg-[#0B0B0B] p-6 rounded-xl border border-[#303030] font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#262626] text-[#A9A9A9]">
                  <span>REGIONAL FACTOR MATRIX</span>
                  <span>CEA STANDARDS</span>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] flex items-center justify-between">
                  <span className="text-[#888888]">MAHARASHTRA GRID FACTOR:</span>
                  <span className="text-[#F0EEE8] font-bold">0.82 kg CO2e / kWh</span>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] flex items-center justify-between">
                  <span className="text-[#888888]">LPG DOMESTIC CYLINDER:</span>
                  <span className="text-[#F0EEE8] font-bold">2.98 kg CO2e / kg fuel</span>
                </div>
                <div className="p-3 rounded bg-[#111111] border border-[#262626] text-[11px] text-[#A9A9A9]">
                  Designed as an educational awareness tool reflecting regional power mix differences rather than an industrial compliance auditor.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

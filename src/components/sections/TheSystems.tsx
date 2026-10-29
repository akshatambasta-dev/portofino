import React, { useState } from 'react';
import { motion } from 'motion/react';
import { projects } from '../../data/projects';
import type { ProjectCaseStudy } from '../../data/projects';
import { Award, ArrowRight, Layers, Database, Activity, Table2, FileSpreadsheet, AlertCircle } from 'lucide-react';

interface TheSystemsProps {
  reducedMotion?: boolean;
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const TheSystems: React.FC<TheSystemsProps> = ({
  reducedMotion = false,
  onOpenCaseStudy
}) => {
  const voltvision = projects.find((p) => p.id === 'voltvision') || projects[0];
  const file2base = projects.find((p) => p.id === 'file2base') || projects[1];

  // Active sub-tab inside File2Base interactive transformation preview
  const [file2baseStage, setFile2baseStage] = useState<'files' | 'parser' | 'database'>('database');

  return (
    <section
      id="systems"
      className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full z-10"
      aria-label="Chapter 03: The Systems"
    >
      {/* Chapter Metadata Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A9A9A9] border-b border-[#303030]/60 pb-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
          <span className="tracking-widest uppercase">CHAPTER 03 // THE SYSTEMS</span>
        </div>
        <span>CORE ENGINEERING CASE STUDIES</span>
      </div>

      {/* Main Section Headline */}
      <div className="max-w-3xl mb-20">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal text-[#F0EEE8] leading-tight"
        >
          Two architectures built for real-world friction.
        </motion.h2>
      </div>

      {/* ======================================================== */}
      {/* FEATURED SYSTEM A: VOLTVISION                             */}
      {/* ======================================================== */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111111]/90 border border-[#303030] rounded-2xl p-6 sm:p-10 mb-20 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Problem, Approach, Status */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded bg-[#171717] border border-[#303030] text-[#F0EEE8] font-bold">
                SYS-01
              </span>
              <span className="text-[#A9A9A9] uppercase tracking-wider">
                AI &amp; IOT ENERGY MONITORING
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#F0EEE8] bg-[#171717] border border-[#303030] px-2 py-0.5 rounded">
                <Award className="w-3 h-3 text-[#D4D0C8]" />
                <span>1ST PLACE IEEE PITCH 2026</span>
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#F0EEE8] mb-2">
                VoltVision
              </h3>
              <p className="text-sm sm:text-base text-[#D4D0C8] font-medium leading-snug">
                {voltvision.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#A9A9A9] leading-relaxed font-sans">
              {voltvision.shortDescription}
            </p>

            {/* 4 Stages Progression */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3.5 rounded bg-[#171717] border border-[#303030]">
                <div className="text-[10px] text-[#888888] font-semibold mb-1">01. THE PROBLEM</div>
                <p className="text-[#A9A9A9] font-sans text-xs leading-relaxed">
                  Monthly bills only show cumulative kWh long after waste occurs. Consumers cannot isolate individual appliance draws.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#171717] border border-[#303030]">
                <div className="text-[10px] text-[#888888] font-semibold mb-1">02. THE APPROACH</div>
                <p className="text-[#A9A9A9] font-sans text-xs leading-relaxed">
                  PZEM-004T v3.0 power sensor + ESP32 streaming sub-second AC voltage, current, and wattage over UART/Wi-Fi to a Flask API.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#171717] border border-[#303030]">
                <div className="text-[10px] text-[#888888] font-semibold mb-1">03. ARCHITECTURE</div>
                <p className="text-[#A9A9A9] font-sans text-xs leading-relaxed">
                  Electrical Load → PZEM-004T → ESP32 → Python/Flask → SQLite → Responsive telemetry dashboard.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#171717] border border-[#303030]">
                <div className="text-[10px] text-[#888888] font-semibold mb-1">04. STATUS &amp; HONORS</div>
                <p className="text-[#A9A9A9] font-sans text-xs leading-relaxed">
                  Hardware sensing &amp; telemetry prototype validated. Won 1st Place IEEE Maharashtra Section EIG Pitch (Aug 2026).
                </p>
              </div>
            </div>

            {/* Status Transparency Notice */}
            <div className="p-3.5 rounded bg-[#0A0A0A] border-l-2 border-[#888888] text-[11px] font-mono text-[#A9A9A9] leading-relaxed">
              <div className="flex items-center gap-1.5 text-[#F0EEE8] font-semibold mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-[#A9A9A9]" />
                <span>IMPLEMENTATION STATE</span>
              </div>
              Hardware-to-dashboard pipeline fully tested and presented. Appliance-level NILM machine learning pattern disaggregation is an active conceptual extension.
            </div>

            {/* Case Study Modal Trigger */}
            <div>
              <button
                onClick={() => onOpenCaseStudy(voltvision)}
                className="px-5 py-2.5 rounded bg-[#F0EEE8] hover:bg-[#D4D0C8] text-[#050505] font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>INSPECT FULL ARCHITECTURE SPEC</span>
              </button>
            </div>
          </div>

          {/* Right Column: Telemetry Graphic (Monochromatic) */}
          <div className="lg:col-span-6 bg-[#0B0B0B] border border-[#303030] rounded-xl p-6 sm:p-8 font-mono text-xs shadow-inner">
            <div className="flex items-center justify-between pb-3 border-b border-[#303030] mb-6">
              <span className="flex items-center gap-2 text-[#F0EEE8] font-semibold">
                <Activity className="w-3.5 h-3.5 text-[#A9A9A9]" />
                <span>PZEM-004T ELECTRICAL BUS</span>
              </span>
              <span className="text-[10px] text-[#A9A9A9] bg-[#171717] px-2 py-0.5 rounded border border-[#303030]">
                UART 9600 BAUD
              </span>
            </div>

            {/* Monochromatic Telemetry Readings */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded bg-[#111111] border border-[#262626]">
                <div className="text-[10px] text-[#888888]">RMS VOLTAGE</div>
                <div className="text-xl font-bold text-[#F0EEE8]">231.4 <span className="text-xs text-[#A9A9A9]">V</span></div>
              </div>

              <div className="p-3 rounded bg-[#111111] border border-[#262626]">
                <div className="text-[10px] text-[#888888]">AC CURRENT</div>
                <div className="text-xl font-bold text-[#F0EEE8]">4.82 <span className="text-xs text-[#A9A9A9]">A</span></div>
              </div>

              <div className="p-3 rounded bg-[#111111] border border-[#262626]">
                <div className="text-[10px] text-[#888888]">ACTIVE POWER</div>
                <div className="text-xl font-bold text-[#D4D0C8]">1,115 <span className="text-xs text-[#888888]">W</span></div>
              </div>

              <div className="p-3 rounded bg-[#111111] border border-[#262626]">
                <div className="text-[10px] text-[#888888]">POWER FACTOR (cos φ)</div>
                <div className="text-xl font-bold text-[#F0EEE8]">0.98 <span className="text-xs text-[#888888]">STABLE</span></div>
              </div>
            </div>

            {/* Monochromatic AC Sine Waveform */}
            <div className="p-4 rounded bg-[#111111] border border-[#262626] mb-6">
              <div className="flex items-center justify-between text-[10px] text-[#888888] mb-2">
                <span>50 Hz ELECTRICAL SINE SAMPLING</span>
                <span>TIME-SERIES BUFFER</span>
              </div>
              <svg className="w-full h-12 text-[#D4D0C8]" viewBox="0 0 300 50" fill="none">
                <path
                  d="M 0 25 Q 25 5, 50 25 T 100 25 T 150 25 T 200 25 T 250 25 T 300 25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line x1="0" y1="25" x2="300" y2="25" stroke="#303030" strokeDasharray="3 3" />
              </svg>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#888888]">
              <span>STORAGE: SQLITE TIME-SERIES</span>
              <span>GATEWAY: PYTHON FLASK</span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* FEATURED SYSTEM B: FILE2BASE                              */}
      {/* ======================================================== */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111111]/90 border border-[#303030] rounded-2xl p-6 sm:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Narrative & Status */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-2.5 py-0.5 rounded bg-[#171717] border border-[#303030] text-[#F0EEE8] font-bold">
                SYS-02
              </span>
              <span className="text-[#A9A9A9] uppercase tracking-wider">
                WORKFLOW &amp; DATA STRUCTURING
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-4xl font-display font-medium text-[#F0EEE8] mb-2">
                File2Base
              </h3>
              <p className="text-sm sm:text-base text-[#D4D0C8] font-medium leading-snug">
                {file2base.headline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#A9A9A9] leading-relaxed font-sans">
              {file2base.shortDescription}
            </p>

            <div className="p-3.5 rounded bg-[#171717] border border-[#303030] space-y-2 text-xs font-mono text-[#A9A9A9]">
              <div className="text-[#F0EEE8] font-semibold text-[11px]">VISUAL TRANSFORMATION PIPELINE:</div>
              <div className="flex items-center gap-2">
                <span>1. Unstructured loose tabular files (CSV / Excel)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>2. Column type inference &amp; schema detection engine</span>
              </div>
              <div className="flex items-center gap-2">
                <span>3. Queryable relational SQL storage with primary keys</span>
              </div>
            </div>

            {/* Status Transparency */}
            <div className="p-3.5 rounded bg-[#0A0A0A] border-l-2 border-[#888888] text-[11px] font-mono text-[#A9A9A9] leading-relaxed">
              <div className="flex items-center gap-1.5 text-[#F0EEE8] font-semibold mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-[#A9A9A9]" />
                <span>EARLY-STAGE PROTOTYPE</span>
              </div>
              Landing page experience and initial parsing scripts maintained in private repository. Full multi-tenant schema extraction and Render cloud deployment testing are currently in active refinement.
            </div>

            <div>
              <button
                onClick={() => onOpenCaseStudy(file2base)}
                className="px-5 py-2.5 rounded bg-[#171717] hover:bg-[#202020] border border-[#303030] hover:border-[#606060] text-[#F0EEE8] font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-2"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>INSPECT FILE2BASE SPECIFICATION</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Transformation Engine Preview */}
          <div className="lg:col-span-7 bg-[#0B0B0B] border border-[#303030] rounded-xl p-6 sm:p-8 font-mono text-xs shadow-inner">
            
            {/* Stage Selector Tabs */}
            <div className="flex items-center justify-between pb-3 border-b border-[#303030] mb-6">
              <span className="flex items-center gap-2 text-[#F0EEE8] font-semibold">
                <Database className="w-3.5 h-3.5 text-[#A9A9A9]" />
                <span>INGESTION PIPELINE</span>
              </span>

              <div className="flex gap-1">
                <button
                  onClick={() => setFile2baseStage('files')}
                  className={`px-2.5 py-1 rounded text-[10px] transition-all ${
                    file2baseStage === 'files' ? 'bg-[#303030] text-[#F0EEE8] font-bold' : 'text-[#888888] hover:text-[#F0EEE8]'
                  }`}
                >
                  01. FILES
                </button>
                <button
                  onClick={() => setFile2baseStage('parser')}
                  className={`px-2.5 py-1 rounded text-[10px] transition-all ${
                    file2baseStage === 'parser' ? 'bg-[#303030] text-[#F0EEE8] font-bold' : 'text-[#888888] hover:text-[#F0EEE8]'
                  }`}
                >
                  02. PARSER
                </button>
                <button
                  onClick={() => setFile2baseStage('database')}
                  className={`px-2.5 py-1 rounded text-[10px] transition-all ${
                    file2baseStage === 'database' ? 'bg-[#303030] text-[#F0EEE8] font-bold' : 'text-[#888888] hover:text-[#F0EEE8]'
                  }`}
                >
                  03. DATABASE
                </button>
              </div>
            </div>

            {/* Dynamic Stage Views */}
            {file2baseStage === 'files' && (
              <div className="p-4 rounded bg-[#111111] border border-[#262626] space-y-3">
                <div className="flex items-center justify-between text-[#A9A9A9] pb-2 border-b border-[#262626]">
                  <span className="flex items-center gap-1.5"><FileSpreadsheet className="w-3.5 h-3.5" /> inventory_raw_oct24.csv</span>
                  <span className="text-[10px] bg-[#171717] px-2 py-0.5 rounded text-[#888888]">UNTYPED TEXT</span>
                </div>
                <div className="text-[11px] text-[#A9A9A9] space-y-1 overflow-x-auto p-2 bg-[#050505] rounded border border-[#202020]">
                  <div className="text-[#666666]">// Fragmented comma-delimited rows:</div>
                  <div className="text-[#D4D0C8]">item_code, quantity, unit_cost, modified</div>
                  <div>"RELAY-5V", "25", "₹45.00", "28-10-24"</div>
                  <div>"PZEM-004T", "12", "1250", "2024-10-29"</div>
                  <div>"ESP32-WROOM", "NaN", "320.00", ""</div>
                </div>
              </div>
            )}

            {file2baseStage === 'parser' && (
              <div className="p-4 rounded bg-[#111111] border border-[#262626] space-y-2 text-[11px]">
                <div className="text-[#F0EEE8] font-semibold mb-2">SCHEMA INFERENCE &amp; TYPE CASTING</div>
                <div className="p-2.5 rounded bg-[#171717] border border-[#262626] flex items-center justify-between">
                  <span>CLEAN COLUMN 'unit_cost' → REGEX NORMALIZER →</span>
                  <span className="text-[#F0EEE8] font-bold">REAL / FLOAT</span>
                </div>
                <div className="p-2.5 rounded bg-[#171717] border border-[#262626] flex items-center justify-between">
                  <span>STANDARDIZE 'modified' → ISO 8601 PARSER →</span>
                  <span className="text-[#F0EEE8] font-bold">DATETIME</span>
                </div>
                <div className="p-2.5 rounded bg-[#171717] border border-[#262626] flex items-center justify-between">
                  <span>RESOLVE PRIMARY KEY →</span>
                  <span className="text-[#F0EEE8] font-bold">UUID PRIMARY KEY</span>
                </div>
              </div>
            )}

            {file2baseStage === 'database' && (
              <div className="p-4 rounded bg-[#111111] border border-[#262626] space-y-3">
                <div className="flex items-center justify-between text-[#F0EEE8] pb-2 border-b border-[#262626]">
                  <span className="flex items-center gap-1.5"><Table2 className="w-3.5 h-3.5" /> tbl_inventory</span>
                  <span className="text-[10px] bg-[#171717] px-2 py-0.5 rounded text-[#D4D0C8]">SQLITE RELATIONAL</span>
                </div>
                <div className="overflow-x-auto text-[11px]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-[#303030] text-[#A9A9A9]">
                        <th className="py-1.5 px-2">id (INT)</th>
                        <th className="py-1.5 px-2">item_code</th>
                        <th className="py-1.5 px-2">cost (REAL)</th>
                        <th className="py-1.5 px-2">updated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#202020] text-[#F0EEE8]">
                      <tr>
                        <td className="py-1.5 px-2 text-[#888888]">101</td>
                        <td className="py-1.5 px-2">RELAY-5V</td>
                        <td className="py-1.5 px-2 text-[#D4D0C8]">45.00</td>
                        <td className="py-1.5 px-2 text-[#888888]">2024-10-28</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-2 text-[#888888]">102</td>
                        <td className="py-1.5 px-2">PZEM-004T</td>
                        <td className="py-1.5 px-2 text-[#D4D0C8]">1250.00</td>
                        <td className="py-1.5 px-2 text-[#888888]">2024-10-29</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-2 text-[#888888]">103</td>
                        <td className="py-1.5 px-2">ESP32-WROOM</td>
                        <td className="py-1.5 px-2 text-[#D4D0C8]">320.00</td>
                        <td className="py-1.5 px-2 text-[#888888]">2024-10-30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-[#303030] flex items-center justify-between text-[10px] text-[#888888]">
              <span>DEPLOYMENT STAGING VIA RENDER</span>
              <button
                onClick={() => {
                  const next = file2baseStage === 'files' ? 'parser' : file2baseStage === 'parser' ? 'database' : 'files';
                  setFile2baseStage(next);
                }}
                className="text-[#F0EEE8] hover:underline flex items-center gap-1"
              >
                <span>CYCLE TRANSFORMATION VIEW</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
};

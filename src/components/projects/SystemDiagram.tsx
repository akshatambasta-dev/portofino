import React, { useState } from 'react';
import type { ProjectCaseStudy } from '../../data/projects';
import { Layers, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface SystemDiagramProps {
  project: ProjectCaseStudy;
}

export const SystemDiagram: React.FC<SystemDiagramProps> = ({ project }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const layers = project.systemArchitecture.layers;

  return (
    <div className="w-full bg-[#0B0B0B] border border-[#303030] rounded-lg p-4 sm:p-6 my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#262626] gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#171717] text-[#F0EEE8]">
              <Layers className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A9A9A9]">
              SYSTEM ARCHITECTURE // {project.systemArchitecture.diagramType.toUpperCase()}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-medium text-[#F0EEE8] mt-1 font-display">
            {project.systemArchitecture.title}
          </h4>
        </div>
        <div className="text-xs font-mono text-[#A9A9A9] flex items-center gap-2 bg-[#111111] px-3 py-1.5 rounded border border-[#262626]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4D0C8]" />
          <span>{layers.length} PIPELINE STAGES</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-[#A9A9A9] my-3 leading-relaxed font-sans">
        {project.systemArchitecture.description}
      </p>

      {/* Step Sequence Pills (Clickable & Keyboard Navigable) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 my-4" role="tablist" aria-label="Architecture Pipeline Stages">
        {layers.map((layer, index) => {
          const isSelected = activeStep === index;
          return (
            <button
              key={layer.name}
              role="tab"
              aria-selected={isSelected}
              tabIndex={0}
              onClick={() => setActiveStep(index)}
              className={`text-left p-2.5 rounded transition-all border text-xs font-mono flex flex-col justify-between h-20 ${
                isSelected
                  ? 'bg-[#171717] border-[#888888] text-[#F0EEE8] shadow-sm'
                  : 'bg-[#111111] border-[#262626] text-[#A9A9A9] hover:border-[#404040] hover:text-[#F0EEE8]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#888888] font-semibold">STAGE 0{index + 1}</span>
                {isSelected ? <CheckCircle2 className="w-3.5 h-3.5 text-[#F0EEE8]" /> : <span className="w-1.5 h-1.5 rounded-full bg-white/20" />}
              </div>
              <div className="truncate font-sans font-medium text-[11px] sm:text-xs">
                {layer.name}
              </div>
              <div className="truncate text-[10px] text-[#A9A9A9]/80">
                {layer.tech}
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Inspection Box for selected layer */}
      <div className="bg-[#111111] border border-[#262626] rounded p-4 text-xs sm:text-sm transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-[#202020] font-mono text-xs">
          <div className="flex items-center gap-2 text-[#F0EEE8]">
            <span className="font-semibold text-[#888888]">STAGE 0{activeStep + 1}:</span>
            <span className="font-medium">{layers[activeStep].name}</span>
          </div>
          <span className="text-[#A9A9A9] bg-[#171717] px-2 py-0.5 rounded text-[11px] w-fit border border-[#262626]">
            TECH: {layers[activeStep].tech}
          </span>
        </div>
        <p className="text-[#A9A9A9] font-sans leading-relaxed">
          {layers[activeStep].role}
        </p>
      </div>

      {/* Visual Pipeline Flow Bar */}
      <div className="mt-4 pt-3 border-t border-[#202020] flex items-center justify-between flex-wrap gap-2 text-[11px] font-mono text-[#888888]">
        <span className="flex items-center gap-1.5">
          <span className="text-[#F0EEE8]">DATA FLOW:</span>
          <span>EDGE</span>
          <ArrowRight className="w-3 h-3 text-[#A9A9A9]" />
          <span>TRANSPORT</span>
          <ArrowRight className="w-3 h-3 text-[#A9A9A9]" />
          <span>STORAGE</span>
          <ArrowRight className="w-3 h-3 text-[#A9A9A9]" />
          <span>CLIENT</span>
        </span>
        {project.aiAspectNote && (
          <span className="flex items-center gap-1 text-[#D4D0C8] bg-[#171717] px-2 py-0.5 rounded text-[10px] border border-[#303030]">
            <AlertCircle className="w-3 h-3" />
            <span>AI EXTENSION PROPOSED</span>
          </span>
        )}
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import type { ProjectCaseStudy } from '../../data/projects';
import { SystemDiagram } from './SystemDiagram';
import { X, Award, Cpu, Code2, AlertTriangle, ExternalLink, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050505]/90 backdrop-blur-md cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-[#303030] rounded-xl shadow-2xl z-10 p-5 sm:p-8 text-[#F0EEE8]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Top HUD Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#303030] mb-6">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded bg-[#171717] border border-[#303030] text-[#F0EEE8] font-mono text-xs font-bold">
                {project.code}
              </span>
              <span className="text-xs font-mono text-[#A9A9A9] tracking-wider uppercase">
                {project.category} · {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg border border-[#303030] hover:border-[#606060] hover:text-[#F0EEE8] text-[#A9A9A9] transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Headline */}
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-display font-medium text-[#F0EEE8]">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#D4D0C8] mt-1 font-medium leading-snug">
            {project.headline}
          </p>

          {/* Status Badge & Recognition Banner */}
          <div className="flex flex-wrap gap-2 my-4 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#171717] border border-[#303030] text-[#F0EEE8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4D0C8]" />
              {project.statusBadge}
            </span>
            {project.recognition && project.recognition.map((rec) => (
              <span key={rec.award} className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#171717] border border-[#303030] text-[#D4D0C8]">
                <Award className="w-3.5 h-3.5" />
                {rec.award} — {rec.event} ({rec.date})
              </span>
            ))}
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-[#0B0B0B] p-4 sm:p-5 rounded-lg border border-[#262626]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A9A9A9] uppercase tracking-wider mb-2 font-semibold">
                <AlertTriangle className="w-3.5 h-3.5 text-[#D4D0C8]" />
                <span>The Problem Friction</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A9A9A9] font-sans leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#0B0B0B] p-4 sm:p-5 rounded-lg border border-[#262626]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F0EEE8] uppercase tracking-wider mb-2 font-semibold">
                <Cpu className="w-3.5 h-3.5 text-[#D4D0C8]" />
                <span>The Engineering Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-[#A9A9A9] font-sans leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Interactive System Diagram */}
          <SystemDiagram project={project} />

          {/* Tech Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 font-mono text-xs">
            {project.hardwareSoftware.hardware && (
              <div className="bg-[#0B0B0B] p-4 rounded-lg border border-[#262626]">
                <span className="text-[#F0EEE8] flex items-center gap-2 mb-2 font-medium">
                  <Cpu className="w-3.5 h-3.5 text-[#888888]" /> HARDWARE &amp; SENSORS
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.hardwareSoftware.hardware.map((hw) => (
                    <span key={hw} className="px-2.5 py-1 rounded bg-[#171717] border border-[#303030] text-[#A9A9A9] text-[11px]">
                      {hw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-[#0B0B0B] p-4 rounded-lg border border-[#262626]">
              <span className="text-[#F0EEE8] flex items-center gap-2 mb-2 font-medium">
                <Code2 className="w-3.5 h-3.5 text-[#888888]" /> SOFTWARE &amp; COMPUTATION
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.hardwareSoftware.software.map((sw) => (
                  <span key={sw} className="px-2.5 py-1 rounded bg-[#171717] border border-[#303030] text-[#A9A9A9] text-[11px]">
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Status Transparency Box */}
          <div className="bg-[#0B0B0B] border-l-2 border-[#888888] p-4 rounded-r-lg my-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F0EEE8] uppercase tracking-wider mb-1 font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-[#888888]" />
              <span>Project State &amp; Verification Transparency</span>
            </div>
            <p className="text-xs sm:text-sm text-[#A9A9A9] font-sans leading-relaxed">
              {project.statusTransparency}
            </p>
            {project.aiAspectNote && (
              <p className="text-xs text-[#D4D0C8] mt-2 font-mono bg-[#171717] p-2 rounded border border-[#303030]">
                {project.aiAspectNote}
              </p>
            )}
          </div>

          {/* Footer & Actions */}
          <div className="pt-4 border-t border-[#303030] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <div className="text-[#888888]">
              {project.links.placeholderNote || "Codebase verified and archived."}
            </div>
            <div className="flex items-center gap-3">
              {project.links.hasLiveLink ? (
                <a
                  href={project.links.demoUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#F0EEE8] text-[#050505] font-bold hover:bg-[#D4D0C8] transition-colors"
                >
                  <span>ACCESS DEPLOYMENT</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#171717] border border-[#303030] text-[#A9A9A9]">
                  <span>REPOSITORY: UPON INQUIRY</span>
                </span>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-[#171717] border border-[#303030] text-[#F0EEE8] hover:bg-[#202020] transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

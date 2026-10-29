import React from 'react';
import type { ProjectCaseStudy } from '../../data/projects';
import { Award, ArrowUpRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: ProjectCaseStudy;
  onSelect: (project: ProjectCaseStudy) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between bg-[#0D121F] border border-white/10 hover:border-[#52E6D2]/60 rounded-xl p-5 sm:p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(82,230,210,0.12)]"
    >
      {/* Top bar with system code & category */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#52E6D2]/10 border border-[#52E6D2]/25 text-[#52E6D2] font-semibold">
              {project.code}
            </span>
            <span className="font-mono text-[11px] text-[#A5ADBD] tracking-wider uppercase">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-xs text-[#A5ADBD]/70">
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-[#F1F5F9] group-hover:text-[#52E6D2] transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <span className="p-1 rounded bg-white/5 group-hover:bg-[#52E6D2] group-hover:text-[#080B12] text-[#A5ADBD] transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </h3>

        {/* Headline */}
        <p className="text-xs sm:text-sm text-[#52E6D2] font-medium mt-1 mb-3">
          {project.headline}
        </p>

        {/* Short Summary Description */}
        <p className="text-xs sm:text-sm text-[#A5ADBD] leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Recognition or Status Pill */}
        <div className="mb-4">
          {project.recognition && project.recognition.length > 0 ? (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#A6FF6B]/10 border border-[#A6FF6B]/30 text-[#A6FF6B] text-[11px] font-mono">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{project.recognition[0].award} — {project.recognition[0].event}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#52E6D2]/10 border border-[#52E6D2]/25 text-[#52E6D2] text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#52E6D2] animate-pulse" />
              <span className="truncate">{project.statusBadge}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer: Tags and Case Study Action */}
      <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-[#080B12] border border-white/5 text-[10px] font-mono text-[#A5ADBD]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#A5ADBD]/60">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="w-full mt-2 py-2 px-3 rounded bg-white/5 hover:bg-[#52E6D2]/15 border border-white/10 hover:border-[#52E6D2]/50 text-[#F1F5F9] hover:text-[#52E6D2] text-xs font-mono font-medium transition-all flex items-center justify-center gap-2 group-hover:border-[#52E6D2]/40"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>INSPECT ARCHITECTURE &amp; EVIDENCE</span>
        </button>
      </div>
    </motion.article>
  );
};

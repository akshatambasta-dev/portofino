import React from 'react';
import { motion } from 'motion/react';
import { milestones } from '../../data/milestones';
import { Award, Users, Calendar, ArrowUpRight, GraduationCap } from 'lucide-react';

interface TheProofProps {
  reducedMotion?: boolean;
}

export const TheProof: React.FC<TheProofProps> = ({ reducedMotion = false }) => {
  return (
    <section
      id="proof"
      className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full z-10"
      aria-label="Chapter 05: The Proof"
    >
      {/* Chapter Metadata Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A9A9A9] border-b border-[#303030]/60 pb-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
          <span className="tracking-widest uppercase">CHAPTER 05 // THE PROOF</span>
        </div>
        <span>INSTITUTIONAL RECORD &amp; HONORS</span>
      </div>

      {/* Main Section Headline */}
      <div className="max-w-3xl mb-16">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-normal text-[#F0EEE8] leading-tight mb-4"
        >
          Verified evidence and leadership record.
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#A9A9A9] leading-relaxed font-sans font-light"
        >
          A track record of competitive validation, practical STEM lab instruction, and institutional student representation.
        </motion.p>
      </div>

      {/* Academic Anchor Banner */}
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="p-6 sm:p-8 rounded-2xl bg-[#111111]/90 border border-[#303030] mb-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-[#171717] border border-[#303030] text-[#F0EEE8]">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#888888] uppercase tracking-wider mb-1">
              CURRENT DEGREE PROGRAM
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-[#F0EEE8]">
              B.Sc. Artificial Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-[#A9A9A9] mt-0.5 font-sans">
              Symbiosis Centre for Applied Artificial Intelligence (SAII), Symbiosis International University, Pune
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-[#A9A9A9] border-t md:border-t-0 md:border-l border-[#303030] pt-4 md:pt-0 md:pl-6">
          <div>
            <div className="text-[#F0EEE8] font-bold">STATUS: ENROLLED</div>
            <div className="text-[11px] text-[#888888]">PUNE, MAHARASHTRA</div>
          </div>
        </div>
      </motion.div>

      {/* Single Vertical Stack: All Milestone Cards Reveal Sequentially as You Scroll */}
      <div className="space-y-6">
        {milestones.map((milestone) => {
          const isAward = milestone.type === 'award';
          const isLeadership = milestone.type === 'leadership';

          return (
            <motion.div
              key={milestone.id}
              initial={reducedMotion ? false : { opacity: 0, y: 32, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-8 rounded-2xl bg-[#111111]/90 border border-[#303030] hover:border-[#606060] transition-all shadow-xl font-mono text-xs"
            >
              {/* Card Header: Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-[#171717] border border-[#303030] text-[#D4D0C8]">
                    {isAward ? (
                      <Award className="w-3.5 h-3.5" />
                    ) : isLeadership ? (
                      <Users className="w-3.5 h-3.5" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <span className="text-[#F0EEE8] font-bold tracking-wider uppercase text-[11px] px-2.5 py-1 rounded bg-[#171717] border border-[#303030]">
                    {milestone.badge}
                  </span>
                  <span className="text-[10px] text-[#888888] uppercase hidden sm:inline">
                    {milestone.type.toUpperCase()}
                  </span>
                </div>

                <span className="text-[#888888] flex items-center gap-1.5 text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  {milestone.date}
                </span>
              </div>

              {/* Title & Organization */}
              <div className="mb-3">
                <h4 className="font-display font-medium text-xl sm:text-2xl text-[#F0EEE8] mb-1">
                  {milestone.title}
                </h4>
                <p className="text-[#888888] text-xs font-mono">
                  {milestone.organization}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-[#A9A9A9] font-sans leading-relaxed mb-5">
                {milestone.description}
              </p>

              {/* Highlights */}
              <div className="pt-3 border-t border-[#262626] flex flex-wrap gap-2">
                {milestone.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[11px] text-[#D4D0C8] bg-[#171717] px-2.5 py-1 rounded-md border border-[#2b2b2b] flex items-center gap-1.5"
                  >
                    <span className="text-[#F0EEE8]">✓</span>
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Associated Artifact Link */}
              {milestone.relatedProject && (
                <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
                  <span className="text-[#888888]">ASSOCIATED ARTIFACT:</span>
                  <a
                    href="#systems"
                    className="text-[#F0EEE8] hover:text-white hover:underline flex items-center gap-1 font-semibold group"
                  >
                    <span>{milestone.relatedProject}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

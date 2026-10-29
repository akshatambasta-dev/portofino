import React from 'react';
import { profile } from '../../data/profile';
import { LinkedInIcon, GitHubIcon } from '../icons/BrandIcons';
import { Mail, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#303030]/60 pt-12 pb-8 text-[#A9A9A9] font-mono text-xs z-10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#303030]">
          {/* Identity & Core Thought */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-[#F0EEE8] font-display font-medium text-base mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
              <span>AKSHAT AMBASTA</span>
            </div>
            <p className="text-xs text-[#A9A9A9] font-sans max-w-md leading-relaxed mb-4">
              {profile.philosophy}
            </p>
            <div className="text-[11px] text-[#A9A9A9]/70 space-y-1">
              <div>INSTITUTION: {profile.institution}</div>
              <div>LOCATION: {profile.location} ({profile.coordinates})</div>
            </div>
          </div>

          {/* Chapters Directory */}
          <div>
            <div className="text-[#F0EEE8] text-xs font-semibold uppercase tracking-wider mb-3">
              STOPS // CHAPTERS
            </div>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#intro" className="hover:text-[#F0EEE8] transition-colors">I // THE INTRODUCTION</a></li>
              <li><a href="#thinking" className="hover:text-[#F0EEE8] transition-colors">II // HOW I THINK</a></li>
              <li><a href="#systems" className="hover:text-[#F0EEE8] transition-colors">III // THE SYSTEMS</a></li>
              <li><a href="#experiments" className="hover:text-[#F0EEE8] transition-colors">IV // THE EXPERIMENTS</a></li>
              <li><a href="#proof" className="hover:text-[#F0EEE8] transition-colors">V // THE PROOF</a></li>
              <li><a href="#channel" className="hover:text-[#F0EEE8] transition-colors">VI // OPEN CHANNEL</a></li>
            </ul>
          </div>

          {/* Communication Nodes */}
          <div>
            <div className="text-[#F0EEE8] text-xs font-semibold uppercase tracking-wider mb-3">
              CHANNELS
            </div>
            <div className="space-y-2 text-[11px]">
              {/* LinkedIn - Verified Live Link */}
              <a
                href={profile.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 rounded bg-[#111111] border border-[#303030] hover:border-[#606060] text-[#F0EEE8] transition-all"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#D4D0C8]" />
                <span className="font-sans font-medium">LinkedIn Profile</span>
                <span className="ml-auto text-[9px] bg-[#171717] border border-[#303030] text-[#D4D0C8] px-1.5 py-0.5 rounded">VERIFIED</span>
              </a>

              {/* GitHub - Placeholder */}
              <div className="flex items-center gap-2 p-2 rounded bg-[#111111] border border-[#262626] text-[#A9A9A9]/60">
                <GitHubIcon className="w-3.5 h-3.5 text-[#666666]" />
                <span className="font-mono text-[10px]">{profile.socials.github.placeholderText}</span>
                <span className="ml-auto text-[9px] bg-[#171717] px-1.5 py-0.5 rounded">PLACEHOLDER</span>
              </div>

              {/* Email - Placeholder */}
              <div className="flex items-center gap-2 p-2 rounded bg-[#111111] border border-[#262626] text-[#A9A9A9]/60">
                <Mail className="w-3.5 h-3.5 text-[#666666]" />
                <span className="font-mono text-[10px]">{profile.socials.email.placeholderText}</span>
                <span className="ml-auto text-[9px] bg-[#171717] px-1.5 py-0.5 rounded">PLACEHOLDER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A9A9A9]/60">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-[#F0EEE8]" />
            <span>AKSHAT AMBASTA // SIGNAL / SYSTEM — 3D EXPERIENTIAL PORTFOLIO</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#F0EEE8]">SYS // OPERATIONAL</span>
            <span>NO TRACKING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

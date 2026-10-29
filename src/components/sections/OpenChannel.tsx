import React, { useState } from 'react';
import { motion } from 'motion/react';
import { profile } from '../../data/profile';
import { LinkedInIcon, GitHubIcon } from '../icons/BrandIcons';
import { Mail, Send, CheckCircle2, Copy } from 'lucide-react';

interface OpenChannelProps {
  reducedMotion?: boolean;
}

export const OpenChannel: React.FC<OpenChannelProps> = ({ reducedMotion = false }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDispatchStatus('transmitting');
    setTimeout(() => {
      setDispatchStatus('sent');
    }, 900);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section
      id="channel"
      className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full z-10 flex flex-col justify-center"
      aria-label="Chapter 06: Open Channel"
    >
      {/* Chapter Metadata Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#A9A9A9] border-b border-[#303030]/60 pb-4 mb-16">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0EEE8]" />
          <span className="tracking-widest uppercase">CHAPTER 06 // OPEN CHANNEL</span>
        </div>
        <span>DIRECT TRANSMISSION</span>
      </div>

      {/* Main Closing Statement */}
      <div className="max-w-3xl mb-16">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 22, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-normal text-[#F0EEE8] leading-tight mb-4"
        >
          Have something worth building?
        </motion.h2>
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-[#A9A9A9] leading-relaxed font-sans font-light"
        >
          Whether discussing hardware-to-cloud architectures, AI and data modeling, robotics workshops, or collaborative engineering initiatives—let's start a conversation.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Channels & Placeholders */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4 font-mono text-xs"
        >
          
          {/* LinkedIn Verified Live Link */}
          <a
            href={profile.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 rounded-xl bg-[#111111]/90 border border-[#303030] hover:border-[#606060] transition-all shadow-md"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 text-[#F0EEE8] font-bold">
                <LinkedInIcon className="w-4 h-4 text-[#D4D0C8]" />
                <span>LINKEDIN PROFILE</span>
              </span>
              <span className="text-[10px] bg-[#171717] border border-[#303030] text-[#D4D0C8] px-2 py-0.5 rounded font-bold">
                VERIFIED LIVE
              </span>
            </div>
            <div className="text-sm font-sans text-[#F0EEE8] group-hover:text-[#D4D0C8] transition-colors truncate">
              linkedin.com/in/akshat-ambasta-3aaaab41b
            </div>
            <div className="text-[11px] text-[#888888] mt-1 font-sans">
              Connect on LinkedIn for professional &amp; academic correspondence
            </div>
          </a>

          {/* GitHub Placeholder */}
          <div className="p-5 rounded-xl bg-[#111111]/90 border border-[#303030] text-[#A9A9A9]">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 text-[#888888] font-semibold">
                <GitHubIcon className="w-4 h-4 text-[#888888]" />
                <span>GITHUB REPOSITORY</span>
              </span>
              <span className="text-[10px] bg-[#171717] border border-[#262626] text-[#888888] px-2 py-0.5 rounded">
                PLACEHOLDER
              </span>
            </div>
            <div className="text-sm text-[#F0EEE8]/80 font-mono">
              {profile.socials.github.placeholderText}
            </div>
            <div className="text-[11px] text-[#888888] mt-1 flex items-center justify-between font-sans">
              <span>Ready for active GitHub URL</span>
              <button
                onClick={() => copyToClipboard("[add GitHub URL]", "github")}
                className="text-[#F0EEE8] hover:underline flex items-center gap-1 text-[11px] font-mono"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'github' ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Email Placeholder */}
          <div className="p-5 rounded-xl bg-[#111111]/90 border border-[#303030] text-[#A9A9A9]">
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-2 text-[#888888] font-semibold">
                <Mail className="w-4 h-4 text-[#888888]" />
                <span>PUBLIC CONTACT EMAIL</span>
              </span>
              <span className="text-[10px] bg-[#171717] border border-[#262626] text-[#888888] px-2 py-0.5 rounded">
                PLACEHOLDER
              </span>
            </div>
            <div className="text-sm text-[#F0EEE8]/80 font-mono">
              {profile.socials.email.placeholderText}
            </div>
            <div className="text-[11px] text-[#888888] mt-1 flex items-center justify-between font-sans">
              <span>Ready for preferred email address</span>
              <button
                onClick={() => copyToClipboard("[add email]", "email")}
                className="text-[#F0EEE8] hover:underline flex items-center gap-1 text-[11px] font-mono"
              >
                <Copy className="w-3 h-3" />
                <span>{copiedLink === 'email' ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          {/* Resolution Sphere Echo Indicator */}
          <div className="p-4 rounded-lg bg-[#0B0B0B] border border-[#262626] flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F0EEE8] animate-pulse shrink-0" />
            <div className="text-[11px] text-[#888888] font-sans">
              Sphere resolved. Systems standing by for inquiries and collaborative projects.
            </div>
          </div>

        </motion.div>

        {/* Right Column: Direct Dispatch Message Box */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-[#111111]/90 border border-[#303030] rounded-xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-[#303030] mb-6 font-mono text-xs">
            <span className="text-[#F0EEE8] uppercase tracking-wider font-semibold flex items-center gap-2">
              <Send className="w-3.5 h-3.5 text-[#D4D0C8]" />
              <span>DISPATCH INQUIRY</span>
            </span>
            <span className="text-[10px] text-[#888888]">
              CHANNEL 06 // ACTIVE
            </span>
          </div>

          {dispatchStatus === 'sent' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#171717] border border-[#303030] mx-auto flex items-center justify-center text-[#F0EEE8]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-[#F0EEE8]">
                Transmission Dispatched
              </h3>
              <p className="text-xs sm:text-sm text-[#A9A9A9] max-w-sm mx-auto font-sans leading-relaxed">
                Your message was logged in the client session. You can also connect directly via the verified LinkedIn profile above.
              </p>
              <button
                onClick={() => setDispatchStatus('idle')}
                className="mt-4 px-4 py-2 rounded bg-[#171717] border border-[#303030] text-xs font-mono text-[#F0EEE8] hover:bg-[#202020] transition-colors"
              >
                TRANSMIT ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#888888] mb-1.5 uppercase tracking-wider text-[10px]">
                    SENDER NAME / CALLSIGN
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name or organization"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#050505] border border-[#303030] focus:border-[#606060] rounded p-3 text-[#F0EEE8] placeholder:text-[#444444] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#888888] mb-1.5 uppercase tracking-wider text-[10px]">
                    CONTACT FREQUENCY / EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#050505] border border-[#303030] focus:border-[#606060] rounded p-3 text-[#F0EEE8] placeholder:text-[#444444] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#888888] mb-1.5 uppercase tracking-wider text-[10px]">
                  MESSAGE / SIGNAL PAYLOAD
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Inquiry regarding IoT hardware, AI prototypes, STEM workshops..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#050505] border border-[#303030] focus:border-[#606060] rounded p-3 text-[#F0EEE8] placeholder:text-[#444444] outline-none transition-colors resize-none font-sans text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={dispatchStatus === 'transmitting'}
                className="w-full py-3.5 px-4 rounded bg-[#F0EEE8] hover:bg-[#D4D0C8] disabled:opacity-50 text-[#050505] font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {dispatchStatus === 'transmitting' ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-[#050505] border-t-transparent animate-spin" />
                    <span>DISPATCHING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>TRANSMIT MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

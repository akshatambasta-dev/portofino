import React, { useState, useEffect } from 'react';
import { PersistentCanvas } from './components/three/PersistentCanvas';
import type { SceneState } from './components/three/MorphingParticles';
import { CustomCursor } from './components/layout/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { ChapterProgress } from './components/layout/ChapterProgress';
import { TheIntroduction } from './components/sections/TheIntroduction';
import { HowIThink } from './components/sections/HowIThink';
import { TheSystems } from './components/sections/TheSystems';
import { TheExperiments } from './components/sections/TheExperiments';
import { TheProof } from './components/sections/TheProof';
import { OpenChannel } from './components/sections/OpenChannel';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/projects/ProjectModal';
import type { ProjectCaseStudy } from './data/projects';

export const App: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [force2D, setForce2D] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  useEffect(() => {
    // Check initial system prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setReducedMotion(true);
    }
  }, []);

  useEffect(() => {
    // Single deterministic scroll tracker across all 6 story chapters
    const sectionIds = [
      'intro',
      'thinking',
      'systems',
      'experiments',
      'proof',
      'channel'
    ];

    let lastKnownSection = 'intro';

    const handleScroll = () => {
      // Calculate active section based on viewport center
      const scrollPos = window.scrollY + window.innerHeight * 0.45;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          if (lastKnownSection !== sectionIds[i]) {
            lastKnownSection = sectionIds[i];
            setActiveSection(sectionIds[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map active section to the 3D scene state
  const currentSceneState: SceneState = (
    activeSection === 'intro' ? 'intro' :
    activeSection === 'thinking' ? 'thinking' :
    activeSection === 'systems' ? 'systems' :
    activeSection === 'experiments' ? 'experiments' :
    activeSection === 'proof' ? 'proof' :
    'channel'
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0EEE8] relative selection:bg-[#F0EEE8]/20 selection:text-[#F0EEE8]">
      {/* Accessible Skip Link */}
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#F0EEE8] text-[#050505] font-mono text-xs font-bold rounded shadow-lg"
      >
        Skip to main content
      </a>

      {/* Persistent Single Morphing 3D Particle Canvas */}
      <PersistentCanvas
        sceneState={currentSceneState}
        reducedMotion={reducedMotion}
        force2D={force2D}
      />

      {/* Floating Monochromatic Smooth Cursor Marker */}
      <CustomCursor reducedMotion={reducedMotion} />

      {/* Main HUD Navigation Bar */}
      <Navbar
        force2D={force2D}
        onToggle2D={() => setForce2D((prev) => !prev)}
        activeSection={activeSection}
      />

      {/* Desktop Vertical 6-Chapter HUD Tracker */}
      <ChapterProgress activeSection={activeSection} />

      {/* Main Story Arc: 6 Chapters */}
      <main id="main-content" tabIndex={-1} className="outline-none relative z-10">
        {/* Chapter 01: The Introduction */}
        <TheIntroduction reducedMotion={reducedMotion} />

        {/* Chapter 02: How I Think */}
        <HowIThink reducedMotion={reducedMotion} />

        {/* Chapter 03: The Systems (VoltVision & File2Base) */}
        <TheSystems
          reducedMotion={reducedMotion}
          onOpenCaseStudy={(p) => setSelectedProject(p)}
        />

        {/* Chapter 04: The Experiments (Smart Plant, DOOMSDAY, Carbon Tracker) */}
        <TheExperiments
          reducedMotion={reducedMotion}
          onOpenCaseStudy={(p) => setSelectedProject(p)}
        />

        {/* Chapter 05: The Proof (Verified Recognition & Experience) */}
        <TheProof reducedMotion={reducedMotion} />

        {/* Chapter 06: Open Channel (Direct Transmission) */}
        <OpenChannel reducedMotion={reducedMotion} />
      </main>

      {/* Deep Case Study Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* System Footer */}
      <Footer />
    </div>
  );
};

export default App;

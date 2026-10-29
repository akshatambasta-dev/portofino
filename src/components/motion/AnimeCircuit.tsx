import React, { useEffect, useRef } from 'react';
import { createScope, animate } from 'animejs';

interface AnimeCircuitProps {
  className?: string;
  active?: boolean;
}

export const AnimeCircuit: React.FC<AnimeCircuitProps> = ({ className = '', active = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    // Use Anime.js createScope for scoped isolation and clean teardown
    const scope = createScope({ root: containerRef.current });

    const paths = containerRef.current.querySelectorAll('.circuit-trace');
    const nodes = containerRef.current.querySelectorAll('.circuit-node');

    if (paths.length > 0) {
      animate(paths, {
        strokeDashoffset: [200, 0],
        opacity: [0.2, 0.9, 0.4],
        duration: 3200,
        delay: (_el, i) => (i ?? 0) * 400,
        ease: 'easeInOutSine',
        loop: true,
        alternate: true
      });
    }

    if (nodes.length > 0) {
      animate(nodes, {
        scale: [0.8, 1.4, 0.9],
        opacity: [0.3, 1, 0.4],
        duration: 2000,
        delay: (_el, i) => (i ?? 0) * 350,
        ease: 'easeInOutQuad',
        loop: true,
        alternate: true
      });
    }

    return () => {
      scope.revert();
    };
  }, [active]);

  return (
    <div ref={containerRef} className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 400 120" fill="none">
        {/* Subtle background static tracks */}
        <path d="M 0 30 H 120 L 160 70 H 280 L 320 30 H 400" stroke="rgba(82, 230, 210, 0.12)" strokeWidth="1" />
        <path d="M 0 90 H 80 L 120 50 H 240 L 270 90 H 400" stroke="rgba(166, 255, 107, 0.08)" strokeWidth="1" />

        {/* Dynamic animated circuit traces controlled strictly by Anime.js */}
        <path
          className="circuit-trace"
          d="M 0 30 H 120 L 160 70 H 280 L 320 30 H 400"
          stroke="#52E6D2"
          strokeWidth="1.5"
          strokeDasharray="200"
          strokeDashoffset="200"
        />
        <path
          className="circuit-trace"
          d="M 400 90 H 320 L 280 50 H 160 L 120 90 H 0"
          stroke="#A6FF6B"
          strokeWidth="1.2"
          strokeDasharray="200"
          strokeDashoffset="200"
        />

        {/* Pulsing junction nodes */}
        <circle className="circuit-node" cx="120" cy="30" r="3" fill="#52E6D2" />
        <circle className="circuit-node" cx="160" cy="70" r="3" fill="#52E6D2" />
        <circle className="circuit-node" cx="280" cy="70" r="3" fill="#A6FF6B" />
        <circle className="circuit-node" cx="320" cy="30" r="3" fill="#52E6D2" />
        <circle className="circuit-node" cx="120" cy="90" r="2.5" fill="#A6FF6B" />
        <circle className="circuit-node" cx="270" cy="90" r="2.5" fill="#52E6D2" />
      </svg>
    </div>
  );
};

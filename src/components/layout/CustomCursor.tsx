import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

interface CustomCursorProps {
  reducedMotion: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ reducedMotion }) => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for cursor trailing
  const cursorX = useSpring(-100, { stiffness: 450, damping: 35 });
  const cursorY = useSpring(-100, { stiffness: 450, damping: 35 });

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], [role="tab"]');
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handlePointerOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
    };
  }, [cursorX, cursorY, visible]);

  if (reducedMotion || isTouchDevice || !visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Target Halo */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#505050]/50 transition-colors pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          width: hovered ? 38 : 22,
          height: hovered ? 38 : 22,
          backgroundColor: hovered ? 'rgba(240, 238, 232, 0.04)' : 'transparent',
          borderColor: hovered ? '#F0EEE8' : '#404040',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      />

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0EEE8] pointer-events-none shadow-[0_0_6px_rgba(255,255,255,0.6)]"
        style={{
          x: cursorX,
          y: cursorY,
          width: hovered ? 4 : 3,
          height: hovered ? 4 : 3,
        }}
      />
    </div>
  );
};

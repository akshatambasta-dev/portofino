import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { MorphingParticles } from './MorphingParticles';
import { AtelierCelestialField } from './AtelierCelestialField';
import type { SceneState } from './MorphingParticles';
import { CanvasFallback } from './CanvasFallback';

interface PersistentCanvasProps {
  sceneState: SceneState;
  reducedMotion?: boolean;
  force2D?: boolean;
  activeHubIndex?: number;
}

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("Persistent WebGL Context unavailable, using 2D fallback:", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export const PersistentCanvas: React.FC<PersistentCanvasProps> = ({
  sceneState,
  reducedMotion = false,
  force2D = false,
  activeHubIndex = 0
}) => {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebGLSupported(false);
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (force2D || !webGLSupported) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40">
        <CanvasFallback reason={!webGLSupported ? "HARDWARE ACCELERATION OFF" : "2D MODE"} />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <WebGLErrorBoundary fallback={<CanvasFallback reason="FALLBACK ACTIVE" />}>
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 5.8], fov: 45 }}
            dpr={[1, 1.75]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            className="w-full h-full pointer-events-none"
          >
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 8, 5]} intensity={1.1} color="#F0EEE8" />
            <pointLight position={[-6, -4, -4]} intensity={0.6} color="#888888" />
            <AtelierCelestialField
              sceneState={sceneState}
              reducedMotion={reducedMotion}
            />
            <MorphingParticles
              sceneState={sceneState}
              reducedMotion={reducedMotion}
              activeHubIndex={activeHubIndex}
            />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
};

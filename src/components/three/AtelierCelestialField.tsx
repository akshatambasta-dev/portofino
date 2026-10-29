import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import type { SceneState } from './MorphingParticles';

interface AtelierCelestialFieldProps {
  sceneState: SceneState;
  reducedMotion?: boolean;
}

const STAR_COUNT = 1600;

export const AtelierCelestialField: React.FC<AtelierCelestialFieldProps> = ({
  sceneState,
  reducedMotion = false
}) => {
  const { camera } = useThree();
  const starsRef = useRef<THREE.Points>(null);
  const meteorData = useRef({
    active: false,
    timer: 2.0,
    progress: 0,
    start: new THREE.Vector3(-14, 8, -18),
    dir: new THREE.Vector3(1.2, -0.6, -0.3).normalize(),
    speed: 16
  });

  // Camera targets keep the 3D particle system centered across all sections
  const cameraTargets = useMemo<Record<SceneState, { y: number; z: number }>>(() => ({
    intro: { y: 0.0, z: 5.8 },
    thinking: { y: 0.0, z: 5.8 },
    systems: { y: 0.0, z: 5.8 },
    experiments: { y: 0.0, z: 5.8 },
    proof: { y: 0.0, z: 5.8 },
    channel: { y: 0.0, z: 5.8 }
  }), []);

  // Precompute starfield distributed across space & depth
  const { positions, originalColors, phases } = useMemo(() => {
    const pos = new Float32Array(STAR_COUNT * 3);
    const col = new Float32Array(STAR_COUNT * 3);
    const ph = new Float32Array(STAR_COUNT);

    const ivory = new THREE.Color('#F0EEE8');
    const gold = new THREE.Color('#D4D0C8');
    const dim = new THREE.Color('#555555');

    for (let i = 0; i < STAR_COUNT; i++) {
      // Spatial volume: wide and deep
      pos[i * 3] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 32 - 1.0;
      pos[i * 3 + 2] = -5 - Math.random() * 30; // Behind the main scene

      const rnd = Math.random();
      const c = rnd > 0.85 ? ivory : rnd > 0.4 ? gold : dim;
      col[i * 3] = c.r * 0.7;
      col[i * 3 + 1] = c.g * 0.7;
      col[i * 3 + 2] = c.b * 0.7;

      ph[i] = Math.random() * Math.PI * 2;
    }

    return {
      positions: pos,
      originalColors: col,
      phases: ph
    };
  }, []);

  // Meteor line setup using Three.js Line primitive
  const { meteorGeo, meteorMesh } = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(6);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.LineBasicMaterial({
      color: '#F0EEE8',
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    const mesh = new THREE.Line(geo, mat);
    return { meteorGeo: geo, meteorMesh: mesh };
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // 1. Smooth Camera Descent (The Atelier spatial descent through stops)
    if (!reducedMotion) {
      const target = cameraTargets[sceneState] || cameraTargets.intro;
      const isMobile = state.viewport.aspect < 1.0;
      const targetZ = isMobile ? 7.2 : target.z;
      const camLerp = Math.min(delta * 2.0, 0.08);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, target.y, camLerp);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, camLerp);

      // Subtle breathing camera tilt from cursor (disabled on mobile to keep centered)
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, isMobile ? 0 : pointer.x * 0.3, 0.04);
    }

    // 2. Stars Proximity Glow & Parallax Twinkle
    if (starsRef.current) {
      const colorAttr = starsRef.current.geometry.attributes.color;
      const colArray = colorAttr.array as Float32Array;

      // Pointer proximity warmth: screen cursor position in range
      const cursorX = pointer.x * 12;
      const cursorY = pointer.y * 8;

      for (let i = 0; i < STAR_COUNT; i++) {
        const sx = positions[i * 3];
        const sy = positions[i * 3 + 1];

        // Twinkle
        const twinkle = 0.8 + 0.2 * Math.sin(time * 1.5 + phases[i]);

        // Distance in 2D projection
        const dx = sx - cursorX;
        const dy = sy - cursorY;
        const distSq = dx * dx + dy * dy;
        const nearBoost = distSq < 16 ? (1 - Math.sqrt(distSq) / 4) * 0.8 : 0;

        colArray[i * 3] = originalColors[i * 3] * twinkle + nearBoost;
        colArray[i * 3 + 1] = originalColors[i * 3 + 1] * twinkle + nearBoost * 0.95;
        colArray[i * 3 + 2] = originalColors[i * 3 + 2] * twinkle + nearBoost * 0.85;
      }
      colorAttr.needsUpdate = true;
    }

    // 3. Meteor Streaks (Occasional quiet shooting stars across depth)
    if (!reducedMotion) {
      const m = meteorData.current;
      m.timer -= delta;

      if (!m.active && m.timer <= 0) {
        m.active = true;
        m.progress = 0;
        m.start.set(
          (Math.random() - 0.5) * 24,
          6 + Math.random() * 4,
          -15 - Math.random() * 10
        );
        m.dir.set((Math.random() - 0.5) * 1.5, -1.0, 0.2).normalize();
      }

      if (m.active) {
        m.progress += delta * 1.6;
        const currentHead = m.start.clone().addScaledVector(m.dir, m.progress * m.speed);
        const currentTail = currentHead.clone().addScaledVector(m.dir, -3.2);

        const posAttr = meteorGeo.attributes.position;
        const arr = posAttr.array as Float32Array;
        arr[0] = currentTail.x;
        arr[1] = currentTail.y;
        arr[2] = currentTail.z;
        arr[3] = currentHead.x;
        arr[4] = currentHead.y;
        arr[5] = currentHead.z;
        posAttr.needsUpdate = true;

        const mat = meteorMesh.material as THREE.LineBasicMaterial;
        mat.opacity = Math.sin(Math.min(m.progress, 1) * Math.PI) * 0.45;

        if (m.progress >= 1.0) {
          m.active = false;
          m.timer = 5.0 + Math.random() * 6.0;
          mat.opacity = 0;
        }
      }
    }
  });

  return (
    <group>
      {/* Background Celestial Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[originalColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.024}
          vertexColors
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      {/* Occasional Meteor Streak */}
      <primitive object={meteorMesh} />
    </group>
  );
};

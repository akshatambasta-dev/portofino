import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export type SceneState =
  | 'intro'         // Ch 1: Sphere
  | 'thinking'      // Ch 2: Expanded Tri-Domain Network
  | 'systems'       // Ch 3: Structured Waveform / Technical Grid
  | 'experiments'   // Ch 4: Constellation Clusters
  | 'proof'         // Ch 5: Gyroscopic Precision Orbit Rings
  | 'channel';      // Ch 6: Resolution Sphere

interface MorphingParticlesProps {
  sceneState: SceneState;
  reducedMotion?: boolean;
  activeHubIndex?: number;
}

const PARTICLE_COUNT = 2800;
const LINE_COUNT = 180;
const SATURN_COUNT = 420;

export const MorphingParticles: React.FC<MorphingParticlesProps> = ({
  sceneState,
  reducedMotion = false,
  activeHubIndex = 0
}) => {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  const wireCoreRef = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const saturnGroupRef = useRef<THREE.Group>(null);
  const saturnPointsRef = useRef<THREE.Points>(null);

  // Transition Dispersion Tracking (Disperse once upon section scroll, then form shape)
  const prevSceneStateRef = useRef<SceneState>(sceneState);
  const transitionRef = useRef({
    isTransitioning: false,
    startTime: 0,
    duration: 1.0
  });

  // Interactive Click Ripple state (Atelier New York "pressRipple")
  const rippleRef = useRef({
    active: false,
    startTime: 0,
    origin: new THREE.Vector3(0, 0, 1.8),
    speed: 4.5
  });

  // Global pointer listener to trigger ripple shockwave across the 3D core
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest('a, button, input, textarea, select, [role="button"], [role="tab"]')
      ) {
        return;
      }
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;

      const ndcX = (clientX / window.innerWidth) * 2 - 1;
      const ndcY = -(clientY / window.innerHeight) * 2 + 1;

      rippleRef.current.active = true;
      rippleRef.current.startTime = performance.now() / 1000;
      rippleRef.current.origin.set(ndcX * 1.6, ndcY * 1.6, 1.2);

      window.dispatchEvent(
        new CustomEvent('atelier-pulse', {
          detail: { x: clientX, y: clientY }
        })
      );
    };

    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, []);

  // Precompute target geometries and individual dispersion directions
  const {
    initialPositions,
    targetPositions,
    particleColors,
    dispersionVectors,
    linePairs,
    saturnPositions,
    saturnColors
  } = useMemo(() => {
    const count = PARTICLE_COUNT;
    const initial = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const dispersions = new Float32Array(count * 3);

    // Color tones: Ivory, Silver, Soft Grey
    const ivory = new THREE.Color('#F0EEE8');
    const silver = new THREE.Color('#D4D0C8');
    const midGrey = new THREE.Color('#888888');
    const darkSilver = new THREE.Color('#555555');

    // Precompute random 3D dispersion outward vector for each particle
    for (let i = 0; i < count; i++) {
      const u = Math.random() * 2 - 1;
      const theta = Math.random() * Math.PI * 2;
      const r = Math.sqrt(1 - u * u);
      const mag = 1.0 + Math.random() * 2.2;

      dispersions[i * 3] = r * Math.cos(theta) * mag;
      dispersions[i * 3 + 1] = r * Math.sin(theta) * mag;
      dispersions[i * 3 + 2] = u * mag;
    }

    // 1. Sphere target (Fibonacci sphere distribution)
    const sphere = new Float32Array(count * 3);
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);

      const isInner = i < count * 0.2;
      const r = isInner ? 0.6 + Math.random() * 0.5 : 1.8 + (Math.random() - 0.5) * 0.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      sphere[i * 3] = x;
      sphere[i * 3 + 1] = y;
      sphere[i * 3 + 2] = z;

      initial[i * 3] = x;
      initial[i * 3 + 1] = y;
      initial[i * 3 + 2] = z;

      const rnd = Math.random();
      const col = rnd > 0.65 ? ivory : rnd > 0.3 ? silver : rnd > 0.1 ? midGrey : darkSilver;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    // 2. Network target (Expanded shell with 3 concentrated nodal hubs)
    const network = new Float32Array(count * 3);
    const hubs = [
      new THREE.Vector3(-1.6, 1.2, 0),   // Hub A: AI & Data
      new THREE.Vector3(1.6, 1.0, -0.4),  // Hub B: Software Engineering
      new THREE.Vector3(0, -1.5, 0.5)     // Hub C: Embedded Systems
    ];

    for (let i = 0; i < count; i++) {
      if (i < count * 0.6) {
        const hubIdx = i % 3;
        const hub = hubs[hubIdx];
        const spread = 0.75 + Math.random() * 0.6;
        const angle = Math.random() * Math.PI * 2;
        const elev = (Math.random() - 0.5) * Math.PI;

        network[i * 3] = hub.x + spread * Math.cos(angle) * Math.cos(elev);
        network[i * 3 + 1] = hub.y + spread * Math.sin(elev);
        network[i * 3 + 2] = hub.z + spread * Math.sin(angle) * Math.cos(elev);
      } else {
        const r = 2.6 + Math.random() * 0.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        network[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        network[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        network[i * 3 + 2] = r * Math.cos(phi);
      }
    }

    // 3. Systems target (Structured Undulating Waveform & Technical Array)
    const systems = new Float32Array(count * 3);
    const cols = 56;
    const rows = 50;

    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const normX = (col / cols - 0.5) * 4.6;
      const normY = (row / rows - 0.5) * 3.4;
      const normZ = Math.sin(normX * 2.5) * 0.45 + Math.cos(normY * 3.0) * 0.3;

      systems[i * 3] = normX;
      systems[i * 3 + 1] = normY;
      systems[i * 3 + 2] = normZ;
    }

    // 4. Experiments target (Three distinct orbital constellation clusters)
    const experiments = new Float32Array(count * 3);
    const clusterCenters = [
      new THREE.Vector3(-1.8, -0.2, 0),  // Cluster 1: Smart Plant
      new THREE.Vector3(0, 1.4, -0.3),    // Cluster 2: DOOMSDAY
      new THREE.Vector3(1.8, -0.4, 0.3)   // Cluster 3: Carbon Tracker
    ];

    for (let i = 0; i < count; i++) {
      const cIdx = i % 3;
      const center = clusterCenters[cIdx];
      const r = 0.55 + Math.random() * 0.55;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      experiments[i * 3] = center.x + r * Math.sin(phi) * Math.cos(theta);
      experiments[i * 3 + 1] = center.y + r * Math.sin(phi) * Math.sin(theta);
      experiments[i * 3 + 2] = center.z + r * Math.cos(phi);
    }

    // 5. Proof target (Concentric Gyroscopic Instrument Orbit Rings)
    const proof = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const ringIdx = i % 4;
      const radius = [1.2, 1.8, 2.3, 2.8][ringIdx];
      const angle = (i / (count / 4)) * Math.PI * 2 + (Math.random() - 0.5) * 0.1;
      const tilt = [0.2, -0.4, 0.6, -0.2][ringIdx];

      proof[i * 3] = radius * Math.cos(angle);
      proof[i * 3 + 1] = radius * Math.sin(angle) * Math.cos(tilt);
      proof[i * 3 + 2] = radius * Math.sin(angle) * Math.sin(tilt);
    }

    // 6. Channel target (Calm Resolution Sphere)
    const channel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const r = 1.45 + (Math.random() - 0.5) * 0.15;

      channel[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      channel[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      channel[i * 3 + 2] = r * Math.cos(phi);
    }

    // Constellation Line pairs between nodes
    const pairs: [number, number][] = [];
    for (let i = 0; i < LINE_COUNT; i++) {
      const a = (i * 15) % count;
      const b = (a + (i % 5) + 1) % count;
      pairs.push([a, b]);
    }

    // Saturn Bead Ring setup (Chapter 06 - Threshold)
    const sPos = new Float32Array(SATURN_COUNT * 3);
    const sCol = new Float32Array(SATURN_COUNT * 3);
    for (let i = 0; i < SATURN_COUNT; i++) {
      const a = (i / SATURN_COUNT) * Math.PI * 2;
      const r = 2.2 + (Math.random() - 0.5) * 0.45;
      sPos[i * 3] = Math.cos(a) * r;
      sPos[i * 3 + 1] = (Math.random() - 0.5) * 0.08;
      sPos[i * 3 + 2] = Math.sin(a) * r;

      const c = Math.random() > 0.4 ? ivory : silver;
      sCol[i * 3] = c.r;
      sCol[i * 3 + 1] = c.g;
      sCol[i * 3 + 2] = c.b;
    }

    return {
      initialPositions: initial,
      targetPositions: {
        intro: sphere,
        thinking: network,
        systems,
        experiments,
        proof,
        channel
      },
      particleColors: colors,
      dispersionVectors: dispersions,
      linePairs: pairs,
      saturnPositions: sPos,
      saturnColors: sCol
    };
  }, []);

  const currentTarget = targetPositions[sceneState] || targetPositions.intro;
  const currentPositionsRef = useRef<Float32Array>(new Float32Array(initialPositions));

  // Dynamic buffer for constellation lines
  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(LINE_COUNT * 6);
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  }, []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const now = performance.now() / 1000;
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;
    const geometry = pointsRef.current.geometry;
    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array as Float32Array;
    const targetArray = currentTarget;

    // Detect section transition: trigger single dispersion cycle
    if (sceneState !== prevSceneStateRef.current) {
      prevSceneStateRef.current = sceneState;
      transitionRef.current.isTransitioning = true;
      transitionRef.current.startTime = now;
    }

    // Calculate Transition Dispersion Factor (Disperse ONCE, then form the shape)
    let dispersionFactor = 0;
    if (transitionRef.current.isTransitioning && !reducedMotion) {
      const elapsed = now - transitionRef.current.startTime;
      const progress = Math.min(Math.max(elapsed / transitionRef.current.duration, 0.0), 1.0);
      // Clean single bell curve: rises, peaks at 0.5, and smoothly returns to 0
      dispersionFactor = Math.sin(progress * Math.PI) * 1.35;

      if (progress >= 1.0) {
        transitionRef.current.isTransitioning = false;
      }
    }

    // Interpolation speed (smooth damping)
    const lerpSpeed = reducedMotion ? 1.0 : Math.min(delta * 3.0, 0.16);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Target position plus chaotic outward dispersion during transition
      const tx = targetArray[i3] + dispersionVectors[i3] * dispersionFactor;
      const ty = targetArray[i3 + 1] + dispersionVectors[i3 + 1] * dispersionFactor;
      const tz = targetArray[i3 + 2] + dispersionVectors[i3 + 2] * dispersionFactor;

      posArray[i3] += (tx - posArray[i3]) * lerpSpeed;
      posArray[i3 + 1] += (ty - posArray[i3 + 1]) * lerpSpeed;
      posArray[i3 + 2] += (tz - posArray[i3 + 2]) * lerpSpeed;
    }

    // Interactive Ripple Shockwave Displacement (The Atelier "pressRipple")
    if (rippleRef.current.active && !reducedMotion) {
      const elapsed = now - rippleRef.current.startTime;
      if (elapsed < 1.1) {
        const waveRadius = elapsed * rippleRef.current.speed;
        const waveWidth = 0.5;
        const colorAttr = pointsRef.current.geometry.attributes.color;
        const colArr = colorAttr.array as Float32Array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const px = posArray[i * 3];
          const py = posArray[i * 3 + 1];
          const pz = posArray[i * 3 + 2];

          const dx = px - rippleRef.current.origin.x;
          const dy = py - rippleRef.current.origin.y;
          const dz = pz - rippleRef.current.origin.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          const diff = Math.abs(dist - waveRadius);
          if (diff < waveWidth) {
            const factor = Math.cos((diff / waveWidth) * Math.PI * 0.5);
            const fade = 1.0 - elapsed / 1.1;
            const displacement = factor * fade * 0.35;

            const norm = dist > 0.001 ? 1 / dist : 0;
            posArray[i * 3] += dx * norm * displacement;
            posArray[i * 3 + 1] += dy * norm * displacement;
            posArray[i * 3 + 2] += dz * norm * displacement;

            colArr[i * 3] = Math.min(1.0, particleColors[i * 3] + factor * fade * 0.7);
            colArr[i * 3 + 1] = Math.min(1.0, particleColors[i * 3 + 1] + factor * fade * 0.6);
            colArr[i * 3 + 2] = Math.min(1.0, particleColors[i * 3 + 2] + factor * fade * 0.5);
          } else {
            colArr[i * 3] = particleColors[i * 3];
            colArr[i * 3 + 1] = particleColors[i * 3 + 1];
            colArr[i * 3 + 2] = particleColors[i * 3 + 2];
          }
        }
        colorAttr.needsUpdate = true;
      } else {
        rippleRef.current.active = false;
      }
    }

    posAttr.needsUpdate = true;

    // Update Constellation Lines positions matching the active morph
    if (linesRef.current) {
      const linePosAttr = lineGeo.attributes.position;
      const lArr = linePosAttr.array as Float32Array;

      for (let i = 0; i < LINE_COUNT; i++) {
        const [a, b] = linePairs[i];
        lArr[i * 6] = posArray[a * 3];
        lArr[i * 6 + 1] = posArray[a * 3 + 1];
        lArr[i * 6 + 2] = posArray[a * 3 + 2];
        lArr[i * 6 + 3] = posArray[b * 3];
        lArr[i * 6 + 4] = posArray[b * 3 + 1];
        lArr[i * 6 + 5] = posArray[b * 3 + 2];
      }
      linePosAttr.needsUpdate = true;

      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      // Lines fade down during dispersing transition so the particles stand out
      const baseOp = sceneState === 'systems' ? 0.32 : sceneState === 'thinking' ? 0.25 : 0.15;
      const targetOp = transitionRef.current.isTransitioning ? 0.05 : baseOp;
      mat.opacity = THREE.MathUtils.lerp(mat.opacity, targetOp, 0.08);
    }

    // Pointer response & state-driven slow rotation
    if (groupRef.current && !reducedMotion) {
      let hubBiasY = 0;
      let hubBiasX = 0;

      if (sceneState === 'thinking') {
        if (activeHubIndex === 0) {
          hubBiasY = 0.3;
          hubBiasX = -0.12;
        } else if (activeHubIndex === 1) {
          hubBiasY = -0.3;
          hubBiasX = -0.08;
        } else if (activeHubIndex === 2) {
          hubBiasY = 0.05;
          hubBiasX = 0.2;
        }
      }

      const targetRotX = pointer.y * 0.22 + hubBiasX;
      const targetRotY = pointer.x * 0.32 + time * 0.045 + hubBiasY;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.04);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.04);
    }

    // Subtle breathing pulse on the inner wireframe core
    if (wireCoreRef.current && !reducedMotion) {
      wireCoreRef.current.rotation.y += delta * 0.15;
      wireCoreRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      const s = 1.0 + Math.sin(time * 0.8) * 0.04;
      wireCoreRef.current.scale.set(s, s, s);
    }

    // Saturn Bead Ring animation (Chapter 06 - The Threshold)
    if (saturnGroupRef.current && !reducedMotion) {
      saturnGroupRef.current.rotation.y += delta * 0.12;
      saturnGroupRef.current.rotation.z = pointer.x * 0.12;

      const isChannel = sceneState === 'channel';
      const targetScale = isChannel ? 1.0 : 0.001;
      const s = THREE.MathUtils.lerp(saturnGroupRef.current.scale.x, targetScale, 0.05);
      saturnGroupRef.current.scale.set(s, s, s);

      if (saturnPointsRef.current) {
        const mat = saturnPointsRef.current.material as THREE.PointsMaterial;
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, isChannel ? 0.75 : 0.0, 0.05);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Geometric Restrained Wire Core */}
      <mesh ref={wireCoreRef}>
        <icosahedronGeometry args={[0.95, 1]} />
        <meshBasicMaterial
          color="#303030"
          wireframe
          transparent
          opacity={sceneState === 'systems' ? 0.08 : 0.28}
        />
      </mesh>

      {/* Persistent Morphing Particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[currentPositionsRef.current, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.026}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      {/* Connective Constellation Filaments */}
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial
          color="#D4D0C8"
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </lineSegments>

      {/* Saturn Bead Ring (Chapter 06 - The Threshold) */}
      <group
        ref={saturnGroupRef}
        rotation={[-0.55, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
      >
        <points ref={saturnPointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[saturnPositions, 3]}
            />
            <bufferAttribute
              attach="attributes-color"
              args={[saturnColors, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.02}
            vertexColors
            transparent
            opacity={0}
            sizeAttenuation
          />
        </points>
      </group>
    </group>
  );
};

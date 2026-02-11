'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// --- FOUR FACES (MIND-MAP) ---
const QUADRANTS = [
  { name: 'Mind', color: '#60a5fa', key: 'mind' as const },
  { name: 'Body & Gear', color: '#f87171', key: 'bodyGear' as const },
  { name: 'Spirit', color: '#fbbf24', key: 'spirit' as const },
  { name: 'Systems & Finances', color: '#34d399', key: 'systemsFinances' as const },
];

// --- 7 TIERS + 7x4 GRID DATA ---
const LEVELS = [
  { level: 1, label: 'Survival', highlight: null },
  { level: 2, label: 'Bribery', highlight: null },
  { level: 3, label: 'Approval', highlight: null },
  { level: 4, label: 'Achievement', highlight: 'The Trap' },
  { level: 5, label: 'Growth', highlight: null },
  { level: 6, label: 'Purpose', highlight: null },
  { level: 7, label: 'Freedom', highlight: 'The Flow Pilot' },
];

type LevelData = {
  mind: string;
  bodyGear: string;
  spirit: string;
  systemsFinances: string;
};

const LEVEL_DATA: LevelData[] = [
  {
    mind: 'Fear and high cortisol.',
    bodyGear: 'Unfit; flying dangerous, outdated gear.',
    spirit: 'Compliance to avoid rules.',
    systemsFinances: 'Financial stress; flying is a burden.',
  },
  {
    mind: "Chasing the adrenaline 'hit'.",
    bodyGear: 'Training/Buying gear only for a specific win.',
    spirit: 'Transactional friendships.',
    systemsFinances: 'Flying purely to get a cert/license.',
  },
  {
    mind: 'Social Mask: Worth tied to club status.',
    bodyGear: "'Pro' gear used as a status symbol.",
    spirit: "Seeking 'Skygod' labels.",
    systemsFinances: "Finances used to 'look the part' of a pro.",
  },
  {
    mind: 'The Trap: Worth tied to XC points.',
    bodyGear: 'Pushing limits; gear optimized for speed over safety.',
    spirit: 'Toxic rivalry; secret lines.',
    systemsFinances: 'Arrival Fallacy: Finances as a scoreboard.',
  },
  {
    mind: 'Studying flow and self-mastery.',
    bodyGear: 'Vessel Integrity: Fitness and gear mastery.',
    spirit: 'Seeking honest mentorship.',
    systemsFinances: 'Optimizing money and time for the craft.',
  },
  {
    mind: "Drive shifts from 'Me' to 'We'.",
    bodyGear: 'Using mastery to teach/guide others.',
    spirit: 'Building the Wingmates tribe.',
    systemsFinances: 'Systems that help others fly safer.',
  },
  {
    mind: 'Dynamic Calm: No-Mind (Mushin).',
    bodyGear: 'Sovereignty: Gear as an extension of the soul.',
    spirit: 'Elemental Art: Primal connection.',
    systemsFinances: 'Life Architecture: Total financial autonomy.',
  },
];

const PYRAMID_HEIGHT = 1.2;
const BASE_SIZE = 4;

// Glow colors: Level 4 = warning red; Levels 5–7 = elemental blue/green
const getTierGlow = (levelIndex: number) => {
  if (levelIndex === 3) return { color: 0xdc2626, emissive: 0x7f1d1d }; // red (The Trap)
  if (levelIndex >= 4) return { color: 0x22d3ee, emissive: 0x0e7490 }; // cyan/teal (Flow Pilot ascent)
  return { color: 0xe5e7eb, emissive: 0 };
};

export default function IntegralPyramid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliceRefs = useRef<{
    meshes: THREE.Mesh[];
    materials: THREE.MeshStandardMaterial[][];
    edgeLines: THREE.LineSegments[];
    edgeMaterials: THREE.LineBasicMaterial[];
  }>({ meshes: [], materials: [], edgeLines: [], edgeMaterials: [] });

  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  // Update pyramid tier appearance when activeLevel changes
  useEffect(() => {
    const { meshes, materials, edgeMaterials } = sliceRefs.current;
    if (meshes.length === 0) return;

    const quadrantColors = [0x60a5fa, 0xf87171, 0xfbbf24, 0x34d399];
    const baseEmissive = 0x111827;

    for (let i = 0; i < 7; i++) {
      const isActive = activeLevel === i + 1;
      const glow = getTierGlow(i);

      materials[i].forEach(mat => {
        mat.emissive = new THREE.Color(isActive ? glow.emissive : baseEmissive);
        mat.emissiveIntensity = isActive ? 0.4 : 0;
      });

      const edgeMat = edgeMaterials[i];
      if (edgeMat) {
        edgeMat.color.setHex(isActive ? glow.color : 0xe5e7eb);
        edgeMat.opacity = isActive ? 1 : 0.6;
      }
    }
  }, [activeLevel]);

  // Build scene and pyramid, store refs
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(8, 6, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0f172a, 1);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const pointLight = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    const spotLight = new THREE.SpotLight(0xffffff, 0.5, 0, Math.PI / 4, 0.5);
    spotLight.position.set(-10, 10, -10);
    scene.add(spotLight);

    const pyramidGroup = new THREE.Group();
    pyramidGroup.rotation.y = Math.PI / 4;

    const quadrantColors = [0x60a5fa, 0xf87171, 0xfbbf24, 0x34d399];
    const baseMatProps = {
      roughness: 0.35,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95,
      emissive: 0x111827,
      emissiveIntensity: 0,
    };

    const meshes: THREE.Mesh[] = [];
    const materials: THREE.MeshStandardMaterial[][] = [];
    const edgeLines: THREE.LineSegments[] = [];
    const edgeMaterials: THREE.LineBasicMaterial[] = [];
    const toDispose: { dispose: () => void }[] = [];

    for (let i = 0; i < 7; i++) {
      const bottomRadius = (BASE_SIZE * (7 - i)) / 7;
      const topRadius = (BASE_SIZE * (7 - (i + 1))) / 7;
      const yPos = i * PYRAMID_HEIGHT - (7 * PYRAMID_HEIGHT) / 2 + PYRAMID_HEIGHT / 2;
      const isApexSlice = topRadius < 0.01;

      const cylGeom = new THREE.CylinderGeometry(topRadius, bottomRadius, PYRAMID_HEIGHT, 4, 1);
      cylGeom.clearGroups();
      cylGeom.addGroup(0, 6, 0);
      cylGeom.addGroup(6, 6, 1);
      cylGeom.addGroup(12, 6, 2);
      cylGeom.addGroup(18, 6, 3);
      if (isApexSlice) {
        cylGeom.addGroup(24, 12, 0);
      } else {
        cylGeom.addGroup(24, 3, 0);
        cylGeom.addGroup(27, 3, 1);
        cylGeom.addGroup(30, 3, 2);
        cylGeom.addGroup(33, 3, 3);
        cylGeom.addGroup(36, 3, 0);
        cylGeom.addGroup(39, 3, 1);
        cylGeom.addGroup(42, 3, 2);
        cylGeom.addGroup(45, 3, 3);
      }

      const mats = quadrantColors.map(
        color =>
          new THREE.MeshStandardMaterial({
            ...baseMatProps,
            color,
          })
      );
      mats.forEach(m => toDispose.push(m));
      materials.push(mats);

      const edgesGeom = new THREE.EdgesGeometry(cylGeom, 15);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xe5e7eb,
        transparent: true,
        opacity: 0.6,
      });
      toDispose.push(cylGeom, edgesGeom, lineMat);
      edgeMaterials.push(lineMat);

      const mesh = new THREE.Mesh(cylGeom, mats);
      mesh.rotation.y = Math.PI / 4;
      mesh.position.y = yPos;
      pyramidGroup.add(mesh);
      meshes.push(mesh);

      const edges = new THREE.LineSegments(edgesGeom, lineMat);
      edges.rotation.y = Math.PI / 4;
      edges.position.y = yPos;
      pyramidGroup.add(edges);
      edgeLines.push(edges);
    }

    scene.add(pyramidGroup);
    sliceRefs.current = { meshes, materials, edgeLines, edgeMaterials };

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    onResize();
    window.addEventListener('resize', onResize);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
      controls.dispose();
      toDispose.forEach(d => d.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      sliceRefs.current = { meshes: [], materials: [], edgeLines: [], edgeMaterials: [] };
    };
  }, []);

  const activeData = activeLevel != null ? LEVEL_DATA[activeLevel - 1] : null;
  const activeLevelInfo = activeLevel != null ? LEVELS[activeLevel - 1] : null;

  return (
    <div
      className="min-h-screen text-white flex flex-col"
      style={{
        background: 'linear-gradient(to top, #020617 0%, #0f172a 35%, #0f172a 100%)',
      }}
    >
      <div className="absolute top-6 left-0 right-0 text-center z-10 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1">Integrated Motivation Model</h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
          Ascent from Survival to Freedom · Hover or tap a tier
        </p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row items-stretch gap-0 lg:gap-6 pt-20 pb-32 lg:pb-8 px-4 max-w-7xl mx-auto w-full">
        {/* Pyramid + overlay tiers */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-[70vh] flex items-center justify-center">
          <div ref={containerRef} className="absolute inset-0 w-full h-full" />
          {/* 7 horizontal hit areas for hover/tap */}
          <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
            <div className="flex-1 flex flex-col pointer-events-auto">
              {/* Top of pyramid = Level 7, bottom = Level 1 */}
              {[...LEVELS].reverse().map(level => (
                <motion.div
                  key={level.level}
                  className="flex-1 min-h-[calc(100%/7)] cursor-pointer flex items-center justify-center"
                  style={{ pointerEvents: 'auto' }}
                  onMouseEnter={() => setActiveLevel(level.level)}
                  onMouseLeave={() => setActiveLevel(null)}
                  onClick={() =>
                    setActiveLevel(prev => (prev === level.level ? null : level.level))
                  }
                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.06)' }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[10px] sm:text-xs text-slate-500 opacity-0 hover:opacity-100 transition-opacity">
                    {level.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quadrant Insight Box (desktop: next to pyramid) */}
        <div className="hidden lg:block w-full lg:max-w-sm shrink-0">
          <AnimatePresence mode="wait">
            {activeData && activeLevelInfo ? (
              <motion.div
                key={activeLevel}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-slate-700/60 bg-slate-900/80 backdrop-blur p-4 h-fit"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-white">{activeLevelInfo.label}</span>
                  {activeLevelInfo.highlight && (
                    <span
                      className={
                        activeLevelInfo.highlight === 'The Trap'
                          ? 'rounded px-2 py-0.5 text-xs font-medium bg-red-500/20 text-red-400'
                          : 'rounded px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400'
                      }
                    >
                      {activeLevelInfo.highlight}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {QUADRANTS.map(q => (
                    <li key={q.key}>
                      <span className="font-medium" style={{ color: q.color }}>
                        {q.name}:
                      </span>{' '}
                      {activeData[q.key]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-slate-700/40 border-dashed bg-slate-900/40 p-6 text-center text-slate-500 text-sm"
              >
                Hover a tier to see quadrant insights
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile: Quadrant card below pyramid */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 z-20 p-4 pt-8 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent">
        <AnimatePresence mode="wait">
          {activeData && activeLevelInfo ? (
            <motion.div
              key={activeLevel}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-slate-700/60 bg-slate-900/90 backdrop-blur p-4 shadow-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-semibold text-white">{activeLevelInfo.label}</span>
                {activeLevelInfo.highlight && (
                  <span
                    className={
                      activeLevelInfo.highlight === 'The Trap'
                        ? 'rounded px-2 py-0.5 text-xs font-medium bg-red-500/20 text-red-400'
                        : 'rounded px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400'
                    }
                  >
                    {activeLevelInfo.highlight}
                  </span>
                )}
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {QUADRANTS.map(q => (
                  <li key={q.key}>
                    <span className="font-medium" style={{ color: q.color }}>
                      {q.name}:
                    </span>{' '}
                    {activeData[q.key]}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-slate-500 text-sm py-2"
            >
              Tap a tier to see quadrant insights
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Legend: Four Faces + 7 Layers */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex flex-wrap justify-center gap-6 sm:gap-10 text-xs text-slate-500 px-4">
        <div>
          <p className="font-semibold text-slate-400 mb-1">Four Faces</p>
          <ul className="flex flex-wrap gap-3">
            {QUADRANTS.map(q => (
              <li key={q.name} style={{ color: q.color }}>
                {q.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-400 mb-1">7 Tiers</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-0">
            {LEVELS.map(l => (
              <li key={l.level}>
                {l.label}
                {l.highlight && (
                  <span
                    className={l.highlight === 'The Trap' ? ' text-red-400' : ' text-emerald-400'}
                  >
                    {' '}
                    ({l.highlight})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

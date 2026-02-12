'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalculatorGroup } from './components/CalculatorGroup';
import { Settings2, Lock, Unlock, ChevronDown } from 'lucide-react';
import { ScaleVariant, WingState, GliderClassDefinition } from './types';
import logo from '@/app/icon.png';

// --- CONFIGURATION ---
const KIT_ACTION_URL = 'https://app.kit.com/forms/8881848/subscriptions';

// Define Glider Classes and their specific ranges
const GLIDER_CLASSES: GliderClassDefinition[] = [
  {
    id: 'school',
    name: 'School',
    classification: 'EN A',
    type: 'solo',
    ranges: {
      underloadedMax: 2.8,
      lightMin: 2.8,
      lightMax: 3.3,
      optimalMin: 3.3,
      optimalMax: 3.8,
      overloadedMin: 3.8,
    },
  },
  {
    id: 'progression',
    name: 'Progression',
    classification: 'Low B',
    type: 'solo',
    ranges: {
      underloadedMax: 3.0,
      lightMin: 3.0,
      lightMax: 3.4,
      optimalMin: 3.4,
      optimalMax: 3.9,
      overloadedMin: 3.9,
    },
  },
  {
    id: 'xc_sport',
    name: 'XC Sport',
    classification: 'High B',
    type: 'solo',
    ranges: {
      underloadedMax: 3.2,
      lightMin: 3.2,
      lightMax: 3.6,
      optimalMin: 3.6,
      optimalMax: 4.0,
      overloadedMin: 4.0,
    },
  },
  {
    id: 'sports_class',
    name: 'Sports Class',
    classification: 'EN C',
    type: 'solo',
    ranges: {
      underloadedMax: 3.3,
      lightMin: 3.3,
      lightMax: 3.9,
      optimalMin: 3.9,
      optimalMax: 4.3,
      overloadedMin: 4.3,
    },
  },
  {
    id: 'performance',
    name: 'Performance',
    classification: 'EN D',
    type: 'solo',
    ranges: {
      underloadedMax: 3.7,
      lightMin: 3.7,
      lightMax: 4.1,
      optimalMin: 4.1,
      optimalMax: 4.5,
      overloadedMin: 4.5,
    },
  },
  {
    id: 'competition',
    name: 'Competition',
    classification: 'CCC',
    type: 'solo',
    ranges: {
      underloadedMax: 4.2,
      lightMin: 4.2,
      lightMax: 4.5,
      optimalMin: 4.5,
      optimalMax: 4.8,
      overloadedMin: 4.8,
    },
  },
  {
    id: 'tandem',
    name: 'Tandem',
    classification: 'Tandem',
    type: 'tandem',
    ranges: {
      underloadedMax: 3.0,
      lightMin: 3.0,
      lightMax: 4.5,
      optimalMin: 4.5,
      optimalMax: 5.3,
      overloadedMin: 5.3,
    },
  },
];

const RANGES = {
  solo: {
    weight: { min: 45, max: 160 },
    area: { min: 17, max: 34 },
  },
  tandem: {
    weight: { min: 90, max: 240 },
    area: { min: 35, max: 45 },
  },
};

const MOBILE_MAX_WIDTH = 1024; // px breakpoint for "mobile" behaviour

const App: React.FC = () => {
  // --- GATE STATE ---
  const [isUnlocked, setIsUnlocked] = useState(false);

  // --- APP STATE ---
  const [wingCount, setWingCount] = useState<number>(2);
  const [selectedClassId, setSelectedClassId] = useState<string>('progression');
  const [isMobile, setIsMobile] = useState(false);

  // Initialize state for up to 6 wings
  const [wings, setWings] = useState<WingState[]>(
    Array.from({ length: 6 }).map((_, index) => ({
      weight: 95,
      area: 26 + index * 1.0,
    }))
  );

  const [lockArea, setLockArea] = useState<boolean>(false);
  const [lockWeight, setLockWeight] = useState<boolean>(false);

  // --- EFFECTS ---

  // 1. Check Unlock Status
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check Local Storage (returning users)
    const hasUnlockedBefore = window.localStorage.getItem('wing_tool_unlocked');

    // Check URL param (new signups coming back from Kit)
    const params = new URLSearchParams(window.location.search);
    const hasAccessParam = params.get('access') === 'granted';

    if (hasUnlockedBefore === 'true' || hasAccessParam) {
      setIsUnlocked(true);

      if (hasAccessParam) {
        window.localStorage.setItem('wing_tool_unlocked', 'true');

        // Clean the URL so it won't keep the ?access=granted param
        params.delete('access');
        const query = params.toString();
        const newUrl =
          window.location.pathname + (query ? `?${query}` : '') + (window.location.hash ?? '');
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, []);

  // 2. Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- LOGIC ---
  const selectedClass = GLIDER_CLASSES.find(c => c.id === selectedClassId) || GLIDER_CLASSES[1];

  // Determine styling variant based on count to fill screen better
  const getVariant = (count: number): ScaleVariant => {
    if (count === 1) return 'large';
    if (count <= 3) return 'standard';
    return 'compact';
  };
  const effectiveWingCount = isMobile ? 1 : wingCount;

  const variant: ScaleVariant = isMobile ? 'compact' : getVariant(effectiveWingCount);

  // Handlers for state updates
  const handleUpdate = (index: number, field: 'weight' | 'area', value: number) => {
    const lockWeightActive = isMobile ? false : lockWeight;
    const lockAreaActive = isMobile ? false : lockArea;

    setWings(prevWings => {
      const newWings = [...prevWings];

      // If locked, update ALL wings to this new value
      if (field === 'weight' && lockWeightActive) {
        return newWings.map(w => ({ ...w, weight: value }));
      }

      if (field === 'area' && lockAreaActive) {
        return newWings.map(w => ({ ...w, area: value }));
      }

      // Otherwise, just update the target wing
      newWings[index] = { ...newWings[index], [field]: value };
      return newWings;
    });
  };

  const toggleLockArea = () => {
    if (isMobile) return;

    if (!lockArea) {
      const targetValue = wings[0].area;
      setWings(prev => prev.map(w => ({ ...w, area: targetValue })));
    }
    setLockArea(!lockArea);
  };

  const toggleLockWeight = () => {
    if (isMobile) return;

    if (!lockWeight) {
      const targetValue = wings[0].weight;
      setWings(prev => prev.map(w => ({ ...w, weight: targetValue })));
    }
    setLockWeight(!lockWeight);
  };

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newClassId = e.target.value;
    const newClass = GLIDER_CLASSES.find(c => c.id === newClassId);

    if (newClass) {
      setSelectedClassId(newClassId);

      // Check if we need to switch ranges (e.g. Solo <-> Tandem)
      const targetRanges = newClass.type === 'tandem' ? RANGES.tandem : RANGES.solo;

      // Clamp existing values to new ranges
      setWings(prev =>
        prev.map(w => ({
          weight: Math.max(targetRanges.weight.min, Math.min(targetRanges.weight.max, w.weight)),
          area: Math.max(targetRanges.area.min, Math.min(targetRanges.area.max, w.area)),
        }))
      );
    }
  };

  return (
    <div className="h-screen w-full bg-slate-100 relative flex flex-col font-sans text-slate-800 selection:bg-sky-200">
      {/* --- 1. THE GATE (OVERLAY) --- */}
      {!isUnlocked && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          {/* Image background behind the unlock form */}
          <div className="absolute inset-0">
            {/* Mobile background */}
            <div className="block lg:hidden w-full h-full bg-[url('https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/wing-load-gmobile.jpg')] bg-cover bg-center" />
            {/* Desktop background */}
            <div className="hidden lg:block w-full h-full bg-[url('https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/wing-load-gdesktop.jpg')] bg-cover bg-center" />
          </div>

          {/* The translucent overlay so text stays readable */}
          <div className="absolute inset-0 bg-white/20 lg:bg-white/30 backdrop-blur-sm" />

          {/* The Signup Card */}
          <div className="relative bg-white shadow-2xl border border-gray-200 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">Unlock the Calculator</h2>

            {/* CONNECTED KIT FORM */}
            <form action={KIT_ACTION_URL} method="post" className="space-y-3">
              <input
                type="email"
                name="email_address"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Unlock Tool
              </button>

              <p className="text-xs text-gray-500 mt-4">
                Using this tool will sign you up to my mailing list. Unsubscribe any time.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* --- 2. THE MAIN APP CONTENT (BLURRED IF LOCKED) --- */}
      <div
        className={`flex flex-col h-full w-full transition-all duration-500 ${
          !isUnlocked
            ? 'filter blur-sm pointer-events-none select-none overflow-hidden opacity-50'
            : ''
        }`}
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-200 -z-10" />

        {/* Header */}
        <header className="flex-shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Fly100 logo"
                className="w-8 h-8"
                width={32}
                height={32}
                priority
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-700 leading-tight">Fly100</span>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  Wing Loading Tool
                </span>
              </div>
            </Link>
          </div>

          {/* Central Controls: Class Selector & Locks */}
          <div className="flex items-center gap-3 mt-1 md:mt-0 md:gap-4 md:mr-auto md:ml-12 w-full md:w-auto">
            {/* Glider Class Dropdown */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedClassId}
                onChange={handleClassChange}
                className="appearance-none pl-3 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 shadow-sm cursor-pointer w-full md:w-auto min-w-[180px]"
              >
                {GLIDER_CLASSES.map(cls => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name} - {cls.classification}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {!isMobile && (
              <>
                <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

                <button
                  onClick={toggleLockArea}
                  className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all border
                  ${
                    lockArea
                      ? 'bg-amber-50 text-amber-600 border-amber-200 shadow-sm'
                      : 'bg-white text-slate-400 border-slate-200 hover:text-slate-600'
                  }
                `}
                >
                  {lockArea ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  Lock Area
                </button>

                <button
                  onClick={toggleLockWeight}
                  className={`
                  flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all border
                  ${
                    lockWeight
                      ? 'bg-amber-50 text-amber-600 border-amber-200 shadow-sm'
                      : 'bg-white text-slate-400 border-slate-200 hover:text-slate-600'
                  }
                `}
                >
                  {lockWeight ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                  Lock Weight
                </button>
              </>
            )}
          </div>

          {/* Right Side: Manual & Wing Count */}
          {!isMobile && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-200/60">
                <Settings2 className="w-4 h-4 text-slate-400 ml-2" />
                <div className="h-4 w-[1px] bg-slate-300 mx-1"></div>
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <button
                    key={num}
                    onClick={() => setWingCount(num)}
                    className={`
                    w-9 h-8 rounded-md font-bold text-sm transition-all flex items-center justify-center relative
                    ${
                      wingCount === num
                        ? 'bg-white text-sky-600 shadow-sm border border-slate-200 ring-1 ring-black/5'
                        : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'
                    }
                  `}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Main Content - Vertical Stack that Fills Height */}
        <main className="flex-grow flex flex-col p-4 gap-3 overflow-y-auto">
          {Array.from({ length: effectiveWingCount }).map((_, index) => (
            <div
              key={index}
              className="w-full flex-1 min-h-0 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <CalculatorGroup
                title={`Wing ${String.fromCharCode(65 + index)}`}
                weight={wings[index].weight}
                area={wings[index].area}
                onWeightChange={val => handleUpdate(index, 'weight', val)}
                onAreaChange={val => handleUpdate(index, 'area', val)}
                variant={variant}
                isWeightLocked={lockWeight}
                isAreaLocked={lockArea}
                gliderClass={selectedClass}
                showFullDescription={isMobile}
              />
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;

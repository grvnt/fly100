'use client';

import React, { useState, useEffect } from 'react';
import { CalculatorGroup } from './components/CalculatorGroup';
import { Cloud, Settings2, Lock, Unlock, ChevronDown } from 'lucide-react';
import { ScaleVariant, WingState, GliderClassDefinition } from './types';

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
      underloadedMax: 3.4,
      lightMin: 3.4,
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
  const [wingCount, setWingCount] = useState<number>(2);
  const [selectedClassId, setSelectedClassId] = useState<string>('progression');

  const [isMobile, setIsMobile] = useState(false);

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

  // Initialize state for up to 6 wings
  const [wings, setWings] = useState<WingState[]>(
    Array.from({ length: 6 }).map((_, index) => ({
      weight: 95,
      area: 26 + index * 1.0,
    }))
  );

  const [lockArea, setLockArea] = useState<boolean>(false);
  const [lockWeight, setLockWeight] = useState<boolean>(false);

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
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-200 -z-10" />

      {/* Header */}
      <header className="flex-shrink-0 bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex flex-col gap-3 items-start md:flex-row md:justify-between md:items-center z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-sky-500 p-2 rounded-lg text-white shadow-lg shadow-sky-500/20">
            <Cloud className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-800 leading-none">
              Wing Loading
            </h1>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
              Comparison Tool
            </span>
          </div>
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
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;

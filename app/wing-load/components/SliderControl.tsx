import React, { useState, useRef, useEffect } from 'react';
import { SliderProps } from '../types';
import { Lock } from 'lucide-react';

interface ExtendedSliderProps extends SliderProps {
  isResult?: boolean;
}

export const SliderControl: React.FC<ExtendedSliderProps> = ({ 
  label, 
  value, 
  min, 
  max, 
  step, 
  unit, 
  onChange, 
  description,
  colorClass = "text-sky-600",
  variant = 'compact',
  isResult = false,
  isLocked = false,
  precision = 1
}) => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Split state for editing
  const [editInt, setEditInt] = useState("");
  const [editDec, setEditDec] = useState("");
  
  const intRef = useRef<HTMLInputElement>(null);
  const decRef = useRef<HTMLInputElement>(null);

  const styles = {
    large: {
      padding: "px-6 py-2",
      label: "text-sm font-bold mb-1",
      desc: "text-xs opacity-70",
      value: "text-5xl tracking-tight", 
      unit: "text-lg ml-1",
      trackHeight: "h-4", 
      thumbSize: "w-8 h-8",
      thumbMargin: "-mt-[10px]",
      bottomRow: "mt-4"
    },
    standard: {
      padding: "px-4 py-1",
      label: "text-xs font-bold mb-1",
      desc: "text-[10px] opacity-70",
      value: "text-3xl tracking-tight",
      unit: "text-sm ml-1",
      trackHeight: "h-2",
      thumbSize: "w-5 h-5",
      thumbMargin: "-mt-[6px]",
      bottomRow: "mt-2"
    },
    compact: {
      padding: "px-3 py-1",
      label: "text-[10px] font-bold",
      desc: "hidden",
      value: "text-xl tracking-tight",
      unit: "text-[10px] ml-0.5",
      trackHeight: "h-1.5",
      thumbSize: "w-3 h-3",
      thumbMargin: "-mt-[3px]",
      bottomRow: "mt-1"
    }
  }[variant];

  // Initialize edit state when starting edit
  const startEditing = () => {
    if (isLocked) return;
    const fixed = value.toFixed(precision);
    const parts = fixed.split('.');
    setEditInt(parts[0]);
    setEditDec(parts[1] || "");
    setIsEditing(true);
  };

  // Auto-focus integer part when entering edit mode
  useEffect(() => {
    if (isEditing) {
      intRef.current?.focus();
      intRef.current?.select();
    }
  }, [isEditing]);

  const commitEdit = () => {
    let valString = editInt;
    
    if (precision > 0) {
      // Pad single decimal digits? Standard behavior is just append.
      // E.g. "95" . "5" -> 95.5
      // "95" . "05" -> 95.05
      valString += "." + editDec;
    }
    
    let newValue = parseFloat(valString);
    
    if (isNaN(newValue)) {
      // Revert if invalid
      setIsEditing(false);
      return;
    }

    // Clamp value
    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;

    onChange(newValue);
    setIsEditing(false);
  };

  const handleBlur = (e: React.FocusEvent) => {
    // If we're just moving focus between our two inputs, don't commit yet
    if (
      e.relatedTarget && 
      (e.relatedTarget === intRef.current || e.relatedTarget === decRef.current)
    ) {
      return;
    }
    commitEdit();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      commitEdit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    } else if (e.key === '.' && precision > 0 && e.currentTarget === intRef.current) {
      // If user types '.' in integer field, jump to decimal field
      e.preventDefault();
      decRef.current?.focus();
      decRef.current?.select();
    }
  };

  // For the 'isResult' background styling (Wing Loading column)
  const bgClass = isResult ? "bg-transparent" : "bg-slate-50 border border-slate-100";

  return (
    <div className={`w-full h-full rounded-xl ${!isResult && bgClass} flex flex-col justify-center ${styles.padding} group relative transition-colors ${isLocked ? 'bg-slate-100/80 border-slate-200' : ''}`}>
      
      {/* Header: Label and Description */}
      <div className="flex justify-between items-start mb-auto pt-2">
        <div>
          <label className={`flex items-center gap-1.5 ${styles.label} text-slate-500 uppercase tracking-wider block`}>
            {label}
            {isLocked && <Lock className="w-3 h-3 text-amber-500/80" />}
          </label>
          <div className={`${styles.desc} text-slate-400 font-medium`}>{description}</div>
        </div>
      </div>

      {/* Center: Big Value Display (Double Click to Edit) */}
      <div className="flex-grow flex items-center justify-center my-1 relative" onDoubleClick={startEditing}>
        {isEditing ? (
          <div className={`${styles.value} font-mono font-bold ${colorClass} leading-none flex items-baseline justify-center w-full`}>
            {/* Integer Input */}
            <input 
              ref={intRef}
              type="text" 
              inputMode="numeric"
              pattern="[0-9]*"
              value={editInt}
              onChange={(e) => setEditInt(e.target.value.replace(/[^0-9-]/g, ''))}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="bg-white border border-sky-300 rounded px-1 min-w-[2ch] w-[3.5ch] text-right focus:outline-none focus:ring-2 focus:ring-sky-200 selection:bg-sky-200"
              style={{ fontSize: 'inherit', lineHeight: 'inherit', color: 'inherit' }}
            />
            
            {precision > 0 && (
              <>
                <span className="opacity-50 mx-0.5">.</span>
                {/* Decimal Input */}
                <input 
                  ref={decRef}
                  type="text" 
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={editDec}
                  onChange={(e) => setEditDec(e.target.value.replace(/[^0-9]/g, ''))}
                  onBlur={handleBlur}
                  onKeyDown={handleKeyDown}
                  className="bg-white border border-sky-300 rounded px-1 min-w-[2ch] w-[3ch] text-left focus:outline-none focus:ring-2 focus:ring-sky-200 selection:bg-sky-200"
                  style={{ fontSize: 'inherit', lineHeight: 'inherit', color: 'inherit' }}
                />
              </>
            )}
            
            <span className={`${styles.unit} font-sans font-medium text-slate-400`}>{unit}</span>
          </div>
        ) : (
          <div 
            className={`${styles.value} font-mono font-bold ${colorClass} leading-none flex items-baseline cursor-text hover:opacity-80 transition-opacity`}
            title="Double-click to edit value"
          >
            {value.toFixed(precision)} <span className={`${styles.unit} font-sans font-medium text-slate-400`}>{unit}</span>
          </div>
        )}
      </div>
      
      {/* Footer: Slider Input */}
      <div className={`mt-auto pb-2 ${styles.bottomRow}`}> 
        <div className={`relative flex items-center w-full`}>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className={`
              w-full appearance-none bg-transparent cursor-pointer
              focus:outline-none disabled:opacity-50
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:${styles.thumbSize}
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:${isLocked ? 'bg-amber-500' : 'bg-sky-500'}
              [&::-webkit-slider-thumb]:shadow-md
              [&::-webkit-slider-thumb]:shadow-sky-500/20
              [&::-webkit-slider-thumb]:transition-all
              [&::-webkit-slider-thumb]:hover:scale-110
              [&::-webkit-slider-thumb]:${styles.thumbMargin}
              
              [&::-webkit-slider-runnable-track]:w-full
              [&::-webkit-slider-runnable-track]:${styles.trackHeight}
              [&::-webkit-slider-runnable-track]:bg-slate-200
              [&::-webkit-slider-runnable-track]:rounded-full
            `}
          />
        </div>
        
        {variant !== 'compact' && (
           <div className="flex justify-between text-[10px] text-slate-300 font-mono mt-1 px-1">
            <span>{min}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    </div>
  );
};
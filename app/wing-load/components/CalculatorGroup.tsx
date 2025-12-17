import React from 'react';
import { SliderControl } from './SliderControl';
import { InfoPanel } from './InfoPanel';
import { ScaleVariant, GliderClassDefinition } from '../types';

interface CalculatorGroupProps {
  title: string;
  weight: number;
  area: number;
  onWeightChange: (val: number) => void;
  onAreaChange: (val: number) => void;
  variant?: ScaleVariant;
  isWeightLocked?: boolean;
  isAreaLocked?: boolean;
  gliderClass: GliderClassDefinition;
}

export const CalculatorGroup: React.FC<CalculatorGroupProps> = ({
  title,
  weight,
  area,
  onWeightChange,
  onAreaChange,
  variant = 'compact',
  isWeightLocked = false,
  isAreaLocked = false,
  gliderClass,
}) => {
  const isTandem = gliderClass.type === 'tandem';

  // Define Dynamic Ranges based on Class Type
  const WEIGHT_MIN = isTandem ? 90 : 45;
  const WEIGHT_MAX = isTandem ? 240 : 160;
  const AREA_MIN = isTandem ? 35 : 17;
  const AREA_MAX = isTandem ? 45 : 34;

  // Loading limits usually fairly similar, but we can extend max slightly to be safe
  const LOADING_MIN = 2.0;
  const LOADING_MAX = 6.0;

  // Derived state
  const currentLoading = weight / area;

  const handleLoadingChange = (newLoading: number) => {
    // Calculate required area for the target loading given the current weight
    // Loading = Weight / Area => Area = Weight / Loading
    let calculatedArea = weight / newLoading;

    // Clamp the area to stay within realistic glider bounds for the current mode
    if (calculatedArea > AREA_MAX) calculatedArea = AREA_MAX;
    if (calculatedArea < AREA_MIN) calculatedArea = AREA_MIN;

    onAreaChange(calculatedArea);
  };

  // Styles based on variant
  const styles = {
    large: {
      containerPadding: 'p-6',
      gap: 'gap-8',
      titleContainer: 'w-full lg:w-32',
      titleText: 'text-4xl',
      infoContainer: 'w-full lg:w-96',
      sliderGap: 'gap-8',
      borderRadius: 'rounded-3xl',
    },
    standard: {
      containerPadding: 'px-4 py-3',
      gap: 'gap-4',
      titleContainer: 'w-full lg:w-24',
      titleText: 'text-xl',
      infoContainer: 'w-full lg:w-64',
      sliderGap: 'gap-4',
      borderRadius: 'rounded-xl',
    },
    compact: {
      containerPadding: 'px-3 py-2',
      gap: 'gap-3',
      titleContainer: 'w-full lg:w-16',
      titleText: 'text-sm',
      infoContainer: 'w-full lg:w-48',
      sliderGap: 'gap-2',
      borderRadius: 'rounded-lg',
    },
  }[variant];

  return (
    <div
      className={`w-full bg-white border border-slate-200 shadow-sm ${styles.borderRadius} flex flex-col lg:flex-row items-stretch ${styles.containerPadding} ${styles.gap}`}
    >
      {/* 1. Title Section (Fixed Width) */}
      <div
        className={`flex flex-col items-center justify-center ${styles.titleContainer} flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-4`}
      >
        <div className={`font-black text-slate-300 ${styles.titleText} tracking-tighter uppercase`}>
          {title.split(' ')[0]}
        </div>
        <div
          className={`font-bold ${isTandem ? 'text-indigo-600' : 'text-sky-600'} ${
            styles.titleText
          } leading-none`}
        >
          {title.split(' ')[1]}
        </div>
      </div>

      {/* 2. Sliders Section (Flexible Grid) */}
      <div className={`flex-grow grid grid-cols-1 md:grid-cols-3 ${styles.sliderGap}`}>
        <div className="h-full">
          <SliderControl
            label="Wing Area (Flat)"
            value={area}
            min={AREA_MIN}
            max={AREA_MAX}
            step={0.01}
            unit="m²"
            onChange={onAreaChange}
            colorClass="text-slate-700"
            variant={variant}
            isLocked={isAreaLocked}
            precision={2}
          />
        </div>

        <div className="h-full">
          <SliderControl
            label="Take-off Weight"
            description="(Pilot + Gear)"
            value={weight}
            min={WEIGHT_MIN}
            max={WEIGHT_MAX}
            step={1}
            unit="kg"
            onChange={onWeightChange}
            colorClass="text-slate-700"
            variant={variant}
            isLocked={isWeightLocked}
            precision={0}
          />
        </div>

        <div className="h-full bg-slate-50 rounded-xl border border-slate-100">
          <SliderControl
            label="Wing Loading"
            description="Result"
            value={currentLoading}
            min={LOADING_MIN}
            max={LOADING_MAX}
            step={0.01}
            unit="kg/m²"
            onChange={handleLoadingChange}
            colorClass={isTandem ? 'text-indigo-600' : 'text-sky-600'}
            variant={variant}
            isResult
            precision={2}
          />
        </div>
      </div>

      {/* 3. Info Panel Section (Fixed Width) */}
      <div className={`flex-shrink-0 ${styles.infoContainer} mt-4 lg:mt-0`}>
        <InfoPanel
          loading={currentLoading}
          weight={weight}
          variant={variant}
          gliderClass={gliderClass}
        />
      </div>
    </div>
  );
};

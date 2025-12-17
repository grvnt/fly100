export interface CalculationState {
  weight: number; // All up weight in kg
  area: number;   // Wing area in m2
  loading: number;// Wing loading in kg/m2
}

export interface WingState {
  weight: number;
  area: number;
}

export type ScaleVariant = 'compact' | 'standard' | 'large';

export interface LoadingRanges {
  underloadedMax: number; // < Value
  lightMin: number;
  lightMax: number;
  optimalMin: number;
  optimalMax: number;
  overloadedMin: number; // > Value
}

export interface GliderClassDefinition {
  id: string;
  name: string; // Selector label (e.g., School)
  classification: string; // Glider Class (e.g., EN A)
  type: 'solo' | 'tandem';
  ranges: LoadingRanges;
}

export interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
  description?: string;
  colorClass?: string;
  variant?: ScaleVariant;
  isLocked?: boolean;
  precision?: number;
}
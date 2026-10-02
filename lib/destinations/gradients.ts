import { Continent } from '@/types/destination';

/**
 * Hero-image fallback: a continent-tinted gradient instead of a hotlinked
 * XC Mag photo (image rights — see plan open question #4). Distinct per
 * continent so the directory grid reads at a glance even before names load.
 */
export const CONTINENT_GRADIENTS: Record<Continent, string> = {
  Europe: 'from-blue-600 via-indigo-600 to-slate-800',
  Asia: 'from-amber-600 via-orange-600 to-rose-800',
  Africa: 'from-yellow-600 via-amber-700 to-stone-800',
  'North America': 'from-teal-600 via-emerald-700 to-slate-800',
  'South America': 'from-rose-600 via-pink-700 to-purple-900',
  Australasia: 'from-violet-600 via-purple-700 to-slate-800',
};

export function getContinentGradient(continent: Continent): string {
  return CONTINENT_GRADIENTS[continent];
}

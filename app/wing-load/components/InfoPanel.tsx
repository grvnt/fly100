import React from 'react';
import { Wind, Feather, Gauge, AlertTriangle, Scale } from 'lucide-react';
import { ScaleVariant, GliderClassDefinition } from '../types';

interface InfoPanelProps {
  loading: number;
  variant?: ScaleVariant;
  gliderClass: GliderClassDefinition;
  showFullDescription?: boolean;
}

// Text content mapping based on glider category
const CONTENT_MAP: Record<string, any> = {
  recreational: {
    redUnder: {
      title: 'Severely Underloaded',
      text: 'Internal pressure is critically low. The wing will feel soft, have poor authority, and be more prone to collapses in turbulence. Avoid flying in wind or active air in this configuration.',
    },
    yellow: {
      title: 'Light',
      text: 'Slower reactions and a softer, more “cushioned” feel can make the ride comfortable. However, reduced pressure limits wind penetration, climb precision, and you may see more frequent small tip movements due to reduced pressure stability.',
    },
    green: {
      title: 'Balanced',
      text: 'The ideal compromise. Good passive safety with enough internal pressure for stability, handling precision, and normal XC conditions.',
    },
    redOver: {
      title: 'Heavy',
      text: 'High wing loading significantly increases inertia and reaction energy. Collapses become more impulsive and less forgiving. Demands better pilot skill.',
    },
  },
  xc_sport: {
    redUnder: {
      title: 'Severely Underloaded',
      text: 'Critically low pressure. Soft structure, delayed reactions, and greater collapse susceptibility in turbulence. Avoid strong or windy conditions.',
    },
    yellow: {
      title: 'Light',
      text: 'Reduced internal tension makes the wing feel softer and less authoritative. Precision suffers in broken lift, wind penetration decreases, and small tip movements become more frequent due to reduced pressure stability.',
    },
    green: {
      title: 'Solid / Agile',
      text: 'Strong internal pressure, cohesive structure, precise handling, and effective turbulence cutting. Great XC configuration.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Energy and speed increase significantly. Handling becomes sharper and collapses more energetic. Requires active, skilled piloting.',
    },
  },
  sports_class: {
    redUnder: {
      title: 'Underloaded',
      text: 'Internal pressure is too low for the wing to maintain its intended profile tension. The structure becomes soft, reactions slow down, and the wing is more susceptible to deformation in turbulence and when using speed bar. Expect vague brake feedback, reduced wind penetration, and a higher likelihood of collapses in active air.',
    },
    yellow: {
      title: 'Light',
      text: 'Reduced internal tension makes the wing feel softer and less authoritative. Precision suffers in broken lift, wind penetration decreases, and small tip movements become more frequent due to reduced pressure stability.',
    },
    green: {
      title: 'Solid / Agile',
      text: 'Strong internal pressure, cohesive structure, precise handling, and effective turbulence cutting. Great XC configuration.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Energy and speed increase significantly. Handling becomes sharper and collapses more energetic. Requires active, skilled piloting.',
    },
  },
  performance: {
    redUnder: {
      title: 'Unflyable / Unsafe',
      text: 'Unsafe. The profile cannot maintain structural tension. Expect frequent tip collapses, profile deformation, and stall tendencies. Do not fly.',
    },
    yellow: {
      title: 'Under-pressurized',
      text: 'At this level, the profile expects tension. Light loading reduces shape stability, decreases efficiency, weakens brake authority, and makes the wing deformable on bar, with more frequent small tip movements due to reduced pressure stability.',
    },
    green: {
      title: 'Race Optimized',
      text: 'Full structural tension. Rigid profile, authority at speed, and excellent solidity in turbulence.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Very high pressure and energy. Reactions become explosive. Shock-loading consequences increase. Requires elite pilot skill.',
    },
  },
  competition: {
    redUnder: {
      title: 'Unflyable / Unsafe',
      text: 'Unsafe. The wing cannot maintain designed profile tension. Frequent deformation and cravat risk. Do not fly.',
    },
    yellow: {
      title: 'Under-pressurized',
      text: 'CCC wings are designed to fly hard and loaded. Light loading reduces pitch stability, weakens bar authority, decreases efficiency at speed, and increases the likelihood of frequent small tip movements due to reduced pressure stability — with a higher chance of tip deformation when pushed.',
    },
    green: {
      title: 'Race Optimized',
      text: 'Full structural tension and aerodynamic integrity. Maximum solidity, authority on bar, and competitive performance.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Extreme pressure and kinetic energy. Modern CCC designs may tolerate this, but always follow manufacturer limits. Reactions are violent and shock-loading risk is high; precision and discipline required.',
    },
  },
  tandem: {
    redUnder: {
      title: 'Dangerously Light',
      text: 'The wing is effectively too large for the load. Very poor penetration, extremely soft handling, and compromised control. Do not fly.',
    },
    yellow: {
      title: 'Light',
      text: 'Softer trim feel and gentle launches/landings. However, reduced pressure makes the wing slower to respond, reduces authority in turns, weakens wind penetration, and increases small tip movements due to reduced pressure stability.',
    },
    green: {
      title: 'Fast / Stable',
      text: 'Higher inertia provides stability (“Cadillac feel”), excellent penetration, and strong flare authority.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Very high trim speed. Requires strong launch commitment and precise landing timing. Weak lift climbing performance.',
    },
  },
};

const getCategoryKey = (id: string) => {
  if (['school', 'progression'].includes(id)) return 'recreational';
  if (id === 'xc_sport') return 'xc_sport';
  if (id === 'sports_class') return 'sports_class';
  if (id === 'performance') return 'performance';
  if (id === 'competition') return 'competition';
  return 'tandem';
};

export const InfoPanel: React.FC<InfoPanelProps> = ({
  loading,
  variant = 'compact',
  gliderClass,
  showFullDescription = false,
}) => {
  // Normalize loading to 2 decimal places to match UI display (WYSIWYG)
  const normalizedLoading = parseFloat(loading.toFixed(2));
  const { ranges } = gliderClass;
  const contentKey = getCategoryKey(gliderClass.id);
  const content = CONTENT_MAP[contentKey];

  let categoryTitle = '';
  let rangeText = '';
  let description = '';
  let Icon = Feather;
  let colorStyles = '';

  // Determine Zone
  if (normalizedLoading < ranges.underloadedMax) {
    categoryTitle = content.redUnder.title;
    rangeText = `< ${ranges.underloadedMax} kg/m²`;
    description = content.redUnder.text;
    Icon = AlertTriangle;
    colorStyles = 'bg-rose-50 text-rose-700 border-rose-100 icon-rose';
  } else if (normalizedLoading >= ranges.lightMin && normalizedLoading < ranges.optimalMin) {
    // Note: Used < optimalMin instead of <= lightMax to handle cases where lightMax == optimalMin.
    // This gives priority to Green Zone (Optimal) if the value is on the boundary.
    categoryTitle = content.yellow.title;
    rangeText = `${ranges.lightMin} – ${ranges.lightMax} kg/m²`;
    description = content.yellow.text;
    Icon = Feather;
    colorStyles = 'bg-amber-50 text-amber-700 border-amber-100 icon-amber';
  } else if (normalizedLoading >= ranges.optimalMin && normalizedLoading <= ranges.optimalMax) {
    categoryTitle = content.green.title;
    rangeText = `${ranges.optimalMin} – ${ranges.optimalMax} kg/m²`;
    description = content.green.text;
    Icon = Wind;
    colorStyles = 'bg-emerald-50 text-emerald-700 border-emerald-100 icon-emerald';
  } else if (normalizedLoading > ranges.overloadedMin) {
    categoryTitle = content.redOver.title;
    rangeText = `> ${ranges.overloadedMin} kg/m²`;
    description = content.redOver.text;
    Icon = Gauge;
    // Updated to Rose (Red) to match 'Red Zone' naming
    colorStyles = 'bg-rose-50 text-rose-700 border-rose-100 icon-rose';
  } else {
    // Handling the gap between Optimal Max and Overloaded Min (e.g. 3.8 - 4.0 for School)
    categoryTitle = 'Heavy / Upper Range';
    rangeText = `${(ranges.optimalMax + 0.1).toFixed(1)} – ${ranges.overloadedMin} kg/m²`;
    description = content.green.text; // Use green text but title implies upper end
    Icon = Scale;
    colorStyles = 'bg-emerald-50 text-emerald-600 border-emerald-100 icon-emerald';
  }

  const styles = {
    large: {
      iconSize: 'w-12 h-12',
      titleSize: 'text-2xl',
      rangeSize: 'text-lg',
      descSize: 'text-base',
      spacing: 'space-y-2',
      padding: 'p-8',
    },
    standard: {
      iconSize: 'w-8 h-8',
      titleSize: 'text-base',
      rangeSize: 'text-sm',
      descSize: 'text-xs',
      spacing: 'space-y-1',
      padding: 'p-4',
    },
    compact: {
      iconSize: 'w-5 h-5',
      titleSize: 'text-xs',
      rangeSize: 'text-[10px]',
      descSize: 'text-[9px]',
      spacing: 'space-y-0.5',
      padding: 'p-3',
    },
  }[variant];

  return (
    <div
      className={`h-full w-full rounded-2xl border ${colorStyles} flex flex-col justify-center items-center text-center ${styles.padding} transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Glider Class Label */}
      <div
        className={`font-black uppercase tracking-widest opacity-40 ${
          variant === 'large' ? 'text-sm mb-2' : 'text-[9px] mb-1'
        }`}
      >
        {gliderClass.classification}
      </div>

      <Icon className={`${styles.iconSize} mb-2 opacity-80`} strokeWidth={1.5} />

      <div className={styles.spacing}>
        <h3 className={`font-bold ${styles.titleSize} leading-tight`}>{categoryTitle}</h3>
        <div
          className={`font-mono font-medium opacity-75 ${styles.rangeSize} bg-white/50 px-2 rounded-full inline-block`}
        >
          {rangeText}
        </div>
      </div>

      {(variant !== 'compact' || showFullDescription) && (
        <div className={`${styles.descSize} mt-3 opacity-90 max-w-[90%]`}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

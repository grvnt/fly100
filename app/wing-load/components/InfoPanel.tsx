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
      text: 'Internal pressure is critically low. The wing is prone to frequent collapses and deep stalls due to lack of airspeed. Control authority is severely compromised. Avoid flight in turbulent or windy conditions.',
    },
    yellow: {
      title: 'Light',
      text: 'Slower reactions and a dampened feel can make the ride smoother in bumps. However, reduced internal pressure limits wind penetration and precision when coring lift, with more frequent small tip movements due to reduced pressure stability.',
    },
    green: {
      title: 'Balanced / Standard',
      text: 'The ideal compromise. Good passive safety with enough speed to safely fly in standard wind conditions.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Warning: High wing loading significantly increases speed and inertia. Reactions to collapses will be impulsive. This configuration reduces the forgiveness typically relied upon by beginners.',
    },
  },
  xc_sport: {
    redUnder: {
      title: 'Severely Underloaded',
      text: 'Internal pressure is critically low. The wing is prone to frequent collapses and deep stalls due to lack of airspeed. Control authority is severely compromised. Avoid flight in turbulent or windy conditions.',
    },
    yellow: {
      title: 'Light',
      text: 'Lower internal loading reduces aerodynamic coherence, making the wing feel softer and less authoritative. Precision suffers in broken lift, wind penetration drops, and you may experience more frequent small tip movements due to reduced pressure stability.',
    },
    green: {
      title: 'Solid / Agile',
      text: 'Crisp handling and solid internal pressure. The wing cuts through turbulence effectively and responds well to inputs.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Significantly increased energy. Handling becomes race-style and crisp, but recovery from stalls or deflations will be impulsive. Demands high pilot skill to manage the inertia.',
    },
  },
  performance: {
    redUnder: {
      title: 'Unflyable / Unsafe',
      text: 'Critical lack of internal pressure. The wingtips will not hold their shape, leading to constant cravats and deep stall tendencies. This configuration is dangerous.',
    },
    yellow: {
      title: 'Under-pressurized',
      text: 'At this level of design, the profile expects higher internal pressure to perform correctly. When flown light, the wing loses shape stability, efficiency drops significantly, handling authority decreases, and there is an increased risk of more frequent small tip movements due to reduced pressure stability.',
    },
    green: {
      title: 'Race Optimized',
      text: 'Full structural tension. The profile is rigid and collapse-resistant at speed. Maximum authority for aggressive flying.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Explosive reactions. The wing is pressurized beyond standard performance parameters. Shock-loading risk is high. Structural limits may be compromised.',
    },
  },
  competition: {
    redUnder: {
      title: 'Unflyable / Unsafe',
      text: 'Critical lack of internal pressure. The wingtips will not hold their shape, leading to constant cravats and deep stall tendencies. This configuration is dangerous.',
    },
    yellow: {
      title: 'Under-pressurized',
      text: 'Competition wings require high wing loading to maintain profile integrity and speed performance. Flying light compromises structural stability, reduces bar authority, increases drag, and can lead to more frequent small tip movements due to reduced pressure stability, as well as potential flutter and cravat risk.',
    },
    green: {
      title: 'Race Optimized',
      text: 'Full structural tension. The profile is rigid and collapse-resistant at speed. Maximum authority for aggressive flying.',
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Explosive reactions. The wing is pressurized to its absolute maximum. While some modern wings (e.g., Icepeak X-One) are certified for this load, verify your manual strictly. Kinetic energy is extreme, and shock-loading risk is high.',
    },
  },
  tandem: {
    redUnder: {
      title: 'Dangerously Light',
      text: 'The wing is effectively too large for the weight. You will have zero penetration in wind and extremely poor handling. Do not fly.',
    },
    yellow: {
      title: 'Light',
      text: 'Slower trim speed makes for gentle launches/landings with light passengers. However, the wing will struggle to penetrate strong winds and may feel sluggish in turns.',
    },
    green: {
      title: 'Fast / Stable',
      text: "High inertia smooths out bumps ('Cadillac' feel). Excellent penetration and flare authority for landing.",
    },
    redOver: {
      title: 'Heavy / Dynamic',
      text: 'Very high trim speed. Caution: Launch requires running speed, and landing flare requires precise timing at high speed. Difficult to maintain altitude in weak lift.',
    },
  },
};

const getCategoryKey = (id: string) => {
  if (['school', 'progression'].includes(id)) return 'recreational';
  if (['xc_sport', 'sports_class'].includes(id)) return 'xc_sport';
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

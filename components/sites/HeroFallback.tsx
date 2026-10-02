import { Mountain } from 'lucide-react';
import { Continent } from '@/types/destination';
import { getContinentGradient } from '@/lib/destinations/gradients';
import { getCountryFlag } from '@/lib/destinations/flags';
import { cn } from '@/lib/utils';

interface HeroFallbackProps {
  continent: Continent;
  country: string;
  size?: 'card' | 'hero';
  className?: string;
}

/**
 * Gradient + country-flag hero image substitute. XC Mag's photography is
 * credited to individual photographers and can't be republished here — see
 * plan open question #4. This is the permanent answer, not a placeholder:
 * a continent-tinted gradient reads at a glance across a grid of cards, and
 * costs nothing in image rights or lazy-load weight.
 */
export default function HeroFallback({ continent, country, size = 'card', className }: HeroFallbackProps) {
  const gradient = getContinentGradient(continent);
  const flag = getCountryFlag(country);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden bg-gradient-to-br',
        gradient,
        size === 'hero' ? 'aspect-[21/9]' : 'aspect-[16/9]',
        className
      )}
      role="img"
      aria-label={`${country} — no photograph available`}
    >
      <Mountain
        className={cn('absolute opacity-15 text-white', size === 'hero' ? 'h-32 w-32' : 'h-16 w-16')}
        strokeWidth={1}
      />
      <span className={cn('drop-shadow-sm', size === 'hero' ? 'text-6xl' : 'text-4xl')} aria-hidden="true">
        {flag}
      </span>
    </div>
  );
}

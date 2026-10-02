/**
 * Country name -> ISO-2 code -> flag emoji, for the 10 MVP seed countries.
 * Deliberately small and explicit rather than pulling in a general country
 * library — extend this map as new destinations are added.
 */
const COUNTRY_CODES: Record<string, string> = {
  France: 'FR',
  Switzerland: 'CH',
  Turkey: 'TR',
  India: 'IN',
  Nepal: 'NP',
  Mexico: 'MX',
  Colombia: 'CO',
  Brazil: 'BR',
  Australia: 'AU',
  'South Africa': 'ZA',
};

export function getCountryCode(country: string): string {
  return COUNTRY_CODES[country] ?? '';
}

/** ISO-2 code -> regional indicator symbol flag emoji (works with any ISO-2 code). */
export function getFlagEmoji(countryCode: string): string {
  if (countryCode.length !== 2) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 0x1f1e6 - 65 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export function getCountryFlag(country: string): string {
  return getFlagEmoji(getCountryCode(country));
}

import type { Metadata } from 'next';
import { SalesPage } from '../SalesPage';

// Hidden review copy of the full sales page. Not linked anywhere, not indexed.
export const metadata: Metadata = {
  title: 'Fly100 (preview)',
  robots: { index: false, follow: false },
};

export default function Preview() {
  return <SalesPage mode="sales" />;
}

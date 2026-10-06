import type { ReactNode } from 'react';
import { metadata as upgradeMetadata } from './metadata';

export const metadata = upgradeMetadata;

export default function UpgradeLayout({ children }: { children: ReactNode }) {
  return children;
}

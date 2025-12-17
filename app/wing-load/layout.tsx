import type { ReactNode } from 'react';
import { metadata as wingLoadMetadata } from './metadata';

export const metadata = wingLoadMetadata;

export default function WingLoadLayout({ children }: { children: ReactNode }) {
  return children;
}


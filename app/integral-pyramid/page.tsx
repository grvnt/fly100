'use client';

import dynamic from 'next/dynamic';

const IntegralPyramid = dynamic(() => import('@/components/IntegralPyramid'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-slate-900 flex items-center justify-center text-white">
      <p>Loading pyramid...</p>
    </div>
  ),
});

export default function IntegralPyramidPage() {
  return <IntegralPyramid />;
}

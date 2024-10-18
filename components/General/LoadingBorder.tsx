"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingBorder() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="h-[2px] w-full bg-white/10">
      <div 
        className={`h-full bg-[#3B82F6] transition-all duration-1000 ease-out ${
          isLoading ? 'w-full' : 'w-0'
        }`}
        style={{
          boxShadow: isLoading ? '0 0 10px #3B82F6, 0 0 5px #3B82F6' : 'none'
        }}
      ></div>
    </div>
  );
}

import React from 'react';
import { cn } from '@/lib/utils';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const H2: React.FC<H2Props> = ({ children, className, ...props }) => {
  return (
    <h2
      className={cn(
        'font-noto-sans font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;

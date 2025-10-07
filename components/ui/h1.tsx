import React from 'react';
import { cn } from '@/lib/utils';

interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<H1Props> = ({ children, className, ...props }) => {
  return (
    <h1
      className={cn(
        'font-noto-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default H1;

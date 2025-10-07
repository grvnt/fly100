import React from 'react';
import { cn } from '@/lib/utils';

interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

export const H3: React.FC<H3Props> = ({ children, className, ...props }) => {
  return (
    <h3
      className={cn(
        'font-noto-sans font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export default H3;

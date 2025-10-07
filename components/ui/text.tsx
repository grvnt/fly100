import React from 'react';
import { cn } from '@/lib/utils';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  size = 'base',
  weight = 'normal',
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  return (
    <p
      className={cn('font-noto-sans', sizeClasses[size], weightClasses[weight], className)}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;

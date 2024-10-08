"use client";

import React from "react";
import Link from 'next/link';

interface ButtonGradientProps {
  href: string;
  text: string;
  className?: string;
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({ href, text, className = '' }) => {
  return (
    <Link href={href} className={`btn btn-gradient animate-shimmer ${className}`}>
      {text}
    </Link>
  );
};

export default ButtonGradient;

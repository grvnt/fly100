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
    <Link 
      href={href} 
      className={`btn animate-gradient ${className}`}
      style={{
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%',
        animation: 'gradient 10s ease infinite',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '4px',
      }}
    >
      {text}
    </Link>
  );
};

export default ButtonGradient;

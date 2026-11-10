import React from 'react';
import * as Icons from 'lucide-react';

export type SquircleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type SquircleVariant = 'blue' | 'white' | 'glow' | 'emerald' | 'dark' | 'amber' | 'rose' | 'slate';

export interface SquircleIconProps {
  name?: string;
  children?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  size?: SquircleSize;
  variant?: SquircleVariant;
  onClick?: () => void;
  interactive?: boolean;
  title?: string;
}

// Apple iOS continuous superellipse SVG path (viewBox 0 0 100 100)
// This path generates the exact continuous curvature of iOS icons
const SQUIRCLE_PATH = 'M 50,0 C 78,0 100,22 100,50 C 100,78 78,100 50,100 C 22,100 0,78 0,50 C 0,22 22,0 50,0 Z';

const SIZE_CONFIG: Record<SquircleSize, { box: string; icon: string; px: number }> = {
  xs: { box: 'w-7 h-7', icon: 'w-3.5 h-3.5', px: 28 },
  sm: { box: 'w-9 h-9', icon: 'w-4 h-4', px: 36 },
  md: { box: 'w-11 h-11', icon: 'w-5 h-5', px: 44 },
  lg: { box: 'w-14 h-14', icon: 'w-6 h-6', px: 56 },
  xl: { box: 'w-16 h-16', icon: 'w-7 h-7', px: 64 },
  '2xl': { box: 'w-20 h-20', icon: 'w-9 h-9', px: 80 },
};

const VARIANT_CONFIG: Record<SquircleVariant, {
  gradientId: string;
  gradientStops: { offset: string; color: string; opacity?: number }[];
  stroke: string;
  strokeWidth: number;
  textColor: string;
  shadow: string;
}> = {
  blue: {
    gradientId: 'ft-sq-blue',
    gradientStops: [
      { offset: '0%', color: '#f0f9ff' },
      { offset: '100%', color: '#e0f2fe' },
    ],
    stroke: '#bae6fd',
    strokeWidth: 2,
    textColor: 'text-blue-600',
    shadow: 'drop-shadow(0 4px 8px rgba(14,165,233,0.15))',
  },
  white: {
    gradientId: 'ft-sq-white',
    gradientStops: [
      { offset: '0%', color: '#ffffff' },
      { offset: '100%', color: '#f8fafc' },
    ],
    stroke: '#e2e8f0',
    strokeWidth: 2,
    textColor: 'text-slate-700',
    shadow: 'drop-shadow(0 3px 6px rgba(0,0,0,0.06))',
  },
  glow: {
    gradientId: 'ft-sq-glow',
    gradientStops: [
      { offset: '0%', color: '#2563eb' },
      { offset: '60%', color: '#0284c7' },
      { offset: '100%', color: '#0ea5e9' },
    ],
    stroke: '#93c5fd',
    strokeWidth: 1.5,
    textColor: 'text-white',
    shadow: 'drop-shadow(0 6px 16px rgba(37,99,235,0.35))',
  },
  emerald: {
    gradientId: 'ft-sq-emerald',
    gradientStops: [
      { offset: '0%', color: '#10b981' },
      { offset: '100%', color: '#059669' },
    ],
    stroke: '#6ee7b7',
    strokeWidth: 1.5,
    textColor: 'text-white',
    shadow: 'drop-shadow(0 6px 14px rgba(16,185,129,0.35))',
  },
  dark: {
    gradientId: 'ft-sq-dark',
    gradientStops: [
      { offset: '0%', color: '#1e293b' },
      { offset: '100%', color: '#0f172a' },
    ],
    stroke: '#334155',
    strokeWidth: 2,
    textColor: 'text-white',
    shadow: 'drop-shadow(0 4px 10px rgba(15,23,42,0.25))',
  },
  amber: {
    gradientId: 'ft-sq-amber',
    gradientStops: [
      { offset: '0%', color: '#fffbeb' },
      { offset: '100%', color: '#fef3c7' },
    ],
    stroke: '#fde68a',
    strokeWidth: 2,
    textColor: 'text-amber-700',
    shadow: 'drop-shadow(0 3px 6px rgba(217,119,6,0.12))',
  },
  rose: {
    gradientId: 'ft-sq-rose',
    gradientStops: [
      { offset: '0%', color: '#fff1f2' },
      { offset: '100%', color: '#ffe4e6' },
    ],
    stroke: '#fecdd3',
    strokeWidth: 2,
    textColor: 'text-rose-600',
    shadow: 'drop-shadow(0 3px 6px rgba(225,29,72,0.12))',
  },
  slate: {
    gradientId: 'ft-sq-slate',
    gradientStops: [
      { offset: '0%', color: '#f8fafc' },
      { offset: '100%', color: '#f1f5f9' },
    ],
    stroke: '#cbd5e1',
    strokeWidth: 2,
    textColor: 'text-slate-600',
    shadow: 'drop-shadow(0 3px 6px rgba(0,0,0,0.05))',
  },
};

export const SquircleIcon: React.FC<SquircleIconProps> = ({
  name,
  children,
  className = '',
  iconClassName = '',
  size = 'md',
  variant = 'blue',
  onClick,
  interactive = false,
  title,
}) => {
  const sizeConfig = SIZE_CONFIG[size];
  const variantConfig = VARIANT_CONFIG[variant];

  // Dynamic icon resolution from lucide-react if name provided
  const IconComponent = name
    ? (Icons as unknown as Record<string, React.ElementType>)[name] || Icons.Sparkles
    : null;

  const isClickable = Boolean(onClick) || interactive;

  return (
    <div
      onClick={onClick}
      title={title}
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${sizeConfig.box} ${
        isClickable ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200' : ''
      } ${className}`}
      style={{ filter: variantConfig.shadow }}
    >
      {/* 3D Apple Continuous Superellipse SVG Shape */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`${variantConfig.gradientId}-${size}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            {variantConfig.gradientStops.map((stop, i) => (
              <stop key={i} offset={stop.offset} stopColor={stop.color} stopOpacity={stop.opacity ?? 1} />
            ))}
          </linearGradient>

          {/* Top specular reflection bevel */}
          <linearGradient id={`specular-${variantConfig.gradientId}-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={variant === 'glow' || variant === 'emerald' ? 0.35 : 0.6} />
            <stop offset="45%" stopColor="#ffffff" stopOpacity={0.05} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Main Superellipse body */}
        <path
          d={SQUIRCLE_PATH}
          fill={`url(#${variantConfig.gradientId}-${size})`}
          stroke={variantConfig.stroke}
          strokeWidth={variantConfig.strokeWidth}
          strokeLinejoin="round"
        />

        {/* Top-light 3D sheen overlay */}
        <path
          d={SQUIRCLE_PATH}
          fill={`url(#specular-${variantConfig.gradientId}-${size})`}
          pointerEvents="none"
        />
      </svg>

      {/* Centered Icon Content */}
      <div className={`relative z-10 flex items-center justify-center ${variantConfig.textColor}`}>
        {children ? (
          children
        ) : IconComponent ? (
          <IconComponent className={`${sizeConfig.icon} ${iconClassName}`} />
        ) : null}
      </div>
    </div>
  );
};

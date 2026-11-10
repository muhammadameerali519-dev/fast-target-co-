import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { SquircleIcon, SquircleVariant } from './SquircleIcon';

export interface LuxuryButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'emerald' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon | string;
  iconPosition?: 'left' | 'right';
  squircleIcon?: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: IconProp,
  iconPosition = 'right',
  squircleIcon = false,
  onClick,
  href,
  target,
  rel,
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  const sizeClasses = {
    sm: 'py-2 px-4 text-xs rounded-[14px] gap-2',
    md: 'py-3 px-6 text-xs sm:text-sm rounded-[18px] gap-2.5',
    lg: 'py-4 px-8 text-sm rounded-[22px] gap-3 font-bold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(2,132,199,0.45)] hover:from-blue-700 hover:to-sky-500 border border-blue-400/30',
    secondary:
      'bg-white text-slate-800 hover:text-blue-600 border border-slate-200/90 hover:border-sky-300 shadow-[0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] hover:bg-sky-50/50',
    emerald:
      'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_8px_20px_-4px_rgba(16,185,129,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(16,185,129,0.45)] border border-emerald-400/40',
    ghost:
      'bg-transparent text-slate-600 hover:text-blue-600 hover:bg-sky-50/70 border border-transparent hover:border-sky-200',
    glass:
      'bg-white/80 backdrop-blur-xl text-slate-900 border border-white/80 hover:border-sky-300 shadow-sm hover:shadow-md',
  };

  const squircleVariantMap: Record<string, SquircleVariant> = {
    primary: 'glow',
    secondary: 'blue',
    emerald: 'emerald',
    ghost: 'slate',
    glass: 'white',
  };

  const baseClasses = `relative inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 select-none ${
    fullWidth ? 'w-full' : 'w-auto'
  } ${sizeClasses[size]} ${variantClasses[variant]} ${
    disabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : 'cursor-pointer hover:scale-[1.02] active:scale-[0.98] active:translate-y-0.5'
  } ${className}`;

  const renderIcon = () => {
    if (!IconProp) return null;

    if (squircleIcon) {
      if (typeof IconProp === 'string') {
        return <SquircleIcon name={IconProp} size="xs" variant={squircleVariantMap[variant]} />;
      }
      const ResolvedIcon = IconProp;
      return (
        <SquircleIcon size="xs" variant={squircleVariantMap[variant]}>
          <ResolvedIcon className="w-3.5 h-3.5" />
        </SquircleIcon>
      );
    }

    if (typeof IconProp === 'string') {
      return <SquircleIcon name={IconProp} size="xs" variant={squircleVariantMap[variant]} />;
    }

    const ResolvedIcon = IconProp;
    return <ResolvedIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />;
  };

  const content = (
    <>
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`group ${baseClasses}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group ${baseClasses}`}
    >
      {content}
    </button>
  );
};

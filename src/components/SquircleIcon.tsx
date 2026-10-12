import React from 'react';
import * as Icons from 'lucide-react';

interface SquircleIconProps {
  name: string;
  className?: string;
  iconClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'blue' | 'white' | 'dark' | 'glow';
}

export const SquircleIcon: React.FC<SquircleIconProps> = ({
  name,
  className = '',
  iconClassName = '',
  size = 'md',
  variant = 'blue',
}) => {
  // Safe dynamic icon lookup from lucide-react
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[name] || Icons.Sparkles;

  const sizeClasses = {
    sm: 'w-10 h-10 rounded-[14px] p-2',
    md: 'w-12 h-12 rounded-[18px] p-2.5',
    lg: 'w-14 h-14 rounded-[22px] p-3',
    xl: 'w-16 h-16 rounded-[26px] p-3.5',
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-7 h-7',
    xl: 'w-8 h-8',
  };

  const variantClasses = {
    blue: 'bg-sky-50 border border-sky-200 text-blue-600 shadow-sm hover:bg-sky-100 hover:border-sky-300 hover:text-blue-700',
    white: 'bg-white border border-slate-200 text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300',
    dark: 'bg-slate-900 border border-slate-800 text-white shadow-sm',
    glow: 'bg-gradient-to-br from-blue-600 to-sky-500 text-white border border-blue-400/50 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30',
  };

  return (
    <div
      className={`inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <IconComponent className={`${iconSizes[size]} ${iconClassName} transition-transform duration-300`} />
    </div>
  );
};

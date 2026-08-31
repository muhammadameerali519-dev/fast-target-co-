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
    blue: 'bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent border border-blue-400/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-400/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]',
    white: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:border-white/40',
    dark: 'bg-slate-900/80 border border-slate-700/60 text-slate-200 shadow-md hover:border-blue-500/50',
    glow: 'bg-blue-600 text-white border border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:shadow-[0_0_40px_rgba(37,99,235,0.8)]',
  };

  return (
    <div
      className={`inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <IconComponent className={`${iconSizes[size]} ${iconClassName} transition-transform duration-300`} />
    </div>
  );
};

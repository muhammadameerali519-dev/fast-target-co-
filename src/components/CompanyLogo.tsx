import React from 'react';

interface CompanyLogoProps {
  variant?: 'full' | 'nav' | 'icon-only' | 'stacked' | 'footer';
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  subtextClassName?: string;
  iconSize?: number | string;
  animated?: boolean;
}

/**
 * Geometric FTC Monogram Mark
 * Stylized geometric interlocking chevron arrows representing Fast Target Co (General Trading).
 */
export const FtcIconMark: React.FC<{ className?: string; size?: number | string }> = ({
  className = 'w-8 h-8 text-white',
  size,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="Fast Target Co Logo"
    >
      {/* Top-Left Slanted Bar */}
      <polygon points="40,30 78,30 46,96 8,96" />

      {/* Top-Right Slanted Bar */}
      <polygon points="104,30 142,30 110,96 72,96" />

      {/* Center Connecting Bridge / Crossbar */}
      <polygon points="14,86 186,86 176,116 4,116" />

      {/* Bottom-Left Slanted Bar */}
      <polygon points="56,106 94,106 62,172 24,172" />

      {/* Bottom-Right Slanted Bar */}
      <polygon points="120,106 158,106 126,172 88,172" />
    </svg>
  );
};

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'nav',
  className = '',
  iconClassName = '',
  textClassName = '',
  subtextClassName = '',
  iconSize,
}) => {
  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <FtcIconMark className={iconClassName || 'w-8 h-8 text-blue-600'} size={iconSize} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center space-y-2.5 ${className}`}>
        <div className="p-3.5 rounded-[22px] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white shadow-lg shadow-blue-500/25 border border-sky-200/50">
          <FtcIconMark className={iconClassName || 'w-14 h-14 text-white'} size={iconSize} />
        </div>
        <div>
          <div className={`text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight text-slate-900 ${textClassName}`}>
            Fast Target Co
          </div>
          <div className={`text-xs sm:text-sm font-bold tracking-wider text-sky-600 ${subtextClassName}`}>
            (General Trading)
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white flex items-center justify-center shadow-md shadow-blue-500/20 border border-sky-300/40">
          <FtcIconMark className="w-7 h-7 text-white" />
        </div>
        <div>
          <div className="text-xl font-black font-['Outfit'] tracking-tight text-slate-900">
            Fast Target Co
          </div>
          <div className="text-xs font-bold tracking-wider text-sky-600">
            (General Trading)
          </div>
        </div>
      </div>
    );
  }

  // Default: 'nav' or 'full' inline lockup
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[12px] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-sky-400/30 transition-all flex-shrink-0">
        <FtcIconMark className={iconClassName || 'w-5 h-5 text-white'} size={iconSize} />
      </div>
      <div className="text-left flex flex-col justify-center">
        <span className={`block text-sm sm:text-base font-black font-['Outfit'] tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors ${textClassName}`}>
          Fast Target Co
        </span>
        <span className={`block text-[9px] sm:text-[10px] font-bold tracking-wider text-sky-600 leading-tight mt-0.5 ${subtextClassName}`}>
          (General Trading)
        </span>
      </div>
    </div>
  );
};

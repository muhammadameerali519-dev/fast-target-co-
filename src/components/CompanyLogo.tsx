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
        <FtcIconMark className={iconClassName || 'w-8 h-8 text-white'} size={iconSize} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center space-y-2.5 ${className}`}>
        <div className="p-3 rounded-[20px] bg-white/[0.06] border border-white/15 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
          <FtcIconMark className={iconClassName || 'w-14 h-14 text-white'} size={iconSize} />
        </div>
        <div>
          <div className={`text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight text-white ${textClassName}`}>
            Fast Target Co
          </div>
          <div className={`text-xs sm:text-sm font-semibold tracking-wider text-slate-300 ${subtextClassName}`}>
            (General Trading)
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="w-12 h-12 rounded-[16px] bg-white/[0.08] border border-white/15 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.3)]">
          <FtcIconMark className="w-8 h-8 text-white" />
        </div>
        <div>
          <div className="text-xl font-black font-['Outfit'] tracking-tight text-white">
            Fast Target Co
          </div>
          <div className="text-xs font-semibold tracking-wider text-cyan-300">
            (General Trading)
          </div>
        </div>
      </div>
    );
  }

  // Default: 'nav' or 'full' inline lockup
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[12px] bg-white/[0.08] border border-white/15 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-cyan-400/50 transition-all flex-shrink-0">
        <FtcIconMark className={iconClassName || 'w-5 h-5 text-white group-hover:text-cyan-300 transition-colors'} size={iconSize} />
      </div>
      <div className="text-left flex flex-col justify-center">
        <span className={`block text-sm sm:text-base font-black font-['Outfit'] tracking-tight text-white leading-none group-hover:text-cyan-300 transition-colors ${textClassName}`}>
          Fast Target Co
        </span>
        <span className={`block text-[9px] sm:text-[10px] font-semibold tracking-wider text-slate-300 leading-tight mt-0.5 ${subtextClassName}`}>
          (General Trading)
        </span>
      </div>
    </div>
  );
};

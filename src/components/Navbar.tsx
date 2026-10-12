import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { CompanyLogo } from './CompanyLogo';

interface NavbarProps {
  currentPage?: PageId;
  activePage?: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string; shortLabel?: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'app-dev', label: 'App Dev' },
  { id: 'web-dev', label: 'Web Dev' },
  { id: 'ui-ux', label: 'UI/UX' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'trading', label: 'Trading' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  activePage,
  onNavigate,
}) => {
  const current = currentPage || activePage || 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 sm:py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo & Geometric FTC Monogram Mark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center px-3 py-1.5 rounded-[20px] bg-white/90 backdrop-blur-xl border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
        >
          <CompanyLogo variant="nav" />
        </button>

        {/* Desktop Navigation Links Pill */}
        <nav className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-[22px] bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = current === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-[14px] transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-sky-50/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-blue-600 to-sky-500 shadow-md shadow-blue-500/25"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Admin Inquiries + Start Project CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Admin Inquiries Desk Icon Button */}
          <button
            onClick={() => handleNavClick('admin')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-[16px] backdrop-blur-xl border text-xs font-semibold transition-all shadow-sm ${
              current === 'admin'
                ? 'bg-sky-100 border-sky-300 text-blue-700 shadow-sky-100'
                : 'bg-white/90 border-slate-200 text-slate-700 hover:text-blue-600 hover:border-sky-300 hover:bg-sky-50/60'
            }`}
            title="Inquiries Admin Desk"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden xl:inline text-[11px] font-bold">Inquiries Desk</span>
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-[18px] bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30 transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-[16px] bg-white/90 backdrop-blur-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-sky-400 shadow-sm transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden pointer-events-auto mt-2 mx-auto max-w-lg rounded-[28px] bg-white/95 backdrop-blur-2xl border border-slate-200 p-5 shadow-2xl text-slate-800"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-500" /> Navigation Menu
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = current === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-[16px] text-xs font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                        : 'bg-slate-50 text-slate-700 border border-slate-100 hover:bg-sky-50 hover:text-blue-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-sky-200" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('admin')}
                className="w-full py-2.5 rounded-[16px] bg-sky-50 border border-sky-200 hover:bg-sky-100 text-blue-700 text-xs font-bold text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>INQUIRIES ADMIN PORTAL</span>
              </button>
              
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 rounded-[16px] bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
              >
                <span>CONTACT US TODAY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

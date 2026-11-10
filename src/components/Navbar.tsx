import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ShieldCheck, Home, Info, Briefcase, Smartphone, Globe, Palette, Share2, Ship, Award, Mail } from 'lucide-react';
import { PageId } from '../types';
import { CompanyLogo } from './CompanyLogo';
import { SquircleIcon } from './SquircleIcon';
import { LuxuryButton } from './LuxuryButton';

interface NavbarProps {
  currentPage?: PageId;
  activePage?: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: { id: PageId; label: string; icon: string }[] = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'about', label: 'About', icon: 'Info' },
  { id: 'services', label: 'Services', icon: 'Briefcase' },
  { id: 'app-dev', label: 'App Dev', icon: 'Smartphone' },
  { id: 'web-dev', label: 'Web Dev', icon: 'Globe' },
  { id: 'ui-ux', label: 'UI/UX', icon: 'Palette' },
  { id: 'social-media', label: 'Social Media', icon: 'Share2' },
  { id: 'trading', label: 'Trading', icon: 'Ship' },
  { id: 'why-us', label: 'Why Us', icon: 'Award' },
  { id: 'contact', label: 'Contact', icon: 'Mail' },
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-3 sm:py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pointer-events-auto">
        
        {/* Brand Zone: 1-line clean Logo and Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center px-3 py-1.5 rounded-[22px] bg-white/95 backdrop-blur-2xl border border-slate-200/90 hover:border-sky-400 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.15)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
        >
          <CompanyLogo variant="nav" />
        </button>

        {/* Desktop Navigation Links Pill */}
        <nav className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-[24px] bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]">
          {NAV_ITEMS.map((item) => {
            const isActive = current === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-[16px] transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-sky-50/70'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-[16px] bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 shadow-[0_4px_14px_rgba(37,99,235,0.35)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Zone: Inquiries Desk + Luxury CTA Button */}
        <div className="flex items-center gap-2">
          {/* Admin Inquiries Desk with Apple Squircle */}
          <button
            onClick={() => handleNavClick('admin')}
            className={`group flex items-center gap-2 px-3 py-1.5 rounded-[18px] backdrop-blur-xl border text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
              current === 'admin'
                ? 'bg-sky-100 border-sky-300 text-blue-700 shadow-sky-100'
                : 'bg-white/95 border-slate-200 text-slate-700 hover:text-blue-600 hover:border-sky-300 hover:bg-sky-50/70'
            }`}
            title="Inquiries Admin Desk"
          >
            <SquircleIcon variant={current === 'admin' ? 'glow' : 'blue'} size="xs">
              <ShieldCheck className="w-3.5 h-3.5" />
            </SquircleIcon>
            <span className="hidden xl:inline text-[11px] font-bold">Inquiries</span>
          </button>

          {/* Primary CTA Luxury Button */}
          <LuxuryButton
            variant="primary"
            size="sm"
            onClick={() => handleNavClick('contact')}
            icon={ArrowRight}
            iconPosition="right"
            className="hidden sm:inline-flex"
          >
            START PROJECT
          </LuxuryButton>

          {/* Mobile Hamburger Toggle with Apple Squircle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <SquircleIcon variant={mobileMenuOpen ? 'glow' : 'white'} size="md">
              {mobileMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-slate-700" />}
            </SquircleIcon>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Apple Squircle Icons */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden pointer-events-auto mt-2 mx-auto max-w-lg rounded-[32px] bg-white/95 backdrop-blur-2xl border border-slate-200 p-5 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.25)] text-slate-800"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Navigation Directory
              </span>
              <span className="text-[10px] text-slate-400 font-mono">FAST TARGET CO</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = current === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2.5 p-2 rounded-[18px] text-xs font-semibold text-left transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                        : 'bg-slate-50 text-slate-700 border border-slate-100 hover:bg-sky-50 hover:text-blue-600 hover:border-sky-200'
                    }`}
                  >
                    <SquircleIcon
                      name={item.icon}
                      size="xs"
                      variant={isActive ? 'glow' : 'blue'}
                    />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <LuxuryButton
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => handleNavClick('admin')}
                icon={ShieldCheck}
                iconPosition="left"
                squircleIcon
              >
                Inquiries Admin Portal
              </LuxuryButton>

              <LuxuryButton
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => handleNavClick('contact')}
                icon={ArrowRight}
                iconPosition="right"
              >
                Request Quote Today
              </LuxuryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

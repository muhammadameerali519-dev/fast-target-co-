import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Play, Sparkles, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { CompanyLogo } from './CompanyLogo';

interface NavbarProps {
  currentPage?: PageId;
  activePage?: PageId;
  onNavigate: (page: PageId) => void;
  onReplayIntro?: () => void;
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
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  activePage,
  onNavigate,
  onReplayIntro,
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
          className="group flex items-center px-3 py-1.5 rounded-[20px] bg-slate-950/80 backdrop-blur-xl border border-white/10 hover:border-cyan-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-[1.02]"
        >
          <CompanyLogo variant="nav" />
        </button>

        {/* Desktop Navigation Links Pill */}
        <nav className="hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-[22px] bg-slate-950/75 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {NAV_ITEMS.map((item) => {
            const isActive = current === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-[14px] transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-blue-600 to-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/40"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Admin Inquiries + Replay Intro + Start Project CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          {/* Admin Inquiries Desk Icon Button */}
          <button
            onClick={() => handleNavClick('admin')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-[16px] backdrop-blur-xl border text-xs font-semibold transition-all shadow-md ${
              current === 'admin'
                ? 'bg-blue-600/30 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'bg-slate-900/80 border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40'
            }`}
            title="Inquiries Admin Desk"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xl:inline text-[11px]">Inquiries Desk</span>
          </button>

          {/* Replay Cinematic Intro button */}
          <button
            onClick={onReplayIntro}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-[16px] bg-slate-900/80 backdrop-blur-xl border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all shadow-md"
            title="Replay cinematic intro experience"
          >
            <Play className="w-3 h-3 text-cyan-400 fill-cyan-400/30" />
            <span className="text-[11px]">Intro</span>
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-[18px] bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-[16px] bg-slate-900/90 backdrop-blur-xl border border-white/10 flex items-center justify-center text-slate-200 hover:text-white hover:border-blue-500/50 shadow-md transition-all"
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
            className="lg:hidden pointer-events-auto mt-2 mx-auto max-w-lg rounded-[28px] bg-[#0B132B]/95 backdrop-blur-2xl border border-blue-500/30 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Navigation Menu
              </span>
              <button
                onClick={onReplayIntro}
                className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <Play className="w-3 h-3 text-cyan-400" /> Replay Intro
              </button>
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
                        ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('admin')}
                className="w-full py-2.5 rounded-[16px] bg-slate-900 border border-cyan-500/40 hover:bg-slate-800 text-cyan-300 text-xs font-bold text-center flex items-center justify-center gap-2 shadow"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>INQUIRIES ADMIN PORTAL</span>
              </button>
              
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-2.5 rounded-[16px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold text-center flex items-center justify-center gap-2 shadow-lg"
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

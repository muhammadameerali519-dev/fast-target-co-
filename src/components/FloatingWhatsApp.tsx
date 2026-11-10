import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { SquircleIcon } from './SquircleIcon';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-end">
      {/* Expanded Action Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[300px] sm:w-[330px] rounded-[32px] bg-white/95 backdrop-blur-2xl border border-slate-200 p-5 shadow-[0_25px_60px_-15px_rgba(2,132,199,0.25),0_0_1px_rgba(0,0,0,0.1)] text-slate-800 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="emerald" size="sm">
                  <MessageCircle className="w-4 h-4 text-white" />
                </SquircleIcon>
                <div>
                  <h4 className="text-xs font-bold font-['Outfit'] text-slate-900">FAST TARGET Executive Desk</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Direct WhatsApp Priority</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="Close WhatsApp card"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 my-3 leading-relaxed">
              Connect directly with our executive directors and trade specialists on WhatsApp:
            </p>

            {/* Direct WhatsApp Options */}
            <div className="space-y-2.5">
              {/* UAE WhatsApp Option */}
              <a
                href={COMPANY_INFO.contacts.uaeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-[22px] bg-slate-50 hover:bg-emerald-50/80 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <SquircleIcon variant="emerald" size="sm">
                    <span className="text-xs">🇦🇪</span>
                  </SquircleIcon>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      UAE Executive WhatsApp
                    </span>
                    <span className="block text-[11px] text-slate-500 font-mono">
                      {COMPANY_INFO.contacts.uaePhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Pakistan WhatsApp Option */}
              <a
                href={COMPANY_INFO.contacts.pkWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-[22px] bg-slate-50 hover:bg-emerald-50/80 border border-slate-200/90 hover:border-emerald-300 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <SquircleIcon variant="emerald" size="sm">
                    <span className="text-xs">🇵🇰</span>
                  </SquircleIcon>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      Pakistan Operations Desk
                    </span>
                    <span className="block text-[11px] text-slate-500 font-mono">
                      {COMPANY_INFO.contacts.pkPhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Sub-note */}
            <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Response within 15 min
              </span>
              <span className="text-blue-600 font-semibold">Verified Trade</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Apple Squircle 3D Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group transition-transform duration-300 hover:scale-105 active:scale-95"
        aria-label="Open WhatsApp Chat Selector"
      >
        {/* Apple Superellipse 3D Shape with Ambient Halo */}
        <div className="relative">
          <SquircleIcon
            variant="emerald"
            size="xl"
            className="shadow-[0_12px_32px_rgba(16,185,129,0.45),0_4px_12px_rgba(16,185,129,0.3)] group-hover:shadow-[0_16px_40px_rgba(16,185,129,0.6)]"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white" />
            )}
          </SquircleIcon>

          {/* Online badge dot */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
          )}
        </div>
      </button>
    </div>
  );
};

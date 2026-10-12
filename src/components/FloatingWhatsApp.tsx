import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex flex-col items-end">
      {/* Expanded Action Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[290px] sm:w-[320px] rounded-[28px] bg-white/95 backdrop-blur-2xl border border-slate-200 p-4 shadow-2xl text-slate-800 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-[12px] bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-['Outfit'] text-slate-900">FAST TARGET Support</h4>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Online & Ready to Assist</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-600 my-3 leading-relaxed">
              Connect directly with our executive directors and trade specialists on WhatsApp:
            </p>

            {/* Direct WhatsApp Options */}
            <div className="space-y-2">
              {/* UAE WhatsApp Option */}
              <a
                href={COMPANY_INFO.contacts.uaeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-[18px] bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[10px] bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    🇦🇪
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      UAE WhatsApp
                    </span>
                    <span className="block text-[10px] text-slate-500 font-mono">
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
                className="group flex items-center justify-between p-2.5 rounded-[18px] bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[10px] bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    🇵🇰
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      Pakistan WhatsApp
                    </span>
                    <span className="block text-[10px] text-slate-500 font-mono">
                      {COMPANY_INFO.contacts.pkPhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Sub-note */}
            <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-600" /> Fast Response Guaranteed
              </span>
              <span className="text-blue-600 font-semibold">24/7 Digital</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Squircle Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 rounded-[22px] bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(16,185,129,0.5),0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.7)] border border-emerald-300/40 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Open WhatsApp Chat Selector"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1.5 rounded-[26px] bg-emerald-400/30 animate-pulse pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 text-white relative z-10" />
        ) : (
          <div className="relative z-10 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-300 border-2 border-slate-900 animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-300 border-2 border-slate-900" />
          </div>
        )}
      </button>
    </div>
  );
};

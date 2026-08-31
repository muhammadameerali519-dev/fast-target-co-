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
            className="mb-3 w-[290px] sm:w-[320px] rounded-[28px] bg-gradient-to-b from-[#0B132B]/95 to-[#030714]/95 backdrop-blur-2xl border border-blue-400/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(37,99,235,0.3)] text-white select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-[12px] bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-['Outfit']">FAST TARGET Support</h4>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online & Ready to Assist</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-300 my-3 leading-relaxed">
              Connect directly with our executive directors and trade specialists on WhatsApp:
            </p>

            {/* Direct WhatsApp Options */}
            <div className="space-y-2">
              {/* UAE WhatsApp Option */}
              <a
                href={COMPANY_INFO.contacts.uaeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-[18px] bg-white/[0.04] hover:bg-emerald-500/15 border border-white/[0.08] hover:border-emerald-400/40 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[10px] bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    🇦🇪
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      UAE WhatsApp
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono">
                      {COMPANY_INFO.contacts.uaePhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Pakistan WhatsApp Option */}
              <a
                href={COMPANY_INFO.contacts.pkWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-2.5 rounded-[18px] bg-white/[0.04] hover:bg-emerald-500/15 border border-white/[0.08] hover:border-emerald-400/40 transition-all duration-200"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-[10px] bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    🇵🇰
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Pakistan WhatsApp
                    </span>
                    <span className="block text-[10px] text-slate-400 font-mono">
                      {COMPANY_INFO.contacts.pkPhone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Sub-note */}
            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400" /> Fast Response Guaranteed
              </span>
              <span className="text-blue-400 font-medium">24/7 Digital</span>
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

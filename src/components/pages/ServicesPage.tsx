import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  Send,
  X,
  ArrowUpRight,
} from 'lucide-react';
import { SERVICES } from '../../data/content';
import { SquircleIcon } from '../SquircleIcon';
import { ServiceItem, PageId } from '../../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForContact,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'digital' | 'design' | 'media' | 'trading'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Full-Spectrum Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight">
          OUR BESPOKE SERVICES
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From high-scale software development and fluid iOS interfaces to global trading networks and viral media campaigns — we engineer solutions that dominate markets.
        </p>

        {/* Filter Pills */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'digital', label: 'Digital & Software' },
            { id: 'design', label: 'UI/UX & Branding' },
            { id: 'media', label: 'Social & Marketing' },
            { id: 'trading', label: 'General Trading' },
          ].map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-[16px] text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400/50'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Squircle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => setSelectedService(service)}
            className="group relative rounded-[32px] bg-gradient-to-b from-slate-900/90 via-[#070F26] to-slate-950 p-6 sm:p-8 border border-white/10 hover:border-blue-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,102,255,0.25)] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-2 select-none overflow-hidden"
          >
            {/* Glowing Blue Corner Ambient Aura */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-500/0 group-hover:bg-blue-500/25 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <SquircleIcon name={service.icon} size="lg" variant="blue" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  {service.category}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-0.5">
                  {service.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights bullets */}
              <div className="space-y-2 pt-2">
                {service.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action row */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>{service.timeline}</span>
              </div>

              <div className="flex items-center gap-1 text-xs font-bold text-cyan-300 group-hover:text-white transition-colors">
                <span>Details & Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[36px] bg-gradient-to-b from-[#0B132B] to-[#030714] border border-blue-500/40 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(37,99,235,0.3)] text-white space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <SquircleIcon name={selectedService.icon} size="lg" variant="glow" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                      FAST TARGET Solution Breakdown
                    </span>
                    <h3 className="text-2xl font-bold font-['Outfit'] text-white">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Core Features & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.08] space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Core Technical Scope
                  </h4>
                  <div className="space-y-2 text-xs text-slate-300">
                    {selectedService.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.08] space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Client Deliverables
                  </h4>
                  <div className="space-y-2 text-xs text-slate-300">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Standard Delivery: <strong className="text-white">{selectedService.timeline}</strong></span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {selectedService.pageRoute && (
                    <button
                      onClick={() => {
                        const route = selectedService.pageRoute!;
                        setSelectedService(null);
                        onNavigate(route);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-[16px] bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                    >
                      Deep Dive Page
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (onSelectServiceForContact) {
                        onSelectServiceForContact(selectedService.title);
                      }
                      setSelectedService(null);
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-[16px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

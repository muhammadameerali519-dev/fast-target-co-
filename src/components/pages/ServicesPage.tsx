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
import { TiltCard } from '../TiltCard';
import { LuxuryButton } from '../LuxuryButton';
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
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/90 shadow-sm text-sky-800 text-xs font-bold uppercase tracking-wider">
          <SquircleIcon variant="glow" size="xs">
            <Layers className="w-3.5 h-3.5 text-white" />
          </SquircleIcon>
          <span>Full-Spectrum Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
          OUR BESPOKE SERVICES
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From high-scale software development and fluid iOS interfaces to global trading networks and viral media campaigns — we engineer solutions that dominate markets.
        </p>

        {/* Filter Tabs */}
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
                className={`px-4 py-2 rounded-[16px] text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-600'
                    : 'bg-white text-slate-700 hover:bg-sky-50 hover:text-blue-600 border border-slate-200 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services 3D Tilt Cards Grid with Apple Squircles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <TiltCard
              onClick={() => setSelectedService(service)}
              className="h-full rounded-[32px] bg-white p-6 sm:p-8 border border-slate-200/90 hover:border-sky-300 flex flex-col justify-between group shadow-sm"
              maxTilt={7}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <SquircleIcon name={service.icon} size="lg" variant="blue" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-sky-600 font-semibold mt-0.5">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {service.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom action row */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{service.timeline}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-sky-600 transition-colors">
                  <span>Scope Details</span>
                  <SquircleIcon variant="blue" size="xs">
                    <ArrowUpRight className="w-3 h-3 text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </SquircleIcon>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      {/* Interactive Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[36px] bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-900 space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <SquircleIcon name={selectedService.icon} size="lg" variant="glow" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-600">
                      FAST TARGET Solution Breakdown
                    </span>
                    <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Core Features & Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-[22px] bg-sky-50/50 border border-sky-100 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Core Technical Scope
                  </h4>
                  <div className="space-y-2 text-xs text-slate-600">
                    {selectedService.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-[22px] bg-sky-50/50 border border-sky-100 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600">
                    Client Deliverables
                  </h4>
                  <div className="space-y-2 text-xs text-slate-600">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Standard Delivery: <strong className="text-slate-900">{selectedService.timeline}</strong></span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {selectedService.pageRoute && (
                    <LuxuryButton
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        const route = selectedService.pageRoute!;
                        setSelectedService(null);
                        onNavigate(route);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Deep Dive Page
                    </LuxuryButton>
                  )}

                  <LuxuryButton
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      if (onSelectServiceForContact) {
                        onSelectServiceForContact(selectedService.title);
                      }
                      setSelectedService(null);
                      onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    icon={Send}
                    iconPosition="right"
                  >
                    Request Quote
                  </LuxuryButton>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

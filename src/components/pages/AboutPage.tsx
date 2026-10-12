import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Compass,
  Award,
  Globe,
  Mail,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { EXECUTIVES, COMPANY_INFO } from '../../data/content';
import { SquircleIcon } from '../SquircleIcon';
import { PageId } from '../../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero / Company Intro */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-blue-600" />
          <span>Corporate Overview</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-[1.08]">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500">FAST TARGET CO</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          FAST TARGET CO is an international enterprise bridging the power of general trading and next-generation digital technology. We help businesses across the UAE, Pakistan, and global markets build formidable brand equity, deploy modern software systems, and source goods with complete reliability.
        </p>
      </div>

      {/* 2. Mission & Vision Dual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <div className="relative rounded-[36px] bg-white border border-slate-200 p-8 sm:p-10 space-y-4 shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="w-12 h-12 rounded-[18px] bg-sky-50 border border-sky-200 flex items-center justify-center text-blue-600 shadow-sm">
            <Compass className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 block">
            Core Mandate
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-slate-900 uppercase">
            OUR MISSION
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To provide businesses with reliable trading solutions and innovative digital technology that helps them grow, compete and succeed in an increasingly competitive global marketplace.
          </p>
        </div>

        {/* Vision Card */}
        <div className="relative rounded-[36px] bg-white border border-slate-200 p-8 sm:p-10 space-y-4 shadow-sm hover:shadow-md transition-all overflow-hidden">
          <div className="w-12 h-12 rounded-[18px] bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shadow-sm">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600 block">
            Future Horizon
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-slate-900 uppercase">
            OUR VISION
          </h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To become a trusted modern business partner combining global trading with innovative digital experiences, recognized internationally for impeccable craftsmanship, integrity, and client growth.
          </p>
        </div>
      </div>

      {/* 3. Executive Profile Cards (Mohammed Tayyab & Ahmed Subhan) */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Strategic Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            EXECUTIVE DIRECTORS
          </h2>
          <p className="text-slate-600 text-sm">
            Meet the leaders directing FAST TARGET CO’s global trade expansion and digital engineering operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXECUTIVES.map((exec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[36px] bg-white p-8 border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                    {exec.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Executive Board</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-black font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                    {exec.name}
                  </h3>
                  <p className="text-sm font-bold text-sky-600 uppercase tracking-wider mt-1">
                    {exec.role}
                  </p>
                  <p className="text-xs text-slate-500">{exec.title}</p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {exec.bio}
                </p>

                <div className="p-4 rounded-[20px] bg-sky-50/50 border border-sky-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Leadership Experience & Expertise:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exec.experience}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exec.specialization.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-[12px]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Action Row */}
              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between relative z-10">
                <a
                  href={`mailto:${exec.contactEmail}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-sky-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Executive Desk</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 rounded-[14px] bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
                >
                  Schedule Meeting
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Strategic Footprint: UAE & Pakistan */}
      <div className="rounded-[36px] bg-gradient-to-r from-sky-50 via-white to-blue-50 p-8 sm:p-12 border border-sky-200 shadow-sm space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Regional Presence
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-slate-900 uppercase">
            OPERATING ACROSS KEY STRATEGIC CORRIDORS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {COMPANY_INFO.contacts.locations.map((loc, i) => (
            <div key={i} className="p-6 rounded-[28px] bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{loc.country.includes('Emirates') ? '🇦🇪' : '🇵🇰'}</span>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">{loc.city}</h4>
                    <p className="text-xs text-blue-600 font-semibold">{loc.country}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                  {loc.type}
                </span>
              </div>
              <p className="text-xs text-slate-700 font-mono flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{loc.phone}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

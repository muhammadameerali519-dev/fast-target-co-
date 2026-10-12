import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  TrendingUp,
  CheckCircle2,
  ChevronRight,
  Ship,
  Smartphone,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { COMPANY_INFO, STATS, SERVICES, EXECUTIVES, WHY_CHOOSE_US } from '../../data/content';
import { HeroVisual } from '../HeroVisual';
import { SquircleIcon } from '../SquircleIcon';
import { InteractiveAppPhone } from '../InteractiveAppPhone';
import { InteractiveTradeMap } from '../InteractiveTradeMap';
import { PageId } from '../../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceModal?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-sky-200/40 via-blue-100/30 to-sky-100/40 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>General Trading & Digital Solutions Agency</span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black font-['Outfit'] tracking-tight text-slate-900 uppercase leading-[1.08]"
            >
              WE BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500">DIGITAL EXPERIENCES</span> THAT MOVE BUSINESSES FORWARD.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              {COMPANY_INFO.subtagline}
            </motion.p>

            {/* Primary and Secondary CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-sky-400/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-7 py-4 rounded-[20px] bg-white hover:bg-sky-50 text-slate-800 font-bold text-sm tracking-wider uppercase border border-slate-200 hover:border-sky-300 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
              >
                <span>EXPLORE SERVICES</span>
                <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600" />
                <span>UAE & Pakistan Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-sky-600" />
                <span>Scalable Growth Architecture</span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero 3D Interactive Canvas & Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 2. TRUST / COMPANY INTRO & ANIMATED METRICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-slate-100">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Global Business & Digital Authority
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
                BUILT FOR BUSINESS. DESIGNED FOR THE FUTURE.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                FAST TARGET CO provides professional trading and high-performance digital services for forward-thinking enterprises. By integrating international sourcing with next-generation mobile applications, web platforms, and UI/UX systems, we eliminate fragmentation and accelerate business expansion in modern global markets.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-[18px] bg-sky-50 hover:bg-sky-100 border border-sky-200 text-blue-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Read About Our Vision</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Animated Statistics Counter Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 sm:p-6 rounded-[24px] bg-sky-50/60 border border-sky-100 hover:border-sky-300 hover:bg-white transition-all shadow-sm group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-600 mb-2 group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">{stat.label}</div>
                <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Full-Spectrum Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight mt-1">
              OUR CORE SERVICES
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mt-2">
              Explore bespoke engineering, creative branding, and global trading services delivered with international agency caliber.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="self-start md:self-auto px-6 py-3 rounded-[18px] bg-white hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-xs font-bold uppercase tracking-wider text-blue-600 transition-all flex items-center gap-2 shadow-sm group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Squircle Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0, 8).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => {
                if (service.pageRoute) {
                  onNavigate(service.pageRoute);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  onNavigate('services');
                }
              }}
              className="group relative rounded-[28px] bg-white border border-slate-200/90 p-6 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-100/70 shadow-sm transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div className="space-y-4 relative z-10">
                <SquircleIcon name={service.icon} size="lg" variant="blue" />
                <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-sky-600 transition-colors relative z-10">
                <span>Explore Solution</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. APP DEVELOPMENT SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 border border-sky-200 p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5 text-blue-600" /> Mobile App Engineering
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-tight">
                TURN YOUR IDEA INTO AN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">AWARD-WINNING APP</span>.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We design and engineer enterprise-grade iOS and Android mobile applications featuring butter-smooth 120Hz gesture physics, biometric authorization, offline data caching, and scalable cloud microservices.
              </p>

              {/* 5-Step Process Timeline Preview */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Interactive Execution Framework:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {['Concept', 'UI/UX Design', 'Development', 'Testing', 'Launch'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-[12px] bg-white border border-slate-200 text-slate-700 font-semibold flex items-center gap-1.5 shadow-sm">
                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                        {step}
                      </span>
                      {idx < 4 && <span className="text-slate-400">→</span>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('app-dev')}
                  className="px-6 py-3.5 rounded-[18px] bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30 transition-all flex items-center gap-2"
                >
                  <span>Explore App Development</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Interactive iPhone Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <InteractiveAppPhone />
            </div>
          </div>
        </div>
      </section>

      {/* 5. GENERAL TRADING & GLOBAL NETWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 inline-flex items-center gap-2">
            <Ship className="w-4 h-4 text-sky-600" /> Cross-Border Commerce & Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            CONNECTING BUSINESS WITH OPPORTUNITY
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            FAST TARGET CO bridges global procurement, trade verification, and multimodal logistics between Middle Eastern commercial hubs, Pakistan, and international trade routes.
          </p>
        </div>

        <InteractiveTradeMap />
      </section>

      {/* 6. EXECUTIVE LEADERSHIP SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Executive Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            DIRECTORS & KEY LEADERSHIP
          </h2>
          <p className="text-slate-600 text-sm">
            Steered by experienced executives combining international commerce acumen with full-stack digital execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EXECUTIVES.map((exec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[32px] bg-white p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-sky-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                    {exec.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">FAST TARGET CO</span>
                </div>

                <div className="pt-2">
                  <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                    {exec.name}
                  </h3>
                  <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mt-0.5">
                    {exec.role}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exec.bio}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Core Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exec.specialization.map((spec, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-[10px]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-bold text-blue-600 hover:text-sky-600 transition-colors flex items-center gap-1.5"
                >
                  <span>View Executive Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`mailto:${exec.contactEmail}`}
                  className="text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Direct Inquiry
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 7. WHY CHOOSE US HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Agency Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            WHY FAST TARGET CO?
          </h2>
          <p className="text-slate-600 text-sm">
            Six non-negotiable principles engineered into every engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[28px] bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all group"
            >
              <SquircleIcon name={item.icon} size="md" variant="blue" className="mb-4" />
              <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BOTTOM CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 p-8 sm:p-14 text-white shadow-xl shadow-blue-500/25 overflow-hidden">
          {/* Subtle lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-blue-100 block">
              Ready to Accelerate Your Enterprise?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] tracking-tight uppercase leading-tight">
              LET’S TURN YOUR AMBITION INTO A BENCHMARK.
            </h2>
            <p className="text-blue-50 text-sm sm:text-base leading-relaxed">
              Whether you require custom iOS/web development, UI/UX systems, viral media, or international sourcing logistics — we are ready to execute.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-[20px] bg-white hover:bg-slate-50 text-blue-900 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>REQUEST PROJECT ESTIMATE</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </button>

              <a
                href={COMPANY_INFO.contacts.uaeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-[20px] bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>WhatsApp UAE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

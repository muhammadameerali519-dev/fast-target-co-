import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layout,
  Gauge,
  Laptop,
  Maximize2,
  ShoppingBag,
  Database,
  Calendar,
  Layers,
} from 'lucide-react';
import { PageId } from '../../types';
import { SquircleIcon } from '../SquircleIcon';

interface WebDevPageProps {
  onNavigate: (page: PageId) => void;
}

const WEB_SERVICES = [
  {
    title: 'Business & Brand Flagships',
    icon: 'Globe',
    desc: 'High-conversion, authoritative digital flagships that establish unrivaled industry leadership.',
  },
  {
    title: 'Corporate Enterprise Portals',
    icon: 'Layers',
    desc: 'Multi-tiered institutional portals with secure employee intranets, press hubs, and investor relations.',
  },
  {
    title: 'E-Commerce Platforms',
    icon: 'ShoppingBag',
    desc: 'Scalable multi-currency storefronts with 1-tap checkout, live inventory, and fraud prevention.',
  },
  {
    title: 'High-Conversion Landing Pages',
    icon: 'Zap',
    desc: 'Ultra-optimized campaign funnels engineered specifically for high paid advertising ROAS.',
  },
  {
    title: 'Custom Web Applications',
    icon: 'Code2',
    desc: 'Complex browser-based SaaS products, collaborative tools, and high-performance workflow platforms.',
  },
  {
    title: 'Automated Booking Systems',
    icon: 'Calendar',
    desc: 'Seamless appointment scheduling, automated calendar sync, and localized payment processing.',
  },
  {
    title: 'Custom Client Dashboards',
    icon: 'Layout',
    desc: 'Interactive data visualization suites, telemetry panels, and real-time financial reporting.',
  },
  {
    title: 'Enterprise Admin Panels',
    icon: 'Database',
    desc: 'Role-based access control (RBAC), audit logs, content management, and bulk data operations.',
  },
  {
    title: 'Responsive Cross-Device Systems',
    icon: 'Laptop',
    desc: 'Fluid layouts designed for 4K desktop displays, laptops, tablets, and smartphones alike.',
  },
];

export const WebDevPage: React.FC<WebDevPageProps> = ({ onNavigate }) => {
  const [activeMockupTab, setActiveMockupTab] = useState<'corporate' | 'ecommerce' | 'dashboard'>('corporate');

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Globe className="w-3.5 h-3.5" />
          <span>Web Engineering & Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight leading-[1.08]">
          WE DON'T JUST BUILD WEBSITES. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
            WE BUILD DIGITAL EXPERIENCES.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          FAST TARGET CO engineers lightning-fast, visually stunning, and highly responsive web platforms that turn casual visitors into loyal high-value clients.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>START YOUR WEBSITE PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Floating Animated Browser Window Mockup */}
      <div className="relative max-w-5xl mx-auto">
        {/* Glow backdrop */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-[44px] blur-3xl opacity-70 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] bg-[#0A1128] border border-blue-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* macOS / Safari Browser Top Bar */}
          <div className="px-5 py-3.5 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* URL Search Bar */}
            <div className="flex-1 max-w-md mx-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-center text-xs text-slate-300 font-mono flex items-center justify-center gap-2 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>https://fasttarget.agency/enterprise-demo</span>
            </div>

            {/* View Switchers */}
            <div className="flex items-center gap-1.5 text-xs">
              {(['corporate', 'ecommerce', 'dashboard'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveMockupTab(tab)}
                  className={`px-3 py-1 rounded-[10px] uppercase font-bold text-[10px] tracking-wider transition-all ${
                    activeMockupTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Browser Viewport Content */}
          <div className="p-6 sm:p-8 min-h-[380px] bg-gradient-to-b from-[#070F26] to-[#030714] text-white">
            {activeMockupTab === 'corporate' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[14px] bg-blue-600 flex items-center justify-center font-bold">
                      FT
                    </div>
                    <div>
                      <h4 className="font-bold text-sm font-['Outfit']">FAST TARGET ENTERPRISE</h4>
                      <p className="text-[10px] text-blue-400">Global Trading & Technology Flagship</p>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full font-mono font-bold">
                    Lighthouse: 100/100
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] text-blue-400 uppercase font-bold">Core Architecture</span>
                    <h5 className="font-bold text-white text-sm">Next-Gen React 19 Engine</h5>
                    <p className="text-xs text-slate-400">Sub-second page load times with server-side rendering and instant edge caching.</p>
                  </div>
                  <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] text-cyan-400 uppercase font-bold">Fluid Micro-Animations</span>
                    <h5 className="font-bold text-white text-sm">GPU-Accelerated Transitions</h5>
                    <p className="text-xs text-slate-400">Silky 60-120fps motion design that keeps users engaged and focused.</p>
                  </div>
                  <div className="p-4 rounded-[20px] bg-white/[0.03] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] text-emerald-400 uppercase font-bold">Conversion Engine</span>
                    <h5 className="font-bold text-white text-sm">Frictionless Inquiries</h5>
                    <p className="text-xs text-slate-400">Direct WhatsApp & dynamic quote generators tailored to your customer funnel.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMockupTab === 'ecommerce' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-cyan-300">Modern Storefront System</span>
                  <span className="text-slate-400">Multi-Currency (AED, PKR, USD, EUR)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Industrial Hardware SKU #98', price: '$1,250.00', status: 'In Stock (Dubai)' },
                    { name: 'Precision Optical Sensors', price: '$4,800.00', status: 'Express Shipping' },
                    { name: 'Enterprise Cloud Gateway', price: '$2,100.00', status: 'Instant License' },
                  ].map((p, i) => (
                    <div key={i} className="p-3 rounded-[18px] bg-white/[0.04] border border-white/10 space-y-1.5">
                      <div className="h-20 rounded-[12px] bg-blue-900/30 flex items-center justify-center text-xs text-blue-300">
                        Product Visual Demo
                      </div>
                      <h6 className="text-xs font-bold text-white">{p.name}</h6>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-cyan-400 font-bold">{p.price}</span>
                        <span className="text-emerald-400">{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeMockupTab === 'dashboard' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-cyan-300">Executive Analytics & Telemetry</span>
                  <span className="text-emerald-400 font-mono font-bold">Live Stream Connected</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'Weekly Revenue', val: '$84,920' },
                    { label: 'Conversion Rate', val: '4.82%' },
                    { label: 'Avg Session Time', val: '4m 18s' },
                    { label: 'Uptime Reliability', val: '99.99%' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-[16px] bg-white/[0.04] border border-white/10 text-center">
                      <span className="text-[10px] text-slate-400 block">{stat.label}</span>
                      <span className="text-sm font-bold text-white">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* 3. Comprehensive Web Services Matrix */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            Specialized Web Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white uppercase tracking-tight">
            EVERYTHING WE ENGINEER FOR THE WEB
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEB_SERVICES.map((serv, index) => (
            <div
              key={index}
              className="p-6 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-blue-400/50 transition-all duration-300 space-y-3 group"
            >
              <SquircleIcon name={serv.icon} size="md" variant="blue" />
              <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-cyan-300 transition-colors">
                {serv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {serv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Performance Guarantee Banner */}
      <div className="rounded-[32px] bg-gradient-to-r from-blue-900/60 to-slate-900/90 border border-blue-500/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-1.5">
            <Gauge className="w-4 h-4" /> 100% Performance Guarantee
          </span>
          <h3 className="text-2xl font-bold font-['Outfit'] text-white">
            Built For Sub-Second Speed & Flawless SEO
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            We guarantee top-tier Core Web Vitals, fully structured Schema.org markup, accessibility compliance, and enterprise-grade cloud uptime.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 rounded-[18px] bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:bg-cyan-300 transition-all shrink-0"
        >
          Build Your Web Experience
        </button>
      </div>
    </div>
  );
};

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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span>Web Engineering & Architecture</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-[1.08]">
          WE DON'T JUST BUILD WEBSITES. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500">
            WE BUILD DIGITAL EXPERIENCES.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          FAST TARGET CO engineers lightning-fast, visually stunning, and highly responsive web platforms that turn casual visitors into loyal high-value clients.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>START YOUR WEBSITE PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Floating Animated Browser Window Mockup */}
      <div className="relative max-w-5xl mx-auto">
        {/* Glow backdrop */}
        <div className="absolute -inset-4 bg-gradient-to-r from-sky-200/50 via-blue-100/40 to-sky-100/50 rounded-[44px] blur-3xl opacity-70 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[32px] bg-white border border-slate-200 shadow-xl overflow-hidden"
        >
          {/* macOS / Safari Browser Top Bar */}
          <div className="px-5 py-3.5 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* URL Search Bar */}
            <div className="flex-1 max-w-md mx-4 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-center text-xs text-slate-700 font-mono flex items-center justify-center gap-2 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
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
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Browser Viewport Content */}
          <div className="p-6 sm:p-8 min-h-[380px] bg-slate-50/70 text-slate-900">
            {activeMockupTab === 'corporate' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[14px] bg-blue-600 text-white flex items-center justify-center font-bold">
                      FT
                    </div>
                    <div>
                      <h4 className="font-bold text-sm font-['Outfit'] text-slate-900">FAST TARGET ENTERPRISE</h4>
                      <p className="text-[10px] text-sky-600 font-semibold">Global Trading & Technology Flagship</p>
                    </div>
                  </div>
                  <span className="text-xs text-blue-700 bg-sky-100 border border-sky-200 px-3 py-1 rounded-full font-mono font-bold">
                    Lighthouse: 100/100
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-[20px] bg-white border border-slate-200 space-y-2 shadow-sm">
                    <span className="text-[10px] text-blue-600 uppercase font-bold">Core Architecture</span>
                    <h5 className="font-bold text-slate-900 text-sm">Next-Gen React 19 Engine</h5>
                    <p className="text-xs text-slate-600">Sub-second page load times with server-side rendering and instant edge caching.</p>
                  </div>
                  <div className="p-4 rounded-[20px] bg-white border border-slate-200 space-y-2 shadow-sm">
                    <span className="text-[10px] text-sky-600 uppercase font-bold">Fluid Micro-Animations</span>
                    <h5 className="font-bold text-slate-900 text-sm">GPU-Accelerated Transitions</h5>
                    <p className="text-xs text-slate-600">Silky 60-120fps motion design that keeps users engaged and focused.</p>
                  </div>
                  <div className="p-4 rounded-[20px] bg-white border border-slate-200 space-y-2 shadow-sm">
                    <span className="text-[10px] text-emerald-600 uppercase font-bold">Conversion Engine</span>
                    <h5 className="font-bold text-slate-900 text-sm">Frictionless Inquiries</h5>
                    <p className="text-xs text-slate-600">Direct WhatsApp & dynamic quote generators tailored to your customer funnel.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeMockupTab === 'ecommerce' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900">Modern Storefront System</span>
                  <span className="text-slate-500">Multi-Currency (AED, PKR, USD, EUR)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Industrial Hardware SKU #98', price: '$1,250.00', status: 'In Stock (Dubai)' },
                    { name: 'Precision Optical Sensors', price: '$4,800.00', status: 'Express Shipping' },
                    { name: 'Enterprise Cloud Gateway', price: '$2,100.00', status: 'Instant License' },
                  ].map((p, i) => (
                    <div key={i} className="p-3 rounded-[18px] bg-white border border-slate-200 space-y-1.5 shadow-sm">
                      <div className="h-20 rounded-[12px] bg-sky-50 border border-sky-100 flex items-center justify-center text-xs text-blue-600 font-semibold">
                        Product Visual Demo
                      </div>
                      <h6 className="text-xs font-bold text-slate-900">{p.name}</h6>
                      <div className="flex justify-between text-[10px]">
                        <span className="text-blue-600 font-bold">{p.price}</span>
                        <span className="text-emerald-600 font-semibold">{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeMockupTab === 'dashboard' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-900">Executive Analytics & Telemetry</span>
                  <span className="text-blue-700 bg-sky-100 px-2 py-0.5 rounded-full font-mono font-bold text-[10px]">Live Stream Connected</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'Weekly Revenue', val: '$84,920' },
                    { label: 'Conversion Rate', val: '4.82%' },
                    { label: 'Avg Session Time', val: '4m 18s' },
                    { label: 'Uptime Reliability', val: '99.99%' },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-[16px] bg-white border border-slate-200 text-center shadow-sm">
                      <span className="text-[10px] text-slate-500 block">{stat.label}</span>
                      <span className="text-sm font-bold text-slate-900">{stat.val}</span>
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
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Specialized Web Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            EVERYTHING WE ENGINEER FOR THE WEB
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WEB_SERVICES.map((serv, index) => (
            <div
              key={index}
              className="p-6 rounded-[28px] bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-300 space-y-3 group"
            >
              <SquircleIcon name={serv.icon} size="md" variant="blue" />
              <h3 className="text-lg font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                {serv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {serv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Performance Guarantee Banner */}
      <div className="rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl shadow-blue-500/20">
        <div className="space-y-2 max-w-xl">
          <span className="text-xs font-bold text-sky-100 uppercase tracking-widest flex items-center gap-1.5">
            <Gauge className="w-4 h-4" /> 100% Performance Guarantee
          </span>
          <h3 className="text-2xl font-bold font-['Outfit'] text-white">
            Built For Sub-Second Speed & Flawless SEO
          </h3>
          <p className="text-xs sm:text-sm text-blue-50">
            We guarantee top-tier Core Web Vitals, fully structured Schema.org markup, accessibility compliance, and enterprise-grade cloud uptime.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 rounded-[18px] bg-white text-blue-900 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all shrink-0"
        >
          Build Your Web Experience
        </button>
      </div>
    </div>
  );
};

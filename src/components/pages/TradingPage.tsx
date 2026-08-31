import React from 'react';
import { motion } from 'motion/react';
import {
  Ship,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  PackageCheck,
  Boxes,
  Truck,
  TrendingUp,
  FileCheck2,
  Building2,
  Phone,
} from 'lucide-react';
import { InteractiveTradeMap } from '../InteractiveTradeMap';
import { SquircleIcon } from '../SquircleIcon';
import { COMPANY_INFO } from '../../data/content';
import { PageId } from '../../types';

interface TradingPageProps {
  onNavigate: (page: PageId) => void;
}

const TRADING_PILLARS = [
  {
    icon: 'PackageCheck',
    title: 'Verified Supplier Sourcing',
    desc: 'Rigorous manufacturer auditing, sample batch verification, and on-site factory compliance inspections before contract finalization.',
  },
  {
    icon: 'Ship',
    title: 'Multimodal Freight Logistics',
    desc: 'Optimized ocean container shipping (FCL/LCL), air cargo expediting, and bonded cross-border trucking corridors between the Middle East and Asia.',
  },
  {
    icon: 'FileCheck2',
    title: 'Customs & Regulatory Clearance',
    desc: 'Seamless import/export documentation, tariff classifications, certificate of origin verifications, and compliance adherence.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Trade Finance & Escrow Security',
    desc: 'Transparent Letters of Credit (LC), milestone escrow settlements, and comprehensive marine cargo insurance protections.',
  },
  {
    icon: 'Boxes',
    title: 'Bulk Commodity & B2B Distribution',
    desc: 'Structured wholesale supply contracts for industrial hardware, high-demand electronics, textiles, and commercial goods.',
  },
  {
    icon: 'TrendingUp',
    title: 'Digital Commerce Integration',
    desc: 'Combining physical logistics with real-time GPS telemetry, digital inventory APIs, and automated billing dashboards.',
  },
];

export const TradingPage: React.FC<TradingPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Ship className="w-3.5 h-3.5" />
          <span>General Trading & Global Logistics Division</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight leading-[1.08]">
          CONNECTING BUSINESS WITH <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
            OPPORTUNITY.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          FAST TARGET CO operates as an international general trading powerhouse, bridging manufacturers, distributors, and enterprises with verified quality sourcing, customs clearance, and seamless cross-border fulfillment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>SUBMIT TRADING INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.contacts.uaeWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-[20px] bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2"
          >
            <span>WhatsApp Trading Desk (UAE)</span>
          </a>
        </div>
      </div>

      {/* 2. Interactive Global Trade Hub & Telemetry Map */}
      <InteractiveTradeMap />

      {/* 3. Core General Trading Pillars Grid */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            End-to-End Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white uppercase tracking-tight">
            GENERAL TRADING SERVICES
          </h2>
          <p className="text-slate-400 text-sm">
            Professional sourcing, cargo consolidation, and cross-border execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADING_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-slate-900/90 via-[#070F26] to-slate-950 border border-white/10 hover:border-blue-400/50 transition-all space-y-4 group shadow-lg"
            >
              <SquircleIcon name={pillar.icon} size="lg" variant="blue" />
              <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Strategic Hubs & Executive Trade Desk */}
      <div className="rounded-[36px] bg-gradient-to-br from-[#0B132B] to-[#020617] border border-blue-500/30 p-8 sm:p-12 space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> Global Hub Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white uppercase">
              Direct Trading Hubs in UAE & Pakistan
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              With active trade desks situated in Dubai (UAE) and engineering/logistics centers in Pakistan, FAST TARGET CO delivers rapid turnaround on quotations, customs documentation, and shipment tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[20px] bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[10px] text-blue-400 uppercase font-bold block">Dubai Hub (UAE)</span>
                <p className="text-xs font-bold text-white">Middle East & Global Trade Desk</p>
                <p className="text-xs text-slate-300 font-mono">{COMPANY_INFO.contacts.uaePhone}</p>
              </div>

              <div className="p-4 rounded-[20px] bg-white/[0.04] border border-white/10 space-y-1">
                <span className="text-[10px] text-cyan-400 uppercase font-bold block">Pakistan Hub</span>
                <p className="text-xs font-bold text-white">South Asia Operations & Tech Center</p>
                <p className="text-xs text-slate-300 font-mono">{COMPANY_INFO.contacts.pkPhone}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-[28px] bg-white/[0.03] border border-white/[0.08] space-y-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-cyan-300 mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-white font-['Outfit']">Trade Assurance & Escrow</h4>
            <p className="text-xs text-slate-300">
              Every contract is backed by verified commercial invoices, transparent shipping milestones, and comprehensive cargo insurance.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3 rounded-[16px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider"
            >
              Request Trade Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Ship className="w-3.5 h-3.5 text-blue-600" />
          <span>General Trading & Global Logistics Division</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-[1.08]">
          CONNECTING BUSINESS WITH <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500">
            OPPORTUNITY.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          FAST TARGET CO operates as an international general trading powerhouse, bridging manufacturers, distributors, and enterprises with verified quality sourcing, customs clearance, and seamless cross-border fulfillment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>SUBMIT TRADING INQUIRY</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.contacts.uaeWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-[20px] bg-white hover:bg-sky-50 text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider border border-slate-200 hover:border-sky-300 shadow-sm transition-all flex items-center gap-2"
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
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            End-to-End Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            GENERAL TRADING SERVICES
          </h2>
          <p className="text-slate-600 text-sm">
            Professional sourcing, cargo consolidation, and cross-border execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADING_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all space-y-4 group"
            >
              <SquircleIcon name={pillar.icon} size="lg" variant="blue" />
              <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Strategic Hubs & Executive Trade Desk */}
      <div className="rounded-[36px] bg-gradient-to-br from-white via-sky-50/50 to-blue-50/40 border border-sky-200 p-8 sm:p-12 space-y-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> Global Hub Operations
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-slate-900 uppercase">
              Direct Trading Hubs in UAE & Pakistan
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              With active trade desks situated in Dubai (UAE) and engineering/logistics centers in Pakistan, FAST TARGET CO delivers rapid turnaround on quotations, customs documentation, and shipment tracking.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-[20px] bg-white border border-slate-200 space-y-1 shadow-sm">
                <span className="text-[10px] text-blue-600 uppercase font-bold block">Dubai Hub (UAE)</span>
                <p className="text-xs font-bold text-slate-900">Middle East & Global Trade Desk</p>
                <p className="text-xs text-slate-600 font-mono">{COMPANY_INFO.contacts.uaePhone}</p>
              </div>

              <div className="p-4 rounded-[20px] bg-white border border-slate-200 space-y-1 shadow-sm">
                <span className="text-[10px] text-sky-600 uppercase font-bold block">Pakistan Hub</span>
                <p className="text-xs font-bold text-slate-900">South Asia Operations & Tech Center</p>
                <p className="text-xs text-slate-600 font-mono">{COMPANY_INFO.contacts.pkPhone}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-[28px] bg-white border border-sky-200 space-y-4 text-center shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-blue-600 mx-auto shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-['Outfit']">Trade Assurance & Escrow</h4>
            <p className="text-xs text-slate-600">
              Every contract is backed by verified commercial invoices, transparent shipping milestones, and comprehensive cargo insurance.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3.5 rounded-[16px] bg-gradient-to-r from-blue-600 to-sky-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30 transition-all"
            >
              Request Trade Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

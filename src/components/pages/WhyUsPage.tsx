import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Cpu,
  Target,
  Headphones,
  TrendingUp,
  Award,
} from 'lucide-react';
import { WHY_CHOOSE_US, TESTIMONIALS } from '../../data/content';
import { SquircleIcon } from '../SquircleIcon';
import { PageId } from '../../types';

interface WhyUsPageProps {
  onNavigate: (page: PageId) => void;
}

const COMPARISON_ROWS = [
  {
    feature: 'Design System & Aesthetics',
    fastTarget: 'Bespoke iOS continuous squircles, Display P3 palette & 120Hz micro-interactions',
    others: 'Generic pre-made Bootstrap / WordPress templates',
  },
  {
    feature: 'Architecture & Performance',
    fastTarget: 'Lighthouse 95–100%, server-side rendering, sub-second TTFB & zero-lag React 19',
    others: 'Bloated plugins, slow shared hosting, 4-8 second load times',
  },
  {
    feature: 'Global Trade & Logistics Synergy',
    fastTarget: 'Integrated cross-border sourcing, customs clearance & supply chain telemetry',
    others: 'No trading capability (software-only or freight-only)',
  },
  {
    feature: 'Executive Leadership Access',
    fastTarget: 'Direct communications with CEO Mohammed Tayyab & GM Ahmed Subhan',
    others: 'Junior account managers and endless ticketing queues',
  },
  {
    feature: 'Turnaround & Security Assurance',
    fastTarget: 'Strict milestone delivery, verified escrow settlements & ISO27001 standard',
    others: 'Missed deadlines, vague progress tracking, unvetted freelancers',
  },
];

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>The FAST TARGET Standard</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-[1.08]">
          WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500">FAST TARGET CO</span>?
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine the speed and bespoke attention of an elite engineering studio with the global logistics reach of an established trading enterprise.
        </p>
      </div>

      {/* 2. Six Core Pillars Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WHY_CHOOSE_US.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-8 rounded-[32px] bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group hover:-translate-y-1.5"
          >
            <SquircleIcon name={item.icon} size="lg" variant="blue" />
            <h3 className="text-xl font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 3. Comparison Matrix: FAST TARGET CO vs Traditional Vendors */}
      <div className="rounded-[36px] bg-white p-8 sm:p-12 border border-slate-200 space-y-8 shadow-sm overflow-hidden">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Agency Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-slate-900 uppercase">
            HOW WE COMPARE TO CONVENTIONAL VENDORS
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="py-4 px-4">Evaluation Metric</th>
                <th className="py-4 px-4 text-blue-700 bg-sky-50 rounded-t-2xl font-bold">
                  FAST TARGET CO
                </th>
                <th className="py-4 px-4">Traditional Agency / Freelancers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-slate-900 max-w-[180px]">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-slate-800 bg-sky-50/60 font-medium border-l border-r border-sky-100">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{row.fastTarget}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-500">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{row.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Client Testimonials */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Client Voices
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            TRUSTED BY BUSINESS LEADERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[32px] bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-3">
                <div className="flex text-amber-400 gap-1 text-sm">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-900 font-['Outfit']">{t.author}</p>
                <p className="text-xs text-blue-600 font-semibold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

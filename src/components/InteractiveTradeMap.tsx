import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Anchor, ShieldCheck, Globe, Navigation, Layers } from 'lucide-react';

interface HubNode {
  id: string;
  name: string;
  country: string;
  role: string;
  x: number; // percentage
  y: number; // percentage
  activeShipments: number;
}

const HUBS: HubNode[] = [
  { id: 'dxb', name: 'Dubai Hub', country: 'United Arab Emirates', role: 'Headquarters & Middle East Trade Gateway', x: 62, y: 48, activeShipments: 24 },
  { id: 'pk', name: 'Islamabad / Karachi', country: 'Pakistan', role: 'Tech Studio & South Asia Logistics Center', x: 69, y: 45, activeShipments: 18 },
  { id: 'sg', name: 'Singapore', country: 'Singapore', role: 'Asia-Pacific Transshipment Hub', x: 78, y: 62, activeShipments: 14 },
  { id: 'sh', name: 'Shanghai', country: 'China', role: 'Global Manufacturing & Sourcing Port', x: 82, y: 44, activeShipments: 32 },
  { id: 'rt', name: 'Rotterdam', country: 'Netherlands', role: 'European Distribution Corridor', x: 48, y: 30, activeShipments: 12 },
  { id: 'ny', name: 'New York', country: 'United States', role: 'North American Commerce Transit', x: 28, y: 36, activeShipments: 9 },
];

export const InteractiveTradeMap: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<HubNode>(HUBS[0]);

  return (
    <div className="relative w-full rounded-[32px] bg-gradient-to-b from-[#0B132B] via-[#050C1E] to-[#030712] border border-blue-500/20 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,102,255,0.15)] overflow-hidden">
      
      {/* Background World Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Interactive Global Trade Matrix</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
            Connecting UAE, Pakistan & Global Markets
          </h3>
          <p className="text-sm text-slate-400 max-w-xl">
            Live multimodal freight lanes, verified sourcing networks, and secure cross-border settlement channels.
          </p>
        </div>

        {/* Live Metrics Pill */}
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Global Sourcing Status</span>
            <span className="text-xs font-bold text-white">100% Operational & Insured</span>
          </div>
        </div>
      </div>

      {/* Interactive Map Visual Stage */}
      <div className="relative z-10 my-6 h-[320px] sm:h-[400px] w-full rounded-2xl bg-slate-950/60 border border-white/5 flex items-center justify-center overflow-hidden">
        
        {/* Abstract Stylized World Map SVG */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover opacity-60 pointer-events-none select-none"
        >
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* World Continents Abstract Outlines */}
          <path
            d="M150,120 Q220,100 280,150 Q300,240 240,280 Q180,260 150,180 Z"
            fill="rgba(30, 41, 59, 0.45)"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.2"
          />
          <path
            d="M260,290 Q340,310 320,440 Q250,420 240,340 Z"
            fill="rgba(30, 41, 59, 0.45)"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.2"
          />
          <path
            d="M440,100 Q520,80 560,160 Q480,220 440,160 Z"
            fill="rgba(30, 41, 59, 0.45)"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.2"
          />
          <path
            d="M460,220 Q560,200 550,380 Q480,390 450,280 Z"
            fill="rgba(30, 41, 59, 0.45)"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.2"
          />
          <path
            d="M580,100 Q860,80 880,260 Q720,320 600,200 Z"
            fill="rgba(30, 41, 59, 0.5)"
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="1.2"
          />
          <path
            d="M740,320 Q840,320 830,420 Q740,430 730,360 Z"
            fill="rgba(30, 41, 59, 0.4)"
            stroke="rgba(56, 189, 248, 0.2)"
            strokeWidth="1.2"
          />

          {/* Animated Trade Connection Curved Lines */}
          {/* Dubai <-> Pakistan primary corridor */}
          <path
            d="M620,240 Q655,210 690,225"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="animate-pulse"
          />
          {/* Dubai <-> Singapore */}
          <path
            d="M620,240 Q700,270 780,310"
            fill="none"
            stroke="rgba(56, 189, 248, 0.6)"
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
          {/* Dubai <-> Shanghai */}
          <path
            d="M620,240 Q720,180 820,220"
            fill="none"
            stroke="rgba(56, 189, 248, 0.6)"
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
          {/* Dubai <-> Rotterdam */}
          <path
            d="M620,240 Q550,170 480,150"
            fill="none"
            stroke="rgba(56, 189, 248, 0.5)"
            strokeWidth="1.8"
            strokeDasharray="4 4"
          />
          {/* Rotterdam <-> New York */}
          <path
            d="M480,150 Q380,130 280,180"
            fill="none"
            stroke="rgba(56, 189, 248, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Interactive Hub Markers */}
        {HUBS.map((hub) => {
          const isSelected = selectedHub.id === hub.id;
          return (
            <div
              key={hub.id}
              onClick={() => setSelectedHub(hub)}
              style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
            >
              {/* Pulse waves */}
              <div
                className={`absolute -inset-3 rounded-full ${
                  isSelected ? 'bg-blue-400/40 animate-ping' : 'bg-cyan-400/20 group-hover:animate-ping'
                }`}
              />

              {/* Node badge */}
              <div
                className={`relative px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 transition-all duration-300 shadow-lg ${
                  isSelected
                    ? 'bg-blue-600 text-white ring-2 ring-cyan-300 scale-110 shadow-[0_0_20px_rgba(59,130,246,0.8)]'
                    : 'bg-slate-900/90 text-slate-200 border border-blue-400/40 group-hover:border-cyan-300 group-hover:scale-105'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isSelected ? 'bg-cyan-300 animate-pulse' : 'bg-blue-400'
                  }`}
                />
                <span>{hub.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Hub Detail Card */}
      <motion.div
        key={selectedHub.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <Anchor className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">{selectedHub.name}</h4>
            <p className="text-xs text-blue-300">{selectedHub.country}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t md:border-t-0 md:border-l border-white/10 md:pl-4 pt-2 md:pt-0">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <Navigation className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Hub Strategic Function</span>
            <p className="text-xs font-semibold text-slate-200">{selectedHub.role}</p>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 md:border-l border-white/10 md:pl-4 pt-2 md:pt-0">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Active Cargo</span>
            <p className="text-sm font-bold text-emerald-400">{selectedHub.activeShipments} Active Consignments</p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-blue-300 bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-400/20">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Customs Insured</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

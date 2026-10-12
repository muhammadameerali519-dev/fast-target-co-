import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  Shield,
  CreditCard,
  Layers,
  Activity,
  Bell,
  ArrowUpRight,
  Sparkles,
  Ship,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';

export const InteractiveAppPhone: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'trading' | 'analytics' | 'wallet'>('dashboard');
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <div className="relative mx-auto flex items-center justify-center p-4">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 rounded-[60px] blur-2xl opacity-70 pointer-events-none" />

      {/* iPhone 16 Pro Titanium Chassis */}
      <div className="relative w-[310px] sm:w-[340px] h-[640px] bg-gradient-to-b from-slate-800 via-slate-900 to-black rounded-[52px] p-[11px] shadow-[0_25px_60px_-15px_rgba(0,102,255,0.35),0_0_0_1px_rgba(255,255,255,0.15)] border border-slate-700/60 select-none">
        {/* Antenna bands & buttons */}
        <div className="absolute -left-[14px] top-24 w-[3px] h-9 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[14px] top-36 w-[3px] h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[14px] top-52 w-[3px] h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-[14px] top-32 w-[3px] h-16 bg-slate-700 rounded-r-md" />

        {/* Screen Bezel & Container */}
        <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden flex flex-col text-slate-800 font-['Plus_Jakarta_Sans'] border border-slate-200">
          
          {/* iOS Dynamic Island */}
          <div className="pt-2 px-6 flex items-center justify-between z-30 bg-white">
            <span className="text-[11px] font-semibold text-slate-900">9:41</span>
            <div className="w-24 h-5 bg-slate-900 rounded-full flex items-center justify-between px-2.5 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-slate-700" />
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-slate-900">
              <span className="font-medium">5G</span>
              <div className="w-4 h-2.5 border border-slate-900 rounded-[3px] p-[1px] flex items-center">
                <div className="w-full h-full bg-blue-600 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* App Top Bar */}
          <div className="px-5 pt-3 pb-2 flex items-center justify-between border-b border-slate-100 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[12px] bg-gradient-to-br from-blue-600 to-sky-500 p-1.5 flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-['Outfit'] tracking-wide text-slate-900">FAST TARGET</h4>
                <p className="text-[9px] text-blue-600 font-medium">Enterprise Hub v3.4</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="w-7 h-7 rounded-[10px] bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-slate-200 transition-colors"
                title="Notifications"
              >
                <Bell className="w-3.5 h-3.5 text-slate-700" />
              </button>
            </div>
          </div>

          {/* Tab Views Body */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 scrollbar-none bg-slate-50/70">
            <AnimatePresence mode="wait">
              {activeTab === 'dashboard' && (
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-3"
                >
                  {/* Financial & Trade Overview Card */}
                  <div className="relative rounded-[22px] bg-gradient-to-br from-blue-600 via-blue-700 to-sky-600 p-4 text-white shadow-lg overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-xl" />
                    <div className="flex items-center justify-between text-[11px] text-blue-100 mb-1">
                      <span>Global Trade Balance</span>
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-300 bg-white/15 backdrop-blur-sm px-1.5 py-0.5 rounded-full font-semibold">
                        <TrendingUp className="w-2.5 h-2.5" /> +18.4%
                      </span>
                    </div>
                    <div className="text-xl font-bold font-['Outfit'] tracking-tight text-white mb-2">
                      {balanceVisible ? '$1,480,250.00' : '••••••••••••'}
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20 text-[10px]">
                      <div>
                        <span className="text-blue-100 block text-[9px]">Active Cargo</span>
                        <span className="font-semibold text-white">14 Shipments</span>
                      </div>
                      <div>
                        <span className="text-blue-100 block text-[9px]">Transit Status</span>
                        <span className="font-semibold text-emerald-300">100% On-Track</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Squircle Action Grid */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { icon: Smartphone, label: 'App Dev', color: 'text-blue-600 bg-blue-50' },
                      { icon: Ship, label: 'Trading', color: 'text-sky-600 bg-sky-50' },
                      { icon: CreditCard, label: 'Escrow', color: 'text-indigo-600 bg-indigo-50' },
                      { icon: Shield, label: 'Security', color: 'text-emerald-600 bg-emerald-50' },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center gap-1 p-2 rounded-[16px] bg-white border border-slate-200/80 hover:border-sky-300 shadow-sm transition-all cursor-pointer"
                      >
                        <div className={`w-7 h-7 rounded-[11px] flex items-center justify-center ${item.color}`}>
                          <item.icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[9px] font-semibold text-slate-700">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Active Digital Pipeline Card */}
                  <div className="rounded-[20px] bg-white border border-slate-200/80 p-3 space-y-2 shadow-sm">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-900">Active Digital Sprint</span>
                      <span className="text-[10px] text-blue-600 font-bold">Stage 4 of 5</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] text-slate-600">
                        <span>AuraPay iOS Architecture</span>
                        <span className="text-emerald-600 font-bold">92% Ready</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full w-[92%]" />
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity List */}
                  <div className="rounded-[20px] bg-white border border-slate-200/80 p-3 space-y-2 shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                      Live Telemetry
                    </span>
                    <div className="space-y-2">
                      {[
                        { title: 'Dubai Port Container #FT-984', time: '12m ago', status: 'Cleared', ok: true },
                        { title: 'API Gateway Deployment', time: '1h ago', status: 'Live', ok: true },
                      ].map((log, i) => (
                        <div key={i} className="flex items-center justify-between text-[10px] pb-1 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <div>
                              <p className="font-medium text-slate-800">{log.title}</p>
                              <p className="text-[9px] text-slate-400">{log.time}</p>
                            </div>
                          </div>
                          <span className="text-[9px] text-blue-600 font-semibold">{log.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'trading' && (
                <motion.div
                  key="trading"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-3"
                >
                  <div className="rounded-[20px] bg-gradient-to-br from-blue-600 to-sky-600 text-white p-3 shadow-md">
                    <span className="text-[10px] text-blue-100 uppercase tracking-wider block">Global Sourcing Hub</span>
                    <h5 className="text-sm font-bold text-white mt-1">Middle East — Asia Transit</h5>
                    <div className="mt-2.5 flex items-center justify-between text-[10px] text-blue-100">
                      <span>Live Vessel Tracking</span>
                      <span className="text-emerald-300 font-bold">Operational</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { route: 'Jebel Ali (UAE) → Karachi (PK)', est: '3 Days', goods: 'High-Tech Components', value: '$450K' },
                      { route: 'Dubai Hub → Singapore', est: '5 Days', goods: 'Industrial Hardware', value: '$820K' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-[16px] bg-white border border-slate-200 text-[10px] space-y-1 shadow-sm">
                        <div className="flex items-center justify-between font-semibold text-slate-800">
                          <span>{item.route}</span>
                          <span className="text-blue-600 font-bold">{item.value}</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-500 text-[9px]">
                          <span>{item.goods}</span>
                          <span>ETA: {item.est}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-3 text-[10px]"
                >
                  <div className="rounded-[20px] bg-white border border-slate-200 p-3 shadow-sm">
                    <span className="text-slate-500 font-medium">Monthly Performance</span>
                    <h5 className="text-base font-bold text-slate-900 font-['Outfit'] mt-1">+320% Traffic & Trades</h5>
                    
                    {/* Simulated Mini Bar Chart */}
                    <div className="mt-3 flex items-end justify-between h-16 pt-2 gap-1.5">
                      {[40, 65, 55, 80, 70, 95, 100].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full bg-gradient-to-t from-blue-600 to-sky-400 rounded-t-md"
                            style={{ height: `${val}%` }}
                          />
                          <span className="text-[8px] text-slate-400">D{idx + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'wallet' && (
                <motion.div
                  key="wallet"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="space-y-3"
                >
                  <div className="rounded-[20px] bg-gradient-to-r from-blue-600 to-sky-600 p-3.5 text-white shadow-lg">
                    <div className="flex justify-between items-center text-[10px] text-blue-100">
                      <span>FAST TARGET Business Card</span>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="mt-3 text-sm font-mono tracking-widest">•••• 8824</div>
                    <div className="mt-2 flex justify-between items-end text-[9px] text-blue-100">
                      <div>
                        <span className="block text-[8px] opacity-75">CARDHOLDER</span>
                        <span className="font-semibold text-white">M. TAYYAB</span>
                      </div>
                      <span className="font-semibold">12/29</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* iOS Bottom Navigation Bar */}
          <div className="px-4 py-2 bg-white border-t border-slate-200 flex items-center justify-around z-20">
            {[
              { id: 'dashboard', icon: Layers, label: 'Overview' },
              { id: 'trading', icon: Ship, label: 'Trading' },
              { id: 'analytics', icon: Activity, label: 'Metrics' },
              { id: 'wallet', icon: CreditCard, label: 'Wallet' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl transition-all duration-200 ${
                    isActive ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-[8px]">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Home indicator bar */}
          <div className="pb-1.5 flex justify-center bg-white">
            <div className="w-28 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

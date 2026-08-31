import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
  Code2,
  Workflow,
} from 'lucide-react';
import { InteractiveAppPhone } from '../InteractiveAppPhone';
import { SquircleIcon } from '../SquircleIcon';
import { PageId } from '../../types';

interface AppDevPageProps {
  onNavigate: (page: PageId) => void;
}

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Concept & Product Discovery',
    short: 'Concept',
    tagline: 'Architecting market product-fit & monetization blueprints',
    description: 'We audit your business requirements, define user personas, map competitive moats, and produce technical feasibility architecture diagrams.',
    deliverables: ['User Story Map', 'Technical Feasibility Study', 'System Architecture Schematics', 'Milestone Gantt Schedule'],
  },
  {
    step: '02',
    title: 'UI/UX Architecture & Prototyping',
    short: 'UI/UX',
    tagline: 'Apple Human Interface & Material Design precision',
    description: 'Creating high-fidelity interactive prototypes in Figma with custom design tokens, butter-smooth 120Hz gesture physics, and dark/light mode standards.',
    deliverables: ['Complete Figma UI Kit', 'Clickable Prototype on Devices', 'Micro-Animation Specifications', 'Design Token JSONs'],
  },
  {
    step: '03',
    title: 'Full-Stack Development',
    short: 'Development',
    tagline: 'Native performance, clean code, scalable microservices',
    description: 'Writing robust, type-safe code using Swift, Kotlin, Flutter, or React Native paired with low-latency APIs, offline caching, and biometric authorization.',
    deliverables: ['Clean Git Repositories', 'Modular API Backend', 'Offline SQLite/Room Database', 'Biometric & Push Service'],
  },
  {
    step: '04',
    title: 'Rigorous QA & Security Testing',
    short: 'Testing',
    tagline: 'Zero crash tolerance & vulnerability auditing',
    description: 'Running multi-device test automation across 50+ screen resolutions, battery consumption profiling, network latency throttling, and penetration tests.',
    deliverables: ['Automated End-to-End Test Suite', 'Security Audit Certificate', 'Load & Stress Benchmarks', 'Device Compatibility Matrix'],
  },
  {
    step: '05',
    title: 'App Store Launch & Scalability',
    short: 'Launch',
    tagline: 'Frictionless App Store & Google Play distribution',
    description: 'We manage full App Store Connect & Google Play Console review approvals, App Store Optimization (ASO), live analytics tracking, and continuous CI/CD pipelines.',
    deliverables: ['App Store & Play Store Approval', 'ASO Metadata & Screenshots', 'Crashlytics & Telemetry Setup', '30-Day Launch Warranty'],
  },
];

export const AppDevPage: React.FC<AppDevPageProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Page Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Engineering Division</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight leading-[1.08]">
            TURN YOUR IDEA INTO AN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">APP</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            FAST TARGET CO designs and builds cutting-edge iOS and Android applications with unmatched fluid animations, modern squircle components, and bulletproof cloud infrastructure.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { value: '120Hz', label: 'ProMotion Smoothness' },
              { value: '99.9%', label: 'Crash-Free Sessions' },
              { value: 'Native', label: 'iOS & Android Quality' },
            ].map((m, i) => (
              <div key={i} className="p-3 rounded-[18px] bg-white/[0.03] border border-white/[0.08] text-center">
                <span className="text-lg sm:text-xl font-bold font-['Outfit'] text-cyan-300 block">{m.value}</span>
                <span className="text-[10px] text-slate-400 font-medium">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>BUILD YOUR APP NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-4 rounded-[20px] bg-white/5 hover:bg-white/10 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/10 transition-all"
            >
              View App Portfolio
            </button>
          </div>
        </div>

        {/* Right: Interactive iPhone with simulated FAST TARGET app */}
        <div className="lg:col-span-6 flex justify-center">
          <InteractiveAppPhone />
        </div>
      </div>

      {/* 2. Process Timeline: Concept → UI/UX → Development → Testing → Launch */}
      <div className="rounded-[36px] bg-gradient-to-b from-slate-900/90 via-[#070F26] to-slate-950 p-8 sm:p-12 border border-blue-500/25 space-y-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            Development Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white uppercase tracking-tight">
            HOW WE BUILD YOUR MOBILE APPLICATION
          </h2>
          <p className="text-slate-400 text-sm">
            Click each phase to inspect our deliverables and production milestones.
          </p>
        </div>

        {/* Step Selector Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
          {PROCESS_STEPS.map((p, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 sm:p-4 rounded-[20px] text-left transition-all duration-300 flex flex-col justify-between border ${
                  isActive
                    ? 'bg-blue-600/30 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] scale-[1.02]'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {p.step}
                  </span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />}
                </div>
                <span className={`text-xs sm:text-sm font-bold font-['Outfit'] ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {p.short}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-[28px] bg-white/[0.04] border border-blue-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-md"
          >
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                <span>STAGE {PROCESS_STEPS[activeStepIndex].step} OF 05</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                {PROCESS_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-xs font-semibold text-blue-400">
                {PROCESS_STEPS[activeStepIndex].tagline}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>
            </div>

            <div className="lg:col-span-5 p-5 rounded-[22px] bg-black/40 border border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Guaranteed Phase Deliverables:
              </span>
              <div className="space-y-2 text-xs text-slate-200">
                {PROCESS_STEPS[activeStepIndex].deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Tech Stack Matrix */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            Technology Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white uppercase tracking-tight">
            MOBILE TECH STACK
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { name: 'Swift / SwiftUI', type: 'iOS Native', color: 'from-orange-500/20 to-amber-500/10' },
            { name: 'Kotlin / Jetpack', type: 'Android Native', color: 'from-purple-500/20 to-indigo-500/10' },
            { name: 'Flutter', type: 'Cross-Platform', color: 'from-cyan-500/20 to-blue-500/10' },
            { name: 'React Native', type: 'Cross-Platform', color: 'from-blue-500/20 to-indigo-500/10' },
            { name: 'Node.js & Go', type: 'High-Scale Backend', color: 'from-emerald-500/20 to-teal-500/10' },
            { name: 'PostgreSQL & Redis', type: 'Low Latency Data', color: 'from-sky-500/20 to-blue-500/10' },
          ].map((tech, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-[22px] bg-gradient-to-b ${tech.color} border border-white/10 flex flex-col justify-center items-center text-center group hover:scale-105 transition-all`}
            >
              <Cpu className="w-6 h-6 text-cyan-300 mb-2 group-hover:rotate-12 transition-transform" />
              <span className="text-xs font-bold text-white block">{tech.name}</span>
              <span className="text-[10px] text-slate-400 mt-0.5">{tech.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Layers,
  Eye,
  MousePointer,
  Compass,
  Layout,
  Figma,
} from 'lucide-react';
import { PageId } from '../../types';
import { SquircleIcon } from '../SquircleIcon';

interface UiUxPageProps {
  onNavigate: (page: PageId) => void;
}

const UIUX_STAGES = [
  {
    step: '01',
    name: 'Research',
    title: 'User & Market Intelligence',
    desc: 'Auditing competitors, conducting stakeholder interviews, defining empathy maps, and drafting user personas.',
    highlight: 'Data-Backed UX Architecture',
  },
  {
    step: '02',
    name: 'Wireframe',
    title: 'Low-Fidelity Information Architecture',
    desc: 'Structuring navigational flows, content hierarchies, and user journeys to ensure frictionless cognitive ergonomics.',
    highlight: 'Zero Cognitive Friction',
  },
  {
    step: '03',
    name: 'Prototype',
    title: 'Interactive Clickable Flows',
    desc: 'Building responsive Figma prototypes with realistic transitions to validate user tasks before writing a single line of code.',
    highlight: 'Rapid Task Validation',
  },
  {
    step: '04',
    name: 'Visual Design',
    title: 'Bespoke iOS Design Systems & Tokens',
    desc: 'Crafting luxury color palettes, squircle typography, glassmorphism tokens, and distinct dark/light interface aesthetics.',
    highlight: 'Futuristic Aesthetic Identity',
  },
  {
    step: '05',
    name: 'Testing',
    title: 'Usability & Accessibility Audits',
    desc: 'Running task-completion tests with real users, heatmap gaze analysis, and WCAG AA accessibility contrast verifications.',
    highlight: '100% Usability Compliance',
  },
  {
    step: '06',
    name: 'Final Product',
    title: 'Pixel-Perfect Developer Handoff',
    desc: 'Delivering comprehensive design token JSONs, vector asset suites, CSS motion specs, and engineering design system kits.',
    highlight: 'Turnkey Engineering Handoff',
  },
];

export const UiUxPage: React.FC<UiUxPageProps> = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState<number>(3); // Visual Design active by default

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Palette className="w-3.5 h-3.5" />
          <span>Product Design & Human Interface Studio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight leading-[1.08]">
          DESIGN THAT PEOPLE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
            REMEMBER.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We combine mathematical spatial balance, continuous-corner squircles, and refined typography into unforgettable digital experiences that elevate brand prestige.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>COMMISSION UI/UX DESIGN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Interactive 6-Stage Framework: Research → Wireframe → Prototype → Visual Design → Testing → Final Product */}
      <div className="rounded-[36px] bg-gradient-to-b from-slate-900/90 via-[#070F26] to-slate-950 p-8 sm:p-12 border border-blue-500/30 space-y-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            End-to-End Design Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white uppercase tracking-tight">
            FROM RESEARCH TO PIXEL-PERFECT REALITY
          </h2>
          <p className="text-slate-400 text-sm">
            Select a stage to explore our systematic human-centered design pipeline.
          </p>
        </div>

        {/* Stages Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {UIUX_STAGES.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-[20px] text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-blue-600/30 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.3)] scale-[1.03]'
                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-cyan-300' : 'text-slate-500'}`}>
                    {st.step}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping" />}
                </div>
                <span className={`text-xs font-bold font-['Outfit'] ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {st.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Visual Showcase & Glassmorphic Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-[28px] bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-slate-950/80 border border-blue-400/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center backdrop-blur-xl"
          >
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/20 font-mono">
                <span>STAGE {UIUX_STAGES[activeStage].step}: {UIUX_STAGES[activeStage].name.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                {UIUX_STAGES[activeStage].title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {UIUX_STAGES[activeStage].desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-2 rounded-[14px] border border-emerald-500/20 w-fit">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Outcome: {UIUX_STAGES[activeStage].highlight}</span>
              </div>
            </div>

            {/* Interactive Stage Preview Glass Card */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-[24px] bg-slate-950/80 border border-white/10 space-y-3 shadow-inner">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Eye className="w-3.5 h-3.5" /> FAST TARGET Design Token Inspector
                </span>
                <span className="font-mono">Figma Spec v4</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-[16px] bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">Corner Radius</span>
                  <span className="font-bold text-white font-mono">28px iOS Squircle</span>
                </div>
                <div className="p-3 rounded-[16px] bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">Motion Timing</span>
                  <span className="font-bold text-cyan-300 font-mono">cubic-bezier(0.16, 1, 0.3, 1)</span>
                </div>
                <div className="p-3 rounded-[16px] bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">Contrast Ratio</span>
                  <span className="font-bold text-emerald-400 font-mono">14.8:1 (WCAG AAA)</span>
                </div>
                <div className="p-3 rounded-[16px] bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[10px] text-slate-400 block">Color Space</span>
                  <span className="font-bold text-blue-300 font-mono">Display P3 Wide Gamut</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Design System Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: 'Layout',
            title: 'iOS Continuous Squircles',
            desc: 'Every button, badge, and card follows Apple’s signature super-ellipse formula for supreme visual elegance.',
          },
          {
            icon: 'Sliders',
            title: 'Micro-Interaction Physics',
            desc: 'Buttons and cards react dynamically with tactile magnetic pull, 3D tilt, and illuminated blue energy glows.',
          },
          {
            icon: 'Palette',
            title: 'Executive Color Hierarchy',
            desc: 'Deep cosmic navies, pure crisp whites, electric blues, and subtle gradients tuned for maximum luxury perception.',
          },
        ].map((pillar, i) => (
          <div
            key={i}
            className="p-6 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-blue-400/50 transition-all space-y-3"
          >
            <SquircleIcon name={pillar.icon} size="md" variant="blue" />
            <h4 className="text-lg font-bold font-['Outfit'] text-white">{pillar.title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

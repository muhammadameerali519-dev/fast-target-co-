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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Palette className="w-3.5 h-3.5 text-blue-600" />
          <span>Product Design & Human Interface Studio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-[1.08]">
          DESIGN THAT PEOPLE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-blue-500">
            REMEMBER.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We combine mathematical spatial balance, continuous-corner squircles, and refined typography into unforgettable digital experiences that elevate brand prestige.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-sky-400/30 hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>COMMISSION UI/UX DESIGN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Interactive 6-Stage Framework: Research → Wireframe → Prototype → Visual Design → Testing → Final Product */}
      <div className="rounded-[36px] bg-white p-8 sm:p-12 border border-slate-200 space-y-10 shadow-sm">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            End-to-End Design Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            FROM RESEARCH TO PIXEL-PERFECT REALITY
          </h2>
          <p className="text-slate-600 text-sm">
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
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 scale-[1.03]'
                    : 'bg-slate-50 border-slate-200 hover:bg-sky-50 text-slate-700'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-sky-200' : 'text-slate-400'}`}>
                    {st.step}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-200 animate-ping" />}
                </div>
                <span className={`text-xs font-bold font-['Outfit'] ${isActive ? 'text-white' : 'text-slate-800'}`}>
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
            className="p-6 sm:p-8 rounded-[28px] bg-sky-50/50 border border-sky-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-blue-700 text-xs font-bold uppercase tracking-wider border border-sky-200 font-mono">
                <span>STAGE {UIUX_STAGES[activeStage].step}: {UIUX_STAGES[activeStage].name.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-slate-900">
                {UIUX_STAGES[activeStage].title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {UIUX_STAGES[activeStage].desc}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-blue-700 bg-sky-100/70 px-3.5 py-2 rounded-[14px] border border-sky-200 w-fit">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Outcome: {UIUX_STAGES[activeStage].highlight}</span>
              </div>
            </div>

            {/* Interactive Stage Preview Glass Card */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-[24px] bg-white border border-slate-200 space-y-3 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
                  <Eye className="w-3.5 h-3.5" /> FAST TARGET Design Token Inspector
                </span>
                <span className="font-mono text-slate-400">Figma Spec v4</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-[16px] bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Corner Radius</span>
                  <span className="font-bold text-slate-900 font-mono">28px iOS Squircle</span>
                </div>
                <div className="p-3 rounded-[16px] bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Motion Timing</span>
                  <span className="font-bold text-blue-600 font-mono">cubic-bezier(0.16, 1, 0.3, 1)</span>
                </div>
                <div className="p-3 rounded-[16px] bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Contrast Ratio</span>
                  <span className="font-bold text-emerald-600 font-mono">14.8:1 (WCAG AAA)</span>
                </div>
                <div className="p-3 rounded-[16px] bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block">Color Space</span>
                  <span className="font-bold text-sky-600 font-mono">Display P3 Wide Gamut</span>
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
            desc: 'Deep crisp whites, sky blues, royal blues, and subtle slate borders tuned for maximum luxury perception.',
          },
        ].map((pillar, i) => (
          <div
            key={i}
            className="p-6 rounded-[28px] bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all space-y-3"
          >
            <SquircleIcon name={pillar.icon} size="md" variant="blue" />
            <h4 className="text-lg font-bold font-['Outfit'] text-slate-900">{pillar.title}</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

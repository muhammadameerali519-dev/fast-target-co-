import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  X,
  ExternalLink,
  Layers,
  Award,
} from 'lucide-react';
import { PROJECTS } from '../../data/content';
import { ProjectItem, PageId } from '../../types';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
}

const CATEGORIES = ['All', 'Websites', 'Apps', 'UI/UX', 'Branding', 'Social Media', 'Trading'] as const;

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero / Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Award className="w-3.5 h-3.5" />
          <span>Case Studies & Track Record</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight">
          OUR FEATURED WORK
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore benchmark mobile applications, enterprise trade hubs, high-converting digital storefronts, and brand identities crafted for high-growth ventures.
        </p>

        {/* Filter Tabs */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-[16px] text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400/50'
                    : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-[32px] bg-gradient-to-b from-slate-900 via-[#070F26] to-slate-950 border border-white/10 hover:border-blue-400/60 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(0,102,255,0.3)] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-2 select-none"
          >
            {/* Image Stage with Zoom */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070F26] via-transparent to-black/40" />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/30">
                  {project.stats}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block">
                  {project.client}
                </span>
                <h3 className="text-xl font-bold font-['Outfit'] text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Button */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-[8px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-blue-400 group-hover:text-cyan-300 transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-45" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Deep Dive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[36px] bg-gradient-to-b from-[#0B132B] to-[#030714] border border-blue-500/40 p-6 sm:p-10 shadow-2xl text-white space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                    {selectedProject.category} Case Study • {selectedProject.client}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Featured Image */}
              <div className="h-64 sm:h-72 rounded-[24px] overflow-hidden border border-white/10 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-emerald-300 text-xs font-bold font-mono border border-emerald-500/40">
                  {selectedProject.stats}
                </div>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-[22px] bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">
                    The Business Challenge
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-[22px] bg-white/[0.03] border border-white/[0.08] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    The FAST TARGET Solution
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Measured Results */}
              <div className="p-5 rounded-[22px] bg-blue-950/30 border border-blue-500/30 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" /> Quantified Results & ROI
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-[16px] bg-black/40 border border-white/10 text-xs text-slate-200 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Bottom CTA */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t, i) => (
                    <span key={i} className="text-[10px] text-slate-400 bg-white/5 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-[16px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2"
                >
                  <span>Build Similar Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

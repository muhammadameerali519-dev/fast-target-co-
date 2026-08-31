import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Share2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Heart,
  MessageCircle,
  Bookmark,
  Play,
  Flame,
  CheckCircle2,
  Video,
  BarChart3,
  Target,
  Megaphone,
} from 'lucide-react';
import { PageId } from '../../types';
import { SquircleIcon } from '../SquircleIcon';

interface SocialMediaPageProps {
  onNavigate: (page: PageId) => void;
}

const SOCIAL_SERVICES = [
  {
    title: 'Social Media Management',
    icon: 'Share2',
    desc: 'Complete day-to-day channel management, publishing schedules, community moderation, and audience growth.',
  },
  {
    title: 'High-Impact Content Creation',
    icon: 'Sparkles',
    desc: 'Editorial visuals, high-conversion copy, 3D product motion graphics, and carousel storytelling.',
  },
  {
    title: 'Post & Carousel Design',
    icon: 'Layout',
    desc: 'Cohesive brand aesthetics with bespoke squircle typography, infographics, and carousel layouts that earn saves.',
  },
  {
    title: 'Short-Form Reels & TikTok Strategy',
    icon: 'Video',
    desc: '9:16 vertical video scripting, trend-jacking, high-retention hooks, and viral sound engineering.',
  },
  {
    title: 'Comprehensive Campaign Planning',
    icon: 'Target',
    desc: 'Quarterly product launches, influencer gifting campaigns, and cross-channel digital PR coordination.',
  },
  {
    title: 'Brand Growth & Authority',
    icon: 'TrendingUp',
    desc: 'Transforming passive followers into active brand advocates and enterprise inbound leads.',
  },
  {
    title: 'Audience Engagement & Community',
    icon: 'MessageCircle',
    desc: 'Real-time comment engagement, VIP direct message nurturing, and customer support triage.',
  },
  {
    title: 'Social Media Paid Advertising',
    icon: 'Megaphone',
    desc: 'Data-driven Meta, TikTok, and LinkedIn ad campaigns optimized for high ROAS and lowest cost-per-acquisition.',
  },
];

export const SocialMediaPage: React.FC<SocialMediaPageProps> = ({ onNavigate }) => {
  const [likesCount, setLikesCount] = useState(14820);
  const [isLiked, setIsLiked] = useState(false);
  const [monthlyBudget, setMonthlyBudget] = useState(2500);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  // Estimated reach based on budget
  const estimatedReach = Math.round(monthlyBudget * 38);
  const estimatedClicks = Math.round(monthlyBudget * 1.6);
  const estimatedLeads = Math.round(monthlyBudget * 0.12);

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <Share2 className="w-3.5 h-3.5" />
          <span>Social Media & Digital Growth Studio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight leading-[1.08]">
          SOCIAL MEDIA & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
            DIGITAL GROWTH.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We don't post random content. We craft algorithmic campaigns, viral short-form video strategies, and premium visual identities that convert views into high-value clients.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 rounded-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <span>LAUNCH SOCIAL GROWTH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Interactive Social Media Format Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Simulated Instagram / Reels Vertical Feed Card */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[340px] rounded-[36px] bg-gradient-to-b from-slate-900 to-black p-4 border border-blue-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(37,99,235,0.25)] select-none">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-[2px]">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-bold text-xs text-white">
                    FT
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white">fasttarget.co</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 flex items-center justify-center text-[7px] text-white">✓</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Global Trading & Agency</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-blue-400 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-400/20">
                Trending ⚡
              </span>
            </div>

            {/* Video / Creative Stage */}
            <div className="relative my-3 rounded-[24px] overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-[#0B132B] h-[280px] flex flex-col justify-between p-4 border border-white/10">
              <div className="flex justify-between items-center text-xs">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-white font-mono text-[10px] flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-400" /> Viral Strategy
                </span>
                <span className="bg-blue-600/80 px-2.5 py-1 rounded-full text-[10px] font-bold text-white">
                  9:16 Ultra HD
                </span>
              </div>

              <div className="space-y-2 text-center my-auto">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-0.5" />
                </div>
                <h4 className="text-lg font-black font-['Outfit'] text-white">
                  HOW FAST TARGET SCALES GLOBAL BRANDS
                </h4>
                <p className="text-[11px] text-cyan-200">Watch the 60-second agency case study</p>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-blue-400 to-cyan-300" />
              </div>
            </div>

            {/* Interaction Row */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-slate-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleLike}
                    className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`}
                    />
                    <span className="text-xs font-bold font-mono">{likesCount.toLocaleString()}</span>
                  </button>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-bold font-mono">492</span>
                  </div>
                  <Share2 className="w-5 h-5" />
                </div>
                <Bookmark className="w-5 h-5" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">fasttarget.co</strong> Seamlessly connecting cross-border commerce and modern app architecture. #agency #trading #iOS #growth
              </p>
            </div>
          </div>
        </div>

        {/* Right: Campaign Growth & Ad ROI Estimator */}
        <div className="lg:col-span-6 space-y-6">
          <div className="rounded-[32px] bg-gradient-to-b from-slate-900/90 to-[#070F26] p-6 sm:p-8 border border-blue-500/30 space-y-6 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" /> Growth Impact Calculator
              </span>
              <h3 className="text-2xl font-bold font-['Outfit'] text-white mt-1">
                Estimate Your Campaign Reach
              </h3>
              <p className="text-xs text-slate-400">
                Adjust your monthly growth budget to simulate algorithmic reach and lead potential.
              </p>
            </div>

            {/* Range Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">Monthly Ad & Content Budget</span>
                <span className="text-cyan-300 font-mono text-base">${monthlyBudget.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="250"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>$500</span>
                <span>$7,500</span>
                <span>$15,000+</span>
              </div>
            </div>

            {/* Estimated Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-[18px] bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Est. Impressions</span>
                <span className="text-lg sm:text-xl font-black font-['Outfit'] text-cyan-300">
                  {estimatedReach.toLocaleString()}+
                </span>
              </div>

              <div className="p-3.5 rounded-[18px] bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Targeted Clicks</span>
                <span className="text-lg sm:text-xl font-black font-['Outfit'] text-white">
                  {estimatedClicks.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-[18px] bg-white/[0.04] border border-white/10 text-center">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Qualified Leads</span>
                <span className="text-lg sm:text-xl font-black font-['Outfit'] text-emerald-400">
                  {estimatedLeads.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3.5 rounded-[18px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Growth Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. All Social Media Services Grid */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            Comprehensive Growth Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-white uppercase tracking-tight">
            SOCIAL MEDIA CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_SERVICES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-blue-400/50 transition-all space-y-3 group"
            >
              <SquircleIcon name={item.icon} size="md" variant="blue" />
              <h4 className="text-base font-bold font-['Outfit'] text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

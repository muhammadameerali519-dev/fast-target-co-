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
import { TiltCard } from '../TiltCard';
import { LuxuryButton } from '../LuxuryButton';

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
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/90 shadow-sm text-sky-800 text-xs font-bold uppercase tracking-wider">
          <SquircleIcon variant="glow" size="xs">
            <Share2 className="w-3.5 h-3.5 text-white" />
          </SquircleIcon>
          <span>Social Media & Digital Growth Studio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight leading-[1.08]">
          SOCIAL MEDIA & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-600">
            DIGITAL GROWTH.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We don't post random content. We craft algorithmic campaigns, viral short-form video strategies, and premium visual identities that convert views into high-value clients.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <LuxuryButton
            variant="primary"
            size="lg"
            onClick={() => onNavigate('contact')}
            icon={ArrowRight}
            iconPosition="right"
          >
            LAUNCH SOCIAL GROWTH
          </LuxuryButton>
        </div>
      </div>

      {/* 2. Interactive Social Media Format Previews */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Simulated Instagram / Reels Vertical Feed Card with 3D Tilt */}
        <div className="lg:col-span-6 flex justify-center">
          <TiltCard
            className="w-full max-w-[340px] rounded-[36px] bg-white p-4 border border-slate-200/90 shadow-[0_20px_50px_rgba(2,132,199,0.12)] select-none"
            maxTilt={6}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <SquircleIcon variant="glow" size="sm">
                  <span className="font-bold text-xs text-white">FT</span>
                </SquircleIcon>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-slate-900">fasttarget.co</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 flex items-center justify-center text-[7px] text-white">✓</span>
                  </div>
                  <p className="text-[10px] text-slate-500">Global Trading & Agency</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-blue-700 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200">
                Trending ⚡
              </span>
            </div>

            {/* Video / Creative Stage */}
            <div className="relative my-3 rounded-[24px] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-600 h-[280px] flex flex-col justify-between p-4 shadow-inner text-white">
              <div className="flex justify-between items-center text-xs">
                <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white font-mono text-[10px] flex items-center gap-1">
                  <Flame className="w-3 h-3 text-amber-300" /> Viral Strategy
                </span>
                <span className="bg-sky-400/90 px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-950">
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
                <p className="text-[11px] text-sky-100">Watch the 60-second agency case study</p>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-sky-300" />
              </div>
            </div>

            {/* Interaction Row with Apple Squircles */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-slate-600">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleLike}
                    className="flex items-center gap-1.5 hover:text-rose-500 transition-colors cursor-pointer"
                  >
                    <SquircleIcon variant={isLiked ? 'rose' : 'white'} size="xs">
                      <Heart
                        className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-rose-500' : 'text-slate-600'}`}
                      />
                    </SquircleIcon>
                    <span className="text-xs font-bold font-mono">{likesCount.toLocaleString()}</span>
                  </button>
                  <div className="flex items-center gap-1.5">
                    <SquircleIcon variant="white" size="xs">
                      <MessageCircle className="w-3.5 h-3.5 text-slate-600" />
                    </SquircleIcon>
                    <span className="text-xs font-bold font-mono">492</span>
                  </div>
                  <SquircleIcon variant="white" size="xs">
                    <Share2 className="w-3.5 h-3.5 text-slate-600" />
                  </SquircleIcon>
                </div>
                <SquircleIcon variant="white" size="xs">
                  <Bookmark className="w-3.5 h-3.5 text-slate-600" />
                </SquircleIcon>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                <strong className="text-slate-900">fasttarget.co</strong> Seamlessly connecting cross-border commerce and modern app architecture. #agency #trading #iOS #growth
              </p>
            </div>
          </TiltCard>
        </div>

        {/* Right: Campaign Growth & Ad ROI Estimator */}
        <div className="lg:col-span-6 space-y-6">
          <TiltCard
            className="rounded-[34px] bg-white p-6 sm:p-8 border border-slate-200/90 space-y-6 shadow-sm"
            maxTilt={5}
          >
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <SquircleIcon variant="blue" size="xs">
                  <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                </SquircleIcon>
                <span>Growth Impact Calculator</span>
              </div>
              <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900 mt-1">
                Estimate Your Campaign Reach
              </h3>
              <p className="text-xs text-slate-500">
                Adjust your monthly growth budget to simulate algorithmic reach and lead potential.
              </p>
            </div>

            {/* Range Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-600">Monthly Ad & Content Budget</span>
                <span className="text-blue-600 font-mono text-base font-bold">${monthlyBudget.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="250"
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>$500</span>
                <span>$7,500</span>
                <span>$15,000+</span>
              </div>
            </div>

            {/* Estimated Metrics Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-[20px] bg-sky-50/70 border border-sky-100 text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Est. Impressions</span>
                <span className="text-lg sm:text-xl font-black font-['Outfit'] text-blue-700">
                  {estimatedReach.toLocaleString()}+
                </span>
              </div>

              <div className="p-3.5 rounded-[20px] bg-sky-50/70 border border-sky-100 text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Targeted Clicks</span>
                <span className="text-lg sm:text-xl font-black font-['Outfit'] text-sky-700">
                  {estimatedClicks.toLocaleString()}
                </span>
              </div>

              <div className="p-3.5 rounded-[20px] bg-sky-50/70 border border-sky-100 text-center">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Qualified Leads</span>
                <span className="text-lg sm:text-xl font-black font-['Outfit'] text-emerald-600">
                  {estimatedLeads.toLocaleString()}
                </span>
              </div>
            </div>

            <LuxuryButton
              variant="primary"
              size="md"
              fullWidth
              onClick={() => onNavigate('contact')}
              icon={ArrowRight}
              iconPosition="right"
            >
              Book Growth Strategy Call
            </LuxuryButton>
          </TiltCard>
        </div>
      </div>

      {/* 3. All Social Media Services 3D Tilt Grid */}
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            Comprehensive Growth Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
            SOCIAL MEDIA CAPABILITIES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_SERVICES.map((item, idx) => (
            <TiltCard
              key={idx}
              className="p-6 rounded-[30px] bg-white border border-slate-200/90 hover:border-sky-300 shadow-sm space-y-3 group"
              maxTilt={7}
            >
              <SquircleIcon name={item.icon} size="md" variant="blue" />
              <h4 className="text-base font-bold font-['Outfit'] text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
};

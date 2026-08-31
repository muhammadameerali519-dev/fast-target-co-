import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FtcIconMark } from './CompanyLogo';

interface IntroExperienceProps {
  onComplete: () => void;
}

export const IntroExperience: React.FC<IntroExperienceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Stage 0: Initial Ambient Aura (0ms)
    // Stage 1: Brand Logo & Title forms (600ms)
    // Stage 2: "GENERAL TRADING & DIGITAL SOLUTIONS" (1600ms)
    // Stage 3: "WELCOME TO THE FUTURE OF BUSINESS" (2600ms)
    // Stage 4: Launch into app (3600ms)

    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => {
      setStage(4);
      setTimeout(onComplete, 600);
    }, 3800);

    // Progress bar ticker
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2.8;
      });
    }, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden select-none"
    >
      {/* Background Cinematic Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1.1],
            opacity: [0.25, 0.55, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-indigo-600/30 blur-[130px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)]" />
        
        {/* Subtle high-tech grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Center Cinematic Container */}
      <div className="relative z-10 max-w-2xl px-6 text-center flex flex-col items-center">
        {/* Logo Badge Formation */}
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              initial={{ scale: 0.6, opacity: 0, filter: 'blur(10px)', y: 20 }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 relative"
            >
              {/* Pulsing ring aura */}
              <motion.div
                animate={{ scale: [1, 1.4, 1.2], opacity: [0.6, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -inset-3 rounded-[28px] bg-gradient-to-r from-blue-500 to-cyan-400 blur-md opacity-40"
              />

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] bg-gradient-to-b from-slate-900/95 to-[#0B132B] border border-cyan-400/40 p-5 shadow-[0_0_50px_rgba(6,182,212,0.45)] flex items-center justify-center backdrop-blur-xl">
                <div className="relative flex items-center justify-center">
                  <FtcIconMark className="w-12 h-12 sm:w-14 sm:h-14 text-white" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                    className="absolute -inset-4 border border-dashed border-cyan-400/30 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text 1: Brand Name */}
        <AnimatePresence>
          {stage >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 15, letterSpacing: '0.2em' }}
              animate={{ opacity: 1, y: 0, letterSpacing: '0.02em' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-['Outfit'] tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
                Fast Target Co
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text 2: Subtitle */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex items-center justify-center gap-2"
            >
              <span className="inline-block w-6 h-[1px] bg-gradient-to-r from-transparent to-cyan-400" />
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-300 font-['Plus_Jakarta_Sans']">
                (General Trading)
              </p>
              <span className="inline-block w-6 h-[1px] bg-gradient-to-l from-transparent to-cyan-400" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text 3: Future Tagline */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-200 text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>WELCOME TO THE FUTURE OF BUSINESS</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Loading Progress & Skip Button */}
      <div className="absolute bottom-10 left-0 right-0 max-w-md mx-auto px-8 flex flex-col items-center gap-4 z-20">
        <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/40">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-xs text-slate-400">
          <span className="font-mono tracking-wider text-slate-500">INITIALIZING SYSTEMS</span>
          <button
            onClick={onComplete}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors duration-200 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3 h-3 text-blue-400" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

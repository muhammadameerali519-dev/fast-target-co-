import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { IntroExperience } from './components/IntroExperience';

// Pages
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { AppDevPage } from './components/pages/AppDevPage';
import { WebDevPage } from './components/pages/WebDevPage';
import { UiUxPage } from './components/pages/UiUxPage';
import { SocialMediaPage } from './components/pages/SocialMediaPage';
import { TradingPage } from './components/pages/TradingPage';
import { AboutPage } from './components/pages/AboutPage';
import { WhyUsPage } from './components/pages/WhyUsPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPage } from './components/pages/AdminPage';

import { PageId } from './types';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedContactService, setSelectedContactService] = useState<string>('');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedContactService(serviceTitle);
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'services':
        return (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForContact={handleSelectServiceForContact}
          />
        );
      case 'app-dev':
        return <AppDevPage onNavigate={handleNavigate} />;
      case 'web-dev':
        return <WebDevPage onNavigate={handleNavigate} />;
      case 'ui-ux':
        return <UiUxPage onNavigate={handleNavigate} />;
      case 'social-media':
        return <SocialMediaPage onNavigate={handleNavigate} />;
      case 'trading':
        return <TradingPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'why-us':
        return <WhyUsPage onNavigate={handleNavigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <ContactPage
            initialService={selectedContactService}
            onNavigate={handleNavigate}
          />
        );
      case 'admin':
        return <AdminPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-blue-500 selection:text-white relative overflow-x-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* 1. Cinematic Intro Screen on Initial Load */}
      <AnimatePresence>
        {!introFinished && (
          <IntroExperience onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {/* 2. Global Ambient Background Grid & Cosmic Lights */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        {/* Top Centered Frosted Flare */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent blur-[140px] rounded-full" />
        
        {/* Left Side Ambient Flare */}
        <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px]" />

        {/* Right Side Ambient Flare */}
        <div className="absolute top-2/3 -right-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px]" />
      </div>

      {/* 3. Floating Glassmorphic Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onReplayIntro={() => setIntroFinished(false)}
      />

      {/* 4. Active Page Content with Motion Transition */}
      <main className="relative z-10 min-h-[calc(100vh-200px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Executive Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 6. Fixed Floating iOS-Style WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

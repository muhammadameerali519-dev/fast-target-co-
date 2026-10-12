import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles, Shield, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { PageId } from '../types';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-800 border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      {/* Background Lighting & Grid Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1 & 2: Brand & Executives */}
          <div className="lg:col-span-2 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left group cursor-pointer"
            >
              <CompanyLogo variant="footer" />
            </button>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Bridging international general commerce and premium next-generation digital technology. Helping global enterprises build stronger brands, scalable architecture, and unforgettable digital experiences.
            </p>

            {/* Executive Badge Highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <div className="p-3 rounded-[16px] bg-sky-50/80 border border-sky-100 shadow-sm">
                <span className="text-[10px] text-blue-600 uppercase tracking-wider font-bold block">
                  Chief Executive Officer
                </span>
                <span className="text-sm font-bold text-slate-900">{COMPANY_INFO.ceo}</span>
              </div>
              <div className="p-3 rounded-[16px] bg-sky-50/80 border border-sky-100 shadow-sm">
                <span className="text-[10px] text-sky-600 uppercase tracking-wider font-bold block">
                  General Manager
                </span>
                <span className="text-sm font-bold text-slate-900">{COMPANY_INFO.gm}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'All Services' },
                { id: 'why-us', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact & Inquiry' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Core Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {[
                { id: 'web-dev', label: 'Website Development' },
                { id: 'app-dev', label: 'App Development' },
                { id: 'ui-ux', label: 'UI/UX Design' },
                { id: 'social-media', label: 'Social Media' },
                { id: 'trading', label: 'General Trading' },
                { id: 'web-dev', label: 'E-Commerce Platforms' },
              ].map((serv, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      onNavigate(serv.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-400" />
                    <span>{serv.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Contact Hub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs">
              {/* UAE WhatsApp */}
              <a
                href={COMPANY_INFO.contacts.uaeWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-[14px] bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 flex items-center justify-between transition-all shadow-sm"
              >
                <div>
                  <span className="text-[10px] text-slate-500 block font-semibold">UAE WhatsApp</span>
                  <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.contacts.uaePhone}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </a>

              {/* Pakistan WhatsApp */}
              <a
                href={COMPANY_INFO.contacts.pkWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2.5 rounded-[14px] bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 flex items-center justify-between transition-all shadow-sm"
              >
                <div>
                  <span className="text-[10px] text-slate-500 block font-semibold">Pakistan WhatsApp</span>
                  <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {COMPANY_INFO.contacts.pkPhone}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
              </a>

              {/* Email */}
              <a
                href={COMPANY_INFO.contacts.mailtoUrl}
                className="group p-2.5 rounded-[14px] bg-slate-50 hover:bg-sky-50/70 border border-slate-200 hover:border-sky-300 flex items-center justify-between transition-all shadow-sm"
              >
                <div className="overflow-hidden pr-1">
                  <span className="text-[10px] text-slate-500 block font-semibold">Email</span>
                  <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate block">
                    {COMPANY_INFO.contacts.email}
                  </span>
                </div>
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>© 2026 FAST TARGET CO. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('admin')}
              className="text-blue-600 hover:text-sky-600 font-bold transition-colors flex items-center gap-1"
            >
              <span>Inquiries Desk</span>
            </button>
            <button
              onClick={() => onNavigate('trading')}
              className="hover:text-slate-900 transition-colors"
            >
              General Trading
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-900 transition-colors"
            >
              Start Project
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-sky-50 border border-slate-200 text-slate-700 hover:text-blue-600 shadow-sm transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

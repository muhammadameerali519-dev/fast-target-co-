import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Globe,
  ArrowRight,
  Headphones,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../../data/content';
import { PageId } from '../../types';
import { saveInquiry } from '../../utils/inquiriesStore';

interface ContactPageProps {
  initialService?: string;
  onNavigate?: (page: PageId) => void;
}

const BUDGET_OPTIONS = [
  'Under $2,500',
  '$2,500 - $5,000',
  '$5,000 - $15,000',
  '$15,000 - $50,000',
  '$50,000+',
  'General Trading Bulk Order',
];

export const ContactPage: React.FC<ContactPageProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || SERVICES[0].title,
    budget: BUDGET_OPTIONS[1],
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setValidationError('Please fill in your name, email, and phone / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    // Persist inquiry to administrative database / local store
    saveInquiry({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      budget: formData.budget,
      message: formData.message.trim() || 'Direct consultation inquiry submitted.',
      source: 'contact_form',
    });

    // Simulate reliable form submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const constructWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello FAST TARGET CO,\n\nMy Name: ${formData.name || 'Client'}\nService: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || 'I would like to discuss a project with your team.'}`
    );
    return `https://wa.me/971528653167?text=${text}`;
  };

  return (
    <div className="pt-24 sm:pt-28 pb-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Direct Inquiries & Executive Desks</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-white uppercase tracking-tight">
          LET'S BUILD SOMETHING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
            EXTRAORDINARY.
          </span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Whether you need a custom mobile application, high-conversion web platform, viral marketing strategy, or global trading fulfillment — our directors respond within 24 hours.
        </p>
      </div>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Contact Form */}
        <div className="lg:col-span-7 rounded-[36px] bg-gradient-to-b from-slate-900/90 via-[#070F26] to-slate-950 p-6 sm:p-10 border border-blue-500/30 shadow-2xl space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              Project Consultation & Proposal Request
            </h3>
            <p className="text-xs text-slate-400">
              Complete the form below for a tailored technical scope and cost estimate.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-[28px] bg-blue-950/40 border border-emerald-400/40 text-center space-y-4 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black font-['Outfit'] text-white">
                  INQUIRY RECEIVED SUCCESSFULLY
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our executive project director has received your request regarding <strong className="text-cyan-300">{formData.service}</strong> and will contact you via WhatsApp and Email within 24 hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={constructWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-[16px] bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Fast-Track via WhatsApp Now</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: SERVICES[0].title,
                        budget: BUDGET_OPTIONS[1],
                        message: '',
                      });
                    }}
                    className="px-4 py-3 rounded-[16px] bg-white/10 text-white text-xs font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError && (
                  <div className="p-3 rounded-[14px] bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-medium">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tariq@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Phone Number / WhatsApp <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </div>

                  {/* Primary Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-[#070F26] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget Selection Pills */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Estimated Project Budget
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {BUDGET_OPTIONS.map((opt) => {
                      const isSelected = formData.budget === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`p-2.5 rounded-[14px] text-xs font-semibold transition-all border text-center ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-400 shadow-md'
                              : 'bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] border-white/10'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-semibold text-slate-300">
                    Project Goals / Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your objectives, timeline, or trading product requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[18px] bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-[20px] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Secure Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Global Desks & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* UAE Direct Desk Card */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-slate-900 to-[#070F26] border border-blue-400/30 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇦🇪</span>
                <div>
                  <h4 className="font-bold text-white font-['Outfit']">UAE Operations & Trading Desk</h4>
                  <p className="text-xs text-blue-400">Dubai, United Arab Emirates</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Online
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.contacts.uaePhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>info@fasttarget.co</span>
              </p>
            </div>

            <a
              href={COMPANY_INFO.contacts.uaeWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-[16px] bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (UAE)</span>
            </a>
          </div>

          {/* Pakistan Direct Desk Card */}
          <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-b from-slate-900 to-[#070F26] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇵🇰</span>
                <div>
                  <h4 className="font-bold text-white font-['Outfit']">Pakistan Tech & Logistics Desk</h4>
                  <p className="text-xs text-blue-400">Pakistan Regional Operations</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Online
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.contacts.pkPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>support@fasttarget.co</span>
              </p>
            </div>

            <a
              href={COMPANY_INFO.contacts.pkWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-[16px] bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (PK)</span>
            </a>
          </div>

          {/* Support Guarantee Card */}
          <div className="p-5 rounded-[24px] bg-white/[0.02] border border-white/10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-[14px] bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-cyan-300 shrink-0">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-white block">24/7 Dedicated Client Assurance</span>
              <span className="text-slate-400">Active project telemetry and continuous milestone reporting.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

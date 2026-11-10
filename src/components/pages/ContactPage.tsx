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
import { SquircleIcon } from '../SquircleIcon';
import { TiltCard } from '../TiltCard';
import { LuxuryButton } from '../LuxuryButton';

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
    }, 700);
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
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/90 shadow-sm text-sky-800 text-xs font-bold uppercase tracking-wider">
          <SquircleIcon variant="glow" size="xs">
            <MessageCircle className="w-3.5 h-3.5 text-white" />
          </SquircleIcon>
          <span>Direct Inquiries & Executive Desks</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-['Outfit'] text-slate-900 uppercase tracking-tight">
          LET'S BUILD SOMETHING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-blue-600">
            EXTRAORDINARY.
          </span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you need a custom mobile application, high-conversion web platform, viral marketing strategy, or global trading fulfillment — our directors respond within 24 hours.
        </p>
      </div>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Contact Form with 3D Depth */}
        <div className="lg:col-span-7 rounded-[36px] bg-white p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold font-['Outfit'] text-slate-900">
              Project Consultation & Proposal Request
            </h3>
            <p className="text-xs text-slate-500">
              Complete the form below for a tailored technical scope and cost estimate.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-[28px] bg-sky-50/70 border border-emerald-300 text-center space-y-4 shadow-sm"
              >
                <SquircleIcon variant="emerald" size="2xl" className="mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </SquircleIcon>
                <h4 className="text-2xl font-black font-['Outfit'] text-slate-900">
                  INQUIRY RECEIVED SUCCESSFULLY
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our executive project director has received your request regarding <strong className="text-blue-600">{formData.service}</strong> and will contact you via WhatsApp and Email within 24 hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <LuxuryButton
                    variant="emerald"
                    size="md"
                    href={constructWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={MessageCircle}
                    iconPosition="left"
                    squircleIcon
                  >
                    Fast-Track via WhatsApp Now
                  </LuxuryButton>

                  <LuxuryButton
                    variant="secondary"
                    size="md"
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
                  >
                    Send Another Inquiry
                  </LuxuryButton>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {validationError && (
                  <div className="p-3.5 rounded-[16px] bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Full Name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Al-Mansoor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Email Address <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. tariq@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone / WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Phone Number / WhatsApp <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Primary Service */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-[18px] bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:bg-white focus:outline-none focus:border-blue-500 transition-colors"
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
                  <label className="text-xs font-semibold text-slate-700 block">
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
                          className={`p-2.5 rounded-[16px] text-xs font-semibold transition-all border text-center cursor-pointer ${
                            isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                              : 'bg-slate-50 text-slate-700 hover:bg-sky-50 border-slate-200'
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
                  <label className="text-xs font-semibold text-slate-700">
                    Project Goals / Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your objectives, timeline, or trading product requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[18px] bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:bg-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <LuxuryButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={Send}
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Sending Secure Inquiry...' : 'Submit Project Inquiry'}
                  </LuxuryButton>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Global Desks & Direct Channels with 3D Tilt */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* UAE Direct Desk Card */}
          <TiltCard
            className="p-6 sm:p-8 rounded-[34px] bg-white border border-slate-200/90 space-y-4 shadow-sm"
            maxTilt={6}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="white" size="md">
                  <span className="text-lg">🇦🇪</span>
                </SquircleIcon>
                <div>
                  <h4 className="font-bold text-slate-900 font-['Outfit']">UAE Operations & Trading Desk</h4>
                  <p className="text-xs text-blue-600 font-semibold">Dubai, United Arab Emirates</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Online
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2 font-mono">
                <SquircleIcon variant="blue" size="xs">
                  <Phone className="w-3 h-3 text-blue-600" />
                </SquircleIcon>
                <span className="text-slate-800 font-bold">{COMPANY_INFO.contacts.uaePhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <SquircleIcon variant="blue" size="xs">
                  <Mail className="w-3 h-3 text-blue-600" />
                </SquircleIcon>
                <span className="text-slate-800">info@fasttarget.co</span>
              </p>
            </div>

            <LuxuryButton
              variant="emerald"
              size="md"
              fullWidth
              href={COMPANY_INFO.contacts.uaeWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              iconPosition="left"
              squircleIcon
            >
              Chat on WhatsApp (UAE)
            </LuxuryButton>
          </TiltCard>

          {/* Pakistan Direct Desk Card */}
          <TiltCard
            className="p-6 sm:p-8 rounded-[34px] bg-white border border-slate-200/90 space-y-4 shadow-sm"
            maxTilt={6}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SquircleIcon variant="white" size="md">
                  <span className="text-lg">🇵🇰</span>
                </SquircleIcon>
                <div>
                  <h4 className="font-bold text-slate-900 font-['Outfit']">Pakistan Tech & Logistics Desk</h4>
                  <p className="text-xs text-blue-600 font-semibold">Pakistan Regional Operations</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Online
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <p className="flex items-center gap-2 font-mono">
                <SquircleIcon variant="blue" size="xs">
                  <Phone className="w-3 h-3 text-blue-600" />
                </SquircleIcon>
                <span className="text-slate-800 font-bold">{COMPANY_INFO.contacts.pkPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <SquircleIcon variant="blue" size="xs">
                  <Mail className="w-3 h-3 text-blue-600" />
                </SquircleIcon>
                <span className="text-slate-800">support@fasttarget.co</span>
              </p>
            </div>

            <LuxuryButton
              variant="emerald"
              size="md"
              fullWidth
              href={COMPANY_INFO.contacts.pkWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              icon={MessageCircle}
              iconPosition="left"
              squircleIcon
            >
              Chat on WhatsApp (PK)
            </LuxuryButton>
          </TiltCard>

          {/* Support Guarantee Card with Apple Squircle */}
          <div className="p-5 rounded-[26px] bg-sky-50/70 border border-sky-100 flex items-center gap-3 shadow-sm">
            <SquircleIcon variant="blue" size="md">
              <Headphones className="w-5 h-5 text-blue-600" />
            </SquircleIcon>
            <div className="text-xs">
              <span className="font-bold text-slate-900 block">24/7 Dedicated Client Assurance</span>
              <span className="text-slate-600">Active project telemetry and continuous milestone reporting.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

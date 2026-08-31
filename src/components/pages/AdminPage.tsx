import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Lock,
  Unlock,
  Search,
  Filter,
  Download,
  Plus,
  RefreshCw,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  Trash2,
  FileText,
  UserCheck,
  Send,
  Eye,
  SlidersHorizontal,
  X,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Users,
  Briefcase,
} from 'lucide-react';
import { CompanyLogo } from '../CompanyLogo';
import { Inquiry, InquiryStatus, InquiryPriority, PageId } from '../../types';
import {
  getStoredInquiries,
  saveInquiry,
  updateInquiryStatus,
  updateInquiryPriority,
  addInquiryNote,
  deleteInquiry,
  resetToDemoInquiries,
} from '../../utils/inquiriesStore';

interface AdminPageProps {
  onNavigate: (page: PageId) => void;
}

const DEFAULT_PASSCODE = 'mtw7789@';

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('ft_admin_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Active / Selected Inquiry for detailed modal
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [newNoteText, setNewNoteText] = useState('');
  
  // Modal for adding manual inquiry
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [manualForm, setManualForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Mobile App Development',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const loadInquiries = () => {
    setInquiries(getStoredInquiries());
  };

  useEffect(() => {
    loadInquiries();

    const handleUpdate = () => {
      loadInquiries();
    };

    window.addEventListener('inquiries_updated', handleUpdate);
    return () => window.removeEventListener('inquiries_updated', handleUpdate);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === DEFAULT_PASSCODE) {
      sessionStorage.setItem('ft_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect Access Code. Please enter the valid executive passcode.');
    }
  };

  const handleQuickUnlock = () => {
    sessionStorage.setItem('ft_admin_auth', 'true');
    setIsAuthenticated(true);
    setAuthError('');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('ft_admin_auth');
    setIsAuthenticated(false);
    setPasscode('');
  };

  // Status Change Handler
  const handleStatusChange = (id: string, status: InquiryStatus) => {
    updateInquiryStatus(id, status);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status });
    }
  };

  // Priority Change Handler
  const handlePriorityChange = (id: string, priority: InquiryPriority) => {
    updateInquiryPriority(id, priority);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, priority });
    }
  };

  // Add Note Handler
  const handleAddNote = (id: string) => {
    if (!newNoteText.trim()) return;
    addInquiryNote(id, newNoteText.trim());
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({
        ...selectedInquiry,
        notes: [...(selectedInquiry.notes || []), newNoteText.trim()],
      });
    }
    setNewNoteText('');
  };

  // Delete Handler
  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this inquiry?')) {
      deleteInquiry(id);
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  // Manual Inquiry Submission
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualForm.name.trim() || !manualForm.phone.trim()) {
      alert('Please provide at least a name and phone number.');
      return;
    }
    saveInquiry({
      name: manualForm.name.trim(),
      email: manualForm.email.trim() || 'offline.lead@fasttarget.co',
      phone: manualForm.phone.trim(),
      service: manualForm.service,
      budget: manualForm.budget,
      message: manualForm.message.trim() || 'Manual lead entered by executive desk.',
      source: 'manual',
    });
    setManualForm({
      name: '',
      email: '',
      phone: '',
      service: 'Mobile App Development',
      budget: '$5,000 - $15,000',
      message: '',
    });
    setIsAddModalOpen(false);
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) {
      alert('No inquiries available to export.');
      return;
    }

    const headers = ['ID', 'Date', 'Client Name', 'Email', 'Phone', 'Service', 'Budget', 'Status', 'Priority', 'Message', 'Notes'];
    const rows = inquiries.map((inq) => [
      inq.id,
      new Date(inq.createdAt).toLocaleString(),
      `"${inq.name.replace(/"/g, '""')}"`,
      inq.email,
      inq.phone,
      `"${inq.service}"`,
      `"${inq.budget}"`,
      inq.status,
      inq.priority,
      `"${(inq.message || '').replace(/"/g, '""')}"`,
      `"${(inq.notes || []).join(' | ').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `fast_target_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered inquiries list
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (inq.message && inq.message.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === 'all' || inq.status === statusFilter;
    const matchesService = serviceFilter === 'all' || inq.service === serviceFilter;
    const matchesPriority = priorityFilter === 'all' || inq.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesService && matchesPriority;
  });

  // Calculate high-level pipeline stats
  const totalCount = inquiries.length;
  const newCount = inquiries.filter((i) => i.status === 'new').length;
  const inProgressCount = inquiries.filter((i) => i.status === 'in_progress').length;
  const closedCount = inquiries.filter((i) => i.status === 'closed').length;

  const formatRelativeTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hrs ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  // WhatsApp reply link generator
  const getWhatsAppReplyLink = (inquiry: Inquiry) => {
    const cleanPhone = inquiry.phone.replace(/[^0-9]/g, '');
    const messageText = encodeURIComponent(
      `Hello ${inquiry.name},\n\nThis is the executive team at FAST TARGET CO regarding your inquiry for ${inquiry.service}.\n\nWe have reviewed your scope and would like to share our proposal and arrange a brief call. Let us know what time works best for you.`
    );
    return `https://wa.me/${cleanPhone || '971528653167'}?text=${messageText}`;
  };

  // --- 1. Passcode Screen (If not authenticated) ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 relative">
        <div className="w-full max-w-md rounded-[32px] glass-panel-highlight p-8 sm:p-10 border border-blue-500/30 text-center space-y-6 shadow-2xl relative z-10">
          
          <div className="flex justify-center">
            <CompanyLogo variant="stacked" />
          </div>

          <div className="space-y-1.5 pt-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-300 text-[11px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Executive Access Portal</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white">
              INQUIRIES ADMIN
            </h2>
            <p className="text-xs text-slate-300">
              Enter executive PIN to view and manage client leads and consultations.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Security Passcode
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter executive passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-3 rounded-[18px] bg-white/[0.05] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                  autoFocus
                />
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-[14px] bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs text-center font-medium">
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-[18px] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>

          {/* Friendly Quick-Unlock button for immediate demo access */}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <button
              onClick={handleQuickUnlock}
              className="w-full py-2.5 rounded-[16px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>1-Click Executive Unlock</span>
            </button>
            <p className="text-[11px] text-slate-400">
              Secured client-side vault for Fast Target Co Executive Directors.
            </p>
          </div>

        </div>
      </div>
    );
  }

  // --- 2. Main Admin Dashboard ---
  return (
    <div className="pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* 1. Header Banner & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 sm:p-8 rounded-[32px] glass-panel-highlight border border-white/15">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Live Inquiries Vault & CRM
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black font-['Outfit'] text-white">
            CLIENT INQUIRIES DESK
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Real-time lead capture from Website Contact Form, UAE & PK WhatsApp Desks, and Phone simulators.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2.5 rounded-[16px] bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Manual Lead</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-3.5 py-2.5 rounded-[16px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={resetToDemoInquiries}
            title="Reset to fresh demo sample leads"
            className="px-3 py-2.5 rounded-[16px] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset Demo</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-3 py-2.5 rounded-[16px] bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metrics Summary Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-[24px] glass-panel border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
            <span>Total Inquiries</span>
            <Users className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-black font-['Outfit'] text-white">
            {totalCount}
          </div>
          <p className="text-[11px] text-slate-400">Captured across all channels</p>
        </div>

        <div className="p-5 rounded-[24px] glass-panel border border-cyan-500/25 space-y-1 bg-cyan-950/20">
          <div className="flex items-center justify-between text-cyan-300 text-xs font-medium">
            <span>New Leads (Unread)</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
          </div>
          <div className="text-3xl font-black font-['Outfit'] text-cyan-300">
            {newCount}
          </div>
          <p className="text-[11px] text-cyan-200/70">Awaiting executive response</p>
        </div>

        <div className="p-5 rounded-[24px] glass-panel border border-amber-500/20 space-y-1 bg-amber-950/10">
          <div className="flex items-center justify-between text-amber-300 text-xs font-medium">
            <span>In Negotiation</span>
            <Clock className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-black font-['Outfit'] text-amber-300">
            {inProgressCount}
          </div>
          <p className="text-[11px] text-amber-200/70">Active proposals & meetings</p>
        </div>

        <div className="p-5 rounded-[24px] glass-panel border border-emerald-500/20 space-y-1 bg-emerald-950/10">
          <div className="flex items-center justify-between text-emerald-300 text-xs font-medium">
            <span>Closed / Won</span>
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-black font-['Outfit'] text-emerald-300">
            {closedCount}
          </div>
          <p className="text-[11px] text-emerald-200/70">Contracts signed & active</p>
        </div>

      </div>

      {/* 3. Search & Filter Bar */}
      <div className="p-4 sm:p-5 rounded-[24px] glass-panel border border-white/10 space-y-4">
        
        <div className="flex flex-col md:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by client name, email, phone, keyword, or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-[16px] bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Service Filter */}
          <div className="w-full md:w-auto">
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="w-full md:w-48 px-3 py-2.5 rounded-[16px] bg-slate-900 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Services</option>
              <option value="Mobile App Development">Mobile App Dev</option>
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
              <option value="General Trading">General Trading</option>
            </select>
          </div>

          {/* Priority Filter */}
          <div className="w-full md:w-auto">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="w-full md:w-40 px-3 py-2.5 rounded-[16px] bg-slate-900 border border-white/10 text-slate-200 text-xs focus:outline-none focus:border-cyan-400"
            >
              <option value="all">All Priorities</option>
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="standard">Standard Priority</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-[14px] bg-white/[0.04] border border-white/10 self-stretch md:self-auto justify-center">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-[10px] text-xs font-semibold transition-all ${
                viewMode === 'cards'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-[10px] text-xs font-semibold transition-all ${
                viewMode === 'table'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Table
            </button>
          </div>

        </div>

        {/* Status Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
          <span className="text-xs font-medium text-slate-400 mr-1">Status:</span>
          {[
            { id: 'all', label: 'All Inquiries', count: inquiries.length },
            { id: 'new', label: 'New Leads', count: inquiries.filter((i) => i.status === 'new').length },
            { id: 'contacted', label: 'Contacted', count: inquiries.filter((i) => i.status === 'contacted').length },
            { id: 'in_progress', label: 'In Progress', count: inquiries.filter((i) => i.status === 'in_progress').length },
            { id: 'closed', label: 'Closed / Won', count: inquiries.filter((i) => i.status === 'closed').length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 rounded-[12px] text-xs font-medium transition-all flex items-center gap-1.5 ${
                statusFilter === tab.id
                  ? 'bg-blue-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'bg-white/[0.03] text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              <span>{tab.label}</span>
              <span className="px-1.5 py-0.2 rounded-full bg-white/10 text-[10px]">
                {tab.count}
              </span>
            </button>
          ))}
        </div>

      </div>

      {/* 4. Inquiries Display */}
      {filteredInquiries.length === 0 ? (
        <div className="p-16 rounded-[32px] glass-panel text-center space-y-4 border border-white/10">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-['Outfit'] text-white">
            No Inquiries Match Your Filter
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or reset the filters to view all leads.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('all');
              setServiceFilter('all');
              setPriorityFilter('all');
            }}
            className="px-4 py-2 rounded-[14px] bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
          >
            Clear All Filters
          </button>
        </div>
      ) : viewMode === 'cards' ? (
        /* Cards Layout */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredInquiries.map((inquiry) => (
            <motion.div
              key={inquiry.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-[28px] glass-panel-hover flex flex-col justify-between space-y-4 border transition-all ${
                inquiry.status === 'new'
                  ? 'border-cyan-400/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] bg-slate-900/80'
                  : 'border-white/10 bg-slate-950/70'
              }`}
            >
              <div className="space-y-3.5">
                
                {/* Card Header: ID, Source, Time, Status */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-cyan-300">
                        {inquiry.id}
                      </span>
                      {inquiry.priority === 'high' && (
                        <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 text-[10px] font-bold uppercase">
                          VIP High
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      {formatRelativeTime(inquiry.createdAt)}
                    </span>
                  </div>

                  {/* Status Dropdown Pill */}
                  <select
                    value={inquiry.status}
                    onChange={(e) => handleStatusChange(inquiry.id, e.target.value as InquiryStatus)}
                    className={`px-2.5 py-1 rounded-[10px] text-[11px] font-bold uppercase tracking-wider focus:outline-none cursor-pointer border ${
                      inquiry.status === 'new'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30'
                        : inquiry.status === 'in_progress'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-400/30'
                        : inquiry.status === 'contacted'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30'
                    }`}
                  >
                    <option value="new" className="bg-slate-900 text-cyan-300">New</option>
                    <option value="contacted" className="bg-slate-900 text-blue-300">Contacted</option>
                    <option value="in_progress" className="bg-slate-900 text-amber-300">In Progress</option>
                    <option value="closed" className="bg-slate-900 text-emerald-300">Closed / Won</option>
                  </select>
                </div>

                {/* Client Info */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-['Outfit'] text-white">
                    {inquiry.name}
                  </h3>
                  <div className="flex flex-col text-xs text-slate-300 space-y-1">
                    <a
                      href={`mailto:${inquiry.email}`}
                      className="flex items-center gap-1.5 hover:text-cyan-300 truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{inquiry.email}</span>
                    </a>
                    <a
                      href={`tel:${inquiry.phone}`}
                      className="flex items-center gap-1.5 hover:text-cyan-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{inquiry.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Service & Budget Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-[10px] bg-blue-500/10 border border-blue-400/20 text-blue-300 text-[11px] font-medium">
                    {inquiry.service}
                  </span>
                  <span className="px-2.5 py-1 rounded-[10px] bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-[11px] font-semibold">
                    {inquiry.budget}
                  </span>
                </div>

                {/* Message Snippet */}
                <div className="p-3 rounded-[16px] bg-white/[0.03] border border-white/5 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  "{inquiry.message || 'No additional scope details provided.'}"
                </div>

                {/* Notes preview if any */}
                {inquiry.notes && inquiry.notes.length > 0 && (
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3 h-3 text-cyan-400" />
                    <span>{inquiry.notes.length} internal note(s) logged</span>
                  </div>
                )}

              </div>

              {/* Card Action Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                
                {/* 1-Click WhatsApp Direct Reply */}
                <a
                  href={getWhatsAppReplyLink(inquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-[14px] bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Lead</span>
                </a>

                {/* Open Full Details / Notes Modal */}
                <button
                  onClick={() => setSelectedInquiry(inquiry)}
                  className="p-2 rounded-[14px] bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 transition-colors"
                  title="View full history & add notes"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                </button>

                {/* Delete button */}
                <button
                  onClick={() => handleDelete(inquiry.id)}
                  className="p-2 rounded-[14px] bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition-colors"
                  title="Delete inquiry"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Executive Table Layout */
        <div className="rounded-[28px] glass-panel border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/90 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4">ID & Date</th>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Contact Channels</th>
                  <th className="p-4">Requested Service</th>
                  <th className="p-4">Budget Range</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredInquiries.map((inquiry) => (
                  <tr
                    key={inquiry.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4">
                      <div className="font-mono font-bold text-cyan-300">{inquiry.id}</div>
                      <div className="text-[11px] text-slate-500">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-white">
                      {inquiry.name}
                    </td>
                    <td className="p-4 space-y-0.5">
                      <div>{inquiry.phone}</div>
                      <div className="text-slate-500">{inquiry.email}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-300">
                        {inquiry.service}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-emerald-300">
                      {inquiry.budget}
                    </td>
                    <td className="p-4">
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry.id, e.target.value as InquiryStatus)}
                        className={`px-2 py-1 rounded-[8px] text-[10px] font-bold uppercase focus:outline-none ${
                          inquiry.status === 'new'
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : inquiry.status === 'in_progress'
                            ? 'bg-amber-500/20 text-amber-300'
                            : inquiry.status === 'contacted'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        <option value="new" className="bg-slate-900">New</option>
                        <option value="contacted" className="bg-slate-900">Contacted</option>
                        <option value="in_progress" className="bg-slate-900">In Progress</option>
                        <option value="closed" className="bg-slate-900">Closed</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={getWhatsAppReplyLink(inquiry)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-[10px] bg-emerald-600/80 hover:bg-emerald-500 text-white"
                          title="WhatsApp reply"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => setSelectedInquiry(inquiry)}
                          className="p-1.5 rounded-[10px] bg-white/10 hover:bg-white/20 text-white"
                          title="View Details"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(inquiry.id)}
                          className="p-1.5 rounded-[10px] bg-rose-500/20 hover:bg-rose-500/30 text-rose-400"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- Detailed Inquiry Inspection & Notes Modal --- */}
      <AnimatePresence>
        {selectedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-[32px] glass-panel-highlight p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-bold text-cyan-300">
                      {selectedInquiry.id}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                      {selectedInquiry.service}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black font-['Outfit'] text-white mt-1">
                    {selectedInquiry.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Client Contacts & Scope details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-[20px] bg-white/[0.03] border border-white/10 text-xs">
                <div className="space-y-1">
                  <span className="text-slate-400 font-medium">Email:</span>
                  <div className="font-semibold text-white">{selectedInquiry.email}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-medium">Phone / WhatsApp:</span>
                  <div className="font-semibold text-white">{selectedInquiry.phone}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-medium">Budget Envelope:</span>
                  <div className="font-semibold text-emerald-400">{selectedInquiry.budget}</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-400 font-medium">Submitted At:</span>
                  <div className="text-slate-300">{new Date(selectedInquiry.createdAt).toLocaleString()}</div>
                </div>
              </div>

              {/* Full Scope Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Client Project Scope & Description
                </label>
                <div className="p-4 rounded-[18px] bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">
                  {selectedInquiry.message || 'No project description attached.'}
                </div>
              </div>

              {/* Internal Notes Thread */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Executive Notes & Next Steps ({selectedInquiry.notes?.length || 0})</span>
                </label>

                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {selectedInquiry.notes && selectedInquiry.notes.length > 0 ? (
                    selectedInquiry.notes.map((note, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-[12px] bg-slate-900/90 border border-white/10 text-xs text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{note}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 italic">No notes logged yet.</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add an internal log (e.g. 'Quote sent, call booked for Tuesday')..."
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleAddNote(selectedInquiry.id);
                    }}
                    className="flex-1 px-3.5 py-2 rounded-[14px] bg-white/[0.05] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    onClick={() => handleAddNote(selectedInquiry.id)}
                    className="px-4 py-2 rounded-[14px] bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
                  >
                    Add
                  </button>
                </div>
              </div>

              {/* Modal Direct Reply Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={getWhatsAppReplyLink(selectedInquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-[16px] bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Launch WhatsApp Executive Chat</span>
                </a>
                <a
                  href={`mailto:${selectedInquiry.email}?subject=FAST%20TARGET%20CO%20-%20Proposal%20for%20${encodeURIComponent(selectedInquiry.service)}`}
                  className="px-4 py-3 rounded-[16px] bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Client</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Manual Inquiry Creation Modal --- */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-[32px] glass-panel-highlight p-6 sm:p-8 border border-white/20 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">
                    Log Manual Lead
                  </h3>
                  <p className="text-xs text-slate-400">
                    Record offline walk-ins, phone calls, or UAE / PK desk inquiries.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleManualSubmit} className="space-y-3.5">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Client / Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sheikh Rashid"
                    value={manualForm.name}
                    onChange={(e) => setManualForm({ ...manualForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[14px] bg-white/[0.05] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={manualForm.phone}
                      onChange={(e) => setManualForm({ ...manualForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[14px] bg-white/[0.05] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Email Address</label>
                    <input
                      type="email"
                      placeholder="client@company.com"
                      value={manualForm.email}
                      onChange={(e) => setManualForm({ ...manualForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-[14px] bg-white/[0.05] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Service Category</label>
                    <select
                      value={manualForm.service}
                      onChange={(e) => setManualForm({ ...manualForm, service: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-[14px] bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Mobile App Development">Mobile App Dev</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="General Trading">General Trading</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300">Budget Range</label>
                    <select
                      value={manualForm.budget}
                      onChange={(e) => setManualForm({ ...manualForm, budget: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-[14px] bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Under $2,500">Under $2,500</option>
                      <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                      <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                      <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Discussion Notes / Project Scope</label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of requirements discussed..."
                    value={manualForm.message}
                    onChange={(e) => setManualForm({ ...manualForm, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-[14px] bg-white/[0.05] border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 resize-none"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-[16px] bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg"
                  >
                    Save & Add to Inquiries
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-3 rounded-[16px] bg-white/10 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

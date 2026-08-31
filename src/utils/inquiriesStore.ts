import { Inquiry, InquiryStatus, InquiryPriority } from '../types';

const STORAGE_KEY = 'fast_target_inquiries_v1';

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'INQ-9842',
    name: 'Tariq Al-Mansoor',
    email: 'tariq.mansoor@almansoor-properties.ae',
    phone: '+971 50 829 4410',
    service: 'Mobile App Development',
    budget: '$15,000 - $50,000',
    message: 'Seeking a luxury real estate investment iOS & Android app with UAE PASS authentication, interactive 3D floor plans, and instant VIP consultation booking.',
    createdAt: new Date(Date.now() - 1000 * 60 * 42).toISOString(), // 42 mins ago
    status: 'new',
    priority: 'high',
    assignedTo: 'Ahmed Subhan (Executive Director)',
    notes: ['Initial review completed. High VIP client from Dubai Downtown.'],
    source: 'contact_form',
  },
  {
    id: 'INQ-9840',
    name: 'Sarah Jenkins',
    email: 's.jenkins@apexcommodity.co.uk',
    phone: '+44 7700 900821',
    service: 'Web Development',
    budget: '$50,000+',
    message: 'We require a high-throughput institutional trading portal with real-time WebSocket feeds, biometric authentication, and multi-currency settlement gateways.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    status: 'in_progress',
    priority: 'high',
    assignedTo: 'Muhammad Subhan (Tech Lead)',
    notes: ['Scope document sent via WhatsApp and Email. Scheduling technical discovery call.'],
    source: 'direct_quote',
  },
  {
    id: 'INQ-9838',
    name: 'Muhammad Usman',
    email: 'usman@lahoreretail.pk',
    phone: '+92 321 4455889',
    service: 'Social Media Marketing',
    budget: '$2,500 - $5,000',
    message: 'Looking for full-funnel TikTok, Instagram, and Meta advertising campaign management across our 8 fashion retail outlets in Lahore & Islamabad.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
    status: 'contacted',
    priority: 'medium',
    assignedTo: 'Marketing Ops',
    notes: ['Shared campaign portfolio and influencer rate card on WhatsApp.'],
    source: 'contact_form',
  },
  {
    id: 'INQ-9831',
    name: 'Captain Rashid Al-Nuaimi',
    email: 'rashid@gulfmarinetrading.com',
    phone: '+971 55 319 8844',
    service: 'General Trading',
    budget: '$50,000+',
    message: 'Requesting CIF Jebel Ali / Dubai quotation for electronics, premium consumer gadgets, and supply chain logistics clearance.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago
    status: 'closed',
    priority: 'high',
    assignedTo: 'Ahmed Subhan (Executive Director)',
    notes: ['Contract signed. Bulk shipment scheduled from Shenzhen to Jebel Ali Port.'],
    source: 'whatsapp_click',
  },
  {
    id: 'INQ-9825',
    name: 'Elena Rostova',
    email: 'elena@nordicdesignhub.se',
    phone: '+46 8 123 4567',
    service: 'UI/UX Design',
    budget: '$5,000 - $15,000',
    message: 'Need a complete design system, Figma prototype, and brand identity redesign for a European sustainable e-commerce brand.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(), // 2.5 days ago
    status: 'contacted',
    priority: 'standard',
    assignedTo: 'Design Studio Lead',
    notes: ['Figma showcase link shared.'],
    source: 'contact_form',
  },
];

export function getStoredInquiries(): Inquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return INITIAL_INQUIRIES;
  } catch {
    return INITIAL_INQUIRIES;
  }
}

export function saveInquiry(newInquiryData: Omit<Inquiry, 'id' | 'createdAt' | 'status' | 'priority'>): Inquiry {
  const current = getStoredInquiries();
  const nextId = `INQ-${Math.floor(1000 + Math.random() * 9000)}`;
  
  const inquiry: Inquiry = {
    ...newInquiryData,
    id: nextId,
    createdAt: new Date().toISOString(),
    status: 'new',
    priority: newInquiryData.budget.includes('$50,000') || newInquiryData.budget.includes('$15,000') ? 'high' : 'medium',
    notes: ['New lead captured online via Fast Target web portal.'],
  };

  const updated = [inquiry, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('inquiries_updated'));
  } catch (err) {
    console.error('Failed to save inquiry to storage', err);
  }

  return inquiry;
}

export function updateInquiryStatus(id: string, status: InquiryStatus): void {
  const current = getStoredInquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('inquiries_updated'));
}

export function updateInquiryPriority(id: string, priority: InquiryPriority): void {
  const current = getStoredInquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, priority } : item));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('inquiries_updated'));
}

export function addInquiryNote(id: string, note: string): void {
  const current = getStoredInquiries();
  const updated = current.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        notes: [...(item.notes || []), note],
      };
    }
    return item;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('inquiries_updated'));
}

export function deleteInquiry(id: string): void {
  const current = getStoredInquiries();
  const updated = current.filter((item) => item.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('inquiries_updated'));
}

export function resetToDemoInquiries(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
  window.dispatchEvent(new Event('inquiries_updated'));
}

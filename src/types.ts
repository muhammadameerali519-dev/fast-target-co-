export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'app-dev'
  | 'web-dev'
  | 'ui-ux'
  | 'social-media'
  | 'trading'
  | 'portfolio'
  | 'why-us'
  | 'contact'
  | 'admin';

export type InquiryStatus = 'new' | 'contacted' | 'in_progress' | 'closed';
export type InquiryPriority = 'high' | 'medium' | 'standard';

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
  status: InquiryStatus;
  priority: InquiryPriority;
  assignedTo?: string;
  notes?: string[];
  source?: 'contact_form' | 'whatsapp_click' | 'phone_simulation' | 'direct_quote' | 'manual';
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'digital' | 'trading' | 'design' | 'media';
  icon: string;
  tagline: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  timeline: string;
  pageRoute?: PageId;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Apps' | 'UI/UX' | 'Branding' | 'Social Media' | 'Trading';
  client: string;
  description: string;
  stats: string;
  tags: string[];
  image: string;
  color: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface ExecutiveProfile {
  name: string;
  role: string;
  title: string;
  bio: string;
  experience: string;
  specialization: string[];
  contactEmail: string;
  avatar: string;
  badge: string;
}

export interface StatMetric {
  value: string;
  numeric: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  activities: string[];
  duration: string;
  icon: string;
}

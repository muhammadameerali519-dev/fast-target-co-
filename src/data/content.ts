import { ExecutiveProfile, ProjectItem, ServiceItem, StatMetric } from '../types';

export const COMPANY_INFO = {
  name: 'FAST TARGET CO',
  legalName: 'FAST TARGET CO — General Trading & Digital Solutions',
  tagline: 'WE BUILD DIGITAL EXPERIENCES THAT MOVE BUSINESSES FORWARD.',
  subtagline:
    'FAST TARGET CO combines general trading with next-generation digital solutions, helping businesses build stronger brands, smarter technology and unforgettable digital experiences.',
  ceo: 'Mohammed Tayyab',
  gm: 'Ahmed Subhan',
  contacts: {
    uaePhone: '+971 58 562 1253',
    uaeRaw: '971585621253',
    uaeWhatsappUrl: 'https://wa.me/971585621253',
    pkPhone: '+92 309 5639434',
    pkRaw: '923095639434',
    pkWhatsappUrl: 'https://wa.me/923095639434',
    email: 'ahmedsubhan111348@gmail.com',
    mailtoUrl: 'mailto:ahmedsubhan111348@gmail.com',
    locations: [
      {
        city: 'Dubai',
        country: 'United Arab Emirates',
        type: 'Regional Operations & Trade Hub',
        phone: '+971 58 562 1253',
      },
      {
        city: 'Islamabad / Lahore',
        country: 'Pakistan',
        type: 'Digital Engineering & Tech Studio',
        phone: '+92 309 5639434',
      },
    ],
  },
};

export const STATS: StatMetric[] = [
  {
    value: '50+',
    numeric: 50,
    suffix: '+',
    label: 'Projects & Solutions',
    description: 'Enterprise systems, high-growth mobile applications & trading networks delivered worldwide.',
  },
  {
    value: '20+',
    numeric: 20,
    suffix: '+',
    label: 'Business Services',
    description: 'From software architecture & UI/UX systems to international procurement & supply chains.',
  },
  {
    value: '24/7',
    numeric: 24,
    suffix: '/7',
    label: 'Digital Support',
    description: 'Round-the-clock technical operations, infrastructure monitoring & dedicated client care.',
  },
  {
    value: '100%',
    numeric: 100,
    suffix: '%',
    label: 'Commitment',
    description: 'Zero compromise on security, execution speed, bespoke design and long-term scalability.',
  },
];

export const EXECUTIVES: ExecutiveProfile[] = [
  {
    name: 'Mohammed Tayyab',
    role: 'Chief Executive Officer',
    title: 'CEO & Founder',
    bio: 'Visionary business leader driving global trade expansion and digital transformation strategies. Steering FAST TARGET CO toward international market prominence through cross-border trade synergies and cutting-edge software architecture.',
    experience: 'Over a decade of strategic leadership in cross-border commerce, global procurement, and venture execution across the Middle East and international markets.',
    specialization: ['Global Trade Strategy', 'Enterprise Scaling', 'Venture Investment', 'Cross-Border Logistics'],
    contactEmail: 'ahmedsubhan111348@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    badge: 'Executive Leadership',
  },
  {
    name: 'Ahmed Subhan',
    role: 'General Manager',
    title: 'GM & Head of Digital Operations',
    bio: 'Pioneering digital strategist and operations leader managing multi-disciplinary engineering teams, client relations, and technological delivery across web, mobile, UI/UX, and marketing divisions.',
    experience: 'Expertise in high-scale digital product development, client success, team leadership, and modern technological deployment pipelines.',
    specialization: ['Digital Operations', 'Full-Stack Architecture', 'Client Portfolio Management', 'Product Design Strategy'],
    contactEmail: 'ahmedsubhan111348@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    badge: 'Operations & Strategy',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    category: 'digital',
    icon: 'Globe',
    tagline: 'High-performance digital flagships engineered for conversion',
    description:
      'Professional responsive websites designed for businesses, brands and organizations. From custom corporate flagships to complex web platforms with ultra-fast loading speed and seamless responsiveness.',
    highlights: [
      'Custom React/Next.js/Node.js architecture',
      'Ultra-responsive mobile-first design',
      'Lighthouse 95+ performance optimization',
      'Enterprise security & SEO structured data',
    ],
    deliverables: [
      'Interactive Web Platform',
      'CMS Admin Dashboard',
      'SEO & Analytics Setup',
      'Cloud Deployment & SSL',
    ],
    timeline: '2–4 Weeks',
    pageRoute: 'web-dev',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'digital',
    icon: 'Smartphone',
    tagline: 'Native and cross-platform apps with fluid iOS feel',
    description:
      'Modern Android and iOS applications with intuitive interfaces, scalable backend architecture, and seamless gesture navigation built for high user retention.',
    highlights: [
      'iOS (Swift) & Android (Kotlin) excellence',
      'High-performance Flutter / React Native',
      'Offline caching & real-time sync',
      'App Store & Play Store publishing support',
    ],
    deliverables: [
      'Production iOS & Android Apps',
      'Backend API Architecture',
      'Push Notifications Engine',
      'App Store Optimization (ASO)',
    ],
    timeline: '4–8 Weeks',
    pageRoute: 'app-dev',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'design',
    icon: 'Palette',
    tagline: 'Design that people remember and love interacting with',
    description:
      'Beautiful, user-focused interfaces with premium user experiences, bespoke design tokens, fluid micro-interactions, and comprehensive design systems.',
    highlights: [
      'Deep user research & competitive mapping',
      'Interactive Figma prototypes & design tokens',
      'Micro-animations & gesture architectures',
      'Accessibility (WCAG AA) compliance',
    ],
    deliverables: [
      'Full Design System & UI Kit',
      'Clickable High-Fidelity Prototype',
      'Developer Hand-off Specifications',
      'User Flow & Wireframe Schematics',
    ],
    timeline: '2–3 Weeks',
    pageRoute: 'ui-ux',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    category: 'media',
    icon: 'Share2',
    tagline: 'Command attention and build an authoritative brand presence',
    description:
      'Professional social media management, strategic content calendars, aesthetic grid designs, and multi-channel voice crafting to amplify digital authority.',
    highlights: [
      'Daily/weekly visual content curation',
      'High-impact copy & hashtag analytics',
      'Community management & engagement',
      'Cross-platform synchronization (IG, LinkedIn, TikTok)',
    ],
    deliverables: [
      'Monthly Content Calendar',
      '30+ Custom Designed Creatives',
      'Reels & Video Concept Board',
      'Monthly Growth & Analytics Report',
    ],
    timeline: 'Monthly Retainer',
    pageRoute: 'social-media',
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'media',
    icon: 'TrendingUp',
    tagline: 'Data-driven paid growth campaigns engineered for ROI',
    description:
      'Growth-focused paid advertising campaigns across Meta, TikTok, Google, and LinkedIn designed to dramatically increase qualified reach, engagement, and conversions.',
    highlights: [
      'Precision audience targeting & lookalikes',
      'Multi-variant A/B creative testing',
      'Pixel tracking & conversion API integration',
      'Real-time ROAS dashboard reporting',
    ],
    deliverables: [
      'Campaign Architecture Plan',
      'Ad Creative Copy & Visual Suite',
      'Funnel Conversion Retargeting',
      'Bi-Weekly Strategy Reviews',
    ],
    timeline: 'Continuous Growth',
    pageRoute: 'social-media',
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Development',
    category: 'digital',
    icon: 'ShoppingBag',
    tagline: 'Conversion-optimized storefronts engineered for scale',
    description:
      'Modern online stores with secure checkout, dynamic inventory synchronization, multi-currency capabilities, and frictionless buying experiences.',
    highlights: [
      'Shopify Plus, WooCommerce & Custom MERN platforms',
      'Stripe, Apple Pay, PayPal & localized payment gateways',
      'Live inventory & automated order pipelines',
      'Cart recovery & upselling automations',
    ],
    deliverables: [
      'Full Custom Storefront',
      'Payment Gateway Integrations',
      'Product Catalogue Import',
      'Staff Training & Inventory Tools',
    ],
    timeline: '3–5 Weeks',
    pageRoute: 'web-dev',
  },
  {
    id: 'branding-graphic-design',
    title: 'Branding & Graphic Design',
    category: 'design',
    icon: 'Layers',
    tagline: 'Iconic visual identities that command industry respect',
    description:
      'Professional visual identities, logos, marketing collateral, corporate stationery, 3D assets, and cohesive brand guidelines that set you apart.',
    highlights: [
      'Distinctive logo & brandmark development',
      'Corporate color systems & typography hierarchy',
      'Digital & print ready brand collateral',
      'Comprehensive Brand Identity Guideline manual',
    ],
    deliverables: [
      'Vector Logo Suite (All Formats)',
      'Brand Identity Stylebook PDF',
      'Social Media Branding Kit',
      'Business Cards & Stationery Assets',
    ],
    timeline: '2 Weeks',
    pageRoute: 'ui-ux',
  },
  {
    id: 'general-trading',
    title: 'General Trading',
    category: 'trading',
    icon: 'Ship',
    tagline: 'Seamless global sourcing, trading & cross-border logistics',
    description:
      'Professional sourcing, trading and business solutions across international markets. Bridging supply and demand with verified quality control, customs clearance, and freight execution.',
    highlights: [
      'Global supplier vetting & quality assurance',
      'Multimodal logistics & customs clearance',
      'B2B commodity & product distribution',
      'Trade finance & transparent documentation',
    ],
    deliverables: [
      'Verified Supplier Procurement',
      'End-to-End Freight Coordination',
      'Customs & Compliance Clearing',
      'Dedicated Trading Account Manager',
    ],
    timeline: 'Milestone-Based',
    pageRoute: 'trading',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'AuraPay — Next-Gen iOS Fintech',
    category: 'Apps',
    client: 'Aura Financial Ltd (Dubai, UAE)',
    description: 'High-security multi-currency mobile wallet with instant cross-border remittances, virtual cards, and biometric authorization.',
    stats: '+320% User Activation Rate',
    tags: ['iOS', 'SwiftUI', 'Fintech', 'Biometrics', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80',
    color: '#0066FF',
    challenge: 'The client needed a frictionless iOS payment experience with banking-grade encryption and sub-second remittance status tracking between UAE and South Asia.',
    solution: 'Engineered a native iOS application paired with high-performance Node.js microservices and WebSockets for real-time transaction updates.',
    results: ['Over 150,000 active monthly transactions', '4.9/5 App Store Rating', 'Zero security breaches with ISO27001 standard adherence'],
  },
  {
    id: 'p2',
    title: 'NexTrade Global — Trade Portal',
    category: 'Websites',
    client: 'NexTrade International',
    description: 'Enterprise B2B trade hub featuring real-time container tracking, automated customs document generation, and digital escrow verification.',
    stats: '$42M Annual Trade Volume Managed',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&auto=format&fit=crop&q=80',
    color: '#0A84FF',
    challenge: 'Brokers and freight partners struggled with fragmented emails and manual spreadsheets to verify shipping status and invoices.',
    solution: 'Constructed an integrated web platform with live GPS vessel telemetry, automated bill-of-lading processing, and multi-user RBAC.',
    results: ['65% reduction in customs processing overhead', 'Sub-second search over 50,000 SKU catalogue', '100% cloud uptime reliability'],
  },
  {
    id: 'p3',
    title: 'Lumina Living — Luxury E-Commerce',
    category: 'UI/UX',
    client: 'Lumina Design Studio',
    description: 'Ultra-luxurious lifestyle e-commerce experience featuring 3D product previews, fluid squircle design system, and frictionless Apple Pay integration.',
    stats: '+84% Checkout Conversion Boost',
    tags: ['UI/UX System', 'Figma', '3D WebGL', 'Tailwind', 'E-Commerce'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80',
    color: '#38BDF8',
    challenge: 'High-end furniture brand with poor online sales due to cluttered generic templates that failed to convey premium craftsmanship.',
    solution: 'Designed an editorial-style design system with generous whitespace, high-contrast typography, interactive room customizer, and 1-tap checkout.',
    results: ['Average order value increased by 42%', 'Cart abandonment dropped from 68% to 22%', 'Featured in international design awards'],
  },
  {
    id: 'p4',
    title: 'Titan Energy — Corporate Identity & Brand',
    category: 'Branding',
    client: 'Titan Energy Global',
    description: 'Complete corporate visual overhaul, brand manual, 3D stationery assets, and digital guidelines for a leading sustainable energy venture.',
    stats: '100% Brand Consistency Index',
    tags: ['Branding', 'Visual Identity', 'Typography System', '3D Motion'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    color: '#60A5FA',
    challenge: 'Legacy energy company expanding into renewable infrastructure needed a futuristic visual identity to attract global institutional capital.',
    solution: 'Created an iconic geometric brandmark, bespoke color hierarchy of deep navy and electric cyan, and a 120-page digital brand system.',
    results: ['Successfully closed $28M Series B round', 'Unanimous adoption across 4 regional headquarters', 'Award-winning annual report layout'],
  },
  {
    id: 'p5',
    title: 'PulseSocial — Viral Media Strategy',
    category: 'Social Media',
    client: 'Pulse Consumer Tech',
    description: 'Multi-platform social content architecture, short-form video production, and influencer partnership campaign that achieved viral organic reach.',
    stats: '14.2M Organic Impressions in 90 Days',
    tags: ['Meta Ads', 'TikTok Strategy', 'Reels Production', 'Content Strategy'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    color: '#0284C7',
    challenge: 'Emerging audio brand needed to generate brand buzz and customer acquisitions in an oversaturated market on a tight ad spend.',
    solution: 'Deployed high-energy 9:16 vertical video narratives, community challenges, and algorithmic influencer seeding strategies.',
    results: ['Grew verified followers by +85,000', 'Achieved 4.8x ROAS on targeted conversion ads', 'Generated 12,000+ user generated content pieces'],
  },
  {
    id: 'p6',
    title: 'SilkRoute Logistics — Trade Fleet Dashboard',
    category: 'Trading',
    client: 'SilkRoute Logistics Hub',
    description: 'Real-time telemetry dashboard for sea freight and overland cargo fleets operating between the UAE, Pakistan, and Eurasian transit corridors.',
    stats: '12,000+ Containers Monitored Daily',
    tags: ['General Trading', 'Logistics', 'IoT Telemetry', 'Dashboard', 'Cloud'],
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80',
    color: '#2563EB',
    challenge: 'Need for unified visibility across shipping lines, port customs clearances, and dry-port warehousing.',
    solution: 'Architected a low-latency dashboard with live vessel coordinates, ETA alerts, automated container inspection logs, and invoice generation.',
    results: ['Saved 180+ staff hours weekly', 'Zero misplaced shipments in 12 months', 'Client retention increased to 99.2%'],
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'quality',
    icon: 'ShieldCheck',
    title: 'Premium Quality',
    description:
      'Professional solutions built with meticulous attention to detail. Every pixel, line of code, and trade transaction is scrutinized for world-class excellence.',
  },
  {
    id: 'modern-tech',
    icon: 'Cpu',
    title: 'Modern Technology',
    description:
      'Using state-of-the-art development frameworks, AI-accelerated workflows, scalable cloud infrastructure, and modern iOS-level design standards.',
  },
  {
    id: 'business-focus',
    icon: 'Target',
    title: 'Business-Focused',
    description:
      'We do not build technology for the sake of technology. Every solution is strategically mapped directly to measurable revenue, growth, and efficiency goals.',
  },
  {
    id: 'support',
    icon: 'Headphones',
    title: 'Responsive Support',
    description:
      'Transparent and clear communication throughout your project lifecycle with direct access to executive managers and dedicated technical leads.',
  },
  {
    id: 'creative',
    icon: 'Sparkles',
    title: 'Creative Thinking',
    description:
      'Bespoke, unforgettable digital experiences instead of cookie-cutter templates. We architect brand positioning that leaves competitors far behind.',
  },
  {
    id: 'scalable',
    icon: 'TrendingUp',
    title: 'Scalable Solutions',
    description:
      'Future-proof software and trade systems engineered to handle 10x to 100x transaction growth without performance degradation.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'FAST TARGET CO built our enterprise platform and streamlined our supply chain communications between Dubai and South Asia. The execution speed, attention to design detail, and executive support from Mohammed Tayyab and Ahmed Subhan was truly unmatched.',
    author: 'Tariq Al-Mansoor',
    role: 'Managing Director, Al-Mansoor Commerce Group (UAE)',
    rating: 5,
  },
  {
    quote:
      'Our mobile app conversion rate shot up by 320% after FAST TARGET CO redesigned and re-engineered our product. The iOS-inspired micro-interactions and smooth architecture feel like Apple built it.',
    author: 'Zainab Qureshi',
    role: 'Head of Product, Apex Digital Solutions',
    rating: 5,
  },
  {
    quote:
      'In general trading, reliability and trust are everything. FAST TARGET CO delivered our cross-border sourcing project with complete transparency, exact timelines, and outstanding professionalism.',
    author: 'Khurram Farooq',
    role: 'Director of Logistics, SilkRoute Ventures',
    rating: 5,
  },
];

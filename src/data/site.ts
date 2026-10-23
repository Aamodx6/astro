export interface SiteConfig {
  title: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  email: string;
  phone?: string;
  location: string;
  foundingYear: number;
  navLinks: { label: string; href: string }[];
  socialLinks: { platform: string; url: string; handle: string }[];
}

export const siteConfig: SiteConfig = {
  name: 'Soale Astra',
  title: 'Soale Astra — Digital Product & AI Design Studio',
  tagline: 'Designing what AI makes possible.',
  description: 'An elite product design and engineering studio partnering with founders, AI innovators, and ambitious technology companies to craft high-impact digital experiences.',
  url: 'https://soale-astra.pages.dev',
  author: 'Soale Astra Studio',
  email: 'hello@soaleastra.com',
  location: 'San Francisco & Remote Worldwide',
  foundingYear: 2018,
  navLinks: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/#process' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Insights', href: '/blog' },
    { label: 'About', href: '/about-us' },
  ],
  socialLinks: [
    { platform: 'X / Twitter', url: 'https://x.com/soaleastra', handle: '@soaleastra' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/soaleastra', handle: 'company/soaleastra' },
    { platform: 'GitHub', url: 'https://github.com/soale-astra', handle: 'github.com/soale-astra' },
    { platform: 'Dribbble', url: 'https://dribbble.com/soaleastra', handle: 'dribbble.com/soaleastra' }
  ]
};

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  deliverables: string[];
  metrics: string;
  tags: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-interface-design',
    title: 'AI Product & Agentic UX Design',
    subtitle: 'From stochastic models to reliable, human-centered interfaces.',
    description: 'We turn unpredictable LLM inputs, tool-calling chains, and multi-agent systems into intuitive, legible interfaces that instill user confidence and eliminate prompt anxiety.',
    outcome: 'High user adoption, reduced cognitive overload, and crystal-clear transparency around AI model confidence and reasoning.',
    deliverables: [
      'Agentic workflow mapping & prompt ergonomics',
      'Multi-modal interaction patterns (voice, chat, canvas)',
      'Confidence score & model citation states',
      'Error recovery & conversational fallback architectures'
    ],
    metrics: '42% faster user task completion',
    tags: ['AI/ML UX', 'LLM Agents', 'Canvas UI', 'Human-in-the-Loop']
  },
  {
    id: 'product-strategy-ux',
    title: 'Product Strategy & UX Research',
    subtitle: 'Derisking zero-to-one product development through evidence-driven design.',
    description: 'Before pushing pixels, we interrogate product hypotheses, interview target users, analyze competitive moats, and architect friction-free journeys that maximize activation.',
    outcome: 'Clear product-market-fit roadmap, precise value metrics, and prioritized feature scope that saves engineering months.',
    deliverables: [
      'Jobs-To-Be-Done (JTBD) customer interviews',
      'End-to-end user journey mapping & activation funnels',
      'Information architecture & structural wireframes',
      'Interactive hypothesis testing sprints'
    ],
    metrics: '65% average boost in day-1 retention',
    tags: ['UX Discovery', 'Funnel Optimization', 'JTBD', 'Roadmapping']
  },
  {
    id: 'digital-product-ui',
    title: 'Digital Product & Interface Design',
    subtitle: 'Crafting software that looks exceptional and operates flawlessly.',
    description: 'We build beautiful, highly responsive web apps, mobile products, and SaaS dashboards with obsession over typography, micro-interactions, states, and accessibility.',
    outcome: 'Products that delight users daily, reduce churn, and command premium market valuation.',
    deliverables: [
      'Desktop, tablet, and native mobile UI mockups',
      'Interactive Figma prototypes with realistic edge cases',
      'WCAG 2.2 AA accessible design specifications',
      'Custom iconography, illustrations, and motion guides'
    ],
    metrics: '99.8% customer CSAT ratings across cohorts',
    tags: ['SaaS UI', 'Mobile Apps', 'Interaction Design', 'Micro-Interactions']
  },
  {
    id: 'design-systems-engineering',
    title: 'Design Systems & Engineering Handoff',
    subtitle: 'Scalable foundations that supercharge your engineering velocity.',
    description: 'Stop redesigning the same components. We construct robust token systems, component libraries, and documentation that bridge Figma directly into production code.',
    outcome: '3x faster sprint cycles, zero visual debt, and total alignment between design and engineering teams.',
    deliverables: [
      'Multi-brand design token architecture (CSS/Tailwind/JSON)',
      'Accessible, headless component specifications',
      'Comprehensive Storybook & Figma documentation',
      'Git repository pull requests for foundational UI kits'
    ],
    metrics: '3.4x engineering delivery speedup',
    tags: ['Tokens', 'Component Libraries', 'Tailwind CSS', 'Design Tokens']
  },
  {
    id: 'rapid-prototyping-mvp',
    title: 'Rapid Prototyping & MVP Sprints',
    subtitle: 'Go from back-of-the-napkin concept to clickable reality in 2 weeks.',
    description: 'Need to raise capital, close a strategic anchor customer, or pitch internal stakeholders? We build high-fidelity interactive prototypes that look, feel, and behave like live software.',
    outcome: 'Tangible investor-ready artifacts that accelerate funding rounds and stakeholder sign-offs.',
    deliverables: [
      'Functional clickable prototypes with realistic API mocks',
      'Investor demo recordings & product teaser decks',
      'User testing scripts & validated feedback syntheses',
      'Production-ready front-end code scaffolding'
    ],
    metrics: 'Average 14-day delivery timeframe',
    tags: ['MVP Sprint', 'Investor Demos', 'Interactive Prototypes', 'Clickable UI']
  },
  {
    id: 'brand-identity-visuals',
    title: 'Brand Identity & Visual Systems',
    subtitle: 'Distinctive positioning for companies shaping the future.',
    description: 'We carve out an unmistakably premium visual identity for your brand — from bespoke logomarks and typographic systems to 3D assets, art direction, and launch marketing.',
    outcome: 'An indelible brand reputation that commands authority and stands out from generic SaaS competitors.',
    deliverables: [
      'Logo design, symbol marks, and responsive favicons',
      'Typography pairing & fluid scale tokens',
      'Brand style guide, color theory & marketing decks',
      'Social assets, pitch deck templates & motion guidelines'
    ],
    metrics: '100% bespoke, zero template replication',
    tags: ['Brand Identity', 'Typography', 'Visual Voice', 'Art Direction']
  }
];

export interface ProcessPhase {
  phase: string;
  step: string;
  title: string;
  subtitle: string;
  duration: string;
  clientInput: string;
  studioOutput: string;
  highlights: string[];
}

export const processPhases: ProcessPhase[] = [
  {
    phase: '01',
    step: 'Discovery & Deconstruction',
    title: 'Interrogate the Problem',
    subtitle: 'We dive deep into your technology, mental models, customer friction points, and business KPIs.',
    duration: 'Week 1',
    clientInput: 'Access to product team, existing metrics, and technology specs.',
    studioOutput: 'Audited user journeys, synthesized problem space, and architecture brief.',
    highlights: ['Tech stack audit', 'User friction analysis', 'Competitive benchmarking']
  },
  {
    phase: '02',
    step: 'Architecture & UX Blueprinting',
    title: 'Map the Structural System',
    subtitle: 'We establish information hierarchy, navigation topologies, data flows, and AI prompt interaction loops.',
    duration: 'Week 2',
    clientInput: 'Feedback on structural wireframes and data model validation.',
    studioOutput: 'Low-fidelity architectural blueprints and validated user task flows.',
    highlights: ['Information architecture', 'Task efficiency modeling', 'Agentic workflow schemas']
  },
  {
    phase: '03',
    step: 'Interface Craft & Motion',
    title: 'Elevate Visuals & Ergonomics',
    subtitle: 'We apply meticulous typography, tokenized color systems, tactile states, and rich interactive components.',
    duration: 'Weeks 3–4',
    clientInput: 'Async design reviews and tone-of-voice alignment.',
    studioOutput: 'High-fidelity Figma system, interactive prototypes, and production mockups.',
    highlights: ['Bespoke aesthetic direction', 'Micro-interactions & motion', 'Fluid responsiveness']
  },
  {
    phase: '04',
    step: 'Stress-Testing & Validation',
    title: 'Rigorous Usability Verification',
    subtitle: 'We put the interface through real-world edge cases, extreme data states, and accessibility checks.',
    duration: 'Week 5',
    clientInput: 'Observer participation in user testing sessions.',
    studioOutput: 'Usability findings matrix, refined design tweaks, and WCAG AA verification.',
    highlights: ['Edge-case exploration', 'WCAG 2.2 AA audit', 'User task timing benchmarks']
  },
  {
    phase: '05',
    step: 'Engineering Handoff & Launch',
    title: 'Pixel-Perfect Production Delivery',
    subtitle: 'We provide structured design tokens, component specifications, and direct engineering pairing.',
    duration: 'Week 6',
    clientInput: 'Engineering team pairing for QA reviews.',
    studioOutput: 'Storybook/token packages, component handoff files, and production QA signoff.',
    highlights: ['Tailwind/CSS tokens', 'Interactive state guides', 'Post-launch design advisory']
  }
];

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number; // per month billed annually
  popular?: boolean;
  deliverables: string[];
  timeline: string;
  idealFor: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'mvp-sprint',
    name: 'Sprint MVP',
    badge: 'Fast-Track Validation',
    description: 'Designed for early-stage founders and seed-backed teams needing a world-class MVP interface in weeks.',
    monthlyPrice: 3800,
    annualPrice: 3040, // 20% discount
    timeline: '2–3 Week Sprints',
    idealFor: 'Pre-seed & Seed startups launching their v1 product',
    deliverables: [
      'Complete Core Product UI (up to 8 screens)',
      'Foundational Design Tokens & Typography',
      'Clickable High-Fidelity Prototype (Figma)',
      'User Onboarding & Primary Funnel Design',
      'Direct Slack/Async Collaboration',
      'Full Design File Ownership & SVG Asset Exports'
    ]
  },
  {
    id: 'studio-growth',
    name: 'Product Growth',
    badge: 'Most Popular',
    popular: true,
    description: 'Our flagship embedded studio partnership for scaling SaaS and AI companies shipping continuous features.',
    monthlyPrice: 6500,
    annualPrice: 5200, // 20% discount
    timeline: 'Ongoing Monthly Partnership',
    idealFor: 'Series A/B scaleups accelerating feature velocity',
    deliverables: [
      'Dedicated Senior Product Designer & Strategist',
      'Unlimited Design Requests (one active at a time)',
      'Comprehensive Design System (Tokens + Component Kit)',
      'Complex AI Agent & Data Visualization Workflows',
      'Interactive Motion & Micro-Interaction Guidelines',
      'Direct Pairing with Your Engineering Team',
      'Weekly Strategy Sprints & Loom Design Walkthroughs',
      'Pause or Cancel Anytime with 14-Day Notice'
    ]
  },
  {
    id: 'enterprise-custom',
    name: 'Bespoke Studio',
    badge: 'Full Architecture',
    description: 'End-to-end digital transformation, multi-product design systems, and custom engineering advisory.',
    monthlyPrice: 11900,
    annualPrice: 9520, // 20% discount
    timeline: 'Quarterly & Multi-Month Milestones',
    idealFor: 'Growth-stage companies and tech enterprises',
    deliverables: [
      'Multi-disciplinary Studio Squad (Design, Strategy, Motion)',
      'Multiple Concurrent Workstreams & Parallel Tracks',
      'Enterprise Multi-Brand Design Token Architecture',
      'Full Design & Front-End Scaffolding (Astro / React / Tailwind)',
      'WCAG 2.2 AAA Accessibility Certification Review',
      'Executive Stakeholder Presentations & Board Decks',
      'Custom SLA, Dedicated Private Slack Channel & On-Site Sprints'
    ]
  }
];

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Soale Astra transformed our multi-agent AI interface from a baffling engineering experiment into a product customers immediately grasped. Our demo conversion rate tripled within two weeks of launch.',
    author: 'Dr. Elena Vance',
    role: 'Co-Founder & Chief Product Officer',
    company: 'NeuronIQ Systems',
    avatar: '/images/user1.png',
    metric: '3.1x Demo-to-Paid Conversion'
  },
  {
    id: '2',
    quote: 'Most agencies hand you pretty mockups that fall apart the moment real data enters. Soale designed edge cases, latency states, and token flows that made our engineering implementation seamless.',
    author: 'Marcus Sterling',
    role: 'VP of Engineering',
    company: 'Echo Analytics',
    avatar: '/images/user2.png',
    metric: '60% Reduction in Dev Rework'
  },
  {
    id: '3',
    quote: 'Their attention to typographic nuance, kinetic micro-interactions, and visual discipline gave our fintech product a tier-1 institutional presence right out of the gate.',
    author: 'Sophia Chen',
    role: 'Head of Product',
    company: 'OrbitPay Global',
    avatar: '/images/user3.png',
    metric: '$14M Seed Round Raised'
  },
  {
    id: '4',
    quote: 'The team works with insane speed without sacrificing a single ounce of craft. They operated as true strategic peers to our founding team.',
    author: 'Julian Meyer',
    role: 'Founder & CEO',
    company: 'Vireo Health',
    avatar: '/images/user4.png',
    metric: '4.9/5 User Satisfaction Score'
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Engagement' | 'Process' | 'Technical' | 'Pricing';
}

export const faqData: FaqItem[] = [
  {
    question: 'How quickly can our team begin a project with Soale Astra?',
    answer: 'We typically onboard new studio engagements within 5 to 7 business days following our initial alignment session and scoping agreement. For rapid sprint MVPs, we schedule kickoffs every other Monday to maintain intense, focused creative momentum.',
    category: 'Engagement'
  },
  {
    question: 'How does your subscription/retainer model work compared to fixed-scope projects?',
    answer: 'Our Product Growth model offers a predictable monthly retainer with unlimited queued requests, refined one after another with rapid 48-hour iteration turnarounds. For defined initiatives (such as a full 0-to-1 MVP launch or brand identity revamp), we also offer fixed-milestone sprint blocks with guaranteed delivery timelines.',
    category: 'Pricing'
  },
  {
    question: 'What deliverables do we receive at the conclusion of the engagement?',
    answer: 'You receive 100% intellectual property ownership of all Figma workspaces, component libraries, typography scale tokens, interactive prototypes, export-ready SVG/WebP assets, motion design specifications, and clean front-end code scaffolding where included in scope.',
    category: 'Process'
  },
  {
    question: 'Do you design with real production constraints and engineering realities in mind?',
    answer: 'Absolutely. We do not design speculative art projects. Every interface is constructed in lockstep with component reusability, responsive grid systems, WCAG 2.2 AA accessibility guidelines, and realistic API payload handling (including loading skeletons, empty states, and error recovery flows).',
    category: 'Technical'
  },
  {
    question: 'Can you work with our existing engineering and product management teams?',
    answer: 'Yes, that is our preferred mode of operation. We integrate directly into your workflow via Slack, Linear, or GitHub, participate in sprint syncs, and conduct design QA reviews directly on staging builds to ensure that what gets designed is exactly what gets deployed.',
    category: 'Engagement'
  },
  {
    question: 'What is your experience designing specifically for generative AI and complex LLM tools?',
    answer: 'Over 60% of our portfolio consists of production AI applications — including multi-agent orchestration canvases, real-time reasoning visualizers, dynamic prompt tuning environments, and latency-mitigating streaming interfaces. We understand the UX nuances of stochastic systems.',
    category: 'Technical'
  },
  {
    question: 'What if we need ongoing design support after our initial product launch?',
    answer: 'We offer flexible post-launch design retainers, quarterly design system updates, and conversion optimization audits. You can scale your engagement up or down as your product roadmap demands.',
    category: 'Pricing'
  }
];

export const clientLogos = [
  { name: 'NeuronIQ', logo: '/images/company-logo1.svg' },
  { name: 'Echo Analytics', logo: '/images/company-logo2.svg' },
  { name: 'OrbitPay', logo: '/images/company-logo3.svg' },
  { name: 'Vireo Health', logo: '/images/company-logo4.svg' },
  { name: 'Solara Living', logo: '/images/company-logo5.svg' },
];

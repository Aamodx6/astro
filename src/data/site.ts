export interface SiteConfig {
  title: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  email: string;
  location: string;
  foundingYear: number;
  navLinks: { label: string; href: string }[];
  socialLinks: { platform: string; url: string; handle: string }[];
}

export const siteConfig: SiteConfig = {
  name: 'Soale Astra',
  title: 'Creative studio powering AI, brands & digital futures — Soale',
  tagline: 'AI That Works for Your Business.',
  description: 'We design, build, and integrate intelligent systems that automate operations, improve customer experiences, and turn complex business processes into scalable workflows.',
  url: 'https://soale-astra.pages.dev',
  author: 'Soale Astra Studio',
  email: 'hello@soaleastra.com',
  location: 'San Francisco & Remote Worldwide',
  foundingYear: 2018,
  navLinks: [
    { label: 'About us', href: '/about-us' },
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' }
  ],
  socialLinks: [
    { platform: 'X / Twitter', url: 'https://x.com/soaleastra', handle: '@soaleastra' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/soaleastra', handle: 'company/soaleastra' },
    { platform: 'GitHub', url: 'https://github.com/Aamodx6/soale-astra', handle: 'github.com/Aamodx6/soale-astra' }
  ]
};

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  outcome: string;
  exampleWorkflow: string;
  idealClients: string;
  deliverables: string[];
  tech: string[];
  metrics: string;
  tags: string[];
  ctaLabel: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    category: 'Business Process Automation',
    subtitle: 'Eliminate Repetitive Work. Build Smarter Workflows.',
    description: 'We connect your tools, automate repetitive operations, and design intelligent workflows that help your team spend less time on manual tasks and more time on meaningful work.',
    outcome: 'Eliminate 15+ hours per week of manual data entry, reduce human error, and accelerate business cycle times.',
    exampleWorkflow: 'Website inquiry → lead qualification → CRM update → personalized follow-up draft → sales-team notification.',
    idealClients: 'Marketing agencies, consultants, recruitment firms, professional services, and growing businesses with manual processes.',
    deliverables: [
      'Workflow assessment & business process mapping',
      'Multi-step automation architecture & tool integrations',
      'Email triage, classification & draft automation',
      'CRM synchronization & spreadsheet database updating',
      'Error handling, logging & human approval checkpoints',
      'Comprehensive documentation and staff handover'
    ],
    tech: ['n8n', 'Make', 'Zapier', 'Python', 'REST APIs', 'Webhooks', 'LLM APIs'],
    metrics: '70% reduction in manual admin time',
    tags: ['Workflow Automation', 'CRM Sync', 'Email Triage', 'n8n / Make'],
    ctaLabel: 'Automate My Workflow'
  },
  {
    id: 'ai-customer-support-agents',
    title: 'AI Customer Support Agents',
    category: 'Customer Experience AI',
    subtitle: 'Deliver Faster, More Consistent Customer Support.',
    description: 'Give customers timely answers with AI assistants grounded in your product information and business documentation, while preserving a clear path to human support.',
    outcome: 'Instant 24/7 first-response time, 60%+ resolution rate for common inquiries, and zero hallucinated product answers.',
    exampleWorkflow: 'Customer asks a product question → assistant retrieves approved information → produces a grounded response → escalates uncertain or sensitive requests to a human.',
    idealClients: 'E-commerce brands, SaaS companies, service businesses, and organizations managing repeated customer inquiries.',
    deliverables: [
      'Knowledge-source assessment & document curation',
      'RAG (Retrieval-Augmented Generation) assistant architecture',
      'Product & service FAQ intelligent routing',
      'Human escalation & live agent handoff protocols',
      'Response evaluation, hallucination safeguards & testing',
      'Ongoing monitoring and quality maintenance plan'
    ],
    tech: ['Python', 'FastAPI', 'LLM APIs', 'Vector Embeddings', 'PostgreSQL', 'Helpdesks'],
    metrics: '< 5 sec response time across cohorts',
    tags: ['Support Agents', 'RAG', 'Vector Search', 'Helpdesk AI'],
    ctaLabel: 'Build My Support Assistant'
  },
  {
    id: 'ai-lead-generation-sales',
    title: 'AI Lead Generation & Sales Automation',
    category: 'Sales Intelligence',
    subtitle: 'Turn More Qualified Opportunities Into Conversations.',
    description: 'We help businesses capture, organize, qualify, and prioritize sales opportunities using AI-assisted workflows that support their existing sales process.',
    outcome: 'Higher pipeline conversion, zero dropped leads, and automated pre-qualification that lets sales reps focus only on ready buyers.',
    exampleWorkflow: 'Qualified inbound inquiry → company and requirement enrichment → lead score based on configured criteria → CRM record creation → salesperson assignment → follow-up draft.',
    idealClients: 'B2B SaaS businesses, marketing agencies, consultants, technology service providers, and sales teams.',
    deliverables: [
      'Sales-workflow assessment & inbound qualification rules',
      'Authorized prospect data enrichment pipelines',
      'CRM automation & real-time pipeline updates',
      'Meeting routing & personalized follow-up drafting',
      'Sales-team alert dashboards & conversion reporting',
      'Privacy compliance & anti-spam optimization safeguards'
    ],
    tech: ['HubSpot / Salesforce APIs', 'Python', 'LLM Scoring', 'Data Enrichment APIs'],
    metrics: '3.2x increase in qualified sales calls',
    tags: ['Sales Automation', 'Lead Scoring', 'CRM Enrichment', 'Pipeline AI'],
    ctaLabel: 'Improve My Sales Workflow'
  },
  {
    id: 'ai-document-processing',
    title: 'AI Document Processing & Extraction',
    category: 'Document Intelligence',
    subtitle: 'Transform Unstructured Documents Into Usable Business Data.',
    description: 'We build document-processing systems that extract, classify, validate, and organize information from business documents, reducing manual data entry and making information easier to use.',
    outcome: 'Eliminate tedious manual re-keying of invoices, contracts, and forms with 99%+ field-level extraction accuracy.',
    exampleWorkflow: 'Invoice uploaded → text and fields extracted → totals and required fields validated → uncertain values flagged → approved data exported to the client\'s system.',
    idealClients: 'Accounting firms, logistics companies, insurance operations, back-office service providers, and document-heavy businesses.',
    deliverables: [
      'Document and data schema assessment',
      'OCR & intelligent parsing extraction pipeline',
      'Field-level validation rules & duplicate checks',
      'Structured JSON, CSV, and accounting database exports',
      'Human-in-the-loop exception handling queues',
      'Accuracy benchmarking, deployment and documentation'
    ],
    tech: ['Python', 'OCR', 'Document AI', 'Pandas', 'SQL', 'Cloud Storage'],
    metrics: '99.4% extraction accuracy benchmark',
    tags: ['Document AI', 'OCR Parsing', 'Invoice Extraction', 'Data Validation'],
    ctaLabel: 'Automate My Documents'
  },
  {
    id: 'ai-data-analytics-bi',
    title: 'AI Data Analytics & Business Intelligence',
    category: 'Data Intelligence',
    subtitle: 'Turn Your Business Data Into Clear, Actionable Insights.',
    description: 'We build reliable data pipelines, reporting systems, and AI-assisted analytics experiences that help teams understand performance and investigate business questions using their own data.',
    outcome: 'Instant visibility into vital unit economics, automated executive briefs, and natural-language queries over your proprietary database.',
    exampleWorkflow: 'Business data sources → validated data pipeline → analytical model → interactive dashboard → AI-generated explanation with links to supporting metrics or records.',
    idealClients: 'SaaS companies, e-commerce businesses, retail, logistics, and teams managing multiple data sources.',
    deliverables: [
      'Data-source audit & quality assessment',
      'Automated data ingestion and transformation pipelines',
      'Interactive executive KPI reporting dashboards',
      'Natural-language SQL analytics interfaces',
      'Historical trend analysis & scheduled alerts',
      'Complete data schema documentation and handover'
    ],
    tech: ['SQL', 'Python', 'Pandas', 'Cloud Data Warehouses', 'BI Platforms', 'LLM APIs'],
    metrics: '10x faster time-to-insight',
    tags: ['Business Intelligence', 'Data Pipelines', 'NL SQL Querying', 'Dashboards'],
    ctaLabel: 'Unlock My Business Data'
  }
];

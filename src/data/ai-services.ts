export interface AIService {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  headline: string;
  shortDescription: string;
  fullDescription: string;
  businessProblem: string;
  proposedSolution: string;
  servicesIncluded: string[];
  exampleWorkflow: string;
  idealClients: string;
  deliverables: string[];
  technology: string[];
  primaryCta: string;
  secondaryCta: string;
  indicativePricing: string;
  badge: string;
  image: string;
}

export const aiServicesData: AIService[] = [
  {
    id: 'workflow-automation',
    slug: 'ai-workflow-automation',
    number: '01',
    category: 'Business Process Automation',
    title: 'AI Workflow Automation',
    headline: 'Eliminate Repetitive Work. Build Smarter Workflows.',
    shortDescription: 'Connect your tools, automate manual operations, and design intelligent workflows that help your team spend less time on repetitive tasks.',
    fullDescription: 'We connect your tools, automate repetitive operations, and design intelligent workflows that help your team spend less time on manual tasks and more time on meaningful work. Rather than generic bot scripts, we engineer validated multi-step operational pipelines with error logging and human approval gates.',
    businessProblem: 'Teams waste 15–20 hours every week manually copying data between email, spreadsheets, CRMs, and internal systems. Disjointed tools lead to missed handoffs, delayed customer follow-ups, and costly human errors.',
    proposedSolution: 'Custom-engineered automated workflows that listen for events, triage information using LLMs, update business databases in real time, and alert your staff only when human judgment is truly required.',
    servicesIncluded: [
      'Business process discovery and workflow mapping',
      'Multi-step workflow automation across disparate tools',
      'Email triage, classification, and intelligent drafting',
      'CRM synchronization and client record updates',
      'Lead capture, automated routing, and team alerts',
      'Client onboarding sequence and documentation dispatch',
      'Spreadsheet and database two-way synchronization',
      'Automated scheduled reporting and system health tasks',
      'API integrations across existing enterprise business tools',
      'Exception handling, error logging, and human approval checkpoints'
    ],
    exampleWorkflow: 'Website inquiry → automated qualification → CRM record creation → personalized follow-up draft → internal Slack notification with one-click approval.',
    idealClients: 'Marketing agencies, consultants, recruitment firms, professional services, and growing businesses with manual, fragmented processes.',
    deliverables: [
      'Comprehensive workflow assessment & process map',
      'End-to-end automation architecture blueprint',
      'Implemented integrations (APIs, webhooks, databases)',
      'Robust error handling, retry logic, and audit logging',
      'End-to-end sandbox testing and live production deployment',
      'Operational documentation, SOPs, and team handover session'
    ],
    technology: ['n8n', 'Make', 'Zapier', 'Python', 'REST APIs', 'Webhooks', 'PostgreSQL', 'LLM APIs'],
    primaryCta: 'Automate My Workflow',
    secondaryCta: 'Explore Automation Solutions',
    indicativePricing: '$500 – $2,500',
    badge: 'High Impact • Immediate ROI',
    image: '/images/service1_1.webp'
  },
  {
    id: 'customer-support-agents',
    slug: 'ai-customer-support-agents',
    number: '02',
    category: 'Customer Experience AI',
    title: 'AI Customer Support Agents',
    headline: 'Deliver Faster, More Consistent Customer Support.',
    shortDescription: 'Timely, accurate customer answers grounded in your business documentation, with a seamless, guaranteed path to human escalation.',
    fullDescription: 'Give customers timely answers with AI assistants grounded in your product information and business documentation, while preserving a clear path to human support. We implement strict guardrails and Retrieval-Augmented Generation (RAG) so your assistant never invents facts.',
    businessProblem: 'Customer support teams are overwhelmed by repetitive inquiries, resulting in long response queues, lost sales during off-hours, and inconsistent answer quality across agents.',
    proposedSolution: 'An intelligent AI support agent connected to your approved knowledge base, documentation, and helpdesk that resolves 60%+ of routine inquiries in seconds while intelligently routing complex tickets to human reps with full context.',
    servicesIncluded: [
      'Website support assistants and embedded chat interfaces',
      'Knowledge-base question answering & semantic search',
      'Retrieval-Augmented Generation (RAG) pipeline design',
      'Product and service information assistants',
      'Dynamic FAQ automation with automated freshness checks',
      'Order-status and account integrations where supported',
      'Support-ticket classification, tagging, and priority routing',
      'Conversation summarization for CRM handoffs',
      'Human escalation triggers and live agent routing',
      'Response evaluation, hallucination checks, and quality monitoring'
    ],
    exampleWorkflow: 'Customer asks complex product question → assistant semantic-searches approved documentation → generates factual response with citations → escalates uncertain or sensitive requests directly to human team.',
    idealClients: 'E-commerce brands, SaaS companies, tech providers, and service businesses managing high volumes of repetitive inquiries.',
    deliverables: [
      'Knowledge-source audit & content preparation',
      'Custom assistant personality & prompt engineering',
      'Retrieval and grounding vector configuration',
      'Helpdesk / CRM integrations (Zendesk, Intercom, Freshdesk)',
      'Human-handoff protocol and fallback logic',
      'Evaluation test suite and production deployment',
      'Monitoring dashboard and ongoing maintenance plan'
    ],
    technology: ['Python', 'FastAPI', 'LLM APIs', 'Vector Embeddings', 'Qdrant / pgvector', 'Helpdesk APIs'],
    primaryCta: 'Build My Support Assistant',
    secondaryCta: 'Explore Support Automation',
    indicativePricing: '$1,000 – $5,000',
    badge: '24/7 Availability • Zero Hallucinations',
    image: '/images/service2_1.webp'
  },
  {
    id: 'lead-generation-sales',
    slug: 'ai-lead-generation-sales-automation',
    number: '03',
    category: 'Sales Intelligence',
    title: 'AI Lead Gen & Sales Automation',
    headline: 'Turn More Qualified Opportunities Into Conversations.',
    shortDescription: 'Capture, organize, qualify, and prioritize sales opportunities using AI-assisted workflows that fit seamlessly into your existing sales pipeline.',
    fullDescription: 'We help businesses capture, organize, qualify, and prioritize sales opportunities using AI-assisted workflows that support their existing sales process. We prioritize authentic, high-relevance interactions and ethical data enrichment over spammy mass automation.',
    businessProblem: 'Sales representatives waste hours researching prospects, manually typing CRM notes, and qualifying bad leads instead of speaking to prospective buyers ready to purchase.',
    proposedSolution: 'Intelligent lead enrichment and scoring pipelines that automatically evaluate inbound inquiries against your ideal customer profile, enrich contact records from verified sources, and draft tailored follow-up briefings for your reps.',
    servicesIncluded: [
      'Inbound lead qualification and scoring models',
      'CRM automation and real-time database synchronization',
      'Lead classification, intent analysis, and prioritization',
      'Prospect data enrichment using authorized data sources',
      'Sales pipeline milestone updates and task generation',
      'Calendar scheduling and meeting routing protocols',
      'Personalized follow-up briefing and email draft generation',
      'Sales call and demo conversation summarization',
      'Lead-source attribution and conversion rate reporting',
      'Sales-team alert channels and pipeline visibility dashboards'
    ],
    exampleWorkflow: 'Inbound demo inquiry arrives → company domain and tech stack enriched → AI scores fit criteria (A/B/C) → CRM deal created → assigned to account executive with pre-written briefing.',
    idealClients: 'B2B SaaS companies, marketing agencies, consultants, technology service providers, and high-velocity sales teams.',
    deliverables: [
      'Sales workflow assessment & qualification criteria rubric',
      'Lead scoring engine & routing logic',
      'CRM & API integrations (HubSpot, Salesforce, Pipedrive)',
      'Automated briefing generation & notification workflows',
      'Privacy compliance verification & anti-spam safeguards',
      'Testing, conversion analytics, and optimization recommendations'
    ],
    technology: ['HubSpot / Salesforce APIs', 'Python', 'LLM Scoring', 'Data Enrichment APIs', 'Webhooks'],
    primaryCta: 'Improve My Sales Workflow',
    secondaryCta: 'Explore Lead Automation',
    indicativePricing: '$750 – $3,000',
    badge: 'Higher Conversion • Authentic Outreach',
    image: '/images/service3_1.webp'
  },
  {
    id: 'document-processing',
    slug: 'ai-document-processing-data-extraction',
    number: '04',
    category: 'Document Intelligence',
    title: 'AI Document Processing & Extraction',
    headline: 'Transform Unstructured Documents Into Usable Business Data.',
    shortDescription: 'Extract, classify, validate, and organize information from complex business documents, eliminating manual re-keying and accelerating turnaround.',
    fullDescription: 'We build document-processing systems that extract, classify, validate, and organize information from business documents, reducing manual data entry and making information easier to use. We combine advanced OCR, vision models, and strict validation logic to achieve 99%+ field accuracy.',
    businessProblem: 'Manual data entry from invoices, purchase orders, medical forms, and contracts is notoriously slow, prone to costly transcription errors, and creates major operational backlogs.',
    proposedSolution: 'Automated document ingestion pipelines that parse PDFs and scans, extract exact key-value pairs and line items, check mathematical totals, and pipe approved data directly into your ERP, CRM, or accounting software.',
    servicesIncluded: [
      'Invoice, receipt, and utility bill data extraction',
      'PDF and scanned image document processing',
      'Standardized form digitization and field mapping',
      'Contract metadata, clause, and expiration extraction',
      'Multi-page document classification and splitting',
      'Field-level validation rules and checksum calculations',
      'Duplicate detection and anomaly flagging',
      'Structured JSON, CSV, and database exports',
      'Human-in-the-loop review queues for low-confidence fields',
      'Direct integration with accounting (QuickBooks, Xero), ERPs, and databases'
    ],
    exampleWorkflow: 'Vendor invoice PDF received → text & layout parsed → vendor, items, and tax extracted → totals mathematically verified → approved payload synced to accounting software.',
    idealClients: 'Accounting firms, logistics operators, property managers, healthcare practices, and document-heavy back-office operations.',
    deliverables: [
      'Document sample audit & target field schema definition',
      'Extraction pipeline & custom validation engine',
      'Confidence-scoring thresholds & exception review portal',
      'Direct accounting / ERP export integrations',
      'Accuracy benchmarking tests across historical files',
      'Comprehensive deployment, SOP documentation, and training'
    ],
    technology: ['Python', 'OCR & Vision Models', 'Document AI', 'Pandas', 'PostgreSQL', 'Cloud Storage'],
    primaryCta: 'Automate My Documents',
    secondaryCta: 'Explore Document Intelligence',
    indicativePricing: '$1,500 – $7,500',
    badge: '99%+ Field Accuracy • Zero Manual Re-keying',
    image: '/images/service4_1.webp'
  },
  {
    id: 'data-analytics',
    slug: 'ai-data-analytics-business-intelligence',
    number: '05',
    category: 'Data Intelligence',
    title: 'AI Data Analytics & BI',
    headline: 'Turn Your Business Data Into Clear, Actionable Insights.',
    shortDescription: 'Reliable data pipelines, automated executive reporting, and AI-assisted query experiences that help teams understand performance from their own data.',
    fullDescription: 'We build reliable data pipelines, reporting systems, and AI-assisted analytics experiences that help teams understand performance and investigate business questions using their own data. We empower non-technical leaders to ask questions in plain English and receive verified data charts.',
    businessProblem: 'Crucial company data is scattered across databases, payment processors, and marketing tools. Leaders wait days for manual reports or struggle with complex SQL queries to get answers.',
    proposedSolution: 'A centralized analytics pipeline that harmonizes your data sources, surfaces live executive KPI dashboards, and enables conversational natural-language data exploration with direct links to supporting metrics.',
    servicesIncluded: [
      'Multi-source business data integration and cleansing',
      'Automated daily/weekly executive reporting and briefs',
      'Interactive Business Intelligence (BI) dashboards',
      'Key Performance Indicator (KPI) tracking and visualization',
      'SQL-based analytical data modeling and warehousing',
      'Natural-language querying interfaces over company data',
      'Historical trend analysis and performance benchmarking',
      'Scenario modeling and forecasting where data quality supports it',
      'Automated data-quality monitoring and anomaly alerts',
      'Scheduled alerts for revenue drops or milestone achievements'
    ],
    exampleWorkflow: 'Business databases sync hourly → data cleaned & modeled → executive opens dashboard → types "Compare customer churn between Q2 and Q3" → receives verified visualization with explanation.',
    idealClients: 'SaaS companies, e-commerce brands, retail operators, logistics providers, and leadership teams managing multiple data silos.',
    deliverables: [
      'Data-source audit, schema review & quality assessment',
      'Automated data ingestion, transformation, and storage pipelines',
      'Tailored KPI dashboard suite (Executive, Ops, Marketing)',
      'Natural-language analytics interface configuration',
      'Testing, mathematical validation, and data verification',
      'Full documentation, data dictionary, and team training'
    ],
    technology: ['SQL', 'Python', 'Pandas', 'Cloud Data Warehouses', 'BI Platforms', 'LLM Query Engines'],
    primaryCta: 'Unlock My Business Data',
    secondaryCta: 'Explore Analytics Solutions',
    indicativePricing: '$2,000 – $10,000',
    badge: 'Actionable Insights • Plain-English Queries',
    image: '/images/service5_1.webp'
  }
];

export interface EngagementStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export const engagementProcess: EngagementStage[] = [
  {
    step: '01',
    title: 'Discover & Deconstruct',
    duration: 'Week 1',
    description: 'We audit your existing workflows, systems, data readiness, constraints, and operational bottlenecks through focused stakeholder interviews.',
    deliverables: ['Process map', 'Data readiness audit', 'Opportunity matrix', 'Scoping proposal']
  },
  {
    step: '02',
    title: 'Architect & Design',
    duration: 'Week 2',
    description: 'We define the system architecture, tool integration schemas, security guardrails, failure modes, and clear success criteria.',
    deliverables: ['System blueprint', 'Security & privacy protocol', 'Integration specs', 'Milestone timeline']
  },
  {
    step: '03',
    title: 'Build & Stress-Test',
    duration: 'Weeks 3–4',
    description: 'We engineer the automation pipelines, AI models, and interface connectors, validating against edge cases, extreme payloads, and exception handling.',
    deliverables: ['Working system staging build', 'Exception queues', 'Benchmark validation', 'User acceptance testing']
  },
  {
    step: '04',
    title: 'Deploy & Optimize',
    duration: 'Week 5+',
    description: 'We launch securely into your live environment, deliver comprehensive documentation, conduct staff handover, and provide post-launch optimization.',
    deliverables: ['Production deployment', 'SOPs & handover guides', 'Monitoring dashboard', 'Ongoing SLA support']
  }
];

export interface BusinessOutcome {
  icon: string;
  title: string;
  description: string;
}

export const intendedOutcomes: BusinessOutcome[] = [
  {
    icon: '⚡',
    title: 'Reduced Repetitive Manual Work',
    description: 'Eliminate 15+ hours per week of manual data entry, formatting, and copying across tools.'
  },
  {
    icon: '⏱️',
    title: 'Faster Customer Response',
    description: 'Provide instant, 24/7 grounded answers to customer inquiries with zero wait times.'
  },
  {
    icon: '🎯',
    title: 'More Consistent Lead Handling',
    description: 'Qualify and route sales inquiries in real time so valuable opportunities never fall through the cracks.'
  },
  {
    icon: '📄',
    title: 'Fewer Data-Entry Errors',
    description: 'Automate invoice and document processing with field-level mathematical validation.'
  },
  {
    icon: '🔍',
    title: 'Better Access to Business Data',
    description: 'Empower non-technical team members to query databases and documents in plain English.'
  },
  {
    icon: '📊',
    title: 'Clear Operational Visibility',
    description: 'Automated executive briefs and dashboards that surface performance trends without manual reporting.'
  }
];

export interface TechCategory {
  category: string;
  tools: string[];
}

export const techEcosystem: TechCategory[] = [
  {
    category: 'Workflow Automation',
    tools: ['n8n', 'Make.com', 'Zapier', 'Custom Webhooks', 'REST APIs']
  },
  {
    category: 'Language Models & AI',
    tools: ['OpenAI GPT-4o', 'Anthropic Claude', 'Google Gemini', 'Llama 3', 'Hugging Face']
  },
  {
    category: 'Databases & Vector Search',
    tools: ['PostgreSQL', 'Qdrant', 'pgvector', 'Pinecone', 'MongoDB']
  },
  {
    category: 'CRM & Business Systems',
    tools: ['HubSpot', 'Salesforce', 'Pipedrive', 'Notion', 'Airtable', 'Google Workspace']
  },
  {
    category: 'Document & OCR',
    tools: ['Tesseract', 'Docsumo', 'AWS Textract', 'PyMuPDF', 'Pandas']
  },
  {
    category: 'Engineering & Cloud',
    tools: ['Python', 'FastAPI', 'Node.js', 'Docker', 'AWS', 'Cloudflare Workers']
  }
];

export interface ServiceFaq {
  question: string;
  answer: string;
}

export const servicesFaqs: ServiceFaq[] = [
  {
    question: 'What types of businesses can benefit from your AI services?',
    answer: 'We work primarily with small-to-medium businesses, SaaS startups, e-commerce brands, marketing agencies, consultants, recruitment firms, and professional operations teams in North America, the UK, Europe, and Australia. If your team spends valuable hours on repetitive data entry, support triage, document parsing, or fragmented reporting, our services will deliver immediate impact.'
  },
  {
    question: 'Can you integrate AI into our existing software and tools?',
    answer: 'Yes. We build customized integrations that connect directly to your existing tech stack — including CRMs (HubSpot, Salesforce), communications (Slack, Teams, Gmail), databases, accounting software (QuickBooks, Xero), and helpdesks. You do not need to replace your current systems.'
  },
  {
    question: 'Do we need to train or build our own AI model from scratch?',
    answer: 'In 95% of business use cases, training a model from scratch is unnecessary, expensive, and slow. Instead, we utilize state-of-the-art frontier models (OpenAI, Anthropic, Gemini) combined with Retrieval-Augmented Generation (RAG) and workflow automation grounded strictly in your proprietary documentation and data.'
  },
  {
    question: 'How do you handle sensitive business data and security?',
    answer: 'Data privacy and security are central to our architecture. We configure enterprise API connections with zero-data-retention policies where models do not train on your inputs. Credentials and API keys are stored in encrypted vaults, and sensitive data access is restricted through role-based permissions.'
  },
  {
    question: 'Can your AI systems escalate complex tasks to human employees?',
    answer: 'Yes, every system we design includes a deliberate "Human-in-the-Loop" fallback. Whether an AI assistant encounters an ambiguous customer question or an invoice has low extraction confidence, the system automatically routes the task to a designated staff member with full context.'
  },
  {
    question: 'How long does a typical implementation take?',
    answer: 'Most single-service implementations (such as a multi-step workflow automation or a customer support agent) are delivered and tested within 2 to 4 weeks. Larger multi-system enterprise architectures typically take 6 to 8 weeks with phased milestone rollouts.'
  },
  {
    question: 'What information do you need to provide a formal proposal?',
    answer: 'A short 30-minute discovery conversation is usually sufficient. We will ask about your current tools, where your staff spends the most manual time, the volume of data or inquiries handled, and your target completion timeline. From there, we provide a scoped proposal with clear deliverables and fixed milestones.'
  },
  {
    question: 'Do you offer ongoing support, monitoring, and optimization?',
    answer: 'Yes. Beyond initial deployment and training, we offer ongoing support packages to monitor pipeline uptime, update integrations as your tools evolve, review assistant answer quality, and continuously improve performance metrics.'
  },
  {
    question: 'How do you measure whether an AI solution is working?',
    answer: 'Before writing any code, we establish measurable baseline metrics: hours saved per week, first-response time reduction, support ticket resolution rate, lead qualification speed, or document extraction accuracy. We build reporting dashboards so you can verify the ROI in real time.'
  }
];

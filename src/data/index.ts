import type {
  Skill, Project, CaseStudy, ExperienceItem,
  ServiceItem, BlogPost, CertItem, ContentItem
} from '../types/index';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#blog', label: 'Blog' },
];

export const STATS = [
  { num: '4', suffix: '+', label: 'Years experience' },
  { num: '30', suffix: '+', label: 'Projects shipped' },
  { num: '12', suffix: '', label: 'Happy clients' },
  { num: '5', suffix: 'k+', label: 'Community members' },
];

export const ABOUT_CARDS = [
  { icon: '⚡', title: 'Performance First', desc: 'Redis caching, query optimization, and load-tested APIs that handle real traffic.' },
  { icon: '🔐', title: 'Security Minded', desc: 'JWT, rate limiting, input sanitization, and OWASP best practices baked in.' },
  { icon: '🧩', title: 'Systems Thinker', desc: 'Microservices, event-driven patterns, and scalable architecture design.' },
  { icon: '🎨', title: 'Design-aware Dev', desc: 'Tailwind, component systems, and pixel-precise UI implementation.' },
  { icon: '📦', title: 'DevOps Ready', desc: 'Docker, Linux servers, CI/CD pipelines, and cloud deployments.' },
  { icon: '🌐', title: 'API Architect', desc: 'RESTful APIs, authentication systems, and third-party integrations.' },
];

export const SKILLS: Skill[] = [
  { icon: 'javascript', name: 'JavaScript', level: 100, category: 'languages', summary: 'Primary language for full-stack web products.' },
  { icon: 'typescript', name: 'TypeScript', level: 80, category: 'languages', summary: 'Typed React and Node application development.' },
  { icon: 'go', name: 'Go / Golang', level: 60, category: 'languages', summary: 'Backend services and systems learning path.' },
  { icon: 'python', name: 'Python', level: 50, category: 'languages', summary: 'Automation, scripting, and backend fundamentals.' },
  { icon: 'java', name: 'Java', level: 20, category: 'languages', summary: 'Core language familiarity and OOP basics.' },
  { icon: 'c', name: 'C', level: 20, category: 'languages', summary: 'Low-level programming fundamentals.' },

  { icon: 'react', name: 'React.js', level: 92, category: 'frontend', summary: 'Advanced UI, hooks, component architecture.' },
  { icon: 'vite', name: 'Vite', level: 86, category: 'frontend', summary: 'Modern frontend tooling and fast builds.' },
  { icon: 'tailwind', name: 'Tailwind CSS', level: 90, category: 'frontend', summary: 'Responsive UI systems and production styling.' },
  { icon: 'shadcn', name: 'ShadCN UI', level: 78, category: 'frontend', summary: 'Component integration and design-system assembly.' },
  { icon: 'framer', name: 'Framer Motion', level: 76, category: 'frontend', summary: 'UI animation and interaction polish.' },
  { icon: 'zustand', name: 'Zustand', level: 82, category: 'frontend', summary: 'Lightweight state management for React apps.' },
  { icon: 'seo', name: 'SEO Fundamentals', level: 75, category: 'frontend', summary: 'Metadata, semantic structure, and web visibility.' },
  { icon: 'performance', name: 'Performance Optimization', level: 78, category: 'frontend', summary: 'Frontend speed, backend bottlenecks, and UX performance.' },

  { icon: 'node', name: 'Node.js', level: 92, category: 'backend', summary: 'Backend application development and API services.' },
  {icon:'supabase', name: 'Supabase', level: 90, category: 'backend', summary: 'Serverless database and authentication services.'},
  {icon:'grpc', name: 'gRPC', level: 79, category: 'backend', summary: 'High-performance API design and microservices communication.'},
  { icon: 'express', name: 'Express.js', level: 90, category: 'backend', summary: 'REST API design, middleware, and modular routes.' },
  { icon: 'mongodb', name: 'MongoDB', level: 86, category: 'backend', summary: 'Database design, management, and aggregation thinking.' },
  { icon: 'auth', name: 'JWT / Session Auth', level: 88, category: 'backend', summary: 'Token-based and session-based authentication systems.' },
  { icon: 'rbac', name: 'RBAC Systems', level: 84, category: 'backend', summary: 'Admin, user, employer, supplier, and marketer roles.' },
  { icon: 'multer', name: 'Secure File Uploads', level: 80, category: 'backend', summary: 'Multer upload flows with validation and storage handoff.' },
  { icon: 'cloudinary', name: 'Cloudinary', level: 78, category: 'backend', summary: 'Media storage, upload pipelines, and asset handling.' },
  { icon: 'redis', name: 'Redis', level: 74, category: 'backend', summary: 'OTP storage, caching, and verification flows.' },
  { icon: 'whatsapp', name: 'WhatsApp OTP', level: 76, category: 'backend', summary: 'Phone verification and OTP delivery workflows.' },
  { icon: 'email', name: 'Email Reset Flows', level: 82, category: 'backend', summary: 'Token-based password reset and account recovery.' },
  { icon: 'security', name: 'Backend Security', level: 80, category: 'backend', summary: 'Input validation, rate-limit concepts, and API hardening.' },

  { icon: 'api', name: 'API Architecture', level: 88, category: 'architecture', summary: 'Monolithic, modular, mobile, and partner API systems.' },
  { icon: 'microservices', name: 'Microservices', level: 68, category: 'architecture', summary: 'Service boundaries, orchestration, and scaling concepts.' },
  { icon: 'saas', name: 'SaaS System Design', level: 86, category: 'architecture', summary: 'Multi-role SaaS planning from schema to production.' },
  { icon: 'marketplace', name: 'Marketplace Architecture', level: 84, category: 'architecture', summary: 'Multi-vendor ecosystems, inventory, sales, and admin flows.' },
  { icon: 'inventory', name: 'Inventory & Sales Systems', level: 82, category: 'architecture', summary: 'Stock, sales, supplier, and reporting workflows.' },
  { icon: 'recruitment', name: 'Recruitment Platforms', level: 78, category: 'architecture', summary: 'Job, employer, candidate, and application flows.' },
  { icon: 'realtime', name: 'Real-time Systems', level: 76, category: 'architecture', summary: 'Chat, notifications, and live product interactions.' },
  { icon: 'database', name: 'Database Architecture', level: 86, category: 'architecture', summary: 'Large-scale schemas, indexes, relationships, and data flows.' },
  { icon: 'wordpress', name: 'WordPress Development', level: 76, category: 'architecture', summary: 'Themes, plugins, SEO, and optimization work.' },

  { icon: 'ownership', name: 'Full-cycle Ownership', level: 90, category: 'leadership', summary: 'Idea, requirements, architecture, execution, and production.' },
  { icon: 'leadership', name: 'Technical Leadership', level: 86, category: 'leadership', summary: 'Freelance/client project ownership and technical direction.' },
  { icon: 'requirements', name: 'Requirement Analysis', level: 88, category: 'leadership', summary: 'Client communication and technical specification planning.' },
  { icon: 'planning', name: 'Feature Planning', level: 86, category: 'leadership', summary: 'Modular decomposition and delivery sequencing.' },
  { icon: 'coordination', name: 'Team Coordination', level: 78, category: 'leadership', summary: 'Solo-to-lead hybrid workflows and collaboration.' },
  { icon: 'debugging', name: 'Production Debugging', level: 82, category: 'leadership', summary: 'Incident resolution and deadline-focused delivery.' },
  { icon: 'product', name: 'Product Thinking', level: 84, category: 'leadership', summary: 'UX and business logic alignment for web platforms.' },
  { icon: 'scaling', name: 'Scaling Decisions', level: 80, category: 'leadership', summary: 'Architecture tradeoffs for SaaS and marketplace systems.' },

  { icon: 'git', name: 'Git & GitHub', level: 92, category: 'tools', summary: 'Branching, collaboration, and version control workflows.' },
  { icon: 'notion', name: 'Notion', level: 80, category: 'tools', summary: 'Documentation, planning, and knowledge base structure.' },
  { icon: 'discord', name: 'Discord', level: 78, category: 'tools', summary: 'Developer team communication.' },
  { icon: 'postman', name: 'Postman', level: 86, category: 'tools', summary: 'API testing, environments, and collaboration.' },
  { icon: 'docker', name: 'Docker', level: 62, category: 'tools', summary: 'Intermediate containers and deployment packaging.' },
  { icon: 'K8S', name: 'Kubernetes', level: 64, category: 'tools', summary: 'Container orchestration and deployment.' },
  { icon: 'vscode', name: 'VS Code', level: 92, category: 'tools', summary: 'Development environment and extension workflows.' },
  { icon: 'figma', name: 'Figma', level: 70, category: 'tools', summary: 'Design handoff interpretation and UI collaboration.' },
  { icon: 'devtools', name: 'DevTools', level: 84, category: 'tools', summary: 'Browser debugging and performance inspection.' },
  { icon: 'cicd', name: 'CI/CD Awareness', level: 64, category: 'tools', summary: 'GitHub Actions and basic pipeline understanding.' },
  { icon: 'agent', name: 'Agent Framework', level: 70, category: 'tools', summary: 'Task automation and workflow management.' },
  { icon: 'linux', name: 'Linux / Kali', level: 70, category: 'tools', summary: 'Linux environment usage and system administration basics.' },
];

export const PROJECTS: Project[] = [
  {
    id: 'feroce',
    title: 'Feroce — SaaS for Auto Showrooms',
    description:
      'A SaaS platform designed for auto showrooms to manage vehicle inventory, showroom operations, and business workflows with structured data management and scalable architecture.',
    tags: ['SaaS', 'Dashboard', 'Microservices', 'CRM'],
    liveUrl: 'https://feroce.vercel.app',
    featured: true,
    githubUrl: 'https://github.com/Aym-Aymen777/automobile-saas',
    caseStudyId: 'feroce',
    image: '/feroce.png',
  },
  {
    id: 'taqam',
    title: 'TAQAM — Job Recruitment Platform',
    description:
      'A full recruitment system connecting employers and job seekers with role-based access control, WhatsApp OTP verification, document upload & validation, and an admin moderation dashboard for applications and user verification workflows.',
    tags: ['MERN', 'RBAC', 'OTP', 'Redis'],
    liveUrl: 'https://taqam.netlify.app',
    githubUrl: 'https://github.com/Aym-Aymen777/taqam',
    caseStudyId: 'taqam',
    image: '/taqam.png',
  },
  {
    id: 'casaeleganta',
    title: 'CasaEleganta — Multi-Vendor Marketplace',
    description:
      'A scalable multi-vendor marketplace platform connecting suppliers, workshops, and customers. Includes subscription plans, chat system, promotions, multi-language support (AR/FR/EN), and country-based segmentation.',
    tags: ['Marketplace', 'MERN', 'Multi-vendor', 'SaaS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Aym-Aymen777/VendorConnect-DZ',
    caseStudyId: 'casaeleganta',
    image: '/casaeleganta.png',
  },
  {
    id: 'fretDZ',
    title: 'FretDZ — Logistics Connector Platform',
    description:
      'A logistics coordination platform connecting transporters and clients. Enables freight request matching, transport assignment workflows, and streamlined communication between service providers and customers.',
    tags: ['Logistics', 'Platform', 'Supabase', 'Matching System','Next.js'],
    liveUrl: 'https://fret-dz-topaz.vercel.app/',
    githubUrl: 'https://github.com/Aym-Aymen777/Fret-DZ',
    caseStudyId: 'fretDZ',
    image: '/fretdz.png',
  },
  {
    id: 'bustedx',
    title: 'BustedX — Financial Crime Security System',
    description:
      'A high-security authentication and fraud prevention system designed for financial crime monitoring. Includes RBAC, OTP verification flows, and secure identity validation architecture.',
    tags: ['Security', 'Auth', 'RBAC', 'AML'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Aym-Aymen777/BustedX',
    caseStudyId: 'bustedx',
    image: '/bustedx.png',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'saas-mvp',
    label: 'Full SaaS MVP',
    timeline: [
      { label: 'Scope', value: 'Turn a product idea into a working SaaS MVP with real users, roles, and dashboards' },
      { label: 'Stack', value: 'React, TypeScript, Node.js, Express, MongoDB, Mongoose, Tailwind, Zustand' },
      { label: 'Security', value: 'JWT/session auth, RBAC, input validation, password reset, and protected API layers' },
      { label: 'Delivery', value: 'Feature planning, modular backend structure, deployment workflow, and production debugging' },
      { label: 'Outcome', value: 'Launch-ready SaaS foundation designed for future mobile and partner APIs' },
    ],
    details: [
      { icon: 'Stack', title: 'Core Build', content: ['React', 'TypeScript', 'Vite', 'Tailwind', 'ShadCN UI', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Mongoose'] },
      { icon: 'Auth', title: 'Access Control', content: 'Built around authenticated user flows, JWT or session-based auth, password reset tokens, and role-based access for admin and user workflows.' },
      { icon: 'API', title: 'Backend Design', content: 'Structured as a modular REST API with clear route ownership, validation layers, reusable middleware, and room to expose mobile or partner APIs later.' },
      { icon: 'Ship', title: 'Product Delivery', content: 'Covers requirement analysis, feature planning, frontend implementation, backend execution, deployment handoff, and production-level debugging.' },
    ],
  },
  {
    id: 'marketplace-platform',
    label: 'Marketplace Platform',
    timeline: [
      { label: 'Scope', value: 'Design a multi-vendor ecosystem with suppliers, customers, admins, inventory, and sales flows' },
      { label: 'Architecture', value: 'Multi-role MERN platform with marketplace modules, product ownership, and admin oversight' },
      { label: 'Data', value: 'MongoDB schema design for products, vendors, orders, stock, sales, and reporting screens' },
      { label: 'Operations', value: 'Secure uploads, Cloudinary media storage, API filtering, and dashboard management' },
      { label: 'Outcome', value: 'Marketplace-ready architecture that can scale into vendor dashboards and partner integrations' },
    ],
    details: [
      { icon: 'Roles', title: 'Multi-role System', content: ['Admin', 'Supplier', 'Vendor', 'Customer', 'Marketer', 'Partner API'] },
      { icon: 'Data', title: 'Inventory Logic', content: 'Designed product, inventory, sales, and supplier data relationships with Mongoose schemas, validation, and query patterns for dashboard filtering.' },
      { icon: 'Media', title: 'Upload Pipeline', content: 'Secure file upload flow using Multer concepts and Cloudinary media storage for product images, portfolio assets, or vendor documents.' },
      { icon: 'Scale', title: 'Marketplace Thinking', content: 'The architecture separates platform-wide control from vendor-owned resources so the system can grow without rewriting the core model.' },
    ],
  },
  {
    id: 'recruitment-realtime',
    label: 'Recruitment + Real-time',
    timeline: [
      { label: 'Scope', value: 'Build job/recruitment workflows with employer, candidate, admin, and notification needs' },
      { label: 'Architecture', value: 'REST APIs for core workflows plus real-time events for chat, status changes, and alerts' },
      { label: 'Verification', value: 'WhatsApp OTP, email reset flows, Redis-backed temporary codes, and account recovery' },
      { label: 'Workflow', value: 'Postman/OpenAPI-driven API design, Git/GitHub collaboration, and production debugging' },
      { label: 'Outcome', value: 'A platform model that connects business workflows with secure communication features' },
    ],
    details: [
      { icon: 'Flow', title: 'Recruitment Model', content: ['Employer dashboard', 'Candidate profiles', 'Job posts', 'Applications', 'Admin review', 'Notifications'] },
      { icon: 'Live', title: 'Real-time Features', content: 'Chat and notification systems are treated as product workflows, not add-ons, with auth-aware events and clean data persistence.' },
      { icon: 'OTP', title: 'Verification Systems', content: 'Redis-backed OTP storage, WhatsApp verification, and token-based email password resets keep account flows secure and recoverable.' },
      { icon: 'Docs', title: 'API Collaboration', content: 'Postman and Swagger/OpenAPI support cleaner API testing, documentation, and handoff across mobile, partner, and frontend consumers.' },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: '2023 — Now',
    duration: '2 yrs',
    role: 'Senior Full-Stack Developer',
    company: '// Freelance & Consulting',
    description: 'Architecting and building complete SaaS products for international clients. Leading full-cycle development from database schema design to production deployment. Delivering scalable MERN applications with Docker-based deployment pipelines.',
    tags: ['React', 'Node.js', 'Docker', 'MongoDB', 'Redis'],
  },
  {
    period: '2022 — 2023',
    duration: '1 yr',
    role: 'Full-Stack Developer',
    company: '// Startup (Remote)',
    description: 'Built core features for a B2B SaaS dashboard product serving 200+ business customers. Implemented subscription billing with Stripe, multi-tenant architecture, and a real-time analytics engine.',
    tags: ['React', 'Express', 'Stripe', 'Tailwind'],
  },
  {
    period: '2021 — 2022',
    duration: '1 yr',
    role: 'Frontend Developer',
    company: '// Agency (Contract)',
    description: 'Developed responsive web applications and UI component libraries for agency clients. Collaborated with designers to implement pixel-perfect interfaces using React and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'REST APIs'],
  },
  {
    period: '2020 — 2021',
    duration: '1 yr',
    role: 'Self-directed Learning & Open Source',
    company: '// Independent',
    description: 'Intensive self-study of MERN stack, system design, and modern DevOps practices. Built 15+ personal projects, contributed to open source repositories, and launched a technical content channel.',
    tags: ['MERN', 'Open Source', 'Content Creation'],
  },
];

export const SERVICES: ServiceItem[] = [
  { icon: '▣', title: 'Landing Page', price: '9,000 DA', category: 'websites', description: 'Conversion-focused single page for a launch, offer, or service.', items: ['Responsive section layout', 'Contact CTA', 'Fast Vite/React build'] },
  { icon: '▤', title: 'Business Website (3-5 pages)', price: '19,000 DA', category: 'websites', description: 'Clean company website with the core pages a local business needs.', items: ['Home, about, services, contact', 'Mobile-first UI', 'Contact form setup'] },
  { icon: '▥', title: 'Multi-page Professional Website', price: '39,000 DA', category: 'websites', description: 'Polished multi-section website for a broader brand or service catalog.', items: ['Custom page structure', 'Reusable components', 'Performance-ready frontend'] },
  { icon: '◈', title: 'Portfolio Website', price: '29,000 DA', category: 'websites', description: 'Personal portfolio for freelancers, creators, and professionals.', items: ['Project showcase', 'About and contact sections', 'Modern responsive design'] },
  { icon: '◎', title: 'WordPress Website', price: '24,900 DA', category: 'websites', description: 'Editable WordPress site for clients who want CMS control.', items: ['Theme setup', 'Core pages', 'Basic speed setup'] },
  { icon: '◫', title: 'E-commerce MVP Store', price: '49,000 DA', category: 'commerce', description: 'Lean online store built to validate products and start selling.', items: ['Product catalog', 'Cart and checkout flow', 'Order basics'] },
  { icon: '◩', title: 'Advanced E-commerce Platform', price: '149,000 DA', category: 'commerce', description: 'Custom commerce platform with stronger management and scaling needs.', items: ['Inventory logic', 'Customer flows', 'Admin management'] },
  { icon: '▦', title: 'Marketplace Platform (multi-vendor)', price: '249,000 DA', category: 'commerce', description: 'Multi-vendor platform for sellers, products, orders, and dashboards.', items: ['Vendor accounts', 'Marketplace workflows', 'Admin oversight'] },
  { icon: '◧', title: 'WordPress E-commerce', price: '39,000 DA', category: 'commerce', description: 'WooCommerce store for a faster CMS-based commerce launch.', items: ['WooCommerce setup', 'Product pages', 'Payment-ready structure'] },
  { icon: '▲', title: 'SaaS Web Application', price: '199,000 DA', category: 'apps', description: 'Custom SaaS product with user accounts, workflows, and dashboards.', items: ['App architecture', 'User roles', 'Product features'] },
  { icon: '◆', title: 'Full SaaS MVP Build', price: '229,000 DA', category: 'apps', description: 'End-to-end MVP build for a SaaS idea ready for first users.', items: ['Frontend and backend', 'Auth and database', 'Deployment handoff'] },
  { icon: '▧', title: 'Custom Admin Dashboard', price: '49,000 DA', category: 'apps', description: 'Operational dashboard for managing users, content, orders, or data.', items: ['Data tables', 'Forms and filters', 'Role-aware screens'] },
  { icon: '⌁', title: 'UI / Frontend Development (React UI)', price: '29,000 DA', category: 'apps', description: 'React interface implementation for existing products or designs.', items: ['Component buildout', 'Responsive states', 'API-ready screens'] },
  { icon: '⇄', title: 'UI Animations (Framer Motion)', price: '9,000 DA', category: 'apps', description: 'Tasteful motion for product flows, sections, and micro-interactions.', items: ['Page transitions', 'Scroll reveals', 'Interaction polish'] },
  { icon: '⌘', title: 'API Development (REST / Backend system)', price: '39,000 DA', category: 'backend', description: 'Production-oriented backend APIs for apps, dashboards, and integrations.', items: ['REST endpoints', 'Validation and security', 'Backend structure'] },
  { icon: '◇', title: 'Authentication System (JWT / RBAC / OTP)', price: '29,000 DA', category: 'backend', description: 'Secure login and permission layer for web apps and dashboards.', items: ['JWT sessions', 'Role-based access', 'OTP-ready flows'] },
  { icon: '✉', title: 'WhatsApp / Email / automation Systems', price: '19,000 DA', category: 'backend', description: 'OTP verification flow through email or WhatsApp channels.', items: ['Code generation', 'Expiry handling', 'Provider integration'] },
  { icon: '▨', title: 'Database Design & Optimization', price: '29,000 DA', category: 'backend', description: 'Schema design and query tuning for cleaner, faster data systems.', items: ['Data modeling', 'Indexes', 'Query cleanup'] },
  { icon: '△', title: 'Deployment Setup (VPS / Hosting)', price: '14,900 DA', category: 'ops', description: 'Server or hosting deployment setup for a finished web project.', items: ['VPS configuration', 'Domain basics', 'Production environment'] },
  { icon: '◬', title: 'Docker Setup', price: '29,000 DA', category: 'ops', description: 'Container setup for consistent local and production environments.', items: ['Dockerfiles', 'Compose setup', 'Service configuration'] },
  { icon: '⌕', title: 'SEO/Performance Optimization', price: '19,000 DA', category: 'growth', description: 'Technical and on-page improvements to help pages rank and preview well.', items: ['Metadata', 'Semantic structure', 'Performance checks'] },
  { icon: '↻', title: 'Website Maintenance (monthly)', price: '5,900 DA', category: 'support', description: 'Monthly care for updates, small changes, and basic monitoring.', items: ['Content updates', 'Small fixes', 'Health checks'] },
  { icon: '✦', title: 'Bug Fix / Small Feature', price: '4,900 DA', category: 'support', description: 'Focused repair or small improvement for an existing site or app.', items: ['Bug diagnosis', 'Quick implementation', 'Code handoff'] },
  { icon: '◌', title: 'System Architecture / Consulting', price: '9,900 DA / session', category: 'support', description: 'Technical planning session for architecture, stack choices, or roadmap clarity.', items: ['Architecture review', 'Stack guidance', 'Action plan'] },
];

export const BLOG_POSTS: BlogPost[] = [
  { num: '01', category: 'Architecture', title: 'Building a Real-Time SaaS with Redis Pub/Sub', excerpt: 'How I architected NexaHub to handle 10k+ concurrent WebSocket connections using a Redis adapter pattern that scales horizontally without sticky sessions.', meta: '12 min · Jan 2024', featured: true },
  { num: '02', category: 'Node.js', title: 'JWT Refresh Token Rotation: The Right Way', meta: '8 min · Feb 2024' },
  { num: '03', category: 'MongoDB', title: 'Compound Indexes & Query Planning Deep Dive', meta: '10 min · Mar 2024' },
  { num: '04', category: 'DevOps', title: 'Docker Compose for MERN: Full Production Setup', meta: '7 min · Nov 2023' },
  { num: '05', category: 'React', title: 'Zustand vs Redux: When to Choose What', meta: '5 min · Dec 2023' },
];

export const CERTS: CertItem[] = [
  { icon: '🟡', name: 'MongoDB Developer Certification', issuer: 'MongoDB University', date: '2023' },
  { icon: '🐳', name: 'Docker Certified Associate', issuer: 'Docker Inc.', date: '2023' },
  { icon: '☁️', name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: '2022' },
  { icon: '🔐', name: 'OWASP Security Fundamentals', issuer: 'OWASP Foundation', date: '2022' },
  { icon: '⚛️', name: 'React Advanced Patterns', issuer: 'Frontend Masters', date: '2022' },
  { icon: '🟢', name: 'Node.js Application Developer', issuer: 'OpenJS Foundation', date: '2021' },
];

export const CONTENT_ITEMS: ContentItem[] = [
  { platform: 'linkdin', platformLabel: 'LinkedIn', title: 'Posting Tech Content , Tips and Updates', meta: 'Mar 2024', stat: '2299 followers' },
  { platform: 'github', platformLabel: 'GitHub', title: 'Building a SaaS with Multiple Stacks', meta: 'Feb 2024', stat: '320 Contributions' },
  { platform: 'tt', platformLabel: 'Dev.to', title: 'I built a SaaS in 30 days — Here\'s how', meta: 'Jan 2024', stat: '12k reads' },
];

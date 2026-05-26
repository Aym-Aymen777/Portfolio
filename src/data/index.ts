import type {
  Skill, Project, CaseStudy, ExperienceItem,
  ServiceItem, BlogPost, CertItem, ContentItem
} from '../types/index';

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
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
  { icon: '⚛️', name: 'React', level: 5, category: 'frontend' },
  { icon: '🎨', name: 'Tailwind', level: 5, category: 'frontend' },
  { icon: '🐻', name: 'Zustand', level: 4, category: 'frontend' },
  { icon: '📜', name: 'TypeScript', level: 4, category: 'frontend' },
  { icon: '⚡', name: 'Vite', level: 4, category: 'frontend' },
  { icon: '🟢', name: 'Node.js', level: 5, category: 'backend' },
  { icon: '🚂', name: 'Express', level: 5, category: 'backend' },
  { icon: '🍃', name: 'MongoDB', level: 4, category: 'backend' },
  { icon: '🔴', name: 'Redis', level: 4, category: 'backend' },
  { icon: '🔌', name: 'REST APIs', level: 5, category: 'backend' },
  { icon: '🐳', name: 'Docker', level: 4, category: 'devops' },
  { icon: '🐧', name: 'Linux', level: 4, category: 'devops' },
  { icon: '⚙️', name: 'CI/CD', level: 3, category: 'devops' },
  { icon: '☁️', name: 'VPS Deploy', level: 4, category: 'devops' },
  { icon: '🖼', name: 'Cloudinary', level: 4, category: 'tools' },
  { icon: '🔧', name: 'Git / GitHub', level: 5, category: 'tools' },
  { icon: '📐', name: 'Figma', level: 3, category: 'tools' },
  { icon: '🔍', name: 'Postman', level: 4, category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 'nexahub',
    title: 'NexaHub — Team Collaboration SaaS',
    description: 'A full-featured project management platform with real-time notifications, role-based access control, Kanban boards, and an analytics dashboard. Built to handle 10k+ concurrent users with Redis pub/sub architecture.',
    tags: ['SaaS', 'MERN', 'Redis', 'Docker'],
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
    caseStudyId: 'nexahub',
  },
  {
    id: 'storeflow',
    title: 'StoreFlow — E-commerce Engine',
    description: 'Multi-vendor e-commerce platform with Stripe checkout, inventory management, and a headless API layer. Processes 500+ orders/day with 99.9% uptime.',
    tags: ['E-commerce', 'Stripe', 'REST', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    caseStudyId: 'storeflow',
  },
  {
    id: 'chronochat',
    title: 'ChronoChat — Real-time Messenger',
    description: 'WebSocket-based messaging app with room management, media uploads via Cloudinary, read receipts, and cursor-based message pagination.',
    tags: ['Socket.io', 'Node', 'Cloudinary', 'Redis'],
    githubUrl: '#',
    caseStudyId: 'chronochat',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexahub',
    label: 'NexaHub SaaS',
    timeline: [
      { label: 'Problem', value: 'Teams lacked a unified workspace with real-time sync' },
      { label: 'Architecture', value: 'Redis pub/sub + MongoDB Atlas + Docker Compose' },
      { label: 'Security', value: 'JWT refresh tokens, RBAC, input validation' },
      { label: 'Scalability', value: 'Horizontal scaling, connection pooling, caching layers' },
      { label: 'Outcome', value: 'Handles 10k+ concurrent sessions with sub-50ms latency' },
    ],
    details: [
      { icon: '⚙', title: 'Technical Stack', content: ['React 18', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Socket.io', 'Docker', 'JWT', 'Cloudinary'] },
      { icon: '🔐', title: 'Security Strategy', content: 'Implemented role-based access control with three permission tiers. All API endpoints protected by middleware chains. Redis-backed token blacklisting for instant logout propagation. Rate limiting via express-rate-limit on all auth routes.' },
      { icon: '📈', title: 'Scalability Design', content: 'Stateless API layer behind a load balancer. Redis used both for caching and pub/sub to synchronize WebSocket events across multiple Node instances. MongoDB read replicas for analytics queries to avoid blocking writes.' },
      { icon: '🎨', title: 'UX Strategy', content: 'Optimistic UI updates for instant feedback. Skeleton loading screens. Persistent connection with graceful reconnect logic. Offline-aware state management ensuring no data loss during network interruptions.' },
    ],
  },
  {
    id: 'storeflow',
    label: 'StoreFlow',
    timeline: [
      { label: 'Problem', value: 'SMBs needed an affordable headless commerce solution' },
      { label: 'Architecture', value: 'RESTful API + Stripe webhooks + MongoDB aggregations' },
      { label: 'Security', value: 'PCI compliance strategy, webhook verification, CSRF' },
      { label: 'Performance', value: 'Product search with Mongoose indexes + Redis TTL caching' },
      { label: 'Outcome', value: 'Processing 500+ orders/day with 99.9% uptime' },
    ],
    details: [
      { icon: '💳', title: 'Payment Architecture', content: 'Stripe Checkout Sessions with webhook-driven order fulfillment. Idempotency keys on all payment operations. Stripe signature verification on every webhook endpoint. Automated invoice generation via Resend.' },
      { icon: '📦', title: 'Inventory System', content: 'MongoDB transactions for atomic stock updates. Pessimistic locking during checkout to prevent overselling. Automated low-stock notifications. Multi-variant product support with attribute matrices.' },
      { icon: '🔍', title: 'Search & Discovery', content: 'MongoDB text indexes with scoring and relevance weighting. Category faceting and dynamic filter generation. Redis-cached popular search queries for sub-10ms response times on common searches.' },
      { icon: '🏗', title: 'Multi-vendor Design', content: 'Isolated vendor data using tenant scoping at the MongoDB query layer. Stripe Connect for vendor payouts with platform fee splits. Vendor dashboard with real-time analytics via MongoDB change streams.' },
    ],
  },
  {
    id: 'chronochat',
    label: 'ChronoChat',
    timeline: [
      { label: 'Problem', value: 'Needed lightweight real-time chat with media support' },
      { label: 'Architecture', value: 'Socket.io rooms + JWT auth + Cloudinary uploads' },
      { label: 'Security', value: 'E2E encryption concept, token-gated socket connections' },
      { label: 'UX Focus', value: 'Typing indicators, read receipts, message search' },
      { label: 'Outcome', value: '< 20ms message delivery on local network tests' },
    ],
    details: [
      { icon: '🔌', title: 'Real-time Architecture', content: 'Socket.io with Redis adapter for horizontal scaling across multiple Node processes. Room-based event isolation. Presence system using heartbeat pings and TTL-based online status in Redis.' },
      { icon: '📁', title: 'File Handling', content: 'Cloudinary upload streams with size/type validation middleware. On-the-fly image transformations for thumbnail previews. Lazy-loaded media gallery with intersection observer. Signed upload URLs to prevent abuse.' },
      { icon: '💾', title: 'Message Persistence', content: 'MongoDB with compound indexes on (roomId + createdAt) for efficient pagination. Cursor-based infinite scroll. Message search using MongoDB Atlas Search. Soft deletes with message tombstones.' },
      { icon: '🔒', title: 'Auth & Security', content: 'Socket handshake authentication via JWT. Middleware validation before joining any room. Rate limiting on message emit events (30 msg/min). Content sanitization to prevent XSS in message payloads.' },
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
  { icon: '🏗', title: 'Full-Stack Development', description: 'End-to-end product development using MERN stack. From database modeling to React frontend.', items: ['MERN stack applications', 'Authentication & authorization', 'Database design & optimization', 'API architecture'] },
  { icon: '☁️', title: 'SaaS Systems', description: 'Complete SaaS product engineering with subscription billing, multi-tenancy, and dashboards.', items: ['Stripe subscription billing', 'Multi-tenant architecture', 'Role-based access control', 'Analytics & reporting'] },
  { icon: '🔌', title: 'API Development', description: 'Production-grade REST APIs with comprehensive documentation, testing, and security layers.', items: ['RESTful API design', 'Third-party integrations', 'Webhook systems', 'Rate limiting & caching'] },
  { icon: '🎨', title: 'UI/UX Implementation', description: 'Pixel-precise, accessible React frontends built from Figma designs or from scratch.', items: ['React component systems', 'Tailwind CSS design systems', 'Animation & micro-interactions', 'Responsive mobile-first UI'] },
  { icon: '⚡', title: 'Performance Optimization', description: 'Audit and optimize existing applications for speed, scalability, and resource efficiency.', items: ['Redis caching strategy', 'Database query optimization', 'Frontend bundle optimization', 'Load testing & bottleneck analysis'] },
  { icon: '🧑‍💻', title: 'Technical Consulting', description: 'Architecture reviews, code audits, and technical roadmap planning for growing teams.', items: ['Architecture review & planning', 'Code quality audits', 'Stack selection guidance', 'Engineering process consulting'] },
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
  { platform: 'yt', platformLabel: 'YouTube', title: 'MERN Auth System — Full Tutorial', meta: 'Mar 2024', stat: '48k views' },
  { platform: 'github', platformLabel: 'GitHub', title: 'express-rate-shield — npm package', meta: 'Feb 2024', stat: '320 stars' },
  { platform: 'tt', platformLabel: 'Dev.to', title: 'I built a SaaS in 30 days — Here\'s how', meta: 'Jan 2024', stat: '12k reads' },
];

import React, { useMemo, useState } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPython,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiCloudinary,
  SiRedis,
  SiWhatsapp,
  SiWordpress,
  SiGit,
  SiGithub,
  SiJira,
  SiTrello,
  SiNotion,
  SiClickup,
  SiSlack,
  SiDiscord,
  SiLinear,
  SiPostman,
  SiSwagger,
  SiDocker,
  SiFigma,
  SiGooglechrome,
  SiGithubactions,
  SiLinux,
  SiSupabase,
  SiKubernetes,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbLetterC, TbApi, TbDatabase, TbMail, TbShieldLock ,TbBrandVscode} from 'react-icons/tb';
import {
  Boxes,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDotDashed,
  ClipboardList,
  Crown,
  FileSearch,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  PackageCheck,
  Puzzle,
  Route,
  ServerCog,
  ShoppingCart,
  Store,
  UserRoundCheck,
  Users,
  Workflow,
  Wrench,
} from 'lucide-react';
import { Reveal } from '../ui/index';
import { SKILLS } from '../../data/index';
import type { SkillCategory } from '../../types/index';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { RiRobot3Fill } from 'react-icons/ri';

type SkillIcon = React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;

const TABS: { key: SkillCategory; label: string; theme: string }[] = [
  { key: 'all', label: 'All', theme: 'all' },
  { key: 'languages', label: 'Languages', theme: 'languages' },
  { key: 'frontend', label: 'Frontend', theme: 'frontend' },
  { key: 'backend', label: 'Backend', theme: 'backend' },
  { key: 'architecture', label: 'Architecture', theme: 'architecture' },
  { key: 'leadership', label: 'Leadership', theme: 'leadership' },
  { key: 'tools', label: 'Tools', theme: 'tools' },
];

const ICONS: Record<string, SkillIcon> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  go: SiGo,
  python: SiPython,
  java: FaJava,
  c: TbLetterC,
  react: SiReact,
  vite: SiVite,
  tailwind: SiTailwindcss,
  shadcn: SiShadcnui,
  framer: SiFramer,
  zustand: CircleDotDashed,
  seo: FileSearch,
  performance: Gauge,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mongoose: SiMongoose,
  auth: LockKeyhole,
  rbac: UserRoundCheck,
  multer: PackageCheck,
  cloudinary: SiCloudinary,
  redis: SiRedis,
  whatsapp: SiWhatsapp,
  email: TbMail,
  security: TbShieldLock,
  api: TbApi,
  microservices: Workflow,
  saas: Layers3,
  marketplace: Store,
  inventory: ShoppingCart,
  recruitment: BriefcaseBusiness,
  realtime: MessageSquareText,
  database: TbDatabase,
  wordpress: SiWordpress,
  ownership: Crown,
  leadership: Users,
  requirements: ClipboardList,
  planning: Route,
  coordination: GitBranch,
  debugging: Wrench,
  product: Puzzle,
  scaling: ChartNoAxesCombined,
  git: SiGit,
  github: SiGithub,
  jira: SiJira,
  trello: SiTrello,
  notion: SiNotion,
  clickup: SiClickup,
  slack: SiSlack,
  discord: SiDiscord,
  linear: SiLinear,
  postman: SiPostman,
  swagger: SiSwagger,
  docker: SiDocker,
  compose: Boxes,
  vscode: TbBrandVscode,
  figma: SiFigma,
  devtools: SiGooglechrome,
  cicd: SiGithubactions,
  linux: SiLinux,
  grpc: TiSocialGooglePlus,
  supabse: SiSupabase,
  agent: RiRobot3Fill,
  K8S: SiKubernetes,
};

const CATEGORY_META: Record<Exclude<SkillCategory, 'all'>, { label: string; note: string }> = {
  languages: { label: 'Programming language depth', note: 'Percentages reflect your stated proficiency.' },
  frontend: { label: 'Frontend delivery', note: 'React UI, tooling, styling, animation, SEO, and speed.' },
  backend: { label: 'Backend systems', note: 'APIs, auth, databases, files, OTP, caching, and security.' },
  architecture: { label: 'Product architecture', note: 'SaaS, marketplaces, multi-role platforms, and data systems.' },
  leadership: { label: 'Ownership & leadership', note: 'Planning, client specs, delivery, debugging, and product judgment.' },
  tools: { label: 'Workflow tools', note: 'Collaboration, API testing, deployment awareness, and daily engineering tools.' },
};

const StackSection: React.FC = () => {
  const [active, setActive] = useState<SkillCategory>('all');

  const filtered = useMemo(
    () => active === 'all' ? SKILLS : SKILLS.filter(s => s.category === active),
    [active],
  );

  const activeMeta = active === 'all'
    ? { label: 'Complete capability map', note: 'Filter the stack by category to inspect the exact tools and systems behind each project type.' }
    : CATEGORY_META[active];

  return (
    <section id="stack" className="skills-section">
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <Reveal>
            <div className="section-label">Tech stack</div>
            <h2 className="section-title">Real skills &amp; systems</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub" style={{ maxWidth: 380 }}>
              A filtered view of my programming languages, MERN stack, backend architecture, leadership skills, and production workflow.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="skills-categories">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`skill-tab${active === tab.key ? ' active' : ''}`}
              data-theme={tab.theme}
              type="button"
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
              <span>
                {tab.key === 'all' ? SKILLS.length : SKILLS.filter(skill => skill.category === tab.key).length}
              </span>
            </button>
          ))}
        </Reveal>

        <Reveal delay={2} className="skill-context">
          <div>
            <span>{activeMeta.label}</span>
            <p>{activeMeta.note}</p>
          </div>
          <strong>{filtered.length} skills</strong>
        </Reveal>

        <Reveal delay={2} className="skills-grid">
          {filtered.map(skill => {
            const Icon = ICONS[skill.icon] ?? ServerCog;

            return (
              <div key={skill.name} className="skill-card" data-cat={skill.category}>
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <strong>{skill.level}%</strong>
                </div>
                <div className="skill-name">{skill.name}</div>
                <p className="skill-summary">{skill.summary}</p>
                <div className="skill-meter" aria-label={`${skill.name} proficiency ${skill.level}%`}>
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default StackSection;

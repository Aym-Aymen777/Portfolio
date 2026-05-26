import React from 'react';
import { useTypewriter, useScrollReveal, useAnimatedCounter } from '../../hooks/index';
import { STATS } from '../../data/index';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ChatIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const GithubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ─── Stats Bar Item ───────────────────────────────────────────────────────────
interface StatItemProps {
  num: string;
  suffix: string;
  label: string;
  trigger: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ num, suffix, label, trigger }) => {
  const count = useAnimatedCounter(parseInt(num), trigger);
  return (
    <div className="stat-item">
      <div className="stat-num">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

// ─── Hero Visual Card ─────────────────────────────────────────────────────────
const HeroVisual: React.FC = () => {
  const role = useTypewriter(
    ['Full-Stack Engineer', 'SaaS Builder', 'API Architect', 'UI/UX Developer'],
    1000
  );

  return (
    <div className="hero-visual">
      <div className="avatar-card">
        <div className="avatar-ring">
          <span className="avatar-initials">AM</span>
        </div>
        <div className="avatar-name">Alex Mercer</div>
        <div className="avatar-role">{role}</div>
      </div>
      <div className="float-badge badge1">⚙ MERN Stack</div>
      <div className="float-badge badge2">🐳 Docker + Redis</div>
      <div className="float-badge badge3">✦ Open to work</div>
    </div>
  );
};

// ─── Stats Bar ────────────────────────────────────────────────────────────────
const StatsBar: React.FC = () => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`stats-bar reveal ${visible ? 'visible' : ''}`}>
      {STATS.map(stat => (
        <StatItem key={stat.label} {...stat} trigger={visible} />
      ))}
    </div>
  );
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection: React.FC = () => (
  <section style={{ paddingTop: 0, paddingBottom: 0 }}>
    <div className="container">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow">Available for new projects</div>
          <h1>
            Building systems<br />that{' '}
            <span className="line-accent">scale.</span><br />
            Designed to last.
          </h1>
          <p className="hero-desc">
            Full-stack MERN engineer crafting high-performance SaaS products,
            scalable APIs, and polished digital experiences — from architecture to pixel.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              <ArrowIcon />
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              <ChatIcon />
              Start a conversation
            </a>
          </div>
          <div className="hero-socials">
            <a href="#" className="social-link" aria-label="GitHub"><GithubIcon /></a>
            <a href="#" className="social-link" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href="#" className="social-link" aria-label="Twitter"><TwitterIcon /></a>
            <div className="social-divider" />
            <a href="mailto:alex@domain.dev" className="social-link" aria-label="Email"><EmailIcon /></a>
          </div>
        </div>

        <HeroVisual />
      </div>

      <StatsBar />
    </div>
  </section>
);

export default HeroSection;

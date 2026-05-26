import React from 'react';
import { useScrollReveal } from '../../hooks/index';

// ─── Section Header ───────────────────────────────────────────────────────────
interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;     // Changé : plus sûr que dangerouslySetInnerHTML
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, center, className = '' }) => (
  <div className={`section-header ${center ? 'center' : ''} ${className}`}>
    <div className="section-label">{label}</div>
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-sub">{subtitle}</p>}
  </div>
);

// ─── Tag / Badge ──────────────────────────────────────────────────────────────
export const Tag: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`tag ${className}`}>{children}</span>
);

// ─── Reveal Wrapper ───────────────────────────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
  as?: React.ElementType;   // Correction : plus de dépendance à JSX global
  style?: React.CSSProperties;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '', as: Tag = 'div', style }) => {
  const { ref, visible } = useScrollReveal() as { ref: React.RefObject<HTMLElement>; visible: boolean };
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`} style={style}>
      {children}
    </Tag>
  );
};

// ─── Glass Card ───────────────────────────────────────────────────────────────
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => (
  <div className={`glass-card ${className}`} onClick={onClick}>{children}</div>
);

// ─── Screen Mockup ────────────────────────────────────────────────────────────
export const ScreenMockup: React.FC<{ variant?: 'default' | 'grid' }> = ({ variant = 'default' }) => (
  <div className="project-preview">
    <div className="project-preview-lines" />
    <div className="project-preview-inner">
      <div className="project-screen">
        <div className="screen-bar">
          <div className="dot-red" />
          <div className="dot-yellow" />
          <div className="dot-green" />
        </div>
        <div className="screen-content">
          {variant === 'grid' ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                <div className="screen-line" style={{ height: 28, borderRadius: 4, background: 'rgba(0,200,255,0.1)' }} />
                <div className="screen-line" style={{ height: 28, borderRadius: 4, background: 'rgba(0,200,255,0.06)' }} />
              </div>
              <div className="screen-line" style={{ width: '90%' }} />
              <div className="screen-line short" />
            </>
          ) : (
            <>
              <div className="screen-line blue" style={{ width: '80%' }} />
              <div className="screen-line" style={{ width: '95%' }} />
              <div className="screen-line short" />
              <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
                <div className="screen-line" style={{ width: '45%', height: 32, borderRadius: 4, background: 'rgba(0,200,255,0.12)' }} />
                <div className="screen-line" style={{ width: '45%', height: 32, borderRadius: 4 }} />
              </div>
              <div className="screen-line shorter" />
              <div className="screen-line" style={{ height: 50, borderRadius: 4, background: 'rgba(0,200,255,0.06)' }} />
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

// ─── Section Divider ──────────────────────────────────────────────────────────
export const SectionDivider: React.FC = () => <div className="section-divider" />;

// ─── Link Button ─────────────────────────────────────────────────────────────
interface LinkBtnProps {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}

export const LinkBtn: React.FC<LinkBtnProps> = ({ href, primary, children }) => (
  <a href={href} className={`link-btn${primary ? ' primary-link' : ''}`}>{children}</a>
);
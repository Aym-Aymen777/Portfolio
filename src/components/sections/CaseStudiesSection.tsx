import React, { useState } from 'react';
import { Reveal } from '../ui/index';
import { CASE_STUDIES } from '../../data/index';
import type { CaseStudy } from '../../types/index';

const CaseTimeline: React.FC<{ steps: CaseStudy['timeline'] }> = ({ steps }) => (
  <div className="case-timeline">
    {steps.map(step => (
      <div key={step.label} className="timeline-step">
        <h4>{step.label}</h4>
        <p>{step.value}</p>
      </div>
    ))}
  </div>
);

const DetailBlock: React.FC<{ icon: string; title: string; content: string | string[] }> = ({
  icon, title, content
}) => (
  <div className="detail-block">
    <h4>{icon} {title}</h4>
    {Array.isArray(content) ? (
      <div>{content.map(c => <span key={c} className="arch-badge">{c}</span>)}</div>
    ) : (
      <p>{content}</p>
    )}
  </div>
);

const CaseStudiesSection: React.FC = () => {
  const [activeId, setActiveId] = useState(CASE_STUDIES[0].id);
  const active = CASE_STUDIES.find(c => c.id === activeId)!;

  return (
    <section id="case-studies" className="case-section">
      <div className="container">
        <Reveal style={{ marginBottom: '3rem' } as React.CSSProperties}>
          <div className="section-label">Deep dive</div>
          <h2 className="section-title">Case studies</h2>
          <p className="section-sub">
            Technical breakdowns of architecture decisions, challenges, and solutions.
          </p>
        </Reveal>

        <Reveal delay={1} className="case-tabs">
          {CASE_STUDIES.map(cs => (
            <button
              key={cs.id}
              className={`case-tab${activeId === cs.id ? ' active' : ''}`}
              onClick={() => setActiveId(cs.id)}
            >
              {cs.label}
            </button>
          ))}
        </Reveal>

        <div className="case-content active">
          <div className="case-grid">
            <CaseTimeline steps={active.timeline} />
            <div className="case-detail-blocks">
              {active.details.map(d => (
                <DetailBlock key={d.title} icon={d.icon} title={d.title} content={d.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;

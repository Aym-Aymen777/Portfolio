import React from 'react';
import { Reveal, Tag } from '../ui/index';
import { EXPERIENCE } from '../../data/index';

const ExperienceSection: React.FC = () => (
  <section id="experience">
    <div className="container">
      <Reveal style={{ marginBottom: '3.5rem' } as React.CSSProperties}>
        <div className="section-label">Journey</div>
        <h2 className="section-title">Professional timeline</h2>
      </Reveal>

      <div className="exp-timeline">
        {EXPERIENCE.map((item, i) => (
          <Reveal
            key={item.period}
            delay={(i % 4) as 0 | 1 | 2 | 3}
            className="exp-item"
          >
            <div className="exp-date">
              <div className="year">{item.period}</div>
              <div className="duration">{item.duration}</div>
            </div>
            <div className="exp-dot" />
            <div className="exp-content">
              <div className="exp-role">{item.role}</div>
              <div className="exp-company">{item.company}</div>
              <p className="exp-desc">{item.description}</p>
              <div className="exp-tags">
                {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;

import React, { useState } from 'react';
import { Reveal } from '../ui/index';
import { SKILLS } from '../../data/index';
import type { SkillCategory } from '../../types/index';

const TABS: { key: SkillCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'devops', label: 'DevOps' },
  { key: 'tools', label: 'Tools' },
];

const SkillDots: React.FC<{ level: number }> = ({ level }) => (
  <div className="skill-level">
    {Array.from({ length: 5 }, (_, i) => (
      <div key={i} className={`dot${i < level ? ' active' : ''}`} />
    ))}
  </div>
);

const StackSection: React.FC = () => {
  const [active, setActive] = useState<SkillCategory>('all');

  const filtered = active === 'all' ? SKILLS : SKILLS.filter(s => s.category === active);

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
            <h2 className="section-title">Tools of the craft</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub" style={{ maxWidth: 380 }}>
              A curated set of technologies I use to build, ship, and scale modern software products.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="skills-categories">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`skill-tab${active === tab.key ? ' active' : ''}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <Reveal delay={2} className="skills-grid">
          {filtered.map(skill => (
            <div key={skill.name} className="skill-card" data-cat={skill.category}>
              <span className="skill-icon">{skill.icon}</span>
              <div className="skill-name">{skill.name}</div>
              <SkillDots level={skill.level} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default StackSection;

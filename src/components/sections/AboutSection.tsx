import React from 'react';
import { Reveal, SectionHeader } from '../ui/index';
import { ABOUT_CARDS } from '../../data/index';

const AboutSection: React.FC = () => (
  <section id="about">
    <div className="container">
      <div className="about-grid">
        <Reveal className="about-text">
          <SectionHeader label="About me" title="Engineer by trade,
          builder by passion" />
          <p>
            I'm a full-stack developer specializing in the MERN ecosystem, with a deep interest
            in scalable system architecture, real-time applications, and SaaS product development.
          </p>
          <p>
            My approach blends <strong>strong technical engineering</strong> with{' '}
            <strong>thoughtful UX design</strong> — I believe great software must be both
            technically excellent and enjoyable to use.
          </p>
          <p>
            When I'm not building production-grade APIs or optimizing Docker pipelines, I create
            technical content for developers, contributing to a growing community of builders
            across multiple platforms.
          </p>
          <div className="philosophy-card">
            <blockquote>
              "Write code that your future self will thank you for — clean, documented,
              tested, and built to evolve."
            </blockquote>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="about-cards">
            {ABOUT_CARDS.map(card => (
              <div key={card.title} className="about-mini-card">
                <div className="icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default AboutSection;

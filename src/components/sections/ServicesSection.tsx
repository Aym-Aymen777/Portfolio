import React from 'react';
import { Reveal } from '../ui/index';
import { SERVICES } from '../../data/index';

const ServicesSection: React.FC = () => (
  <section id="services">
    <div className="container">
      <Reveal style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 3.5rem' } as React.CSSProperties}>
        <div className="section-label">What I offer</div>
        <h2 className="section-title">Services &amp; expertise</h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Focused, professional services crafted for startups, agencies, and ambitious product teams.
        </p>
      </Reveal>

      <div className="services-grid">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 3) as 0 | 1 | 2} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <div className="service-title">{service.title}</div>
            <p className="service-desc">{service.description}</p>
            <ul className="service-list">
              {service.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

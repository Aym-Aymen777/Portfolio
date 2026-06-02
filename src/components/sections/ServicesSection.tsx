import React, { useMemo, useState } from 'react';
import { Reveal } from '../ui/index';
import { SERVICES } from '../../data/index';
import type { ServiceCategory } from '../../types/index';

const FILTERS: { key: ServiceCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'websites', label: 'Websites' },
  { key: 'commerce', label: 'E-commerce' },
  { key: 'apps', label: 'Apps & SaaS' },
  { key: 'backend', label: 'Backend' },
  { key: 'ops', label: 'DevOps' },
  { key: 'growth', label: 'SEO' },
  { key: 'support', label: 'Support' },
];

const ServicesSection: React.FC = () => {
  const [active, setActive] = useState<ServiceCategory>('all');

  const filteredServices = useMemo(
    () => active === 'all' ? SERVICES : SERVICES.filter(service => service.category === active),
    [active],
  );

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-head">
          <Reveal>
            <div className="section-label">Services</div>
            <h2 className="section-title">Build packages &amp; pricing</h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="section-sub">
              Filter by project type and choose the closest starting point for your website, SaaS, backend, or support need.
            </p>
          </Reveal>
        </div>

        <Reveal delay={1} className="service-filters">
          {FILTERS.map(filter => (
            <button
              key={filter.key}
              className={`service-filter${active === filter.key ? ' active' : ''}`}
              type="button"
              onClick={() => setActive(filter.key)}
            >
              {filter.label}
              <span>
                {filter.key === 'all'
                  ? SERVICES.length
                  : SERVICES.filter(service => service.category === filter.key).length}
              </span>
            </button>
          ))}
        </Reveal>

        <div className="services-grid">
          {filteredServices.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) as 0 | 1 | 2 | 3} className="service-card">
              <div className="service-card-top">
                <div className="service-icon">{service.icon}</div>
                <div className="service-price">{service.price}</div>
              </div>
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
};

export default ServicesSection;

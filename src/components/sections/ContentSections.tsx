import React from 'react';
import { Reveal, SectionHeader } from '../ui/index';
import { CERTS, CONTENT_ITEMS, BLOG_POSTS } from '../../data/index';

// ─── Certifications ───────────────────────────────────────────────────────────
export const CertsSection: React.FC = () => (
  <section id="certifications">
    <div className="container">
      <Reveal style={{ marginBottom: '3rem' } as React.CSSProperties}>
        <SectionHeader label="Credentials" title="Certifications" />
      </Reveal>
      <div className="certs-grid">
        {CERTS.map((cert, i) => (
          <Reveal key={cert.name} delay={(i % 3) as 0 | 1 | 2} className="cert-card">
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-name">{cert.name}</div>
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-date">{cert.date}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── Content ──────────────────────────────────────────────────────────────────
export const ContentSection: React.FC = () => (
  <section id="content">
    <div className="container">
      <Reveal style={{ marginBottom: '3rem' } as React.CSSProperties}>
        <SectionHeader label="Content" title="Creator & contributor" subtitle="Technical tutorials, open-source tools, and articles for the developer community." />
      </Reveal>
      <div className="content-grid">
        {CONTENT_ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) as 0 | 1 | 2} className="content-card">
            <div className={`platform-badge ${item.platform}`}>{item.platformLabel}</div>
            <div className="content-title">{item.title}</div>
            <div className="content-meta">{item.meta}</div>
            <div className="content-stat">{item.stat}</div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

// ─── Blog ─────────────────────────────────────────────────────────────────────
export const BlogSection: React.FC = () => (
  <section id="blog">
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
        <Reveal>
          <div className="section-label">Writing</div>
          <h2 className="section-title">Technical articles</h2>
        </Reveal>
        <Reveal delay={1}>
          <a href="#" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
            View all posts →
          </a>
        </Reveal>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post, i) => (
          <Reveal key={post.num} delay={(i % 3) as 0 | 1 | 2} className={`blog-card${post.featured ? ' featured' : ''}`}>
            <div className="blog-banner" style={{ height: post.featured ? 200 : 100 }}>
              <div className="blog-banner-inner" />
              <div className="blog-num">{post.num}</div>
            </div>
            <div className="blog-body">
              <div className="blog-category">{post.category}</div>
              <div className="blog-title">{post.title}</div>
              {post.excerpt && <div className="blog-excerpt">{post.excerpt}</div>}
              <div className="blog-meta">
                <span className="blog-author">{post.meta}</span>
                <a href="#" className="read-more">Read →</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

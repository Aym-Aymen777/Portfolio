import React, { useState } from 'react';
import { Reveal } from '../ui/index';

const EmailSvg = () => (
  <svg width="18" height="18" fill="none" stroke="#1de9f7" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const GithubSvg = () => (
  <svg width="18" height="18" fill="#1de9f7" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInSvg = () => (
  <svg width="18" height="18" fill="#1de9f7" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const CONTACT_LINKS = [
  { icon: <EmailSvg />, label: 'Email', value: 'aymenchairi418@gmail.com', href: 'mailto:aymenchairi418@gmail.com' },
  { icon: <GithubSvg />, label: 'GitHub', value: 'github.com/Aym-Aymen777', href: 'https://github.com/Aym-Aymen777' },
  { icon: <LinkedInSvg />, label: 'LinkedIn', value: 'https://www.linkedin.com/in/c-aymen/', href: 'https://www.linkedin.com/in/c-aymen/' },
];

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ fn: '', ln: '', email: '', svc: '', msg: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [key]: e.target.value }));

  return (
    <div
      className="contact-form"
      style={{
        background: 'var(--glass)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        padding: '2rem',
        backdropFilter: 'blur(20px)',
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fn">First name</label>
            <input id="fn" type="text" placeholder="Enter your first name" value={form.fn} onChange={set('fn')} />
          </div>
          <div className="form-group">
            <label htmlFor="ln">Last name</label>
            <input id="ln" type="text" placeholder="Enter your last name" value={form.ln} onChange={set('ln')} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder="Enter your email address" value={form.email} onChange={set('email')} />
        </div>
        <div className="form-group">
          <label htmlFor="svc">Service needed</label>
          <select id="svc" value={form.svc} onChange={set('svc')}>
            <option value="">Select a service...</option>
            <option>Full-stack development</option>
            <option>SaaS product</option>
            <option>API development</option>
            <option>UI/UX implementation</option>
            <option>Technical consulting</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="msg">Message</label>
          <textarea id="msg" placeholder="Tell me about your project..." value={form.msg} onChange={set('msg')} />
        </div>
        <button
          type="submit"
          className="submit-btn"
          style={submitted ? {
            background: 'linear-gradient(135deg, #0f6e56, #085041)',
            color: '#9bf5ff',
          } : { marginTop: '1rem', padding: '0.75rem 1.5rem', borderRadius: 8, border: 'none', cursor: 'pointer' }}

        >
          {submitted ? '✓ Message sent!' : 'Send message →'}
        </button>
      </form>
    </div>
  );
};

const ContactSection: React.FC = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <div className="contact-inner">
        <Reveal className="contact-left">
          <div className="section-label">Get in touch</div>
          <h2 className="section-title">Let's build something great together.</h2>
          <p>
            Have a project in mind? Looking for a senior full-stack developer to join your team?
            Let's talk about how I can help bring your vision to life.
          </p>
          <div className="contact-info">
            {CONTACT_LINKS.map(link => (
              <a key={link.label} href={link.href} className="contact-item">
                <div className="contact-item-icon">{link.icon}</div>
                <div className="contact-item-text">
                  <div className="label">{link.label}</div>
                  <div className="val">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactSection;

import React from 'react';

const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <div className="footer-inner">
        <div className="footer-logo">AYM.dev</div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copy">© 2024 Alex Mercer. Built with precision.</div>
      </div>
    </div>
  </footer>
);

export default Footer;

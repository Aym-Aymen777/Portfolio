import React, { useState } from 'react';
import { useNavbarScroll } from '../../hooks';
import { NAV_LINKS } from '../../data';

const Navbar: React.FC = () => {
  const scrolled = useNavbarScroll();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">AYMEN<span> Chairi</span></a>
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta">Let's talk →</a>
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;

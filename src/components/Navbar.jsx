import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'Services',  to: '/services' },
  { label: 'Equipment', to: '/equipment' },
  { label: 'Why Us',    to: '/why-us' },
  { label: 'About',     to: '/about' },
  { label: 'Locations', to: '/locations' },
  { label: 'Contact',   to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src="/logo.png" alt="Humble Health Care Services Logo" className="navbar-logo" />
          <span className="navbar-brand-text">
            <span className="brand-main">Humble Health Care</span>
            <span className="brand-sub">Services</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${isActive(link.to) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary nav-cta">
            Get Care Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav id="mobile-menu" className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`mobile-link${isActive(link.to) ? ' active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/contact" className="btn-primary mobile-cta">
          Get Care Now
        </Link>
      </nav>
    </header>
  );
}

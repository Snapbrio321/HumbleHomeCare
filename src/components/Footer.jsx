import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './Footer.css';

const quickLinks = [
  { label: 'Home',              to: '/' },
  { label: 'Our Services',      to: '/services' },
  { label: 'Medical Equipment', to: '/equipment' },
  { label: 'Why Choose Us',     to: '/why-us' },
  { label: 'About Us',          to: '/about' },
  { label: 'Our Locations',     to: '/locations' },
  { label: 'Contact Us',        to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Humble Health Care Services - Home">
              <img src="/logo.png" alt="Humble Health Care Services Logo" className="footer-logo" />
            </Link>
            <h2 className="footer-brand-name">Humble Health Care Services</h2>
            <p className="footer-brand-tagline">
              <em>Compassionate Care. Trusted Support. Better Living.</em>
            </p>
            <p className="footer-brand-desc">
              Providing reliable, personalized healthcare support to individuals,
              elderly people, patients, and families since 2018.
            </p>
            <div className="footer-since">
              <span>🏅</span> Trusted Healthcare Since 2018
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3 className="footer-col-title">Our Services</h3>
            <ul className="footer-links">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="footer-link">
                    <span aria-hidden="true">›</span> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    <span aria-hidden="true">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h3 className="footer-col-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li>
                <span aria-hidden="true">📞</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="tel:+919666566846">+91 96665 66846</a>
                  <a href="tel:+919666566881">+91 96665 66881</a>
                </div>
              </li>
              <li>
                <span aria-hidden="true" style={{ color: '#25D366' }}>
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z" />
                  </svg>
                </span>
                <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </li>
              <li>
                <span aria-hidden="true">✉️</span>
                <a href="mailto:info@humblehealthcare.com">info@humblehealthcare.com</a>
              </li>
              <li>
                <span aria-hidden="true">🕐</span>
                <span>24 / 7 Available</span>
              </li>
            </ul>
            <Link to="/contact" className="btn-primary footer-cta">
              Get Care Today
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© {year} Humble Health Care Services. All rights reserved.</p>
          <p className="footer-motto"><em>We care for your loved ones like family.</em></p>
        </div>
      </div>
    </footer>
  );
}

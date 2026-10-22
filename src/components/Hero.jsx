import { useEffect, useRef } from 'react';
import './Hero.css';

const stats = [
  { value: '2018', label: 'Established' },
  { value: '500+', label: 'Patients Served' },
  { value: '24/7', label: 'Care Available' },
  { value: '100%', label: 'Compassionate' },
];

const mobileBadges = [
  { icon: '🏠', label: 'Home Care Services' },
  { icon: '🏥', label: 'Professional Care' },
  { icon: '💊', label: 'Post-Surgery Care' },
  { icon: '👴', label: 'Elderly Care' },
  { icon: '🩺', label: 'Patient Attendant' },
  { icon: '❤️', label: 'With Compassion' },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add('loaded'), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef} aria-label="Welcome to Humble Health Care Services">
      {/* Decorative blobs */}
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="container hero-inner">
        {/* ── Left Content ── */}
        <div className="hero-content">
          <span className="hero-badge">Since 2018 · Trusted Healthcare</span>

          <h1 className="hero-heading">
            Compassionate Care<br />
            <span className="hero-heading-accent">At Your Doorstep</span>
          </h1>

          <p className="hero-tagline">
            <em>Compassionate Care. Trusted Support. Better Living.</em>
          </p>

          <p className="hero-desc">
            We provide reliable, personalized healthcare support to individuals,
            elderly people, patients, and families — right at home, with dignity
            and professionalism.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l1.06-1.06a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Get Care Today
            </a>
            <a href="#services" className="btn-outline hero-outline-btn">
              Our Services
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Right Visual ── */}
        <div className="hero-visual">
          <div className="hero-logo-wrap">
            <img src="/logo.png" alt="Humble Health Care Services" className="hero-logo-img" />
            <div className="hero-logo-ring hero-logo-ring-1" aria-hidden="true" />
            <div className="hero-logo-ring hero-logo-ring-2" aria-hidden="true" />
          </div>

          {/* Desktop floating badges — hidden on mobile via CSS */}
          <div className="hero-float hero-float-top-right" aria-hidden="true">
            <span className="float-icon">🏥</span>
            <span>Professional Care</span>
          </div>
          <div className="hero-float hero-float-top-left" aria-hidden="true">
            <span className="float-icon">🏠</span>
            <span>Home Care Services</span>
          </div>
          <div className="hero-float hero-float-mid-right" aria-hidden="true">
            <span className="float-icon">👴</span>
            <span>Elderly Care</span>
          </div>
          <div className="hero-float hero-float-mid-left" aria-hidden="true">
            <span className="float-icon">💊</span>
            <span>Post-Surgery Care</span>
          </div>
          <div className="hero-float hero-float-bottom-right" aria-hidden="true">
            <span className="float-icon">🩺</span>
            <span>Patient Attendant</span>
          </div>
          <div className="hero-float hero-float-bottom-left" aria-hidden="true">
            <span className="float-icon">❤️</span>
            <span>With Compassion</span>
          </div>
          <div className="hero-float hero-float-equip" aria-hidden="true">
            <span className="float-icon">🛒</span>
            <div>
              <span className="float-label">Medical Equipments</span>
              <span className="float-sub">Rent / Buy</span>
            </div>
          </div>

          {/* Mobile badges strip — shown only on mobile via CSS */}
          <div className="hero-badges-strip" aria-hidden="true">
            {mobileBadges.map((b) => (
              <div className="hero-badge-item" key={b.label}>
                <span className="badge-icon">{b.icon}</span>
                <span className="badge-text">{b.label}</span>
              </div>
            ))}
            {/* Medical Equipment — full-width row */}
            <div className="hero-badge-item equip">
              <span className="badge-icon">🛒</span>
              <span className="badge-text">
                Medical Equipments
                <small>Rent / Buy</small>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar">
        <div className="container hero-stats-inner">
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

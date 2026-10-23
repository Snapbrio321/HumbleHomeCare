import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WhyUsPage.css';
import SEO from '../components/SEO';

const reasons = [
  { icon: '❤️',  num: '01', title: 'Compassionate Care',        desc: 'Every patient is treated with kindness, empathy, and genuine concern for their well-being. Compassion is the foundation of everything we do.' },
  { icon: '📋',  num: '02', title: 'Personalized Care Plans',   desc: 'Care is tailored to each individual\'s unique health needs, daily routines, and personal preferences — no one-size-fits-all approach.' },
  { icon: '👴',  num: '03', title: 'Elderly & Patient Support', desc: 'Specialized support designed to meet the distinct needs of seniors and patients who require additional help and attention.' },
  { icon: '🏡',  num: '04', title: 'Convenient Care at Home',   desc: 'High-quality healthcare delivered right at home — no need to travel, no unfamiliar environments, just comfort and familiarity.' },
  { icon: '🛡️', num: '05', title: 'Dignity & Safety First',    desc: 'We prioritize the comfort, dignity, and safety of every person in our care — always, without exception.' },
  { icon: '👨‍👩‍👧', num: '06', title: 'Family Peace of Mind',    desc: 'Families and caregivers can rest easy knowing their loved ones are in trusted, compassionate, professional hands.' },
  { icon: '⭐',  num: '07', title: '9+ Years of Experience',    desc: 'Over nine years serving patients and families gives us the insight and capability to deliver truly effective care support.' },
  { icon: '🕐',  num: '08', title: '24/7 Availability',         desc: 'Healthcare needs don\'t follow a schedule. Our team is available around the clock to support patients and families whenever needed.' },
  { icon: '🤝',  num: '09', title: 'Trusted Relationships',     desc: 'We build lasting relationships with patients and families based on honesty, transparency, and consistent quality of care.' },
];

const stats = [
  { value: '9+',   label: 'Years of Experience' },
  { value: '500+', label: 'Patients Served' },
  { value: '24/7', label: 'Care Available' },
  { value: '100%', label: 'Patient-Centered' },
];

export default function WhyUsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Why Choose Us | Humble Health Care Services';
    return () => { document.title = 'Humble Health Care Services'; };
  }, []);

  return (
    <main className="why-page">
      <SEO
        title="Why Choose Us � Best Home Healthcare in Visakhapatnam"
        description="Why families trust Humble Health Care Services � 9+ years of experience, 500+ patients served, compassionate care, personalized plans, 24/7 availability. The best home healthcare provider in Visakhapatnam and Andhra Pradesh."
        keywords="best home nursing care Visakhapatnam, trusted home healthcare Vizag, why choose home care services, home nursing agency Andhra Pradesh, experienced home care Vizag, 24 7 home nursing care"
        canonical="/why-us"
      />

      {/* Hero */}
      <section className="wp-hero">
        <div className="wp-hero-bg" aria-hidden="true" />
        <div className="container wp-hero-inner">
          <nav className="wp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span aria-current="page">Why Choose Us</span>
          </nav>
          <h1 className="wp-hero-title">
            Why Choose <span className="wp-accent">Humble Health Care?</span>
          </h1>
          <p className="wp-hero-desc">
            Discover what sets us apart — compassionate professionals, personalized service, and a genuine
            commitment to the well-being of every patient and family we serve.
          </p>
          {/* Stats */}
          <div className="wp-stats">
            {stats.map((s) => (
              <div key={s.label} className="wp-stat">
                <span className="wp-stat-value">{s.value}</span>
                <span className="wp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="wp-reasons section-pad">
        <div className="container">
          <div className="wp-section-header">
            <h2 className="section-title">The Humble Difference</h2>
            <div className="divider" aria-hidden="true" />
            <p className="section-subtitle">Nine reasons families across the region trust us with their most important people.</p>
          </div>
          <div className="wp-grid">
            {reasons.map((r) => (
              <div key={r.num} className="wp-card">
                <div className="wp-card-num" aria-hidden="true">{r.num}</div>
                <div className="wp-card-icon" aria-hidden="true">{r.icon}</div>
                <h3 className="wp-card-title">{r.title}</h3>
                <p className="wp-card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise banner */}
      <section className="wp-promise section-pad">
        <div className="container">
          <div className="wp-promise-inner">
            <div className="wp-promise-logo">
              <img src="/logo.png" alt="Humble Health Care Services" />
            </div>
            <div className="wp-promise-text">
              <h2 className="wp-promise-title">Our Promise to Every Family</h2>
              <p>
                At Humble Health Care Services, we treat your loved ones like our own family.
                Every caregiver, every visit, every interaction is guided by our core values of
                compassion, dignity, trust, and respect.
              </p>
              <blockquote className="wp-promise-quote">
                "Your Health, Our Priority. Your Comfort, Our Commitment."
              </blockquote>
              <div className="wp-promise-actions">
                <Link to="/contact" className="btn-primary">Get Care Today</Link>
                <Link to="/services" className="btn-outline wp-outline">Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

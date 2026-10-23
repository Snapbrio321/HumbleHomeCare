import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServicesPage.css';
import SEO from '../components/SEO';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Our Services | Humble Health Care Services';
    return () => { document.title = 'Humble Health Care Services'; };
  }, []);

  return (
    <main className="services-page">
      <SEO
        title="Home Care Services � Nursing, Elderly, Post-Surgery Care | Visakhapatnam"
        description="Explore all home care services by Humble Health Care Services � home nursing care, elderly care, patient attendant, hospital attendant, post-surgery care and personal care. Available 24/7 in Visakhapatnam, Vijayawada and Andhra Pradesh."
        keywords="home nursing care Visakhapatnam, elderly care services Vizag, patient attendant Andhra Pradesh, post surgery care at home, hospital care attendant, personal care services Vizag, home care services near me, nursing at home Vijayawada"
        canonical="/services"
      />

      {/* Hero */}
      <section className="sp-hero">
        <div className="sp-hero-bg" aria-hidden="true" />
        <div className="container sp-hero-inner">
          <nav className="sp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span aria-current="page">Services</span>
          </nav>
          <h1 className="sp-hero-title">Our <span className="sp-accent">Healthcare Services</span></h1>
          <p className="sp-hero-desc">
            Comprehensive, compassionate home healthcare support — tailored to every patient, delivered with dignity.
            Click on any service to learn more.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="sp-grid-section section-pad">
        <div className="container">
          <div className="sp-grid">
            {servicesData.map((service) => (
              <Link
                key={service.id}
                to={service.slug}
                className={`sp-card sp-card--${service.color}`}
                aria-label={`Learn about ${service.title}`}
              >
                {/* Top accent */}
                <div className="sp-card-top">
                  <div className="sp-card-icon">{service.icon}</div>
                  <div className="sp-card-tag">{service.tagline}</div>
                </div>

                <h2 className="sp-card-title">{service.title}</h2>
                <p className="sp-card-desc">{service.heroDesc.slice(0, 130)}…</p>

                <ul className="sp-card-points">
                  {service.points.map((p) => (
                    <li key={p}>
                      <span className={`sp-check sp-check--${service.color}`} aria-hidden="true">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="sp-card-learn">
                  <span>Learn More</span>
                  <span className="sp-arrow" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="sp-cta-section">
        <div className="container sp-cta-inner">
          <div className="sp-cta-text">
            <h2 className="sp-cta-title">Not sure which service you need?</h2>
            <p>Speak to our care team and we'll help you find the right support for your loved ones.</p>
          </div>
          <div className="sp-cta-actions">
            <Link to="/contact" className="btn-primary">Contact Us Today</Link>
            <a href="tel:+919666566846" className="btn-outline sp-outline">📞 9666 566 846</a>
          </div>
        </div>
      </section>

    </main>
  );
}

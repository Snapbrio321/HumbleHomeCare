import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (service) document.title = `${service.title} | Humble Health Care Services`;
    return () => { document.title = 'Humble Health Care Services'; };
  }, [service]);

  if (!service) {
    return (
      <div className="svc-not-found">
        <h2>Service not found</h2>
        <button onClick={() => navigate('/services')} className="btn-primary">Back to Services</button>
      </div>
    );
  }

  // Other services (excluding current)
  const others = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main className="svc-detail-page">

      {/* ── Hero ─────────────────────────────────── */}
      <section className={`svc-hero svc-hero--${service.color}`} aria-label={service.title}>
        <div className="container svc-hero-inner">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <div className="svc-hero-content">
            <div className="svc-hero-icon">{service.icon}</div>
            <div className="svc-hero-text">
              <span className="svc-hero-tag">{service.tagline}</span>
              <h1 className="svc-hero-title">{service.title}</h1>
              <p className="svc-hero-desc">{service.heroDesc}</p>
              <div className="svc-hero-actions">
                <Link to="/contact" className="btn-primary">Book This Service</Link>
                <Link to="/services" className="btn-outline svc-outline-btn">All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Cover ─────────────────────────── */}
      <section className="svc-includes section-pad">
        <div className="container">
          <div className="svc-includes-grid">

            {/* Key points */}
            <div className="svc-points-card">
              <h2 className="svc-section-title">What's Included</h2>
              <ul className="svc-key-points">
                {service.points.map((p) => (
                  <li key={p}>
                    <span className={`svc-check svc-check--${service.color}`} aria-hidden="true">✓</span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="svc-why-choose">
                <h3 className="svc-why-title">Why Choose Us for This Service</h3>
                <ul className="svc-why-list">
                  {service.whyChoose.map((w) => (
                    <li key={w}>
                      <span className="svc-dot" aria-hidden="true" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA card */}
            <div className={`svc-cta-card svc-cta-card--${service.color}`}>
              <div className="svc-cta-icon">{service.icon}</div>
              <h3 className="svc-cta-title">Ready to Get Started?</h3>
              <p className="svc-cta-desc">
                Contact us today to discuss your requirements and arrange the right care support for your loved ones.
              </p>
              <Link to="/contact" className="btn-primary svc-cta-btn">Contact Us Now</Link>
              <a href="tel:+919666566846" className="svc-phone-link">
                <span>📞</span> +91 96665 66846
              </a>
              <a href="tel:+919666566881" className="svc-phone-link">
                <span>📞</span> +91 96665 66881
              </a>
              <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer" className="svc-whatsapp-link">
                <svg viewBox="0 0 32 32" width="18" height="18" fill="#25D366"><path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights grid ──────────────────────── */}
      <section className="svc-highlights section-pad">
        <div className="container">
          <h2 className="svc-section-title text-center">What We Provide</h2>
          <p className="svc-section-sub">A comprehensive breakdown of everything included in this service.</p>
          <div className="svc-highlights-grid">
            {service.highlights.map((h) => (
              <div key={h.title} className={`svc-highlight-card svc-highlight-card--${service.color}`}>
                <span className="svc-highlight-icon" aria-hidden="true">{h.icon}</span>
                <h3 className="svc-highlight-title">{h.title}</h3>
                <p className="svc-highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services ───────────────────────── */}
      <section className="svc-others section-pad">
        <div className="container">
          <h2 className="svc-section-title text-center">Other Services We Offer</h2>
          <div className="svc-others-grid">
            {others.map((s) => (
              <Link key={s.id} to={s.slug} className={`svc-other-card svc-other-card--${s.color}`}>
                <div className="svc-other-icon">{s.icon}</div>
                <div>
                  <h3 className="svc-other-title">{s.title}</h3>
                  <p className="svc-other-tag">{s.tagline}</p>
                </div>
                <span className="svc-other-arrow" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
          <div className="svc-others-cta">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

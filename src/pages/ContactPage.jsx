import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

export default function ContactPage() {
  const [form, setForm]   = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Contact Us | Humble Health Care Services';
    return () => { document.title = 'Humble Health Care Services'; };
  }, []);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="cp-hero">
        <div className="cp-hero-bg" aria-hidden="true" />
        <div className="container cp-hero-inner">
          <nav className="cp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span aria-current="page">Contact Us</span>
          </nav>
          <h1 className="cp-hero-title">Get in <span className="cp-accent">Touch with Us</span></h1>
          <p className="cp-hero-desc">
            We care for your loved ones like family. Reach out today and let's find the right
            care support for your needs.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="cp-body section-pad">
        <div className="container">
          <div className="cp-grid">

            {/* Left info panel */}
            <div className="cp-info">
              <h2 className="cp-info-title">Contact Information</h2>
              <p className="cp-info-sub">
                Our team is available 24/7 to help you find the most suitable care option.
                Don't hesitate to reach out.
              </p>

              <div className="cp-details">
                <a href="tel:+919666566846" className="cp-detail cp-detail--link">
                  <div className="cp-detail-icon cp-icon--blue">📞</div>
                  <div>
                    <div className="cp-detail-label">Call Us</div>
                    <div className="cp-detail-value">9666 566 846</div>
                    <div className="cp-detail-value" style={{ marginTop: '0.2rem' }}>9666 566 881</div>
                  </div>
                </a>

                <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer" className="cp-detail cp-detail--link">
                  <div className="cp-detail-icon cp-icon--green">
                    <svg viewBox="0 0 32 32" width="22" height="22" fill="#25D366"><path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/></svg>
                  </div>
                  <div>
                    <div className="cp-detail-label">WhatsApp</div>
                    <div className="cp-detail-value">Chat on WhatsApp</div>
                  </div>
                </a>

                <a href="mailto:jillepalliab@gmail.com" className="cp-detail cp-detail--link">
                  <div className="cp-detail-icon cp-icon--orange">✉️</div>
                  <div>
                    <div className="cp-detail-label">Email Us</div>
                    <div className="cp-detail-value">jillepalliab@gmail.com</div>
                  </div>
                </a>

                <div className="cp-detail">
                  <div className="cp-detail-icon cp-icon--blue">🕐</div>
                  <div>
                    <div className="cp-detail-label">Availability</div>
                    <div className="cp-detail-value">24 / 7 — Always Here for You</div>
                  </div>
                </div>

                <div className="cp-detail">
                  <div className="cp-detail-icon cp-icon--orange">📅</div>
                  <div>
                    <div className="cp-detail-label">Since</div>
                    <div className="cp-detail-value">2018 — Trusted by Families</div>
                  </div>
                </div>
              </div>

              <div className="cp-tagline">
                <img src="/logo.png" alt="" aria-hidden="true" className="cp-mini-logo" />
                <p><em>"We care for your loved ones like family."</em></p>
              </div>
            </div>

            {/* Right form */}
            <div className="cp-form-wrap">
              {status === 'success' ? (
                <div className="cp-success" role="alert">
                  <span className="cp-success-icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our care team will contact you shortly.</p>
                  <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="cp-form">
                  <h2 className="cp-form-title">Send Us a Message</h2>
                  <p className="cp-form-sub">Fill in your details and we'll get back to you as soon as possible.</p>

                  <div className="cp-row">
                    <div className="cp-group">
                      <label htmlFor="cp-name">Full Name <span>*</span></label>
                      <input id="cp-name" name="name" type="text" placeholder="Your full name"
                        value={form.name} onChange={handleChange} required aria-required="true" />
                    </div>
                    <div className="cp-group">
                      <label htmlFor="cp-phone">Phone Number <span>*</span></label>
                      <input id="cp-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={handleChange} required aria-required="true" />
                    </div>
                  </div>

                  <div className="cp-group">
                    <label htmlFor="cp-email">Email Address</label>
                    <input id="cp-email" name="email" type="email" placeholder="your@email.com"
                      value={form.email} onChange={handleChange} />
                  </div>

                  <div className="cp-group">
                    <label htmlFor="cp-service">Service Required</label>
                    <select id="cp-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      <option value="home-nursing">Home Nursing Care</option>
                      <option value="elderly-care">Elderly Care Services</option>
                      <option value="patient-attendant">Patient Care &amp; Attendant</option>
                      <option value="hospital-attendant">Hospital Care Attendants</option>
                      <option value="post-surgery">Post-Surgery Care</option>
                      <option value="personal-care">Personal Care &amp; Daily Assistance</option>
                    </select>
                  </div>

                  <div className="cp-group">
                    <label htmlFor="cp-message">Message</label>
                    <textarea id="cp-message" name="message" rows={5}
                      placeholder="Tell us about your care requirements…"
                      value={form.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="btn-primary cp-submit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

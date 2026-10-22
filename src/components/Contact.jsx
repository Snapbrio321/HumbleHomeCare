import { useState, useRef, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus]   = useState('idle'); // idle | success | error
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.querySelectorAll('.fade-in').forEach(c => c.classList.add('visible')); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('success');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="contact section-pad" ref={sectionRef} aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title" id="contact-heading">Contact Us</h2>
          <div className="divider" aria-hidden="true" />
          <p className="section-subtitle">
            We care for your loved ones like family. Reach out today and let's find
            the right care support for you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info panel */}
          <div className="contact-info fade-in">
            <h3 className="contact-info-title">Get in Touch</h3>
            <p className="contact-info-sub">
              Contact us to discuss your home healthcare requirements. Our team is ready to
              help you find the best care plan.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">📞</span>
                <div>
                  <div className="contact-detail-label">Call Us</div>
                  <a href="tel:+919666566846" className="contact-detail-value">+91 96665 66846</a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon whatsapp-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" width="22" height="22" fill="#25D366" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/></svg>
                </span>
                <div>
                  <div className="contact-detail-label">WhatsApp</div>
                  <a
                    href="https://wa.me/919666566846"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-value whatsapp-link"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">✉️</span>
                <div>
                  <div className="contact-detail-label">Email Us</div>
                  <a href="mailto:info@humblehealthcare.com" className="contact-detail-value">
                    info@humblehealthcare.com
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">🕐</span>
                <div>
                  <div className="contact-detail-label">Available</div>
                  <div className="contact-detail-value">24 / 7 — Always Here for You</div>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">📅</span>
                <div>
                  <div className="contact-detail-label">Since</div>
                  <div className="contact-detail-value">2018 — Trusted by Families</div>
                </div>
              </div>
            </div>

            <div className="contact-tagline">
              <img src="/logo.png" alt="" aria-hidden="true" className="contact-mini-logo" />
              <p><em>"We care for your loved ones like family."</em></p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap fade-in" style={{ transitionDelay: '0.15s' }}>
            {status === 'success' ? (
              <div className="form-success" role="alert">
                <span className="success-icon" aria-hidden="true">✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our care team will contact you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your full name"
                      value={form.name} onChange={handleChange} required
                      aria-required="true"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number <span aria-hidden="true">*</span></label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXX XXX XXX"
                      value={form.phone} onChange={handleChange} required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="home-nursing">Home Nursing Care</option>
                    <option value="elderly-care">Elderly Care Services</option>
                    <option value="patient-attendant">Patient Care &amp; Attendant</option>
                    <option value="hospital-attendant">Hospital Care Attendants</option>
                    <option value="post-surgery">Post-Surgery Care</option>
                    <option value="personal-care">Personal Care &amp; Daily Assistance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Tell us about your care requirements..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary form-submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

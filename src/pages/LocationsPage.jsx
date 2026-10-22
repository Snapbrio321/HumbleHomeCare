import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LocationsPage.css';

const offices = [
  {
    id: 1,
    city: 'Visakhapatnam',
    label: 'Headquarters',
    address: '18-186/1 Chinnagadili,\nOpposite CARE Hospital, Pedda Gadhili,\nArilova, Visakhapatnam,\nAndhra Pradesh – 530040',
    phone1: '+91 96665 66846',
    phone2: '+91 96665 66881',
    email: 'info@humblehealthcare.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=18-186/1+Chinnagadili,+opposite+CARE+Hospital,+Pedda+Gadhili,+Arilova,+Visakhapatnam,+Andhra+Pradesh+530040',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5!2d83.3050!3d17.7730!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943d8b1e8d8e7%3A0x0!2sArilova%2C%20Visakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin',
    color: 'blue',
    tag: 'HQ',
  },
  {
    id: 2,
    city: 'Vijayawada',
    label: 'Branch Office',
    address: 'GM6F+W5C, Road No. 7,\nBharath Nagar, Sri Ramachandra Nagar,\nKanuru, Vijayawada,\nAndhra Pradesh – 520008',
    phone1: '+91 96665 66846',
    phone2: '+91 96665 66881',
    email: 'info@humblehealthcare.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=GM6F+W5C,+Road+No.+7,+Bharath+nagar,+Sri+Ramachandra+Nagar,+Kanuru,+Vijayawada,+Andhra+Pradesh+520008',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4800!2d80.6464!3d16.4818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9fc69a6e9%3A0x7c6eb9ff4d951e41!2sSri%20Ramachandra%20Nagar%2C%20Kanuru%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin',
    color: 'orange',
    tag: '',
  },
  {
    id: 3,
    city: 'Rajamahendravaram',
    label: 'Branch Office',
    address: 'GK Gardens, 85-20-2/1A, 1st Line,\nNear JK Gardens, All Bank Colony,\nMorampudi, Rajamahendravaram,\nAndhra Pradesh – 533103',
    phone1: '+91 96665 66846',
    phone2: '+91 96665 66881',
    email: 'info@humblehealthcare.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=85-20-2/1A,+1st+Line,+near+JK+Gardens,+All+Bank+Colony,+Morampudi,+Rajamahendravaram,+Andhra+Pradesh+533103',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d81.7800!3d17.0050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4b6b6b6b6b7%3A0x0!2sMorampudi%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin',
    color: 'blue',
    tag: '',
  },
];

function OfficeCard({ office, index }) {
  return (
    <div className={`loc-card loc-card--${office.color}`}>

      {/* Left — Info */}
      <div className="loc-info">
        <div className="loc-label-wrap">
          <span className={`loc-label loc-label--${office.color}`}>{office.label}</span>
          {office.tag && <span className="loc-hq-tag">⭐ {office.tag}</span>}
        </div>
        <h2 className="loc-city">{office.city}</h2>

        <div className="loc-detail-list">
          {/* Address */}
          <div className="loc-detail">
            <div className="loc-detail-icon">📍</div>
            <div>
              <div className="loc-detail-title">Address</div>
              <p className="loc-detail-text">
                {office.address.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
              <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="loc-directions">
                Get Directions →
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="loc-detail">
            <div className="loc-detail-icon">📞</div>
            <div>
              <div className="loc-detail-title">Phone</div>
              <a href="tel:+919666566846" className="loc-detail-link">{office.phone1}</a>
              <a href="tel:+919666566881" className="loc-detail-link">{office.phone2}</a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="loc-detail">
            <div className="loc-detail-icon loc-wa-icon">
              <svg viewBox="0 0 32 32" width="20" height="20" fill="#25D366">
                <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/>
              </svg>
            </div>
            <div>
              <div className="loc-detail-title">WhatsApp</div>
              <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer" className="loc-detail-link loc-wa-link">
                Chat with us
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="loc-detail">
            <div className="loc-detail-icon">🕐</div>
            <div>
              <div className="loc-detail-title">Working Hours</div>
              <div className="loc-detail-text loc-hours">{office.hours}</div>
            </div>
          </div>
        </div>

        <div className="loc-actions">
          <a href="tel:+919666566846" className="btn-primary loc-call-btn">📞 Call Now</a>
          <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="loc-map-btn">
            🗺️ Directions
          </a>
        </div>
      </div>

      {/* Right — Map */}
      <div className="loc-map-wrap">
        <iframe
          title={`${office.city} Office`}
          src={office.mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '400px', display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a href={office.mapLink} target="_blank" rel="noopener noreferrer" className="loc-map-overlay-btn">
          🗺️ Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export default function LocationsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Our Locations | Humble Health Care Services';
    return () => { document.title = 'Humble Health Care Services'; };
  }, []);

  return (
    <main className="loc-page">

      {/* Hero */}
      <section className="loc-hero">
        <div className="loc-hero-bg" aria-hidden="true" />
        <div className="container loc-hero-inner">
          <nav className="loc-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span aria-current="page">Our Locations</span>
          </nav>
          <div className="loc-hero-content">
            <div>
              <h1 className="loc-hero-title">
                Our <span className="loc-accent">Office Locations</span>
              </h1>
              <p className="loc-hero-desc">
                We are present across Andhra Pradesh — in Visakhapatnam, Vijayawada and
                Rajamahendravaram — bringing compassionate healthcare support closer to you.
              </p>
            </div>
            <div className="loc-hero-stats">
              <div className="loc-hero-stat"><span>3</span><small>Locations</small></div>
              <div className="loc-hero-stat"><span>24/7</span><small>Available</small></div>
              <div className="loc-hero-stat"><span>AP</span><small>Andhra Pradesh</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Cards */}
      <section className="loc-body section-pad">
        <div className="container">
          <div className="loc-cards-list">
            {offices.map((office, i) => (
              <OfficeCard key={office.id} office={office} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="loc-cta">
        <div className="container loc-cta-inner">
          <div>
            <h2 className="loc-cta-title">Need Home Healthcare at Your Location?</h2>
            <p>We provide services at your home — anywhere in Visakhapatnam, Vijayawada, Rajamahendravaram and surrounding areas.</p>
          </div>
          <div className="loc-cta-btns">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <Link to="/services" className="btn-outline loc-outline">Our Services</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LocationsPage.css';
import SEO from '../components/SEO';

const offices = [
  {
    id: 1,
    city: 'Visakhapatnam',
    label: 'Headquarters',
    address: '18-186/1 Chinnagadili,\nOpposite CARE Hospital, Pedda Gadhili,\nArilova, Visakhapatnam,\nAndhra Pradesh – 530040',
    phone1: '9666 566 846',
    phone2: '9666 566 881',
    email: 'jillepalliab@gmail.com',
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
    phone1: '9666 566 846',
    phone2: '9666 566 881',
    email: 'jillepalliab@gmail.com',
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
    phone1: '9666 566 846',
    phone2: '9666 566 881',
    email: 'jillepalliab@gmail.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=85-20-2/1A,+1st+Line,+near+JK+Gardens,+All+Bank+Colony,+Morampudi,+Rajamahendravaram,+Andhra+Pradesh+533103',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d81.7800!3d17.0050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a4b6b6b6b6b7%3A0x0!2sMorampudi%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin',
    color: 'blue',
    tag: '',
  },
  {
    id: 4,
    city: 'Vizianagaram',
    label: 'Branch Office',
    address: 'PRS Complex, Tirumala Hospital Road,\nNear R.T.C. Complex, Siddarth Nagar,\nBalaji Nagar, Vizianagaram,\nAndhra Pradesh – 535003',
    phone1: '9666 566 846',
    phone2: '9666 566 881',
    email: 'jillepalliab@gmail.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=PRS+Complex,+Tirumala+Hospital+Rd,+near+RTC+Complex,+Siddarth+Nagar,+Balaji+Nagar,+Vizianagaram,+Andhra+Pradesh+535003',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.5!2d83.3960!3d18.1190!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c4a1e1e1e1e1f%3A0x0!2sVizianagaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000004!5m2!1sen!2sin',
    color: 'orange',
    tag: '',
  },
  {
    id: 5,
    city: 'Khammam',
    label: 'Branch Office',
    address: '11-2-50/1, Balaji Nagar,\nKhammam,\nTelangana – 507001',
    phone1: '9666 566 846',
    phone2: '9666 566 881',
    email: 'jillepalliab@gmail.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=11-2-50/1,+Balaji+Nagar,+Khammam,+Telangana+507001',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0!2d80.1520!3d17.2470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334ef2b2b2b2b3%3A0x0!2sKhammam%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000005!5m2!1sen!2sin',
    color: 'blue',
    tag: '',
  },
  {
    id: 6,
    city: 'Kakinada',
    label: 'Branch Office',
    address: 'ADB Road, Near Achampet Junction,\nPanasapadu, Kakinada,\nAndhra Pradesh – 533005',
    phone1: '9666 566 846',
    phone2: '9666 566 881',
    email: 'jillepalliab@gmail.com',
    hours: 'Mon – Sun: 24 / 7 Available',
    mapLink: 'https://maps.google.com/?q=ADB+Rd,+near+Achampet+Junction,+Panasapadu,+Kakinada,+Andhra+Pradesh+533005',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.0!2d82.2380!3d16.9640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382b2b2b2b2b2c%3A0x0!2sPanasapadu%2C%20Kakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000006!5m2!1sen!2sin',
    color: 'orange',
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

        {/* Google Rating Badge */}
        <div className="loc-rating">
          <div className="loc-rating-stars" aria-label="5 star rating">★★★★★</div>
          <span className="loc-rating-score">5.0</span>
          <span className="loc-rating-count">(223 Google Reviews)</span>
          <a
            href="https://www.google.com/search?q=Humble+Health+Care+Services+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="loc-rating-google"
            aria-label="View on Google"
          >
            <svg viewBox="0 0 48 48" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
          </a>
        </div>
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
      <SEO
        title="Our Locations � Home Healthcare Offices in Visakhapatnam, Vijayawada, Rajamahendravaram"
        description="Visit Humble Health Care Services offices in Visakhapatnam (HQ), Vijayawada, Rajamahendravaram, Vizianagaram, Khammam and Kakinada. Serving patients across Andhra Pradesh and Telangana."
        keywords="home nursing care office Visakhapatnam, home healthcare Vijayawada, home care services Rajamahendravaram, healthcare office Vizianagaram, home nursing Khammam, home care Kakinada, home healthcare locations Andhra Pradesh"
        canonical="/locations"
      />

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
              <div className="loc-hero-stat"><span>6</span><small>Locations</small></div>
              <div className="loc-hero-stat"><span>24/7</span><small>Available</small></div>
              <div className="loc-hero-stat"><span>⭐5.0</span><small>223 Reviews</small></div>
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

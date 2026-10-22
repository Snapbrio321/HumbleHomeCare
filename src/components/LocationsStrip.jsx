import { Link } from 'react-router-dom';
import './LocationsStrip.css';

const locations = [
  {
    city: 'Visakhapatnam',
    tag: 'Headquarters',
    address: '18-186/1 Chinnagadili, Opp. CARE Hospital,\nArilova, Visakhapatnam – 530040',
    mapLink: 'https://maps.google.com/?q=18-186/1+Chinnagadili,+Arilova,+Visakhapatnam+530040',
    color: 'blue',
  },
  {
    city: 'Vijayawada',
    tag: 'Branch',
    address: 'GM6F+W5C, Road No. 7, Bharath Nagar,\nKanuru, Vijayawada – 520008',
    mapLink: 'https://maps.google.com/?q=GM6F+W5C,Kanuru,Vijayawada,Andhra+Pradesh+520008',
    color: 'orange',
  },
  {
    city: 'Rajamahendravaram',
    tag: 'Branch',
    address: 'GK Gardens, 85-20-2/1A, 1st Line,\nMorampudi, Rajamahendravaram – 533103',
    mapLink: 'https://maps.google.com/?q=85-20-2/1A,Morampudi,Rajamahendravaram,Andhra+Pradesh+533103',
    color: 'blue',
  },
  {
    city: 'Vizianagaram',
    tag: 'Branch',
    address: 'PRS Complex, Tirumala Hospital Rd,\nBalaji Nagar, Vizianagaram – 535003',
    mapLink: 'https://maps.google.com/?q=PRS+Complex,+Tirumala+Hospital+Rd,+Vizianagaram+535003',
    color: 'orange',
  },
  {
    city: 'Khammam',
    tag: 'Branch',
    address: '11-2-50/1, Balaji Nagar,\nKhammam, Telangana – 507001',
    mapLink: 'https://maps.google.com/?q=11-2-50/1,+Balaji+Nagar,+Khammam,+Telangana+507001',
    color: 'blue',
  },
  {
    city: 'Kakinada',
    tag: 'Branch',
    address: 'ADB Road, Near Achampet Junction,\nPanasapadu, Kakinada – 533005',
    mapLink: 'https://maps.google.com/?q=ADB+Rd,+Panasapadu,+Kakinada,+Andhra+Pradesh+533005',
    color: 'orange',
  },
];

export default function LocationsStrip() {
  return (
    <section className="ls-section" aria-labelledby="ls-heading">
      <div className="container">
        <div className="ls-header">
          <div>
            <h2 className="ls-title" id="ls-heading">Our Office Locations</h2>
            <p className="ls-sub">6 offices across Andhra Pradesh &amp; Telangana — always close to you.</p>
          </div>
          <div className="ls-header-right">
            <div className="ls-rating-badge">
              <span className="ls-stars">★★★★★</span>
              <span className="ls-rating-text">5.0 · 223 Google Reviews</span>
            </div>
            <Link to="/locations" className="ls-view-all">View All Locations →</Link>
          </div>
        </div>

        <div className="ls-grid">
          {locations.map((loc) => (
            <div key={loc.city} className={`ls-card ls-card--${loc.color}`}>
              <div className="ls-card-top">
                <div>
                  <span className={`ls-tag ls-tag--${loc.color}`}>{loc.tag}</span>
                  <h3 className="ls-city">{loc.city}</h3>
                </div>
              </div>
              <p className="ls-address">
                {loc.address.split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
              <div className="ls-rating-mini">
                <span className="ls-stars-mini">★★★★★</span>
                <span className="ls-rating-mini-text">5.0 (223)</span>
              </div>
              <div className="ls-card-footer">
                <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="ls-directions">
                  🗺️ Directions
                </a>
                <a href="tel:+919666566846" className="ls-call">📞 Call</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

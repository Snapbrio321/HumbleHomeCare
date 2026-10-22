import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EquipmentPage.css';

const allEquipment = [
  { id: 1,  img: '/equip-1.jpg',  name: 'Hospital Bed',               category: 'Beds & Mattresses',   type: 'Rent / Sale', tag: 'Most Rented', desc: 'Adjustable hospital-grade bed with side rails. Ideal for home recovery and long-term patients.' },
  { id: 2,  img: '/equip-2.jpg',  name: 'Wheelchair',                  category: 'Mobility Aids',        type: 'Rent / Sale', tag: '',           desc: 'Lightweight foldable wheelchair. Suitable for indoor and outdoor use for elderly and patients.' },
  { id: 3,  img: '/equip-3.jpg',  name: 'Oxygen Concentrator',         category: 'Respiratory',          type: 'Rent / Sale', tag: 'Popular',    desc: 'Medical-grade oxygen concentrator for home oxygen therapy. Available in 5L and 10L models.' },
  { id: 4,  img: '/equip-4.jpg',  name: 'Patient Attendant Table',     category: 'Beds & Mattresses',    type: 'Rent / Sale', tag: '',           desc: 'Height-adjustable bedside table for meals, laptop, or medical supplies while in bed.' },
  { id: 5,  img: '/equip-5.jpg',  name: 'IV Stand / Drip Stand',       category: 'Clinical Aids',        type: 'Rent / Sale', tag: '',           desc: 'Stainless steel IV drip stand with adjustable height. Suitable for home IV therapy.' },
  { id: 6,  img: '/equip-6.jpg',  name: 'Air Mattress / Bed Sore',     category: 'Beds & Mattresses',    type: 'Rent / Sale', tag: 'New',        desc: 'Anti-decubitus air mattress to prevent pressure sores in bedridden patients.' },
  { id: 7,  img: '/equip-7.jpg',  name: 'Walker / Zimmer Frame',       category: 'Mobility Aids',        type: 'Rent / Sale', tag: '',           desc: 'Sturdy aluminium walking frame for post-surgery and elderly mobility support.' },
  { id: 8,  img: '/equip-8.jpg',  name: 'Commode Chair',               category: 'Mobility Aids',        type: 'Rent / Sale', tag: '',           desc: 'Portable commode chair for patients with limited mobility. Easy to clean and maintain.' },
  { id: 9,  img: '/equip-9.jpg',  name: 'Suction Machine',             category: 'Respiratory',          type: 'Rent / Sale', tag: '',           desc: 'Electric suction machine for airway secretion removal. Used for tracheostomy patients.' },
  { id: 10, img: '/equip-10.jpg', name: 'Pulse Oximeter',              category: 'Monitoring',           type: 'Sale',        tag: '',           desc: 'Fingertip pulse oximeter to monitor blood oxygen saturation (SpO2) and pulse rate.' },
  { id: 11, img: '/equip-11.jpg', name: 'BP Monitor',                  category: 'Monitoring',           type: 'Sale',        tag: '',           desc: 'Digital automatic blood pressure monitor for accurate home blood pressure readings.' },
  { id: 12, img: '/equip-12.jpg', name: 'Nebulizer Machine',           category: 'Respiratory',          type: 'Rent / Sale', tag: '',           desc: 'Compressor nebulizer for administering inhaled medications for asthma and respiratory conditions.' },
  { id: 13, img: '/equip-13.jpg', name: 'Crutches / Elbow Support',    category: 'Mobility Aids',        type: 'Rent / Sale', tag: '',           desc: 'Adjustable underarm and elbow crutches for post-injury and post-surgery mobility.' },
  { id: 14, img: '/equip-14.jpg', name: 'Orthopaedic Pillow / Foam',   category: 'Beds & Mattresses',    type: 'Sale',        tag: '',           desc: 'Orthopaedic memory foam pillow and positioning wedges for pain relief and better posture.' },
  { id: 15, img: '/equip-15.jpg', name: 'Medical Recliner Chair',      category: 'Mobility Aids',        type: 'Rent / Sale', tag: '',           desc: 'Recliner chair with adjustable backrest and leg rest. Ideal for post-surgery recovery.' },
  { id: 16, img: '/equip-16.jpg', name: 'Stretcher / Transfer Board',  category: 'Clinical Aids',        type: 'Rent / Sale', tag: '',           desc: 'Slide transfer board for safe patient transfers between bed, wheelchair, and stretcher.' },
];

const categories = ['All', ...new Set(allEquipment.map((e) => e.category))];
const types = ['All', 'Rent / Sale', 'Sale'];

function EquipModal({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', fn); };
  }, [onClose]);

  return (
    <div className="ep-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={item.name}>
      <div className="ep-modal">
        <button className="ep-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="ep-modal-img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="ep-modal-body">
          <span className={`ep-type-badge ${item.type.includes('Rent') ? 'ep-blue' : 'ep-orange'}`}>{item.type}</span>
          <span className="ep-cat-label">{item.category}</span>
          <h2 className="ep-modal-title">{item.name}</h2>
          <p className="ep-modal-desc">{item.desc}</p>
          <div className="ep-modal-actions">
            <a href="tel:+919666566846" className="btn-primary">📞 Call to Enquire</a>
            <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer" className="ep-wa">
              <svg viewBox="0 0 32 32" width="18" height="18" fill="#25D366"><path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/></svg>
              WhatsApp
            </a>
            <button className="ep-close-btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EquipmentPage() {
  const [activeCat, setActiveCat]   = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [search, setSearch]         = useState('');
  const [preview, setPreview]       = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Medical Equipment | Humble Health Care Services';
    return () => { document.title = 'Humble Health Care Services'; };
  }, []);

  const filtered = allEquipment.filter((e) => {
    const matchCat  = activeCat  === 'All' || e.category === activeCat;
    const matchType = activeType === 'All' || e.type === activeType;
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase()) || e.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchType && matchSearch;
  });

  return (
    <main className="ep-page">

      {/* Hero */}
      <section className="ep-hero">
        <div className="ep-hero-bg" aria-hidden="true" />
        <div className="container ep-hero-inner">
          <nav className="ep-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link><span>›</span>
            <span aria-current="page">Medical Equipment</span>
          </nav>
          <div className="ep-hero-content">
            <div className="ep-hero-text">
              <span className="ep-hero-badge">Rent / Sale · Home Delivery</span>
              <h1 className="ep-hero-title">
                Medical Equipments<br />
                <span className="ep-hero-accent">Available Here</span>
              </h1>
              <p className="ep-hero-desc">
                Hire or purchase quality medical and rehabilitation equipment for home use.
                All items are well-maintained, sanitized, and available with quick delivery.
              </p>
              <div className="ep-hero-perks">
                <span>✅ Quality Assured</span>
                <span>🚚 Home Delivery</span>
                <span>💳 Flexible Plans</span>
                <span>📞 24/7 Support</span>
              </div>
            </div>
            <div className="ep-hero-contact">
              <p>To enquire about any equipment:</p>
                <a href="tel:+919666566846" className="btn-primary ep-call-btn">📞 +91 96665 66846</a>
              <a href="tel:+919666566881" className="btn-primary ep-call-btn" style={{marginTop:'-0.25rem'}}>📞 +91 96665 66881</a>
              <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer" className="ep-wa-hero">
                <svg viewBox="0 0 32 32" width="20" height="20" fill="#25D366"><path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="ep-filters-bar">
        <div className="container ep-filters-inner">
          {/* Search */}
          <div className="ep-search-wrap">
            <svg className="ep-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input
              type="search"
              placeholder="Search equipment…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ep-search"
              aria-label="Search equipment"
            />
          </div>

          {/* Category filter */}
          <div className="ep-filter-group">
            {categories.map((c) => (
              <button
                key={c}
                className={`ep-filter-btn${activeCat === c ? ' active' : ''}`}
                onClick={() => setActiveCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <div className="ep-filter-group ep-type-group">
            {types.map((t) => (
              <button
                key={t}
                className={`ep-type-btn${activeType === t ? ' active' : ''}`}
                onClick={() => setActiveType(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <span className="ep-count">{filtered.length} item{filtered.length !== 1 ? 's' : ''}</span>
        </div>
      </section>

      {/* Grid */}
      <section className="ep-grid-section section-pad">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="ep-empty">
              <span>😕</span>
              <p>No equipment found. Try a different search or filter.</p>
              <button className="btn-primary" onClick={() => { setActiveCat('All'); setActiveType('All'); setSearch(''); }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="ep-grid">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="ep-card"
                  onClick={() => setPreview(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${item.name}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setPreview(item); }}
                >
                  <div className="ep-card-img-wrap">
                    <img src={item.img} alt={item.name} loading="lazy" className="ep-card-img" />
                    {item.tag && <span className="ep-card-tag">{item.tag}</span>}
                    <div className="ep-card-overlay">
                      <span>🔍 Quick View</span>
                    </div>
                  </div>
                  <div className="ep-card-body">
                    <span className="ep-card-cat">{item.category}</span>
                    <h3 className="ep-card-name">{item.name}</h3>
                    <p className="ep-card-desc">{item.desc.slice(0, 80)}…</p>
                    <div className="ep-card-footer">
                      <span className={`ep-type-badge ${item.type.includes('Rent') ? 'ep-blue' : 'ep-orange'}`}>
                        {item.type}
                      </span>
                      <a
                        href="tel:+919666566846"
                        className="ep-card-call"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Call to enquire"
                      >
                        Enquire →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="ep-cta-strip">
        <div className="container ep-cta-inner">
          <div>
            <h2 className="ep-cta-title">Don't see what you need?</h2>
            <p>Contact us — we have more equipment available. We'll find the right solution for you.</p>
          </div>
          <div className="ep-cta-btns">
            <a href="tel:+919666566846" className="btn-primary">📞 Call Us Now</a>
            <Link to="/contact" className="btn-outline ep-cta-outline">Send Enquiry</Link>
          </div>
        </div>
      </section>

      {preview && <EquipModal item={preview} onClose={() => setPreview(null)} />}
    </main>
  );
}

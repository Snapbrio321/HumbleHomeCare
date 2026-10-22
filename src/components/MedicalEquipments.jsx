import { useState, useRef, useEffect } from 'react';
import './MedicalEquipments.css';

const equipment = [
  { id: 1,  img: '/equip-1.jpg',  name: 'Hospital Bed',              type: 'Rent / Sale', tag: 'Most Rented' },
  { id: 2,  img: '/equip-2.jpg',  name: 'Wheelchair',                type: 'Rent / Sale', tag: '' },
  { id: 3,  img: '/equip-3.jpg',  name: 'Oxygen Concentrator',       type: 'Rent / Sale', tag: 'Popular' },
  { id: 4,  img: '/equip-4.jpg',  name: 'Patient Attendant Table',   type: 'Rent / Sale', tag: '' },
  { id: 5,  img: '/equip-5.jpg',  name: 'IV Stand / Drip Stand',     type: 'Rent / Sale', tag: '' },
  { id: 6,  img: '/equip-6.jpg',  name: 'Air Mattress / Bed Sore',   type: 'Rent / Sale', tag: 'New' },
  { id: 7,  img: '/equip-7.jpg',  name: 'Walker / Zimmer Frame',     type: 'Rent / Sale', tag: '' },
  { id: 8,  img: '/equip-8.jpg',  name: 'Commode Chair',             type: 'Rent / Sale', tag: '' },
  { id: 9,  img: '/equip-9.jpg',  name: 'Suction Machine',           type: 'Rent / Sale', tag: '' },
  { id: 10, img: '/equip-10.jpg', name: 'Pulse Oximeter',            type: 'Sale',        tag: '' },
  { id: 11, img: '/equip-11.jpg', name: 'BP Monitor',                type: 'Sale',        tag: '' },
  { id: 12, img: '/equip-12.jpg', name: 'Nebulizer Machine',         type: 'Rent / Sale', tag: '' },
  { id: 13, img: '/equip-13.jpg', name: 'Crutches / Elbow Support',  type: 'Rent / Sale', tag: '' },
  { id: 14, img: '/equip-14.jpg', name: 'Orthopaedic Pillow / Foam', type: 'Sale',        tag: '' },
  { id: 15, img: '/equip-15.jpg', name: 'Medical Recliner Chair',    type: 'Rent / Sale', tag: '' },
  { id: 16, img: '/equip-16.jpg', name: 'Stretcher / Transfer Board',type: 'Rent / Sale', tag: '' },
];

function EquipCard({ item, onPreview }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="eq-card fade-in" onClick={() => onPreview(item)}>
      <div className="eq-img-wrap">
        <img src={item.img} alt={item.name} className="eq-img" loading="lazy" />
        {item.tag && <span className="eq-tag">{item.tag}</span>}
        <div className="eq-overlay">
          <span className="eq-zoom" aria-hidden="true">🔍</span>
          <span>Quick View</span>
        </div>
      </div>
      <div className="eq-body">
        <h3 className="eq-name">{item.name}</h3>
        <div className="eq-type">
          <span className={`eq-badge ${item.type.includes('Rent') ? 'eq-badge--blue' : 'eq-badge--orange'}`}>
            {item.type}
          </span>
        </div>
        <a
          href="#contact"
          className="eq-enquire"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Enquire about ${item.name}`}
        >
          Enquire Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>
    </div>
  );
}

function PreviewModal({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [onClose]);

  return (
    <div className="eq-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-label={item.name}>
      <div className="eq-modal-box">
        <button className="eq-modal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div className="eq-modal-img-wrap">
          <img src={item.img} alt={item.name} className="eq-modal-img" />
        </div>
        <div className="eq-modal-info">
          <span className={`eq-badge ${item.type.includes('Rent') ? 'eq-badge--blue' : 'eq-badge--orange'}`}>{item.type}</span>
          <h2 className="eq-modal-name">{item.name}</h2>
          <p className="eq-modal-desc">
            Available for {item.type.toLowerCase()} at Humble Health Care Services. Contact us to check
            availability, pricing, and delivery options.
          </p>
          <div className="eq-modal-actions">
            <a href="#contact" className="btn-primary" onClick={onClose}>Enquire Now</a>
            <a href="tel:+919666566846" className="btn-outline eq-modal-call">📞 Call Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MedicalEquipments() {
  const [preview, setPreview] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const displayed = showAll ? equipment : equipment.slice(0, 8);

  return (
    <>
      <section id="equipment" className="eq-section section-pad" aria-labelledby="eq-heading">
        <div className="container">

          {/* Header */}
          <div ref={headerRef} className="eq-header fade-in">
            <div className="eq-header-left">
              <span className="eq-eyebrow">Medical Equipment</span>
              <h2 className="section-title" id="eq-heading">
                Medical Equipments<br />
                <span className="eq-accent">Available Here — Rent / Sale</span>
              </h2>
              <div className="divider" style={{ margin: '0.75rem 0 1rem' }} aria-hidden="true" />
              <p className="eq-lead">
                Hire or purchase a wide range of medical and rehabilitation equipment for home use.
                All equipment is well-maintained, sanitized, and available with quick delivery.
              </p>
              <div className="eq-perks">
                <div className="eq-perk"><span>✅</span> Quality Assured</div>
                <div className="eq-perk"><span>🚚</span> Home Delivery</div>
                <div className="eq-perk"><span>💳</span> Flexible Plans</div>
                <div className="eq-perk"><span>📞</span> 24/7 Support</div>
              </div>
            </div>
            <div className="eq-header-right">
              <div className="eq-cta-box">
                <div className="eq-cta-icon" aria-hidden="true">🛒</div>
                <h3>Need Equipment?</h3>
                <p>Call or WhatsApp us to check availability and get the best rates.</p>
                <a href="tel:+919666566846" className="btn-primary eq-cta-btn">
                  📞 +91 96665 66846
                </a>
                <a href="tel:+919666566881" className="btn-primary eq-cta-btn">
                  📞 +91 96665 66881
                </a>
                <a href="https://wa.me/919666566846" target="_blank" rel="noopener noreferrer" className="eq-wa-btn">
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="#25D366"><path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.63 4.608 1.824 6.588L2.667 29.333l6.924-1.797A13.28 13.28 0 0 0 16.003 29.333C23.363 29.333 29.333 23.363 29.333 16S23.363 2.667 16.003 2.667zm0 24.267a11.01 11.01 0 0 1-5.617-1.538l-.402-.238-4.11 1.067 1.093-3.99-.263-.418A10.987 10.987 0 0 1 5.037 16c0-6.044 4.922-10.963 10.966-10.963S26.963 9.956 26.963 16s-4.916 10.934-10.96 10.934zm6.01-8.198c-.33-.165-1.952-.963-2.255-1.073-.303-.11-.523-.165-.744.165-.22.33-.853 1.073-1.045 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.514-2.653-1.638-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.744-1.793-1.018-2.453-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.881.413-.303.33-1.155 1.128-1.155 2.75s1.183 3.19 1.348 3.41c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.543 1.884.695.791.252 1.512.216 2.082.131.635-.095 1.952-.798 2.228-1.569.275-.77.275-1.43.193-1.569-.083-.138-.303-.22-.633-.385z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="eq-grid">
            {displayed.map((item) => (
              <EquipCard key={item.id} item={item} onPreview={setPreview} />
            ))}
          </div>

          {/* Show more */}
          {!showAll && equipment.length > 8 && (
            <div className="eq-show-more">
              <button className="btn-primary eq-more-btn" onClick={() => setShowAll(true)}>
                View All {equipment.length} Equipment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {preview && <PreviewModal item={preview} onClose={() => setPreview(null)} />}
    </>
  );
}

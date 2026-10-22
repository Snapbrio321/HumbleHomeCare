import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  {
    id: 'home-nursing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#grad1)"/>
        <path d="M24 12L12 21v15h8v-8h8v8h8V21L24 12z" fill="white" opacity="0.15"/>
        <path d="M24 13L13 22v14h7v-8h8v8h7V22L24 13z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
        <path d="M21 30h6M24 27v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="19" r="3" fill="white" opacity="0.9"/>
        <defs><linearGradient id="grad1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#1a3a7a"/><stop offset="1" stopColor="#2452a4"/></linearGradient></defs>
      </svg>
    ),
    title: 'Home Nursing Care',
    tagline: 'Professional nursing in the comfort of home',
    desc: 'Professional nursing support at home helping patients recover comfortably and safely in familiar surroundings.',
    points: [
      'Patient monitoring & basic nursing assistance',
      'Post-hospitalization care',
      'Support for bedridden patients',
      'Assistance with doctor-prescribed care routines',
    ],
    color: 'blue',
    modal: {
      heading: 'Home Nursing Care',
      detail: `Our certified home nursing professionals bring hospital-quality care directly to your doorstep. Whether recovering from illness, surgery, or managing a chronic condition, our nurses ensure your loved ones receive the attentive medical support they deserve — in the comfort and privacy of home.`,
      highlights: [
        { icon: '🩺', text: 'Vital signs monitoring (BP, temperature, pulse, oxygen)' },
        { icon: '💉', text: 'Wound dressing, injections & IV care' },
        { icon: '🏥', text: 'Post-hospitalization recovery support' },
        { icon: '🛏️', text: 'Bedridden patient care & pressure sore prevention' },
        { icon: '📋', text: 'Doctor-prescribed routine management' },
        { icon: '👨‍⚕️', text: 'Health status reporting to family & doctors' },
      ],
      cta: 'Book a Nurse',
    },
  },
  {
    id: 'elderly-care',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#grad2)"/>
        <circle cx="24" cy="16" r="5" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M30 28l3 3-3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
        <path d="M33 31h-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.7"/>
        <defs><linearGradient id="grad2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#e87722"/><stop offset="1" stopColor="#c45e0a"/></linearGradient></defs>
      </svg>
    ),
    title: 'Elderly Care Services',
    tagline: 'Dignity, comfort & independence for seniors',
    desc: 'Compassionate support for senior citizens to help them maintain comfort, independence, and dignity every day.',
    points: [
      'Daily living assistance',
      'Mobility and walking support',
      'Personal hygiene assistance',
      'Companionship and emotional support',
    ],
    color: 'orange',
    modal: {
      heading: 'Elderly Care Services',
      detail: `Ageing gracefully deserves the right support. Our compassionate caregivers provide personalized assistance to senior citizens, helping them maintain independence and dignity while ensuring their physical and emotional well-being is always a priority.`,
      highlights: [
        { icon: '🌅', text: 'Morning and evening daily living routines' },
        { icon: '🚶', text: 'Safe mobility, walking, and fall prevention' },
        { icon: '🛁', text: 'Bathing, grooming, and personal hygiene' },
        { icon: '🍽️', text: 'Meal assistance and nutritional support' },
        { icon: '💬', text: 'Companionship, conversation & emotional support' },
        { icon: '💊', text: 'Medication reminders and health monitoring' },
      ],
      cta: 'Arrange Elderly Care',
    },
  },
  {
    id: 'patient-attendant',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#grad3)"/>
        <rect x="16" y="20" width="16" height="12" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M20 20v-3a4 4 0 018 0v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M24 25v4M22 27h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <defs><linearGradient id="grad3" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#1a3a7a"/><stop offset="1" stopColor="#2452a4"/></linearGradient></defs>
      </svg>
    ),
    title: 'Patient Care & Attendant',
    tagline: 'Dedicated caregivers around the clock',
    desc: 'Dedicated caregivers to assist patients with everyday needs at home or in the hospital, day and night.',
    points: [
      'Day and night attendant services',
      'Feeding and personal care assistance',
      'Bedside patient support',
      'Assistance during recovery',
    ],
    color: 'blue',
    modal: {
      heading: 'Patient Care & Attendant Services',
      detail: `Our trained patient attendants are available round the clock to provide hands-on assistance to patients recovering at home or admitted in the hospital. They act as an extension of the medical care team, ensuring comfort and safety at every step.`,
      highlights: [
        { icon: '🌙', text: '24-hour day and night attendant availability' },
        { icon: '🍲', text: 'Feeding assistance and dietary support' },
        { icon: '🛏️', text: 'Bedside care, repositioning & comfort measures' },
        { icon: '🚿', text: 'Personal hygiene and daily grooming' },
        { icon: '🩹', text: 'Basic first aid and emergency response' },
        { icon: '📱', text: 'Regular family updates and communication' },
      ],
      cta: 'Book an Attendant',
    },
  },
  {
    id: 'hospital-attendant',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#grad4)"/>
        <rect x="13" y="18" width="22" height="16" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M18 18v-3h12v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M17 26h14M17 30h8" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.8"/>
        <circle cx="33" cy="30" r="1.5" fill="white" opacity="0.8"/>
        <defs><linearGradient id="grad4" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#e87722"/><stop offset="1" stopColor="#c45e0a"/></linearGradient></defs>
      </svg>
    ),
    title: 'Hospital Care Attendants',
    tagline: 'Reliable support during hospital stays',
    desc: 'Reliable attendants to support patients during hospital stays and assist with routine daily activities and needs.',
    points: [
      'Round-the-clock attendant support',
      'Coordination with hospital staff',
      'Comfort and companionship',
      'Daily routine assistance in hospital',
    ],
    color: 'orange',
    modal: {
      heading: 'Hospital Care Attendants',
      detail: `Navigating a hospital stay can be overwhelming for patients and families. Our hospital care attendants provide professional, compassionate support during admission, working alongside doctors and nurses to ensure the patient's comfort and daily needs are met throughout their stay.`,
      highlights: [
        { icon: '🏥', text: 'Presence during hospital admission and procedures' },
        { icon: '🤝', text: 'Coordination with nurses, doctors & ward staff' },
        { icon: '🧹', text: 'Bedside cleanliness and comfort maintenance' },
        { icon: '🍱', text: 'Meal support and feeding assistance' },
        { icon: '💬', text: 'Companionship to reduce anxiety and loneliness' },
        { icon: '📋', text: 'Discharge planning and homecoming support' },
      ],
      cta: 'Get Hospital Attendant',
    },
  },
  {
    id: 'post-surgery',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#grad5)"/>
        <path d="M15 24h18M24 15v18" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.3"/>
        <path d="M20 20l8 8M28 20l-8 8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M21 24l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="grad5" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#1a3a7a"/><stop offset="1" stopColor="#2452a4"/></linearGradient></defs>
      </svg>
    ),
    title: 'Post-Surgery Care',
    tagline: 'Safe recovery after your procedure',
    desc: 'Personalized assistance for patients returning home after surgery, supporting prescribed care and daily recovery.',
    points: [
      'Post-operative wound monitoring',
      'Medication reminder & assistance',
      'Prescribed exercise support',
      'Daily recovery activity help',
    ],
    color: 'blue',
    modal: {
      heading: 'Post-Surgery Care',
      detail: `Recovery after surgery requires careful attention and consistent support. Our post-surgery care team ensures your recovery journey is smooth, safe, and aligned with your doctor's recommendations — helping you heal faster and more comfortably at home.`,
      highlights: [
        { icon: '🩹', text: 'Wound care, dressing changes & infection monitoring' },
        { icon: '💊', text: 'Medication management and timely reminders' },
        { icon: '🏃', text: 'Physiotherapy exercise and mobility support' },
        { icon: '🍽️', text: 'Nutritional guidance and dietary assistance' },
        { icon: '📊', text: 'Vital signs tracking and health monitoring' },
        { icon: '👨‍⚕️', text: 'Follow-up care coordination with surgeons' },
      ],
      cta: 'Arrange Post-Surgery Care',
    },
  },
  {
    id: 'personal-care',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#grad6)"/>
        <path d="M24 14c-3 0-7 2-7 7 0 3 2 5 4 6l3 5 3-5c2-1 4-3 4-6 0-5-4-7-7-7z" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <path d="M21 22l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="grad6" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#e87722"/><stop offset="1" stopColor="#c45e0a"/></linearGradient></defs>
      </svg>
    ),
    title: 'Personal Care & Daily Assistance',
    tagline: 'Respectful help with everyday activities',
    desc: 'Respectful support with bathing, dressing, grooming, mobility, and other essential daily activities.',
    points: [
      'Bathing and personal hygiene',
      'Dressing and grooming support',
      'Mobility and transfer assistance',
      'Meal preparation and feeding',
    ],
    color: 'orange',
    modal: {
      heading: 'Personal Care & Daily Assistance',
      detail: `Maintaining personal dignity and independence is essential to well-being. Our caregivers provide respectful, sensitive assistance with all personal care activities, ensuring every individual feels comfortable, clean, and cared for in the most dignified manner.`,
      highlights: [
        { icon: '🚿', text: 'Bathing, showering & personal hygiene routines' },
        { icon: '👔', text: 'Dressing, grooming and appearance care' },
        { icon: '🚶', text: 'Safe mobility, transfers and fall prevention' },
        { icon: '🍳', text: 'Meal preparation and assisted feeding' },
        { icon: '🧹', text: 'Light housekeeping and living space tidiness' },
        { icon: '🛒', text: 'Errands, shopping and appointment escort' },
      ],
      cta: 'Arrange Personal Care',
    },
  },
];

// ── Modal Component ──────────────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-box">
        {/* Header */}
        <div className={`modal-header modal-header--${service.color}`}>
          <div className="modal-header-icon">{service.icon}</div>
          <div className="modal-header-text">
            <p className="modal-tagline">{service.tagline}</p>
            <h2 className="modal-title" id="modal-title">{service.modal.heading}</h2>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          <p className="modal-detail">{service.modal.detail}</p>

          <h3 className="modal-highlights-title">What We Provide</h3>
          <ul className="modal-highlights">
            {service.modal.highlights.map((h, i) => (
              <li key={i} className="modal-highlight-item">
                <span className="modal-highlight-icon">{h.icon}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <a
            href="#contact"
            className="btn-primary modal-cta"
            onClick={onClose}
          >
            {service.modal.cta}
          </a>
          <button className="modal-close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

// ── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, index, onOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`service-card fade-in service-card--${service.color}`}
      style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
      onClick={() => onOpen(service)}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${service.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(service); }}
    >
      {/* Icon */}
      <div className="service-icon-wrap">
        <div className="service-svg-icon">{service.icon}</div>
      </div>

      {/* Content */}
      <div className="service-body">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-tagline-text">{service.tagline}</p>
        <p className="service-desc">{service.desc}</p>

        <ul className="service-points">
          {service.points.map((p) => (
            <li key={p}>
              <svg className="service-check-svg" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="8" cy="8" r="7.5" />
                <path d="M5 8l2 2 4-4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* Click hint */}
      <div className="service-learn-more">
        <Link
          to={`/services/${service.id}`}
          className="service-learn-link"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
        </Link>
        <span className="service-learn-divider" aria-hidden="true">·</span>
        <span className="service-learn-modal">Learn More</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </article>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const titleRef = useRef(null);

  // Listen for footer service link clicks
  useEffect(() => {
    const handler = (e) => {
      const found = services.find((s) => s.id === e.detail.id);
      if (found) setActiveService(found);
    };
    window.addEventListener('open-service-modal', handler);
    return () => window.removeEventListener('open-service-modal', handler);
  }, []);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="services" className="services section-pad" aria-labelledby="services-heading">
        <div className="container">
          <div ref={titleRef} className="section-header fade-in">
            <h2 className="section-title" id="services-heading">Our Services</h2>
            <div className="divider" aria-hidden="true" />
            <p className="section-subtitle">
              Comprehensive, compassionate healthcare support tailored to your needs.
              Click any service to learn more.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} onOpen={setActiveService} />
            ))}
          </div>
        </div>
      </section>

      {activeService && (
        <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </>
  );
}

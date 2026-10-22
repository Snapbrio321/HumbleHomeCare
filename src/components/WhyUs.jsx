import { useEffect, useRef } from 'react';
import './WhyUs.css';

const reasons = [
  { icon: '❤️',  title: 'Compassionate Care',        desc: 'Every patient is treated with kindness, empathy, and genuine concern for their well-being.' },
  { icon: '📋',  title: 'Personalized Care Plans',   desc: 'Care tailored to each individual\'s unique health needs, routines, and personal preferences.' },
  { icon: '👴',  title: 'Elderly & Patient Support', desc: 'Specialized support designed to meet the needs of seniors and patients requiring extra help.' },
  { icon: '🏡',  title: 'Care at Home',               desc: 'Convenient, high-quality healthcare delivered at home — no need to travel or feel displaced.' },
  { icon: '🛡️', title: 'Dignity & Safety First',    desc: 'We prioritize the comfort, dignity, and safety of every person in our care, always.' },
  { icon: '👨‍👩‍👧', title: 'Family Support',           desc: 'Peace of mind for families and caregivers, knowing their loved ones are in trusted hands.' },
];

function ReasonCard({ reason, index }) {
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
    <div
      ref={ref}
      className="reason-card fade-in"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="reason-icon" aria-hidden="true">{reason.icon}</span>
      <div>
        <h3 className="reason-title">{reason.title}</h3>
        <p className="reason-desc">{reason.desc}</p>
      </div>
    </div>
  );
}

export default function WhyUs() {
  const titleRef = useRef(null);

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
    <section id="why-us" className="why-us section-pad" aria-labelledby="whyus-heading">
      <div className="container">
        <div className="why-us-inner">
          {/* Left */}
          <div ref={titleRef} className="why-us-left fade-in">
            <span className="why-us-badge">Why Choose Us</span>
            <h2 className="section-title" id="whyus-heading">
              The Humble Difference —<br />
              <span className="accent-orange">Care You Can Trust</span>
            </h2>
            <div className="divider" style={{ margin: '1rem 0' }} aria-hidden="true" />
            <p className="why-us-lead">
              At Humble Health Care Services, we don't just provide healthcare —
              we build relationships rooted in trust, respect, and genuine compassion.
            </p>
            <a href="#contact" className="btn-primary why-us-cta">
              Start Care Today
            </a>
          </div>

          {/* Right */}
          <div className="why-us-right">
            {reasons.map((r, i) => (
              <ReasonCard key={r.title} reason={r} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

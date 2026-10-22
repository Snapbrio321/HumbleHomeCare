import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const missionRef = useRef(null);
  const visionRef  = useRef(null);

  useEffect(() => {
    const els = [missionRef.current, visionRef.current].filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.2 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section-pad" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="about-heading">Our Mission &amp; Vision</h2>
          <div className="divider" aria-hidden="true" />
          <p className="section-subtitle">
            Guided by humility, integrity, and a deep commitment to those we serve.
          </p>
        </div>

        <div className="about-grid">
          {/* Mission */}
          <div ref={missionRef} className="about-card about-card--mission fade-in">
            <div className="about-card-icon" aria-hidden="true">🎯</div>
            <div className="about-card-label">Our Mission</div>
            <h3 className="about-card-title">Accessible &amp; Dependable Healthcare</h3>
            <p className="about-card-text">
              To provide accessible, compassionate, and dependable healthcare support that
              improves quality of life and brings peace of mind to patients and their families.
            </p>
            <ul className="about-values">
              <li><span aria-hidden="true">•</span> Accessible to all who need it</li>
              <li><span aria-hidden="true">•</span> Compassionate in every interaction</li>
              <li><span aria-hidden="true">•</span> Dependable — there when you need us</li>
              <li><span aria-hidden="true">•</span> Focused on quality of life</li>
            </ul>
          </div>

          {/* Vision */}
          <div ref={visionRef} className="about-card about-card--vision fade-in" style={{ transitionDelay: '0.15s' }}>
            <div className="about-card-icon" aria-hidden="true">🌟</div>
            <div className="about-card-label">Our Vision</div>
            <h3 className="about-card-title">A Trusted Name in Home Healthcare</h3>
            <p className="about-card-text">
              To become a trusted name in home healthcare by delivering care with humility,
              integrity, respect, and dedication — one family at a time.
            </p>
            <ul className="about-values">
              <li><span aria-hidden="true">•</span> Humility in service</li>
              <li><span aria-hidden="true">•</span> Integrity in every action</li>
              <li><span aria-hidden="true">•</span> Respect for every individual</li>
              <li><span aria-hidden="true">•</span> Dedicated to continuous improvement</li>
            </ul>
          </div>
        </div>

        {/* Banner quote */}
        <div className="about-quote" aria-label="Company tagline">
          <span className="about-quote-mark" aria-hidden="true">"</span>
          <p>Your Health, Our Priority. Your Comfort, Our Commitment.</p>
          <span className="about-quote-mark" aria-hidden="true">"</span>
        </div>
      </div>
    </section>
  );
}

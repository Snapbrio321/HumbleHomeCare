import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import SEO from '../components/SEO';

/* ── Scroll-reveal hook ─────────────────────────── */
function useFadeIn(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

/* ── Data ───────────────────────────────────────── */
const coreValues = [
  { icon: '❤️', title: 'Compassion',  desc: 'Treating every individual with kindness and genuine understanding in every interaction.' },
  { icon: '🛡️', title: 'Dignity',    desc: 'Respecting the privacy, independence, and personal preferences of every patient.' },
  { icon: '🤝', title: 'Trust',       desc: 'Building strong relationships through honest communication and responsible service.' },
  { icon: '⭐', title: 'Commitment',  desc: 'Striving to provide dependable support according to agreed service requirements.' },
  { icon: '🙏', title: 'Respect',     desc: 'Recognizing and honoring the unique needs of every patient and family we serve.' },
];

const whyUs = [
  { stat: '9+',   label: 'Years of Experience',   desc: 'A strong focus on understanding individual healthcare support requirements.' },
  { stat: '500+', label: 'Patients Supported',     desc: 'Families across the region trust us to care for their loved ones.' },
  { stat: '24/7', label: 'Availability',            desc: 'Round-the-clock support whenever patients and families need us most.' },
  { stat: '100%', label: 'Patient-Centered',        desc: "Every care plan is tailored to the individual's needs and circumstances." },
];

const homeServices = [
  { icon: '🏠', title: 'Home Nursing Care',          desc: 'Access home nursing support for patients who require assistance during recovery or ongoing care, arranged according to individual requirements.' },
  { icon: '👴', title: 'Elderly Care Services',       desc: 'Support for senior citizens with daily activities, mobility, personal assistance, companionship, and individual care needs.' },
  { icon: '🩺', title: 'Patient Care Services',       desc: 'Assistance at home including help with daily routines, personal hygiene, feeding assistance, mobility, and bedside support.' },
  { icon: '🏥', title: 'Hospital Attendant Services', desc: 'Attendants to help patients with routine daily activities and provide supportive care throughout their hospital stay.' },
  { icon: '🌙', title: 'Night Care Attendant',        desc: 'Overnight attendant support arranged based on patient needs and service availability for families who require round-the-clock care.' },
  { icon: '💊', title: 'Post-Hospitalization Care',  desc: 'Support for patients returning home after a hospital stay — coordinating daily assistance and helping manage practical recovery needs.' },
  { icon: '🤝', title: 'Personal Care & Companion',  desc: 'Assistance with grooming, dressing, mobility, everyday activities, and companionship for individuals requiring personal care support.' },
];

/* ── Sub-components ─────────────────────────────── */

function HeroBanner() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add('loaded'), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="about-hero" ref={ref} aria-label="About Humble Health Care Services">
      <div className="about-hero-bg" aria-hidden="true" />
      <div className="container about-hero-inner">
        {/* Breadcrumb */}
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">About Us</span>
        </nav>

        <div className="about-hero-body">
          <div className="about-hero-content">
            <span className="about-hero-badge">Since 2018 · 9+ Years of Experience</span>
            <h1 className="about-hero-title">
              About <span className="about-hero-accent">Humble Health Care</span><br />Services
            </h1>
            <p className="about-hero-sub">
              Trusted Home Healthcare Services — <em>Care with Humility, Healing with Heart.</em>
            </p>
            <p className="about-hero-desc">
              A dedicated provider of compassionate home healthcare support, patient care services,
              nursing assistance, elderly care, and hospital attendant services — focused on dignity,
              trust, and personalized support for every patient and family.
            </p>
            <div className="about-hero-actions">
              <a href="#chairman" className="btn-primary">Meet Our Chairman</a>
              <Link to="/#contact" className="btn-outline about-outline-btn">Get Care Today</Link>
            </div>
          </div>

          {/* Video — right side */}
          <div className="about-hero-video-wrap">
            <video
              className="about-hero-video"
              controls
              loop
              playsInline
              aria-label="Humble Health Care Services introduction video"
            >
              <source src="/humble-video.mp4" type="video/mp4" />
            </video>
            <div className="about-hero-video-badge" aria-hidden="true">
              <span>▶</span> Our Story
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-hero-stats">
          {whyUs.map((w) => (
            <div className="about-hero-stat" key={w.label}>
              <span className="about-stat-value">{w.stat}</span>
              <span className="about-stat-label">{w.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  const ref = useFadeIn(0.2);
  return (
    <section className="about-intro section-pad" aria-labelledby="intro-heading">
      <div className="container">
        <div ref={ref} className="about-intro-grid fade-in">
          {/* Logo visual */}
          <div className="about-intro-visual">
            <div className="about-intro-logo-wrap">
              <img src="/logo.png" alt="Humble Health Care Services" className="about-intro-logo" />
              <div className="about-intro-ring about-intro-ring-1" aria-hidden="true" />
              <div className="about-intro-ring about-intro-ring-2" aria-hidden="true" />
            </div>
            <div className="about-intro-badge">
              <span className="badge-number">9+</span>
              <span className="badge-text">Years of<br/>Experience</span>
            </div>
          </div>

          {/* Text */}
          <div className="about-intro-text">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title" id="intro-heading">
              Compassionate Home Healthcare<br />Services You Can Trust
            </h2>
            <div className="divider" style={{ margin: '1rem 0' }} aria-hidden="true" />
            <p>
              Welcome to <strong>Humble Health Care Services</strong>, a dedicated provider of compassionate
              home healthcare support, patient care services, nursing assistance, elderly care, and hospital
              attendant services. We understand the importance of providing reliable care, comfort, and dignity
              to patients, senior citizens, and families who need professional assistance.
            </p>
            <p style={{ marginTop: '1rem' }}>
              With <strong>over 9 years of experience in healthcare services</strong>, we are committed to
              delivering personalized care and dependable support based on individual needs. Our goal is to
              help patients receive appropriate assistance in familiar surroundings while providing families
              with greater confidence and peace of mind.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Whether you are looking for home nursing care, elderly care services, patient attendants,
              hospital care attendants, or post-hospitalization support, Humble Health Care Services is
              dedicated to helping you find the right care for your loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChairmanSection() {
  const ref = useFadeIn(0.15);
  return (
    <section id="chairman" className="about-chairman section-pad" aria-labelledby="chairman-heading">
      <div className="container">
        <div ref={ref} className="chairman-grid fade-in">
          {/* Card */}
          <div className="chairman-card">
            <div className="chairman-photo-wrap">
              <img
                src="/chairman.png"
                alt="Mr. Anand Babu – Chairman, Humble Health Care Services"
                className="chairman-photo"
              />
              <div className="chairman-photo-badge">
                <span className="chairman-role-badge">Chairman</span>
              </div>
            </div>
            <div className="chairman-card-body">
              <div className="chairman-role">Chairman</div>
              <h3 className="chairman-name">Mr. Anand Babu</h3>
              <p className="chairman-org">Humble Health Care Services</p>
              <div className="chairman-divider" aria-hidden="true" />
              <blockquote className="chairman-quote">
                "Every patient deserves respectful treatment, and every family deserves dependable
                support when caring for their loved ones."
              </blockquote>
            </div>
          </div>

          {/* Text */}
          <div className="chairman-text">
            <span className="section-eyebrow">Leadership</span>
            <h2 className="section-title" id="chairman-heading">
              Our Chairman —<br />
              <span style={{ color: 'var(--orange-main)' }}>Mr. Anand Babu</span>
            </h2>
            <div className="divider" style={{ margin: '1rem 0' }} aria-hidden="true" />
            <p>
              <strong>Mr. Anand Babu, Chairman of Humble Health Care Services</strong>, provides leadership
              and direction to our commitment to compassionate healthcare support.
            </p>
            <p style={{ marginTop: '1rem' }}>
              His vision is to make dependable healthcare assistance accessible to individuals and families
              while promoting a culture of kindness, responsibility, and respect. Under his leadership, the
              organization aims to build lasting relationships with families through attentive service and a
              patient-focused approach.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Our guiding principle is simple: every patient deserves respectful treatment, and every family
              deserves dependable support when caring for their loved ones.
            </p>

            <div className="chairman-pillars">
              {['Kindness', 'Responsibility', 'Respect', 'Patient-Focus'].map((p) => (
                <span className="chairman-pill" key={p}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useFadeIn(0.15);
  return (
    <section className="about-experience section-pad" aria-labelledby="exp-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="exp-heading">Our Experience</h2>
          <div className="divider" aria-hidden="true" />
          <p className="section-subtitle">
            Nine years of understanding what patients and families truly need.
          </p>
        </div>

        <div ref={ref} className="experience-grid fade-in">
          {whyUs.map((w, i) => (
            <div className="experience-card" key={w.label} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="experience-stat">{w.stat}</div>
              <div className="experience-label">{w.label}</div>
              <p className="experience-desc">{w.desc}</p>
            </div>
          ))}
        </div>

        <div className="experience-text-block">
          <p>
            Experience plays an important role in understanding the needs of patients and their families.
            With more than <strong>9 years of experience</strong>, our organization understands the importance
            of compassionate assistance, personalized attention, and responsible care coordination.
          </p>
          <p>
            We aim to support families seeking healthcare assistance for elderly parents, recovering patients,
            individuals with limited mobility, and people who need help with everyday activities. At Humble
            Health Care Services, we believe that quality care begins with listening, understanding individual
            requirements, and treating every person with dignity.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useFadeIn(0.1);
  return (
    <section className="about-services section-pad" aria-labelledby="abt-services-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="abt-services-heading">Our Home Healthcare Services</h2>
          <div className="divider" aria-hidden="true" />
          <p className="section-subtitle">
            Comprehensive care solutions for patients and families — delivered at home and in hospital.
          </p>
        </div>

        <div ref={ref} className="abt-services-grid fade-in">
          {homeServices.map((s, i) => (
            <div className="abt-service-item" key={s.title} style={{ transitionDelay: `${(i % 4) * 0.07}s` }}>
              <span className="abt-service-icon" aria-hidden="true">{s.icon}</span>
              <div>
                <h3 className="abt-service-title">{s.title}</h3>
                <p className="abt-service-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="abt-services-cta">
          <Link to="/#services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  const ref = useFadeIn(0.15);
  const reasons = [
    { title: '9+ Years of Experience',       desc: 'A strong focus on understanding individual healthcare support requirements.' },
    { title: 'Patient-Centered Approach',    desc: 'Support tailored to each person\'s needs and unique circumstances.' },
    { title: 'Compassionate Care',           desc: 'Respect, kindness, and dignity are central to our service philosophy.' },
    { title: 'Support for Families',         desc: 'Assistance in finding suitable care for elderly parents and loved ones.' },
    { title: 'Flexible Care Requirements',   desc: 'Options discussed according to the required type and duration of support.' },
    { title: 'Responsible Service',          desc: 'We coordinate appropriate care and maintain clear communication with families.' },
  ];
  return (
    <section className="about-why section-pad" aria-labelledby="abt-why-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="abt-why-heading">Why Choose Us?</h2>
          <div className="divider" aria-hidden="true" />
          <p className="section-subtitle">
            What makes Humble Health Care Services the trusted choice for families across the region.
          </p>
        </div>

        <div ref={ref} className="abt-why-grid fade-in">
          {reasons.map((r, i) => (
            <div className="abt-why-card" key={r.title} style={{ transitionDelay: `${(i % 3) * 0.08}s` }}>
              <span className="abt-why-num" aria-hidden="true">0{i + 1}</span>
              <h3 className="abt-why-title">{r.title}</h3>
              <p className="abt-why-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  const ref = useFadeIn(0.15);
  return (
    <section className="about-mv section-pad" aria-labelledby="mv-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="mv-heading">Mission, Vision &amp; Values</h2>
          <div className="divider" aria-hidden="true" />
        </div>

        <div ref={ref} className="mv-grid fade-in">
          {/* Mission */}
          <div className="mv-card mv-card--blue">
            <div className="mv-icon" aria-hidden="true">🎯</div>
            <div className="mv-label">Our Mission</div>
            <h3 className="mv-title">Accessible &amp; Dependable Healthcare</h3>
            <p className="mv-text">
              To provide compassionate, dependable, and personalized healthcare assistance that supports
              patient comfort, promotes dignity, and helps families manage their loved ones' care needs
              with confidence.
            </p>
          </div>

          {/* Vision */}
          <div className="mv-card mv-card--orange">
            <div className="mv-icon" aria-hidden="true">🌟</div>
            <div className="mv-label">Our Vision</div>
            <h3 className="mv-title">A Trusted Name in Home Healthcare</h3>
            <p className="mv-text">
              To become a trusted name in home healthcare and patient support services by maintaining a
              commitment to compassion, integrity, service quality, and continuous improvement.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="values-heading">Our Core Values</h3>
          <div className="values-grid">
            {coreValues.map((v, i) => (
              <div className="value-card" key={v.title} style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="value-icon" aria-hidden="true">{v.icon}</span>
                <h4 className="value-title">{v.title}</h4>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CommitmentSection() {
  const ref = useFadeIn(0.2);
  return (
    <section className="about-commitment section-pad" aria-labelledby="commit-heading">
      <div className="container">
        <div ref={ref} className="commitment-inner fade-in">
          <div className="commitment-text">
            <span className="section-eyebrow" style={{ color: '#fbb978' }}>Our Promise to You</span>
            <h2 className="section-title commitment-title" id="commit-heading">
              Our Commitment to Patients &amp; Families
            </h2>
            <p>
              Choosing care for a loved one is an important decision. At Humble Health Care Services, we
              understand the concerns families may have when arranging home healthcare, elderly care, nursing
              assistance, or hospital attendants.
            </p>
            <p style={{ marginTop: '1rem' }}>
              We aim to make the process easier by understanding your requirements, discussing suitable
              service options, and helping you identify appropriate care support. Our focus is to contribute
              to a safer, more comfortable, and more dignified care experience for every patient and family.
            </p>
            <div className="commitment-actions">
              <Link to="/#contact" className="btn-primary">Contact Us Today</Link>
              <Link to="/#services" className="btn-outline commitment-outline">Our Services</Link>
            </div>
          </div>

          <div className="commitment-visual" aria-hidden="true">
            <div className="commit-card">
              <span className="commit-card-icon">🏠</span>
              <div>
                <strong>Home Healthcare</strong>
                <p>Care delivered at your doorstep</p>
              </div>
            </div>
            <div className="commit-card">
              <span className="commit-card-icon">❤️</span>
              <div>
                <strong>With Compassion</strong>
                <p>Kindness in every interaction</p>
              </div>
            </div>
            <div className="commit-card">
              <span className="commit-card-icon">🛡️</span>
              <div>
                <strong>With Dignity</strong>
                <p>Respect for every individual</p>
              </div>
            </div>
            <div className="commit-card">
              <span className="commit-card-icon">📞</span>
              <div>
                <strong>Always Available</strong>
                <p>24/7 support for families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────── */
export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'About Us | Humble Health Care Services';
    return () => { document.title = 'Humble Health Care Services'; };
  }, []);

  return (
    <main id="main-content" className="about-page">
      <HeroBanner />
      <IntroSection />
      <ChairmanSection />
      <ExperienceSection />
      <ServicesSection />
      <WhyUsSection />
      <MissionVisionSection />
      <CommitmentSection />
    </main>
  );
}

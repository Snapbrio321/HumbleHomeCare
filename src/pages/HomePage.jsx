import Hero              from '../components/Hero';
import Services          from '../components/Services';
import MedicalEquipments from '../components/MedicalEquipments';
import WhyUs             from '../components/WhyUs';
import About             from '../components/About';
import Contact           from '../components/Contact';
import SEO               from '../components/SEO';

export default function HomePage() {
  return (
    <main id="main-content">
      <SEO
        title="Home Nursing Care, Elderly Care & Medical Equipment Rent – Visakhapatnam"
        description="Humble Health Care Services offers professional home nursing care, elderly care, patient attendant, post-surgery care and medical equipment on rent/sale in Visakhapatnam, Vijayawada, Andhra Pradesh. Available 24/7. Call 9666 566 846."
        keywords="home nursing care Visakhapatnam, elderly care Vizag, patient attendant services, home care services Andhra Pradesh, home healthcare Vijayawada, oxygen concentrator rent Vizag, hospital bed rent Visakhapatnam, post surgery care at home, bedridden patient care at home, nursing attendant near me, home care services near me Visakhapatnam"
        canonical="/"
      />
      <Hero />
      <Services />
      <MedicalEquipments />
      <WhyUs />
      <About />
      <Contact />
    </main>
  );
}

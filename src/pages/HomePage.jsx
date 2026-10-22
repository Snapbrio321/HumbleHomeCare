import Hero              from '../components/Hero';
import Services          from '../components/Services';
import MedicalEquipments from '../components/MedicalEquipments';
import WhyUs             from '../components/WhyUs';
import About             from '../components/About';
import Contact           from '../components/Contact';

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <MedicalEquipments />
      <WhyUs />
      <About />
      <Contact />
    </main>
  );
}

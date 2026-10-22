import { Routes, Route } from 'react-router-dom';
import Navbar            from './components/Navbar';
import Footer            from './components/Footer';
import LocationsStrip    from './components/LocationsStrip';
import HomePage          from './pages/HomePage';
import AboutPage         from './pages/AboutPage';
import ServicesPage      from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import WhyUsPage         from './pages/WhyUsPage';
import ContactPage       from './pages/ContactPage';
import EquipmentPage     from './pages/EquipmentPage';
import LocationsPage     from './pages/LocationsPage';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                    element={<HomePage />} />
        <Route path="/about"               element={<AboutPage />} />
        <Route path="/services"            element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/why-us"              element={<WhyUsPage />} />
        <Route path="/contact"             element={<ContactPage />} />
        <Route path="/equipment"           element={<EquipmentPage />} />
        <Route path="/locations"           element={<LocationsPage />} />
      </Routes>
      <LocationsStrip />
      <Footer />
      <BackToTop />
    </>
  );
}

function BackToTop() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <button onClick={handleClick} className="back-to-top" aria-label="Back to top" title="Back to top">
      ↑
    </button>
  );
}

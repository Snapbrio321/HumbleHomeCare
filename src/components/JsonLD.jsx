import { Helmet } from 'react-helmet-async';

/* ── Local Business + Medical Business schema ── */
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": "https://humblehealthcareservice.com/#business",
    "name": "Humble Health Care Services",
    "alternateName": "Humble Home Care Nursing Services",
    "description": "Professional home nursing care, elderly care, patient attendant services, post-surgery care and medical equipment on rent/sale in Visakhapatnam, Vijayawada and Andhra Pradesh.",
    "url": "https://humblehealthcareservice.com",
    "logo": "https://humblehealthcareservice.com/logo.png",
    "image": "https://humblehealthcareservice.com/logo.png",
    "telephone": ["+919666566846", "+919666566881"],
    "email": "jillepalliab@gmail.com",
    "foundingDate": "2018",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18-186/1 Chinnagadili, Opposite CARE Hospital, Pedda Gadhili, Arilova",
      "addressLocality": "Visakhapatnam",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "530040",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.7730",
      "longitude": "83.3050"
    },
    "hasMap": "https://maps.google.com/?q=18-186/1+Chinnagadili,+Arilova,+Visakhapatnam+530040",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "223",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.google.com/search?q=Humble+Home+Care+Services+Visakhapatnam",
      "https://g.co/kgs/HumbleHomeCareServices",
      "https://github.com/Snapbrio321/HumbleHomeCare"
    ],
    "areaServed": [
      { "@type": "City", "name": "Visakhapatnam" },
      { "@type": "City", "name": "Vijayawada" },
      { "@type": "City", "name": "Rajamahendravaram" },
      { "@type": "City", "name": "Vizianagaram" },
      { "@type": "City", "name": "Kakinada" },
      { "@type": "City", "name": "Khammam" }
    ],
    "serviceType": [
      "Home Nursing Care",
      "Elderly Care Services",
      "Patient Attendant Services",
      "Hospital Care Attendants",
      "Post-Surgery Care",
      "Personal Care and Daily Assistance",
      "Medical Equipment Rental",
      "Oxygen Concentrator Rental",
      "Hospital Bed Rental",
      "Wheelchair Rental"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ── Multiple Locations schema ── */
export function BranchLocationsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Humble Health Care Services Locations",
    "itemListElement": [
      {
        "@type": "LocalBusiness",
        "position": 1,
        "name": "Humble Health Care Services – Visakhapatnam (HQ)",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "18-186/1 Chinnagadili, Opposite CARE Hospital, Pedda Gadhili, Arilova",
          "addressLocality": "Visakhapatnam",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "530040",
          "addressCountry": "IN"
        },
        "telephone": "+919666566846",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "223" }
      },
      {
        "@type": "LocalBusiness",
        "position": 2,
        "name": "Humble Health Care Services – Vijayawada",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GM6F+W5C, Road No. 7, Bharath Nagar, Sri Ramachandra Nagar, Kanuru",
          "addressLocality": "Vijayawada",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "520008",
          "addressCountry": "IN"
        },
        "telephone": "+919666566846",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "223" }
      },
      {
        "@type": "LocalBusiness",
        "position": 3,
        "name": "Humble Health Care Services – Rajamahendravaram",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "GK Gardens, 85-20-2/1A, 1st Line, Near JK Gardens, All Bank Colony, Morampudi",
          "addressLocality": "Rajamahendravaram",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "533103",
          "addressCountry": "IN"
        },
        "telephone": "+919666566846",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "223" }
      },
      {
        "@type": "LocalBusiness",
        "position": 4,
        "name": "Humble Health Care Services – Vizianagaram",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "PRS Complex, Tirumala Hospital Road, Near RTC Complex, Siddarth Nagar, Balaji Nagar",
          "addressLocality": "Vizianagaram",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "535003",
          "addressCountry": "IN"
        },
        "telephone": "+919666566846",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "223" }
      },
      {
        "@type": "LocalBusiness",
        "position": 5,
        "name": "Humble Health Care Services – Khammam",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11-2-50/1, Balaji Nagar",
          "addressLocality": "Khammam",
          "addressRegion": "Telangana",
          "postalCode": "507001",
          "addressCountry": "IN"
        },
        "telephone": "+919666566846",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "223" }
      },
      {
        "@type": "LocalBusiness",
        "position": 6,
        "name": "Humble Health Care Services – Kakinada",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ADB Road, Near Achampet Junction, Panasapadu",
          "addressLocality": "Kakinada",
          "addressRegion": "Andhra Pradesh",
          "postalCode": "533005",
          "addressCountry": "IN"
        },
        "telephone": "+919666566846",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "223" }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

/* ── FAQ schema ── */
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What home care services does Humble Health Care provide in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Humble Health Care Services provides home nursing care, elderly care, patient attendant services, hospital care attendants, post-surgery care and personal daily assistance in Visakhapatnam and across Andhra Pradesh."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide oxygen concentrators on rent in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide oxygen concentrators (5L and 10L), hospital beds, wheelchairs, CPAP/BiPAP machines and other medical equipment on rent and sale in Visakhapatnam with home delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Are your home nursing services available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Humble Health Care Services is available 24 hours a day, 7 days a week for all home nursing, patient attendant and elderly care services. Call 9666 566 846 anytime."
        }
      },
      {
        "@type": "Question",
        "name": "In which cities do you provide home healthcare services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Visakhapatnam, Vijayawada, Rajamahendravaram, Vizianagaram, Kakinada and Khammam. We cover all areas in and around these cities."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a home nurse in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a home nurse by calling 9666 566 846 or 9666 566 881, or WhatsApp us at the same number. You can also fill in the contact form on our website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-surgery care at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide complete post-surgery care at home including wound care, medication reminders, physiotherapy support, health monitoring and dietary assistance for patients recovering after surgery."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of home nursing care in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost depends on the type of service, duration and specific patient requirements. Please contact us at 9666 566 846 to discuss your needs and get a customized care plan and pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide hospital bed on rent in Visakhapatnam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide manual and electric hospital beds on rent with home delivery and installation in Visakhapatnam. We also offer wheelchair, oxygen concentrator and other medical equipment on rent."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

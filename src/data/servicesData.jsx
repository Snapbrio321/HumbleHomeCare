// Central data store for all services — used by ServicesPage, ServiceDetailPage, Footer, etc.

export const servicesData = [
  {
    id: 'home-nursing',
    slug: '/services/home-nursing',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#hn1)"/>
        <path d="M24 13L13 22v14h7v-8h8v8h7V22L24 13z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
        <path d="M21 30h6M24 27v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="19" r="3" fill="white" opacity="0.9"/>
        <defs><linearGradient id="hn1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#1a3a7a"/><stop offset="1" stopColor="#2452a4"/></linearGradient></defs>
      </svg>
    ),
    title: 'Home Nursing Care',
    tagline: 'Professional nursing in the comfort of home',
    color: 'blue',
    heroDesc: 'Our certified home nursing professionals bring hospital-quality care directly to your doorstep. Whether recovering from illness, surgery, or managing a chronic condition, our nurses ensure your loved ones receive attentive medical support in the comfort and privacy of home.',
    points: [
      'Patient monitoring & basic nursing assistance',
      'Post-hospitalization care',
      'Support for bedridden patients',
      'Assistance with doctor-prescribed care routines',
    ],
    highlights: [
      { icon: '🩺', title: 'Vital Signs Monitoring',       desc: 'Blood pressure, temperature, pulse, and oxygen levels tracked regularly.' },
      { icon: '💉', title: 'Wound & IV Care',              desc: 'Wound dressing, injections, and intravenous care as prescribed.' },
      { icon: '🏥', title: 'Post-Hospitalization Support', desc: 'Smooth recovery transition from hospital to home.' },
      { icon: '🛏️', title: 'Bedridden Patient Care',      desc: 'Pressure sore prevention and repositioning support.' },
      { icon: '📋', title: 'Care Routine Management',      desc: 'Doctor-prescribed schedules followed diligently.' },
      { icon: '👨‍⚕️', title: 'Family Health Updates',     desc: 'Regular reporting to family members and doctors.' },
    ],
    whyChoose: [
      'Trained and experienced home nursing staff',
      'Personalized care plans for every patient',
      'Strict adherence to medical protocols',
      'Compassionate and dignified nursing support',
    ],
  },
  {
    id: 'elderly-care',
    slug: '/services/elderly-care',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#ec1)"/>
        <circle cx="24" cy="16" r="5" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M14 36c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M30 28l3 3-3 3" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
        <path d="M33 31h-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.7"/>
        <defs><linearGradient id="ec1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#e87722"/><stop offset="1" stopColor="#c45e0a"/></linearGradient></defs>
      </svg>
    ),
    title: 'Elderly Care Services',
    tagline: 'Dignity, comfort & independence for seniors',
    color: 'orange',
    heroDesc: 'Ageing gracefully deserves the right support. Our compassionate caregivers provide personalized assistance to senior citizens, helping them maintain independence and dignity while ensuring their physical and emotional well-being is always a priority.',
    points: [
      'Daily living assistance',
      'Mobility and walking support',
      'Personal hygiene assistance',
      'Companionship and emotional support',
    ],
    highlights: [
      { icon: '🌅', title: 'Daily Routine Support',       desc: 'Morning and evening assistance with all daily living activities.' },
      { icon: '🚶', title: 'Mobility & Fall Prevention',  desc: 'Safe walking, transfers, and fall prevention measures.' },
      { icon: '🛁', title: 'Personal Hygiene Care',       desc: 'Bathing, grooming, and personal hygiene with dignity.' },
      { icon: '🍽️', title: 'Meal Assistance',            desc: 'Nutritional support and meal-time assistance.' },
      { icon: '💬', title: 'Companionship',               desc: 'Emotional support, conversation, and social engagement.' },
      { icon: '💊', title: 'Medication Reminders',        desc: 'Timely medication reminders and health monitoring.' },
    ],
    whyChoose: [
      'Compassionate caregivers trained in elderly support',
      'Respect for privacy, routines, and preferences',
      'Emotional well-being as a priority',
      'Flexible care schedules to suit family needs',
    ],
  },
  {
    id: 'patient-attendant',
    slug: '/services/patient-attendant',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#pa1)"/>
        <rect x="16" y="20" width="16" height="12" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M20 20v-3a4 4 0 018 0v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M24 25v4M22 27h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <defs><linearGradient id="pa1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#1a3a7a"/><stop offset="1" stopColor="#2452a4"/></linearGradient></defs>
      </svg>
    ),
    title: 'Patient Care & Attendant',
    tagline: 'Dedicated caregivers around the clock',
    color: 'blue',
    heroDesc: 'Our trained patient attendants are available round the clock to provide hands-on assistance to patients recovering at home or admitted in hospital. They act as an extension of the medical care team, ensuring comfort and safety at every step.',
    points: [
      'Day and night attendant services',
      'Feeding and personal care assistance',
      'Bedside patient support',
      'Assistance during recovery',
    ],
    highlights: [
      { icon: '🌙', title: '24-Hour Availability',         desc: 'Day and night attendant services tailored to patient schedules.' },
      { icon: '🍲', title: 'Feeding Assistance',           desc: 'Meal support and dietary assistance for all patients.' },
      { icon: '🛏️', title: 'Bedside Care',                desc: 'Repositioning, comfort measures, and bedside support.' },
      { icon: '🚿', title: 'Personal Hygiene',             desc: 'Bathing, grooming, and daily personal care.' },
      { icon: '🩹', title: 'Basic First Aid',              desc: 'Emergency response and basic first aid when needed.' },
      { icon: '📱', title: 'Family Updates',               desc: 'Regular communication and updates to family members.' },
    ],
    whyChoose: [
      'Trained attendants with patient care experience',
      'Available for both home and hospital settings',
      'Day and night shift options available',
      'Sensitive and respectful personal care',
    ],
  },
  {
    id: 'hospital-attendant',
    slug: '/services/hospital-attendant',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#ha1)"/>
        <rect x="13" y="18" width="22" height="16" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M18 18v-3h12v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <path d="M17 26h14M17 30h8" stroke="white" strokeWidth="1.6" strokeLinecap="round" opacity="0.8"/>
        <circle cx="33" cy="30" r="1.5" fill="white" opacity="0.8"/>
        <defs><linearGradient id="ha1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#e87722"/><stop offset="1" stopColor="#c45e0a"/></linearGradient></defs>
      </svg>
    ),
    title: 'Hospital Care Attendants',
    tagline: 'Reliable support during hospital stays',
    color: 'orange',
    heroDesc: 'Navigating a hospital stay can be overwhelming for patients and families. Our hospital care attendants provide professional, compassionate support during admission, working alongside doctors and nurses to ensure the patient\'s comfort and daily needs are met throughout their stay.',
    points: [
      'Round-the-clock attendant support',
      'Coordination with hospital staff',
      'Comfort and companionship',
      'Daily routine assistance in hospital',
    ],
    highlights: [
      { icon: '🏥', title: 'Hospital Admission Support',   desc: 'Present during admission, procedures, and ward transfers.' },
      { icon: '🤝', title: 'Staff Coordination',           desc: 'Works closely with nurses, doctors, and ward staff.' },
      { icon: '🧹', title: 'Bedside Comfort',              desc: 'Cleanliness and comfort maintenance at the bedside.' },
      { icon: '🍱', title: 'Meal Support',                 desc: 'Feeding assistance and meal-time support in hospital.' },
      { icon: '💬', title: 'Companionship',                desc: 'Reduces anxiety and loneliness during hospital stays.' },
      { icon: '📋', title: 'Discharge Support',            desc: 'Assistance with discharge planning and homecoming.' },
    ],
    whyChoose: [
      'Experienced hospital environment attendants',
      'Professional coordination with medical staff',
      'Continuous presence for patient comfort',
      'Support from admission to discharge',
    ],
  },
  {
    id: 'post-surgery',
    slug: '/services/post-surgery',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#ps1)"/>
        <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M21 24l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="ps1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#1a3a7a"/><stop offset="1" stopColor="#2452a4"/></linearGradient></defs>
      </svg>
    ),
    title: 'Post-Surgery Care',
    tagline: 'Safe recovery after your procedure',
    color: 'blue',
    heroDesc: 'Recovery after surgery requires careful attention and consistent support. Our post-surgery care team ensures your recovery journey is smooth, safe, and aligned with your doctor\'s recommendations — helping you heal faster and more comfortably at home.',
    points: [
      'Post-operative wound monitoring',
      'Medication reminder & assistance',
      'Prescribed exercise support',
      'Daily recovery activity help',
    ],
    highlights: [
      { icon: '🩹', title: 'Wound Care',                   desc: 'Dressing changes, wound monitoring, and infection prevention.' },
      { icon: '💊', title: 'Medication Management',        desc: 'Timely reminders and assistance with prescribed medications.' },
      { icon: '🏃', title: 'Physiotherapy Support',        desc: 'Assisted mobility exercises and physiotherapy routines.' },
      { icon: '🍽️', title: 'Nutritional Support',         desc: 'Diet guidance and meal assistance during recovery.' },
      { icon: '📊', title: 'Health Monitoring',            desc: 'Vital signs tracking and recovery progress monitoring.' },
      { icon: '👨‍⚕️', title: 'Follow-up Coordination',    desc: 'Liaison with surgeons and doctors for follow-up care.' },
    ],
    whyChoose: [
      'Specialized post-operative care protocols',
      'Experienced in surgical recovery support',
      'Close coordination with surgical teams',
      'Safe, comfortable home-based recovery',
    ],
  },
  {
    id: 'personal-care',
    slug: '/services/personal-care',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="22" fill="url(#pc1)"/>
        <path d="M24 14c-3 0-7 2-7 7 0 3 2 5 4 6l3 5 3-5c2-1 4-3 4-6 0-5-4-7-7-7z" stroke="white" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <path d="M21 22l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="pc1" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#e87722"/><stop offset="1" stopColor="#c45e0a"/></linearGradient></defs>
      </svg>
    ),
    title: 'Personal Care & Daily Assistance',
    tagline: 'Respectful help with everyday activities',
    color: 'orange',
    heroDesc: 'Maintaining personal dignity and independence is essential to well-being. Our caregivers provide respectful, sensitive assistance with all personal care activities, ensuring every individual feels comfortable, clean, and cared for in the most dignified manner possible.',
    points: [
      'Bathing and personal hygiene',
      'Dressing and grooming support',
      'Mobility and transfer assistance',
      'Meal preparation and feeding',
    ],
    highlights: [
      { icon: '🚿', title: 'Bathing & Hygiene',            desc: 'Complete personal hygiene routines with dignity and respect.' },
      { icon: '👔', title: 'Dressing & Grooming',          desc: 'Assistance with dressing, grooming, and appearance care.' },
      { icon: '🚶', title: 'Mobility Support',             desc: 'Safe transfers, walking assistance, and fall prevention.' },
      { icon: '🍳', title: 'Meal Preparation',             desc: 'Cooking, meal preparation, and feeding assistance.' },
      { icon: '🧹', title: 'Light Housekeeping',           desc: 'Tidying, laundry, and maintaining a clean living space.' },
      { icon: '🛒', title: 'Errands & Escort',             desc: 'Shopping, errands, and appointment escort services.' },
    ],
    whyChoose: [
      'Dignity and respect in every interaction',
      'Sensitivity to personal preferences and routines',
      'Flexible scheduling to match lifestyle needs',
      'Holistic approach to daily well-being',
    ],
  },
];

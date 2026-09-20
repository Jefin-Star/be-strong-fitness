import { MembershipPlan, Facility } from '../types';

export const GYM_INFO = {
  name: 'BE STRONG FITNESS STUDIO',
  brandTag: 'FITNESS & TRAINING STUDIO',
  tagline: 'Build Your Strength. Transform Your Life.',
  phone: '82898 12129',
  phoneFormatted: '+91 82898 12129',
  phoneRaw: '918289812129',
  email: 'bestrongfitnessstudio1@gmail.com',
  address: 'BE STRONG FITNESS STUDIO, Trivandrum, Kerala 695017',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3945.5075912941466!2d76.91424617501325!3d8.547089991496271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMzInNDkuNSJOIDc2wrA1NScwMC42IkU!5e0!3m2!1sen!2sin!4v1789910089606!5m2!1sen!2sin',
  registrationFee: 750,
  timings: {
    weekdays: '5:30 AM – 10:00 PM',
    sunday: '6:00 AM – 1:00 PM',
    steamBath: 'Available Daily (Pre-booking required)'
  }
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  // Standard Memberships
  {
    id: 'std-1year',
    name: '1 Year Annual Elite',
    category: 'standard',
    duration: '12 Months',
    salePrice: 12500,
    regularPrice: 19500,
    monthlyEquivalent: 1042,
    savings: 9100,
    popular: true,
    tag: 'BEST VALUE (SAVE ₹9,100)',
    features: [
      'Full access to all strength & cardio zones',
      'Unisex environment with dedicated lockers',
      'Free fitness assessment & body composition test',
      'General workout & routine guidance',
      'Terrace workout access & events',
      'Access to steam bath at member preferential rate'
    ],
    note: 'Most economical long-term transformation plan (only ₹1,042/month)'
  },
  {
    id: 'std-6months',
    name: '6 Months Power Pass',
    category: 'standard',
    duration: '6 Months',
    salePrice: 9500,
    regularPrice: 11000,
    monthlyEquivalent: 1583,
    savings: 1500,
    popular: false,
    tag: 'SAVE ₹1,500',
    features: [
      'Full access to all strength & cardio zones',
      'Unisex workout floors with high-end machinery',
      'Locker room & shower access',
      'Routine workout card update',
      'Terrace workout access'
    ]
  },
  {
    id: 'std-3months',
    name: '3 Months Builder Pass',
    category: 'standard',
    duration: '3 Months',
    salePrice: 5000,
    regularPrice: 6500,
    monthlyEquivalent: 1667,
    savings: 1500,
    popular: false,
    tag: 'SAVE ₹1,500',
    features: [
      'Complete equipment & weights access',
      'Supportive training floor instructors',
      'Unisex clean facility with modern amenities',
      'Locker room access'
    ]
  },
  {
    id: 'std-monthly',
    name: 'Monthly Standard',
    category: 'standard',
    duration: '1 Month',
    salePrice: 1800,
    regularPrice: 2000,
    monthlyEquivalent: 1800,
    savings: 200,
    popular: false,
    tag: 'SAVE ₹200',
    features: [
      'Full unisex gym floor access',
      'Free weights, machines & cardio',
      'Basic trainer onboarding',
      'Locker facilities'
    ]
  },
  {
    id: 'std-student',
    name: 'Student Package',
    category: 'standard',
    duration: 'Monthly',
    salePrice: 1500,
    monthlyEquivalent: 1500,
    popular: false,
    tag: 'MUST SHOW STUDENT ID',
    features: [
      'Special discounted rate for college/school students',
      'Full equipment and weight floor access',
      'Certified trainer guidance',
      'Valid student ID card verification required'
    ],
    note: 'Must produce valid educational institution ID card'
  },
  {
    id: 'std-week',
    name: 'One Week Trial Pass',
    category: 'standard',
    duration: '7 Days',
    salePrice: 700,
    regularPrice: 800,
    popular: false,
    tag: 'SHORT TERM',
    features: [
      '7 days uninterrupted gym access',
      'Perfect for visitors and trial members',
      'Strength & cardio floor entry'
    ]
  },
  {
    id: 'std-day',
    name: 'One Day Quick Pass',
    category: 'standard',
    duration: 'Single Day',
    salePrice: 300,
    regularPrice: 400,
    popular: false,
    tag: 'QUICK PASS',
    features: [
      'Single day unlimited gym access',
      'Try out state-of-the-art machines',
      'No registration fee required'
    ]
  },

  // Couple Packages
  {
    id: 'cpl-gen-1year',
    name: 'Couple General - 1 Year',
    category: 'couple',
    subCategory: 'General Training (2 Persons)',
    duration: '12 Months (2 Persons)',
    salePrice: 22000,
    regularPrice: 25000,
    monthlyEquivalent: 1833,
    savings: 18800,
    popular: true,
    tag: 'BEST VALUE (SAVE ₹18,800)',
    features: [
      'Full gym access for 2 partners / friends',
      '₹1,833/month collective rate (₹916/person/mo)',
      'Unisex welcoming training environment',
      'Locker & shower facilities for both',
      'Annual body metrics review'
    ]
  },
  {
    id: 'cpl-gen-6months',
    name: 'Couple General - 6 Months',
    category: 'couple',
    subCategory: 'General Training (2 Persons)',
    duration: '6 Months (2 Persons)',
    salePrice: 18000,
    regularPrice: 20000,
    monthlyEquivalent: 3000,
    savings: 2000,
    popular: false,
    tag: 'SAVE ₹2,000',
    features: [
      'Access for 2 partners for 6 full months',
      'Full cardio & heavy strength training',
      'Dual locker access'
    ]
  },
  {
    id: 'cpl-gen-3months',
    name: 'Couple General - 3 Months',
    category: 'couple',
    subCategory: 'General Training (2 Persons)',
    duration: '3 Months (2 Persons)',
    salePrice: 9500,
    regularPrice: 10500,
    monthlyEquivalent: 3167,
    savings: 1000,
    popular: false,
    tag: 'SAVE ₹1,000',
    features: [
      'Quarterly couple membership',
      'Dedicated equipment access',
      'Floor trainer support'
    ]
  },
  {
    id: 'cpl-gen-monthly',
    name: 'Couple General - Monthly',
    category: 'couple',
    subCategory: 'General Training (2 Persons)',
    duration: '1 Month (2 Persons)',
    salePrice: 3400,
    regularPrice: 4000,
    monthlyEquivalent: 3400,
    popular: false,
    tag: 'COUPLE RATE (₹1,700/person)',
    features: [
      'Monthly access for 2 people',
      '₹1,700 per person equivalent',
      'Complete strength floor access'
    ]
  },
  {
    id: 'cpl-pt-3months',
    name: 'Couple PT - 3 Months',
    category: 'couple',
    subCategory: 'Personal Training Couple',
    duration: '3 Months (2 Persons)',
    salePrice: 30000,
    regularPrice: 42000,
    monthlyEquivalent: 10000,
    savings: 3000,
    popular: true,
    tag: 'SAVE ₹3,000',
    features: [
      'Dedicated personal trainer for both partners',
      'Joint customized workout and diet plans',
      'Continuous form correction & motivation',
      'Rapid body transformation focus'
    ]
  },
  {
    id: 'cpl-pt-monthly',
    name: 'Couple PT - Monthly',
    category: 'couple',
    subCategory: 'Personal Training Couple',
    duration: '1 Month (2 Persons)',
    salePrice: 11000,
    regularPrice: 14000,
    monthlyEquivalent: 11000,
    savings: 3000,
    popular: false,
    tag: 'SAVE ₹3,000',
    features: [
      '1 month dedicated couple coaching',
      'Trainer assigned exclusively during session',
      'Tailored nutritional blueprint'
    ]
  },

  // Personal Training (1-on-1 & Small Group)
  {
    id: 'pt-1on1-3months',
    name: '1-on-1 PT - 3 Months Transformation',
    category: 'pt',
    subCategory: 'Dedicated 1-on-1 Coaching',
    duration: '3 Months',
    salePrice: 16000,
    regularPrice: 18000,
    savings: 2000,
    popular: true,
    tag: 'SAVE ₹2,000 (TRANSFORMATION PROGRAM)',
    features: [
      'Comprehensive individualized 1-on-1 coaching',
      'Extended transformation program structure',
      'Customized progressive overload programming',
      'Nutrition & macronutrient meal plans',
      'Weekly body composition & fat percentage tracking'
    ]
  },
  {
    id: 'pt-1on1-monthly',
    name: '1-on-1 PT - Monthly',
    category: 'pt',
    subCategory: 'Dedicated 1-on-1 Coaching',
    duration: '1 Month',
    salePrice: 6000,
    popular: false,
    tag: 'INDIVIDUAL COACHING',
    features: [
      'Comprehensive individualized coaching',
      'Dedicated trainer throughout each session',
      'Personalized workout plan and form guidance',
      'Dietary intake recommendations'
    ]
  },
  {
    id: 'pt-group-3months',
    name: 'Small Group PT - 3 Months (2-3 Persons)',
    category: 'pt',
    subCategory: 'Small Group Coaching (2-3 Persons)',
    duration: '3 Months',
    salePrice: 39000,
    savings: 1500,
    popular: false,
    tag: 'SAVE ₹1,500 (₹13,000/person)',
    features: [
      'Train together with customized personal attention',
      'Total package: ₹39,000 for group of 3 (₹13,000/person)',
      'High-energy competitive group workout',
      'Tailored fitness roadmaps for all members'
    ]
  },
  {
    id: 'pt-group-monthly',
    name: 'Small Group PT - Monthly (2-3 Persons)',
    category: 'pt',
    subCategory: 'Small Group Coaching (2-3 Persons)',
    duration: '1 Month',
    salePrice: 13500,
    popular: false,
    tag: '₹4,500 PER PERSON (3 PERSONS)',
    features: [
      '₹4,500 per person (Total ₹13,500 for 3)',
      'Customized group attention',
      'Motivating buddy workout format'
    ]
  },

  // Add-ons & Facilities
  {
    id: 'addon-steambath',
    name: 'Steam Bath Facility Session',
    category: 'addons',
    subCategory: 'Recovery & Detox',
    duration: '1-Hour Session',
    salePrice: 500,
    popular: false,
    tag: 'WELLNESS & RECOVERY',
    features: [
      'Private 1-hour steam bath session',
      'Improves circulation and relaxes sore muscle fibers',
      'Deep pores detoxification and recovery',
      'Open for all registered members'
    ],
    note: 'Session rate: ₹500 per 1-hour session'
  },
  {
    id: 'addon-group-discount',
    name: 'Corporate / Team Group Discount',
    category: 'addons',
    subCategory: 'Team Membership',
    duration: 'Monthly / Member',
    salePrice: 1500,
    popular: true,
    tag: 'TEAM RATE: ₹1,500 / PERSON',
    features: [
      'Special discounted rate: ₹1,500 per person / month',
      'Criteria: Minimum 5+ members joining together as a team',
      'Full equipment and fitness floor access',
      'Ideal for corporate teams, sports squads, and friend circles'
    ],
    note: 'Applies strictly to official team registrations of 5+ members joining together'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'strength-weights',
    title: 'Heavy Strength & Olympic Free Weights',
    subtitle: 'High-Grade Barbells, Dumbbells & Power Racks',
    description: 'Equipped with heavy-duty Olympic barbells, calibrated cast plates, dumbbells up to 45kg+, adjustable benches, and dual cable crossovers built for serious muscle gains and progressive overload.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    features: ['Olympic Barbell Racks', 'Dumbbells from 2kg to 45kg+', 'Deadlift Platforms', 'Isolation Machines']
  },
  {
    id: 'cardio-conditioning',
    title: 'Cardiovascular & HIIT Zone',
    subtitle: 'Stamina, Fat Loss & Endurance',
    description: 'Commercial treadmills, cross trainers, spin cycles, and rowing ergonomics designed for rapid calorie burning, aerobic conditioning, and heart health.',
    imageUrl: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
    features: ['Commercial Treadmills', 'Spinning Cycles', 'Cross Trainers', 'HIIT Circuit Gear']
  },
  {
    id: 'steam-recovery',
    title: 'Therapeutic Steam Bath Suite',
    subtitle: 'Post-Workout Muscle Recovery & Detox',
    description: 'Unwind and accelerate your recovery in our hygienic eucalyptus-infused steam chamber. Relieve delayed onset muscle soreness, boost blood circulation, and detoxify.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    features: ['Deep Muscle Relief', 'Toxin Flush', 'Clean & Sanitized', 'Individual Slots at ₹500/hr']
  },
  {
    id: 'terrace-workout',
    title: 'Open-Air Terrace & Functional Arena',
    subtitle: 'Functional Training, Battle Ropes & Calisthenics',
    description: 'Experience invigorating open-air evening workouts on our dedicated terrace zone. Perfect for tyre flips, battle ropes, calisthenics, agility drills, and team conditioning.',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    features: ['Outdoor Fresh-Air Training', 'Battle Ropes & Agility', 'Group Conditioning', 'Calisthenics Rig']
  },
  {
    id: 'personal-coaching',
    title: 'Certified Personal Trainers & Diet Guidance',
    subtitle: '1-on-1 Guidance For Real Measurable Transformations',
    description: 'Our experienced coaches guide you through every lift, correcting posture, motivating you past limits, and drafting customized Indian macronutrient meal plans.',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80',
    features: ['Form Correction', 'Macronutrient Diet Planning', 'Body Fat Tracking', 'Goal-Oriented Mentorship']
  }
];

export const TESTIMONIALS = [
  {
    name: 'Arjun Menon',
    role: 'Member for 1 Year',
    text: 'Lost 14 kgs and gained real muscle definition. The trainers at Be Strong Fitness Studio are attentive and knowledgeable. The atmosphere is motivating without being intimidating.',
    rating: 5,
    transformation: '-14 kg Fat Loss'
  },
  {
    name: 'Ananya Pillai',
    role: 'Couple Package Member',
    text: 'My husband and I joined the Couple General training program. The gym is super clean, respectful, and safe for women. The steam bath facility after heavy leg days is an absolute luxury!',
    rating: 5,
    transformation: 'Couple Fitness Goal'
  },
  {
    name: 'Rahul Nair',
    role: '1-on-1 Personal Training',
    text: 'Best fitness studio in town! The equipment is well-maintained and the 3-month PT package completely overhauled my strength and posture. Worth every rupee.',
    rating: 5,
    transformation: '+6 kg Lean Muscle'
  }
];

export const FAQS = [
  {
    question: 'Is Be Strong Fitness Studio suitable for beginners and women?',
    answer: 'Absolutely! BE STRONG FITNESS STUDIO prides itself on maintaining a safe, respectful, clean, and encouraging environment for everyone—from first-time beginners to seasoned lifters. Our trainers provide free form correction and guidance.'
  },
  {
    question: 'What is the mandatory registration fee?',
    answer: 'There is a one-time ₹750 registration fee applicable to all new members across all standard and couple packages. This covers member profiling, locker allotment, and administrative setup.'
  },
  {
    question: 'How do I avail the Steam Bath facility?',
    answer: 'Steam Bath is open for all registered members at a preferential session rate of ₹500 for a 1-hour session. You can book your slot in advance with the front desk.'
  },
  {
    question: 'What is the policy for informal group / terrace sessions?',
    answer: 'All members working out in informal group sessions (including evening terrace workout groups) must register and pay ₹1,800 per person individually. Official group discount rates (₹1,500/month) apply strictly to official team registrations of 5 or more members joining together.'
  },
  {
    question: 'Are membership fees refundable?',
    answer: 'As per official gym policy, fees once paid are strictly non-refundable and non-transferable under any circumstances.'
  }
];

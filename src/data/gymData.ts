import { MembershipPlan, Facility, GymService } from '../types';

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
    name: 'Lekshmi Vishwanathan',
    role: 'Verified Google Review (16 reviews)',
    text: 'I approached ANANDU with very low confidence, but in just one month, he gave me so much confidence and motivation. He helped me reduce more than 5 kg in a month, and I’m truly grateful for all the support and encouragement!',
    rating: 5,
    transformation: '-5 kg in 1 Month'
  },
  {
    name: 'Samitha Sn',
    role: 'Verified Google Review (4 reviews)',
    text: 'I visited many unisex gyms. But "BE STRONG" Gym has a great atmosphere where women can work out safely until 10 PM without any fear. I am very satisfied with the clean and safe environment.',
    rating: 5,
    transformation: 'Women Safe till 10 PM'
  },
  {
    name: 'Kadeeja Manika',
    role: 'Verified Google Review',
    text: 'I sit most of the day for work, so knee pain was a real issue initially… With regular movement and proper guidance, my flexibility has improved and the knee pain is gone completely.',
    rating: 5,
    transformation: 'Knee Pain Relieved'
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
    question: 'Do you offer medical rehabilitation for knee pain, back pain, and cervical spondylitis?',
    answer: 'Yes! We specialize in evidence-based corrective exercise and rehabilitation for knee issues, cervical spondylitis, lumbar back pain, and scoliosis. Our certified trainers work with you through low-impact progressive loading, postural alignment, and core stabilization.'
  },
  {
    question: 'Can women with PCOD, PCOS, or thyroid issues join your fitness programs?',
    answer: 'Definitely. We provide specialized hormone-conscious resistance and metabolic training specifically designed to reverse insulin resistance, manage thyroid fatigue, and assist weight management in a supportive, safe unisex atmosphere.'
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

export const GYM_SERVICES: GymService[] = [
  {
    id: 'knee-rehab',
    title: 'Knee Rehab',
    category: 'rehab',
    categoryLabel: 'Medical & Corrective Rehab',
    tag: 'JOINT & LIGAMENT RECOVERY',
    shortDesc: 'Scientific rehabilitation protocols for ACL/meniscus post-surgery recovery, runner’s knee, patellar tendonitis, and arthritis.',
    fullDesc: 'Our certified rehab coaches employ zero-impact progressive resistance, VMO (Vastus Medialis Oblique) isolation, hip-knee biomechanical realignment, and synovial mobility drills to eliminate knee pain, restore complete flexion/extension, and prevent re-injury.',
    benefits: [
      'ACL, PCL & Meniscus post-surgery recovery routines',
      'VMO activation & quadriceps/hamstring rebalancing',
      'Low-impact progressive joint loading & mobility drills',
      'Gait, squat, and everyday movement mechanics correction'
    ],
    idealFor: 'Individuals recovering from knee surgery, dealing with osteoarthritic stiffness, runner’s knee, or chronic joint discomfort.',
    iconName: 'Activity',
    recommendedPlanId: 'pt-ind-1month'
  },
  {
    id: 'cervical-spondylitis',
    title: 'Cervical Spondylitis',
    category: 'rehab',
    categoryLabel: 'Medical & Corrective Rehab',
    tag: 'CERVICAL SPINE & POSTURE',
    shortDesc: 'Specialized cervical decompression and deep neck flexor stabilization to eliminate radiating neck pain and tension.',
    fullDesc: 'Desk posture, tech neck, and vertebral degeneration cause severe nerve compression and cervical stiffness. We utilize chin-tuck isometric stabilization, upper thoracic extension, scapular retraction, and shoulder girdle strengthening to relieve pressure from the cervical vertebrae and restore neck mobility.',
    benefits: [
      'Targeted cervical decompression & isometric neck stabilization',
      'Deep neck flexor strengthening & thoracic extension',
      'Scapular retraction & shoulder girdle re-education',
      'Relief from radiating arm numbness and tension headaches'
    ],
    idealFor: 'Desk workers, IT professionals, and individuals experiencing cervical spine strain, radiating neck-to-shoulder pain, or stiffness.',
    iconName: 'ShieldAlert',
    recommendedPlanId: 'pt-ind-1month'
  },
  {
    id: 'back-pain',
    title: 'Back Pain Relief & Core Rehab',
    category: 'rehab',
    categoryLabel: 'Medical & Corrective Rehab',
    tag: 'SPINAL HEALTH & CORE',
    shortDesc: 'Evidence-based spine-sparing protocols, McGill core stabilization, and glute activation for chronic back pain and sciatica.',
    fullDesc: 'Chronic lower back pain, disc bulges, and sciatica are primarily triggered by weak deep core stabilizers and inactive glutes. We train the core as an anti-rotational brace—protecting the lumbar spine while building posterior chain resilience without harmful spinal flexion.',
    benefits: [
      'Lumbar disc decompression & spine-sparing protocols',
      'Glute & posterior chain neuromuscular activation',
      'Anterior & posterior pelvic tilt correction',
      'Safe core bracing exercises without dangerous flexion'
    ],
    idealFor: 'Anyone struggling with disc bulge, sciatica, lumbago, or persistent lower back soreness during standing, sitting, or lifting.',
    iconName: 'ShieldCheck',
    recommendedPlanId: 'pt-ind-1month'
  },
  {
    id: 'pcod-pcos-thyroid',
    title: 'PCOD, PCOS & Thyroid Conditioning',
    category: 'specialized',
    categoryLabel: 'Specialized Health Care',
    tag: 'HORMONAL & METABOLIC RESET',
    shortDesc: 'Targeted resistance training and hormone-balancing conditioning designed to reverse insulin resistance and manage thyroid fatigue.',
    fullDesc: 'Women with PCOD, PCOS, or hypothyroidism require specialized exercise programming that avoids excessive cortisol spikes. Our progressive resistance protocols enhance insulin receptor sensitivity, boost basal metabolic rate (BMR), manage weight fluctuations, and balance energy levels naturally.',
    benefits: [
      'Insulin sensitivity enhancement through progressive hypertrophy',
      'Cortisol-conscious, low-stress metabolic strength workouts',
      'Customized macronutrient & high-protein nutrition guidance',
      'Supportive, respectful, and private unisex gym environment'
    ],
    idealFor: 'Women dealing with irregular cycles, PCOS/PCOD weight-loss plateaus, sluggish thyroid metabolism, or chronic fatigue.',
    iconName: 'Sparkles',
    recommendedPlanId: 'std-3months'
  },
  {
    id: 'post-pregnancy',
    title: 'Post Pregnancy Rehab & Fitness',
    category: 'specialized',
    categoryLabel: 'Specialized Health Care',
    tag: 'SAFE POSTPARTUM RECOVERY',
    shortDesc: 'Nurturing, doctor-aligned rehabilitation focusing on diastasis recti repair, pelvic floor strength, and postnatal fat loss.',
    fullDesc: 'Postpartum recovery requires scientific gentleness. We safely re-engage the transverse abdominis, address diastasis recti (abdominal muscle separation), rebuild pelvic floor integrity, correct nursing-posture strain, and gradually restore pre-pregnancy stamina and strength.',
    benefits: [
      'Diastasis recti safe core re-education & closure',
      'Pelvic floor neuromuscular re-strengthening',
      'Lower back and pelvic stability exercises',
      'Gradual fat loss & maternal stamina rebuilding'
    ],
    idealFor: 'New mothers (cleared by physician for vaginal or C-section birth) wanting safe, guided body recovery and toning.',
    iconName: 'HeartHandshake',
    recommendedPlanId: 'pt-ind-1month'
  },
  {
    id: 'scoliosis',
    title: 'Scoliosis Support & Correction',
    category: 'rehab',
    categoryLabel: 'Medical & Corrective Rehab',
    tag: 'POSTURAL & SPINAL ALIGNMENT',
    shortDesc: 'Corrective asymmetrical muscular balancing, concave-side stretching, and core stabilization to counteract spinal curvature.',
    fullDesc: 'Scoliosis creates severe muscular asymmetry where one side of the back is overstretched while the opposite is hyper-contracted. Our tailored corrective protocols focus on unilateral strength training, rotational stabilization, and postural correction to alleviate asymmetric load and nerve pinch.',
    benefits: [
      'Asymmetrical muscular balancing exercises',
      'Unilateral latissimus & erector spinae activation',
      'Spinal elongation and decompression movements',
      'Relief from uneven shoulder and pelvic tension'
    ],
    idealFor: 'Teens and adults diagnosed with mild to moderate functional or structural scoliosis seeking pain reduction and postural stability.',
    iconName: 'AlignCenter',
    recommendedPlanId: 'pt-ind-1month'
  },
  {
    id: 'senior-citizen',
    title: 'Senior Citizen Special Training',
    category: 'personal',
    categoryLabel: 'Personalized & Age-Specific',
    tag: 'MOBILITY, BONE DENSITY & VITALITY',
    shortDesc: 'Low-impact, high-safety functional training to increase bone density, prevent falls, enhance balance, and maintain youthful vitality.',
    fullDesc: 'Age is just a number when functional strength is maintained. Our senior fitness programs focus on retaining bone mineral density (countering osteoporosis), improving vestibular and proprioceptive balance to prevent slips and falls, and lubricating arthritic joints with gentle guided resistance.',
    benefits: [
      'Osteoporosis-safe progressive resistance training',
      'Fall prevention, balance, and stability drills',
      'Gentle joint mobility & arthritis comfort routines',
      'Attentive, patient, and certified senior coaches'
    ],
    idealFor: 'Seniors aged 50+ desiring active independence, healthy joint movement, vitality, and strong bone health.',
    iconName: 'HeartPulse',
    recommendedPlanId: 'std-3months'
  },
  {
    id: 'crossfit',
    title: 'Crossfit & Functional Fitness',
    category: 'performance',
    categoryLabel: 'Performance & Conditioning',
    tag: 'ELITE ATHLETIC POWER',
    shortDesc: 'High-octane functional training combining Olympic lifts, plyometrics, tyre flips, battle ropes, and daily challenging WODs.',
    fullDesc: 'Push your mental and physical limits. Our CrossFit conditioning incorporates functional compound movements at high intensity—utilizing our open-air terrace functional rig, bumper plates, medicine balls, kettlebells, and bodyweight gymnastics to build raw strength, power output, and stamina.',
    benefits: [
      'Olympic lifting mechanics (clean, jerk, snatch)',
      'Terrace arena training with tyre flips & battle ropes',
      'Constantly varied high-intensity WODs',
      'Cardiorespiratory endurance & explosive power'
    ],
    idealFor: 'Fitness enthusiasts, athletes, and anyone wanting raw functional capability, stamina, and sculpted athletic definition.',
    iconName: 'Flame',
    recommendedPlanId: 'std-1year'
  },
  {
    id: 'group-training',
    title: 'Dynamic Group Training',
    category: 'performance',
    categoryLabel: 'Performance & Conditioning',
    tag: 'TEAM ENERGY & MOTIVATION',
    shortDesc: 'Thrilling, high-energy group circuits and terrace sessions that keep workout motivation and collective accountability at an all-time peak.',
    fullDesc: 'Experience the electric energy of sweating together. Our group training sessions combine circuit stations, partner challenges, calorie-burning routines, and music-driven motivation. Perfect for friend circles, colleagues, and team training with discounted group packages.',
    benefits: [
      'High-tempo circuit and interval stations',
      'Infectious team energy and friendly rivalry',
      'Terrace open-air evening group sessions',
      'Special team rates (₹1,500/mo for 5+ members)'
    ],
    idealFor: 'Friends, corporate teams, and workout partners who thrive on collective energy, accountability, and fun competition.',
    iconName: 'Users',
    recommendedPlanId: 'addon-group-discount'
  },
  {
    id: 'personal-training',
    title: 'Personal Training for All Ages',
    category: 'personal',
    categoryLabel: 'Personalized & Age-Specific',
    tag: '1-ON-1 BESPOKE COACHING',
    shortDesc: 'Dedicated one-on-one transformation mentorship for teens, busy executives, beginners, and mature lifters with custom nutrition.',
    fullDesc: 'Skip the guesswork and achieve accelerated results with your dedicated certified coach. Every rep, set, and rest interval is monitored. We design customized progressive workout regimens and Indian dietary frameworks aligned with your body type, schedule, and transformation targets.',
    benefits: [
      '100% dedicated coach attention & rep-by-rep form correction',
      'Customized macro-calculated Indian diet planning',
      'Weekly body composition analysis & progress tracking',
      'Programs customized for teens, young adults, and older adults'
    ],
    idealFor: 'Anyone seeking fast, safe, and accountable transformation—from complete gym novices to advanced athletes seeking peak performance.',
    iconName: 'Award',
    recommendedPlanId: 'pt-ind-3months'
  },
  {
    id: 'couple-training',
    title: 'Couple Special Training',
    category: 'personal',
    categoryLabel: 'Personalized & Age-Specific',
    tag: 'FITNESS TOGETHER & SAVE',
    shortDesc: 'Structured partner workouts for couples or best friends to stay accountable, motivate each other, and achieve dual transformations.',
    fullDesc: 'Fitness is better together. Our Couple Special Training package pairs you with your partner or friend for synchronized coaching. Enjoy partner resistance exercises, healthy competition, shared accountability, and massive savings over individual memberships.',
    benefits: [
      'Simultaneous personalized coaching for 2 persons',
      'Partner exercises, synchronization, and accountability',
      'Huge cost savings compared to separate memberships',
      'Flexible scheduling for working couples'
    ],
    idealFor: 'Couples, spouses, siblings, or best friends who want to bond while getting fit, strong, and energized together.',
    iconName: 'Smile',
    recommendedPlanId: 'cpl-gen-1year'
  },
  {
    id: 'hiit-training',
    title: 'HIIT TRAINING (High Intensity Interval)',
    category: 'performance',
    categoryLabel: 'Performance & Conditioning',
    tag: 'MAX CALORIE BURN & EPOC',
    shortDesc: 'Short, explosive bursts of maximum effort alternated with quick recovery intervals to ignite rapid fat shredding and aerobic power.',
    fullDesc: 'Short on time but hungry for results? Our HIIT protocols trigger the scientific EPOC (Excess Post-Exercise Oxygen Consumption) effect, meaning your body keeps burning calories for up to 24-36 hours after leaving the studio. Combines sprint cycles, rowers, kettlebells, and plyometrics.',
    benefits: [
      'Maximum caloric expenditure in 30-40 minutes',
      'Post-workout EPOC metabolic afterburn for 24+ hours',
      'Preserves lean muscle mass while torching visceral fat',
      'Dramatic cardiovascular & lung capacity improvement'
    ],
    idealFor: 'Busy professionals seeking maximum fat burn in limited daily time, and those breaking through stubborn weight-loss plateaus.',
    iconName: 'Timer',
    recommendedPlanId: 'std-6months'
  },
  {
    id: 'steam-bath',
    title: 'STEAM BATH',
    category: 'wellness',
    categoryLabel: 'Recovery & Wellness',
    tag: 'DETOX & MUSCLE RECOVERY',
    shortDesc: 'Hygienic, eucalyptus-infused steam chamber to flush toxins, eliminate DOMS muscle stiffness, and calm the nervous system.',
    fullDesc: 'Recovery is where muscle growth and rejuvenation happen. Step into our state-of-the-art steam bath facility to dilate blood vessels, wash away accumulated lactic acid, clear skin pores, and deeply de-stress both mind and body after heavy lifting or a busy workday.',
    benefits: [
      'Accelerates muscle fiber recovery & relieves soreness (DOMS)',
      'Deep skin and pore detoxification',
      'Improves cardiovascular circulation and reduces joint stiffness',
      'Available for all registered members (₹500 / 1-hour slot)'
    ],
    idealFor: 'Gym members seeking accelerated post-workout recovery, stress relief, skin detoxification, and therapeutic relaxation.',
    iconName: 'Droplets',
    recommendedPlanId: 'addon-steambath'
  }
];


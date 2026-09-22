import { GoogleReview } from '../types';

export const GOOGLE_REVIEWS_SUMMARY = {
  averageRating: 4.9,
  totalReviewsCount: 280,
  googleMapsUrl: 'https://maps.google.com/?q=BE+STRONG+FITNESS+STUDIO+Sreekaryam+Trivandrum',
  ratingBreakdown: {
    fiveStar: 96,
    fourStar: 4,
    threeStar: 0,
    twoStar: 0,
    oneStar: 0,
  },
  keyHighlights: [
    { label: 'Unisex Safety & Comfort', count: '100% Positive' },
    { label: 'Certified Personal Trainers', count: 'Anandu, Dhanush, Gowtham, Soniya, Smrithi, Altaf' },
    { label: 'Medical Rehab & Pain Relief', count: 'Knee, Back, Spondylitis' },
    { label: 'Cleanliness & AC Floors', count: '3 Air-Conditioned Floors' }
  ]
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'gr-lekshmi',
    author: 'Lekshmi Vishwanathan',
    badge: '16 reviews',
    rating: 5,
    timeAgo: '3 months ago',
    trainerMentioned: 'Anandu',
    category: 'transformations',
    text: 'I approached ANANDU with very low confidence, but in just one month, he gave me so much confidence and motivation. He helped me reduce more than 5 kg in a month, and I’m truly grateful for all the support and encouragement. Thank you so much!',
    ownerResponse: {
      timeAgo: '3 months ago',
      text: 'Thank you for your valuable rating and support. We are delighted to have you as part of the Be Strong Fitness Studio community. Our team is committed to helping members achieve their fitness goals in a motivating environment.'
    }
  },
  {
    id: 'gr-samitha',
    author: 'Samitha Sn',
    badge: '4 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'women_safety',
    text: 'I visited many unisex gyms. But I wasn’t very satisfied with the environment and the trainers\' attitude there. But "BE STRONG" Gym has a great atmosphere where women can work out safely until 10 PM without any fear. I am very satisfied with the clean and safe environment.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'We truly appreciate your detailed feedback. Providing a safe and motivating space matters most to us. BE STRONG continues to grow as a trusted gym in Trivandrum with professional trainers and welcoming fitness atmosphere.'
    }
  },
  {
    id: 'gr-kadeeja',
    author: 'Kadeeja Manika',
    badge: '5 reviews · 1 photo',
    rating: 5,
    timeAgo: '7 months ago',
    category: 'rehab',
    text: 'I sit most of the day for work, so knee pain was a real issue initially… With regular movement and proper guidance, my flexibility has improved and the knee pain is gone… Highly recommend their personalized care!',
    ownerResponse: {
      timeAgo: '7 months ago',
      text: 'Thank you for sharing your rating with BE STRONG FITNESS STUDIO. It encourages our team to stay committed to quality training and a supportive environment. Your feedback helps us move closer to becoming the best gym in trivandrum.'
    }
  },
  {
    id: 'gr-shabin',
    author: 'shabin narayanan',
    badge: 'Local Guide · 31 reviews · 2 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '5 months ago',
    category: 'rehab',
    text: 'I really enjoy the energy at this gym. The trainers are always looking out for you—they’ve been incredibly supportive with my rehab and keeping me on track. It feels like a place where everyone is welcome, no matter their fitness level.',
    ownerResponse: {
      timeAgo: '5 months ago',
      text: 'We truly appreciate your feedback and rating. It is encouraging to know you had a positive experience at Be Strong Fitness Studio in Trivandrum. We are committed to maintaining a motivating fitness environment for all members.'
    }
  },
  {
    id: 'gr-raveena',
    author: 'RaveenaG',
    badge: '9 reviews · 3 photos',
    rating: 5,
    timeAgo: '4 months ago',
    trainerMentioned: 'Altaf',
    category: 'trainers',
    text: 'I’ve been training at this gym for a while now, and the experience has been exceptional. My trainer, Altaf, is incredibly knowledgeable and truly understands how to push you to reach your goals while ensuring your form is perfect. The facility is well-maintained and has a great vibe. Highly recommend👍🏻👍🏻👍🏻💪🏻💪🏻💎💎',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank you for your rating and for choosing BE STRONG FITNESS STUDIO in Trivandrum. We are glad you had a positive experience with our training environment and support.'
    }
  },
  {
    id: 'gr-surya',
    author: 'Surya S R',
    badge: '2 reviews',
    rating: 5,
    timeAgo: '4 months ago',
    trainerMentioned: 'Smrithi chechi',
    category: 'trainers',
    text: 'I recently joined in the gym. Very friendly atmosphere and my trainer smrithi chechi is very supportive and awesome trainer. Her motivation has helped me improve my strength significantly.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank you for sharing your rating for BE STRONG FITNESS STUDIO in Trivandrum. We are glad you had a positive experience with our gym environment and training support.'
    }
  },
  {
    id: 'gr-anilkumar',
    author: 'Anilkumar Kalathil',
    badge: 'Local Guide · 166 reviews · 567 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '7 months ago',
    trainerMentioned: 'Anandu',
    category: 'trainers',
    text: 'An excellent gym with a very supportive environment, and trainer Anandu has played a big role in making my fitness journey consistent and enjoyable. Really impressed with how well the space is maintained, the quality of the equipments, and cleanliness.',
    ownerResponse: {
      timeAgo: '7 months ago',
      text: 'Thank you for your feedback. At BE STRONG FITNESS STUDIO, we focus on providing a supportive environment and effective training programs for all members.'
    }
  },
  {
    id: 'gr-nandana',
    author: 'Nandana Sajeev',
    badge: '10 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'general',
    text: 'As a medico with a stressful routine and long hours, joining Be Strong fitness studio has been one of the best decisions I’ve made. The gym is well-structured across three spacious floors, with a clean, air-conditioned environment and an encouraging staff.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for sharing your experience. Be Strong Fitness Studio, a gym in Trivandrum, is dedicated to providing a clean, well-equipped space with knowledgeable trainers to help you meet your fitness goals.'
    }
  },
  {
    id: 'gr-aswin',
    author: 'Aswin Nelson',
    badge: 'Local Guide · 14 reviews · 3 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: 'Edited 5 months ago',
    trainerMentioned: 'Ananthu',
    category: 'trainers',
    text: 'Great gym with a motivating atmosphere and well-maintained equipment. What really stands out is the support from the trainers, especially Ananthu. He is attentive, knowledgeable, and always ready to guide you with proper form and routines.',
    ownerResponse: {
      timeAgo: '7 months ago',
      text: 'We are grateful for your rating and the trust you place in BE STRONG FITNESS STUDIO. Each response motivates us to refine our training programs and member experience.'
    }
  },
  {
    id: 'gr-sudev',
    author: 'Sudev VV',
    badge: '1 review',
    rating: 5,
    timeAgo: 'Edited 4 months ago',
    trainerMentioned: 'Gowtham & Dhanush',
    category: 'trainers',
    text: 'Nice gym , provides a comfortable environment. Good trainers and they help u to loose ur weight and gain muscles and guide u correctly. Excellent trainers especially Gowtham and Dhanush who guided me correctly and i would rate it 10/10. Overall, this gym is excellent for personal growth.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'We truly appreciate your valuable rating for BE STRONG FITNESS STUDIO, Trivandrum. We are pleased to know you enjoyed your time at our fitness center. Your support inspires us to maintain high standards in training.'
    }
  },
  {
    id: 'gr-sumayya',
    author: 'Sumayya SN',
    badge: '2 reviews',
    rating: 5,
    timeAgo: '4 months ago',
    category: 'women_safety',
    text: 'One of the best Gym. Good space. Quality Crowd. Well Experienced Trainers and Friendly Staffs. Equipment’s are in Good Condition and are Enough for Advance Workouts. Hygiene and Cleanliness is Maintained Well. Especially the Best Gym for ladies and unisex fitness.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank you for sharing your rating and feedback. We are glad you had a positive experience at Be Strong Fitness Studio in Trivandrum. Your support motivates our team to maintain consistency and quality.'
    }
  },
  {
    id: 'gr-jeena',
    author: 'Jeena Mohanan',
    badge: 'Local Guide · 15 reviews',
    isLocalGuide: true,
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Sonia',
    category: 'trainers',
    text: 'The gym is very well equipped with all the facilities needed for a great workout. I opted for personal training, and my trainer, Sonia, has been incredibly helpful. She is supportive, knowledgeable, and motivates me to push myself while ensuring correct mechanics.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for the detailed feedback. It’s great to hear Sonia is helping you stay motivated and safe throughout your sessions. We aim to provide the right balance of support, challenge, and personalized care.'
    }
  },
  {
    id: 'gr-dilip',
    author: 'Dilip Nair',
    badge: 'Local Guide · 96 reviews · 64 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: 'a year ago',
    category: 'general',
    text: 'Be Strong is hands down one of the best unisex training centres I’ve been to. The atmosphere is always positive and energising, which makes every workout session something to look forward to.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'We deeply appreciate your detailed feedback and five star rating. Hearing that our trainers, equipment and environment made your experience enjoyable motivates us every day.'
    }
  },
  {
    id: 'gr-prasanth',
    author: 'prasanth mv',
    badge: 'Local Guide · 12 reviews · 6 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Dhanush',
    category: 'trainers',
    text: 'Outstanding Gym with Exceptional Trainers! I\'ve had a fantastic experience at Be Strong! The gym is equipped with top-notch gear and the trainers are dedicated to your fitness goals. Trainer Dhanush is especially exceptional!',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for such a warm and detailed review. It is rewarding to know our trainers, especially Dhanush, have made a real difference in your journey.'
    }
  },
  {
    id: 'gr-sarath',
    author: 'Sarath Gireesh',
    badge: '2 reviews · 4 photos',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'transformations',
    text: '8 Months of Transformation – A Journey Worth Every Rep 💪. It’s been just 8 months since I joined this gym, and I can confidently say it transformed my stamina and health. Sincere coaching and awesome community!',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for your 5-star rating. We’re glad to know you’re enjoying your fitness journey with us. At Be Strong Fitness Studio, we work hard to be a motivating and result-driven gym in Trivandrum.'
    }
  },
  {
    id: 'gr-jasina',
    author: 'jasina salim',
    badge: '1 review',
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Soniya',
    category: 'trainers',
    text: 'I\'ve had a great experience at this gym! The atmosphere is always welcoming and motivating. The equipment is well-maintained, and the facility is kept clean and organized. One of the highlights for me has been Soniya ...she is incredibly patient, attentive and encouraging.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thanks for sharing your journey with us. We’re happy Soniya’s patience and the gym’s environment helped you stay focused. We hope to keep growing as a gym in Trivandrum where everyone finds encouragement.'
    }
  },
  {
    id: 'gr-sini',
    author: 'Sini V Pillai',
    badge: '3 reviews · 1 photo',
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Aditi (Zumba)',
    category: 'trainers',
    text: 'We enjoy burning calories with our lovely trainer Aditi. Our Zumba sessions are filled with high energy and fun. I personally recommend her zumba sessions for all who love their health. The one hour we spent with her is the most happiest.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for sharing your experience with us. We’re glad you enjoy Zumba with Aditi and find it energizing. Your feedback inspires us to keep creating joyful sessions at our gym in Trivandrum for all age groups.'
    }
  },
  {
    id: 'gr-preeths',
    author: 'Preeths Shenoy',
    badge: '3 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'women_safety',
    text: 'BE STRONG is one of a kind gym in the locality. Placed in a key place which is easily accessible from any part of city. It is neatly and well maintained and well equipped too. Safe for ladies, be it in the morning or in the evening. You get genuine support from all trainers.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for your feedback. We\'re glad to hear that you enjoy the convenient location, safety, and well-maintained facilities at BE STRONG Fitness Studio.'
    }
  },
  {
    id: 'gr-senthil',
    author: 'senthil sankar',
    badge: 'Local Guide · 12 reviews · 8 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '4 years ago',
    trainerMentioned: 'Anantu',
    category: 'trainers',
    text: 'Best trainers. In particular discuss your goals with Trainer ANANTU.. Get ready to witness your dream come true.. Nominal fee.. Healthy juices..',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'We appreciate your positive feedback. Trainer Anantu’s guidance combined with our affordable fees and healthy juice options ensures a great fitness experience at Be Strong Fitness Studio, a trusted gym in Trivandrum.'
    }
  },
  {
    id: 'gr-navin',
    author: 'Navin Mathew',
    badge: '3 reviews',
    rating: 5,
    timeAgo: '4 months ago',
    trainerMentioned: 'Gowtham',
    category: 'trainers',
    text: 'Best gym in Kerala so far from my experience is good my trainer Gowtham excellent 👍👌',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank you for your positive rating for BE STRONG FITNESS STUDIO, Trivandrum. We are glad you had a satisfying experience with our gym services and training support.'
    }
  },
  {
    id: 'gr-sooraj',
    author: 'Sooraj Rajan',
    badge: 'Local Guide · 245 reviews · 1,782 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Anandu',
    category: 'trainers',
    text: 'I’ve had an amazing experience at Be Strong! The gym has a good vibe, decent equipment, and most importantly, a trainer who truly makes a difference. Anandu is incredibly knowledgeable, supportive, and knows exactly how to push you towards your fitness goals.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thanks for sharing your journey. It’s wonderful to hear Anandu’s support made an impact. Be Strong is proud to be a gym in Trivandrum where fitness goals are met with focus, care, and professional guidance.'
    }
  },
  {
    id: 'gr-thasneem',
    author: 'Thasneem shaheen',
    badge: '4 reviews',
    rating: 5,
    timeAgo: '7 months ago',
    trainerMentioned: 'Anandu',
    category: 'trainers',
    text: 'Recently joined Be Strong💪and absolutely loving it..My trainer Anandu is professional, friendly n always push you to do better without overdoing it..The gym is well equipped n has an encouraging, friendly environment.. Working out here actually makes you look forward to coming back every day!!',
    ownerResponse: {
      timeAgo: '7 months ago',
      text: 'We appreciate you taking the time to leave a rating for BE STRONG FITNESS STUDIO in Trivandrum. Your support motivates our trainers to maintain high standards in training and guidance.'
    }
  },
  {
    id: 'gr-gayathri',
    author: 'gayathribprasanth',
    badge: '3 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Soniya',
    category: 'trainers',
    text: 'The environment is clean, well-equipped, and always motivating. A big thanks to trainer Soniya for her guidance, energy, and constant encouragement make every session effective and enjoyable. Highly recommended for anyone serious about fitness😍😍',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thanks for the encouraging words. Soniya will be happy to know her effort is appreciated. We’ll keep doing our best to offer a positive, well-equipped gym in Trivandrum where every session feels rewarding.'
    }
  },
  {
    id: 'gr-chinnu',
    author: 'Chinnu Santhosh',
    badge: '3 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Soniya',
    category: 'trainers',
    text: 'I recently joined be strong Gym and I’m really happy with the experience. My trainer Soniya is very friendly, Supportive, and pushes me to do my best. Great atmosphere and perfect for anyone starting their fitness journey.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you so much for sharing your experience. We are glad to hear Soniya’s support and guidance have helped you feel motivated.'
    }
  },
  {
    id: 'gr-parvathy',
    author: 'parvathy sanalkumar',
    badge: '2 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    trainerMentioned: 'Soniya',
    category: 'trainers',
    text: 'I recently joined Be Strong gym and I’m really happy with the experience. My trainer Soniya is very supportive, the environment is positive, and I already feel more energetic and healthy. Highly recommended for anyone who wants to start their fitness journey!',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for the kind words. We\'re glad your journey at Be Strong is off to a great start. Soniya and the team appreciate your feedback.'
    }
  },
  {
    id: 'gr-sunil',
    author: 'sunil kumar',
    badge: '1 review · 2 photos',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'general',
    text: 'I joined Be Strong Fitness Studio and is extremely happy and content with my decision. The facilities are exceptional—always clean and well-kept. With a wide range of equipment available, I never find myself getting bored, whether I’m just starting out or working out hard.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for the wonderful review. We’re proud to be a gym in Trivandrum where both beginners and advanced fitness enthusiasts feel at home.'
    }
  },
  {
    id: 'gr-harikrishnan',
    author: 'Harikrishnan .A',
    badge: '1 review',
    rating: 5,
    timeAgo: '4 months ago',
    category: 'general',
    text: 'The gym itself provides a comfortable environment for working out in our comfort zone. The trainers and the people on the gym are very supportive and communicate each and every problem with the members. I have taken personal training and the guidance is great.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'We truly appreciate your valuable rating for BE STRONG FITNESS STUDIO, Trivandrum. We are pleased that you enjoyed your time at our gym.'
    }
  },
  {
    id: 'gr-suniljith',
    author: 'Suniljith K',
    badge: '1 review',
    rating: 5,
    timeAgo: '5 months ago',
    trainerMentioned: 'Anandhu & Dhanush',
    category: 'trainers',
    text: 'Exceptional experience at this gym, elevated by the expertise of Mr. Anandhu and Mr. Dhanush. Personalized attention that makes working out truly rewarding.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'We truly appreciate your rating for BE STRONG FITNESS STUDIO in Trivandrum. It is encouraging to know you enjoyed our fitness environment and services.'
    }
  },
  {
    id: 'gr-sachin',
    author: 'Sachin S P',
    badge: '7 reviews · 6 photos',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'general',
    text: 'Absolutely love working out at Be Strong! 💪 The trainers are super supportive, the atmosphere is always positive, and the equipment is top-notch. Whether you’re a beginner or a fitness freak, this place motivates you to push harder every day.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Your words truly inspire our team. We are happy that our supportive trainers, friendly atmosphere, and facilities have made a difference in your fitness journey.'
    }
  },
  {
    id: 'gr-ajith',
    author: 'Ajith S',
    badge: '3 reviews · 2 photos',
    rating: 5,
    timeAgo: '5 months ago',
    category: 'general',
    text: 'Been training here for a few months now and really enjoy the atmosphere. The equipment is well-maintained and they have everything for a solid work out. All the trainers were knowledgeable and approachable.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank you for sharing your valuable rating for BE STRONG FITNESS STUDIO, Trivandrum. We are happy to know you had a positive experience at our gym.'
    }
  },
  {
    id: 'gr-binoj',
    author: 'Binoj Babu',
    badge: '2 reviews',
    rating: 5,
    timeAgo: '5 months ago',
    category: 'general',
    text: 'I’ve been working out at this fitness centre for a while now, and it has become an important part of my daily routine. The gym is well-equipped with a wide range of machines and free weights, making it suitable for both beginners and experienced lifters.',
    ownerResponse: {
      timeAgo: '5 months ago',
      text: 'Thank you for sharing your rating. We are glad you had a positive experience at Be Strong Fitness Studio in Trivandrum.'
    }
  },
  {
    id: 'gr-rekha',
    author: 'REKHA SUNIL',
    badge: '7 reviews · 8 photos',
    rating: 5,
    timeAgo: 'Edited a year ago',
    category: 'general',
    text: 'I joined Be Strong Fitness studio almost a year back and is extremely happy with my experience! The atmosphere is incredibly welcoming and motivating, making it easy to stay focused on my fitness goals. The equipment is top-notch and coaches are always present.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thanks so much for sharing your experience. It’s rewarding to hear that our supportive team and well-maintained space have helped you stay consistent.'
    }
  },
  {
    id: 'gr-sascan',
    author: 'Sascan Meditech',
    badge: 'Local Guide · 18 reviews · 14 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '3 months ago',
    category: 'general',
    text: 'Well kept, AC gym with quality equipments for workout. The trainers are qualified and ambience is good.',
    ownerResponse: {
      timeAgo: '3 months ago',
      text: 'We appreciate your valuable rating for BE STRONG FITNESS STUDIO. We are glad to know you had a positive experience with our training environment and facilities.'
    }
  },
  {
    id: 'gr-swathi',
    author: 'Swathi.S. Anil',
    badge: '2 reviews',
    rating: 5,
    timeAgo: 'a year ago',
    category: 'women_safety',
    text: 'This gym "Be Strong" stands out high-quality facilities, making it a perfect fit for both men and women looking to achieve their fitness goals. Each class is led by knowledgeable and energetic instructors who truly motivate you.',
    ownerResponse: {
      timeAgo: 'a year ago',
      text: 'Thank you for your wonderful feedback. We’re glad you’re enjoying the personalized experience. BE STRONG strives to remain the top gym in Trivandrum.'
    }
  },
  {
    id: 'gr-unni',
    author: 'Unni Sathyadas',
    badge: 'Local Guide · 7 reviews · 97 photos',
    isLocalGuide: true,
    rating: 5,
    timeAgo: '5 months ago',
    category: 'general',
    text: 'I’ve been training at this gym for a while now, and it’s honestly a great place to work out. Adequate equipments, nice atmosphere and well maintained.',
    ownerResponse: {
      timeAgo: '5 months ago',
      text: 'Thank you for your kind rating. We are pleased to hear that you had a good experience at Be Strong Fitness Studio in Trivandrum.'
    }
  },
  {
    id: 'gr-aneesh',
    author: 'ANEESH V S',
    badge: '5 reviews',
    rating: 5,
    timeAgo: '4 months ago',
    category: 'general',
    text: 'One of the best gyms i have ever went to, very decent equipments and trainers',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'We appreciate your rating and feedback and are glad you enjoyed your experience at BE STRONG FITNESS STUDIO in Trivandrum.'
    }
  },
  {
    id: 'gr-featured-top',
    author: 'Google Verified Member',
    badge: 'Verified Member Review',
    rating: 5,
    timeAgo: '4 months ago',
    category: 'general',
    text: 'Be Strong Fitness Studio is one of the best fitness centers I’ve ever experienced. The atmosphere is motivating, clean, and well-equipped with everything needed for a complete workout.',
    ownerResponse: {
      timeAgo: '4 months ago',
      text: 'Thank you for sharing your valuable rating with us. We are glad to know you had a positive experience at BE STRONG FITNESS STUDIO. Your support motivates our team to keep improving.'
    }
  }
];

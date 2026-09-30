export const programsData = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'Strength',
    img: '/assets/gym-workout.jpg',
    desc: 'Build power, strength and overall physical performance.',
    difficulty: 'Intermediate',
    duration: '12 Weeks',
    trainingType: 'Resistance',
    sessionsPerWeek: 4,
    trainer: 'alex',
    trainerName: 'Alex Morgan',
    idealFor: 'Individuals looking to build raw power and muscle density.',
    benefits: ['Increased raw strength', 'Improved bone density', 'Better posture', 'Enhanced athletic power'],
    structure: 'Warm-up (10m) → Heavy Compounds (40m) → Accessories (20m) → Cool-down (10m)',
    weeklyPlan: ['Monday: Lower Body Power', 'Wednesday: Upper Body Push/Pull', 'Friday: Full Body Strength', 'Saturday: Weak Point Accessories'],
    equipment: 'Lifting belt, flat-soled shoes, chalk, water bottle.',
    faq: [
      { q: 'Is this suitable for beginners?', a: 'We recommend completing our Beginner Fitness program first to learn proper lifting mechanics.' },
      { q: 'Do I need my own belt?', a: 'We provide communal belts, but a personal one is recommended for consistency.' }
    ]
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    category: 'Muscle Building',
    img: '/assets/gym-workout.jpg',
    desc: 'Progressive resistance training focused on lean muscle development.',
    difficulty: 'Intermediate',
    duration: '16 Weeks',
    trainingType: 'Hypertrophy',
    sessionsPerWeek: 5,
    trainer: 'alex',
    trainerName: 'Alex Morgan',
    idealFor: 'Those wanting to maximize muscle mass and change body composition.',
    benefits: ['Maximized muscle growth', 'Enhanced mind-muscle connection', 'Improved aesthetic physique', 'Increased metabolic rate'],
    structure: 'Warm-up (5m) → Isolation Activation (10m) → Volume Work (45m) → Finisher (10m)',
    weeklyPlan: ['Mon: Chest/Triceps', 'Tue: Back/Biceps', 'Thu: Quads/Calves', 'Fri: Shoulders/Abs', 'Sat: Hamstrings/Glutes'],
    equipment: 'Lifting straps, standard workout gear, water bottle.',
    faq: [
      { q: 'Will I get too bulky?', a: 'Building muscle takes time and a specific caloric surplus. This program builds lean athletic muscle.' }
    ]
  },
  {
    id: 'fat-loss',
    title: 'Fat Loss',
    category: 'Fat Loss',
    img: '/assets/gym-workout.jpg',
    desc: 'Structured workouts designed to support fat-loss goals.',
    difficulty: 'All Levels',
    duration: '8 Weeks',
    trainingType: 'Metabolic Conditioning',
    sessionsPerWeek: 4,
    trainer: 'sophia',
    trainerName: 'Sophia Williams',
    idealFor: 'Anyone looking to shed body fat while preserving lean muscle.',
    benefits: ['Accelerated fat burning', 'Improved cardiovascular health', 'Preserved muscle mass', 'Nutritional guidance included'],
    structure: 'Dynamic Warm-up (10m) → Circuit Training (30m) → Core (10m) → Stretching (10m)',
    weeklyPlan: ['Mon: Full Body Circuit', 'Tue: Active Recovery / LISS', 'Thu: High Intensity Intervals', 'Fri: Core & Conditioning'],
    equipment: 'Comfortable athletic wear, towel, water bottle, heart rate monitor (optional).',
    faq: [
      { q: 'Do I need to follow a strict diet?', a: 'Nutrition is key for fat loss. We provide foundational nutritional guidelines to support your training.' }
    ]
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'Personal Training',
    img: '/assets/gym-workout.jpg',
    desc: 'One-on-one coaching built around your individual goals.',
    difficulty: 'Custom',
    duration: 'Ongoing',
    trainingType: 'Custom',
    sessionsPerWeek: 3,
    trainer: 'ryan',
    trainerName: 'Ryan Carter',
    idealFor: 'Individuals wanting a 100% tailored approach and maximum accountability.',
    benefits: ['Fully customized programming', 'Real-time form correction', 'High accountability', 'Flexible scheduling'],
    structure: 'Varies based on individual goals and assessment.',
    weeklyPlan: ['Customized entirely to your schedule and goals.'],
    equipment: 'Just bring yourself and a willingness to work hard.',
    faq: [
      { q: 'How much does it cost?', a: 'Rates vary by trainer and frequency. Contact us for a custom quote.' }
    ]
  },
  {
    id: 'hiit',
    title: 'HIIT',
    category: 'HIIT',
    img: '/assets/gym-workout.jpg',
    desc: 'High-intensity interval training for conditioning and endurance.',
    difficulty: 'Advanced',
    duration: '4 Weeks',
    trainingType: 'Intervals',
    sessionsPerWeek: 3,
    trainer: 'sophia',
    trainerName: 'Sophia Williams',
    idealFor: 'Those short on time looking to maximize calorie burn and endurance.',
    benefits: ['Maximum calorie burn in minimum time', 'Increased VO2 Max', 'EPOC (afterburn effect)', 'Mental toughness'],
    structure: 'Warm-up (10m) → Intense Intervals (20m) → Active Recovery (10m) → Cool-down (5m)',
    weeklyPlan: ['Mon: Sprint Intervals', 'Wed: Kettlebell & Bodyweight HIIT', 'Fri: Plyometric Circuit'],
    equipment: 'Cross-training shoes, towel, lots of water.',
    faq: [
      { q: 'Is it safe for my joints?', a: 'We offer low-impact modifications for all explosive movements.' }
    ]
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    category: 'Functional Training',
    img: '/assets/gym-workout.jpg',
    desc: 'Improve movement, balance, coordination and everyday strength.',
    difficulty: 'Intermediate',
    duration: '12 Weeks',
    trainingType: 'Functional',
    sessionsPerWeek: 4,
    trainer: 'michael',
    trainerName: 'Michael Stone',
    idealFor: 'Athletes and everyday people wanting to move better and pain-free.',
    benefits: ['Improved daily mobility', 'Enhanced core stability', 'Injury prevention', 'Better balance and coordination'],
    structure: 'Mobility Prep (15m) → Multi-planar Strength (30m) → Unilateral Work (15m)',
    weeklyPlan: ['Mon: Push & Squat Patterns', 'Tue: Pull & Hinge Patterns', 'Thu: Rotational Core', 'Fri: Loaded Carries & Agility'],
    equipment: 'Flat shoes or barefoot training shoes.',
    faq: [
      { q: 'What is functional training?', a: 'Training that mimics daily life movements to make you stronger in the real world.' }
    ]
  },
  {
    id: 'beginner-fitness',
    title: 'Beginner Fitness',
    category: 'Beginner',
    img: '/assets/gym-workout.jpg',
    desc: 'A structured introduction to gym training for beginners.',
    difficulty: 'Beginner',
    duration: '6 Weeks',
    trainingType: 'Foundational',
    sessionsPerWeek: 3,
    trainer: 'ryan',
    trainerName: 'Ryan Carter',
    idealFor: 'Those new to the gym wanting to build confidence safely.',
    benefits: ['Learn proper form', 'Build gym confidence', 'Establish a routine', 'Safe progression'],
    structure: 'Machine Basics (20m) → Free Weight Intros (20m) → Light Cardio (15m)',
    weeklyPlan: ['Mon: Full Body Basics', 'Wed: Core & Cardio', 'Fri: Full Body Progression'],
    equipment: 'Comfortable workout clothes and athletic shoes.',
    faq: [
      { q: 'Will I be intimidated?', a: 'Not at all. This program is specifically designed to be welcoming and educational.' }
    ]
  },
  {
    id: 'athletic-performance',
    title: 'Athletic Performance',
    category: 'Performance',
    img: '/assets/gym-workout.jpg',
    desc: 'Performance-focused training for speed, strength and agility.',
    difficulty: 'Advanced',
    duration: '12 Weeks',
    trainingType: 'Athletic',
    sessionsPerWeek: 5,
    trainer: 'daniel',
    trainerName: 'Daniel Brooks',
    idealFor: 'Sports athletes looking for a competitive edge in their off-season.',
    benefits: ['Increased explosive power', 'Faster sprint times', 'Better change of direction', 'Injury resilience'],
    structure: 'Dynamic Warmup (15m) → Power/Plyos (15m) → Strength (20m) → Conditioning (10m)',
    weeklyPlan: ['Mon: Acceleration & Lower Power', 'Tue: Upper Body Strength', 'Thu: Max Velocity & Change of Direction', 'Fri: Lower Body Strength', 'Sat: Energy Systems'],
    equipment: 'Cleats/turf shoes, lifting shoes, athletic tape.',
    faq: [
      { q: 'Do I need to play a sport?', a: 'No, but the training is rigorous and modeled after pro athlete regimens.' }
    ]
  },
  {
    id: 'mobility-recovery',
    title: 'Mobility & Recovery',
    category: 'Mobility',
    img: '/assets/gym-workout.jpg',
    desc: 'Improve flexibility, movement quality and recovery.',
    difficulty: 'All Levels',
    duration: 'Ongoing',
    trainingType: 'Recovery',
    sessionsPerWeek: 2,
    trainer: 'daniel',
    trainerName: 'Daniel Brooks',
    idealFor: 'Anyone feeling stiff, recovering from intense training, or wanting better posture.',
    benefits: ['Decreased joint pain', 'Better lifting mechanics', 'Reduced stress', 'Faster muscle recovery'],
    structure: 'Soft Tissue Work (15m) → Active Stretching (20m) → Joint Articulation (15m)',
    weeklyPlan: ['Wed: Active Recovery Flow', 'Sun: Deep Tissue & Flexibility'],
    equipment: 'Yoga mat, foam roller, lacrosse ball.',
    faq: [
      { q: 'Is this just stretching?', a: 'No, it includes active mobility, which builds strength at end ranges of motion.' }
    ]
  },
  {
    id: 'womens-fitness',
    title: 'Women\'s Fitness',
    category: 'Women',
    img: '/assets/gym-workout.jpg',
    desc: 'Goal-focused training in a supportive environment.',
    difficulty: 'All Levels',
    duration: '12 Weeks',
    trainingType: 'Strength & Toning',
    sessionsPerWeek: 4,
    trainer: 'emma',
    trainerName: 'Emma Davis',
    idealFor: 'Women looking for a structured, empowering environment to build strength.',
    benefits: ['Targeted glute development', 'Upper body toning', 'Empowering community', 'Confidence building'],
    structure: 'Activation (10m) → Main Lift (20m) → Sculpting Accessories (20m) → Core (10m)',
    weeklyPlan: ['Mon: Lower Body (Glute Focus)', 'Tue: Upper Body Sculpt', 'Thu: Full Body Strength', 'Fri: Core & Conditioning'],
    equipment: 'Resistance bands, comfortable athletic wear.',
    faq: [
      { q: 'Is the weight area intimidating?', a: 'We train together in a supportive group, taking the fear out of the free weight section.' }
    ]
  },
  {
    id: 'core-conditioning',
    title: 'Core & Conditioning',
    category: 'Conditioning',
    img: '/assets/gym-workout.jpg',
    desc: 'Build core strength and improve cardiovascular conditioning.',
    difficulty: 'Intermediate',
    duration: '6 Weeks',
    trainingType: 'Conditioning',
    sessionsPerWeek: 3,
    trainer: 'michael',
    trainerName: 'Michael Stone',
    idealFor: 'Those looking to carve their midsection and improve stamina.',
    benefits: ['Stronger abdominals', 'Better posture', 'Increased stamina', 'Lower back support'],
    structure: 'Cardio Intervals (20m) → Anti-Extension Core (15m) → Rotational Core (15m)',
    weeklyPlan: ['Mon: Cardio & Anti-Extension', 'Wed: Rower & Rotation', 'Fri: Sled Pushes & Isometric Holds'],
    equipment: 'Water bottle, towel.',
    faq: [
      { q: 'Will this give me abs?', a: 'It builds the muscle, but revealing them requires proper nutrition (caloric deficit).' }
    ]
  },
  {
    id: 'group-training',
    title: 'Group Training',
    category: 'Group',
    img: '/assets/gym-workout.jpg',
    desc: 'Coach-led workouts designed around community and motivation.',
    difficulty: 'All Levels',
    duration: 'Ongoing',
    trainingType: 'Mixed',
    sessionsPerWeek: 'Flexible',
    trainer: 'ryan',
    trainerName: 'Ryan Carter',
    idealFor: 'People who thrive on community energy and friendly competition.',
    benefits: ['High motivation', 'Structured daily workouts', 'Community support', 'Fun environment'],
    structure: 'Group Warm-up (10m) → Skill Work (10m) → Workout of the Day (30m) → Group Stretch (10m)',
    weeklyPlan: ['Check our live schedule for daily class formats and times.'],
    equipment: 'Standard workout gear.',
    faq: [
      { q: 'Do I need to be fit to join?', a: 'No! All movements can be scaled by the coach to match your current ability.' }
    ]
  }
];

export const eventsData = [
  {
    id: 'ironforge-fitness-challenge',
    title: 'Ironforge Fitness Challenge',
    category: 'Competition',
    img: '/assets/gym-hero.jpg',
    date: 'October 18, 2026',
    time: '8:00 AM – 1:00 PM',
    location: 'Ironforge Fitness Main Arena',
    desc: 'A full-day fitness challenge featuring strength, endurance and team-based competitions.',
    status: 'Open',
    highlights: ['Team based relay', 'Max lift events', 'Obstacle course', 'Cash prizes for winners', 'Post-event BBQ'],
    schedule: [
      '8:00 AM — Registration & Check-in',
      '8:30 AM — Group Warm-up',
      '9:00 AM — Challenge Begins',
      '12:00 PM — Final Round (Top 5 Teams)',
      '12:30 PM — Results & Awards',
      '1:00 PM — Closing BBQ'
    ],
    whoCanJoin: 'Open to all active members. Non-members can join for a guest fee of $25.',
    whatToBring: ['Water bottle', 'Training shoes', 'Workout clothes', 'Towel', 'Change of clothes for BBQ']
  },
  {
    id: '30-day-strength-challenge',
    title: '30-Day Strength Challenge',
    category: 'Challenge',
    img: '/assets/gym-workout.jpg',
    date: 'November 1 - November 30, 2026',
    time: 'Flexible',
    location: 'Ironforge Fitness',
    desc: 'Commit to 30 days of programmed strength workouts. Track your progress on the community board.',
    status: 'Open',
    highlights: ['Custom 30-day program booklet', 'Weekly form check clinics', 'Private community group', 'Completion T-Shirt'],
    schedule: [
      'Nov 1 — Kickoff & Baseline Testing',
      'Nov 15 — Mid-point Check-in',
      'Nov 30 — Final Testing & Celebration'
    ],
    whoCanJoin: 'Ideal for beginner to intermediate members looking to establish a consistent lifting routine.',
    whatToBring: ['Dedication', 'Workout logbook (provided)']
  },
  {
    id: 'community-workout-day',
    title: 'Community Workout Day',
    category: 'Community',
    img: '/assets/gym-workout.jpg',
    date: 'September 25, 2026',
    time: '10:00 AM – 12:00 PM',
    location: 'Ironforge Outdoor Turf',
    desc: 'Bring a friend for free! A massive outdoor group workout followed by healthy smoothies.',
    status: 'Upcoming',
    highlights: ['Live DJ', 'Partner workouts', 'Free protein smoothies', 'Membership discounts for guests'],
    schedule: [
      '10:00 AM — Welcome & Partner Pairing',
      '10:15 AM — Workout Starts',
      '11:15 AM — Cool-down',
      '11:30 AM — Smoothies & Socializing'
    ],
    whoCanJoin: 'Everyone! Members bring 1 guest for free.',
    whatToBring: ['Water bottle', 'Sunscreen', 'A friend']
  },
  {
    id: 'nutrition-wellness-seminar',
    title: 'Nutrition & Wellness Seminar',
    category: 'Workshop',
    img: '/assets/gym-workout.jpg',
    date: 'October 5, 2026',
    time: '6:30 PM – 8:00 PM',
    location: 'Ironforge Lounge',
    desc: 'Learn how to fuel your body for performance and recovery with our head nutritionist.',
    status: 'Limited Spots',
    highlights: ['Macro tracking basics', 'Meal prep strategies', 'Supplement guide', 'Live Q&A'],
    schedule: [
      '6:30 PM — Introduction to Macros',
      '7:00 PM — Timing your nutrition',
      '7:30 PM — Supplements that actually work',
      '7:45 PM — Q&A'
    ],
    whoCanJoin: 'Open to all members. Highly recommended for those in the Fat Loss or Muscle Building programs.',
    whatToBring: ['Notepad and pen']
  },
  {
    id: 'hiit-battle',
    title: 'HIIT Battle',
    category: 'Competition',
    img: '/assets/gym-workout.jpg',
    date: 'November 12, 2026',
    time: '6:00 PM – 8:00 PM',
    location: 'Ironforge Conditioning Turf',
    desc: 'A fast-paced, high-energy individual competition to crown the fittest conditioning athlete.',
    status: 'Open',
    highlights: ['3 intense grueling workouts', 'Live leaderboard', 'Energy drinks provided', 'Trophy for winners'],
    schedule: [
      '6:00 PM — Briefing',
      '6:30 PM — Event 1',
      '7:00 PM — Event 2',
      '7:30 PM — Final Event',
      '8:00 PM — Podium'
    ],
    whoCanJoin: 'Advanced athletes recommended.',
    whatToBring: ['Cross-training shoes', 'Towel', 'Heart rate monitor (optional)']
  },
  {
    id: 'beginner-fitness-workshop',
    title: 'Beginner Fitness Workshop',
    category: 'Workshop',
    img: '/assets/gym-workout.jpg',
    date: 'Every First Saturday',
    time: '9:00 AM – 10:30 AM',
    location: 'Ironforge Studio B',
    desc: 'A safe, non-intimidating workshop teaching gym etiquette, machine setup, and basic free-weight form.',
    status: 'Open',
    highlights: ['Machine setup tutorial', 'Squat & Hinge mechanics', 'Gym etiquette 101', 'Free assessment'],
    schedule: [
      '9:00 AM — Tour & Etiquette',
      '9:30 AM — Machine Setup',
      '10:00 AM — Free Weight Basics'
    ],
    whoCanJoin: 'Brand new members or anyone feeling intimidated by the gym floor.',
    whatToBring: ['Comfortable clothes', 'Water']
  },
  {
    id: 'womens-fitness-day',
    title: 'Women\'s Fitness Day',
    category: 'Community',
    img: '/assets/gym-workout.jpg',
    date: 'October 22, 2026',
    time: '9:00 AM – 1:00 PM',
    location: 'Ironforge Fitness',
    desc: 'A day dedicated to empowering women in fitness. Guest speakers, specialized classes, and networking.',
    status: 'Open',
    highlights: ['Female-led barbell clinics', 'Self-defense basics', 'Panel discussion with female athletes', 'Goodie bags'],
    schedule: [
      '9:00 AM — Welcome & Coffee',
      '9:30 AM — Group Workout',
      '10:30 AM — Barbell Clinic',
      '11:30 AM — Panel Discussion',
      '12:30 PM — Networking'
    ],
    whoCanJoin: 'Women of all fitness levels.',
    whatToBring: ['Workout clothes', 'Notebook for the panel']
  },
  {
    id: 'annual-gym-anniversary',
    title: 'Annual Gym Anniversary',
    category: 'Celebration',
    img: '/assets/gym-hero.jpg',
    date: 'December 10, 2026',
    time: '7:00 PM – 11:00 PM',
    location: 'Ironforge Fitness',
    desc: 'Celebrate another year of gains with the Ironforge family. Food, drinks, awards, and no workouts!',
    status: 'Upcoming',
    highlights: ['Catered dinner', 'Member of the year awards', 'Trainer roast', 'Music & dancing'],
    schedule: [
      '7:00 PM — Doors open (Dress to impress!)',
      '8:00 PM — Dinner served',
      '9:00 PM — Awards ceremony',
      '10:00 PM — Party'
    ],
    whoCanJoin: 'All members and plus-ones.',
    whatToBring: ['Yourself, no gym clothes allowed!']
  }
];

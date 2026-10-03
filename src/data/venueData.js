export const VENUE_INFO = {
  name: "Uma Palace",
  businessType: "Banquet Hall • Weddings • Events • Swimming Pool",
  tagline: "Book your special day with us ✨",
  phones: ["9278242223", "9278342223"],
  displayAddress: "Urdu Bazar Road, Jamlapur, Ghazipur, Uttar Pradesh",
  shortLocation: "Urdu Bazar Road, Jamlapur, Ghazipur",
  city: "Ghazipur, UP",
  instagram: "https://www.instagram.com/uma.palace/",
  instagramHandle: "@uma.palace",
  whatsappDefaultNumber: "919278242223",
  whatsappMessage: encodeURIComponent("Hello Uma Palace, I am interested in booking the venue. I would like to know about availability and event details.")
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Venue", href: "/venue" },
  { label: "Weddings", href: "/weddings" },
  { label: "Events", href: "/events" },
  { label: "Swimming Pool", href: "/swimming-pool" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const VENUE_SPACES = [
  {
    id: "banquet-hall",
    name: "Main Banquet Hall",
    subtitle: "Indoor Event Space",
    description: "An expansive climate-controlled grand hall crafted with sophisticated ceiling lighting, polished marble floors, and an open layout ideal for main wedding rituals, stage ceremonies, and grand celebratory banquets.",
    image: "/images/editorial/banquet_hall_interior.jpg",
    igImage: "/images/venue/uma_ig_6.jpg",
    layouts: ["Theatre", "Banquet", "Cluster", "Reception"],
    statusNote: "Capacity configured per event layout. Contact us for details."
  },
  {
    id: "dining-area",
    name: "Dining Area",
    subtitle: "Comfortable Dining & Guest Experience",
    description: "Dedicated dining section laid out to ensure seamless banquet service, live food stations, and guest comfort without crowding the ceremony spaces.",
    image: "/images/editorial/dining_grand_setup.jpg",
    igImage: "/images/venue/uma_ig_15.jpg",
    layouts: ["Buffet Setup", "Traditional Sit-down", "Live Counters"],
    statusNote: "Customizable catering setups available. Contact us for details."
  },
  {
    id: "stage-celebration",
    name: "Stage & Celebration Area",
    subtitle: "Designed for Ceremonies & Performances",
    description: "Centrally positioned focal stage designed to host Jaymala, ring ceremonies, couple seatings, and live performances with optimal lighting and panoramic guest visibility.",
    image: "/images/editorial/stage_celebration_lights.jpg",
    igImage: "/images/venue/uma_ig_16.jpg",
    layouts: ["Jaymala Stage", "Floral Mandap", "Sangeet Stage"],
    statusNote: "Stage decor arrangements tailored upon consultation."
  },
  {
    id: "poolside-area",
    name: "Outdoor / Poolside Area",
    subtitle: "Open & Relaxed Event Experience",
    description: "A signature outdoor space surrounding the pristine swimming pool, offering an open-air atmosphere for evening cocktails, Mehendi brunches, or poolside photo sessions.",
    image: "/images/editorial/poolside_evening_luxury.jpg",
    igImage: "/images/venue/uma_ig_13.jpg",
    layouts: ["Poolside Lounge", "Cocktail Evening", "Mehendi Sundowner"],
    statusNote: "Weather & seasonal availability. Contact us for details."
  }
];

export const WEDDING_CATEGORIES = [
  {
    id: "wedding",
    title: "Wedding Ceremonies",
    description: "Sacred ceremonies framed in timeless elegance, offering ample space for the baraat reception, mandap rituals, and joyful family celebrations.",
    image: "/images/editorial/wedding_ceremony_mandap.jpg"
  },
  {
    id: "reception",
    title: "Grand Receptions",
    description: "Host your formal reception with magnificent stage setups, ambient chandelier lighting, and a refined hospitality environment for your guests.",
    image: "/images/editorial/wedding_reception_dinner.jpg"
  },
  {
    id: "engagement",
    title: "Engagements & Ring Ceremonies",
    description: "Intimate and celebratory setups designed to make the official announcement of your union radiant, intimate, and memorable.",
    image: "/images/editorial/hero_banquet_luxury.jpg"
  },
  {
    id: "sangeet",
    title: "Sangeet & Musical Nights",
    description: "Energetic acoustic-friendly staging with vibrant lighting for choreographed dances, musical performances, and family revelry.",
    image: "/images/editorial/sangeet_celebration.jpg"
  },
  {
    id: "mehendi",
    title: "Mehendi Celebrations",
    description: "Sunlit open-air or vibrant indoor decor themes filled with floral charm, comfortable loungers, and celebratory warmth.",
    image: "/images/editorial/wedding_mehendi_decor.jpg"
  },
  {
    id: "family-celebrations",
    title: "Family Celebrations",
    description: "Roka, anniversary blessings, and multi-generational milestones accommodated in adaptable private settings.",
    image: "/images/editorial/dining_grand_setup.jpg"
  }
];

export const EVENT_CATEGORIES = [
  {
    title: "Birthday Celebrations",
    desc: "From milestone 1st birthdays to 50th celebrations, custom theme setups and banquet arrangements.",
    icon: "Cake"
  },
  {
    title: "Anniversaries",
    desc: "Celebrate enduring milestones surrounded by closest family, elegant decor, and gourmet dining.",
    icon: "Heart"
  },
  {
    title: "Family Functions",
    desc: "Upanayan, naming ceremonies, retirement felicitations, and reunion celebrations in warmth.",
    icon: "Users"
  },
  {
    title: "Corporate Events",
    desc: "Conferences, annual general meetings, corporate dinners, and product showcases with projector setups.",
    icon: "Briefcase"
  },
  {
    title: "Social Gatherings",
    desc: "Community assemblies, festival banquets, and cultural evenings with flexible seating options.",
    icon: "Sparkles"
  },
  {
    title: "Private Events",
    desc: "Exclusive access to dedicated venue zones for bespoke private parties and closed celebrations.",
    icon: "ShieldCheck"
  }
];

export const VISUAL_STORY_STEPS = [
  {
    step: "01",
    title: "Welcome",
    tagline: "The Arrival Experience",
    description: "Your guests arrive to an imposing venue facade on Urdu Bazar Road, greeted by spacious entryways and warm hospitality right from the threshold.",
    image: "/images/editorial/hero_banquet_luxury.jpg"
  },
  {
    step: "02",
    title: "Gather",
    tagline: "Uniting Family & Loved Ones",
    description: "Expansive welcoming lobbies and poolside pre-function spaces where friends and relatives mingle effortlessly before the ceremony commences.",
    image: "/images/editorial/poolside_evening_luxury.jpg"
  },
  {
    step: "03",
    title: "Celebrate",
    tagline: "Moments of Pure Splendor",
    description: "From the grand Jaymala to emotional vows and joyous dancing, the main hall provides the theatrical grandeur your milestones deserve.",
    image: "/images/editorial/stage_celebration_lights.jpg"
  },
  {
    step: "04",
    title: "Remember",
    tagline: "Memories to Last Generations",
    description: "Every frame captured against picturesque backgrounds, leaving your family with memories etched with prestige and happiness.",
    image: "/images/editorial/wedding_ceremony_mandap.jpg"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Weddings",
    title: "Mandap & Ceremony Setup",
    subtitle: "Sacred Ritual Elegance",
    image: "/images/editorial/wedding_ceremony_mandap.jpg",
    badge: "Weddings",
    aspect: "tall"
  },
  {
    id: 2,
    category: "Venue",
    title: "Uma Palace Main Banquet Space",
    subtitle: "Indoor Event Grandeur",
    image: "/images/editorial/banquet_hall_interior.jpg",
    badge: "The Venue",
    aspect: "wide"
  },
  {
    id: 3,
    category: "Pool",
    title: "Evening Poolside Ambience",
    subtitle: "Signature Water Feature",
    image: "/images/editorial/poolside_evening_luxury.jpg",
    badge: "Swimming Pool",
    aspect: "square"
  },
  {
    id: 4,
    category: "Venue",
    title: "Uma Palace Venue Photo",
    subtitle: "Real Venue Showcase (@uma.palace)",
    image: "/images/venue/uma_ig_6.jpg",
    badge: "Real Venue Post",
    isRealIG: true,
    aspect: "square"
  },
  {
    id: 5,
    category: "Events",
    title: "Stage & Lighting Architecture",
    subtitle: "Designed for Live Ceremonies",
    image: "/images/editorial/stage_celebration_lights.jpg",
    badge: "Events",
    aspect: "wide"
  },
  {
    id: 6,
    category: "Decor",
    title: "Mehendi Sundowner Decor",
    subtitle: "Vibrant Floral Accents",
    image: "/images/editorial/wedding_mehendi_decor.jpg",
    badge: "Decor",
    aspect: "tall"
  },
  {
    id: 7,
    category: "Venue",
    title: "Uma Palace Celebration Capture",
    subtitle: "From Official Instagram (@uma.palace)",
    image: "/images/venue/uma_ig_15.jpg",
    badge: "Real Venue Post",
    isRealIG: true,
    aspect: "square"
  },
  {
    id: 8,
    category: "Venue",
    title: "Grand Dining & Table Settings",
    subtitle: "Exquisite Guest Hospitality",
    image: "/images/editorial/dining_grand_setup.jpg",
    badge: "The Venue",
    aspect: "wide"
  },
  {
    id: 9,
    category: "Pool",
    title: "Daylight Swimming Pool Setting",
    subtitle: "Sunlit Leisure Atmosphere",
    image: "/images/editorial/pool_daylight.jpg",
    badge: "Swimming Pool",
    aspect: "wide"
  },
  {
    id: 10,
    category: "Venue",
    title: "Uma Palace Guest Relaxation",
    subtitle: "From Official Instagram (@uma.palace)",
    image: "/images/venue/uma_ig_16.jpg",
    badge: "Real Venue Post",
    isRealIG: true,
    aspect: "square"
  },
  {
    id: 11,
    category: "Weddings",
    title: "Reception Dinner Illumination",
    subtitle: "Under Warm Golden Accents",
    image: "/images/editorial/wedding_reception_dinner.jpg",
    badge: "Weddings",
    aspect: "wide"
  },
  {
    id: 12,
    category: "Decor",
    title: "Sangeet Dance & Beats Setup",
    subtitle: "Celebratory Rhythm & Lights",
    image: "/images/editorial/sangeet_celebration.jpg",
    badge: "Decor",
    aspect: "square"
  },
  {
    id: 13,
    category: "Venue",
    title: "Uma Palace Night Atmosphere",
    subtitle: "Real Post from @uma.palace",
    image: "/images/venue/uma_ig_13.jpg",
    badge: "Real Venue Post",
    isRealIG: true,
    aspect: "square"
  },
  {
    id: 14,
    category: "Venue",
    title: "Comfortable Guest Accommodation",
    subtitle: "Bridal Suite & Rest Rooms",
    image: "/images/editorial/luxury_guest_room.jpg",
    badge: "The Venue",
    aspect: "tall"
  }
];

export const AMENITIES_CONFIRMED = [
  {
    name: "Banquet Hall",
    description: "Grand indoor hall tailored for weddings, receptions, and large gatherings.",
    icon: "Building2",
    status: "Confirmed Facility"
  },
  {
    name: "Weddings & Ceremonies",
    description: "Dedicated setup support for traditional pheras, mandap, and sangeet stages.",
    icon: "HeartHandshake",
    status: "Confirmed Facility"
  },
  {
    name: "Special Events & Functions",
    description: "Adaptable arrangements for birthdays, corporate meets, and anniversaries.",
    icon: "CalendarCheck",
    status: "Confirmed Facility"
  },
  {
    name: "Swimming Pool",
    description: "Signature leisure pool adding a refreshing open-air resort dimension.",
    icon: "Waves",
    status: "Confirmed Facility"
  }
];

export const AMENITIES_ADDITIONAL = [
  {
    name: "Guest Accommodations",
    description: "Comfortable rooms for bridal prep and family resting during multi-day events.",
    icon: "Bed",
    statusNote: "Inquire for room availability & details"
  },
  {
    name: "Dining & Catering Space",
    description: "Spacious buffet zones designed for streamlined food service.",
    icon: "Utensils",
    statusNote: "Inquire for catering options"
  },
  {
    name: "Power Backup",
    description: "Dedicated electrical backup to keep ceremonies illuminated seamlessly.",
    icon: "Zap",
    statusNote: "Facility details to be confirmed"
  },
  {
    name: "Parking Facility",
    description: "Vehicle arrival and parking convenience on Urdu Bazar Road.",
    icon: "Car",
    statusNote: "Facility details to be confirmed"
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    title: "Beautiful Ambience",
    description: "A memorable environment designed with balanced aesthetic warmth, celebratory charm, and refined dignity for your special occasions.",
    icon: "Sparkles"
  },
  {
    title: "Versatile Celebrations",
    description: "Flexible indoor and outdoor spaces crafted around weddings, festive banquets, family functions, and social gatherings.",
    icon: "Layers"
  },
  {
    title: "Memorable Experiences",
    description: "A distinctive combination of celebratory banquet spaces and poolside leisure that makes every visit feel complete.",
    icon: "Compass"
  },
  {
    title: "Convenient Location",
    description: "Centrally positioned on Urdu Bazar Road, Jamlapur in Ghazipur, providing direct accessibility for guests arriving across town.",
    icon: "MapPin"
  }
];

/**
 * Central Content & Configuration for Country Roads Resort & Events.
 *
 * Sourced directly from the official Country Roads website (https://www.countryroads.co.in/)
 * and verified business documentation.
 */

export interface BusinessVerificationItem {
  field: string;
  value: string;
  status: 'verified' | 'pending_confirmation';
  notes: string;
}

export interface RoomItem {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceSuffix: string;
  inclusions: string;
  description: string;
  tag: string;
  features: string[];
  view: string;
  capacity: string;
  imageKey: string;
  photoUrl: string;
}

export interface FacilityItem {
  id: string;
  index: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  description: string;
  features: string[];
  imageKey: string;
  photoUrl: string;
}

export interface PackageItem {
  id: string;
  title: string;
  badge: string;
  price: string;
  priceNote: string;
  description: string;
  inclusions: string[];
  photoUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  avatarUrl: string;
  source: string;
  reviewText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'resort' | 'rooms' | 'pool' | 'dining' | 'weddings' | 'activities';
  categoryLabel: string;
  caption: string;
  imageKey: string;
  photoUrl: string;
}

export interface CarouselShowcaseItem {
  id: string;
  title: string;
  categoryLabel: string;
  subtitle: string;
  description: string;
  locationLabel: string;
  targetSectionId: string;
  imageKey: string;
  photoUrl: string;
}

export const siteConfig = {
  brand: {
    name: 'Country Roads',
    legalName: 'Country Roads Resort & Events',
    logoUrl: '/assets/aistudio/file_000000002b9c8211b608f7ebf29698f5_8379c0ed.png',
    shortTagline: 'Where Life has a Whole New Meaning',
    headline: 'Where Life has a Whole New Meaning',
    subheadline:
      'Cradled in nature and nurtured by tranquillity, Country Roads is a 55-acre paradise sprawling with nature, vistas and unperturbed silence accentuated by the chirping of birds and whispers of the wind.',
    description:
      'Spread over 55 acres of lush countryside in Raghudevpur, Howrah, Country Roads features 21 modern rooms & suites, 30,000 sq.ft. of celebration lawns, multi-cuisine dining at Five Spices, After Hours Pub, Blue Water Cafe poolside, conference venues, and adventure activities just 20-30 minutes from Kolkata via Vidyasagar Setu and Kona Expressway.',
  },

  contact: {
    phone: '+91 98362 85550',
    phoneSecondary: '+91 91470 52922',
    phoneHelpline: '+91 86977 19727',
    phoneClean: '+919836285550',
    phoneDisplay: '+91 98362 85550',
    address: 'PO & Village Raghudevpur, Opposite Raghudevpur Gram Panchayat Office, Domjur - Bauria Road, Howrah - 711 322',
    landmark: 'Directly opposite Raghudevpur Gram Panchayat Office',
    locality: 'Panchla / Raghudevpur, Howrah',
    region: 'West Bengal',
    postalCode: '711322',
    country: 'India',
    emailSales: 'sales@countryroads.co.in',
    emailFrontOffice: 'frontoffice@countryroads.co.in',
    websiteUrl: 'https://www.countryroads.co.in/',
    mapsUrl: 'https://maps.app.goo.gl/itH1UjJ4jzQnvt487',
    mapsEmbedQuery: 'Country+Roads+Resort+Raghudevpur+Howrah',
    whatsappEnabled: false,
    whatsappNumber: '+919836285550',
  },

  story: {
    title: 'OUR STORY',
    tagline: 'Where Life has a Whole New Meaning',
    leadParagraph:
      'Cradled in nature and nurtured by tranquillity, Country Roads is a 55 acres paradise sprawling with nature, vistas and unperturbed silence accentuated by the chirping of birds and whispers of the wind! Enjoy our hospitality and stay at our Resort to feel the magic.',
    neverlandIntro:
      "For years we have heard stories of Neverland. It's time we found it. Not very far from the Kona expressway is a place called Panchla - a picturesque countryside near Bauria hidden from the common man's eyes because of its rustic settings. Connecting this unspoiled, magnificent getaway is the Mumbai Highway (NH-6) that can be covered in just 30 minutes from Kolkata. This is where Country Roads is your call to paradise, spread over 55 acres of magnificent greens.. where life has a whole new meaning.",
    pillars: [
      {
        value: '20 mins',
        label: 'FROM KOLKATA',
        description: 'Just 20-30 minutes drive from Vidyasagar Setu along Kona Expressway & NH-6 Mumbai Highway.',
        icon: 'clock',
      },
      {
        value: '55 Acres',
        label: 'NATURAL VIEW',
        description: 'Vast sprawling landscape with lush manicured lawns, palm groves, and abundant natural water bodies.',
        icon: 'trees',
      },
      {
        value: 'Delicious',
        label: 'CUISINES',
        description: 'Five Spices multi-cuisine restaurant, After Hours Pub, and poolside Blue Water Cafe.',
        icon: 'utensils',
      },
      {
        value: 'European',
        label: 'MEETING ROOMS',
        description: 'State-of-the-art corporate conference facilities, 30,000 sq.ft. lawns & banquet halls.',
        icon: 'briefcase',
      },
    ],
  },

  aboutTabs: {
    aboutUs: {
      title: 'About Us',
      lead: 'Country Roads is a pristine retreat, away from the maddening rush of the city. Dotted with sprawling lush green lawns, gardens, trees, and abundant natural water bodies, the unspoiled world / openess of Country Roads harmonizes the mind, body and soul, gifting guests a rejuvenating experience.',
      distances:
        'The resort is just a 30 minutes drive from Vidyasagar Setu, and is 40 minutes from Central Kolkata. Netaji Subhash Chandra Bose International Airport can be reached within an hour from our resort.',
      estateDetails:
        "Country Roads is spread over 55 acres of land which included the resort as well as the Villas. The Resort has 21 Rooms with all the modern facilities. It has a multi-cuisine resteraunt, Bar, Swimming Pool, Children's Pool, 30,000 sq.ft. of lawn, Conference Rooms, Cycling and Jogging Track, Outdoor and Indoor Game Facilities. Country Roads is equipped with amenities that make it one of the most special weekend getaways in Kolkata.",
    },
    whyStay: {
      title: 'Why Stay At Our Resort',
      sections: [
        {
          heading: 'A Green Paradise',
          text: 'Sprawled across 55 acres of verdant landscape, surrounded by natural flora and peaceful water bodies away from urban pollution.',
        },
        {
          heading: 'Nurturing Nature',
          text: 'Preserving the natural countryside ecosystem with bird habitats, shaded avenues, and fresh country air.',
        },
        {
          heading: 'Blissful Relaxation - Your Wellness Resort',
          text: 'Unwind with leisurely swimming pool dips, morning bicycle trails, open lawn yoga, and peaceful gazebo evenings.',
        },
      ],
    },
    safety: {
      title: 'Our Cleanliness & Safety Initiatives',
      heading: 'Sanitization of the Resort – When safety comes first',
      text: 'Rigorous daily sanitization of guest rooms, common areas, dining tables, pool waters, and meeting venues following comprehensive hospitality hygiene protocols.',
    },
  },

  accommodations: [
    {
      id: 'deluxe-club-lawn',
      name: 'Deluxe Club Room - Lawn View',
      subtitle: 'Extra Large Room with Mesmerizing Lawn Views',
      price: '4,499',
      priceSuffix: 'INR + GST',
      inclusions: 'Includes: Room + Breakfast + Free WiFi',
      tag: 'Lawn Facing',
      description:
        'Offering each and every luxury within the four walls, these well-furnished extra large rooms with the mesmerizing view of the lush green lawns, are designed exclusively to gift you with an unforgettable moments of your life.',
      features: [
        'Flat-screen TV',
        'Work Desk',
        'Air Conditioner',
        'Mini Fridge',
        'Complete Range of Toiletries',
        'Electronic Safe',
        'Tea Coffee Maker',
        'Complimentary Water (2 bottles)',
      ],
      view: 'Lush Green Lawns',
      capacity: '2 Adults + 1 Child',
      imageKey: 'club_room_lawn',
      photoUrl: '/assets/official/club_room_lawn.jpg',
    },
    {
      id: 'deluxe-club-pool',
      name: 'Deluxe Club Room - Pool View',
      subtitle: 'Direct Azure Swimming Pool & Landscape Views',
      price: '5,499',
      priceSuffix: 'INR + GST',
      inclusions: 'Includes: Room + Breakfast + Free WiFi',
      tag: 'Pool Facing',
      description:
        'Designed to perfection, our King Rooms offer direct views of the azure swimming pool and landscaped surroundings, with generous room to stretch out and unwind.',
      features: [
        'Poolside & Water View',
        'Flat-screen TV',
        'Work Desk',
        'Air Conditioner',
        'Mini Fridge',
        'Complete Range of Toiletries',
        'Electronic Safe',
        'Tea Coffee Maker',
      ],
      view: 'Azure Swimming Pool & Deck',
      capacity: 'Up to 3 Guests',
      imageKey: 'club_room_pool',
      photoUrl: '/assets/official/club_room_pool.jpg',
    },
    {
      id: 'suite-rooms',
      name: 'SUITE ROOMS',
      subtitle: 'One Drawing Room + One Bedroom with Attached Bath',
      price: '7,499',
      priceSuffix: 'INR + GST',
      inclusions: 'Includes: Room + Breakfast + Free WiFi',
      tag: 'Executive Luxury',
      description:
        'Generous suites designed with a separate drawing salon and one luxury bedroom with attached bath to offer a unique ambience with superb facilities and stunning decor.',
      features: [
        'Separate Drawing Salon',
        'King Master Bed',
        '32" Flat-screen TV',
        'Work Desk',
        'Air Conditioner',
        'Mini Fridge',
        'Complete Range of Toiletries',
        'Electronic Safe',
        'Tea Coffee Station',
      ],
      view: 'Panoramic Resort & Nature View',
      capacity: 'Up to 4 Guests',
      imageKey: 'suite_room',
      photoUrl: '/assets/official/suite_room.jpg',
    },
  ] as RoomItem[],

  suiteNote:
    'With far more space than an ordinary hotel room, our rooms and suites provide you with plenty of room to stretch out and relax. Each room/suite includes a mini fridge, a work Desk, 32” flat screen TV, electronic safe, and a complete range of toiletries.',

  getYourRoomCallout: {
    heading: 'GET YOUR ROOM',
    lead: 'Promising to be the epitome of the luxurious refuge, these rooms are designed with one drawing and one bedroom with attached bath to offer a unique ambience with superb facilities and stunning decor.',
    highlights:
      'Best of all, these rooms provide mesmerizing views of deep blue waters of the swimming pool and breathtaking green of the surrounding nature. Enjoy Nature Walk, Cycling, Swimming Pool (With Proper Costume), Green Lawn, Indoor Games, Outdoor Games & much more at Country Roads - the best resort near Kolkata.',
  },

  packages: [
    {
      id: 'pkg-special-stay',
      title: 'SPECIAL STAY PACKAGE',
      badge: 'All-Inclusive Stay',
      price: '6,499',
      priceNote: 'INR * Taxes Included',
      description:
        'Unparalleled experience at a very reasonable price! Apart from all modern amenities at our Resort, you can enjoy mouth-watering food, nature walk, cycling, swimming pool (with proper costume), indoor games, outdoor games & much more.',
      inclusions: [
        'Accommodation for one day (couple)',
        'Breakfast and two major meals included',
        'Package valid for all seven days in a week',
        'Children below 5 years stay free (using same bed)',
        'One round of Adventure Activities included',
        'All taxes included in price',
      ],
      photoUrl: '/assets/official/Best_packages_3.png',
    },
    {
      id: 'pkg-day-outing',
      title: 'DAY OUTING WITH ACTIVITIES',
      badge: 'Day Pass & Adventure',
      price: '3,100',
      priceNote: '+ GST per person',
      description:
        'Country Roads is one of the best Day Outing Spots near Kolkata. The green ambience and vast open grounds make it the ideal choice for a day of fun and relaxation with friends & families.',
      inclusions: [
        'Welcome Breakfast & Refreshments',
        'Zipline Adventure Experience',
        'Target Gun Shooting',
        'Archery Session',
        'Countryside Cycling & Grounds Access',
      ],
      photoUrl: '/assets/official/day_outing_activities.jpg',
    },
  ] as PackageItem[],

  facilities: [
    {
      id: 'fac-swimming-pool',
      index: '01',
      title: 'SWIMMING POOL',
      highlightWord: 'SWI',
      subtitle: 'Poolside Loungers & Children’s Pool',
      description:
        'Dip your toes into the refreshing water, take a leisurely swim or soak up the sun in an easy chair by the poolside. Equipped with all modern amenities, the poolside is a cool place to hang out with your friends and family.',
      features: ['Main Swimming Pool', "Children's Pool", 'Sun Loungers & Deck Chairs', 'Poolside Towel Service'],
      imageKey: 'swimming_pool',
      photoUrl: '/assets/official/swimming_pool.jpg',
    },
    {
      id: 'fac-corporate-meeting',
      index: '02',
      title: 'CORPORATE MEETING ROOMS',
      highlightWord: 'CORP',
      subtitle: 'European Design Fused with Kolkata Sensibilities',
      description:
        'For those looking for a corporate conference venue near Kolkata, Country Roads is the place to be. Inspired by European interior design fused with the sensibilities of our very own Kolkata, the state-of-the-art conference rooms have facilities that go beyond business needs. Indulge in long business discussions amidst a backdrop of lush greenery or overlooking the Swimming Pool. Conduct uninterrupted business meetings nestled in nature at the most serene corporate meeting venue near Kolkata, only at Country Roads.',
      features: [
        'State-of-the-Art Conference Venue',
        'High-Speed AV & Projector Support',
        'Overlooking Greenery & Swimming Pool',
        'Banquet & Residential Conference Packages',
      ],
      imageKey: 'corp_meeting',
      photoUrl: '/assets/official/corp_meeting.jpg',
    },
    {
      id: 'fac-five-spices',
      index: '03',
      title: "FIVE SPICES - A SOUL'S DELIGHT",
      highlightWord: 'FIVE',
      subtitle: 'Multi-Cuisine Fine Dining Restaurant',
      description:
        "The multi-cuisine restaurant at Country Roads offers a unique fine-dining experience where good quality food and service is complemented by a timeless ambiance. The menu features a strong blend of contemporary and traditional delicacies from India and the world over to delight your soul. And, for special events ranging from celebrations to bonding of your dream, the restaurant can orchestrate the perfect event. Reasons To Choose Five Spices: Cuisines from all over the world - Indian, Chinese, Thai, Continental. Excellent personalized service. South Indian, Bengali Food, Gujarati Food, Chaat etc.",
      features: [
        'Indian, Chinese, Thai & Continental Cuisines',
        'Authentic Bengali & Gujarati Delicacies',
        'Specialty Chaat & Tandoor Live Counters',
        'Air-Conditioned Timeless Ambiance',
      ],
      imageKey: 'five_spices',
      photoUrl: '/assets/official/five_spices.jpg',
    },
    {
      id: 'fac-after-hours-pub',
      index: '04',
      title: 'AFTER HOURS - PUB - FREE YOUR MIND',
      highlightWord: 'PUB',
      subtitle: 'Contemporary Pub, Cocktails & Pool Table',
      description:
        'When the sun goes down, swing to a different beat at our contemporary pub that serves a range of premium alcoholic beverages, exotic cocktails and a range of soft beverages.',
      features: [
        'Premium Alcoholic Beverages & Cocktails',
        'Exotic Mocktails & Soft Beverages',
        'Billiards & Pool Table Game Lounge',
        'Ambient Twilight Lighting & Music',
      ],
      imageKey: 'pub_after_hours',
      photoUrl: '/assets/official/pub_after_hours.png',
    },
    {
      id: 'fac-blue-water-cafe',
      index: '05',
      title: 'BLUE WATER CAFE - POOLSIDE - EVENING SNACKS',
      highlightWord: 'CAFE',
      subtitle: 'Poolside Beverages, Frozen Sorbets & Amuse Bouche',
      description:
        'Soak up the sun and mist with a dip in our pool. Quench your thirst with premium beverages and frozen sorbets accompanied with Snacks and Amuse Bouche here.',
      features: [
        'Frozen Sorbets & Tropical Coolers',
        'Artisanal Snacks & Amuse Bouche',
        'Open-Air Poolside Breeze Seating',
        'Light Bites & Tea/Coffee Service',
      ],
      imageKey: 'bluewatercafe',
      photoUrl: '/assets/official/bluewatercafe.jpg',
    },
    {
      id: 'fac-fishing-cycling',
      index: '06',
      title: 'FISHING / CYCLING / JOGGING / BIRD WATCHING FACILITIES',
      highlightWord: 'NATURE',
      subtitle: 'Environ-Inclusive Natural Water Bodies & Trails',
      description:
        'At Country Roads, you can enjoy a host of environ-inclusive activities. The presence of natural water bodies helps us preserve the intrinsic ecosystem. Go for a round of fishing with your buds and have a great time, or a stroll round the water body.',
      features: [
        'Natural Water Body & Eco-Fishing',
        'Paved Cycling & Morning Jogging Circuits',
        'Native Bird Sanctuary & Butterfly Farm',
        'Vehicle-Free Countryside Trails',
      ],
      imageKey: 'fishing_cycling',
      photoUrl: '/assets/official/fishing_cycling.jpg',
    },
    {
      id: 'fac-adventure',
      index: '07',
      title: 'ADVENTURE ACTIVITIES',
      highlightWord: 'ADVENTURE',
      subtitle: 'Archery, Balloon Shooting, Rope Course & Kayaking',
      description:
        'Feel the Adventurous relaxation at Country Roads - Archery, Balloon Shooting & Rope Course. Experience outdoor thrill and family adventure within safe, monitored grounds.',
      features: [
        'Archery Target Range',
        'Air Gun & Balloon Shooting',
        'High & Low Rope Obstacle Course',
        'Lake Kayaking (Subject to weather)',
      ],
      imageKey: 'adventure_kayaking',
      photoUrl: '/assets/official/adventure_kayaking.jpg',
    },
  ] as FacilityItem[],

  // Alias for facilities backward-compatibility
  experiences: [
    {
      id: 'fac-swimming-pool',
      index: '01',
      title: 'SWIMMING POOL',
      subtitle: 'Poolside Loungers & Children’s Pool',
      description:
        'Dip your toes into the refreshing water, take a leisurely swim or soak up the sun in an easy chair by the poolside. Equipped with all modern amenities.',
      features: ['Main Swimming Pool', "Children's Pool", 'Sun Loungers & Deck', 'Poolside Towel Service'],
      imageKey: 'swimming_pool',
      photoUrl: '/assets/official/swimming_pool.jpg',
    },
    {
      id: 'fac-corporate-meeting',
      index: '02',
      title: 'CORPORATE MEETING ROOMS',
      subtitle: 'European Design Fused with Kolkata Sensibilities',
      description:
        'For those looking for a corporate conference venue near Kolkata, Country Roads is the place to be. Inspired by European interior design.',
      features: ['State-of-the-Art Conference Venue', 'AV & Projector Support', 'Pool & Lawn Views', 'Banquet Packages'],
      imageKey: 'corp_meeting',
      photoUrl: '/assets/official/corp_meeting.jpg',
    },
    {
      id: 'fac-five-spices',
      index: '03',
      title: "FIVE SPICES - A SOUL'S DELIGHT",
      subtitle: 'Multi-Cuisine Fine Dining Restaurant',
      description:
        'A unique fine-dining experience where good quality food and service is complemented by a timeless ambiance. Indian, Chinese, Thai & Continental.',
      features: ['Indian, Chinese & Continental', 'Authentic Bengali & Gujarati', 'Tandoor & Chaat Counters', 'Air-Conditioned Dining'],
      imageKey: 'five_spices',
      photoUrl: '/assets/official/five_spices.jpg',
    },
    {
      id: 'fac-after-hours-pub',
      index: '04',
      title: 'AFTER HOURS - PUB',
      subtitle: 'Contemporary Pub, Cocktails & Pool Table',
      description:
        'When the sun goes down, swing to a different beat at our contemporary pub that serves premium beverages and cocktails with a billiards lounge.',
      features: ['Premium Alcoholic Beverages', 'Exotic Cocktails & Mocktails', 'Billiards & Pool Table Lounge', 'Twilight Ambient Music'],
      imageKey: 'pub_after_hours',
      photoUrl: '/assets/official/pub_after_hours.png',
    },
    {
      id: 'fac-blue-water-cafe',
      index: '05',
      title: 'BLUE WATER CAFE - POOLSIDE',
      subtitle: 'Poolside Beverages, Frozen Sorbets & Evening Snacks',
      description:
        'Soak up the sun and mist with a dip in our pool. Quench your thirst with premium beverages and frozen sorbets accompanied with Snacks.',
      features: ['Frozen Sorbets & Coolers', 'Artisanal Snacks & Amuse Bouche', 'Open-Air Poolside Breeze', 'Tea/Coffee Service'],
      imageKey: 'bluewatercafe',
      photoUrl: '/assets/official/bluewatercafe.jpg',
    },
    {
      id: 'fac-fishing-cycling',
      index: '06',
      title: 'FISHING / CYCLING / BIRD WATCHING',
      subtitle: 'Natural Water Bodies & Paved Countryside Trails',
      description:
        'At Country Roads, you can enjoy a host of environ-inclusive activities. Natural water bodies preserve the intrinsic ecosystem.',
      features: ['Natural Water Body & Eco-Fishing', 'Paved Cycling Circuits', 'Native Bird Sanctuary', 'Country Trails'],
      imageKey: 'fishing_cycling',
      photoUrl: '/assets/official/fishing_cycling.jpg',
    },
    {
      id: 'fac-adventure',
      index: '07',
      title: 'ADVENTURE ACTIVITIES',
      subtitle: 'Archery, Balloon Shooting, Rope Course & Kayaking',
      description:
        'Feel the Adventurous relaxation at Country Roads - Archery, Balloon Shooting & Rope Course. Experience outdoor thrill with family.',
      features: ['Archery Target Range', 'Air Gun & Balloon Shooting', 'High & Low Rope Course', 'Lake Kayaking'],
      imageKey: 'adventure_kayaking',
      photoUrl: '/assets/official/adventure_kayaking.jpg',
    },
  ],

  dining: {
    title: 'FIVE SPICES, AFTER HOURS PUB & BLUE WATER CAFE',
    subtitle: "A Soul's Delight - World Cuisines, Cocktails & Poolside Refreshments",
    description:
      "The multi-cuisine restaurant at Country Roads offers a unique fine-dining experience where good quality food and service is complemented by a timeless ambiance. The menu features a strong blend of contemporary and traditional delicacies from India and the world over to delight your soul. Savor Indian, Chinese, Thai, Continental, South Indian, Bengali Food, Gujarati Food, Chaat and live tandoor.",
    note: 'Five Spices: 07:30 AM - 10:30 PM · After Hours Pub: 12:00 PM - 11:00 PM · Blue Water Cafe: 04:00 PM - 09:00 PM',
    venues: [
      {
        name: "Five Spices - A Soul's Delight",
        tagline: 'Multi-Cuisine Fine Dining Restaurant',
        description:
          'A strong blend of contemporary and traditional delicacies from India and the world over to delight your soul. Cuisines from all over the world - Indian, Chinese, Thai, Continental, authentic Bengali Food, Gujarati Food, Chaat, and personalized banquet catering.',
        imageKey: 'five_spices',
        photoUrl: '/assets/official/five_spices.jpg',
        cuisines: ['Indian Delicacies', 'Chinese & Thai', 'Continental Grills', 'Bengali Specials', 'Gujarati Food', 'Chaat Live Counter'],
      },
      {
        name: 'After Hours - Pub - Free Your Mind',
        tagline: 'Contemporary Evening Pub & Pool Table',
        description:
          'When the sun goes down, swing to a different beat at our contemporary pub that serves a range of premium alcoholic beverages, exotic cocktails and a range of soft beverages with a billiards lounge.',
        imageKey: 'pub_after_hours',
        photoUrl: '/assets/official/pub_after_hours.png',
        cuisines: ['Exotic Cocktails', 'Premium Spirits', 'Billiards Lounge', 'Artisanal Mocktails'],
      },
      {
        name: 'Blue Water Cafe - Poolside',
        tagline: 'Evening Snacks & Frozen Sorbets',
        description:
          'Soak up the sun and mist with a dip in our pool. Quench your thirst with premium beverages and frozen sorbets accompanied with Snacks and Amuse Bouche here.',
        imageKey: 'bluewatercafe',
        photoUrl: '/assets/official/bluewatercafe.jpg',
        cuisines: ['Frozen Sorbets', 'Amuse Bouche', 'Poolside Refreshments', 'Gourmet Light Bites'],
      },
    ],
    features: [
      {
        title: 'World Cuisines & Local Roots',
        description:
          'From traditional Bengali fish delicacies and Gujarati dishes to authentic Chinese, Thai curries and Continental favorites, curated by expert chefs.',
      },
      {
        title: 'After Hours Pub & Lounge',
        description:
          'Unwind over premium spirits, craft cocktails, pool table billiards, and twilight music in a contemporary colonial-inspired lounge setting.',
      },
      {
        title: 'Blue Water Poolside Sundowners',
        description:
          'Relax on the sun deck with frozen sorbets, gourmet snacks, and cool drinks overlooking azure waters under the open skies.',
      },
      {
        title: 'Personalized Banquet Feasts',
        description:
          'Customized menus for wedding receptions, corporate gala dinners, birthday parties, and festive buffets (Hilsa Festival, Holi parties).',
      },
    ],
  },

  weddingsAndEvents: {
    title: 'A Gala Time at Country Roads',
    subtitle: 'Dream Wedding Destination & Event Venues Near Kolkata',
    description:
      "Nestled amidst tranquil greenery, and highlighted by a lovely backdrop of nature's idyllic settings, Country Roads is the ideal choice for a dream Wedding Destination near Kolkata. Spread across 55 acres with 30,000 sq.ft. of lush celebration lawns, 21 guest rooms for family stay, and experienced event coordinators, celebrate the most special day of your life in this paradise of serenity and calm.",
    imageKey: 'wedding_bride',
    photoUrl: '/assets/official/wedding_bride.jpg',
    eventsImageKey: 'events_gala',
    eventsPhotoUrl: '/assets/official/events_gala.jpg',
    spaces: [
      {
        name: '30,000 Sq.Ft. Celebration Lawn',
        capacity: 'Up to 1,500 Guests',
        description:
          'Vast open-air manicured lawn under starry skies, perfectly suited for grand mandap setups, reception stages, and high-energy sangeets.',
      },
      {
        name: 'Resort Swimming Pool Promenade',
        capacity: 'Up to 300 Guests',
        description:
          'Ambient poolside setting with fairy lights and deck loungers, ideal for mehendi parties, cocktail sundowners, and intimate celebrations.',
      },
      {
        name: 'European Banquet Conference Hall',
        capacity: 'Up to 250 Guests',
        description:
          'Air-conditioned indoor venue with sophisticated European interior design, suitable for ring ceremonies, private banquets, and corporate seminars.',
      },
      {
        name: 'Lakeside Gazebos & Nature Pavilions',
        capacity: 'Up to 120 Guests',
        description:
          'Rustic waterside settings framed by native trees and water bodies for haldi rituals, morning gatherings, and photo shoots.',
      },
    ],
  },

  corporate: {
    title: 'European Corporate Meeting Rooms & Retreats',
    subtitle: 'Conduct Uninterrupted Business Meetings Nestled in Nature',
    description:
      'For those looking for a corporate conference venue near Kolkata, Country Roads is the place to be. Inspired by European interior design fused with the sensibilities of our very own Kolkata, the state-of-the-art conference rooms have facilities that go beyond business needs. Indulge in long business discussions amidst a backdrop of lush greenery or overlooking the Swimming Pool. Only at Country Roads.',
    imageKey: 'corp_meeting',
    photoUrl: '/assets/official/corp_meeting.jpg',
    offerings: [
      'European Inspired State-of-the-Art Conference Venue',
      'High-Speed AV Equipment & HD Projection Systems',
      'Panoramic Views of Swimming Pool & Sprawling Greens',
      '21 Premium Rooms & Suites for Residential Offsites',
      'Adventure Activities: Zipline, Target Shooting & Archery',
      'Multi-Cuisine Buffet Dining at Five Spices',
      'Expansive 30,000 Sq.Ft. Grounds for Team Building',
      'Convenient 20–30 Mins Access from Vidyasagar Setu',
    ],
  },

  galaTime: {
    title: 'A Gala Time at Country Roads',
    subtitle: 'From Day Outings to Dream Weddings & Milestone Events',
    eventsDescription:
      'From the most tempting of food festivals to the grandest of events, Country Roads is the ultimate destination for happening weekend. Be it hosting a high-spirited Holi party with rain dance and DJ or organizing the mouth-watering Hilsa food festival, the resort is among the top Event Venues near Kolkata.',
    weddingDescription:
      "Nestled amidst tranquil greenery, and highlighted by a lovely backdrop of nature's idyllic settings, Country Roads is the ideal choice for a dream Wedding Destination near Kolkata. Enquire Now to enjoy the most special day of your life in this paradise of serenity and calm.",
  },

  reviews: [
    {
      id: 'rev-1',
      author: 'Somenath Kundu',
      location: 'Kolkata',
      avatarUrl: '/assets/official/27747608_957501897733239_1975473211212118660_o.jpg',
      source: 'Google Reviews / TripAdvisor',
      reviewText:
        "The ambient is pleasant, rooms are spacious...food is also good. Behavior of staffs is friendly and co-operative. It's a good place to hangout with family, friends and for official parties. We had our meet there and it was well organized.",
    },
    {
      id: 'rev-2',
      author: 'Nitish K.',
      location: 'Kolkata',
      avatarUrl: '/assets/official/nitish-k.jpg',
      source: 'TripAdvisor Verified Review',
      reviewText:
        'Awesome team day outing with Country Roads with awesome lunch.... Chicken was too good.... Good ambiance with co-operative staff.. Coordinated with Priyanka and she managed everything perfectly.... Thanks for that. Must go!',
    },
    {
      id: 'rev-3',
      author: 'Saki B.',
      location: 'West Bengal',
      avatarUrl: '/assets/official/saki-b1.jpg',
      source: 'Verified Guest Stay Review',
      reviewText:
        'A wonderful weekend retreat! The 55 acres of lush greenery, tranquil swimming pool, and delicious Indian and Bengali food at Five Spices made our family vacation truly unforgettable.',
    },
    {
      id: 'rev-4',
      author: 'Poulomi D.',
      location: 'Kolkata',
      avatarUrl: '/assets/official/f00c18d904f063a5b5a8361102d6b48e.jpg',
      source: 'Event & Wedding Review',
      reviewText:
        'Attended a destination wedding on the 30,000 sq.ft. lawn. The lighting, open night sky, and prompt catering service by the Country Roads banquet team was extraordinary.',
    },
  ] as ReviewItem[],

  gallery: [
    {
      id: 'gal-1',
      title: 'Tuscan Resort & Poolside View',
      category: 'resort',
      categoryLabel: 'Resort & Grounds',
      caption: 'The iconic Tuscan architecture of Country Roads beside the sparkling swimming pool',
      imageKey: 'hero_slider_1',
      photoUrl: '/assets/official/hero_slider_1.jpg',
    },
    {
      id: 'gal-2',
      title: 'Main Resort Gate & Driveway',
      category: 'resort',
      categoryLabel: 'Resort Architecture',
      caption: 'The gated entrance arch and driveway greeting guests at Country Roads, Howrah',
      imageKey: 'hero_slider_2',
      photoUrl: '/assets/official/hero_slider_2.jpg',
    },
    {
      id: 'gal-3',
      title: 'Grand Swimming Pool & Sun Deck',
      category: 'pool',
      categoryLabel: 'Swimming Pool',
      caption: 'Refreshing pool waters framed by palm trees and relaxation loungers',
      imageKey: 'swimming_pool',
      photoUrl: '/assets/official/swimming_pool.jpg',
    },
    {
      id: 'gal-4',
      title: 'Colonial Club House & Fountain',
      category: 'resort',
      categoryLabel: 'Resort & Grounds',
      caption: 'The stately club building surrounded by green lawns and natural flora',
      imageKey: 'about_building',
      photoUrl: '/assets/official/about_building.jpg',
    },
    {
      id: 'gal-5',
      title: 'Deluxe Club Room - Lawn View',
      category: 'rooms',
      categoryLabel: 'Guest Rooms',
      caption: 'Spacious air-conditioned guest room overlooking the sprawling emerald lawns',
      imageKey: 'club_room_lawn',
      photoUrl: '/assets/official/club_room_lawn.jpg',
    },
    {
      id: 'gal-6',
      title: 'Five Spices Restaurant',
      category: 'dining',
      categoryLabel: 'Dining',
      caption: 'Timeless fine dining serving Indian, Bengali, Chinese, Thai & Continental cuisines',
      imageKey: 'five_spices',
      photoUrl: '/assets/official/five_spices.jpg',
    },
    {
      id: 'gal-7',
      title: 'After Hours Pub & Cocktails',
      category: 'dining',
      categoryLabel: 'Pub & Lounge',
      caption: 'Contemporary evening pub with pool table, cocktail bar, and ambient music',
      imageKey: 'pub_after_hours',
      photoUrl: '/assets/official/pub_after_hours.png',
    },
    {
      id: 'gal-8',
      title: 'European Corporate Conference Room',
      category: 'activities',
      categoryLabel: 'Corporate Meeting',
      caption: 'State-of-the-art conference venue with long banquet seating and nature views',
      imageKey: 'corp_meeting',
      photoUrl: '/assets/official/corp_meeting.jpg',
    },
    {
      id: 'gal-9',
      title: 'Dream Destination Wedding Lawn',
      category: 'weddings',
      categoryLabel: 'Weddings & Celebrations',
      caption: '30,000 sq.ft. lawn decorated with mandap setups and festive lighting for weddings',
      imageKey: 'wedding_bride',
      photoUrl: '/assets/official/wedding_bride.jpg',
    },
    {
      id: 'gal-10',
      title: 'Adventure Activities & Kayaking',
      category: 'activities',
      categoryLabel: 'Adventure & Sports',
      caption: 'Outdoor lake kayaking, archery, rope course, and target shooting',
      imageKey: 'adventure_kayaking',
      photoUrl: '/assets/official/adventure_kayaking.jpg',
    },
    {
      id: 'gal-11',
      title: 'Blue Water Poolside Cafe',
      category: 'dining',
      categoryLabel: 'Poolside Cafe',
      caption: 'Open-air poolside snacks, frozen sorbets, and light refreshments',
      imageKey: 'bluewatercafe',
      photoUrl: '/assets/official/bluewatercafe.jpg',
    },
    {
      id: 'gal-12',
      title: 'Eco-Fishing Lake & Gazebo',
      category: 'activities',
      categoryLabel: 'Nature & Recreation',
      caption: 'Natural water bodies with fishing pavilion and serene shaded walking trails',
      imageKey: 'fishing_cycling',
      photoUrl: '/assets/official/fishing_cycling.jpg',
    },
  ] as GalleryItem[],

  carouselShowcase: [
    {
      id: 'car-resort-gallery',
      title: 'Resort Sanctuary',
      categoryLabel: 'Resort Gallery',
      subtitle: '55 Acres of Lush Countryside',
      description:
        'Cradled in nature and nurtured by tranquillity, Country Roads spans 55 acres of manicured lawns, palm groves, and serene water bodies just 20 minutes from Vidyasagar Setu.',
      locationLabel: 'Panchla, Raghudevpur · Howrah, WB',
      targetSectionId: 'story',
      imageKey: 'about_drone',
      photoUrl: '/assets/official/DJI_0050.jpg',
    },
    {
      id: 'car-accommodation',
      title: 'Club Suites & Rooms',
      categoryLabel: 'Accommodation',
      subtitle: '21 Modern Rooms & Villas',
      description:
        'Extra-large Deluxe Club Lawn View, Pool View, and Executive Suite rooms with drawing salons, work desks, mini fridges, and complimentary breakfast.',
      locationLabel: 'Starting ₹4,499 INR + GST · WiFi Included',
      targetSectionId: 'stays',
      imageKey: 'suite_room',
      photoUrl: '/assets/official/suite_room.jpg',
    },
    {
      id: 'car-swimming-pool',
      title: 'Swimming Pool & Deck',
      categoryLabel: 'Swimming Pool',
      subtitle: 'Azure Waters & Loungers',
      description:
        'Dip into refreshing open-air waters, relax on sunlit poolside deck chairs, or unwind beside the Children’s Pool framed by tropical palms.',
      locationLabel: 'Poolside Promenade & Blue Water Cafe',
      targetSectionId: 'experiences',
      imageKey: 'swimming_pool',
      photoUrl: '/assets/official/swimming_pool.jpg',
    },
    {
      id: 'car-dining',
      title: 'Five Spices & Pub',
      categoryLabel: 'Dining Experience',
      subtitle: "A Soul's Delight & Lounge",
      description:
        'Savor Indian, Bengali, Gujarati, Chinese, Thai, and Continental cuisines at Five Spices, paired with evening cocktails at After Hours Pub.',
      locationLabel: 'Multi-Cuisine Dining · Poolside Snacks',
      targetSectionId: 'dining',
      imageKey: 'five_spices',
      photoUrl: '/assets/official/five_spices.jpg',
    },
    {
      id: 'car-weddings',
      title: 'Weddings & Galas',
      categoryLabel: 'Weddings & Celebrations',
      subtitle: '30,000 Sq.Ft. Open Lawns',
      description:
        'An idyllic wedding destination near Kolkata hosting grand open-air receptions, sangeets, Holi rain-dance galas, and Hilsa food festivals.',
      locationLabel: 'Up to 1,500 Guests · Event Coordinators',
      targetSectionId: 'weddings',
      imageKey: 'wedding_bride',
      photoUrl: '/assets/official/wedding_bride.jpg',
    },
    {
      id: 'car-nature-outdoor',
      title: 'Nature & Adventure',
      categoryLabel: 'Nature & Outdoor Experiences',
      subtitle: 'Lakes, Cycling & Rope Course',
      description:
        'Enjoy eco-fishing, paved morning cycling and jogging tracks, bird watching, lake kayaking, zipline, archery, and target gun shooting.',
      locationLabel: '55 Acres Natural Flora & Water Bodies',
      targetSectionId: 'experiences',
      imageKey: 'adventure_kayaking',
      photoUrl: '/assets/official/adventure_kayaking.jpg',
    },
    {
      id: 'car-corporate',
      title: 'European Meeting Halls',
      categoryLabel: 'Corporate Venue',
      subtitle: 'Conferences Nestled in Nature',
      description:
        'European-inspired conference rooms overlooking lush greens and pool waters, equipped with AV systems for seamless business offsites.',
      locationLabel: '20–30 Mins from Vidyasagar Setu',
      targetSectionId: 'corporate',
      imageKey: 'corp_meeting',
      photoUrl: '/assets/official/corp_meeting.jpg',
    },
  ] as CarouselShowcaseItem[],

  verificationAudit: [
    {
      field: 'Official Domain & Online Presence',
      value: 'https://www.countryroads.co.in/',
      status: 'verified',
      notes: 'Imported and verified directly from the official website and server image repository.',
    },
    {
      field: 'Resort Area & Scale',
      value: '55 Acres of Land & Villas (30,000 sq.ft. Lawns, 21 Rooms)',
      status: 'verified',
      notes: 'Exact official figures confirmed from official "About Us" and "Our Story" sections.',
    },
    {
      field: 'Verified Room Tariffs',
      value: 'Deluxe Lawn (₹4,499+GST), Deluxe Pool (₹5,499+GST), Suite (₹7,499+GST)',
      status: 'verified',
      notes: 'Published room tariffs including Room + Breakfast + Free WiFi from official website.',
    },
    {
      field: 'Special Packages',
      value: 'Special Stay Package (₹6,499 with meals) & Day Outing (₹3,100+GST with adventure)',
      status: 'verified',
      notes: 'Official packages verified with inclusions for adventure, meals, and activities.',
    },
    {
      field: 'Official Facilities & Dining Venues',
      value: 'Five Spices, After Hours Pub, Blue Water Cafe, Corporate Meeting Rooms, Adventure, Pool',
      status: 'verified',
      notes: 'The 7 verified facility pillars matching official branding and photos.',
    },
    {
      field: 'Public Contact Numbers',
      value: '+91 98362 85550, +91 91470 52922, Helpline: 8697719727',
      status: 'verified',
      notes: 'Directly verified from official contact desk and Google Maps listing.',
    },
  ] as BusinessVerificationItem[],

  faqs: [
    {
      q: 'Where is Country Roads located and how far is it from Kolkata?',
      a: 'Country Roads is located at PO & Village Raghudevpur, Opposite Raghudevpur Gram Panchayat Office, Domjur - Bauria Road, Howrah - 711 322. It is just a 20–30 minutes drive from Vidyasagar Setu via the Kona Expressway and Mumbai Highway (NH-6), and approximately 40 minutes from Central Kolkata.',
    },
    {
      q: 'What room categories and tariffs are available?',
      a: 'Country Roads features 21 well-appointed rooms and suites: Deluxe Club Room - Lawn View (₹4,499 INR + GST), Deluxe Club Room - Pool View (₹5,499 INR + GST), and Executive Suite Rooms (₹7,499 INR + GST). All rates include room, breakfast, and complimentary WiFi.',
    },
    {
      q: 'What is included in the Day Outing package?',
      a: 'The Day Outing with Activities package is ₹3,100 + GST and includes breakfast, access to the swimming pool, zipline, target gun shooting, archery, and cycling across our 55-acre grounds.',
    },
    {
      q: 'What are the dining options at Country Roads?',
      a: 'Our dining options include "Five Spices - A Soul’s Delight" multi-cuisine restaurant (Indian, Bengali, Chinese, Thai, Continental), the contemporary "After Hours Pub" with pool table and cocktails, and the poolside "Blue Water Cafe" for evening snacks and frozen sorbets.',
    },
    {
      q: 'Can Country Roads host weddings and corporate conferences?',
      a: 'Yes! Country Roads offers 30,000 sq.ft. of landscaped celebration lawns for dream destination weddings and state-of-the-art European-style corporate conference meeting rooms with audio-visual equipment and residential banquet catering.',
    },
  ],
};

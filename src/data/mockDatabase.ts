import { Product, Category, Coupon, Review, Order, User, NewsletterSubscriber } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-smartphones',
    slug: 'smartphones',
    name: 'Smart Phones',
    iconName: 'Smartphone',
    itemCount: 79,
    image: '/public/images/smartphones/new_arrivals/iphone_18_pro_max_device.png',
    badge: 'High to Low',
    description: 'Latest flagship & performance phones: Apple, Samsung, OnePlus, iQOO, Vivo, OPPO, Redmi, POCO, realme, Motorola, LAVA & itel',
  },
  {
    id: 'cat-earbuds',
    slug: 'earbuds',
    name: 'Earbuds',
    iconName: 'Headphones',
    itemCount: 8,
    image: '/public/images/earbuds/earbuds_glossy_black.jpg',
    badge: '8 Models',
    description: 'True wireless stereo earbuds with Active Noise Cancellation and low-latency drivers',
  },
  {
    id: 'cat-smartwatches',
    slug: 'smartwatches',
    name: 'Smart Watches',
    iconName: 'Watch',
    itemCount: 18,
    image: '/public/images/smartwatches/noise_twist_round_black.png',
    badge: 'Deals from ₹1,199',
    description: 'AMOLED & HD Bluetooth calling smartwatches: Noise, Fire-Boltt, boAt & Zyntra with up to 94% off',
  },
  {
    id: 'cat-tablets',
    slug: 'tablets',
    name: 'Tablets',
    iconName: 'Tablet',
    itemCount: 14,
    image: '/public/images/tablets/new_arrivals/tablet_4_skyblue_bundle.png',
    badge: '14 Models · From ₹5,999',
    description: 'Flagship OLED 144Hz, Android 15 keyboard bundles & shockproof calling tablets',
  },
  {
    id: 'cat-neckband',
    slug: 'neckband',
    name: 'Neckbands',
    iconName: 'Activity',
    itemCount: 13,
    image: '/images/neckbands/uploads_nov/neckband_cyberwave_skyblue.webp',
    badge: '13 Models · From ₹799',
    description: 'Ultra-flexible sport wireless neckbands: boAt, Zebronics, UBON, Landmark, Promate & Zyntra with magnetic instant play and deep bass',
  },
  {
    id: 'cat-headphones',
    slug: 'headphones',
    name: 'Headphones',
    iconName: 'Headphones',
    itemCount: 15,
    image: '/images/headphones/uploads_nov/headphone_sennheiser_momentum4_black_case.jpg',
    badge: '15 Models · From ₹1,799',
    description: 'Studio over-ear ANC, audiophile planar magnetic & DJ monitoring headphones: Sennheiser, Apple AirPods Max, Edifier, Pioneer DJ & boAt with up to 60H battery',
  },
  {
    id: 'cat-leads',
    slug: 'leads',
    name: 'Leads',
    iconName: 'Cable',
    itemCount: 14,
    image: '/public/images/leads/orange_typec_earphones.jpg',
    badge: '14 Models',
    description: 'High-fidelity Type-C DAC, Lightning MFi, and 3.5mm gold-plated stereo audio leads & earphones',
  },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Zyntra Apex Noir Wireless ANC Headphones',
    slug: 'zyntra-apex-noir-wireless-anc-headphones',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 499900, // ₹4,999.00
    originalPricePaise: 899900, // ₹8,999.00
    discountPercentage: 44,
    rating: 4.9,
    reviewCount: 418,
    stock: 28,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-NOIR-01',
    description: 'Engineered for audiophiles. Features Hybrid Active Noise Cancellation up to 45dB, custom 40mm titanium diaphragm drivers, and 65 hours of continuous wireless playback with ultra-comfortable protein memory foam earcups.',
    features: [
      '45dB Hybrid Active Noise Cancellation with Transparency mode',
      'Custom 40mm Titanium Dynamic Drivers for Hi-Res Audio certification',
      '65-Hour Battery Life with 10-minute Quick Charge for 5 hours playback',
      'Ultra-soft memory foam protein leather earcups with aerospace aluminum frame',
      'Multi-point Bluetooth 5.4 pairing with low latency gaming mode'
    ],
    specs: {
      'Driver Size': '40mm Titanium Coated',
      'Frequency Response': '16Hz - 40,000Hz',
      'Bluetooth Version': '5.4 with LDAC & AAC',
      'Battery Capacity': '850 mAh (65h playtime)',
      'Weight': '248 grams',
      'Color': 'Carbon Matte Black',
      'Charging Port': 'USB Type-C Fast Charge'
    },
    images: [
      '/public/images/headphones/apex_noir_black.jpg',
      '/public/assets/aistudio/images__3__8769f813.jpg'
    ],
    warranty: '1 Year Manufacturer Replacement Warranty'
  },
  {
    id: 'prod-hp-2',
    name: 'Zyntra Studio Elite Wireless Foldable Headphones',
    slug: 'zyntra-studio-elite-wireless-headphones',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 349900, // ₹3,499.00
    originalPricePaise: 599900, // ₹5,999.00
    discountPercentage: 41,
    rating: 4.8,
    reviewCount: 285,
    stock: 42,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-ELITE-02',
    description: 'Studio-grade over-ear wireless headphones finished in deep midnight slate blue. Delivers dynamic punchy bass, 50-hour long-lasting battery, and foldable space-saving travel hinges.',
    features: [
      '40mm Titanium diaphragms for ultra-wide dynamic range and detailed highs',
      'Custom tuned acoustic cavity delivering punchy deep sub-bass',
      'Up to 50 hours playtime with USB-C quick charge (10 mins = 5 hours)',
      'Foldable ergonomic design with 90-degree swivel earcups',
      'Multi-point Bluetooth 5.3 connection with clear ENC dual microphone'
    ],
    specs: {
      'Driver Unit': '40mm Titanium Dynamic',
      'Frequency Response': '15Hz - 28,000Hz',
      'Battery Life': '50 Hours Playtime',
      'Charging': 'USB-C Fast Charge',
      'Weight': '235 grams',
      'Color': 'Midnight Slate Blue'
    },
    images: [
      '/public/images/headphones/studio_elite_navy.jpg',
      '/public/assets/aistudio/images__4__b280ae43.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-hp-3',
    name: 'Zyntra PureAcoustic Luxury Wireless ANC Headphones',
    slug: 'zyntra-pureacoustic-luxury-anc-headphones',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 599900, // ₹5,999.00
    originalPricePaise: 999900, // ₹9,999.00
    discountPercentage: 40,
    rating: 4.9,
    reviewCount: 312,
    stock: 20,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-ACOUSTIC-03',
    description: 'Crafted in Arctic White and Brushed Aluminum. Features active noise cancellation, studio acoustic chamber, intuitive touch gesture swipe controls, and plush memory foam cushions.',
    features: [
      'Precision-tuned 42mm composite neodymium drivers for crystal audio fidelity',
      'Adaptive Active Noise Cancellation with dual feedforward and feedback mics',
      'Touch gesture swipe controls for volume, track skip, and voice assistant',
      'Plush memory foam earcups with Arctic White leatherette and aluminum sliders',
      '60 hours total wireless listening time with quick charge'
    ],
    specs: {
      'Driver Size': '42mm Composite Neodymium',
      'Frequency Response': '12Hz - 38,000Hz',
      'Bluetooth Version': '5.4 with aptX HD & AAC',
      'Battery Life': '60 Hours Wireless Playback',
      'Weight': '250 grams',
      'Color': 'Arctic White & Brushed Silver'
    },
    images: [
      '/public/images/headphones/pure_acoustic_white.webp',
      '/public/assets/aistudio/download_c14068e3.webp'
    ],
    warranty: '2 Years Manufacturer Replacement Warranty'
  },
  {
    id: 'prod-hp-4',
    name: 'Zyntra Aura Dynamic RGB Wireless Headphones',
    slug: 'zyntra-aura-dynamic-rgb-wireless-headphones',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 299900, // ₹2,999.00
    originalPricePaise: 499900, // ₹4,999.00
    discountPercentage: 40,
    rating: 4.7,
    reviewCount: 198,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-AURA-04',
    description: 'Immersive audio with a futuristic neon RGB halo ring. Features ultra low-latency gaming mode, deep resonant bass boost, soft sweat-resistant ear cushions, and 40-hour endurance.',
    features: [
      'Dynamic Chroma RGB ambient lighting ring with customizable breathing modes',
      'Ultra-low 35ms low-latency game mode for lag-free audio-video sync',
      'Custom 40mm bass reflex drivers for explosive in-game sound effects',
      'Lightweight breathable mesh ear cushions designed for marathon listening',
      'Built-in HD microphone with environmental noise reduction'
    ],
    specs: {
      'Driver Size': '40mm Bass Reflex',
      'Frequency Response': '20Hz - 22,000Hz',
      'Lighting': 'Dynamic RGB Halo Ring',
      'Latency': '35ms Ultra Low Latency',
      'Battery Life': '40 Hours Playback',
      'Weight': '225 grams',
      'Color': 'Nebula Black with Neon Halo'
    },
    images: [
      '/public/images/headphones/aura_rgb_gaming.jpg',
      '/public/assets/aistudio/images__5__8cf9cb6c.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-hp-5',
    name: 'Zyntra Strike Viper Dual-Mode Gaming Headset',
    slug: 'zyntra-strike-viper-gaming-headset',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 249900, // ₹2,499.00
    originalPricePaise: 399900, // ₹3,999.00
    discountPercentage: 37,
    rating: 4.8,
    reviewCount: 176,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-VIPER-05',
    description: 'Pro-grade esports headset featuring dual wireless Bluetooth and 3.5mm low-loss AUX connectivity. Includes 50mm neodymium acoustic drivers and a broadcast-quality noise-canceling mic.',
    features: [
      'Dual-mode versatility: Bluetooth 5.3 for phone mobility + 3.5mm AUX for zero-delay console/PC gaming',
      '50mm High-density Neodymium drivers tuned for 360-degree spatial positioning',
      'Broadcast-grade noise-cancelling microphone with flexible arm and mute toggle',
      'Reinforced steel slider headband with cushioned earcups in Electric Cyan accents',
      'Compatible with PC, PS5, Xbox Series X, Nintendo Switch, and smartphones'
    ],
    specs: {
      'Driver Size': '50mm High-Density Neodymium',
      'Frequency Response': '15Hz - 25,000Hz',
      'Connectivity': 'Bluetooth 5.3 + 3.5mm Gold-Plated Audio Cable',
      'Microphone': 'Detachable Omnidirectional Noise-Cancelling',
      'Weight': '260 grams',
      'Color': 'Stealth Black & Electric Cyan'
    },
    images: [
      '/public/images/headphones/strike_viper_cyan.jpg',
      '/public/assets/aistudio/images__6__2623105a.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  // =========================================================================
  // USER HEADPHONES COLLECTION (11 AUTHENTIC IMAGES)
  // Brands: Sennheiser, Apple, Edifier, Pioneer DJ, boAt, Portronics, Zyntra
  // =========================================================================
  {
    id: 'prod-hp-sennheiser-momentum4-black',
    name: 'Sennheiser Momentum 4 Wireless ANC Headphones (Graphite Black with Hard Travel Case)',
    slug: 'sennheiser-momentum-4-wireless-black-case',
    brand: 'Sennheiser',
    category: 'headphones',
    pricePaise: 2499000, // ₹24,990.00
    originalPricePaise: 3499000, // ₹34,990.00
    discountPercentage: 29,
    rating: 4.9,
    reviewCount: 864,
    stock: 22,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SEN-MOM4-BLK-01',
    description: 'Sennheiser Momentum 4 Wireless headphones in Graphite Black with custom travel case. Powered by 42mm audiophile-inspired transducers, advanced Adaptive Active Noise Cancellation, and an unprecedented 60-hour battery life with fast charge.',
    features: [
      'Sennheiser Signature Sound powered by 42mm audiophile-grade dynamic transducer system',
      'Adaptive Hybrid ANC and Transparency Mode with personalized sound check',
      'Unmatched 60-Hour battery life on a single charge with fast charging (10 mins = 6 hours)',
      'Includes premium woven fabric hard zipper carry case with airline adapter & 3.5mm audio cable',
      'Smart Pause & Auto On/Off sensor when taking headphones on or off'
    ],
    specs: {
      'Transducer': '42mm Audiophile Dynamic',
      'Frequency Range': '6Hz - 22,000Hz',
      'Battery Life': '60 Hours with ANC On',
      'Codecs': 'aptX Adaptive, AAC, SBC',
      'Case': 'Hard Fabric Travel Case Included',
      'Weight': '293g',
      'Color': 'Graphite Black with Metallic Gimbal'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_sennheiser_momentum4_black_case.jpg',
      '/images/headphones/uploads_nov/headphone_sennheiser_momentum4_case_open.jpg',
      '/public/assets/aistudio/hh78_04aab7ae.jpg',
      '/public/assets/aistudio/hh7_38c4a139.jpg'
    ],
    warranty: '2 Years Sennheiser Official India Warranty'
  },
  {
    id: 'prod-hp-sennheiser-momentum4-copper',
    name: 'Sennheiser Momentum 4 Wireless Special Edition (Copper & Desert Sand Leatherette)',
    slug: 'sennheiser-momentum-4-wireless-special-copper',
    brand: 'Sennheiser',
    category: 'headphones',
    pricePaise: 2699000, // ₹26,990.00
    originalPricePaise: 3699000, // ₹36,990.00
    discountPercentage: 27,
    rating: 4.9,
    reviewCount: 512,
    stock: 16,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SEN-MOM4-COP-02',
    description: 'Sennheiser Momentum 4 Wireless Special Edition crafted with luxurious warm copper brushed metal hinges, tactile woven earth-tone fabric headband, and 60-hour battery reserve.',
    features: [
      'Exclusive Special Edition copper brushed metal hinges with tactile textured earth fabric headband',
      'Audiophile 42mm soundstage with Sennheiser Smart Control parametric EQ',
      'Industry-leading 60-Hour battery reserve with quick charge capability',
      '4-microphone crystal clear voice beamforming array for noise-free business calls',
      'Multipoint Bluetooth 5.2 pairing allows seamless switching between laptop and phone'
    ],
    specs: {
      'Edition': 'Special Copper Edition',
      'Battery Reserve': '60 Hours',
      'Drivers': '42mm Angled Dynamic',
      'Headband': 'Premium Woven Earth Fabric',
      'Weight': '293g',
      'Color': 'Desert Copper & Mocha'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_sennheiser_momentum4_copper_edition.jpeg',
      '/public/assets/aistudio/hh8_becb2ece.jpeg'
    ],
    warranty: '2 Years Sennheiser Official India Warranty'
  },
  {
    id: 'prod-hp-sennheiser-momentum4-noir-glow',
    name: 'Sennheiser Momentum 4 Wireless Studio Master Edition (Obsidian Black)',
    slug: 'sennheiser-momentum-4-studio-master-obsidian',
    brand: 'Sennheiser',
    category: 'headphones',
    pricePaise: 2599000, // ₹25,990.00
    originalPricePaise: 3599000, // ₹35,990.00
    discountPercentage: 28,
    rating: 4.9,
    reviewCount: 389,
    stock: 18,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SEN-MOM4-OBS-03',
    description: 'Deep obsidian studio master edition of Sennheiser Momentum 4. Features ultra-low distortion across the audible spectrum, gesture touch navigation, and hybrid active noise cancelation.',
    features: [
      'Deep obsidian matte acoustic finish engineered for studio mixing and immersive high-res playback',
      'Hybrid Adaptive ANC with automatic background noise adjustment',
      '60 Hours continuous battery reserve with USB-C lossless audio input',
      'Ultra-low distortion (<0.3% THD) across entire frequency curve',
      'Intuitive touch earcup controls for gestures, volume and track skipping'
    ],
    specs: {
      'Acoustic System': 'Closed-back Over-ear',
      'Battery': '60 Hours Playtime',
      'Drivers': '42mm Reference Grade',
      'Microphones': '4 Digital Beamforming Mics',
      'Color': 'Obsidian Studio Black'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_sennheiser_momentum4_noir_glow.jpg',
      '/public/assets/aistudio/hh5_e6e6755a.jpg'
    ],
    warranty: '2 Years Sennheiser Official India Warranty'
  },
  {
    id: 'prod-hp-apple-airpods-max-skyblue',
    name: 'Apple AirPods Max Wireless ANC Over-Ear Headphones (Sky Blue · Spatial Audio)',
    slug: 'apple-airpods-max-sky-blue',
    brand: 'Apple',
    category: 'headphones',
    pricePaise: 5490000, // ₹54,900.00
    originalPricePaise: 5990000, // ₹59,900.00
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 1240,
    stock: 15,
    isFeatured: true,
    isNewArrival: true,
    sku: 'APL-APM-SKY-01',
    description: 'Apple AirPods Max in stunning Sky Blue. Features Apple-designed 40mm dynamic drivers, industry-leading Active Noise Cancellation with Transparency mode, and computational Personalized Spatial Audio with dynamic head tracking.',
    features: [
      'Apple-designed 40mm dynamic driver provides high-fidelity audio with ultra-low distortion',
      'Pro-level Active Noise Cancellation and Transparency mode for spatial awareness',
      'Personalized Spatial Audio with dynamic head tracking for theater-like sound',
      'Knit-mesh canopy headband and acoustically engineered memory foam ear cushions',
      'Digital Crown controls volume, skip tracks, answer phone calls, and activate Siri'
    ],
    specs: {
      'Chip': 'Apple H1 Headphone Chip (each ear cup)',
      'Audio Tech': 'Personalized Spatial Audio + Adaptive EQ',
      'Battery Life': '20 Hours with ANC & Spatial Audio',
      'Earcups': 'Anodized Sky Blue Aluminum',
      'Weight': '384.8 grams',
      'Connectivity': 'Bluetooth 5.0'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_apple_airpods_max_skyblue.jpg',
      '/public/assets/aistudio/hh4_7c00fa82.jpg'
    ],
    warranty: '1 Year Apple India Warranty + Smart Case'
  },
  {
    id: 'prod-hp-audiophile-silver-planar',
    name: 'Zyntra Reference Master Planar Magnetic Open-Back Studio Headphones (Brushed Silver)',
    slug: 'zyntra-reference-master-planar-magnetic-silver',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 1499900, // ₹14,999.00
    originalPricePaise: 2499900, // ₹24,999.00
    discountPercentage: 40,
    rating: 4.9,
    reviewCount: 215,
    stock: 14,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-PLANAR-01',
    description: 'High-end open-back studio reference headphones with planar magnetic drivers. Crafted with CNC milled brushed aluminum gimbals and a real suspension leather headband for acoustic mastering and critical listening.',
    features: [
      'Open-back audiophile design delivering massive 3D holographic soundstage and pin-point instrument separation',
      'Ultra-thin nanometer planar magnetic diaphragm for instant transient response',
      'Solid brushed CNC aluminum gimbals with real suspension leather comfort headband',
      'Dual detachable 3.5mm oxygen-free copper cables with 6.35mm gold studio adapter',
      'Velour and breathable perforated memory foam acoustic ear pads'
    ],
    specs: {
      'Driver': '70mm Planar Magnetic Diaphragm',
      'Acoustic Design': 'Open-Back Audiophile',
      'Frequency Response': '8Hz - 45,000Hz',
      'Impedance': '32 Ohms (Easy to Drive)',
      'Cables': 'Detachable Braided OFC Cable + 6.35mm Adapter',
      'Color': 'Aero Silver & Charcoal'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_audiophile_silver_planar.jpg',
      '/public/assets/aistudio/hh3_d949114a.jpg'
    ],
    warranty: '2 Years Comprehensive Replacement Warranty'
  },
  {
    id: 'prod-hp-studio-bronze-audiophile',
    name: 'Zyntra Lumina Bronze Hi-Res Wireless Audiophile Headphones (Warm Rose Gold Accents)',
    slug: 'zyntra-lumina-bronze-hi-res-wireless-headphones',
    brand: 'Zyntra Audio',
    category: 'headphones',
    pricePaise: 649900, // ₹6,499.00
    originalPricePaise: 1199900, // ₹11,999.00
    discountPercentage: 46,
    rating: 4.8,
    reviewCount: 340,
    stock: 25,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-HP-BRONZE-01',
    description: 'Lumina Bronze luxury over-ear headphones featuring warm rose gold spun metal bezels, bio-cellulose 40mm transducers, 55-hour battery life, and multi-point wireless Bluetooth 5.3.',
    features: [
      'Jewelry-grade warm bronze metallic accents on a dark satin titanium acoustic shell',
      'High-resolution 40mm bio-cellulose dynamic drivers for liquid mids and deep sub-bass',
      '55-Hour wireless playback with low-latency Bluetooth 5.3 and 3.5mm analog bypass',
      'Memory foam earcups with 90-degree swivel for neck rest and flat storage',
      'Multi-point connection pairs simultaneously with two devices'
    ],
    specs: {
      'Drivers': '40mm Bio-Cellulose Dynamic',
      'Battery Life': '55 Hours Playback',
      'Finish': 'Warm Bronze Ring & Matte Satin',
      'Bluetooth': 'v5.3 with AAC / SBC',
      'Weight': '245g',
      'Color': 'Midnight Bronze'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_studio_bronze_audiophile.jpg',
      '/public/assets/aistudio/hh6_9bc68874.jpg'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-hp-edifier-w820nb-pearl-white',
    name: 'Edifier W820NB Plus Hi-Res Wireless ANC Headphones (Pearl Off-White)',
    slug: 'edifier-w820nb-plus-wireless-anc-pearl-white',
    brand: 'Edifier',
    category: 'headphones',
    pricePaise: 499900, // ₹4,999.00
    originalPricePaise: 799000, // ₹7,990.00
    discountPercentage: 37,
    rating: 4.8,
    reviewCount: 620,
    stock: 30,
    isFeatured: true,
    isNewArrival: true,
    sku: 'EDF-W820NB-WHT-01',
    description: 'Edifier W820NB Plus in elegant Pearl Off-White. Certified for Hi-Res Audio Wireless with LDAC 990kbps codec support, -43dB hybrid active noise cancellation, and up to 49 hours playtime.',
    features: [
      'Hi-Res Audio & Hi-Res Wireless certified with high-bandwidth LDAC codec support (990kbps)',
      'Active Hybrid Noise Cancellation up to -43dB with ambient sound transparency mode',
      '0.08s ultra-low latency gaming mode for immersive mobile & console gaming',
      'Up to 49 hours playtime with ANC off and 33 hours with ANC enabled',
      'Lightweight 220g cloud-soft ergonomic ear cushions for zero ear fatigue'
    ],
    specs: {
      'Certification': 'Hi-Res Audio & Hi-Res Wireless (LDAC)',
      'Noise Reduction': '-43dB Hybrid ANC',
      'Battery': '49 Hours Playtime',
      'Latency': '80ms Low Latency Game Mode',
      'Weight': '220 grams',
      'Color': 'Pearl Off-White'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_edifier_w820nb_pearl_white.jpg',
      '/public/assets/aistudio/hh2_cd65c701.jpg'
    ],
    warranty: '1 Year Edifier India Warranty'
  },
  {
    id: 'prod-hp-portronics-muffs-white',
    name: 'Portronics Muffs Pro Wireless Over-Ear Headphones (Crisp White & Velour Cushions)',
    slug: 'portronics-muffs-pro-wireless-headphones-white',
    brand: 'Portronics',
    category: 'headphones',
    pricePaise: 179900, // ₹1,799.00
    originalPricePaise: 399900, // ₹3,999.00
    discountPercentage: 55,
    rating: 4.7,
    reviewCount: 480,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'POR-MUFFS-WHT-01',
    description: 'Portronics Muffs Pro wireless headphones with ultra-soft breathable grey velour ear cushions and crisp white folding frame. Delivers 35 hours of battery life and punchy bass sound.',
    features: [
      'Plush velour velvet ear cushions designed for all-day comfort without ear sweat',
      '40mm dynamic bass drivers deliver punchy beat and crisp clear vocals',
      '35 Hours continuous playtime on a single Type-C charge',
      'Foldable collapsible design easily tucks into bags and backpacks',
      'Built-in microphone with clear voice pickup for calls and online meetings'
    ],
    specs: {
      'Drivers': '40mm High-Bass Neodymium',
      'Playtime': '35 Hours Playback',
      'Earpads': 'Breathable Soft Grey Velour',
      'Bluetooth': 'v5.3 + 3.5mm AUX',
      'Foldable': '180-degree Foldable Hinges',
      'Color': 'Crisp White & Slate Velour'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_portronics_muffs_white_velour.jpg',
      '/public/assets/aistudio/hh1_10a25fb7.jpg'
    ],
    warranty: '1 Year Portronics India Warranty'
  },
  {
    id: 'prod-hp-boat-rockerz-cobalt-blue',
    name: 'boAt Rockerz 550 Over-Ear Wireless Headphones (Cobalt Electric Blue · 50mm Drivers)',
    slug: 'boat-rockerz-550-over-ear-cobalt-blue',
    brand: 'boAt',
    category: 'headphones',
    pricePaise: 199900, // ₹1,999.00
    originalPricePaise: 499000, // ₹4,990.00
    discountPercentage: 60,
    rating: 4.7,
    reviewCount: 920,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'BOAT-RK550-BLU-01',
    description: 'boAt Rockerz 550 in vibrant Cobalt Electric Blue. Engineered with massive 50mm dynamic drivers for signature thumping bass, 20 hours playback, and physical ergonomic button controls on the earcup.',
    features: [
      'Massive 50mm dynamic drivers provide boAt Signature Sound with punchy thumping bass',
      'Physical tactile on-ear controls for volume, track skip, and instant voice assistant',
      'Up to 20 Hours uninterrupted playback with quick recharge',
      'Ergonomically shaped over-ear cushions provide passive noise isolation',
      'Dual connectivity via Bluetooth 5.0 and included 3.5mm AUX audio lead'
    ],
    specs: {
      'Driver Size': '50mm Dynamic Bass Drivers',
      'Sound Signature': 'boAt Signature Extra Bass',
      'Battery Life': '20 Hours Playtime',
      'Connectivity': 'Bluetooth 5.0 & 3.5mm AUX',
      'Weight': '245 grams',
      'Color': 'Cobalt Electric Blue'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_boat_rockerz_cobalt_blue.webp',
      '/public/assets/aistudio/hh_7b549a69.webp'
    ],
    warranty: '1 Year boAt Official Warranty'
  },
  {
    id: 'prod-hp-pioneer-dj-pro-swivel',
    name: 'Pioneer DJ HDJ-X5 Professional Over-Ear DJ Monitoring Headphones (Silver Cast Metal)',
    slug: 'pioneer-dj-hdj-x5-pro-swivel-silver',
    brand: 'Pioneer DJ',
    category: 'headphones',
    pricePaise: 949900, // ₹9,499.00
    originalPricePaise: 1499000, // ₹14,990.00
    discountPercentage: 37,
    rating: 4.9,
    reviewCount: 380,
    stock: 16,
    isFeatured: true,
    isNewArrival: true,
    sku: 'PIO-HDJX5-SLV-01',
    description: 'Pioneer DJ HDJ-X5 professional DJ monitoring headphones. Rigorously tested to US Military Standard shock resistance, featuring 40mm drivers capable of handling 2000mW input power without distortion, and 90-degree swivel arm housings.',
    features: [
      'Military-grade durability (US MIL-STD-810G shock tested) built for touring DJs and club booths',
      'Custom 40mm drivers deliver distortion-free monitoring even at extreme club volumes',
      'Flexible swivel headband housing allows comfortable one-ear and shoulder monitoring',
      'Bass reflex chamber in the upper housing provides excellent bass response and sound isolation',
      'Includes detachable coiled studio cable and 6.3mm threaded gold screw adapter'
    ],
    specs: {
      'Acoustic Type': 'Closed Dynamic Monitoring',
      'Driver Units': '40mm Dome Type',
      'Max Input Power': '2000 mW',
      'Frequency Range': '5Hz - 30,000Hz',
      'Swivel Mechanism': '90-Degree Pro Swivel & Fold',
      'Weight': '269g',
      'Color': 'Cast Silver Aluminum & Black'
    },
    images: [
      '/images/headphones/uploads_nov/headphone_pioneer_dj_pro_swivel.jpg',
      '/public/assets/aistudio/hh89_7807e617.jpg'
    ],
    warranty: '2 Years Pioneer DJ India Warranty'
  },
  // =========================================================================
  // SMARTWATCHES SECTION: AUTHENTIC DEALS COLLECTION (USER IMAGES)
  // Brands: Fire-Boltt, Noise, boAt
  // =========================================================================
  {
    id: 'prod-sw-fb-ninja-plus',
    name: 'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch (Active Jet Black)',
    slug: 'fire-boltt-ninja-call-pro-plus-black',
    brand: 'Fire-Boltt',
    category: 'smartwatches',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 1999900, // ₹19,999.00
    discountPercentage: 94,
    rating: 4.8,
    reviewCount: 1420,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'FB-NINJA-PLUS-BLK',
    description: 'Bestselling Bluetooth calling smartwatch with massive 1.83" HD display, AI voice assistant, 100+ sports modes, 24/7 heart rate monitor, SpO2 blood oxygen tracking, and in-built games.',
    features: [
      '1.83" HD High-Resolution display with 280 nits brightness and 2.5D curved glass',
      'Clear Bluetooth calling with in-built speaker, high-sensitivity microphone & dial pad',
      'AI Voice Assistant compatible with Siri and Google Assistant',
      '100+ Sports Modes with real-time calorie burn and distance telemetry',
      'Health Tracking: SpO2, continuous 24/7 heart rate, sleep monitoring, and breath training',
      'Up to 8 days battery backup on typical usage and 20 days standby'
    ],
    specs: {
      'Display': '1.83" HD TFT 240x284 px',
      'Bluetooth Calling': 'Supported with Quick Dial & Recent Calls',
      'Sports Tracking': '100+ Active Sports Modes',
      'Battery Life': '8 Days Typical / 5 Days Heavy Calling',
      'Sensors': 'Optical Heart Rate, SpO2 Blood Oxygen, Sleep Telemetry',
      'Water Resistance': 'IP67 Dust & Splash Resistant',
      'Color': 'Active Jet Black'
    },
    images: [
      '/public/images/smartwatches/fireboltt_ninja_call_pro_plus.png',
      '/public/images/smartwatches/deals_smartwatches_banner_1.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155046_10c43fe7.png'
    ],
    warranty: '1 Year Fire-Boltt Brand Warranty'
  },
  {
    id: 'prod-sw-noise-twist-black',
    name: 'Noise Twist Round Dial Smart Watch (Classic Midnight Black)',
    slug: 'noise-twist-round-dial-black',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 499900, // ₹4,999.00
    discountPercentage: 76,
    rating: 4.8,
    reviewCount: 1890,
    stock: 70,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-TWIST-RND-BLK',
    description: 'Iconic round dial smartwatch with Tru Sync advanced Bluetooth calling, 1.38" TFT vibrant display, 100+ sports modes, Noise Health Suite with SpO2 and stress tracking, and up to 7 days battery.',
    features: [
      '1.38" Round TFT vibrant display with 500 nits brightness and metallic circular finish',
      'Tru Sync powered Bluetooth calling with stable single-chip pairing and zero latency',
      'Noise Health Suite: 24/7 Heart Rate, SpO2 blood oxygen, sleep stage tracking, and breath guide',
      '100+ Sports modes with automated workout recognition',
      'Over 100 cloud-based customizable round watch faces',
      'IP68 certified water and sweat resistance'
    ],
    specs: {
      'Display': '1.38" TFT Round Dial Display (500 nits)',
      'Calling': 'Tru Sync Bluetooth 5.3 Calling',
      'Battery': '7 Days Typical / 2 Days Calling',
      'Sensors': 'PPG Optical Heart Rate, SpO2 Sensor',
      'Strap Material': 'Soft Silicone 22mm Quick Release',
      'Color': 'Classic Midnight Black'
    },
    images: [
      '/public/images/smartwatches/noise_twist_round_black.png',
      '/public/images/smartwatches/deals_smartwatches_banner_1.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155046_10c43fe7.png'
    ],
    warranty: '1 Year Noise India Warranty'
  },
  {
    id: 'prod-sw-noise-pulse2-black',
    name: 'Noise Pulse 2 Max 1.85" Display Smart Watch (Jet Black Silicone)',
    slug: 'noise-pulse-2-max-black-silicone',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 599900, // ₹5,999.00
    discountPercentage: 80,
    rating: 4.9,
    reviewCount: 2340,
    stock: 80,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-PULSE2M-BLK',
    description: 'Massive 1.85" LCD display with ultra-bright 550 nits outdoor visibility. Tru Sync Bluetooth calling with quick text replies, Smart DND, 10-day long-lasting battery, and 100+ sports tracking.',
    features: [
      '1.85" LCD screen with class-leading 550 nits brightness for crystal clear outdoor viewing',
      'Tru Sync technology ensures quick pairing, stable calls, and lower power consumption',
      'Smart DND mode mutes notifications automatically during sleep or meetings',
      'Noise Health Suite: 24/7 Heart rate, SpO2, stress measurement, and female cycle tracker',
      '10 days battery life on a single charge with fast magnetic dock charging'
    ],
    specs: {
      'Display': '1.85" TFT LCD 550 nits High Brightness',
      'Battery Life': 'Up to 10 Days Standard / 3 Days Calling',
      'Calling': 'Bluetooth Calling with Built-in Mic & Speaker',
      'Sports Tracking': '100+ Cloud Sports Modes',
      'Water Resistance': 'IP68 Certified',
      'Color': 'Jet Black Silicone'
    },
    images: [
      '/public/images/smartwatches/noise_pulse_2_max_black.png',
      '/public/images/smartwatches/deals_smartwatches_banner_1.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155046_10c43fe7.png'
    ],
    warranty: '1 Year Noise Comprehensive Warranty'
  },
  {
    id: 'prod-sw-noise-twist-gold-mesh',
    name: 'Noise Twist Go Round Dial Smart Watch (Luxury Champagne Gold Mesh Strap)',
    slug: 'noise-twist-go-gold-mesh-strap',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 169900, // ₹1,699.00
    originalPricePaise: 499900, // ₹4,999.00
    discountPercentage: 66,
    rating: 4.9,
    reviewCount: 960,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-TWIST-GO-GLD-MESH',
    description: 'Elegance meets smart convenience. Circular champagne gold metallic casing paired with a magnetic Milanese gold mesh strap. Features Bluetooth calling, voice assistant, and comprehensive health telemetry.',
    features: [
      '1.39" HD Round Display with rich contrast and sharp pixel density',
      'Exquisite Milanese magnetic gold mesh strap that fits wrists of all sizes seamlessly',
      'Single-chip Bluetooth calling with dial pad, call logs, and favorite contacts sync',
      'Health tracking with real-time heart rate, SpO2, sleep tracking, and sedentary alerts',
      '100+ watch faces and 100+ sports tracking modes'
    ],
    specs: {
      'Display': '1.39" HD Round Display',
      'Strap': 'Magnetic Milanese Gold Mesh Metal Band',
      'Case': 'Electroplated Champagne Gold Alloy',
      'Battery': '7 Days Typical Usage',
      'Protection': 'IP68 Water Resistance',
      'Color': 'Champagne Gold'
    },
    images: [
      '/public/images/smartwatches/noise_twist_go_gold_mesh.png',
      '/public/images/smartwatches/deals_smartwatches_banner_1.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155046_10c43fe7.png'
    ],
    warranty: '1 Year Noise India Brand Warranty'
  },
  {
    id: 'prod-sw-boat-wave-sigma3',
    name: 'boAt Wave Sigma 3 Smart Watch with Turn-by-Turn Navigation',
    slug: 'boat-wave-sigma-3-turn-by-turn-nav',
    brand: 'boAt',
    category: 'smartwatches',
    pricePaise: 149900, // ₹1,499.00
    originalPricePaise: 899900, // ₹8,999.00
    discountPercentage: 83,
    rating: 4.8,
    reviewCount: 1650,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'BOAT-SIGMA3-NAV-BLK',
    description: "Navigate hands-free with Turn-by-Turn MapmyIndia directions right on your wrist! Equipped with a large 2.01\" HD display, Bluetooth calling with dial pad, QR code tray to save boarding passes and payment codes, and 700+ active modes.",
    features: [
      'Turn-by-Turn Navigation powered by MapmyIndia delivers live road directions on screen',
      '2.01" HD Vivid Display with 550 nits peak brightness and thin borders',
      'Advanced Bluetooth Calling with noise cancellation for crystal clear voice calls',
      'QR Code Tray lets you store payment QR codes and passes directly on the watch',
      'Crest App Health Ecosystem with gamified fitness badges and wellness buddies',
      'Emergency SOS feature and in-built games'
    ],
    specs: {
      'Display': '2.01" HD Display (550 nits)',
      'Navigation': 'Turn-by-Turn MapmyIndia GPS Directions',
      'Calling': 'Bluetooth Calling with Mic, Speaker & Dialpad',
      'Special Features': 'QR Tray, Crest Health, Energy Meter',
      'Battery': 'Up to 7 Days Battery Life',
      'Color': 'Active Black'
    },
    images: [
      '/public/images/smartwatches/boat_wave_sigma_3_nav.png',
      '/public/images/smartwatches/deals_smartwatches_banner_1.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155046_10c43fe7.png'
    ],
    warranty: '1 Year boAt India Manufacturer Warranty'
  },
  {
    id: 'prod-sw-noise-twist-pink',
    name: 'Noise Twist Go Round Dial Smart Watch (Rose Gold Bezel · Blush Pink)',
    slug: 'noise-twist-go-rose-gold-pink',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 159900, // ₹1,599.00
    originalPricePaise: 499900, // ₹4,999.00
    discountPercentage: 68,
    rating: 4.9,
    reviewCount: 1120,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-TWIST-GO-ROSE-PNK',
    description: 'Chic and feminine design featuring a gleaming rose gold circular bezel and skin-friendly blush pink silicone strap. Equipped with Tru Sync Bluetooth calling, female cycle tracker, sleep telemetry, and 100+ sports modes.',
    features: [
      '1.39" Round HD display framed in polished champagne rose gold metal',
      'Comfort-molded blush pink silicone strap designed for all-day elegance',
      'Bluetooth calling with quick dial pad and contact synchronization',
      'Female Health Suite: Menstrual cycle tracking and prediction alerts',
      'Heart rate monitor, blood oxygen SpO2, and guided relaxation breathing'
    ],
    specs: {
      'Display': '1.39" Round HD Display',
      'Finish': 'Polished Rose Gold Metallic Bezel',
      'Strap': 'Blush Pink Soft Touch Silicone',
      'Calling': 'Bluetooth Calling with Built-in Speaker & Mic',
      'Battery': '7 Days Typical / 2 Days Calling',
      'Color': 'Rose Gold & Blush Pink'
    },
    images: [
      '/public/images/smartwatches/noise_twist_go_rose_gold_pink.png',
      '/public/images/smartwatches/deals_smartwatches_banner_1.png',
      '/public/images/smartwatches/deals_smartwatches_banner_2.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155046_10c43fe7.png'
    ],
    warranty: '1 Year Noise Brand Warranty'
  },
  {
    id: 'prod-sw-noise-twist-chain-black',
    name: 'Noise Twist Go Round Dial Smart Watch (Metallic Black Stainless Steel Link Chain)',
    slug: 'noise-twist-go-metallic-black-chain',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 179900, // ₹1,799.00
    originalPricePaise: 599900, // ₹5,999.00
    discountPercentage: 70,
    rating: 4.9,
    reviewCount: 880,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-TWIST-GO-STEEL-BLK',
    description: 'Commanding luxury with solid stainless steel link chain strap in matte metallic black. Features 1.39" round HD display, Bluetooth calling with dial pad, 100+ sports modes, and rugged metal unibody.',
    features: [
      'Premium solid stainless steel link chain bracelet with butterfly safety clasp',
      '1.39" Round HD display with metallic bevelled bezel and scratch-resistant glass',
      'Tru Sync Bluetooth calling for uninterrupted voice conversations on the go',
      'Full suite biometric telemetry: 24/7 Heart rate, SpO2, and sleep quality monitor',
      'Water and sweat resistant with IP68 rating'
    ],
    specs: {
      'Display': '1.39" HD Round Color Display',
      'Strap': 'Solid Stainless Steel Link Chain Bracelet',
      'Casing': 'All-Metal Rugged Unibody',
      'Calling': 'Bluetooth Calling with Dialpad & Logs',
      'Battery': '7 Days Battery Backup',
      'Color': 'Metallic Black Chain'
    },
    images: [
      '/public/images/smartwatches/noise_twist_go_metallic_black.png',
      '/public/images/smartwatches/deals_smartwatches_banner_2.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155106_d6999388.png'
    ],
    warranty: '1 Year Noise Comprehensive Warranty'
  },
  {
    id: 'prod-sw-noise-pulse2-plum',
    name: 'Noise Pulse 2 Max 1.85" Display Smart Watch (Deep Wine / Plum Purple)',
    slug: 'noise-pulse-2-max-plum-wine',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 599900, // ₹5,999.00
    discountPercentage: 80,
    rating: 4.8,
    reviewCount: 1240,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-PULSE2M-PLUM',
    description: 'Distinguished deep plum wine silicone band with 1.85" high-brightness screen (550 nits). Tru Sync Bluetooth calling, 10-day battery life, and complete health telemetry for modern lifestyles.',
    features: [
      '1.85" TFT LCD with 550 nits high brightness for effortless sunlight readability',
      'Striking Deep Plum Wine silicone band offering premium wrist ergonomics',
      'Tru Sync technology ensures zero call dropouts and quick auto-pairing',
      'Smart DND mode and camera remote shutter control',
      'Over 150 downloadable cloud watch faces'
    ],
    specs: {
      'Display': '1.85" TFT LCD 550 nits',
      'Strap': 'Deep Plum / Wine Silicone Band',
      'Calling': 'Bluetooth Calling with Speaker & Mic',
      'Battery': '10 Days Typical Usage',
      'Protection': 'IP68 Certified',
      'Color': 'Deep Wine Plum'
    },
    images: [
      '/public/images/smartwatches/noise_pulse_2_max_plum_wine.png',
      '/public/images/smartwatches/deals_smartwatches_banner_2.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155106_d6999388.png'
    ],
    warranty: '1 Year Noise India Brand Warranty'
  },
  {
    id: 'prod-sw-fb-ninja-max-green',
    name: 'Fire-Boltt Ninja Call Pro Max Smart Watch (Forest Emerald UI · Matte Black)',
    slug: 'fire-boltt-ninja-call-pro-max-green',
    brand: 'Fire-Boltt',
    category: 'smartwatches',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 200000, // ₹2,000.00
    discountPercentage: 40,
    rating: 4.7,
    reviewCount: 910,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'FB-NINJA-MAX-GRN',
    description: 'Minimalist forest emerald green watch face with tactical matte black case. Huge 2.01" display, Bluetooth calling with rotating functional crown, built-in games, and 120+ sports tracking modes.',
    features: [
      '2.01" Large HD Display with vivid colour depth and responsive touch interface',
      'Tactical rotating functional crown for intuitive watch face and menu scrolling',
      'Bluetooth calling with noise-reducing microphone and high-fidelity speaker',
      'Forest Emerald digital clock face with minimalist dual-ring complication',
      'Built-in casual games: 2048, Flappy, and dice roller',
      'IP67 water and sweat protection'
    ],
    specs: {
      'Display': '2.01" HD Full Touch Display',
      'Crown': 'Functional Rotating Digital Crown',
      'Calling': 'Bluetooth Calling with Contact Book & Dialpad',
      'Sports': '120+ Active Exercise Modes',
      'Battery': '7 Days Typical Standby',
      'Color': 'Forest Emerald / Matte Black'
    },
    images: [
      '/public/images/smartwatches/fireboltt_ninja_call_pro_max_green.png',
      '/public/images/smartwatches/deals_smartwatches_banner_2.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155106_d6999388.png'
    ],
    warranty: '1 Year Fire-Boltt Brand Warranty'
  },
  {
    id: 'prod-sw-noise-pulse2-peach',
    name: 'Noise Pulse 2 Max 1.85" Display Smart Watch (Rose Gold Case · Warm Peach)',
    slug: 'noise-pulse-2-max-rose-gold-peach',
    brand: 'Noise',
    category: 'smartwatches',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 599900, // ₹5,999.00
    discountPercentage: 80,
    rating: 4.9,
    reviewCount: 1530,
    stock: 60,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NOISE-PULSE2M-PEACH',
    description: 'Luxurious rose gold electroplated frame complemented by a warm peach silicone strap. 1.85" ultra-bright display with 550 nits, Tru Sync Bluetooth calling, and up to 10 days battery endurance.',
    features: [
      '1.85" LCD with 550 nits peak brightness for clear visibility under harsh sunlight',
      'Lustrous rose gold metallic bezel with ultra-soft warm peach silicone band',
      'Tru Sync Bluetooth calling with crystal-clear voice clarity and contact sync',
      'Noise Health Suite: 24/7 Heart rate, blood oxygen SpO2, and sleep tracking',
      '10 days battery life on a single charge with smart battery health engine'
    ],
    specs: {
      'Display': '1.85" TFT LCD 550 nits High Brightness',
      'Case Finish': 'Rose Gold Electroplated Alloy',
      'Strap': 'Warm Peach Skin-Friendly Silicone',
      'Calling': 'Bluetooth Calling with Dial Pad & Mute',
      'Battery': 'Up to 10 Days Battery Life',
      'Color': 'Rose Gold & Warm Peach'
    },
    images: [
      '/public/images/smartwatches/noise_pulse_2_max_peach_rosegold.png',
      '/public/images/smartwatches/deals_smartwatches_banner_2.png',
      '/public/assets/aistudio/Screenshot_2026-10-29_155106_d6999388.png'
    ],
    warranty: '1 Year Noise Comprehensive Warranty'
  },
  {
    id: 'prod-2',
    name: 'Zyntra Ultra Waterproof Smartwatch',
    slug: 'zyntra-ultra-waterproof-smartwatch',
    brand: 'Zyntra Tech',
    category: 'smartwatches',
    pricePaise: 499900, // ₹4,999.00
    originalPricePaise: 899900, // ₹8,999.00
    discountPercentage: 44,
    rating: 4.7,
    reviewCount: 512,
    stock: 35,
    isFeatured: true,
    isNewArrival: false,
    sku: 'ZYN-SW-TITAN-02',
    description: 'Military-grade titanium alloy chassis with 2.04" Super AMOLED Always-On Display. Continuous 24/7 heart rate, SpO2, stress monitoring, and dual-band GPS tracking.',
    features: [
      '2.04" Super AMOLED Display with 1000 nits peak outdoor brightness',
      'Precision Aerospace Titanium Unibody with Sapphire Glass crystal',
      'Built-in Dual Frequency GPS with offline trail navigation',
      '120+ Workout Modes with automated sport recognition',
      'Up to 14 days standard battery life, 5 ATM water resistance'
    ],
    specs: {
      'Display': '2.04" AMOLED, 410 x 502 px',
      'Case Material': 'Titanium Alloy & Ceramic Back',
      'Sensors': 'Optical PPG Heart Rate, SpO2, Accelerometer, Barometer',
      'Water Resistance': '5 ATM / IP68 Swimproof',
      'Battery Life': '14 Days Typical / 5 Days Heavy',
      'Compatibility': 'Android 9.0+ & iOS 14.0+'
    },
    images: [
      '/public/assets/aistudio/MJV54ref_VW_34FR_NCE_watch-case-42-aluminum-spacegray-nc-s12_VW_34FR_watch-face-42-aluminum-spacegray-s12_VW_34FR_GEO_IN_9c853a85.jpg',
      '/public/assets/aistudio/shopping_2684e723.webp',
      '/public/assets/aistudio/202502200615003_099cf15d.png',
      '/public/assets/aistudio/61GmCeV0PpL._AC_UF1000_1000_QL80__c1dc7717.jpg',
      '/public/assets/aistudio/710FcBwPVLL._AC_UF350_350_QL80__6d569e99.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-sw-2',
    name: 'Zyntra T800 Ultra Rugged 49mm Smartwatch',
    slug: 'zyntra-t800-ultra-rugged-smartwatch',
    brand: 'Zyntra Tech',
    category: 'smartwatches',
    pricePaise: 399900, // ₹3,999.00
    originalPricePaise: 749900, // ₹7,499.00
    discountPercentage: 46,
    rating: 4.8,
    reviewCount: 418,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-SW-T800-ULTRA',
    description: 'Adventure-ready 49mm titanium alloy casing with wavy ocean sports silicone band. Real-time stock market tracking, BT calling, compass navigation, and SOS siren.',
    features: [
      '2.08" HD Full Touch IPS screen with outdoor high visibility',
      'Tactical rotating digital crown & customizable action button',
      'Dual speaker audio for crisp crystal-clear Bluetooth phone calls',
      'Multi-sport endurance modes with calorie & heart rate monitoring',
      'Fast wireless magnetic inductive charging dock included'
    ],
    specs: {
      'Display': '2.08" HD IPS 385x435 px',
      'Chassis': '49mm Aerospace Titanium Alloy',
      'Strap': 'Wave Ocean Silicone Band',
      'Battery': '380 mAh Wireless Quick Charge',
      'Connectivity': 'Bluetooth 5.2 BT Calling'
    },
    images: [
      '/public/assets/aistudio/49-t800-ultra-smartwatch-real-time-stock-market-updates-android-original-imagyj9jyx9s5dbf_86f6aaa9.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-sw-3',
    name: 'Zyntra Glamour Rose Gold AMOLED Smartwatch',
    slug: 'zyntra-glamour-rose-gold-smartwatch',
    brand: 'Zyntra Fashion',
    category: 'smartwatches',
    pricePaise: 449900, // ₹4,499.00
    originalPricePaise: 799900, // ₹7,999.00
    discountPercentage: 43,
    rating: 4.9,
    reviewCount: 372,
    stock: 28,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-SW-ROSE-GLAM',
    description: 'Elegant champagne rose gold metallic bezel with ultra-soft blush pink silicone band. Features high-res AMOLED curved glass, female health tracking, and 100+ designer watch faces.',
    features: [
      '1.96" High-Definition Curved AMOLED screen with Always-On Mode',
      'Lustrous rose gold alloy finish with precision bevelled glass',
      'All-day automated heart rate, blood oxygen (SpO2), and sleep analysis',
      'Bluetooth HD calling with dial pad and contact sync',
      'IP68 water resistant for daily splash, rain, and workout routines'
    ],
    specs: {
      'Display': '1.96" AMOLED 410x502 Curved Glass',
      'Bezel Finish': 'Jeweled Champagne Rose Gold',
      'Battery': '7 to 10 Days Endurance',
      'Protection': 'IP68 Swimproof'
    },
    images: [
      '/public/assets/aistudio/71TFyL0YQrL_721c6b1b.jpg'
    ],
    warranty: '1 Year Doorstep Replacement Warranty'
  },
  {
    id: 'prod-sw-4',
    name: 'Zyntra CurveFit Active HD Fitness Smartwatch',
    slug: 'zyntra-curvefit-active-smartwatch',
    brand: 'Zyntra Tech',
    category: 'smartwatches',
    pricePaise: 299900, // ₹2,999.00
    originalPricePaise: 599900, // ₹5,999.00
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 290,
    stock: 50,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-SW-CURVE-ACT',
    description: 'Sleek ergonomic 3D curved display engineered for fitness enthusiasts. Real-time calorie burn arcs, step targets, smart music control, and camera shutter remote.',
    features: [
      '1.85" Vivid color display with dynamic motion widgets',
      'Built-in fitness goals with 3-ring activity tracker',
      'Ergonomic comfort-grip matte black silicone strap',
      'Up to 10 days battery life with fast magnetic pin charging'
    ],
    specs: {
      'Display': '1.85" Curved TFT HD',
      'Battery': '260 mAh (10 Days Standby)',
      'Weight': '38g Featherlight',
      'Color': 'Carbon Midnight Black'
    },
    images: [
      '/public/assets/aistudio/image-fallback_f05e1109.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-sw-5',
    name: 'Zyntra FitPulse Color AMOLED Smartwatch (16:23 Active HUD)',
    slug: 'zyntra-fitpulse-color-amoled-smartwatch',
    brand: 'Zyntra Tech',
    category: 'smartwatches',
    pricePaise: 349900, // ₹3,499.00
    originalPricePaise: 699900, // ₹6,999.00
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 384,
    stock: 42,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-SW-FITPULSE-HUD',
    description: 'High-contrast 1.95" AMOLED screen featuring a dynamic multi-ring fitness HUD, real-time 80% battery gauge, 12,580 step target tracker, and SpO2 oxygen telemetry.',
    features: [
      '1.95" High-Resolution AMOLED screen with vibrant color active indicators',
      'Real-time continuous 88 BPM optical heart sensor & SpO2 blood oxygen',
      'High-grade zinc alloy curved case with comfortable grooved sports band',
      'Instant Bluetooth phone calling with dual noise-cancelling mics'
    ],
    specs: {
      'Display': '1.95" AMOLED 410x502 px',
      'Sensors': 'Optical PPG, SpO2, 3-Axis Gyroscope',
      'Battery': '320 mAh (12 Days Standby)',
      'Water Resistance': 'IP68 Splash & Sweatproof',
      'Color': 'Graphite Black'
    },
    images: [
      '/public/assets/aistudio/202502200615003_099cf15d.png'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-sw-6',
    name: 'Zyntra AppMatrix Multi-Widget Smartwatch (Caller ID & Fitness)',
    slug: 'zyntra-appmatrix-multi-widget-smartwatch',
    brand: 'Zyntra Tech',
    category: 'smartwatches',
    pricePaise: 279900, // ₹2,799.00
    originalPricePaise: 549900, // ₹5,499.00
    discountPercentage: 49,
    rating: 4.7,
    reviewCount: 265,
    stock: 55,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-SW-APPMATRIX-06',
    description: 'Complete wearable control hub with multi-app icon honeycomb menu, incoming caller ID with message preview, flashlight, weather, and instant music controller.',
    features: [
      'Interactive multi-app icon dashboard with customizable watch face dial',
      'Caller notification display with message preview and quick text replies',
      'Integrated wrist flashlight, weather forecast, and timer alarms',
      'All-day activity tracking with calorie counter and sedentary reminder'
    ],
    specs: {
      'Display': '1.83" HD Full Touch IPS',
      'Battery Life': '8 Days Normal Use / 15 Days Standby',
      'Notification Support': 'WhatsApp, Calls, SMS, Weather',
      'Color': 'Midnight Black'
    },
    images: [
      '/public/assets/aistudio/61GmCeV0PpL._AC_UF1000_1000_QL80__c1dc7717.jpg'
    ],
    warranty: '1 Year Doorstep Warranty'
  },
  {
    id: 'prod-sw-7',
    name: 'Zyntra Connect Pro Ecosystem Smartwatch with Companion Sync',
    slug: 'zyntra-connect-pro-ecosystem-smartwatch',
    brand: 'Zyntra Tech',
    category: 'smartwatches',
    pricePaise: 389900, // ₹3,899.00
    originalPricePaise: 729900, // ₹7,299.00
    discountPercentage: 46,
    rating: 4.8,
    reviewCount: 310,
    stock: 36,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-SW-CONNECT-PRO',
    description: 'Seamless smartphone companion ecosystem for iOS & Android. Effortlessly sync daily tools, health telemetry, alarms, phone locator, and quick pairing in one tap.',
    features: [
      'One-tap Bluetooth LE fast pairing with official iOS & Android companion app',
      'Daily tools suite: Find Phone, remote camera trigger, alarms, and stopwatch',
      'Precision brushed metallic chassis with silicone ribbed comfort band',
      'Over 200 cloud watch faces downloadable from the companion dashboard'
    ],
    specs: {
      'Display': '1.9" Ultra HD IPS 320x386 px',
      'OS Compatibility': 'iOS 12+ & Android 8.0+',
      'Connectivity': 'Bluetooth 5.3 Low Energy',
      'Battery': '300 mAh Wireless Quick Charge'
    },
    images: [
      '/public/assets/aistudio/710FcBwPVLL._AC_UF350_350_QL80__6d569e99.jpg'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-sw-8',
    name: 'Zyntra Watch Series 10 Starlight Cream AMOLED Edition',
    slug: 'zyntra-watch-series-10-starlight-cream',
    brand: 'Zyntra Fashion',
    category: 'smartwatches',
    pricePaise: 599900, // ₹5,999.00
    originalPricePaise: 999900, // ₹9,999.00
    discountPercentage: 40,
    rating: 4.9,
    reviewCount: 520,
    stock: 22,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-SW-S10-STARLIGHT',
    description: 'Luxury Starlight champagne aluminum casing with matching velvet soft cream silicone sport band. Features typographic Always-On OLED dial, heart rate, and 4-ring workout arcs.',
    features: [
      'Curved edge-to-edge Always-On OLED display with 10:09 typography dial',
      'Lustrous Starlight aerospace aluminum unibody with brushed stainless pin',
      'Comprehensive cardiac ECG rhythm monitor and SpO2 oxygen sensors',
      'Swimproof 50m water resistance with rapid magnetic charging cable'
    ],
    specs: {
      'Display': '2.0" LTPO OLED Always-On 2000 nits',
      'Chassis': 'Starlight Aerospace Aluminum',
      'Strap': 'Premium Cream Sport Silicone with Metal Pin',
      'Battery': 'Up to 36 Hours Normal / 72 Hours Low Power',
      'Water Resistance': '50 Meters WR50 Swimproof'
    },
    images: [
      '/public/assets/aistudio/shopping_2684e723.webp'
    ],
    warranty: '1 Year Comprehensive Brand Warranty'
  },
  {
    id: 'prod-3',
    name: 'Zyntra AirPulse Pro ANC Wireless Earbuds (Glossy Obsidian Black)',
    slug: 'zyntra-airpulse-pro-anc-wireless-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 249900, // ₹2,499.00
    originalPricePaise: 499900, // ₹4,999.00
    discountPercentage: 50,
    rating: 4.9,
    reviewCount: 680,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-EB-ANC-BLK',
    description: 'Flagship true wireless earbuds with 45dB hybrid active noise cancellation, quad ENC environmental mics for studio-clear calls, ultra-low 40ms gaming latency, and 42-hour composite battery life.',
    features: [
      '45dB Hybrid Active Noise Cancellation (ANC) with Transparency Mode',
      '11mm Beryllium acoustic drivers delivering punchy sub-bass and crisp highs',
      'Quad-mic ENC array with AI beamforming speech isolation',
      'Qi Wireless Charging case + USB-C fast charge (10 mins = 5 hours)',
      'IPX5 sweat and splash resistance for intense workouts'
    ],
    specs: {
      'ANC Depth': 'Up to 45dB Active Noise Cancellation',
      'Driver Size': '11mm High-Resolution Beryllium',
      'Bluetooth': 'v5.3 with AAC / SBC / LDAC support',
      'Total Playtime': '42 Hours with Charging Case',
      'Water Resistance': 'IPX5 Sweatproof',
      'Color': 'Glossy Obsidian Black'
    },
    images: [
      '/public/images/earbuds/earbuds_glossy_black.jpg'
    ],
    warranty: '1 Year Doorstep Replacement Warranty'
  },
  {
    id: 'prod-eb-2',
    name: 'Zyntra SonicFlow Titanium Semi-In-Ear TWS Earbuds',
    slug: 'zyntra-sonicflow-titanium-semi-in-ear-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 199900, // ₹1,999.00
    originalPricePaise: 349900, // ₹3,499.00
    discountPercentage: 43,
    rating: 4.8,
    reviewCount: 512,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-EB-FLOW-TITAN',
    description: 'Ultra-lightweight semi-in-ear ergonomic stem earphones with titanium composite diaphragm, 360-degree spatial sound immersion, and dual-device instant pairing.',
    features: [
      'Semi-in-ear ergonomic pressure-relief design for all-day fatigue-free wear',
      '13mm Titanium-coated dynamic drivers for expansive natural soundstage',
      'Ultra-low 38ms latency dedicated gaming and video mode',
      'Dual-device smart multi-point connection across phone and laptop',
      '36 Hours combined playback with pocket pebble charging capsule'
    ],
    specs: {
      'Form Factor': 'Semi-In-Ear Stem Design',
      'Drivers': '13mm Titanium Composite Diaphragm',
      'Latency': '38ms Gaming Low Latency',
      'Playtime': '36 Hours Total (7.5h per bud)',
      'Charging': 'USB Type-C Fast Fuel',
      'Color': 'Titanium Silver Matte'
    },
    images: [
      '/public/images/earbuds/earbuds_silver_titanium.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-eb-3',
    name: 'Zyntra PowerVault Digital Display Powerbank TWS Earbuds',
    slug: 'zyntra-powervault-digital-display-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 179900, // ₹1,799.00
    originalPricePaise: 299900, // ₹2,999.00
    discountPercentage: 40,
    rating: 4.8,
    reviewCount: 460,
    stock: 48,
    isFeatured: true,
    isNewArrival: false,
    sku: 'ZYN-EB-VAULT-LED',
    description: 'Never guess battery life again. Features a high-definition dual LED digital percentage screen on the charging case, emergency smartphone powerbank capability, and deep stereo bass.',
    features: [
      'Dual digital LED screen showing exact percentage for left, right, and case',
      'Built-in 2200 mAh charging case capable of emergency phone charging',
      'Graphene-enhanced drivers with boosted sub-bass resonance',
      '120 Hours total standby / 65 hours total playback with heavy-duty case',
      'Fingerprint touch sensors for playback, volume, and voice assistant'
    ],
    specs: {
      'Display': 'Dual LED Digital Battery Percentage HUD',
      'Case Battery': '2200 mAh Emergency Powerbank Case',
      'Playtime': '65 Hours Total Playback',
      'Bluetooth': 'v5.3 Low Energy',
      'Microphone': 'CVC 8.0 Noise Cancelling Mic',
      'Color': 'Carbon Black'
    },
    images: [
      '/public/images/earbuds/earbuds_powerbank_digital.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-eb-4',
    name: 'Zyntra TrekRugged Carabiner Travel TWS Earbuds',
    slug: 'zyntra-trekrugged-carabiner-travel-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 219900, // ₹2,199.00
    originalPricePaise: 379900, // ₹3,799.00
    discountPercentage: 42,
    rating: 4.8,
    reviewCount: 395,
    stock: 35,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-EB-TREK-CARAB',
    description: 'Built for outdoor adventures, trekking, and gym sessions. Military-grade impact-resistant case with integrated anodized aluminum carabiner clip, IPX7 waterproofing, and secure lock lid.',
    features: [
      'Heavy-duty shockproof bumper case with metal carabiner clip for backpacks',
      'IPX7 submersible waterproof certified against rain, sweat, and water sports',
      'Enhanced bass dynamic drivers tuned for energetic workout beats',
      '50 Hours total playback with reinforced rugged battery case',
      'Anti-drop ergonomic silicone fins included in 3 custom sizes'
    ],
    specs: {
      'Protection': 'IPX7 Waterproof & Shockproof Armor',
      'Mounting': 'Integrated Aluminum Carabiner Hook',
      'Playtime': '50 Hours Total (8 Hours single charge)',
      'Connectivity': 'Bluetooth 5.3 Instant Auto-Connect',
      'Color': 'Tactical Matte Black'
    },
    images: [
      '/public/images/earbuds/earbuds_carabiner_black.jpg'
    ],
    warranty: '1 Year Replacement Warranty'
  },
  {
    id: 'prod-eb-5',
    name: 'Zyntra Pastel Bloom Velvet Touch Wireless Earbuds (Pastel Pink)',
    slug: 'zyntra-pastel-bloom-velvet-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 149900, // ₹1,499.00
    originalPricePaise: 249900, // ₹2,499.00
    discountPercentage: 40,
    rating: 4.7,
    reviewCount: 320,
    stock: 50,
    isFeatured: false,
    isNewArrival: false,
    sku: 'ZYN-EB-PASTEL-PNK',
    description: 'Aesthetic elegance meets acoustic precision. Ultra-soft velvet matte finish in delicate Pastel Pink, compact palm-sized curved case, and crystal-clear vocals for podcasts and music.',
    features: [
      'Silky smooth velvet touch finish in chic Pastel Pink aesthetic',
      'Ultra-featherweight 3.6g ergonomic buds designed for petite ear canals',
      'Hi-Fi composite diaphragm for warm acoustic vocals and balanced treble',
      '32 Hours total playtime with quick Type-C charging',
      'Intuitive touch controls for easy one-tap music switching'
    ],
    specs: {
      'Weight': '3.6g per earbud',
      'Finish': 'Velvet Soft-Touch Matte',
      'Playtime': '32 Hours Total Playback',
      'Bluetooth': 'v5.3 Ultra-Stable Transmission',
      'Color': 'Pastel Petal Pink'
    },
    images: [
      '/public/images/earbuds/earbuds_pastel_pink.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-eb-6',
    name: 'Zyntra AeroWave Lavender Mist True Wireless Earbuds',
    slug: 'zyntra-aerowave-lavender-mist-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 169900, // ₹1,699.00
    originalPricePaise: 279900, // ₹2,799.00
    discountPercentage: 39,
    rating: 4.8,
    reviewCount: 280,
    stock: 42,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-EB-AERO-LAV',
    description: 'Subtle style and all-day audio freedom. Soft Lavender Mist finish, dual environmental noise-cancelling microphones for calls, and balanced sound signature with punchy bass.',
    features: [
      'Exclusive Lavender Mist matte hue with anti-smudge coating',
      'Environmental noise cancellation (ENC) with dual beamforming microphones',
      '10mm composite biological diaphragm for high acoustic fidelity',
      '38 Hours prolonged playback with sleek capsule case',
      'Fast pairing with instant open-lid connection'
    ],
    specs: {
      'Driver': '10mm Bio-Diaphragm Driver',
      'Call Quality': 'Dual Mic ENC Noise Reduction',
      'Playtime': '38 Hours Total',
      'Water Resistance': 'IPX4 Splashproof',
      'Color': 'Lavender Mist'
    },
    images: [
      '/public/images/earbuds/earbuds_lavender_matte.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-eb-7',
    name: 'Zyntra OpenFree Sport Conduction Wireless Earbuds (Maroon)',
    slug: 'zyntra-openfree-sport-conduction-earbuds',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 289900, // ₹2,899.00
    originalPricePaise: 459900, // ₹4,599.00
    discountPercentage: 37,
    rating: 4.9,
    reviewCount: 340,
    stock: 25,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-EB-OPEN-MAROON',
    description: 'Revolutionary open-ear design for running, cycling, and safe outdoor sports. Keeps your ear canals open to hearing ambient traffic while delivering powerful directional bass.',
    features: [
      'Open-ear directional acoustic design protects hearing and maintains situational safety',
      'Ultra-comfortable liquid silicone earhooks that never shake loose during sprints',
      '16.2mm oversized dynamic drivers with directional sound beam technology',
      '45 Hours extended battery life with magnetic charging cradle',
      'IPX6 sweatproof and weather-resistant construction'
    ],
    specs: {
      'Design': 'Open-Ear Directional Conduction with Flexible Hooks',
      'Drivers': '16.2mm Large-Aperture Dynamic Drivers',
      'Battery Life': '45 Hours Total (10 Hours continuous)',
      'Waterproof': 'IPX6 Sweat & Rainproof',
      'Color': 'Deep Velvet Maroon'
    },
    images: [
      '/public/images/earbuds/earbuds_open_ear_maroon.jpg'
    ],
    warranty: '1 Year Doorstep Replacement Warranty'
  },
  {
    id: 'prod-eb-8',
    name: 'Zyntra NeoBeats ANC Hi-Res Wireless Earbuds (Emerald Green)',
    slug: 'zyntra-neobeats-anc-emerald-green',
    brand: 'Zyntra Audio',
    category: 'earbuds',
    pricePaise: 229900, // ₹2,299.00
    originalPricePaise: 399900, // ₹3,999.00
    discountPercentage: 43,
    rating: 4.8,
    reviewCount: 310,
    stock: 30,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-EB-NEO-EMERALD',
    description: 'Jewel-toned acoustic excellence. Deep Emerald Green metallic casing, Hi-Res certified LDAC codec streaming, active noise cancellation, and transparency ambient hearing mode.',
    features: [
      'Lustrous jewel Emerald Green casing with golden accents',
      '40dB Active Noise Cancellation with smart ambient sound transparency mode',
      'Hi-Res Audio Wireless certification with LDAC codec support',
      '40 Hours composite playtime with quick USB-C power injection',
      'Custom EQ sound profiles via single-touch presets'
    ],
    specs: {
      'ANC': '40dB Active Noise Cancellation',
      'Audio Codec': 'LDAC / AAC / SBC Hi-Res Audio',
      'Playtime': '40 Hours Total',
      'Controls': 'Smart Capacitive Touch Controls',
      'Color': 'Metallic Emerald Green'
    },
    images: [
      '/public/images/earbuds/earbuds_emerald_green.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-nb-2',
    name: 'Zyntra Emerald Rose Gold Luxury Neckband',
    slug: 'zyntra-emerald-rose-gold-luxury-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 189900, // ₹1,899.00
    originalPricePaise: 349900, // ₹3,499.00
    discountPercentage: 45,
    rating: 4.9,
    reviewCount: 280,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-EMERALD-02',
    description: 'Lustrous emerald green silicone collar with rose gold acoustic chamber caps. Magnetic instant power-off and rich vocal clarity.',
    features: [
      'Jewelry-grade dual-tone emerald green and rose gold finish',
      '12mm Beryllium composite dynamic drivers for audiophile treble and warm mids',
      'Magnetic earbud backplates for auto-pause and auto-answer',
      'Environmental noise cancellation with high-fidelity MEMS microphone',
      '40 Hours continuous playback with USB-C quick charge'
    ],
    specs: {
      'Driver': '12mm Beryllium Dynamic',
      'Color': 'Emerald Green & Rose Gold',
      'Battery': '40 Hours Playback',
      'Charging': 'USB Type-C',
      'Weight': '26 grams ultra-light'
    },
    images: [
      '/public/images/neckbands/neckband_emerald_gold.jpg',
      '/public/assets/aistudio/images__15__a9dcd6cd.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-nb-3',
    name: 'Zyntra TurboCharge Pro Wireless Neckband',
    slug: 'zyntra-turbocharge-pro-wireless-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 129900, // ₹1,299.00
    originalPricePaise: 249900, // ₹2,499.00
    discountPercentage: 48,
    rating: 4.7,
    reviewCount: 395,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-TURBO-03',
    description: 'High-performance athletic neckband with ultra-durable reinforced strain reliefs, 50-hour battery reserve, and USB-C fast charging.',
    features: [
      '50 Hours long battery backup with instant rapid charging',
      'Magnetic lock buds with tangle-free silicone cables',
      'Enhanced bass boost curve for punchy workout motivation',
      'IPX4 splash and sweat resistance for daily sports use'
    ],
    specs: {
      'Driver': '10mm Bass Reflex',
      'Playtime': '50 Hours Playtime',
      'Charging': 'USB Type-C Rapid Charge',
      'Color': 'Matte Stealth Black',
      'Bluetooth': '5.3 Fast Pair'
    },
    images: [
      '/public/images/neckbands/neckband_pro_sport_black.jpg',
      '/public/assets/aistudio/images__14__57b44ccb.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-nb-4',
    name: 'Zyntra Royal Wave Dual-Battery Neckband',
    slug: 'zyntra-royal-wave-dual-battery-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 169900, // ₹1,699.00
    originalPricePaise: 319900, // ₹3,199.00
    discountPercentage: 46,
    rating: 4.8,
    reviewCount: 220,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-ROYAL-04',
    description: 'Deep royal navy blue with dual modular battery pods providing up to 60 hours continuous playtime, 12mm drivers, and vibrating call alerts.',
    features: [
      'Dual balanced battery compartments for all-day balanced collar stability',
      '60 Hours marathon battery life with low-power Bluetooth 5.4',
      'Vibration alerts for incoming calls so you never miss a ring',
      'Plush silicone contour resting naturally across collarbones'
    ],
    specs: {
      'Driver': '12mm Graphene Composite',
      'Battery': '60 Hours Endurance',
      'Color': 'Royal Navy Blue',
      'Charging': 'Type-C Fast Charge',
      'Vibration Alert': 'Yes'
    },
    images: [
      '/public/images/neckbands/neckband_royal_blue_dual.jpg',
      '/public/assets/aistudio/images__13__dc365b38.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-nb-5',
    name: 'Zyntra Contour Aero Sport Bluetooth Neckband',
    slug: 'zyntra-contour-aero-sport-bluetooth-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 159900, // ₹1,599.00
    originalPricePaise: 289900, // ₹2,899.00
    discountPercentage: 44,
    rating: 4.8,
    reviewCount: 310,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-AERO-05',
    description: 'Aerodynamic contour neckband in metallic electric cyan and graphite black. Memory-titanium flex wire with zero bounce during workouts.',
    features: [
      'Featherlight titanium memory alloy core always springs back to shape',
      'Electric cyan metallic accents with angled ergonomic silicone eartips',
      '42 Hours total playtime with ASAP quick-charge technology',
      'IPX5 sweatproof and dust-resistant sealing'
    ],
    specs: {
      'Driver': '10mm Dynamic Acoustic',
      'Playtime': '42 Hours Playtime',
      'Color': 'Electric Cyan & Graphite Black',
      'Core': 'Titanium Memory Alloy',
      'Bluetooth': '5.4'
    },
    images: [
      '/public/images/neckbands/neckband_cyan_contour.jpg',
      '/public/assets/aistudio/images__12__427d0d3f.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-nb-6',
    name: 'Zyntra FlexFit Sport Vibration Alert Neckband',
    slug: 'zyntra-flexfit-sport-vibration-alert-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 249900, // ₹2,499.00
    discountPercentage: 52,
    rating: 4.9,
    reviewCount: 342,
    stock: 48,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-FLEXFIT-06',
    description: 'Ultra-flexible sports neckband engineered for high-intensity fitness. Features instant haptic call vibration alert, 20 hours marathon playback, fast charging, and skin-friendly silicone collar.',
    features: [
      '20 Hours non-stop audio playback with rapid charge technology',
      'Instant haptic collar vibration alert for incoming calls & notifications',
      'Ultra-lightweight skin-friendly flexible memory wire design',
      '10mm Dynamic Bass drivers with crystal HD voice call clarity',
      'IPX5 sweat-resistant construction perfect for gym & running'
    ],
    specs: {
      'Playtime': '20 Hours Marathon Playtime',
      'Vibration Alert': 'Yes (Call & Alert Haptic Motor)',
      'Driver Size': '10mm Dynamic High-Bass',
      'Bluetooth': '5.3 with Fast Auto-Pair',
      'Color': 'Sport Matte Black & Coral Red',
      'Water Resistance': 'IPX5 Sweat & Splash Proof',
      'Charging': 'Type-C Rapid Charging'
    },
    images: [
      '/public/images/neckbands/neckband_fashion_fitness_vibe.webp',
      '/public/assets/aistudio/whatsapp-image-2024-07-03-at-11-57-22-am-500x500_af5d4a17.webp'
    ],
    warranty: '1 Year Brand Doorstep Warranty'
  },
  {
    id: 'prod-nb-8',
    name: 'Zyntra CyberPulse Transparent Edition Hi-Fi Neckband',
    slug: 'zyntra-cyberpulse-transparent-edition-hifi-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 199900, // ₹1,999.00
    originalPricePaise: 399900, // ₹3,999.00
    discountPercentage: 50,
    rating: 4.9,
    reviewCount: 480,
    stock: 25,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-CYBER-08',
    description: 'Futuristic transparent acoustic neckband featuring exposed precision circuitry aesthetics, metallic accents, 13mm beryllium drivers, and up to 50 hours playtime.',
    features: [
      'Cyberpunk aesthetic with transparent see-through acoustic chassis',
      '13mm Beryllium coated high-fidelity drivers for punchy bass & airy highs',
      '50 Hours long-lasting battery life with Fast Type-C turbo charge',
      'Magnetic instant power sleep/wake locks with reinforced braided cables',
      'Quad-mic environmental call noise cancellation (ENC)'
    ],
    specs: {
      'Design': 'Transparent Cyber Edition Chassis',
      'Driver Size': '13mm Beryllium Acoustic',
      'Playtime': '50 Hours High-Endurance',
      'Fast Charge': '10 Mins = 8 Hours Playtime',
      'Bluetooth': '5.4 with AAC/SBC HD Codecs',
      'Color': 'Crystal Clear & Obsidian Black',
      'Weight': '28g Featherweight'
    },
    images: [
      '/public/images/neckbands/neckband_cyber_transparent_mbuddy.webp',
      '/public/assets/aistudio/1-mbuddy-533_eb0ed58b.webp'
    ],
    warranty: '1 Year Comprehensive Brand Warranty'
  },
  {
    id: 'prod-nb-cyberwave-skyblue',
    name: 'Zyntra CyberWave Sky Blue Transparent Edition Wireless Neckband',
    slug: 'zyntra-cyberwave-sky-blue-transparent-edition',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 189900, // ₹1,899.00
    originalPricePaise: 379900, // ₹3,799.00
    discountPercentage: 50,
    rating: 4.9,
    reviewCount: 380,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-CYBERWAVE-BLUE',
    description: 'Futuristic cyberpunk transparent acoustic neckband in pastel sky blue with exposed internal PCB architecture, metallic acoustic buds, 13mm beryllium drivers, 45 hours battery life, and Type-C fast charging.',
    features: [
      'Exposed cyberpunk transparent acoustic chamber with visible PCB circuit trace',
      '13mm Beryllium composite dynamic drivers for deep sub-bass and crisp vocal treble',
      '45 Hours continuous audio playback with 10-minute Type-C rapid turbo charge',
      'Magnetic instant snap-and-play earpieces with tangle-free silicone collar',
      'Dual-mic Environmental Noise Cancellation (ENC) for crystal clear HD calls'
    ],
    specs: {
      'Design': 'Cyberpunk Transparent Architecture',
      'Driver': '13mm Beryllium Acoustic',
      'Playtime': '45 Hours Marathon Playback',
      'Fast Charge': '10 Mins Charge = 8 Hours Playtime',
      'Color': 'Pastel Sky Blue & Metallic Chrome',
      'Bluetooth': '5.4 Low-Latency Gaming Ready',
      'Water Resistance': 'IPX5 Sweat & Splash Proof'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_cyberwave_skyblue.webp',
      '/public/assets/aistudio/blue_main_image-533_a25cdb96.webp'
    ],
    warranty: '1 Year Comprehensive Brand Warranty'
  },
  {
    id: 'prod-nb-landmark-silver',
    name: 'Landmark SilverFlex Braided Cable Metallic Wireless Neckband',
    slug: 'landmark-silverflex-braided-cable-metallic-neckband',
    brand: 'Landmark',
    category: 'neckband',
    pricePaise: 99900, // ₹999.00
    originalPricePaise: 199900, // ₹1,999.00
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 290,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'LM-NB-SILVERFLEX-01',
    description: 'Engineered with ultra-durable reinforced braided acoustic cables, knurled metal battery controls, and magnetic snap earbuds. Delivers 30 hours playback and crystal-clear HD calling.',
    features: [
      'Heavy-duty reinforced braided acoustic cables for tangle-free durability',
      'Machined aerospace aluminum pods with tactile textured knurled buttons',
      'Magnetic metallic earbuds that snap together when idle to save battery',
      '30 Hours battery backup with intelligent power management engine',
      '10mm high-fidelity audio drivers with rich acoustic balance'
    ],
    specs: {
      'Cable Type': 'High-Tension Braided Cord',
      'Chassis': 'Knurled Aerospace Metal',
      'Playtime': '30 Hours Continuous Audio',
      'Driver': '10mm Neodymium Stereo',
      'Color': 'Silver White & Metallic Platinum',
      'Bluetooth': '5.3 Instant Auto-Connect'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_landmark_silver_braided.jpg',
      '/public/assets/aistudio/images_e9180c1a.jpg'
    ],
    warranty: '1 Year Landmark Brand Warranty'
  },
  {
    id: 'prod-nb-boat-rockerz-emerald',
    name: 'boAt Rockerz 255 Pro+ Emerald Teal Wireless Neckband',
    slug: 'boat-rockerz-255-pro-plus-emerald-teal',
    brand: 'boAt',
    category: 'neckband',
    pricePaise: 129900, // ₹1,299.00
    originalPricePaise: 299000, // ₹2,990.00
    discountPercentage: 57,
    rating: 4.9,
    reviewCount: 1420,
    stock: 70,
    isFeatured: true,
    isNewArrival: true,
    sku: 'BOAT-RCKZ-255P-TEAL',
    description: 'boAt Signature Sound with 10mm dynamic drivers, ASAP Charge (10 mins charge = 10 hours playback), up to 40 hours total battery life, and IPX7 water & sweat resistance in stunning Emerald Teal.',
    features: [
      'boAt Signature Sound with super extra bass tuning and 10mm drivers',
      'ASAP Fast Charging: 10 minutes of charge delivers up to 10 hours of playback',
      'Massive 40 Hours non-stop playtime on a single full recharge',
      'IPX7 Water & Sweat Resistance: perfect for high-intensity gym workouts',
      'Magnetic earbuds with instant auto-connect and dual pairing capability'
    ],
    specs: {
      'Sound': 'boAt Signature Deep Bass',
      'Driver Size': '10mm Dynamic Bass Reflex',
      'Playtime': '40 Hours Marathon Playback',
      'ASAP Charge': '10 Mins = 10 Hours Playtime',
      'Water Resistance': 'IPX7 Water & Sweat Resistance',
      'Color': 'Emerald Teal / Forest Green'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_boat_rockerz_emerald_teal.webp',
      '/public/assets/aistudio/257415_0_dbmzxl_93ff1134.webp'
    ],
    warranty: '1 Year boAt Brand Warranty'
  },
  {
    id: 'prod-nb-promate-velcon',
    name: 'Promate Velcon Sport Dynamic Bass Wireless Neckband',
    slug: 'promate-velcon-sport-dynamic-bass-neckband',
    brand: 'Promate',
    category: 'neckband',
    pricePaise: 149900, // ₹1,499.00
    originalPricePaise: 299900, // ₹2,999.00
    discountPercentage: 50,
    rating: 4.7,
    reviewCount: 260,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'PROM-NB-VELCON-BLK',
    description: 'Ergonomic gunmetal & crimson red silicone sport neckband with high-tension memory collar, precision tuned acoustic chambers, vibrating call alert, and 35 hours endurance.',
    features: [
      'Contoured silicone collar designed for zero bounce during athletic running',
      'High-impact dynamic bass drivers with crimson red silicone ear cushions',
      'Built-in call vibration motor for silent incoming call notifications',
      '35 Hours high-endurance playback with smart auto-standby power saver',
      'Reinforced strain relief joints for rugged gym and travel use'
    ],
    specs: {
      'Acoustics': 'High-Impact Dynamic Bass',
      'Collar': 'Ergonomic High-Tension Silicone',
      'Playtime': '35 Hours Continuous Audio',
      'Vibration Alert': 'Yes (Call Haptic Motor)',
      'Color': 'Gunmetal Grey & Crimson Red Accent',
      'Bluetooth': '5.3 Fast Pair'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_promate_velcon_sport.webp',
      '/public/assets/aistudio/1_9e4932ae-bc1b-4bb4-88e9-94635cb240c1_a3d8387d.webp'
    ],
    warranty: '1 Year Promate Brand Warranty'
  },
  {
    id: 'prod-nb-eq-charge-navy',
    name: 'Zyntra EQ-Charge Sport Navy Blue Wireless Neckband',
    slug: 'zyntra-eq-charge-sport-navy-blue-neckband',
    brand: 'Zyntra Audio',
    category: 'neckband',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 249900, // ₹2,499.00
    discountPercentage: 52,
    rating: 4.8,
    reviewCount: 310,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-NB-EQCHARGE-NAVY',
    description: 'Deep royal navy blue with ergonomic sport ear-wings, EQ Charge technology (15 mins charge = 12 hours playback), 48 hours total stamina, dual device pairing, and IPX5 sweat resistance.',
    features: [
      'EQ Charge rapid replenishment: 15 minutes gives 12 hours playback',
      'Ergonomic wing-tip ear-fins for secure non-slip ear lock during sprinting',
      '48 Hours total stamina battery with power-efficient audio DAC chip',
      'Multi-point dual device pairing: switch seamlessly between laptop and phone',
      'Deep royal navy blue finish with silver metallic acoustic sound tubes'
    ],
    specs: {
      'Playtime': '48 Hours High-Endurance Playtime',
      'Fast Charge': 'EQ Charge (15 Mins = 12 Hours)',
      'Ear-Fins': 'Ergonomic Non-Slip Sport Wings',
      'Color': 'Royal Navy Blue & Silver',
      'Bluetooth': '5.3 with Dual Device Pairing',
      'Water Resistance': 'IPX5 Sweat & Water Resistance'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_eq_charge_navy_blue.webp',
      '/public/assets/aistudio/EQ_charge_31439306.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-nb-ubon-u7-yellow',
    name: 'UBON U7 Wireless Neckband (Bumblebee Yellow & Gunmetal · 32H Playtime)',
    slug: 'ubon-u7-wireless-neckband-yellow-32h',
    brand: 'UBON',
    category: 'neckband',
    pricePaise: 89900, // ₹899.00
    originalPricePaise: 199900, // ₹1,999.00
    discountPercentage: 55,
    rating: 4.8,
    reviewCount: 430,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'UBON-U7-YEL-GUN',
    description: 'Lightweight comfort neckband in vibrant Bumblebee Yellow & Gunmetal. Up to 32 hours playtime, Bluetooth v5.3, instant magnetic lock earbuds, voice assistant trigger, and Type-C fast charge.',
    features: [
      '32 Hours marathon playtime with optimized low-power consumption',
      'Bluetooth v5.3 with ultra-low latency audio sync and 10m stable range',
      'Magnetic earbuds for quick storage and tangle-free convenience',
      'Dedicated one-touch voice assistant access for Google Assistant and Siri',
      'Type-C fast charging port with universal charging cable compatibility'
    ],
    specs: {
      'Playtime': '32 Hours Playtime',
      'Bluetooth Version': 'v5.3',
      'Charging Port': 'Type-C Fast Charging',
      'Earbuds': 'Magnetic Snap Lock',
      'Voice Assistant': 'Google / Siri One-Touch',
      'Color': 'Bumblebee Yellow & Gunmetal Grey'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_ubon_u7_yellow.webp',
      '/public/assets/aistudio/UBON_U7_Wireless_Neckband_Design_202607281826_49e06053.webp'
    ],
    warranty: '1 Year UBON Brand Warranty'
  },
  {
    id: 'prod-nb-zebronics-raga',
    name: 'Zebronics ZEB-Raga F2 Wireless Neckband (Made in India · Ergonomic Fins)',
    slug: 'zebronics-zeb-raga-f2-wireless-neckband-black',
    brand: 'Zebronics',
    category: 'neckband',
    pricePaise: 79900, // ₹799.00
    originalPricePaise: 169900, // ₹1,699.00
    discountPercentage: 53,
    rating: 4.7,
    reviewCount: 510,
    stock: 80,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZEB-RAGA-F2-BLK',
    description: 'Proudly Made in India! Zebronics ZEB-Raga F2 wireless neckband with magnetic earpieces, soft in-ear ear-fins for workout lock, Environmental Noise Cancellation (ENC) for crystal voice calls, and 36 hours playback.',
    features: [
      'Proudly Made in India with certified local manufacturing quality',
      '36 Hours long battery life with Type-C rapid charging capability',
      'Environmental Noise Cancellation (ENC) for clear disturbance-free calling',
      'Soft silicone ear-fins that lock securely inside ear canal for workouts',
      'Magnetic earpieces with splash-proof and sweat-resistant build'
    ],
    specs: {
      'Origin': 'Made in India Certified',
      'Playtime': '36 Hours Battery Life',
      'ENC': 'Environmental Noise Cancellation Mic',
      'Ear-Fins': 'Soft Ergonomic Workout Fins',
      'Color': 'Stealth Matte Black',
      'Charging': 'Type-C Fast Charge'
    },
    images: [
      '/images/neckbands/uploads_nov/neckband_zebronics_raga_f2_black.webp',
      '/public/assets/aistudio/Zeb-RagaF2-pic1_9547fe2f-a523-483f-92d2-71839204eb1f_59ea198a.webp'
    ],
    warranty: '1 Year Zebronics Brand Warranty'
  },
  {
    id: 'prod-ld-orange',
    name: 'Zyntra BassFire Type-C In-Ear Earphones (Vibrant Orange)',
    slug: 'zyntra-bassfire-typec-in-ear-earphones-orange',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 49900, // ₹499.00
    originalPricePaise: 99900, // ₹999.00
    discountPercentage: 50,
    rating: 4.9,
    reviewCount: 462,
    stock: 75,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-ORG-TC-01',
    description: 'High-fidelity Type-C in-ear earphones in electric neon orange. Engineered with an integrated 24-bit/96kHz digital DAC chip, precision dynamic bass drivers, and an ergonomic angled sound cavity for all-day listening.',
    features: [
      'Built-in 24-bit/96kHz digital DAC chip delivers studio-grade lossless audio',
      'Ergonomic angled nozzle with ultra-soft silicone ear tips for passive noise isolation',
      'In-line 3-button control pod with HD condenser microphone and volume rocker',
      'Vibrant electric orange anti-tangle reinforced TPE audio cable',
      'Universal compatibility with Samsung, OnePlus, Xiaomi, iPad, and all USB-C devices'
    ],
    specs: {
      'Connector': 'Reversible USB Type-C Digital Plug (with DAC)',
      'Frequency Response': '20Hz - 22,000Hz',
      'Cable Length': '1.2 Meters Tangle-Resistant',
      'Microphone': 'Integrated HD Electret Condenser Mic',
      'Color': 'Vibrant Neon Orange',
      'Weight': '16 grams'
    },
    images: [
      '/public/images/leads/orange_typec_earphones.jpg',
      '/public/assets/aistudio/61s2-Eh33CL._SL263_QL70__932830b1.jpg'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-ld-zebronics',
    name: 'Zyntra SonicPro Metal Type-C Hi-Fi Earphones (Silver & Obsidian)',
    slug: 'zyntra-sonicpro-metal-typec-earphones',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 59900, // ₹599.00
    originalPricePaise: 119900, // ₹1,199.00
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 388,
    stock: 60,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-ZEB-SLV-02',
    description: 'Acoustically tuned aerospace metal alloy in-ear earphones with digital Type-C connector. Delivers punchy sub-bass, crystal-clear mids, and durable laser-etched aluminum earbud housings.',
    features: [
      'Precision CNC milled aluminum alloy sound chambers for deep resonance',
      'Digital USB-C audio with zero latency for gaming and streaming',
      'Gold-plated contacts with heavy-duty strain relief boot',
      'Built-in in-line microphone with tactile push-to-talk button',
      'Ergonomic in-ear contour ensures secure seal during workouts'
    ],
    specs: {
      'Connector': 'USB Type-C Digital Audio',
      'Driver Size': '10mm Neodymium Metal Acoustic Driver',
      'Cable Type': 'High-Flex Shielded Copper Core',
      'Length': '1.2m',
      'Color': 'Brushed Silver & Obsidian Black',
      'Weight': '18 grams'
    },
    images: [
      '/public/images/leads/zebronics_silver_typec.jpg',
      '/public/assets/aistudio/61TNOb-gNqL._SL263_QL70__047b32ab.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-ld-pink',
    name: 'Zyntra PurePulse Braided Type-C Earphones (Blush Pink)',
    slug: 'zyntra-purepulse-braided-typec-earphones-pink',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 64900, // ₹649.00
    originalPricePaise: 129900, // ₹1,299.00
    discountPercentage: 50,
    rating: 4.9,
    reviewCount: 512,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-PNK-BRD-03',
    description: 'Simple. Reliable. Everyday. Premium blush pink braided wire Type-C earphones featuring an in-line HD mic, durable woven braided cord, and lightweight in-ear comfort designed for marathon listening.',
    features: [
      'Universal Type-C digital connection with wide device compatibility',
      'High-density braided nylon cord resistant to tangles, fraying, and pet bites',
      'Ultra-lightweight metallic capsule design with soft dual-tone silicone tips',
      'In-line microphone with single-click music pause and call answer',
      'Includes silicone cable management clip and 3 ear tip sizes'
    ],
    specs: {
      'Connector': 'Universal Type-C Audio Interface',
      'Cable Construction': 'Durable Braided Wire Core',
      'Cable Length': '1.2 Meters',
      'Microphone': 'In-line HD Voice Mic',
      'Design': 'Lightweight In-Ear Comfort',
      'Color': 'Blush Pink & Silver'
    },
    images: [
      '/public/images/leads/pink_braided_typec.jpg',
      '/public/assets/aistudio/61_y85x34ML_fdb40a2f.jpg'
    ],
    warranty: '1 Year Doorstep Replacement Warranty'
  },
  {
    id: 'prod-ld-ambrane-blue',
    name: 'Zyntra WaveCore 3.5mm Stereo Earphones (Cobalt Blue)',
    slug: 'zyntra-wavecore-35mm-stereo-earphones-blue',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 39900, // ₹399.00
    originalPricePaise: 79900, // ₹799.00
    discountPercentage: 50,
    rating: 4.7,
    reviewCount: 320,
    stock: 85,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-LEAD-AMB-BLU-04',
    description: 'Vibrant cobalt blue 3.5mm stereo wired earphones. Engineered with angled in-ear stems, 10mm high-efficiency drivers for punchy bass, and a gold-plated 3.5mm headphone jack.',
    features: [
      'Gold-plated 3.5mm audio jack for static-free, lossless analogue signal transmission',
      'Custom 10mm dynamic bass drivers tuned for energetic Indian acoustic profiles',
      'Ergonomic earbud angle stays comfortably locked in ears during movement',
      'Multifunction one-button remote control for hands-free crystal voice calls'
    ],
    specs: {
      'Jack': '3.5mm Gold-Plated Auxiliary Plug',
      'Impedance': '32 Ohms',
      'Driver': '10mm Dynamic Bass Unit',
      'Length': '1.2m Durable TPE Wire',
      'Color': 'Cobalt Blue',
      'Weight': '14 grams'
    },
    images: [
      '/public/images/leads/ambrane_blue_35mm.jpg',
      '/public/assets/aistudio/61UJ717Kx-L_1cbb64d9.jpg'
    ],
    warranty: '6 Months Brand Warranty'
  },
  {
    id: 'prod-ld-ambrane-green',
    name: 'Zyntra ForestSound 3.5mm Stereo Earphones (Deep Forest Green)',
    slug: 'zyntra-forestsound-35mm-stereo-earphones-green',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 39900, // ₹399.00
    originalPricePaise: 79900, // ₹799.00
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 295,
    stock: 70,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-LEAD-AMB-GRN-05',
    description: 'Unique matte forest green wired earphones with universal 3.5mm jack. Delivers warm acoustic mids, crisp highs, and an in-line HD microphone for clear voice calls.',
    features: [
      'Earth-toned Deep Forest Green matte finish with durable rubberized strain reliefs',
      'Universal 3.5mm audio jack works seamlessly with laptops, PCs, consoles, and phones',
      'Noise-reducing silicone ear tips provide a snug acoustic chamber',
      'Lightweight cable that will not weigh down or tug during extended use'
    ],
    specs: {
      'Jack': 'Universal 3.5mm Audio Connector',
      'Frequency Response': '20Hz - 20,000Hz',
      'Driver': '10mm Balanced Dynamic Driver',
      'Length': '1.2m Anti-Tangle Cable',
      'Color': 'Deep Forest Green',
      'Weight': '14 grams'
    },
    images: [
      '/public/images/leads/ambrane_green_35mm.jpg',
      '/public/assets/aistudio/51Uh52zIEkL._SL263_QL70__ff3d3859.jpg'
    ],
    warranty: '6 Months Brand Warranty'
  },
  {
    id: 'prod-ld-zeb-navy',
    name: 'Zyntra AcousticFlow 3.5mm Wired Earphones (Navy Blue)',
    slug: 'zyntra-acousticflow-35mm-wired-earphones-navy',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 44900, // ₹449.00
    originalPricePaise: 89900, // ₹899.00
    discountPercentage: 50,
    rating: 4.8,
    reviewCount: 340,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-ZEB-NVY-06',
    description: 'Distinctive ergonomic stem earphones in deep metallic navy blue. Features high-sensitivity microphones, clear acoustic separation, and comfortable silicone ear cushions.',
    features: [
      'Dual-tone Navy Blue & Graphite Grey premium finish',
      'Optimized stem profile keeps the in-line microphone close to your mouth for crystal calls',
      'Enhanced bass reflex acoustic cavity for rich, punchy instrumentals',
      'Standard 3.5mm connector compatible with audio interfaces, laptops, and tablets'
    ],
    specs: {
      'Jack': '3.5mm 4-Pole Stereo Pin',
      'Driver': '10mm Dynamic Neodymium',
      'Microphone': 'Built-in ENC Voice Mic',
      'Length': '1.2m TPE Cord',
      'Color': 'Navy Blue & Titanium Grey',
      'Weight': '15 grams'
    },
    images: [
      '/public/images/leads/zebronics_navy_35mm.jpg',
      '/public/assets/aistudio/images__36__38c5a0f1.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-ld-black-coiled',
    name: 'Zyntra ClassicStudio 3.5mm In-Ear Earphones (Classic Black)',
    slug: 'zyntra-classicstudio-35mm-inear-earphones-black',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 34900, // ₹349.00
    originalPricePaise: 69900, // ₹699.00
    discountPercentage: 50,
    rating: 4.7,
    reviewCount: 280,
    stock: 90,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-LEAD-BLK-COIL-07',
    description: 'Time-tested balanced in-ear earphones with flexible coiled cable design and gold-plated 3.5mm jack. High durability, zero-battery requirement, and immediate plug-and-play fidelity.',
    features: [
      'Flexible anti-kink coiled cable design prevents internal copper strand breakage',
      'Gold-plated 3.5mm stereo mini-jack for corrosion resistance',
      'True-to-life balanced soundstage ideal for podcasts, acoustic music, and daily calls',
      'Compact lightweight earbud housings that fit flush inside the ear'
    ],
    specs: {
      'Jack': '3.5mm Gold-Plated Mini Plug',
      'Acoustic Unit': '9mm Composite Dynamic Driver',
      'Cable': 'Coiled Anti-Break Elastic Lead',
      'Length': '1.2 Meters',
      'Color': 'Classic Matte Black',
      'Weight': '13 grams'
    },
    images: [
      '/public/images/leads/classic_black_coiled_35mm.jpg',
      '/public/assets/aistudio/images__37__4f1cf0d9.jpg'
    ],
    warranty: '6 Months Brand Warranty'
  },
  {
    id: 'prod-ld-3',
    name: 'Zyntra Classic 3.5mm Stereo Audio Lead with In-Line Mic',
    slug: 'zyntra-classic-35mm-stereo-audio-lead',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 69900, // ₹699.00
    originalPricePaise: 129900, // ₹1,299.00
    discountPercentage: 46,
    rating: 4.9,
    reviewCount: 640,
    stock: 75,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-35MM-03',
    description: 'High-fidelity geometric in-ear stereo audio lead with integrated mic and volume slider. Gold-plated 3.5mm connector ensures zero signal degradation across phones, laptops, and tablets.',
    features: [
      'Engineered around natural ear canal geometry for long-duration acoustic comfort',
      'High-performance copper wire maximizes sound transmission and eliminates static',
      'In-line remote with tactile volume buttons, call answer, and music skip',
      'Standard 3.5mm gold-plated universal headphone jack lead'
    ],
    specs: {
      'Type': '3.5mm Auxiliary Stereo Audio Lead',
      'Length': '1.2m Anti-Tangle TPE Cord',
      'Microphone': 'Built-in In-Line Remote & HD Mic',
      'Compatibility': 'Universal 3.5mm Aux Audio Ports',
      'Color': 'Glossy Arctic White'
    },
    images: [
      '/public/images/leads/earpods_35mm_classic.webp'
    ],
    warranty: '1 Year Brand Doorstep Warranty'
  },
  {
    id: 'prod-ld-4',
    name: 'Zyntra Lightning Digital Audio Lead with Hard Travel Case',
    slug: 'zyntra-lightning-digital-audio-lead-case',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 99900, // ₹999.00
    originalPricePaise: 179900, // ₹1,799.00
    discountPercentage: 44,
    rating: 4.8,
    reviewCount: 580,
    stock: 60,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-LTG-CASE',
    description: 'Direct Lightning digital connection audio lead delivering lossless 24-bit studio audio. Includes transparent travel protective winder case to prevent cable knots.',
    features: [
      'Digital direct Lightning connection delivering pure lossless 24-bit audio stream',
      'Transparent travel winder case keeps cable organized and knot-free',
      'Inline 3-button controller for volume, calls, and Siri activation',
      'Compatible with iPhone and iPad models featuring Lightning ports'
    ],
    specs: {
      'Connector': '8-Pin Lightning Digital Interface',
      'Case': 'Transparent Acrylic Winder Travel Case',
      'Audio Quality': '24-bit Lossless Digital Sound',
      'Length': '1.2m Durable TPE',
      'Color': 'Arctic White'
    },
    images: [
      '/public/images/leads/earpods_lightning_case.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-ld-5',
    name: 'Zyntra MFi Certified Lightning Stereo Earphone Lead (Retail Pack)',
    slug: 'zyntra-retail-pack-lightning-stereo-lead',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 119900, // ₹1,199.00
    originalPricePaise: 199900, // ₹1,999.00
    discountPercentage: 40,
    rating: 4.9,
    reviewCount: 490,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-LTG-CRYSTAL',
    description: 'Official factory retail pack wired digital Lightning audio lead. Sealed in premium crystal storage case with integrated cable spool and low-impedance copper pins.',
    features: [
      'Official retail packaging with reusable crystal display storage case',
      'Lightning digital audio with built-in digital-to-analog converter (DAC)',
      'Acoustic vents for deeper, richer bass and lower distortion at high volumes',
      'In-line microphone with call answer and volume rocker keys'
    ],
    specs: {
      'Packaging': 'Clear Crystal Display Box with Cable Spool',
      'Connector': '8-Pin Lightning Digital Interface',
      'Audio': 'Lossless HD Digital Stereo',
      'Length': '1.2m High-Elastic TPE',
      'Color': 'Pure White'
    },
    images: [
      '/public/images/leads/earpods_lightning_retail_pack.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-ld-6',
    name: 'Zyntra OEM Edition Wired Stereo Earphone Lead (Boxed)',
    slug: 'zyntra-oem-edition-wired-audio-lead-box',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 84900, // ₹849.00
    originalPricePaise: 149900, // ₹1,499.00
    discountPercentage: 43,
    rating: 4.7,
    reviewCount: 380,
    stock: 70,
    isFeatured: false,
    isNewArrival: false,
    sku: 'ZYN-LEAD-OEM-BOX',
    description: 'Factory boxed wired stereo audio lead with high fidelity 14.2mm composite drivers, built-in remote, and universal 3.5mm plug for mobile devices and PCs.',
    features: [
      'Delivered in genuine sealed presentation box with paperwork',
      'High clarity vocals and rich acoustic instrumental separation',
      'Universal audio plug compatible across laptops, tablets, and phones',
      'Sweat-resistant matte wire cable prevents sticking during usage'
    ],
    specs: {
      'Driver Size': '14.2mm Dynamic Acoustic Unit',
      'Packaging': 'Official Retail Presentation Box',
      'Plug': 'Universal 3.5mm Stereo Jack',
      'Length': '1.2m Anti-Winding TPE Wire',
      'Color': 'Arctic White'
    },
    images: [
      '/public/images/leads/earpods_official_box.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-ld-7',
    name: 'Zyntra Type-C Bass In-Ear Audio Lead with Silicone Tips',
    slug: 'zyntra-typec-bass-in-ear-audio-lead',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 79900, // ₹799.00
    originalPricePaise: 139900, // ₹1,399.00
    discountPercentage: 43,
    rating: 4.8,
    reviewCount: 430,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-TYPEC-BASS',
    description: 'Designed specifically for modern smartphones without 3.5mm jacks. USB-C high-resolution digital DAC audio lead with soft isolating silicone ear tips and deep dynamic bass.',
    features: [
      'USB-C digital interface with 24-bit / 96kHz DAC audio chip',
      'Noise-isolating soft silicone tips block external ambient noise effectively',
      'Reinforced strain-relief joints prevent cable fraying at the Type-C plug',
      '3-button full function remote control with high-sensitivity microphone'
    ],
    specs: {
      'Interface': 'Reversible USB Type-C Digital Plug',
      'DAC Chip': '24-bit 96kHz Hi-Res Digital Audio',
      'Ear Tips': 'Ergonomic In-Ear Silicone (S/M/L included)',
      'Length': '1.25m Reinforced TPE',
      'Color': 'White & Metallic Chrome'
    },
    images: [
      '/public/images/leads/typec_in_ear_silicone.jpg'
    ],
    warranty: '1 Year Doorstep Replacement Warranty'
  },
  {
    id: 'prod-ld-8',
    name: 'Zyntra 3.5mm Auxiliary Earphone Lead with Jewel Box',
    slug: 'zyntra-35mm-earphone-lead-jewel-box',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 74900, // ₹749.00
    originalPricePaise: 129900, // ₹1,299.00
    discountPercentage: 42,
    rating: 4.8,
    reviewCount: 390,
    stock: 55,
    isFeatured: false,
    isNewArrival: false,
    sku: 'ZYN-LEAD-35MM-JEWEL',
    description: 'Classic 3.5mm wired stereo earphone lead encased in an ultra-compact snap-shut jewel travel case. Keep your cord pristine, knot-free, and protected inside your pocket or backpack.',
    features: [
      'Snap-shut hard plastic jewel case protects cord and earphones from crushing',
      'Gold-plated 3.5mm connector ensures static-free crystal audio',
      'Balanced sound tuning with clear mids and punchy lower frequencies',
      'Universal compatibility with laptops, desktop audio, tablets, and phones'
    ],
    specs: {
      'Case': 'Transparent Snap-Shut Jewel Traveling Box',
      'Connector': '3.5mm Gold-Plated Aux Jack',
      'Frequency Response': '20Hz - 20,000Hz',
      'Length': '1.2m',
      'Color': 'White'
    },
    images: [
      '/public/images/leads/earpods_35mm_jewel_box.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-ld-9',
    name: 'Zyntra MFi Certified Digital Lightning Hi-Fi Audio Lead',
    slug: 'zyntra-mfi-certified-digital-lightning-audio-lead',
    brand: 'Zyntra Audio',
    category: 'leads',
    pricePaise: 124900, // ₹1,249.00
    originalPricePaise: 209900, // ₹2,099.00
    discountPercentage: 40,
    rating: 4.9,
    reviewCount: 520,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-LEAD-MFI-LTG-09',
    description: 'Certified MFi Lightning wired audio lead with C100 digital audio chipset. Direct plug-and-play compatibility across all Lightning iPhone and iPad models without pop-ups.',
    features: [
      'Certified Apple MFi C100 digital sound chipset for 100% pop-up free performance',
      'Lossless 48kHz digital stereo audio stream direct from device lightning port',
      'Integrated Siri voice control button and high-sensitivity electret microphone',
      'Tough oxygen-free copper core wire with high-density shielding'
    ],
    specs: {
      'Chipset': 'Apple MFi Certified C100 Lightning Chip',
      'Compatibility': 'iPhone 14/13/12/11/X/8/7, iPad Air, iPad Mini',
      'Microphone': 'HD Condenser Mic with SIRI Support',
      'Length': '1.2m Oxygen-Free Copper',
      'Color': 'Glossy Arctic White'
    },
    images: [
      '/public/images/leads/earpods_mfi_lightning.webp'
    ],
    warranty: '1 Year Comprehensive Brand Warranty'
  },
  {
    id: 'prod-tb-1',
    name: 'Samsung Galaxy Tab A11+ 11" Vivid Display Tablet',
    slug: 'samsung-galaxy-tab-a11-plus-tablet',
    brand: 'Samsung',
    category: 'tablets',
    pricePaise: 1999900, // ₹19,999.00
    originalPricePaise: 2499900, // ₹24,999.00
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 312,
    stock: 28,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-TAB-A11P-SLATE',
    description: 'Immersive entertainment and all-day multitasking. Featuring an 11-inch WUXGA+ 90Hz vivid display, quad speakers powered by Dolby Atmos, robust Octa-core processor, and long-lasting 7040 mAh battery.',
    features: [
      '11" 90Hz WUXGA+ (1920 x 1200) Vivid Eye-Comfort Display',
      'Quad speakers tuned with Dolby Atmos 3D surround sound',
      'Fast 6nm Octa-core processor with Samsung One UI seamless multitasking',
      '7040 mAh battery with 15W Adaptive Fast Charging support',
      'Sleek 6.9mm slim metal unibody in signature Graphite Slate finish'
    ],
    specs: {
      'Screen': '11" WUXGA+ 90Hz, 16M Colors',
      'Processor': 'Exynos Octa-Core 2.2GHz 6nm',
      'RAM & Storage': '6GB RAM + 128GB Storage (expandable up to 1TB)',
      'Battery': '7040 mAh Fast Charging',
      'Audio': 'Quad Speakers with Dolby Atmos',
      'Cameras': '8MP Rear AF + 5MP Ultra-wide Front'
    },
    images: [
      '/public/images/tablets/galaxy_tab_a11_plus.png'
    ],
    warranty: '1 Year Brand Manufacturer Warranty'
  },
  {
    id: 'prod-tb-2',
    name: 'Xiaomi Pad 8 11.2" 3.2K 144Hz Flagship Android Tablet',
    slug: 'xiaomi-pad-8-flagship-tablet',
    brand: 'Xiaomi',
    category: 'tablets',
    pricePaise: 2999900, // ₹29,999.00
    originalPricePaise: 3999900, // ₹39,999.00
    discountPercentage: 25,
    rating: 4.9,
    reviewCount: 425,
    stock: 22,
    isFeatured: true,
    isNewArrival: true,
    sku: 'XIA-PAD-8-GRAPHITE',
    description: "India's slimmest flagship Android tablet 2026. Equipped with Snapdragon 8s Gen 4 mobile platform, 3.2K 144Hz 68-Billion colour display, massive 9200 mAh 2-day battery, and Xiaomi HyperAI workstation suite.",
    features: [
      '11.2" 3.2K (3200 x 2136) 144Hz 68 Billion Colors CrystalClear Display',
      'Flagship Snapdragon 8s Gen 4 Mobile Platform for console-tier graphics',
      'Massive 9200 mAh 2-day battery with 67W Turbo Charge',
      'Xiaomi HyperAI with live meeting notes, smart sketch and focus pen support',
      'Ultra-thin aerospace alloy chassis with magnetic Focus Pen Pro charging'
    ],
    specs: {
      'Screen': '11.2" 3.2K 144Hz 68B Colors, HDR10+ / Dolby Vision',
      'Processor': 'Snapdragon 8s Gen 4 Octa-core 4nm',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Battery': '9200 mAh with 67W Turbo Charging',
      'Pen Support': 'Xiaomi Focus Pen Pro compatible (4096 pressure levels)',
      'OS': 'Xiaomi HyperOS 2.0 with HyperAI'
    },
    images: [
      '/public/images/tablets/xiaomi_pad_8_flagship.png'
    ],
    warranty: '1 Year Doorstep Brand Warranty'
  },
  {
    id: 'prod-tb-3',
    name: 'Redmi Pad 2 10.9" 2.5K Brilliance 9000mAh Tablet (Sky Blue)',
    slug: 'redmi-pad-2-sky-blue-tablet',
    brand: 'Redmi',
    category: 'tablets',
    pricePaise: 1599900, // ₹15,999.00
    originalPricePaise: 2199900, // ₹21,999.00
    discountPercentage: 27,
    rating: 4.8,
    reviewCount: 388,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'RED-PAD-2-SKYBLUE',
    description: 'Best in segment Android entertainment tablet. Boasts a 10.9" 2.5K Brilliance display, 9000 mAh XL battery, AI-powered system optimizer, and Redmi Smart Pen compatibility in stunning Sky Blue.',
    features: [
      '10.9" 2.5K Brilliance High-Definition display with TÜV Rheinland eye comfort',
      'Class-leading 9000 mAh XL battery delivering up to 18 hours continuous video',
      'AI-powered background management for ultra-smooth app switching',
      'Quad speakers with Dolby Atmos surround audio',
      'Redmi Smart Pen precision writing and drawing ready'
    ],
    specs: {
      'Screen': '10.9" 2.5K (2560 x 1600) 90Hz IPS LCD',
      'Processor': 'MediaTek Helio G99 Octa-core 6nm',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable up to 1TB)',
      'Battery': '9000 mAh with 33W Fast Charge',
      'Cameras': '8MP AI Rear Camera with f/2.0 aperture + 5MP Front',
      'Color': 'Sky Blue Metallic Finish'
    },
    images: [
      '/public/images/tablets/redmi_pad_2_sky_blue.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-tb-4',
    name: 'Samsung Galaxy Tab S12 Ultra 14.6" Dynamic AMOLED 2X with S-Pen',
    slug: 'samsung-galaxy-tab-s12-ultra-flagship',
    brand: 'Samsung',
    category: 'tablets',
    pricePaise: 8999900, // ₹89,999.00
    originalPricePaise: 10999900, // ₹1,09,999.00
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 176,
    stock: 14,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-TAB-S12U-GRAPHITE',
    description: 'The ultimate creative and workstation tablet. Colossal 14.6-inch Dynamic AMOLED 2X 120Hz display with ultra-low reflection Armor Aluminum frame, bundled Bluetooth S Pen, and dual rear cameras.',
    features: [
      '14.6" Dynamic AMOLED 2X (2960 x 1848) 120Hz display with anti-reflective coating',
      'Bundled IP68-rated ultra-low-latency Bluetooth S Pen included in the box',
      'Snapdragon 8 Gen 3 for Galaxy processor with 4nm ray-tracing GPU',
      '11,200 mAh monstrous battery with 45W Super Fast Charging 2.0',
      'Samsung DeX desktop workstation mode with secondary wireless display support'
    ],
    specs: {
      'Screen': '14.6" Dynamic AMOLED 2X 120Hz HDR10+',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy 4nm',
      'RAM & Storage': '12GB RAM + 512GB UFS 4.0 Storage',
      'Battery': '11,200 mAh with 45W Fast Charging',
      'Cameras': 'Dual 13MP + 8MP Ultra-wide Rear + Dual 12MP Front',
      'Included Accessories': 'Galaxy S Pen Stylus'
    },
    images: [
      '/public/images/tablets/galaxy_tab_s12_ultra.jpg'
    ],
    warranty: '1 Year Comprehensive Brand Warranty'
  },
  {
    id: 'prod-tb-5',
    name: 'iBall iTAB MovieZ 10.1" HD Cinema Tablet (Champagne Gold)',
    slug: 'iball-itab-moviez-cinema-tablet',
    brand: 'iBall',
    category: 'tablets',
    pricePaise: 849900, // ₹8,499.00
    originalPricePaise: 1199900, // ₹11,999.00
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 245,
    stock: 36,
    isFeatured: false,
    isNewArrival: false,
    sku: 'IBL-TAB-MOV-GOLD',
    description: 'Engineered specifically for binge-watching and family entertainment. Features a 10.1" Full HD IPS cinema display, high-output dual front-firing stereo speakers, and metallic Champagne Gold unibody.',
    features: [
      '10.1" Full HD IPS 1920x1200 Cinema View Display with wide viewing angles',
      'Dual front-firing dynamic stereo speakers with enhanced vocal clarity',
      '7000 mAh lithium-polymer battery for 12 hours non-stop movies',
      'Full metallic slim chassis in elegant Champagne Gold finish',
      'Dedicated microSD slot supporting up to 256GB movie storage'
    ],
    specs: {
      'Screen': '10.1" Full HD IPS 1920 x 1200',
      'Processor': 'Octa-core 1.6GHz High-Efficiency Chipset',
      'RAM & Storage': '4GB RAM + 64GB Internal Storage (expandable 256GB)',
      'Battery': '7000 mAh Li-Po Battery',
      'Speakers': 'Front Dual Stereo Cinematic Sound',
      'Color': 'Champagne Gold'
    },
    images: [
      '/public/images/tablets/itab_moviez_champagne_gold.webp'
    ],
    warranty: '1 Year Brand Doorstep Service'
  },
  {
    id: 'prod-tb-6',
    name: 'Zyntra AirTab Pro 8.4" Periwinkle Blue 4G LTE Calling Tablet',
    slug: 'zyntra-airtab-pro-8-periwinkle-blue',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 1199900, // ₹11,999.00
    originalPricePaise: 1699900, // ₹16,999.00
    discountPercentage: 29,
    rating: 4.7,
    reviewCount: 189,
    stock: 30,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-TAB-AIR-BLUE',
    description: 'Compact, palm-friendly 8.4-inch portable studio tablet with Dual 4G VoLTE SIM calling, 2K crystal display, triple-lens aesthetic camera module, and soft Periwinkle Blue matte unibody.',
    features: [
      '8.4" 2K (2048 x 1200) Ultra-Retina IPS display with one-hand form factor',
      'Dual 4G VoLTE SIM card slots for phone calls, WhatsApp & cellular GPS',
      '6000 mAh high-density battery with 18W Type-C quick charging',
      'Triple rear camera array with LED flash for document scanning',
      'TÜV eye-care reading mode and split-screen note taking'
    ],
    specs: {
      'Screen': '8.4" 2K IPS 2048 x 1200 High Density',
      'Processor': 'Octa-core 2.0GHz 64-bit Processor',
      'RAM & Storage': '6GB RAM + 128GB ROM (expandable 512GB)',
      'Cellular': 'Dual 4G VoLTE SIM + Wi-Fi Dual Band',
      'Battery': '6000 mAh Fast Charge',
      'Color': 'Periwinkle Blue Matte'
    },
    images: [
      '/public/images/tablets/pad_pro_periwinkle_blue.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-tb-7',
    name: 'Zyntra EdgeTab 10.5" Quad-Camera Silver Edition Tablet',
    slug: 'zyntra-edgetab-105-silver-edition',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 1449900, // ₹14,499.00
    originalPricePaise: 1999900, // ₹19,999.00
    discountPercentage: 28,
    rating: 4.8,
    reviewCount: 204,
    stock: 25,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-TAB-EDGE-SLV',
    description: 'Refined precision in aerospace silver. 10.5" FHD+ micro-edge bezel display, quad-camera studio array, dual stereo speakers, and 8000 mAh battery for all-day education and productivity.',
    features: [
      '10.5" FHD+ (1920 x 1200) Micro-Edge narrow bezel display with 450 nits',
      'Quad-camera rear studio cluster with ultra-wide and document scanner lens',
      '8000 mAh endurance battery with intelligent power-saving algorithms',
      'Dual stereo speakers with Smart PA digital amplifier',
      'Aerospace grade brushed silver alloy back cover'
    ],
    specs: {
      'Screen': '10.5" FHD+ 1920 x 1200 IPS Low-Glare',
      'Processor': 'Octa-core 2.2GHz Performance Chip',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable 1TB)',
      'Battery': '8000 mAh with Type-C Fast Charging',
      'Cameras': 'Quad Rear Camera System with Flash + 8MP Front',
      'Color': 'Brushed Aerospace Silver'
    },
    images: [
      '/public/images/tablets/air_tab_silver_edition.jpg'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-tb-8',
    name: 'Zyntra Tab 10 Pink Edition (Android 15 · 12GB+64GB with Stylus & Tri-Fold Stand)',
    slug: 'zyntra-tab-10-pink-edition-stylus-bundle',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 899900, // ₹8,999.00
    originalPricePaise: 1499900, // ₹14,999.00
    discountPercentage: 40,
    rating: 4.8,
    reviewCount: 168,
    stock: 28,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-TAB-10-PNK-BNDL',
    description: 'Chic Pastel Pink edition featuring Android 15, responsive capacitive stylus pen, and color-matched magnetic tri-fold origami viewing stand case. Powered by 12GB RAM (6GB + 6GB Boost) and 64GB storage for seamless entertainment, study, and creative drawing.',
    features: [
      '10.1" IPS HD Eye-Care display with reading and night light modes',
      'Bundled with matching Pastel Pink magnetic tri-fold stand case & touch stylus pen',
      'Latest Android 15 OS with Google Play Store & multi-window split screen',
      '12GB RAM (6GB hardware + 6GB virtual expansion) + 64GB storage (expandable to 512GB)',
      '6000 mAh long-lasting battery with Type-C fast charging and dual stereo speakers'
    ],
    specs: {
      'Screen': '10.1" IPS HD (1280 x 800) Eye-Care Display',
      'Operating System': 'Android 15',
      'RAM & Storage': '12GB RAM (6+6GB) + 64GB Storage',
      'Accessories Included': 'Pastel Pink Tri-Fold Magnetic Case + Stylus Pen',
      'Battery': '6000 mAh with Type-C Quick Charging',
      'Cameras': '8MP Rear Camera + 5MP Front Camera with Mic',
      'Color': 'Pastel Baby Pink'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_1_pink_stand.png'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-tb-9',
    name: 'Zyntra WorkStation Tab 10 Pro Bundle (Android 15 · 12GB+64GB with Wireless Keyboard & Mouse)',
    slug: 'zyntra-workstation-tab-10-pro-keyboard-mouse-bundle',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 1099900, // ₹10,999.00
    originalPricePaise: 1799900, // ₹17,999.00
    discountPercentage: 39,
    rating: 4.9,
    reviewCount: 312,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-TAB-10-WRKSTN-BLK',
    description: 'Complete 2-in-1 desktop workstation tablet system. Comes loaded with Bluetooth wireless keyboard, optical mouse, dual-angle kickstand protective shell, and tempered screen protector. Run office suites, attend video conferences, and stream in crisp HD.',
    features: [
      'Full Productivity Kit: Wireless Bluetooth keyboard, optical mouse, stylus, kickstand case & screen guard',
      '10.1" High-definition vibrant display with wide viewing angles',
      'Android 15 with Desktop PC mode and multi-tasking floating windows',
      '12GB RAM (6GB + 6GB expansion) + 64GB storage, expandable up to 1TB via microSD',
      'High-capacity 8000 mAh battery for up to 12 hours continuous productivity'
    ],
    specs: {
      'Screen': '10.1" IPS HD Multi-Touch 16:10 Display',
      'Operating System': 'Android 15',
      'RAM & Storage': '12GB RAM (6+6GB) + 64GB ROM',
      'Workstation Bundle': 'Bluetooth Keyboard + Optical Mouse + Kickstand Case + Screen Guard + Stylus',
      'Battery': '8000 mAh Li-Po with Type-C Fast Charger',
      'Connectivity': 'Dual-band Wi-Fi + Bluetooth 5.2 + Type-C OTG',
      'Color': 'Matte Onyx Black'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_2_black_bundle.png'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-tb-10',
    name: 'IKALL N19 10" 4G LTE Calling Tablet (Space Grey · Dual Camera & Metallic Finish)',
    slug: 'ikall-n19-10-inch-4g-lte-calling-tablet',
    brand: 'IKALL',
    category: 'tablets',
    pricePaise: 799900, // ₹7,999.00
    originalPricePaise: 1299900, // ₹12,999.00
    discountPercentage: 38,
    rating: 4.7,
    reviewCount: 245,
    stock: 22,
    isFeatured: false,
    isNewArrival: true,
    sku: 'IKALL-TAB-N19-GRY',
    description: 'Genuine IKALL N19 10-inch Android tablet with dual SIM 4G LTE VoLTE calling capability. Engineered with premium aerospace metallic back finish, dual camera rear array, front selfie shooter, and vibrant wide-angle IPS panel for work and multimedia.',
    features: [
      'Dual SIM 4G VoLTE cellular calling support — use as a large smartphone and work tablet',
      '10.0" IPS cinematic widescreen display (1280 x 800) with vivid color reproduction',
      'Dual rear camera setup with LED flash + crisp front-facing video conferencing lens',
      'Octa-core high-efficiency processor with Google Play and Android certified services',
      '6000 mAh battery supporting all-day calling, WhatsApp, and multimedia streaming'
    ],
    specs: {
      'Screen': '10.0" IPS HD Glass Multi-Touch Display',
      'Network': 'Dual SIM 4G LTE VoLTE Calling + Wi-Fi',
      'RAM & Storage': '4GB RAM + 64GB Storage (expandable up to 256GB)',
      'Rear Camera': 'Dual Camera Array with LED Flash',
      'Front Camera': '5MP Wide-Angle Video Calling Camera',
      'Operating System': 'Android OS with Google Play Store',
      'Color': 'Space Grey Brushed Metal'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_3_n19_duo.png'
    ],
    warranty: '1 Year IKALL Manufacturer Warranty'
  },
  {
    id: 'prod-tb-11',
    name: 'Zyntra Tab 10 Sky Blue 5G WiFi 6 Studio Bundle (Android 15 · 12GB+64GB · Widevine L1 Netflix)',
    slug: 'zyntra-tab-10-sky-blue-5g-wifi6-bundle',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 1149900, // ₹11,499.00
    originalPricePaise: 1899900, // ₹18,999.00
    discountPercentage: 39,
    rating: 4.9,
    reviewCount: 420,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ZYN-TAB-10-SKY-5GWIFI',
    description: 'Flagship studio edition in luminous Sky Blue. Features high-speed 5G WiFi 6 connectivity, official Widevine L1 certification for Full HD Netflix and Prime Video, and full matching sky blue keyboard and mouse studio setup.',
    features: [
      'Widevine L1 Certified for Full HD 1080p Netflix, Disney+ Hotstar & Amazon Prime Video',
      'Next-Gen 5G WiFi 6 for ultra-fast downloads and buffer-free 4K streaming',
      'Matching Sky Blue bundle: wireless keyboard, silent optical mouse, active stylus & screen protector',
      'Android 15 with 12GB RAM (6GB physical + 6GB boost) and 64GB storage',
      '7500 mAh battery with rapid Type-C charging and dual tuned stereo speakers'
    ],
    specs: {
      'Screen': '10.1" IPS HD Widevine L1 Certified',
      'WiFi & Connectivity': '5G WiFi 6 (802.11ax) + Bluetooth 5.3',
      'Operating System': 'Android 15',
      'RAM & Storage': '12GB RAM (6+6GB) + 64GB ROM (expandable 1TB)',
      'Accessories Included': 'Sky Blue Wireless Keyboard + Mouse + Stylus + Screen Guard',
      'Battery': '7500 mAh High-Density Cell',
      'Color': 'Sky Blue Pastel Metallic'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_4_skyblue_bundle.png'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-tb-12',
    name: 'Zyntra PlayTab 10.1" Android OS Smart Tablet (Black Origami Folio Stand Case)',
    slug: 'zyntra-playtab-101-origami-folio-tablet',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 699900, // ₹6,999.00
    originalPricePaise: 1099900, // ₹10,999.00
    discountPercentage: 36,
    rating: 4.6,
    reviewCount: 189,
    stock: 30,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-TAB-PLAY-FL-01',
    description: 'Clean modern aesthetic featuring pure white display bezels paired with a matte black magnetic origami folio cover that folds into both typing and movie watching angles. Ideal for school classes, Zoom meetings, and reading.',
    features: [
      '10.1" Clean white-bezel IPS display with antiglare protective finish',
      'Included origami multi-fold magnetic stand cover for typing and hands-free video',
      'Front-facing HD camera with stereo microphones for smooth online education & meetings',
      'Android OS with preloaded Google Classroom, YouTube Kids & office apps',
      '6000 mAh battery delivering up to 10 hours continuous video playback'
    ],
    specs: {
      'Screen': '10.1" IPS Multi-Touch HD Screen (1280 x 800)',
      'Case': 'Black Magnetic Origami Folio Stand Included',
      'RAM & Storage': '4GB RAM + 64GB Storage (microSD expandable)',
      'Operating System': 'Android OS',
      'Battery': '6000 mAh with Type-C Fast Charging',
      'Camera': 'HD Front & Rear Cameras with Flash',
      'Color': 'Pure White Bezel with Onyx Folio Case'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_5_black_folio.png'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  {
    id: 'prod-tb-13',
    name: 'Lenovo Tab M9 9" HD Reading & Entertainment Tablet (Arctic Grey · Dolby Atmos)',
    slug: 'lenovo-tab-m9-9-inch-arctic-grey-dolby-atmos',
    brand: 'Lenovo',
    category: 'tablets',
    pricePaise: 999900, // ₹9,999.00
    originalPricePaise: 1499900, // ₹14,999.00
    discountPercentage: 33,
    rating: 4.8,
    reviewCount: 560,
    stock: 18,
    isFeatured: true,
    isNewArrival: true,
    sku: 'LEN-TAB-M9-GRY',
    description: 'Original Lenovo Tab M9 engineered for portable cinematic entertainment and reading. Features dual speakers tuned with Dolby Atmos spatial audio, MediaTek Helio G80 octa-core processor, TÜV Rheinland certified eye-friendly display, and sleek dual-tone metal body.',
    features: [
      'Dual stereo speakers with immersive Dolby Atmos spatial audio tuning',
      '9.0" HD IPS display with TÜV Rheinland Eye Care and dedicated Reading Mode',
      'MediaTek Helio G80 Octa-Core processor for fluid navigation and casual gaming',
      'Premium metal dual-tone Arctic Grey finish with only 7.99mm slim profile & 344g lightweight',
      'Fast facial recognition unlock and Google Kids Space integration'
    ],
    specs: {
      'Screen': '9.0" HD (1340 x 800) IPS 400 Nits TÜV Low Blue Light',
      'Processor': 'MediaTek Helio G80 Octa-Core (Up to 2.0GHz)',
      'Audio': 'Dual Stereo Speakers with Dolby Atmos',
      'RAM & Storage': '4GB LPDDR4x RAM + 64GB Storage (expandable up to 2TB)',
      'Battery': '5100 mAh (up to 13 hours video playback)',
      'Camera': '8MP Auto-Focus Rear Camera + 2MP Front Camera',
      'Color': 'Arctic Grey Dual-Tone Metal'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_6_lenovo_duo.png'
    ],
    warranty: '1 Year Lenovo Manufacturer Warranty'
  },
  {
    id: 'prod-tb-14',
    name: 'Zyntra ArmorTab 10" Rugged Shockproof Tablet (Android 14 · 8GB+32GB Diamond Grip Case)',
    slug: 'zyntra-armortab-10-rugged-shockproof-kickstand',
    brand: 'Zyntra Computing',
    category: 'tablets',
    pricePaise: 599900, // ₹5,999.00
    originalPricePaise: 899900, // ₹8,999.00
    discountPercentage: 33,
    rating: 4.7,
    reviewCount: 142,
    stock: 26,
    isFeatured: false,
    isNewArrival: true,
    sku: 'ZYN-TAB-ARMOR-10-GRY',
    description: 'Heavy-duty rugged tablet encased in an impact-absorbing diamond grip armor case with integrated kickstand. Built to endure accidental drops, outdoor use, kids learning, and everyday wear with Android 14 and 8GB RAM.',
    features: [
      'Heavy-duty shockproof bumper case with anti-slip diamond textured grip & fold-out kickstand',
      'Android 14.0 operating system with parental controls and safe browsing',
      '10.0" HD reinforced multi-touch screen with protective raised bezel edges',
      '8GB RAM (4GB + 4GB dynamic boost) + 32GB storage, expandable via microSD up to 256GB',
      '6000 mAh endurance battery with Type-C charging port'
    ],
    specs: {
      'Screen': '10.0" HD Multi-Touch with Drop-Resistant Frame',
      'Case': 'Integrated Diamond Grip Shockproof Armor with Kickstand',
      'Operating System': 'Android 14.0',
      'RAM & Storage': '8GB RAM (4+4GB) + 32GB ROM (expandable 256GB)',
      'Battery': '6000 mAh High-Capacity Li-Ion',
      'Camera': '5MP Rear + 2MP Front',
      'Color': 'Slate Grey Diamond Armor'
    },
    images: [
      '/public/images/tablets/new_arrivals/tablet_7_grey_kickstand.png'
    ],
    warranty: '1 Year Brand Replacement Warranty'
  },
  // =========================================================================
  // SMARTPHONES CATEGORY: PREMIUM LATEST LINEUP (ARRANGED HIGH TO LOW PRICE)
  // Brands: Apple, Samsung, Vivo, OPPO, Redmi, POCO, realme, realme Narzo, OnePlus
  // =========================================================================
  {
    id: 'prod-phone-galaxy-zfold8-ultra',
    name: 'Samsung Galaxy Z Fold8 Ultra 5G (Phantom Dark Purple · Dual AMOLED Foldable)',
    slug: 'samsung-galaxy-z-fold8-ultra-5g-purple',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 18299900, // ₹1,82,999.00
    originalPricePaise: 19999900, // ₹1,99,999.00
    discountPercentage: 8,
    rating: 5.0,
    reviewCount: 142,
    stock: 18,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-ZFOLD8-ULTRA-512',
    description: 'Built to outlast every fold. Ultra-premium titanium armored hinge, 8.0" Dynamic AMOLED 2X 120Hz folding screen with Gorilla Armor Glass, Qualcomm Snapdragon 8 Gen 4, 16GB RAM, 512GB Storage, and integrated Galaxy AI suite.',
    features: [
      '8.0" QXGA+ Dynamic AMOLED 2X 120Hz Inner Screen + 6.5" Cover AMOLED',
      'Qualcomm Snapdragon 8 Gen 4 for Galaxy (3nm) with AI NPU',
      'Titanium armored dual-rail flex hinge tested to over 300,000 folds',
      '200MP Quad ProVisual camera system with 100x Space Zoom',
      '6000mAh dual-cell battery with 45W super-fast wired & 15W wireless charging'
    ],
    specs: {
      'Display': '8.0" Main 120Hz Foldable + 6.5" Cover AMOLED (2600 nits)',
      'Processor': 'Snapdragon 8 Gen 4 Mobile Platform for Galaxy',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '6000 mAh Dual-Cell with 45W Fast Charging',
      'Camera': '200MP OIS Wide + 50MP Periscope (5x) + 12MP Ultra-Wide + Dual Under-Display',
      'Build': 'Titanium Armor Frame with IP48 Water Resistance'
    },
    images: [
      '/public/images/smartphones/new_arrivals/galaxy_zfold8_ultra_device.png',
      '/public/images/smartphones/new_arrivals/galaxy_zfold8_ultra_banner.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161140_823a0ca3.png'
    ],
    warranty: '1 Year Samsung India Warranty + 1 Year Screen Damage Protection'
  },
  {
    id: 'prod-phone-iphone18-promax',
    name: 'Apple iPhone 18 Pro Max (Titanium Silver White · A19 Pro 2nm Chip)',
    slug: 'apple-iphone-18-pro-max-silver-white',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 17390000, // ₹1,73,900.00
    originalPricePaise: 18990000, // ₹1,89,900.00
    discountPercentage: 8,
    rating: 5.0,
    reviewCount: 286,
    stock: 22,
    isFeatured: true,
    isNewArrival: true,
    sku: 'APL-IPH18PM-512-SLV',
    description: 'Latest launch. Uncompromising performance powered by the revolutionary A19 Pro 2nm silicon. Features 6.9" Super Retina XDR OLED with 120Hz ProMotion, aerospace titanium enclosure, and next-gen 48MP Triple Fusion camera with 5x periscope zoom.',
    features: [
      '6.9" Super Retina XDR OLED display with ProMotion 120Hz and 3000 nits peak',
      'Apple A19 Pro (2nm) chip with 6-core GPU and hardware ray tracing',
      'Next-generation 48MP Fusion main camera + 48MP Ultra-Wide + 48MP 5x Telephoto',
      'Tactile capacitive Camera Control button with two-stage shutter actuation',
      'Apple Intelligence built-in with on-device generative models and Siri upgrade'
    ],
    specs: {
      'Display': '6.9" Super Retina XDR OLED (120Hz ProMotion, Always-On)',
      'Processor': 'Apple A19 Pro 2nm Hexa-Core Silicon',
      'RAM & Storage': '8GB Unified RAM + 512GB NVMe Storage',
      'Battery': 'Up to 33 hours video playback with MagSafe 25W',
      'Camera': 'Triple 48MP Fusion System (Main, 5x Telephoto, Macro Ultra-Wide)',
      'Build': 'Grade 5 Titanium Band with Ceramic Shield Front'
    },
    images: [
      '/public/images/smartphones/new_arrivals/iphone_18_pro_max_device.png',
      '/public/images/smartphones/new_arrivals/iphone_18_pro_max_card.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_160952_cb0742b8.png'
    ],
    warranty: '1 Year Apple India Warranty'
  },
  {
    id: 'prod-phone-iphone17-promax',
    name: 'Apple iPhone 17 Pro Max (Sunset Bronze Titanium · A18 Pro · 6.9" OLED)',
    slug: 'apple-iphone-17-pro-max-sunset-bronze',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 14290000, // ₹1,42,900.00
    originalPricePaise: 15990000, // ₹1,59,900.00
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 410,
    stock: 19,
    isFeatured: true,
    isNewArrival: true,
    sku: 'APL-IPH17PM-256-BRZ',
    description: 'Upgrade now. Premium Sunset Bronze titanium edition with 6.9" edge-to-edge Super Retina XDR display, A18 Pro 3nm chipset, customizable Action Button, and cinematic 4K 120 fps Dolby Vision recording.',
    features: [
      '6.9" ProMotion OLED display with ultra-thin bezels and Dynamic Island',
      'Apple A18 Pro 3nm chip with hardware-accelerated ray tracing',
      'Sunset Bronze aerospace titanium body with textured matte glass back',
      '48MP Fusion camera with 5x Telephoto and studio-quality quad microphones',
      'Supports Apple Intelligence writing tools and Clean Up photo editing'
    ],
    specs: {
      'Display': '6.9" Super Retina XDR OLED (120Hz, 2000 nits outdoors)',
      'Processor': 'Apple A18 Pro (3nm Second Gen)',
      'RAM & Storage': '8GB RAM + 256GB Storage',
      'Battery': 'All-Day battery life with Qi2 and MagSafe wireless charging',
      'Camera': '48MP Main + 48MP Ultra-Wide + 12MP 5x Telephoto (Tetraprism)',
      'Build': 'Titanium Frame with Ceramic Shield Gen 2'
    },
    images: [
      '/public/images/smartphones/new_arrivals/iphone_17_pro_max_device.png',
      '/public/images/smartphones/new_arrivals/iphone_17_pro_max_card.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_160945_4efcbb21.png'
    ],
    warranty: '1 Year Apple India Warranty'
  },
  {
    id: 'prod-phone-iphone17-pro',
    name: 'Apple iPhone 17 Pro (Natural White Titanium · A18 Pro · Pro Performance)',
    slug: 'apple-iphone-17-pro-natural-white',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 12790000, // ₹1,27,900.00
    originalPricePaise: 13990000, // ₹1,39,900.00
    discountPercentage: 9,
    rating: 4.9,
    reviewCount: 368,
    stock: 24,
    isFeatured: true,
    isNewArrival: true,
    sku: 'APL-IPH17P-128-WHT',
    description: 'Pro performance in an elegant Natural White titanium silhouette. 6.3" ProMotion display, A18 Pro processor, 48MP camera suite, and seamless Apple Intelligence integration for the ultimate everyday power user.',
    features: [
      '6.3" Super Retina XDR 120Hz display with Always-On technology',
      'A18 Pro 3nm silicon with 6-core CPU and 6-core GPU',
      'Pro camera system with 48MP main sensor and second-generation sensor-shift OIS',
      'Camera Control button with haptic feedback for instant visual capture',
      'Subtle brushed titanium chassis with IP68 dust and water resistance'
    ],
    specs: {
      'Display': '6.3" Super Retina XDR OLED 120Hz ProMotion',
      'Processor': 'Apple A18 Pro 3nm Silicon',
      'RAM & Storage': '8GB RAM + 128GB Storage',
      'Battery': 'Up to 24 hours video playback with USB-C 3.0',
      'Camera': '48MP Main + 48MP Ultra-Wide + 12MP 3x Telephoto',
      'Build': 'Titanium Band with Ceramic Shield Front'
    },
    images: [
      '/public/images/smartphones/new_arrivals/iphone_17_pro_device.png',
      '/public/images/smartphones/new_arrivals/iphone_17_pro_card.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_160945_4efcbb21.png'
    ],
    warranty: '1 Year Apple India Warranty'
  },
  {
    id: 'prod-phone-oppo-findx8-pro-amber',
    name: 'OPPO Find X8 Pro 5G (Amber Orange Velvet · Hasselblad Quad Matrix)',
    slug: 'oppo-find-x8-pro-amber-orange',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 8999900, // ₹89,999.00
    originalPricePaise: 9999900, // ₹99,999.00
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 194,
    stock: 16,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OPP-FINDX8P-512-AMB',
    description: 'Flagship imaging excellence. Featuring dual periscope zoom cameras co-engineered with Hasselblad, MediaTek Dimensity 9400 (3nm) flagship processor, 16GB RAM, 512GB Storage, 5910mAh Glacier battery, and 80W SUPERVOOC charging.',
    features: [
      'Dual Periscope Telephoto (3x + 6x) with 50MP Sony LYT sensors & Hasselblad color science',
      'MediaTek Dimensity 9400 (3nm) with All-Big-Core architecture',
      '6.78" 1.5K Infinite View AMOLED display with 120Hz adaptive refresh & 4500 nits peak',
      '5910mAh Silicon-Carbon battery with 80W wired and 50W AIRVOOC wireless charging',
      'Dedicated Quick Button for instantaneous high-resolution snapshot captures'
    ],
    specs: {
      'Display': '6.78" 1.5K LTPO AMOLED 120Hz (4500 nits, Dolby Vision)',
      'Processor': 'MediaTek Dimensity 9400 Flagship (3nm)',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5910 mAh Silicon-Carbon with 80W SUPERVOOC + 50W Wireless',
      'Camera': 'Quad 50MP Hasselblad (50MP Main OIS + 50MP 3x Periscope + 50MP 6x Periscope + 50MP Ultra-Wide)',
      'Build': 'IP68 & IP69 Dust and High-Pressure Water Resistant'
    },
    images: [
      '/public/images/smartphones/new_arrivals/oppo_find_x8_pro_amber.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161449_523352e4.png'
    ],
    warranty: '1 Year OPPO India Comprehensive Warranty'
  },
  {
    id: 'prod-phone-galaxy-s25-plus-onyx',
    name: 'Samsung Galaxy S25+ 5G (Onyx Graphite Grey · Armor Aluminum · Galaxy AI)',
    slug: 'samsung-galaxy-s25-plus-onyx-grey',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 8499900, // ₹84,999.00
    originalPricePaise: 9499900, // ₹94,999.00
    discountPercentage: 11,
    rating: 4.8,
    reviewCount: 228,
    stock: 20,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-S25P-256-GRY',
    description: 'Festive Season Flagship. Features Qualcomm Snapdragon 8 Gen 4 processor, 6.7" Dynamic AMOLED 2X 120Hz flat display, 12GB RAM, 256GB storage, triple floating lens system, and enhanced Galaxy AI capabilities.',
    features: [
      '6.7" QHD+ Dynamic AMOLED 2X 120Hz display with Vision Booster (2600 nits)',
      'Qualcomm Snapdragon 8 Gen 4 for Galaxy with customized high-clock cores',
      'ProVisual Engine with 50MP Dual Pixel OIS and 30x Space Zoom',
      '4900mAh battery with 45W super-fast wired charging 2.0',
      'Enhanced Armor Aluminum 2.0 frame with Gorilla Glass Victus 2'
    ],
    specs: {
      'Display': '6.7" QHD+ Dynamic AMOLED 2X 120Hz (1-120Hz LTPO)',
      'Processor': 'Snapdragon 8 Gen 4 Mobile Platform for Galaxy',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Battery': '4900 mAh with 45W Wired & 15W Fast Wireless',
      'Camera': '50MP OIS Wide + 12MP Ultra-Wide + 10MP 3x Telephoto',
      'Build': 'Enhanced Armor Aluminum with IP68 Water Resistance'
    },
    images: [
      '/public/images/smartphones/new_arrivals/samsung_galaxy_onyx_grey.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161204_9d8ab2db.png'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-vivo-x200-pro-olive',
    name: 'Vivo X200 Pro 5G (Olive Forest Green · Zeiss 200MP APO Telephoto)',
    slug: 'vivo-x200-pro-olive-green-zeiss',
    brand: 'Vivo',
    category: 'smartphones',
    pricePaise: 7999900, // ₹79,999.00
    originalPricePaise: 8999900, // ₹89,999.00
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 176,
    stock: 15,
    isFeatured: true,
    isNewArrival: true,
    sku: 'VIV-X200P-512-GRN',
    description: 'Groundbreaking mobile cinematography with Zeiss 200MP APO floating periscope telephoto lens. Dimensity 9400 processor, 16GB RAM, 512GB storage, 6000mAh BlueVolt battery, and 4K 120fps HDR video recording.',
    features: [
      '200MP Zeiss APO Telephoto camera certified for chromatic-aberration-free portraits',
      'Sony LYT-818 50MP 1/1.28" true-color primary camera with VCS 3.0 technology',
      '6.78" 1.5K 8T LTPO Eye-Care AMOLED display with 4500 nits local peak brightness',
      '6000mAh high-density BlueVolt battery with 90W FlashCharge & 30W wireless',
      'V3+ custom imaging chip for hardware-level 4K cinematic portrait video'
    ],
    specs: {
      'Display': '6.78" 1.5K 8T LTPO AMOLED 120Hz (4500 nits peak)',
      'Processor': 'MediaTek Dimensity 9400 (3nm)',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '6000 mAh BlueVolt Battery with 90W FlashCharge',
      'Camera': '50MP Sony LYT-818 OIS + 200MP Zeiss APO 3.7x Telephoto + 50MP Ultra-Wide',
      'Build': 'Satin Matte Glass with IP68/IP69 Ingress Protection'
    },
    images: [
      '/public/images/smartphones/new_arrivals/vivo_x200_pro_olive_green.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161403_d65f9556.png'
    ],
    warranty: '1 Year Vivo India Warranty + Free Screen Replacement'
  },
  {
    id: 'prod-phone-galaxy-s25-emerald',
    name: 'Samsung Galaxy S25 5G (Emerald Green Festive Edition · Triple Matrix)',
    slug: 'samsung-galaxy-s25-emerald-green',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 7499900, // ₹74,999.00
    originalPricePaise: 8299900, // ₹82,999.00
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 260,
    stock: 22,
    isFeatured: false,
    isNewArrival: true,
    sku: 'SAM-S25-256-EMR',
    description: 'Compact festive flagship in radiant Emerald Green. 6.2" Dynamic AMOLED 2X with 120Hz refresh, Snapdragon 8 Gen 4 processor, 12GB RAM, 256GB storage, and 50MP AI-enhanced triple camera.',
    features: [
      '6.2" FHD+ Dynamic AMOLED 2X 120Hz with ultra-narrow symmetric bezels',
      'Snapdragon 8 Gen 4 flagship chipset with ray-tracing mobile gaming support',
      '50MP Dual Pixel OIS camera with Nightography and AI Photo Assist',
      'Pocket-friendly lightweight 167g ergonomic curved contour design',
      '4000mAh battery with 25W fast charging and Wireless PowerShare'
    ],
    specs: {
      'Display': '6.2" FHD+ Dynamic AMOLED 2X 120Hz (2600 nits)',
      'Processor': 'Snapdragon 8 Gen 4 Mobile Platform',
      'RAM & Storage': '12GB RAM + 256GB Storage',
      'Battery': '4000 mAh with 25W Fast Charging',
      'Camera': '50MP OIS Main + 12MP Ultra-Wide + 10MP 3x Telephoto',
      'Build': 'Armor Aluminum Frame with IP68 Rating'
    },
    images: [
      '/public/images/smartphones/new_arrivals/samsung_galaxy_emerald_green.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161204_9d8ab2db.png'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-oppo-findx8-graphite',
    name: 'OPPO Find X8 5G (Graphite Black Metallic · Hasselblad Master Camera)',
    slug: 'oppo-find-x8-graphite-black',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 6999900, // ₹69,999.00
    originalPricePaise: 7999900, // ₹79,999.00
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 182,
    stock: 18,
    isFeatured: false,
    isNewArrival: true,
    sku: 'OPP-FINDX8-256-BLK',
    description: 'Master camera co-created with Hasselblad in sleek Graphite Metallic. 6.59" 1.5K 120Hz flat AMOLED screen with ultra-thin 1.45mm borders, Dimensity 9400 chip, 16GB RAM, and 5630mAh battery.',
    features: [
      'Triple 50MP Hasselblad camera system with periscope optical portrait lens',
      'MediaTek Dimensity 9400 3nm processor with 16GB LPDDR5X RAM',
      '6.59" 1.5K AMOLED display with 1.45mm razor-thin uniform bezels',
      '5630mAh Silicon-Carbon battery with 80W wired & 50W wireless flash charge',
      'Aerospace aluminum unibody with IP68/IP69 dust and high-temperature water jet resistance'
    ],
    specs: {
      'Display': '6.59" 1.5K Flexible AMOLED 120Hz (4500 nits peak)',
      'Processor': 'MediaTek Dimensity 9400 (3nm)',
      'RAM & Storage': '16GB RAM + 256GB Storage',
      'Battery': '5630 mAh with 80W SUPERVOOC Flash Charge',
      'Camera': '50MP Sony Main OIS + 50MP 3x Periscope Telephoto + 50MP Ultra-Wide',
      'Build': 'Graphite AG Frosted Glass with IP68/IP69'
    },
    images: [
      '/public/images/smartphones/new_arrivals/oppo_find_x8_graphite.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161449_523352e4.png'
    ],
    warranty: '1 Year OPPO India Warranty'
  },
  {
    id: 'prod-phone-vivo-x100-pro-charcoal',
    name: 'Vivo X100 Pro Zeiss 5G (Charcoal Meteorite Black · 1-Inch Sensor)',
    slug: 'vivo-x100-pro-charcoal-zeiss',
    brand: 'Vivo',
    category: 'smartphones',
    pricePaise: 6499900, // ₹64,999.00
    originalPricePaise: 7499900, // ₹74,999.00
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 304,
    stock: 21,
    isFeatured: false,
    isNewArrival: true,
    sku: 'VIV-X100P-512-CHR',
    description: 'Iconic mobile photography power with 1-inch Sony IMX989 primary sensor and Zeiss APO Floating Telephoto camera. 16GB RAM, 512GB storage, Vivo V3 imaging chip, and 100W Dual-Cell FlashCharge.',
    features: [
      'Zeiss 1-inch main sensor with T* optical coating and anti-glare technology',
      '50MP Zeiss APO floating periscope telephoto lens with macro focus capability',
      '6.78" 1.5K 120Hz LTPO AMOLED with 2160Hz PWM high-frequency dimming',
      '5400mAh BlueVolt battery with 100W wired FlashCharge (1-50% in 12 mins)',
      'Dimensity 9300 with 16GB RAM for uninterrupted flagship multitasking'
    ],
    specs: {
      'Display': '6.78" 1.5K LTPO AMOLED 120Hz (3000 nits)',
      'Processor': 'MediaTek Dimensity 9300 (4nm) + Vivo V3 Chip',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5400 mAh with 100W FlashCharge + 50W Wireless',
      'Camera': '50MP 1-inch OIS Main + 50MP Zeiss APO Telephoto + 50MP Ultra-Wide',
      'Build': 'Curved Glass with IP68 Water & Dust Resistance'
    },
    images: [
      '/public/images/smartphones/new_arrivals/vivo_x100_charcoal_zeiss.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161347_66f9d5a5.png'
    ],
    warranty: '1 Year Vivo India Warranty'
  },
  {
    id: 'prod-phone-vivo-x200-crimson',
    name: 'Vivo X200 5G (Crimson Sunset Red · Zeiss Multi-Focal Portrait)',
    slug: 'vivo-x200-crimson-red-zeiss',
    brand: 'Vivo',
    category: 'smartphones',
    pricePaise: 5999900, // ₹59,999.00
    originalPricePaise: 6999900, // ₹69,999.00
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 155,
    stock: 23,
    isFeatured: false,
    isNewArrival: true,
    sku: 'VIV-X200-256-RED',
    description: 'Vibrant Crimson Sunset Red edition. MediaTek Dimensity 9400 processor, 6.67" 1.5K AMOLED 120Hz display, Zeiss True-Color 50MP imaging suite, 12GB RAM, 256GB storage, and 5800mAh BlueVolt battery.',
    features: [
      '50MP Zeiss True-Color main camera with Sony IMX921 sensor and OIS',
      'Zeiss 50MP telephoto with multi-focal portrait lengths (24mm, 35mm, 50mm, 85mm, 100mm)',
      'MediaTek Dimensity 9400 chipset with ultra-low thermal dissipation',
      '5800mAh battery with 90W FlashCharge in a compact 7.99mm body',
      'Full IP68 and IP69 certification against water immersion and high-pressure sprays'
    ],
    specs: {
      'Display': '6.67" 1.5K LTPS AMOLED 120Hz (4500 nits peak)',
      'Processor': 'MediaTek Dimensity 9400 (3nm)',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Battery': '5800 mAh BlueVolt with 90W FlashCharge',
      'Camera': '50MP Sony IMX921 OIS + 50MP Zeiss Telephoto + 50MP Ultra-Wide',
      'Build': 'Crimson Satin Glass with IP68/IP69 Resistance'
    },
    images: [
      '/public/images/smartphones/new_arrivals/vivo_x200_crimson_zeiss.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161355_29ad2350.png'
    ],
    warranty: '1 Year Vivo India Warranty'
  },
  {
    id: 'prod-phone-vivo-v40-ice-blue',
    name: 'Vivo V40 5G (Ice Blue Gradient · Studio Aura Light Portrait)',
    slug: 'vivo-v40-ice-blue-gradient',
    brand: 'Vivo',
    category: 'smartphones',
    pricePaise: 4999900, // ₹49,999.00
    originalPricePaise: 5499900, // ₹54,999.00
    discountPercentage: 9,
    rating: 4.8,
    reviewCount: 290,
    stock: 26,
    isFeatured: false,
    isNewArrival: true,
    sku: 'VIV-V40-256-BLU',
    description: 'Ultra-slim portrait master in ethereal Ice Blue. Features Zeiss Optics, intelligent Studio Aura Light, 5500mAh battery packed into a 7.58mm frame, Snapdragon 7 Gen 3, and 50MP dual selfie & rear cameras.',
    features: [
      'Dual 50MP Zeiss OIS rear cameras with Studio-Quality Aura Light Ring',
      '50MP Group Selfie camera with 92° wide-angle and autofocus',
      'Massive 5500mAh BlueVolt battery engineered into an ultra-slim 7.58mm body',
      '6.78" 1.5K 3D Curved AMOLED 120Hz with 4500 nits local peak brightness',
      'IP68 water and dust resistance for worry-free all-weather usage'
    ],
    specs: {
      'Display': '6.78" 1.5K 3D Curved AMOLED 120Hz',
      'Processor': 'Qualcomm Snapdragon 7 Gen 3 (4nm)',
      'RAM & Storage': '12GB RAM + 256GB Storage',
      'Battery': '5500 mAh with 80W FlashCharge',
      'Camera': '50MP Zeiss OIS Main + 50MP Zeiss Ultra-Wide + 50MP AF Selfie',
      'Build': 'Ultra-slim 7.58mm Glass Body with IP68 Rating'
    },
    images: [
      '/public/images/smartphones/new_arrivals/vivo_v40_ice_blue.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161331_001edf84.png'
    ],
    warranty: '1 Year Vivo India Warranty'
  },
  {
    id: 'prod-phone-redmi-note15-pro-plus',
    name: 'Redmi Note 15 Pro + 5G (Golden Mocha Leather · SD 7sGen4 16GB/512GB)',
    slug: 'redmi-note-15-pro-plus-5g-golden-mocha',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 4399900, // ₹43,999.00
    originalPricePaise: 4999900, // ₹49,999.00
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 340,
    stock: 28,
    isFeatured: true,
    isNewArrival: true,
    sku: 'RED-NOTE15PP-512-MCH',
    description: 'Festive season release. Powered by Qualcomm Snapdragon 7s Gen 4 with a colossal 16GB RAM + 512GB storage configuration. Premium golden mocha vegan leather finish, 200MP OIS camera, and 120W HyperCharge.',
    features: [
      'Qualcomm Snapdragon 7s Gen 4 octa-core processor with 16GB physical RAM',
      '200MP Samsung ISOCELL sensor with OIS and 4x lossless in-sensor zoom',
      '1.5K Curved CrystalRes AMOLED 120Hz display with Dolby Vision and HDR10+',
      '120W HyperCharge powering 5100mAh battery from 0 to 100% in 19 minutes',
      'Golden mocha vegan leather back panel with metallic quad camera island'
    ],
    specs: {
      'Display': '6.67" 1.5K Curved AMOLED 120Hz (1800 nits, Gorilla Glass Victus 2)',
      'Processor': 'Snapdragon 7s Gen 4 Octa-Core (4nm)',
      'RAM & Storage': '16GB LPDDR5 + 512GB UFS 3.1',
      'Battery': '5100 mAh with 120W HyperCharge (Charger in box)',
      'Camera': '200MP OIS Main + 8MP Ultra-Wide + 2MP Macro',
      'Build': 'Golden Mocha Vegan Leather with IP68 Water Resistance'
    },
    images: [
      '/public/images/smartphones/new_arrivals/redmi_note15_pro_plus_device.png',
      '/public/images/smartphones/new_arrivals/redmi_note15_pro_plus_banner.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161100_f3031f7a.png'
    ],
    warranty: '1 Year Xiaomi India Warranty'
  },
  {
    id: 'prod-phone-realme-14pro-plus-orbital',
    name: 'realme 14 Pro+ 5G (Orbital Pearl White · 120Hz HyperVision AMOLED)',
    slug: 'realme-14-pro-plus-orbital-pearl-white',
    brand: 'realme',
    category: 'smartphones',
    pricePaise: 2899900, // ₹28,999.00
    originalPricePaise: 3499900, // ₹34,999.00
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 215,
    stock: 35,
    isFeatured: false,
    isNewArrival: true,
    sku: 'RLM-14PP-256-PRL',
    description: 'Breathtaking Orbital Pearl White finish with luxury watch dial camera module. 50MP Sony LYT periscope telephoto camera with 3x optical zoom, Snapdragon 7s processor, 12GB RAM, 256GB storage, and 67W SUPERVOOC charging.',
    features: [
      '50MP Sony LYT-600 Periscope Telephoto with 3x Optical & 120x SuperZoom',
      '6.7" 120Hz Curved Vision AMOLED display with 2160Hz PWM dimming',
      'Qualcomm Snapdragon 7s high-efficiency 4nm processor with 12GB RAM',
      '5200mAh long-lasting battery with 67W SUPERVOOC fast charge',
      'Orbital luxury camera dial with fluted golden bezel and pearl shimmer back'
    ],
    specs: {
      'Display': '6.7" FHD+ Curved AMOLED 120Hz (Pro-XDR display)',
      'Processor': 'Qualcomm Snapdragon 7s 5G (4nm)',
      'RAM & Storage': '12GB RAM + 256GB Storage',
      'Battery': '5200 mAh with 67W SUPERVOOC Fast Charge',
      'Camera': '50MP Sony IMX890 OIS + 50MP Periscope 3x + 8MP Ultra-Wide',
      'Build': 'Orbital Pearl Glass with Dual Stereo Hi-Res Speakers'
    },
    images: [
      '/public/images/smartphones/new_arrivals/realme_orbital_pearl_white.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161441_6fbbfcc6.png'
    ],
    warranty: '1 Year realme India Warranty'
  },
  {
    id: 'prod-phone-redmi-note15-se',
    name: 'Redmi Note 15 SE 5G (Crimson Velvet Silk · Snapdragon 6 Gen 3)',
    slug: 'redmi-note-15-se-5g-crimson-velvet',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 2299900, // ₹22,999.00
    originalPricePaise: 2699900, // ₹26,999.00
    discountPercentage: 15,
    rating: 4.7,
    reviewCount: 382,
    stock: 45,
    isFeatured: false,
    isNewArrival: true,
    sku: 'RED-NOTE15SE-256-CRM',
    description: 'Festive release Redmi Note 15 SE 5G in Crimson Velvet Silk. Powered by Snapdragon 6 Gen 3 processor, 8GB RAM, 256GB storage, 108MP ProLight camera, and vibrant 6.67" 120Hz AMOLED display.',
    features: [
      'Qualcomm Snapdragon 6 Gen 3 (4nm) 5G mobile platform',
      '108MP ProLight camera with 3x in-sensor lossless portrait zoom',
      '6.67" FHD+ 120Hz AMOLED with 1200 nits peak and low blue light certification',
      '5500mAh massive battery with 45W TurboCharge in-box',
      'Rich Crimson Velvet Silk back panel with dual stereo speakers & IR blaster'
    ],
    specs: {
      'Display': '6.67" FHD+ AMOLED 120Hz (Corning Gorilla Glass)',
      'Processor': 'Qualcomm Snapdragon 6 Gen 3 Octa-Core',
      'RAM & Storage': '8GB RAM + 256GB Storage (microSD expandable)',
      'Battery': '5500 mAh with 45W TurboCharge',
      'Camera': '108MP Main + 8MP Ultra-Wide + 2MP Macro',
      'Build': 'Crimson Velvet Silk Matte Finish with IP54 Protection'
    },
    images: [
      '/public/images/smartphones/new_arrivals/redmi_note15_se_device.png',
      '/public/images/smartphones/new_arrivals/redmi_note15_se_banner.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161047_660bde66.png'
    ],
    warranty: '1 Year Xiaomi India Warranty'
  },
  {
    id: 'prod-phone-redmi-a7-pro',
    name: 'Redmi A7 Pro 4G (Sunrise Amber Gold · 6300mAh Endurance · 6.9" Display)',
    slug: 'redmi-a7-pro-sunrise-amber-gold',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 1399900, // ₹13,999.00
    originalPricePaise: 1699900, // ₹16,999.00
    discountPercentage: 18,
    rating: 4.7,
    reviewCount: 420,
    stock: 60,
    isFeatured: false,
    isNewArrival: true,
    sku: 'RED-A7PRO-128-AMB',
    description: 'Massive entertainment value. Huge 6.9" immersive display with smooth 90Hz refresh rate, monster 6300mAh endurance battery lasting up to 3 days, 6GB RAM + 128GB storage, and 50MP AI Dual Camera.',
    features: [
      'Monster 6300mAh high-capacity battery for up to 72 hours mixed use',
      'Immersive 6.9" HD+ 90Hz eye-care display for expansive streaming & gaming',
      '50MP AI Dual rear camera system with portrait mode and HDR',
      'Sunrise Amber Gold textured finish with pill-shaped dual camera ring',
      'Side-mounted fingerprint scanner, 3.5mm headphone jack & FM radio'
    ],
    specs: {
      'Display': '6.9" HD+ 90Hz Dot Drop Display with 500 nits',
      'Processor': 'Octa-Core 2.2GHz Performance Processor',
      'RAM & Storage': '6GB RAM (up to 12GB with Virtual RAM) + 128GB Storage',
      'Battery': '6300 mAh with Type-C 18W Fast Charging',
      'Camera': '50MP AI Primary + Secondary Depth Lens',
      'Build': 'Sunrise Amber Gold with Anti-Fingerprint Texture'
    },
    images: [
      '/public/images/smartphones/new_arrivals/redmi_a7_pro_device.png',
      '/public/images/smartphones/new_arrivals/redmi_a7_pro_banner.png',
      '/public/assets/aistudio/Screenshot_2026-10-30_161112_7c04b6f5.png'
    ],
    warranty: '1 Year Xiaomi India Warranty'
  },
  {
    id: 'prod-phone-galaxy-zfold6',
    name: 'Samsung Galaxy Z Fold6 5G (Phantom Silver Shadow · Galaxy AI)',
    slug: 'samsung-galaxy-z-fold-6-5g-silver',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 16499900, // ₹1,64,999.00
    originalPricePaise: 17699900, // ₹1,76,999.00
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 388,
    stock: 14,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-ZFOLD6-512-SLV',
    description: 'The pinnacle of foldable engineering. Ultra-slim Dual-Screen Dynamic AMOLED 2X with Gorilla Glass Armor, Armor Aluminum frame, Snapdragon 8 Gen 3 for Galaxy, 12GB RAM, 512GB Storage, integrated Galaxy AI with Live Translate, and embedded S-Pen support.',
    features: [
      '7.6" Main Dynamic AMOLED 2X 120Hz + 6.3" Cover AMOLED Screen',
      'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm) with 1.6x larger vapor chamber',
      'Dual-rail flex hinge tested for over 200,000 folds with IP48 water resistance',
      'Galaxy AI suite: Interpreter, Note Assist, Generative Edit, and Circle to Search',
      'ProVisual Engine with 50MP Dual Telephoto camera and Space Zoom'
    ],
    specs: {
      'Display': '7.6" QXGA+ 120Hz Dynamic AMOLED 2X (2600 nits)',
      'Cover Screen': '6.3" HD+ Dynamic AMOLED 2X 120Hz',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'RAM & Storage': '12GB LPDDR5X + 512GB UFS 4.0',
      'Camera': '50MP OIS Dual Pixel + 12MP Ultra-wide + 10MP 3x Telephoto',
      'Battery': '4400 mAh Dual Cell with 25W Fast Charge & Wireless PowerShare',
      'Color': 'Silver Shadow Titanium Finish'
    },
    images: [
      '/public/images/smartphones/samsung_galaxy_zfold6.webp',
      '/public/assets/aistudio/shopping__2__023b1250.webp'
    ],
    warranty: '1 Year Samsung India Domestic Warranty + 1 Year Screen Protection'
  },
  {
    id: 'prod-phone-s24u-silver',
    name: 'Samsung Galaxy S24 Ultra 5G (Titanium Silver Special Edition)',
    slug: 'samsung-galaxy-s24-ultra-titanium-silver',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 12999900, // ₹1,29,999.00
    originalPricePaise: 14499900, // ₹1,44,999.00
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 840,
    stock: 22,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-S24U-TITAN-SLV',
    description: 'The pinnacle of smartphone innovation in exclusive Titanium Silver. Grade 5 Titanium frame with anti-reflective Corning Gorilla Armor, integrated Bluetooth S-Pen stylus, 200MP Quad Telephoto AI zoom, and Galaxy AI live translate.',
    features: [
      '6.8" Flat Dynamic AMOLED 2X 120Hz with Corning Gorilla Armor',
      'Integrated S-Pen stylus for precision handwriting, sketching, and remote camera control',
      '200MP Quad Telephoto Camera with 100x Space Zoom and Nightography video',
      'Snapdragon 8 Gen 3 for Galaxy with 1.9x larger vapor chamber cooling'
    ],
    specs: {
      'Display': '6.8" Quad HD+ 3120x1440 120Hz LTPO 2600 nits',
      'Chassis': 'Titanium Shield with IP68 Submersion Resistance',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'RAM & Storage': '12GB LPDDR5X + 512GB UFS 4.0',
      'Stylus': 'Embedded Bluetooth Low Energy S-Pen',
      'Color': 'Titanium Silver Special Edition'
    },
    images: [
      '/public/images/smartphones/samsung_s24_ultra_special_silver.webp',
      '/public/images/smartphones/shopping_1.webp',
      '/public/images/smartphones/shopping (1).webp',
      '/Phone images /shopping (1).webp'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-flagship-trio-elite',
    name: 'Flagship Trio Elite Edition (Galaxy S24 Ultra · iPhone 16 Pro · Pixel 9 Pro)',
    slug: 'flagship-trio-elite-edition-samsung-apple-google',
    brand: 'Samsung & Apple Flagship Collection',
    category: 'smartphones',
    pricePaise: 12499900, // ₹1,24,999.00
    originalPricePaise: 14999900, // ₹1,49,999.00
    discountPercentage: 17,
    rating: 5.0,
    reviewCount: 620,
    stock: 16,
    isFeatured: true,
    isNewArrival: true,
    sku: 'TRIO-FLAGSHIP-PRO-ELITE',
    description: 'The definitive triumvirate of modern mobile engineering. Experience the side-by-side mastery of Samsung Galaxy S24 Ultra with titanium S-Pen stylus, Apple iPhone 16 Pro in deep maroon burgundy with A18 Pro 3nm silicon, and Google Pixel 9 Pro with next-generation Gemini AI camera imaging.',
    features: [
      'Comparative flagship showcase featuring Samsung Galaxy S24 Ultra, Apple iPhone 16 Pro, and Google Pixel 9 Pro',
      'Over 200MP Quad Zoom, 48MP Fusion Camera Control, and 50MP Pro Periscope Zoom optics',
      'Unified titanium and aerospace aluminum framing with Corning Gorilla Armor and Ceramic Shield',
      'Side-by-side ecosystem comparison: Galaxy AI, Apple Intelligence, and Google Gemini nano on-device',
      '120Hz LTPO AMOLED 2X and ProMotion Super Retina XDR displays'
    ],
    specs: {
      'Display': '120Hz LTPO Dynamic AMOLED 2X & ProMotion Super Retina XDR',
      'Processors': 'Snapdragon 8 Gen 3 for Galaxy · Apple A18 Pro · Google Tensor G4',
      'RAM & Storage': '12GB LPDDR5X + 256GB / 512GB UFS 4.0 / NVMe',
      'Camera Systems': '200MP Quad Zoom + 48MP Fusion OIS + 50MP Pro Camera',
      'Stylus & AI': 'Embedded S-Pen Stylus + Galaxy AI & Apple Intelligence',
      'Color': 'Titanium Silver, Burgundy & Porcelain Trio'
    },
    images: [
      '/public/images/smartphones/flagship_trio_samsung_iphone_pixel.jpg',
      '/public/assets/aistudio/images__8__521a0e7d.jpg'
    ],
    warranty: '1 Year Comprehensive Brand India Domestic Warranty'
  },
  {
    id: 'prod-phone-galaxy-zflip6',
    name: 'Samsung Galaxy Z Flip6 5G (Mint Blue · FlexWindow)',
    slug: 'samsung-galaxy-z-flip-6-5g-mint',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 10999900, // ₹1,09,999.00
    originalPricePaise: 11999900, // ₹1,19,999.00
    discountPercentage: 8,
    rating: 4.8,
    reviewCount: 460,
    stock: 20,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-ZFLIP6-256-MINT',
    description: 'Iconic pocket-sized design featuring 3.4" Super AMOLED FlexWindow, upgraded 50MP FlexCam with Auto Zoom, Snapdragon 8 Gen 3 for Galaxy, and durable Armor Aluminum frame with IP48 water resistance.',
    features: [
      '6.7" Dynamic AMOLED 2X 120Hz foldable display with ultra-thin glass',
      '3.4" FlexWindow allows checking messages, taking selfies, and running widgets folded',
      'Upgraded 50MP wide camera with 2x optical quality zoom and ProVisual Engine',
      'First Galaxy Z Flip with dedicated Vapor Chamber cooling',
      '4000 mAh battery optimized for all-day social and camera use'
    ],
    specs: {
      'Display': '6.7" FHD+ 120Hz Dynamic AMOLED 2X Foldable',
      'Cover Screen': '3.4" Super AMOLED 60Hz FlexWindow',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Camera': '50MP OIS Wide + 12MP Ultra-wide',
      'Battery': '4000 mAh with 25W Fast Charging',
      'Color': 'Mint Blue'
    },
    images: [
      '/public/images/smartphones/galaxy_edge_5g.jpg',
      '/public/images/smartphones/shopping_1.webp'
    ],
    warranty: '1 Year Samsung India Warranty + 1 Year Screen Protection'
  },
  {
    id: 'prod-phone-iphone16-plus',
    name: 'Apple iPhone 16 Plus (Ultramarine Blue 128GB)',
    slug: 'apple-iphone-16-plus-ultramarine',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 8990000, // ₹89,900.00
    originalPricePaise: 8990000, // ₹89,900.00
    discountPercentage: 0,
    rating: 4.9,
    reviewCount: 520,
    stock: 30,
    isFeatured: true,
    isNewArrival: true,
    sku: 'APL-IP16PLUS-128-ULTRA',
    description: 'Big 6.7" Super Retina XDR display with incredible battery life. Features the custom-designed A18 chip, tactile Camera Control, Action button, and 48MP 2-in-1 Fusion camera for stunning high-res photography.',
    features: [
      '6.7" Super Retina XDR OLED with HDR10 and True Tone display',
      'Apple A18 silicon built on 3nm with 16-core Neural Engine for Apple Intelligence',
      'Camera Control button lets you zoom, adjust depth of field, and shoot instantly',
      '48MP Fusion camera with 2x optical-quality Telephoto sensor',
      'Ceramic Shield front is 2x tougher than any smartphone glass'
    ],
    specs: {
      'Display': '6.7" Super Retina XDR OLED Display (2000 nits)',
      'Processor': 'Apple A18 Bionic (3nm)',
      'RAM & Storage': '8GB Unified Memory + 128GB Storage',
      'Camera': '48MP Fusion Camera + 12MP Ultra-wide',
      'Battery': 'Up to 27 hours video playback',
      'Color': 'Ultramarine Blue'
    },
    images: [
      '/public/images/smartphones/apple_iphone_16_plus.webp',
      '/public/assets/aistudio/shopping__4__88b07f44.webp'
    ],
    warranty: '1 Year Apple India Warranty'
  },
  {
    id: 'prod-phone-oppo-findx7',
    name: 'OPPO Find X7 Ultra 5G (Pearl Ceramic White Quad Matrix)',
    slug: 'oppo-find-x7-ultra-pearl-white',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 6999900, // ₹69,999.00
    originalPricePaise: 8499900, // ₹84,999.00
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 295,
    stock: 20,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OPPO-FX7U-WHITE',
    description: 'World-first Quad Main Camera system with dual periscope lenses and circular Hasselblad portrait matrix. Encased in microcrystalline satin pearl white ceramic with 100W flash charging.',
    features: [
      'Quad Main Camera system with large circular center-aligned matrix',
      'Dual Periscope telephoto lenses with Hasselblad portrait architecture',
      'Pure satin pearl ceramic back unibody with aerospace metallic bezel',
      '100W wired & 50W wireless AIRVOOC with 5000 mAh dual-cell battery',
      '6.82" 2K 120Hz LTPO AMOLED with 4500 nits peak outdoor brightness'
    ],
    specs: {
      'Display': '6.82" 2K 120Hz LTPO AMOLED, 4500 nits peak',
      'Processor': 'Snapdragon 8 Gen 3 Flagship Silicon (4nm)',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Camera': '50MP 1-inch Sony LYT-900 + 50MP 3x + 50MP 6x + 50MP Ultra-wide',
      'Battery': '5000 mAh with 100W Flash Charge',
      'Color': 'Pearl Ceramic White'
    },
    images: [
      '/public/images/smartphones/oppo_find_x7_pearl_white.jpg',
      '/public/assets/aistudio/images__30__bd2f3280.jpg'
    ],
    warranty: '1 Year VIP Brand Warranty with Free Screen Protection'
  },
  {
    id: 'prod-phone-galaxy-s24',
    name: 'Samsung Galaxy S24 5G (Cobalt Violet · Galaxy AI)',
    slug: 'samsung-galaxy-s24-5g-violet',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 6499900, // ₹64,999.00
    originalPricePaise: 7999900, // ₹79,999.00
    discountPercentage: 19,
    rating: 4.8,
    reviewCount: 510,
    stock: 28,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-S24-128-VIOLET',
    description: 'Compact flagship powerhouse with satin finish Armor Aluminum, 6.2" Dynamic AMOLED 2X 120Hz LTPO screen, integrated Galaxy AI with Circle to Search, 50MP optical quality camera, and all-day battery life.',
    features: [
      '6.2" FHD+ Dynamic AMOLED 2X with 1-120Hz adaptive refresh rate',
      'Armor Aluminum frame with enhanced drop resistance and IP68 water rating',
      'Galaxy AI powered Circle to Search, Live Call Translation, and Note Assist',
      '50MP Triple Camera system with 30x Space Zoom and AI Nightography',
      '7 years of guaranteed Android OS upgrades and security patches'
    ],
    specs: {
      'Display': '6.2" Dynamic AMOLED 2X 120Hz LTPO (2600 nits)',
      'Processor': 'Samsung Exynos 2400 / Snapdragon 8 Gen 3 (4nm)',
      'RAM & Storage': '8GB LPDDR5X + 128GB UFS 4.0',
      'Camera': '50MP OIS + 12MP Ultra-wide + 10MP 3x Telephoto',
      'Battery': '4000 mAh with 25W Fast Charging',
      'Color': 'Cobalt Violet'
    },
    images: [
      '/public/images/smartphones/shopping_1.webp',
      '/public/images/smartphones/samsung_s24_ultra_special_silver.webp'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-oneplus-12',
    name: 'OnePlus 12 5G (Silky Black · Snapdragon 8 Gen 3)',
    slug: 'oneplus-12-5g-silky-black',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 6499900, // ₹64,999.00
    originalPricePaise: 6999900, // ₹69,999.00
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 620,
    stock: 24,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-12-512-BLK',
    description: 'Elite speed with Snapdragon 8 Gen 3, Dual Cryo-velocity VC cooling, 4th Gen Hasselblad Camera with 64MP Periscope Zoom, massive 5400 mAh battery with 100W SUPERVOOC and 50W wireless AIRVOOC.',
    features: [
      '6.82" 2K 120Hz ProXDR LTPO AMOLED with record-breaking 4500 nits',
      'Qualcomm Snapdragon 8 Gen 3 with 16GB LPDDR5X RAM and UFS 4.0 storage',
      '64MP Periscope Telephoto (3x optical, 120x digital) + 50MP Sony LYT-808 OIS',
      '100W wired SUPERVOOC charges to 100% in 26 mins + 50W wireless charging',
      'Dual Cryo-velocity vapor chamber cooling ensures zero throttling under load'
    ],
    specs: {
      'Display': '6.82" 2K QHD+ 120Hz ProXDR LTPO AMOLED',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Camera': '50MP Sony LYT-808 + 64MP 3x Periscope + 48MP Ultra-wide',
      'Battery': '5400 mAh with 100W SUPERVOOC & 50W Wireless',
      'Color': 'Silky Black'
    },
    images: [
      '/public/images/smartphones/oneplus_12_black.jpg',
      '/public/assets/aistudio/images__29__6ff2bfeb.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-oneplus11-green',
    name: 'OnePlus 11 5G (Emerald Green - Never Settle Edition)',
    slug: 'oneplus-11-5g-emerald-green',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 5499900, // ₹54,999.00
    originalPricePaise: 6499900, // ₹64,999.00
    discountPercentage: 15,
    rating: 4.9,
    reviewCount: 512,
    stock: 22,
    isFeatured: true,
    isNewArrival: false,
    sku: 'OP-11-EMERALD',
    description: 'Signature Emerald Green finish with black circular ceramic camera island. Engineered with Snapdragon 8 Gen 2, Hasselblad Camera for Mobile 3rd Gen, Cryo-velocity vapor cooling, and Never Settle DNA.',
    features: [
      'Iconic Emerald Green finish with black circular ceramic camera island',
      'Qualcomm Snapdragon 8 Gen 2 with Cryo-velocity vapor cooling chamber',
      '50MP Sony IMX890 with Hasselblad Camera for Mobile 3rd Gen natural colors',
      '100W SUPERVOOC Endurance Edition charging (1-100% in 25 mins)',
      '6.7" 2K 120Hz Super Fluid AMOLED with LTPO 3.0 & Dolby Vision'
    ],
    specs: {
      'Display': '6.7" 2K QHD+ 120Hz LTPO 3.0 Super Fluid AMOLED',
      'Processor': 'Qualcomm Snapdragon 8 Gen 2 (4nm)',
      'RAM & Storage': '16GB LPDDR5X + 256GB UFS 4.0',
      'Camera': '50MP Sony IMX890 OIS + 48MP Ultra-wide + 32MP Telephoto',
      'Battery': '5000 mAh Dual-Cell with 100W SUPERVOOC',
      'Color': 'Emerald Green'
    },
    images: [
      '/public/images/smartphones/oneplus_11_emerald_green_neversettle.jpg',
      '/public/assets/aistudio/images__31__ebf396f9.jpg'
    ],
    warranty: '1 Year Comprehensive Brand Warranty'
  },
  {
    id: 'prod-phone-iphone14-base',
    name: 'Apple iPhone 14 (Midnight Black 128GB)',
    slug: 'apple-iphone-14-midnight-black',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 4990000, // ₹49,900.00
    originalPricePaise: 5960000, // ₹59,600.00
    discountPercentage: 16,
    rating: 4.8,
    reviewCount: 820,
    stock: 32,
    isFeatured: false,
    isNewArrival: false,
    sku: 'APL-IP14-128-MID',
    description: 'Super-fast A15 Bionic with 5-core GPU, stunning Super Retina XDR OLED display, Photonic Engine for low-light photography, Action Mode for gimbal-like video, and vital Crash Detection safety features.',
    features: [
      '6.1" Super Retina XDR OLED display with HDR and True Tone',
      'A15 Bionic chip with 5-core GPU for smooth gaming and graphics',
      'Advanced dual-camera system with 12MP Main & Ultra-wide with Photonic Engine',
      'Action mode for smooth, steady, handheld video recordings',
      'Industry-leading IP68 water resistance and Ceramic Shield front cover'
    ],
    specs: {
      'Display': '6.1" Super Retina XDR OLED (1200 nits peak)',
      'Processor': 'Apple A15 Bionic (5nm)',
      'RAM & Storage': '6GB RAM + 128GB NVMe Storage',
      'Camera': '12MP Dual Pixel OIS + 12MP Ultra-wide',
      'Battery': 'Up to 20 hours video playback',
      'Color': 'Midnight Black'
    },
    images: [
      '/public/images/smartphones/apple_iphone_16_plus.webp',
      '/public/images/smartphones_iphone_lineup.png'
    ],
    warranty: '1 Year Apple India Warranty'
  },
  {
    id: 'prod-phone-oppo-reno12',
    name: 'OPPO Reno12 Pro 5G (Sunset Gold · AI Portrait Expert)',
    slug: 'oppo-reno-12-pro-5g-sunset-gold',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 4699900, // ₹46,999.00
    originalPricePaise: 5399900, // ₹53,999.00
    discountPercentage: 13,
    rating: 4.9,
    reviewCount: 340,
    stock: 26,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OPPO-R12P-512-GOLD',
    description: 'AI Portrait master encased in shimmering Sunset Gold. Features Quad-Curved Infinite View AMOLED display, 50MP Sony LYT-600 OIS main camera, 50MP 2x Telephoto portrait lens, 50MP autofocus selfie camera, and AI Eraser 2.0.',
    features: [
      '6.7" Quad-Curved Infinite View 120Hz AMOLED with Corning Gorilla Glass 7i',
      'MediaTek Dimensity 7300-Energy (4nm) optimized for exceptional battery efficiency',
      'Triple 50MP Camera system: 50MP Sony Main + 50MP 2x Telephoto + 50MP Selfie',
      '80W SUPERVOOC flash charge powers 5000 mAh battery to 100% in 35 mins',
      'OPPO AI Studio: AI Eraser 2.0, AI Best Face, and AI Smart Matting'
    ],
    specs: {
      'Display': '6.7" Quad-Curved 120Hz AMOLED, HDR10+ (1200 nits)',
      'Processor': 'MediaTek Dimensity 7300-Energy (4nm)',
      'RAM & Storage': '12GB LPDDR4X + 512GB UFS 3.1',
      'Camera': '50MP Sony LYT-600 OIS + 50MP 2x Telephoto + 8MP Wide + 50MP Selfie',
      'Battery': '5000 mAh with 80W SUPERVOOC',
      'Color': 'Sunset Gold'
    },
    images: [
      '/public/images/smartphones/oppo_reno12_pro.jpg',
      '/public/assets/aistudio/images__32__9c44359f.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-galaxy-a55',
    name: 'Samsung Galaxy A55 5G (Awesome Iceblue · Metal Frame)',
    slug: 'samsung-galaxy-a55-5g-iceblue',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 3999900, // ₹39,999.00
    originalPricePaise: 4299900, // ₹42,999.00
    discountPercentage: 7,
    rating: 4.8,
    reviewCount: 615,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-A55-128-ICE',
    description: 'Premium metal frame with Corning Gorilla Glass Victus+ on front and back. Equipped with Exynos 1480 4nm processor featuring AMD Xclipse GPU, 50MP OIS camera, Samsung Knox Vault hardware security, and IP67 rating.',
    features: [
      'Premium metal frame with linear camera floating layout and Gorilla Glass Victus+',
      'Samsung Exynos 1480 (4nm) processor co-engineered with AMD Xclipse graphics',
      '50MP Big Pixel OIS Camera with 4x improved Nightography detail',
      'Samsung Knox Vault certified with EAL5+ hardware level isolation',
      '4 major Android OS upgrades and 5 years of security maintenance'
    ],
    specs: {
      'Display': '6.6" FHD+ Super AMOLED 120Hz Vision Booster (1000 nits)',
      'Processor': 'Samsung Exynos 1480 Octa-Core (4nm)',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable up to 1TB)',
      'Camera': '50MP OIS + 12MP Ultra-wide + 5MP Macro',
      'Build': 'Metal Armor Frame with IP67 Water Resistance',
      'Color': 'Awesome Iceblue'
    },
    images: [
      '/public/images/smartphones/samsung_galaxy_a55.webp',
      '/public/assets/aistudio/shopping__3__b089a360.webp'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-realme-gt6',
    name: 'realme GT 6 5G (Fluid Silver · AI Flagship Killer)',
    slug: 'realme-gt-6-5g-fluid-silver',
    brand: 'realme',
    category: 'smartphones',
    pricePaise: 3899900, // ₹38,999.00
    originalPricePaise: 4499900, // ₹44,999.00
    discountPercentage: 13,
    rating: 4.9,
    reviewCount: 410,
    stock: 25,
    isFeatured: true,
    isNewArrival: true,
    sku: 'RLM-GT6-512-SLV',
    description: 'Top-tier performance with Snapdragon 8s Gen 3, world-record 6000 nits 8T LTPO AMOLED screen, 50MP Sony LYT-808 OIS camera, 50MP 2x Telephoto, and blistering 120W Ultra Charge powering a massive 5500 mAh battery.',
    features: [
      '6.78" 1.5K 120Hz 8T LTPO AMOLED with world record 6000 nits peak brightness',
      'Qualcomm Snapdragon 8s Gen 3 processor with 10,014mm² Dual VC cooling',
      '50MP Sony LYT-808 OIS main sensor + 50MP Samsung JN5 2x Telephoto zoom',
      '120W Ultra Charge powers 5500 mAh battery from 1% to 100% in 28 mins',
      'NextAI Smart Removal, Smart Loop, and AI Night Vision mode'
    ],
    specs: {
      'Display': '6.78" 1.5K 120Hz 8T LTPO AMOLED (6000 nits)',
      'Processor': 'Qualcomm Snapdragon 8s Gen 3 (4nm)',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Camera': '50MP Sony LYT-808 OIS + 50MP 2x Telephoto + 8MP Wide',
      'Battery': '5500 mAh Dual-Cell with 120W Ultra Charge',
      'Color': 'Fluid Silver'
    },
    images: [
      '/public/images/smartphones/realme_gt_6.jpg',
      '/public/assets/aistudio/images__24__4d3313b5.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-oppo-reno10',
    name: 'OPPO Reno10 Pro 5G (Glossy Lavender 3D Curved Edition)',
    slug: 'oppo-reno-10-pro-5g-lavender',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 3799900, // ₹37,999.00
    originalPricePaise: 4299900, // ₹42,999.00
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 428,
    stock: 28,
    isFeatured: true,
    isNewArrival: false,
    sku: 'OPPO-R10P-LAVENDER',
    description: 'Flagship portrait expert in signature Glossy Lavender. Equipped with 32MP Sony IMX709 Telephoto Portrait Camera, 80W SUPERVOOC flash charge, 120Hz 3D curved borderless OLED screen, and ColorOS fluid animations.',
    features: [
      '32MP Sony IMX709 Telephoto Portrait Camera with 2x optical zoom',
      '120Hz 3D Curved borderless AMOLED screen with 1.07 billion colors',
      '80W SUPERVOOC flash charge powers 4600 mAh battery to 100% in 28 mins',
      'Ultra-slim 7.89mm lightweight curved chassis with anti-fingerprint velvet glass'
    ],
    specs: {
      'Display': '6.7" 3D Curved 120Hz ProXDR OLED',
      'Processor': 'Qualcomm Snapdragon 778G 5G Octa-Core (6nm)',
      'RAM & Storage': '12GB LPDDR4X + 256GB UFS 2.2',
      'Camera': '50MP Sony IMX890 OIS + 32MP Telephoto + 8MP Ultra-wide',
      'Battery': '4600 mAh with 80W SUPERVOOC Flash Charge',
      'Color': 'Glossy Lilac Lavender'
    },
    images: [
      '/public/images/smartphones/oppo_reno10_pro_lavender.jpg',
      '/public/assets/aistudio/images__34__001b85b0.jpg'
    ],
    warranty: '1 Year Brand Warranty with Doorstep Service'
  },
  {
    id: 'prod-phone-realme-13proplus',
    name: 'realme 13 Pro+ 5G (Monet Gold · Ultra Clear Camera)',
    slug: 'realme-13-pro-plus-5g-monet-gold',
    brand: 'realme',
    category: 'smartphones',
    pricePaise: 3299900, // ₹32,999.00
    originalPricePaise: 3699900, // ₹36,999.00
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 385,
    stock: 30,
    isFeatured: true,
    isNewArrival: true,
    sku: 'RLM-13PP-512-GOLD',
    description: 'Master of light inspired by Monet impressionism. Features dual Sony lenses: 50MP Sony LYT-701 with OIS and 50MP Sony LYT-600 3x Periscope Telephoto with 120x SuperZoom, 80W Ultra Charge, and IP65 dust/water resistance.',
    features: [
      'Impressionist Monet Gold brushed glass back with luxury watch fluted bezel',
      'World-first Sony LYT-701 50MP OIS Main + Sony LYT-600 50MP 3x Periscope zoom',
      'HYPERIMAGE+ architecture for cinematic professional portrait bokeh',
      '80W Ultra Charge with massive 5200 mAh 4-year long-life battery',
      '6.7" 120Hz Curved Vision AMOLED with Corning Gorilla Glass 7i'
    ],
    specs: {
      'Display': '6.7" 120Hz Curved Vision AMOLED (2000 nits)',
      'Processor': 'Qualcomm Snapdragon 7s Gen 2 (4nm)',
      'RAM & Storage': '12GB LPDDR4X + 512GB Storage',
      'Camera': '50MP Sony LYT-701 OIS + 50MP 3x Periscope + 8MP Wide',
      'Battery': '5200 mAh with 80W Ultra Charge',
      'Color': 'Monet Gold'
    },
    images: [
      '/public/images/smartphones/realme_13_pro_plus.jpg',
      '/public/assets/aistudio/images__28__b77369be.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-peace-white',
    name: 'PEACE Cyber Minimalist 5G Flagship (Satin Ceramic White)',
    slug: 'peace-minimalist-5g-ceramic-white',
    brand: 'PEACE Tech',
    category: 'smartphones',
    pricePaise: 3299900, // ₹32,999.00
    originalPricePaise: 3999900, // ₹39,999.00
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 260,
    stock: 20,
    isFeatured: true,
    isNewArrival: false,
    sku: 'PEACE-5G-CERAMIC-WHT',
    description: 'Pure architectural minimalism. Monolithic Satin Ceramic unibody in clean pearl white, flush triple camera module, Qualcomm Snapdragon 8s Gen 3 silicon, and zero bloatware clean OS.',
    features: [
      'Micro-crystalline Satin Ceramic unibody with feather-touch matte texture',
      'Triple circular camera cluster flush with chassis backplate',
      'Snapdragon 8s Gen 3 processor tuned for ultra-responsive low-latency gaming',
      '1.5K 144Hz Bezel-less OLED screen with 3840Hz eye-comfort PWM dimming',
      '65W Gallium Nitride (GaN) fast charger bundled in box'
    ],
    specs: {
      'Display': '6.67" 1.5K 144Hz Bezel-less OLED',
      'Processor': 'Qualcomm Snapdragon 8s Gen 3 (4nm)',
      'Camera': '64MP Sony IMX890 OIS + 12MP Ultra-wide + 8MP Telephoto',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Color': 'Satin Ceramic White'
    },
    images: [
      '/public/images/smartphones/peace_ceramic_white_5g.jpg',
      '/public/assets/aistudio/images__9__9d38d4c3.jpg'
    ],
    warranty: '1 Year Doorstep Replacement Warranty'
  },
  {
    id: 'prod-phone-redmi-note13proplus',
    name: 'Redmi Note 13 Pro+ 5G (Fusion Purple · 200MP OIS · 120W)',
    slug: 'redmi-note-13-pro-plus-5g-purple',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 2999900, // ₹29,999.00
    originalPricePaise: 3399900, // ₹33,999.00
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 780,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'RED-N13PP-256-PURPLE',
    description: 'SuperNote flagship in striking vegan leather Fusion Purple. 3D Curved 1.5K CrystalRes AMOLED display, 200MP Samsung ISOCELL HP3 camera with OIS, MediaTek Dimensity 7200-Ultra, IP68 water resistance, and 120W HyperCharge (100% in 19 mins).',
    features: [
      '6.67" 3D Curved 1.5K 120Hz CrystalRes AMOLED with Gorilla Glass Victus',
      '200MP Samsung HP3 Flagship Camera with Super QPD autofocus and OIS',
      '120W HyperCharge charges 5000 mAh battery from 0 to 100% in 19 minutes',
      'MediaTek Dimensity 7200-Ultra (4nm) processor with 4000mm² VC liquid cooling',
      'IP68 certified water and dust resistance for worry-free all-weather usage'
    ],
    specs: {
      'Display': '6.67" 1.5K 120Hz Curved AMOLED (1800 nits)',
      'Processor': 'MediaTek Dimensity 7200-Ultra (4nm)',
      'RAM & Storage': '12GB LPDDR5 + 256GB UFS 3.1',
      'Camera': '200MP OIS + 8MP Ultra-wide + 2MP Macro',
      'Battery': '5000 mAh with 120W HyperCharge',
      'Color': 'Fusion Purple Vegan Leather'
    },
    images: [
      '/public/images/smartphones/redmi_note_13_pro_plus.jpg',
      '/public/assets/aistudio/images__22__97bde4fa.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-poco-f6',
    name: 'POCO F6 5G (Titanium Black · Snapdragon 8s Gen 3)',
    slug: 'poco-f6-5g-titanium-black',
    brand: 'POCO',
    category: 'smartphones',
    pricePaise: 2999900, // ₹29,999.00
    originalPricePaise: 3599900, // ₹35,999.00
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 650,
    stock: 32,
    isFeatured: true,
    isNewArrival: true,
    sku: 'POCO-F6-512-TITAN',
    description: 'Flagship killer reborn with Qualcomm Snapdragon 8s Gen 3 (AnTuTu 1.53M+), 1.5K 120Hz AMOLED with 2400 nits, 50MP Sony IMX882 OIS camera, 90W Turbo charging, and WildBoost 3.0 gaming engine.',
    features: [
      'Qualcomm Snapdragon 8s Gen 3 processor tuned for sustained 120fps gaming',
      '6.67" 1.5K 120Hz Flow AMOLED with Dolby Vision and Gorilla Glass Victus',
      '50MP Sony IMX882 main sensor with OIS and 4K 60fps HDR10+ recording',
      '90W Turbo Charge powers 5000 mAh battery to 100% in 30 mins',
      'Iceloop cooling technology delivers 3x better heat dissipation than traditional VC'
    ],
    specs: {
      'Display': '6.67" 1.5K 120Hz Flow AMOLED (2400 nits)',
      'Processor': 'Qualcomm Snapdragon 8s Gen 3 (4nm)',
      'RAM & Storage': '12GB LPDDR5X + 512GB UFS 4.0',
      'Camera': '50MP Sony IMX882 OIS + 8MP Ultra-wide',
      'Battery': '5000 mAh with 90W Turbo Charge',
      'Color': 'Titanium Black'
    },
    images: [
      '/public/images/smartphones/poco_f6_5g.jpg',
      '/public/assets/aistudio/images__20__56d08058.jpg'
    ],
    warranty: '1 Year Brand Warranty with Doorstep Service'
  },
  {
    id: 'prod-phone-realme-12proplus',
    name: 'realme 12 Pro+ 5G (Submarine Blue · Luxury Dial)',
    slug: 'realme-12-pro-plus-5g-blue',
    brand: 'realme',
    category: 'smartphones',
    pricePaise: 2799900, // ₹27,999.00
    originalPricePaise: 3299900, // ₹32,999.00
    discountPercentage: 15,
    rating: 4.8,
    reviewCount: 490,
    stock: 28,
    isFeatured: false,
    isNewArrival: false,
    sku: 'RLM-12PP-256-BLUE',
    description: 'Co-designed with luxury watchmaker Ollivier Savéo. Premium vegan leather in Submarine Blue with golden fluted bezel, 64MP Periscope Telephoto with 3x optical zoom, 50MP Sony IMX890 OIS, and 120Hz Curved AMOLED.',
    features: [
      'Luxury Swiss watch dial design with golden fluted bezel and 3D Jubilee bracelet stripe',
      '64MP OV64B Periscope Telephoto with 3x optical zoom and 120x SuperZoom',
      '50MP Sony IMX890 main camera with RAW domain computational photography',
      '67W SUPERVOOC fast charge with 5000 mAh high-capacity battery',
      '6.7" 120Hz Curved AMOLED with 2160Hz high-frequency PWM dimming'
    ],
    specs: {
      'Display': '6.7" 120Hz Curved Vision AMOLED (950 nits)',
      'Processor': 'Qualcomm Snapdragon 7s Gen 2 (4nm)',
      'RAM & Storage': '8GB LPDDR4X + 256GB Storage',
      'Camera': '50MP Sony IMX890 OIS + 64MP 3x Periscope + 8MP Wide',
      'Battery': '5000 mAh with 67W SUPERVOOC',
      'Color': 'Submarine Blue Vegan Leather'
    },
    images: [
      '/public/images/smartphones/realme_p1_copper.jpg',
      '/public/images/smartphones/realme_13_pro_plus.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-galaxy-a35',
    name: 'Samsung Galaxy A35 5G (Awesome Lilac · Super AMOLED)',
    slug: 'samsung-galaxy-a35-5g-lilac',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 2799900, // ₹27,999.00
    originalPricePaise: 3399900, // ₹33,999.00
    discountPercentage: 18,
    rating: 4.8,
    reviewCount: 470,
    stock: 35,
    isFeatured: false,
    isNewArrival: true,
    sku: 'SAM-A35-128-LILAC',
    description: 'Clean glass back design with linear camera layout in Awesome Lilac. Featuring 6.6" FHD+ Super AMOLED 120Hz with Vision Booster, Exynos 1380 processor, 50MP OIS camera, IP67 water resistance, and Samsung Knox Vault.',
    features: [
      '6.6" FHD+ Super AMOLED Infinity-O 120Hz display with 1000 nits high brightness',
      'Premium glass back in Awesome Lilac with linear floating camera aesthetic',
      '50MP Main Camera with OIS and VDIS for shake-free 4K video recording',
      'Samsung Knox Vault hardware-based security for passwords and credentials',
      '5000 mAh battery with 25W Fast Charging and IP67 water/dust certification'
    ],
    specs: {
      'Display': '6.6" Super AMOLED 120Hz Vision Booster (1000 nits)',
      'Processor': 'Samsung Exynos 1380 Octa-Core (5nm)',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable)',
      'Camera': '50MP OIS + 8MP Ultra-wide + 5MP Macro',
      'Battery': '5000 mAh with 25W Fast Charge',
      'Color': 'Awesome Lilac'
    },
    images: [
      '/public/images/smartphones/shopping_3.webp',
      '/public/images/smartphones/samsung_galaxy_a55.webp'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-poco-x6pro',
    name: 'POCO X6 Pro 5G (Racing Yellow · Dimensity 8300-Ultra)',
    slug: 'poco-x6-pro-5g-racing-yellow',
    brand: 'POCO',
    category: 'smartphones',
    pricePaise: 2499900, // ₹24,999.00
    originalPricePaise: 2899900, // ₹28,999.00
    discountPercentage: 14,
    rating: 4.9,
    reviewCount: 890,
    stock: 40,
    isFeatured: true,
    isNewArrival: false,
    sku: 'POCO-X6P-512-YEL',
    description: 'Fastest smartphone in its segment powered by MediaTek Dimensity 8300-Ultra (4nm, AnTuTu 1.46M+). Features 1.5K 120Hz Flow AMOLED, 64MP OIS camera, 67W Turbo charging, and striking Racing Yellow vegan leather back.',
    features: [
      'MediaTek Dimensity 8300-Ultra flagship chipset scoring over 1.46 Million on AnTuTu',
      '6.67" 1.5K 120Hz Flow AMOLED with ultra-slim 1.3mm side bezels',
      '64MP OIS primary camera with 2x in-sensor zoom and 4K video recording',
      '67W Turbo Charge with 5000 mAh battery (100% in 45 mins)',
      'WildBoost Gaming 2.0 optimization and 5000mm² LiquidCool 2.0 chamber'
    ],
    specs: {
      'Display': '6.67" 1.5K 120Hz Flow AMOLED (1800 nits)',
      'Processor': 'MediaTek Dimensity 8300-Ultra (4nm)',
      'RAM & Storage': '12GB LPDDR5X + 512GB UFS 4.0',
      'Camera': '64MP OIS + 8MP Ultra-wide + 2MP Macro',
      'Battery': '5000 mAh with 67W Turbo Charge',
      'Color': 'Racing Yellow Vegan Leather'
    },
    images: [
      '/public/images/smartphones/poco_x6_pro.jpg',
      '/public/assets/aistudio/images__23__52ef7335.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-nord-purple',
    name: 'OnePlus Nord CE4 5G (Dark Mauve / Plum Purple)',
    slug: 'oneplus-nord-ce4-5g-plum-purple',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 2499900, // ₹24,999.00
    originalPricePaise: 2899900, // ₹28,999.00
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 420,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-NORD-CE4-PLUM',
    description: 'Smooth redefined in stunning Plum Mauve Purple. Powered by Qualcomm Snapdragon 7 Gen 3, blistering 100W SUPERVOOC charging (1-100% in 29 min), and 50MP Sony LYT-600 with Optical Image Stabilization.',
    features: [
      'Qualcomm Snapdragon 7 Gen 3 octa-core chip with 4nm flagship efficiency',
      '100W SUPERVOOC fast charge powers 5500 mAh battery from 1% to 100% in 29 mins',
      '50MP Sony LYT-600 main camera with RAW HDR and Optical Image Stabilization',
      '6.7" 120Hz Fluid AMOLED display with Aqua Touch wet-finger technology',
      'OxygenOS 14 based on Android 14 with guaranteed multi-year updates'
    ],
    specs: {
      'Display': '6.7" 120Hz FHD+ Fluid AMOLED with HDR10+',
      'Processor': 'Qualcomm Snapdragon 7 Gen 3 (4nm)',
      'RAM & Storage': '8GB LPDDR4X + 256GB UFS 3.1 (1TB expandable)',
      'Battery': '5500 mAh with 100W SUPERVOOC Flash Charge',
      'Color': 'Dark Mauve / Plum Purple'
    },
    images: [
      '/public/images/smartphones/nord_mauve_purple_5g.jpg',
      '/public/images/smartphones/oneplus_nord_mauve_purple.jpg',
      '/public/assets/aistudio/images__7__2c7dd9e4.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-redmi-note15-crimson',
    name: 'Redmi Note 15 5G Special Edition (Crimson Wine Leather 5800mAh)',
    slug: 'redmi-note-15-pro-crimson-burgundy',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 2299900, // ₹22,999.00
    originalPricePaise: 2899900, // ₹28,999.00
    discountPercentage: 21,
    rating: 4.8,
    reviewCount: 395,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'RED-N15-CRIMSON',
    description: "Segment's slimmest 7.35mm curved smartphone with massive 5800 mAh all-day battery, premium textured vegan leather finish in Crimson Wine, and gold-accented quad camera ring with 4+6 years update guarantee.",
    features: [
      'Segment slimmest and lightest 5800 mAh 5G smartphone at just 7.35mm',
      'Luxury textured vegan leather back with gold-accent quad camera ring',
      '7.35mm Ultra-slim 3D Curved 1.5K 120Hz AMOLED display',
      '67W Turbo Charge with smart battery health engine',
      'Guaranteed 4 major OS updates + 6 years security update commitment'
    ],
    specs: {
      'Display': '6.67" 1.5K 120Hz Curved AMOLED Display',
      'Processor': 'Qualcomm Snapdragon 6 Gen 3 5G (4nm)',
      'RAM & Storage': '8GB LPDDR4X + 256GB UFS 2.2',
      'Battery': '5800 mAh High-Density Cell with 67W Turbo',
      'Finish': 'Textured Vegan Leather Crimson Wine',
      'Camera': '108MP OIS Ultra-Clear + 8MP Wide + 16MP Selfie'
    },
    images: [
      '/public/images/smartphones/redmi_note_15_special_crimson.webp',
      '/public/assets/aistudio/shopping__5__a7ee5f59.webp'
    ],
    warranty: '1 Year Brand Warranty with Free Screen Replacement'
  },
  {
    id: 'prod-phone-narzo-70pro',
    name: 'realme Narzo 70 Pro 5G (Glass Green · Sony IMX890 OIS)',
    slug: 'realme-narzo-70-pro-5g-glass-green',
    brand: 'realme Narzo',
    category: 'smartphones',
    pricePaise: 1799900, // ₹17,999.00
    originalPricePaise: 2199900, // ₹21,999.00
    discountPercentage: 18,
    rating: 4.8,
    reviewCount: 530,
    stock: 42,
    isFeatured: true,
    isNewArrival: true,
    sku: 'NARZO-70P-128-GRN',
    description: "Segment's first smartphone with flagship 50MP Sony IMX890 OIS camera, Duo Touch Glass back in Glass Green, innovative Air Gestures for touchless controls, 67W SUPERVOOC charging, and 120Hz AMOLED.",
    features: [
      'Flagship 50MP Sony IMX890 sensor with OIS and MasterShot Algorithm',
      'Creative Air Gestures allow swiping and answering calls without touching screen',
      'Premium Horizon Glass design with contrasting frosted and polished surfaces',
      '67W SUPERVOOC charges 5000 mAh battery to 50% in just 19 minutes',
      'Rainwater Smart Touch ensures smooth touch responsiveness even with wet hands'
    ],
    specs: {
      'Display': '6.67" 120Hz AMOLED (2000 nits peak)',
      'Processor': 'MediaTek Dimensity 7050 5G (6nm)',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable)',
      'Camera': '50MP Sony IMX890 OIS + 8MP Ultra-wide + 2MP Macro',
      'Battery': '5000 mAh with 67W SUPERVOOC',
      'Color': 'Glass Green'
    },
    images: [
      '/public/images/smartphones/realme_narzo_70_pro.webp',
      '/public/assets/aistudio/shopping__6__1a64dc3b.webp'
    ],
    warranty: '1 Year Brand Warranty with Doorstep Service'
  },
  {
    id: 'prod-phone-oppo-a79',
    name: 'OPPO A79 5G (Glowing Green · Feather Design)',
    slug: 'oppo-a79-5g-glowing-green',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 1749900, // ₹17,499.00
    originalPricePaise: 2199900, // ₹21,999.00
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 390,
    stock: 38,
    isFeatured: false,
    isNewArrival: false,
    sku: 'OPPO-A79-128-GRN',
    description: 'Shimmering Glowing Feather back design in Glowing Green. Featuring 6.72" 90Hz FHD+ Sunlight Display, 50MP AI Dual Camera, Dual Stereo Speakers with 300% Ultra Volume Mode, and 33W SUPERVOOC.',
    features: [
      'Unique Glowing Feather texture that shimmers with shifting ambient lighting',
      '6.72" FHD+ Sunlight Display with 680 nits high brightness and eye protection',
      'Dual Stereo Speakers with 300% Ultra Volume mode for booming immersive audio',
      '50MP AI camera captures vibrant colors and clear low-light portraits',
      '33W SUPERVOOC fast charge powers 5000 mAh battery to 51% in 30 mins'
    ],
    specs: {
      'Display': '6.72" FHD+ 90Hz Sunlight Display',
      'Processor': 'MediaTek Dimensity 6020 Octa-Core (7nm)',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable up to 1TB)',
      'Camera': '50MP AI Main + 2MP Portrait Lens',
      'Battery': '5000 mAh with 33W SUPERVOOC',
      'Color': 'Glowing Green'
    },
    images: [
      '/public/images/smartphones/oppo_a79_5g.jpg',
      '/public/assets/aistudio/images__21__eb4cd2c2.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-redmi-note13',
    name: 'Redmi Note 13 5G (Prism Gold · 108MP 3x Zoom)',
    slug: 'redmi-note-13-5g-prism-gold',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 1599900, // ₹15,999.00
    originalPricePaise: 2099900, // ₹20,999.00
    discountPercentage: 24,
    rating: 4.8,
    reviewCount: 670,
    stock: 45,
    isFeatured: true,
    isNewArrival: false,
    sku: 'RED-N13-128-GOLD',
    description: "Super-slim 7.6mm chassis with ultra-thin 1.5mm display bezels. Features 6.67\" 120Hz AMOLED, 108MP 3x in-sensor zoom camera, MediaTek Dimensity 6080 5G processor, and 33W fast charging.",
    features: [
      '6.67" 120Hz AMOLED with ultra-slim symmetrical bezels and Corning Gorilla Glass 5',
      '108MP Pro-grade camera with 3x lossless in-sensor optical-grade zoom',
      '7.6mm ultra-slim lightweight ergonomic body weighing just 173.5g',
      'MediaTek Dimensity 6080 5G octa-core processor with dual 5G SIM standby',
      '5000 mAh battery with 33W fast charger bundled in box'
    ],
    specs: {
      'Display': '6.67" 120Hz FHD+ AMOLED (1000 nits)',
      'Processor': 'MediaTek Dimensity 6080 5G (6nm)',
      'RAM & Storage': '6GB LPDDR4X + 128GB UFS 2.2',
      'Camera': '108MP 3x Zoom + 2MP Macro + 16MP Selfie',
      'Battery': '5000 mAh with 33W Fast Charge',
      'Color': 'Prism Gold'
    },
    images: [
      '/public/images/smartphones/redmi_note_5g.jpg',
      '/public/images/smartphones/redmi_note_13_pro_plus.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-galaxy-a15',
    name: 'Samsung Galaxy A15 5G (Blue Black · Super AMOLED)',
    slug: 'samsung-galaxy-a15-5g-blue-black',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 1549900, // ₹15,499.00
    originalPricePaise: 1949900, // ₹19,499.00
    discountPercentage: 21,
    rating: 4.7,
    reviewCount: 520,
    stock: 50,
    isFeatured: false,
    isNewArrival: false,
    sku: 'SAM-A15-128-BLK',
    description: 'Crisp 6.5" FHD+ Super AMOLED 90Hz display with Vision Booster, MediaTek Dimensity 6100+ 5G, 50MP triple camera system, Samsung Knox Vault security, and 4 generations of OS updates.',
    features: [
      '6.5" FHD+ Super AMOLED with 90Hz refresh rate and 800 nits Vision Booster',
      '50MP Main Camera captures crisp, vibrant photos with dedicated ultra-wide lens',
      'Certified Samsung Knox Vault provides hardware-level protection for passwords',
      '5000 mAh battery with 25W Super Fast Charging supports all-day workflow',
      'Guaranteed up to 4 generations of OS upgrades and 5 years of security updates'
    ],
    specs: {
      'Display': '6.5" FHD+ Super AMOLED 90Hz (800 nits)',
      'Processor': 'MediaTek Dimensity 6100+ 5G (6nm)',
      'RAM & Storage': '6GB RAM + 128GB Storage (expandable to 1TB)',
      'Camera': '50MP Main + 5MP Ultra-wide + 2MP Macro',
      'Battery': '5000 mAh with 25W Fast Charge',
      'Color': 'Blue Black'
    },
    images: [
      '/public/images/smartphones/samsung_galaxy_a55.webp',
      '/public/images/smartphones/shopping_3.webp'
    ],
    warranty: '1 Year Samsung India Warranty'
  },
  {
    id: 'prod-phone-realme-p1-red',
    name: 'realme P1 5G (Phoenix Amber Red - Best AMOLED Under 15K)',
    slug: 'realme-p1-5g-phoenix-amber',
    brand: 'realme',
    category: 'smartphones',
    pricePaise: 1499900, // ₹14,999.00
    originalPricePaise: 1999900, // ₹19,999.00
    discountPercentage: 25,
    rating: 4.8,
    reviewCount: 380,
    stock: 45,
    isFeatured: true,
    isNewArrival: false,
    sku: 'RLM-P1-AMBER-RED',
    description: 'Best AMOLED display under ₹15,000. Features 120Hz smooth AMOLED, Phoenix Feather textured backplate in Phoenix Amber Red, circular camera dial, 45W SUPERVOOC, and 5G dual SIM support.',
    features: [
      'Best AMOLED Display Under ₹15K with 120Hz ultra-smooth refresh rate',
      'Phoenix Feather micro-crystal textured back in striking Amber Red',
      '50MP AI primary camera with high-resolution portrait bokeh',
      '45W SUPERVOOC fast charge with 5000 mAh massive battery',
      'MediaTek Dimensity 7050 5G processor with 7-layer vapor cooling'
    ],
    specs: {
      'Display': '6.67" 120Hz AMOLED, 2000 nits peak brightness',
      'Processor': 'MediaTek Dimensity 7050 5G (6nm)',
      'RAM & Storage': '8GB RAM + 128GB Storage (expandable)',
      'Camera': '50MP AI Primary + 2MP Depth + 16MP Selfie',
      'Battery': '5000 mAh with 45W SUPERVOOC Fast Charging',
      'Color': 'Phoenix Amber Red'
    },
    images: [
      '/public/images/smartphones/realme_p1_phoenix_red.jpg',
      '/public/assets/aistudio/images__33__9b663a62.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-13-5g',
    name: 'Redmi 13 5G (Hawaiian Blue · Crystal Glass Back · 108MP)',
    slug: 'redmi-13-5g-hawaiian-blue',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 1299900, // ₹12,999.00
    originalPricePaise: 1599900, // ₹15,999.00
    discountPercentage: 19,
    rating: 4.8,
    reviewCount: 450,
    stock: 55,
    isFeatured: false,
    isNewArrival: true,
    sku: 'RED-13-128-BLUE',
    description: "Segment's only double-sided glass smartphone in Hawaiian Blue. Powered by Snapdragon 4 Gen 2 Accelerated Edition (4nm), 108MP 3x zoom camera, 6.79\" 120Hz AdaptiveSync display, and 33W fast charge.",
    features: [
      'Premium double-sided crystal glass finish with shimmering Hawaiian Blue pattern',
      'Qualcomm Snapdragon 4 Gen 2 AE (4nm) processor delivering smooth 5G speeds',
      '108MP Pro-grade primary camera with 3x lossless zoom sensor',
      'Segment-largest 6.79" 120Hz FHD+ AdaptiveSync display with wet-touch support',
      '5030 mAh battery with 33W fast charging adapter included in box'
    ],
    specs: {
      'Display': '6.79" 120Hz FHD+ AdaptiveSync Display',
      'Processor': 'Qualcomm Snapdragon 4 Gen 2 AE (4nm)',
      'RAM & Storage': '6GB RAM + 128GB Storage (expandable to 1TB)',
      'Camera': '108MP AI Main + 2MP Macro + 13MP Selfie',
      'Battery': '5030 mAh with 33W Fast Charge',
      'Color': 'Hawaiian Blue Crystal Glass'
    },
    images: [
      '/public/images/smartphones/redmi_13_5g.jpg',
      '/public/assets/aistudio/images__26__f5b5523b.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-narzo-70x',
    name: 'realme Narzo 70x 5G (Forest Green · 45W Flash Charge)',
    slug: 'realme-narzo-70x-5g-forest-green',
    brand: 'realme Narzo',
    category: 'smartphones',
    pricePaise: 1249900, // ₹12,499.00
    originalPricePaise: 1599900, // ₹15,999.00
    discountPercentage: 22,
    rating: 4.7,
    reviewCount: 510,
    stock: 48,
    isFeatured: false,
    isNewArrival: true,
    sku: 'NARZO-70X-128-GRN',
    description: "Segment's fastest 45W SUPERVOOC charging under ₹13K. 120Hz Ultra Smooth display, MediaTek Dimensity 6100+ 5G, 50MP AI camera, Dual Stereo Speakers, and IP54 dust and splash resistance.",
    features: [
      'Fastest 45W SUPERVOOC in the price segment charges 5000 mAh battery to 50% in 31 mins',
      '6.72" 120Hz FHD+ Ultra Smooth display with 950 nits high brightness mode',
      '50MP AI primary camera with high-clarity street photography filters',
      'Dual Stereo Speakers with Hi-Res Audio certification for deep bass playback',
      'IP54 dust and water resistance with Rainwater Smart Touch technology'
    ],
    specs: {
      'Display': '6.72" 120Hz FHD+ Ultra Smooth Display',
      'Processor': 'MediaTek Dimensity 6100+ 5G (6nm)',
      'RAM & Storage': '6GB RAM + 128GB Storage (expandable)',
      'Camera': '50MP AI Main + 2MP Depth',
      'Battery': '5000 mAh with 45W SUPERVOOC',
      'Color': 'Forest Green'
    },
    images: [
      '/public/images/smartphones/realme_narzo_70x.jpg',
      '/public/assets/aistudio/images__25__e5eccdda.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-poco-m6pro',
    name: 'POCO M6 Pro 5G (Power Black · Snapdragon 4 Gen 2)',
    slug: 'poco-m6-pro-5g-power-black',
    brand: 'POCO',
    category: 'smartphones',
    pricePaise: 1199900, // ₹11,999.00
    originalPricePaise: 1599900, // ₹15,999.00
    discountPercentage: 25,
    rating: 4.7,
    reviewCount: 640,
    stock: 52,
    isFeatured: false,
    isNewArrival: false,
    sku: 'POCO-M6P-128-BLK',
    description: "Segment's most affordable premium glass back 5G smartphone. Featuring Snapdragon 4 Gen 2 (4nm), 6.79\" 90Hz FHD+ display, 50MP AI dual camera, and 5000 mAh battery.",
    features: [
      'Qualcomm Snapdragon 4 Gen 2 (4nm) processor delivering reliable 5G multi-tasking',
      'Premium dual-tone glass back with iconic POCO camera visor',
      '6.79" 90Hz FHD+ display with SGS Low Blue Light certification',
      '50MP AI primary camera with portrait mode and night photography',
      '5000 mAh battery with 18W Type-C fast charge support'
    ],
    specs: {
      'Display': '6.79" 90Hz FHD+ Display with Gorilla Glass 3',
      'Processor': 'Qualcomm Snapdragon 4 Gen 2 (4nm)',
      'RAM & Storage': '6GB LPDDR4X + 128GB UFS 2.2',
      'Camera': '50MP AI Primary + 2MP Depth',
      'Battery': '5000 mAh with 18W Fast Charge',
      'Color': 'Power Black'
    },
    images: [
      '/public/images/smartphones/poco_f6_5g.jpg',
      '/public/images/smartphones/poco_c75_5g_oceanic_green.jpg'
    ],
    warranty: '1 Year Brand Comprehensive Warranty'
  },
  {
    id: 'prod-phone-narzo-n65',
    name: 'realme Narzo N65 5G (Amber Gold · Dimensity 6300)',
    slug: 'realme-narzo-n65-5g-amber-gold',
    brand: 'realme Narzo',
    category: 'smartphones',
    pricePaise: 1099900, // ₹10,999.00
    originalPricePaise: 1399900, // ₹13,999.00
    discountPercentage: 21,
    rating: 4.7,
    reviewCount: 420,
    stock: 46,
    isFeatured: false,
    isNewArrival: true,
    sku: 'NARZO-N65-128-GLD',
    description: 'World-first MediaTek Dimensity 6300 5G chipset (6nm). Equipped with 120Hz Eye Comfort display, 50MP AI camera with NightEye, Rainwater Smart Touch, 5000 mAh battery, and ultra-slim 7.89mm design in Amber Gold.',
    features: [
      'World-first MediaTek Dimensity 6300 5G processor scoring 400K+ on AnTuTu',
      '6.67" 120Hz Eye Comfort display with TUV Rheinland low blue light certification',
      '50MP AI main camera with NightEye computational algorithms',
      '7.89mm ultra-slim lightweight chassis with sparkling Amber Gold sunburst design',
      '5000 mAh massive battery with Smart 15W Quick Charge'
    ],
    specs: {
      'Display': '6.67" 120Hz HD+ Eye Comfort Display',
      'Processor': 'MediaTek Dimensity 6300 5G (6nm)',
      'RAM & Storage': '6GB RAM + 128GB Storage (expandable to 2TB)',
      'Camera': '50MP AI Main + Secondary Lens',
      'Battery': '5000 mAh with 15W Fast Charge',
      'Color': 'Amber Gold'
    },
    images: [
      '/public/images/smartphones/realme_narzo_70x.jpg',
      '/public/images/smartphones/realme_narzo_70_pro.webp'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-13c-5g',
    name: 'Redmi 13C 5G (Starlight Silver · Star Trail Design)',
    slug: 'redmi-13c-5g-starlight-silver',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 949900, // ₹9,499.00
    originalPricePaise: 1399900, // ₹13,999.00
    discountPercentage: 32,
    rating: 4.7,
    reviewCount: 710,
    stock: 60,
    isFeatured: false,
    isNewArrival: false,
    sku: 'RED-13C-128-SLV',
    description: "Most affordable MediaTek Dimensity 6100+ 5G smartphone. Features dynamic Star Trail design in Starlight Silver, 6.74\" 90Hz display with Gorilla Glass, 50MP AI dual camera, and 5000 mAh battery.",
    features: [
      'MediaTek Dimensity 6100+ 5G (6nm) processor with dual 5G SIM support',
      'Dynamic Star Trail pattern shines with radiant metallic light reflections',
      '6.74" 90Hz smooth display protected by tough Corning Gorilla Glass',
      '50MP AI primary camera with classic film filters and portrait bokeh',
      '5000 mAh battery with 18W fast charging support and side fingerprint sensor'
    ],
    specs: {
      'Display': '6.74" 90Hz HD+ Display with Gorilla Glass',
      'Processor': 'MediaTek Dimensity 6100+ 5G (6nm)',
      'RAM & Storage': '4GB RAM + 128GB Storage (expandable to 1TB)',
      'Camera': '50MP AI Dual Camera',
      'Battery': '5000 mAh with 18W Fast Charge',
      'Color': 'Starlight Silver'
    },
    images: [
      '/public/images/smartphones/budget_smart_4g.jpg',
      '/public/images/smartphones/redmi_13_5g.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-poco-c75-marble',
    name: 'POCO C75 5G (Oceanic Green Marble - 4nm Snapdragon 4s Gen 2)',
    slug: 'poco-c75-5g-oceanic-marble-green',
    brand: 'POCO',
    category: 'smartphones',
    pricePaise: 899900, // ₹8,999.00
    originalPricePaise: 1299900, // ₹12,999.00
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 365,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'POCO-C75-5G-GREEN',
    description: "Segment's only 4nm 5G Snapdragon 4s Gen 2 processor, segment's largest 6.88\" 120Hz display, and 50MP Sony AI camera. Finished in exquisite flowing Oceanic Green marble texture.",
    features: [
      "Segment's only 4nm 5G Qualcomm Snapdragon 4s Gen 2 processor",
      "Segment's largest 6.88\" 120Hz ultra-smooth display with TUV Rheinland certification",
      '50MP Sony AI primary camera with night mode and HDR portrait engine',
      'Unique flowing Oceanic Green natural marble pattern finish',
      '5160 mAh long-lasting battery with 18W Type-C fast charging'
    ],
    specs: {
      'Display': '6.88" 120Hz HD+ Dot Drop Display',
      'Processor': 'Qualcomm Snapdragon 4s Gen 2 5G (4nm)',
      'Camera': '50MP Sony AI Main Camera + Secondary Lens',
      'RAM & Storage': '6GB LPDDR4X + 128GB UFS 2.2 (expandable up to 1TB)',
      'Battery': '5160 mAh with 18W Fast Charge',
      'Color': 'Oceanic Green Marble'
    },
    images: [
      '/public/images/smartphones/poco_c75_5g_oceanic_green.jpg',
      '/public/assets/aistudio/images__27__40eb6878.jpg'
    ],
    warranty: '1 Year Brand Warranty'
  },
  {
    id: 'prod-phone-iphone18-plum',
    name: 'Apple iPhone 18 Pro (Deep Burgundy Plum · A19 Pro)',
    slug: 'apple-iphone-18-pro-deep-burgundy-plum',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 15890000, // ₹1,58,900.00
    originalPricePaise: 16990000, // ₹1,69,900.00
    discountPercentage: 6,
    rating: 4.9,
    reviewCount: 312,
    stock: 42,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IPHONE-18-PRO-PLUM',
    description: 'Next-generation Apple flagship powered by the groundbreaking 2nm A19 Pro Bionic chip. Featuring ultra-durable Titanium frame in Deep Burgundy Plum, Dynamic Island, and ProMotion 120Hz Super Retina XDR display.',
    features: [
      'Next-gen A19 Pro Bionic processor built on 2nm architecture',
      '6.3" ProMotion 120Hz Super Retina XDR OLED display with Always-On',
      '48MP Triple Fusion Camera with 5x Optical Periscope Zoom',
      'Exquisite Titanium Deep Burgundy Plum frosted glass design',
      'USB-C 3.2 Gen 2 transfer speeds and MagSafe fast wireless charging'
    ],
    specs: {
      'Display': '6.3" 120Hz Super Retina XDR OLED',
      'Processor': 'Apple A19 Pro Bionic (2nm)',
      'Camera': '48MP Main + 48MP Ultra-Wide + 48MP 5x Telephoto',
      'RAM & Storage': '12GB Unified RAM + 256GB Storage',
      'Battery': '4650 mAh with MagSafe 25W Fast Wireless',
      'Color': 'Deep Burgundy Plum'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iphone18_plum.png'
    ],
    warranty: '1 Year Apple Brand Warranty'
  },
  {
    id: 'prod-phone-iphone18-skyblue',
    name: 'Apple iPhone 18 (Sky Blue Ceramic · A18 Pro 3nm)',
    slug: 'apple-iphone-18-sky-blue-ceramic',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 8990000, // ₹89,900.00
    originalPricePaise: 9990000, // ₹99,900.00
    discountPercentage: 10,
    rating: 4.8,
    reviewCount: 278,
    stock: 48,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IPHONE-18-SKY-BLUE',
    description: 'Stunning Sky Blue ceramic finish with Apple A18 Pro silicon, Action Button, and advanced dual 48MP Fusion camera system with next-gen photonic engine.',
    features: [
      'Apple A18 Pro 3nm high-efficiency chipset with 16-core Neural Engine',
      '6.1" Super Retina XDR OLED display with 2000 nits peak outdoor brightness',
      '48MP Dual Fusion Camera with cinematic 4K Dolby Vision HDR recording',
      'Contoured aerospace aluminum enclosure with Sky Blue ceramic back',
      'All-day battery life with USB-C and 25W MagSafe charging'
    ],
    specs: {
      'Display': '6.1" Super Retina XDR OLED',
      'Processor': 'Apple A18 Pro (3nm)',
      'Camera': '48MP Fusion Main + 12MP Ultra-Wide with Macro',
      'RAM & Storage': '8GB RAM + 128GB Storage',
      'Battery': '3877 mAh with 25W MagSafe Fast Charge',
      'Color': 'Sky Blue Ceramic'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iphone18_skyblue.png'
    ],
    warranty: '1 Year Apple Brand Warranty'
  },
  {
    id: 'prod-phone-s24u-amazon-no1',
    name: 'Samsung Galaxy S24 Ultra (No. 1 Best Seller · Titanium Silver S-Pen)',
    slug: 'samsung-galaxy-s24-ultra-no1-seller-titanium-silver',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 9499900, // ₹94,999.00
    originalPricePaise: 13499900, // ₹1,34,999.00
    discountPercentage: 30,
    rating: 4.9,
    reviewCount: 1540,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-S24U-NO1-SILVER',
    description: 'No. 1 Selling Premium Smartphone on Amazon.in above ₹90K. Features Galaxy AI, built-in Titanium S-Pen, 200MP Quad Telephoto Camera, and 6.8" Flat Dynamic AMOLED 2X with Corning Gorilla Armor.',
    features: [
      'Official #1 Best Selling flagship smartphone in India above ₹90,000',
      'Snapdragon 8 Gen 3 for Galaxy with ray-tracing mobile gaming support',
      '200MP Main + 50MP 5x Periscope + 10MP 3x + 12MP Ultra-Wide Quad Camera',
      'Corning Gorilla Armor anti-reflective scratch-resistant flat glass',
      'Integrated S-Pen stylus with air actions and circle-to-search Galaxy AI'
    ],
    specs: {
      'Display': '6.8" QHD+ Dynamic AMOLED 2X (1-120Hz LTPO, 2600 nits)',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy (4nm)',
      'Camera': '200MP Quad Telephoto (5x/10x optical quality zoom) + 12MP Selfie',
      'RAM & Storage': '12GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5000 mAh with 45W Fast Wired & 15W Wireless',
      'Color': 'Titanium Silver'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_s24u_amazon_no1.png'
    ],
    warranty: '1 Year Samsung Brand Warranty'
  },
  {
    id: 'prod-phone-iphone16-desert-titanium',
    name: 'Apple iPhone 16 Pro (Desert Titanium · A18 Pro Studio Audio)',
    slug: 'apple-iphone-16-pro-desert-titanium-edition',
    brand: 'Apple',
    category: 'smartphones',
    pricePaise: 11990000, // ₹1,19,900.00
    originalPricePaise: 12990000, // ₹1,29,900.00
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 620,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IPHONE-16-PRO-DESERT',
    description: 'Apple iPhone 16 Pro in Desert Titanium with dedicated Camera Control button, 48MP Fusion camera system with 5x Optical Telephoto, and studio-grade 4-mic array.',
    features: [
      'Tactile Camera Control button for instant zoom and focus adjustments',
      '48MP Fusion + 48MP Ultra-Wide + 12MP 5x Telephoto optical camera system',
      'A18 Pro silicon with 6-core GPU and hardware-accelerated ray tracing',
      'Refined Desert Titanium micro-blasted finish with thinner display borders',
      '4K 120 fps Dolby Vision video capture and spatial audio recording'
    ],
    specs: {
      'Display': '6.3" ProMotion 120Hz Super Retina XDR OLED',
      'Processor': 'Apple A18 Pro (3nm)',
      'Camera': '48MP Fusion + 48MP Ultra-Wide + 12MP 5x Telephoto',
      'RAM & Storage': '8GB Unified RAM + 256GB Storage',
      'Battery': '3582 mAh with 25W MagSafe Fast Charge',
      'Color': 'Desert Titanium'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iphone16_desert_titanium.png'
    ],
    warranty: '1 Year Apple Brand Warranty'
  },
  {
    id: 'prod-phone-galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G (Titanium Phantom · Next-Gen S-Pen)',
    slug: 'samsung-galaxy-s25-ultra-titanium-phantom',
    brand: 'Samsung',
    category: 'smartphones',
    pricePaise: 13999900, // ₹1,39,999.00
    originalPricePaise: 15499900, // ₹1,54,999.00
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 185,
    stock: 24,
    isFeatured: true,
    isNewArrival: true,
    sku: 'SAM-S25U-TITANIUM',
    description: 'The pinnacle of mobile engineering. Powered by Snapdragon 8 Elite 3nm processor with 200MP ISOCELL sensor, titanium chassis, and generative Galaxy AI 2.0.',
    features: [
      'Qualcomm Snapdragon 8 Elite processor with Oryon CPU architecture',
      '6.9" Flat Dynamic AMOLED 2X 120Hz with ultra-narrow uniform bezels',
      '200MP Quad OIS camera with 8K 60fps cinematic video recording',
      'Embedded Next-Gen low-latency S-Pen with pressure-sensitive drawing',
      'Vapor chamber cooling system enlarged by 1.8x for sustained gaming'
    ],
    specs: {
      'Display': '6.9" QHD+ Dynamic AMOLED 2X LTPO (1-120Hz, 3000 nits)',
      'Processor': 'Qualcomm Snapdragon 8 Elite (3nm)',
      'Camera': '200MP OIS Main + 50MP 5x Telephoto + 50MP Ultra-Wide + 50MP 3x',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5000 mAh with 45W Wired & 15W Qi2 Wireless',
      'Color': 'Titanium Phantom Silver'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_galaxy_s25_ultra.png'
    ],
    warranty: '1 Year Samsung Brand Warranty'
  },
  {
    id: 'prod-phone-oneplus-nord-ce6-lite',
    name: 'OnePlus Nord CE6 Lite 5G (8+128GB · 7000mAh Monster Battery)',
    slug: 'oneplus-nord-ce6-lite-5g-7000mah',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 1799900, // ₹17,999.00
    originalPricePaise: 2199900, // ₹21,999.00
    discountPercentage: 18,
    rating: 4.8,
    reviewCount: 420,
    stock: 58,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-NORD-CE6-LITE',
    description: "Segment's fastest phone with 1.08Mn+ AnTuTu score, 144 FPS gaming capability, up to 2 days of power with 7000mAh monster battery, and smooth OxygenOS.",
    features: [
      "Segment's fastest phone with 1.08Mn+ AnTuTu benchmark score",
      'Massive 7000mAh battery providing up to 2 full days of nonstop battery life',
      '144 FPS Pro Gaming optimization with dual stereo dual-drive speakers',
      '50MP Sony LYT OIS primary camera with AI portrait retouching',
      'Fluid OxygenOS 15 with 4 years of guaranteed OS and security patches'
    ],
    specs: {
      'Display': '6.72" 120Hz AMOLED (2100 nits peak brightness)',
      'Processor': 'Qualcomm Snapdragon 6 Gen 3 5G (4nm)',
      'Camera': '50MP Sony LYT OIS + 2MP Depth Lens',
      'RAM & Storage': '8GB LPDDR4X + 128GB UFS 2.2',
      'Battery': '7000 mAh with 80W SUPERVOOC Fast Charge',
      'Color': 'Midnight Black'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oneplus_nord_ce6_lite.png'
    ],
    warranty: '1 Year OnePlus Brand Warranty'
  },
  {
    id: 'prod-phone-oneplus-nord-6',
    name: 'OnePlus Nord 6 5G (Mint Green · 9000mAh Monster Battery · OnePlus AI)',
    slug: 'oneplus-nord-6-5g-mint-green-9000mah',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 2899900, // ₹28,999.00
    originalPricePaise: 3499900, // ₹34,999.00
    discountPercentage: 17,
    rating: 4.9,
    reviewCount: 512,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-NORD-6-MINT',
    description: "Segment's 1st 144Hz AMOLED with 9000mAh monster battery for 2.5+ days of nonstop power. Features OnePlus AI, dual-chamber vapor cooling, and Sony LYT-700 OIS camera in Mint Green.",
    features: [
      "Segment's first 9000mAh monster battery offering 2.5+ days of sustained usage",
      '144Hz 1.5K Pro-AMOLED display with wet-finger touch response',
      'Qualcomm Snapdragon 7+ Gen 3 flagship-grade 4nm processor',
      'OnePlus AI features including AI Eraser 2.0, AI Summary, and AI Speak',
      'Refreshing Mint Green frosted glass finish with metal camera island'
    ],
    specs: {
      'Display': '6.74" 1.5K 144Hz Pro-AMOLED (3000 nits)',
      'Processor': 'Qualcomm Snapdragon 7+ Gen 3 (4nm)',
      'Camera': '50MP Sony LYT-700 OIS + 8MP Ultra-Wide',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Battery': '9000 mAh with 80W SUPERVOOC Fast Charge',
      'Color': 'Mint Green'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oneplus_nord_6.png'
    ],
    warranty: '1 Year OnePlus Brand Warranty'
  },
  {
    id: 'prod-phone-oneplus-nord-ce6',
    name: 'OnePlus Nord CE6 5G (8000mAh · 144 FPS Pro-Gaming · Dual Chips)',
    slug: 'oneplus-nord-ce6-5g-8000mah-gaming',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 2399900, // ₹23,999.00
    originalPricePaise: 2799900, // ₹27,999.00
    discountPercentage: 14,
    rating: 4.8,
    reviewCount: 388,
    stock: 62,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-NORD-CE6-8000',
    description: 'All-round beast unleashed! Snapdragon-boosted Dual Chips, 144 FPS Pro-Gaming, 8000mAh Monster Battery for 2.5+ days nonstop play, and stunning 4K video imagery on a 144Hz 1.5K Pro-AMOLED display.',
    features: [
      'Snapdragon-boosted Dual Chips architecture for 144 FPS competitive gaming',
      '8000mAh Monster Battery with intelligent battery health engine',
      'Stunning 4K video imagery with hardware OIS and EIS stabilization',
      '144Hz 1.5K Pro-AMOLED screen with HDR10+ and Dolby Atmos audio',
      'OxygenOS 15 fast and smooth software experience with zero bloatware'
    ],
    specs: {
      'Display': '6.7" 1.5K 144Hz Pro-AMOLED',
      'Processor': 'Snapdragon 7s Gen 3 + Dedicated Gaming Display Chip',
      'Camera': '50MP Sony OIS Primary + 8MP Ultra-Wide + 4K Video',
      'RAM & Storage': '8GB LPDDR5X + 256GB UFS 3.1',
      'Battery': '8000 mAh with 67W SUPERVOOC Charging',
      'Color': 'Carbon Black'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oneplus_nord_ce6.png'
    ],
    warranty: '1 Year OnePlus Brand Warranty'
  },
  {
    id: 'prod-phone-oneplus-n6x',
    name: 'OnePlus N6x 5G (4+128GB · Plum Purple · 7000mAh Battery · IP65)',
    slug: 'oneplus-n6x-5g-plum-purple-7000mah',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 1349900, // ₹13,499.00
    originalPricePaise: 1699900, // ₹16,999.00
    discountPercentage: 21,
    rating: 4.7,
    reviewCount: 295,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-N6X-PLUM-PURPLE',
    description: 'Massive 7000mAh battery, ultra-smooth 120Hz refresh rate, MIL-STD-810H shock certification, and IP65 dust/water resistance finished in fashionable Plum Purple.',
    features: [
      'Massive 7000mAh battery for multi-day endurance without recharge',
      'Ultra-Smooth 120Hz Refresh Rate with Aqua Touch display',
      'MIL-STD-810H Military Standard drop shock durability and IP65 resistance',
      '50MP AI primary camera with portrait illumination mode',
      'Striking Plum Purple frosted back with ergonomic curved sides'
    ],
    specs: {
      'Display': '6.67" 120Hz FHD+ IPS LCD with Aqua Touch',
      'Processor': 'MediaTek Dimensity 6300 5G (6nm)',
      'Camera': '50MP AI Dual Camera + 8MP Selfie',
      'RAM & Storage': '4GB RAM (+4GB Virtual RAM) + 128GB Storage',
      'Battery': '7000 mAh with 33W SUPERVOOC Fast Charge',
      'Color': 'Plum Purple'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oneplus_n6x.png'
    ],
    warranty: '1 Year OnePlus Brand Warranty'
  },
  {
    id: 'prod-phone-oneplus-n6',
    name: 'OnePlus N6 5G (Titanium Grey · 8000mAh Battery · MIL-STD-810H & IP65)',
    slug: 'oneplus-n6-5g-titanium-grey-8000mah',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 1599900, // ₹15,999.00
    originalPricePaise: 1999900, // ₹19,999.00
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 340,
    stock: 46,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-N6-GREY-8000',
    description: "Segment's biggest 8000mAh battery with segment's fastest 45W charging. Certified MIL-STD-810H military grade shock resistance and IP65 dust & splash proof.",
    features: [
      "Segment's biggest 8000mAh battery for unmatched battery longevity",
      "Segment's fastest 45W flash charging in its segment",
      'MIL-STD-810H Military Grade durability with reinforced internal structure',
      'IP65 water and dust ingress protection rating',
      'Smooth 120Hz display with OxygenOS light interface'
    ],
    specs: {
      'Display': '6.72" 120Hz Sunlight Display (1800 nits)',
      'Processor': 'Qualcomm Snapdragon 6 Gen 1 (4nm)',
      'Camera': '50MP Primary with EIS + 2MP Depth',
      'RAM & Storage': '6GB LPDDR4X + 128GB UFS 2.2',
      'Battery': '8000 mAh with 45W SUPERVOOC Charging',
      'Color': 'Titanium Grey'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oneplus_n6.png'
    ],
    warranty: '1 Year OnePlus Brand Warranty'
  },
  {
    id: 'prod-phone-oneplus-15r',
    name: 'OnePlus 15R 5G (16+512GB · Never Settle 1.5K Curved AMOLED)',
    slug: 'oneplus-15r-5g-never-settle-16gb-512gb',
    brand: 'OnePlus',
    category: 'smartphones',
    pricePaise: 4499900, // ₹44,999.00
    originalPricePaise: 4999900, // ₹49,999.00
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 680,
    stock: 38,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OP-15R-NEVER-SETTLE',
    description: 'Never Settle flagship powerhouse with 16GB RAM and massive 512GB storage. Features Snapdragon 8 Gen 3, 1.5K Curved LTPO AMOLED, and 100W SUPERVOOC.',
    features: [
      'Qualcomm Snapdragon 8 Gen 3 with Adreno 750 high-framerate GPU',
      'Ultra-spacious 16GB LPDDR5X RAM with 512GB UFS 4.0 storage',
      '1.5K 120Hz 3D Curved LTPO AMOLED display with 4500 nits peak brightness',
      '50MP Sony IMX890 OIS camera with 4K 60fps Hasselblad color engine',
      '6000mAh battery with 100W wired charge (1-100% in 25 mins)'
    ],
    specs: {
      'Display': '6.78" 1.5K 120Hz LTPO 4.0 AMOLED (4500 nits)',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      'Camera': '50MP Sony IMX890 OIS + 8MP Ultra-Wide + 2MP Macro',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '6000 mAh with 100W SUPERVOOC Fast Charge',
      'Color': 'Iron Gray Metallic'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oneplus_15r.png'
    ],
    warranty: '1 Year OnePlus Brand Warranty'
  },
  {
    id: 'prod-phone-iqoo-z11-lite',
    name: 'iQOO Z11 Lite 5G (Pearl White · 6500mAh Big Battery · 44W FlashCharge)',
    slug: 'iqoo-z11-lite-5g-pearl-white-6500mah',
    brand: 'iQOO',
    category: 'smartphones',
    pricePaise: 1299900, // ₹12,999.00
    originalPricePaise: 1599900, // ₹15,999.00
    discountPercentage: 19,
    rating: 4.7,
    reviewCount: 410,
    stock: 54,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IQOO-Z11-LITE-WHITE',
    description: '6500mAh massive battery with 44W FlashCharge in an elegant Pearl White crystalline texture. Powered by MediaTek Dimensity 6300 5G processor with 50MP AI camera.',
    features: [
      '6500mAh powerhouse battery for up to 48 hours continuous usage',
      '44W FlashCharge restores 50% charge in just 32 minutes',
      'MediaTek Dimensity 6300 6nm processor with dual SIM 5G bands',
      '50MP Super Night AI camera with Bokeh Flare Portrait algorithms',
      'Luxury Pearl White crystalline feather-light back cover'
    ],
    specs: {
      'Display': '6.67" 120Hz FHD+ Ultra Vision Screen',
      'Processor': 'MediaTek Dimensity 6300 5G (6nm)',
      'Camera': '50MP AI Main Camera + 2MP Bokeh Sensor',
      'RAM & Storage': '6GB RAM (+6GB Virtual) + 128GB Storage',
      'Battery': '6500 mAh with 44W FlashCharge',
      'Color': 'Pearl White'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iqoo_z11_lite.png'
    ],
    warranty: '1 Year iQOO Brand Warranty'
  },
  {
    id: 'prod-phone-iqoo-z11xa',
    name: 'iQOO Z11xa 5G (Mint Cyan · 6000mAh Battery · 120Hz Ultra Vision)',
    slug: 'iqoo-z11xa-5g-mint-cyan-6000mah',
    brand: 'iQOO',
    category: 'smartphones',
    pricePaise: 1449900, // ₹14,499.00
    originalPricePaise: 1799900, // ₹17,999.00
    discountPercentage: 19,
    rating: 4.7,
    reviewCount: 315,
    stock: 48,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IQOO-Z11XA-MINT',
    description: '6000mAh battery powerhouse with 120Hz Ultra Vision screen and Snapdragon 4 Gen 2 architecture in a sleek Mint Cyan chassis.',
    features: [
      '6000mAh long-lasting battery with reverse charging capability',
      '120Hz Ultra Vision display with eye-care TUV Rheinland certification',
      'Qualcomm Snapdragon 4 Gen 2 4nm power-efficient chipset',
      '50MP Ultra Clear camera with Super Night mode 3.0',
      'Chic Mint Cyan satin-touch anti-fingerprint back panel'
    ],
    specs: {
      'Display': '6.72" 120Hz FHD+ Punch-Hole Display',
      'Processor': 'Qualcomm Snapdragon 4 Gen 2 (4nm)',
      'Camera': '50MP Main + 2MP Portrait + 8MP Selfie',
      'RAM & Storage': '6GB LPDDR4X + 128GB UFS 2.2',
      'Battery': '6000 mAh with 44W Fast Charging',
      'Color': 'Mint Cyan'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iqoo_z11xa.png'
    ],
    warranty: '1 Year iQOO Brand Warranty'
  },
  {
    id: 'prod-phone-iqoo-z11',
    name: 'iQOO Z11 5G (8+128GB · Sage Green · 120Hz AMOLED)',
    slug: 'iqoo-z11-5g-sage-green-8gb-128gb',
    brand: 'iQOO',
    category: 'smartphones',
    pricePaise: 1999900, // ₹19,999.00
    originalPricePaise: 2399900, // ₹23,999.00
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 470,
    stock: 40,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IQOO-Z11-SAGE-GREEN',
    description: 'MediaTek Dimensity 7200 4nm performance beast with 120Hz AMOLED in-display fingerprint display, 64MP OIS camera, and 44W fast charging in Sage Green.',
    features: [
      'MediaTek Dimensity 7200 4nm processor with 730K+ AnTuTu score',
      '6.67" 120Hz AMOLED display with 1800 nits local peak brightness',
      '64MP Sony OIS primary camera with 4K recording capabilities',
      'In-display optical fingerprint scanner with instant 0.2s unlock',
      'Dual stereo speakers with Hi-Res Audio certification'
    ],
    specs: {
      'Display': '6.67" 120Hz AMOLED with In-Display Fingerprint',
      'Processor': 'MediaTek Dimensity 7200 (4nm)',
      'Camera': '64MP Sony OIS Main + 2MP Depth Lens',
      'RAM & Storage': '8GB LPDDR4X + 128GB UFS 2.2',
      'Battery': '5000 mAh with 44W FlashCharge',
      'Color': 'Sage Green'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iqoo_z11.png'
    ],
    warranty: '1 Year iQOO Brand Warranty'
  },
  {
    id: 'prod-phone-iqoo-15',
    name: 'iQOO 15 5G (Snapdragon 8 Elite · BMW Motorsport White · 144Hz 2K)',
    slug: 'iqoo-15-5g-snapdragon-8-elite-bmw-edition',
    brand: 'iQOO',
    category: 'smartphones',
    pricePaise: 5999900, // ₹59,999.00
    originalPricePaise: 6799900, // ₹67,999.00
    discountPercentage: 12,
    rating: 4.9,
    reviewCount: 540,
    stock: 30,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IQOO-15-BMW-WHITE',
    description: 'Extreme gaming flagship! Snapdragon 8 Elite 3nm with Q2 Supercomputing Gaming Chip, 2K 144Hz Samsung E7 AMOLED, 50MP Sony VCS True Color OIS, and 120W FlashCharge.',
    features: [
      'Snapdragon 8 Elite (3nm) combined with proprietary Q2 gaming co-processor',
      '2K 144Hz Samsung E7 LTPO AMOLED with 3000Hz touch sampling rate',
      '50MP Sony VCS True Color OIS Main + 50MP Periscope 3x Telephoto',
      'Iconic BMW M-Motorsport tricolor tri-stripe legend design',
      '120W Ultra FlashCharge (0 to 100% in 15 minutes) with 50W Wireless'
    ],
    specs: {
      'Display': '6.78" 2K 144Hz LTPO Samsung E7 AMOLED (3000 nits)',
      'Processor': 'Qualcomm Snapdragon 8 Elite + Q2 Gaming Chip',
      'Camera': '50MP Sony VCS OIS + 50MP 3x Periscope + 50MP Ultra-Wide',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5400 mAh with 120W FlashCharge & 50W Wireless',
      'Color': 'BMW Motorsport Legend White'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iqoo_15.png'
    ],
    warranty: '1 Year iQOO Brand Warranty'
  },
  {
    id: 'prod-phone-iqoo-15r',
    name: 'iQOO 15R 5G (Amber Gold · Snapdragon 8 Gen 3 · Dual Matrix Engine)',
    slug: 'iqoo-15r-5g-amber-gold-snapdragon-8-gen-3',
    brand: 'iQOO',
    category: 'smartphones',
    pricePaise: 4199900, // ₹41,999.00
    originalPricePaise: 4799900, // ₹47,999.00
    discountPercentage: 13,
    rating: 4.8,
    reviewCount: 390,
    stock: 36,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IQOO-15R-AMBER-GOLD',
    description: 'Snapdragon 8 Gen 3 performance tuned for hardcore gamers with Dual Matrix display engine, 6000mAh battery, 80W charging, and Amber Gold radiant luster.',
    features: [
      'Snapdragon 8 Gen 3 flagship silicon with 6043mm² dual vapor chamber',
      '144Hz 1.5K LTPO AMOLED with 2160Hz high-frequency PWM dimming',
      '50MP Sony IMX920 custom sensor with VCS Bionic spectrum',
      'Massive 6000mAh battery with 80W FlashCharge in ultra-slim profile',
      'Radiant Amber Gold metallic shimmer with satin anti-glare finish'
    ],
    specs: {
      'Display': '6.78" 1.5K 144Hz LTPO AMOLED',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3 (4nm)',
      'Camera': '50MP Sony IMX920 VCS OIS + 8MP Ultra-Wide',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Battery': '6000 mAh with 80W FlashCharge',
      'Color': 'Amber Gold'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iqoo_15r.png'
    ],
    warranty: '1 Year iQOO Brand Warranty'
  },
  {
    id: 'prod-phone-iqoo-z11x',
    name: 'iQOO Z11x 5G (4K Video Recording · IP68/IP69+ Waterproof & Drop Shock)',
    slug: 'iqoo-z11x-5g-4k-recording-ip68-ip69-rugged',
    brand: 'iQOO',
    category: 'smartphones',
    pricePaise: 1699900, // ₹16,999.00
    originalPricePaise: 2099900, // ₹20,999.00
    discountPercentage: 19,
    rating: 4.8,
    reviewCount: 310,
    stock: 50,
    isFeatured: true,
    isNewArrival: true,
    sku: 'IQOO-Z11X-IP69',
    description: 'Heavy duty durability with IP68 & IP69+ water and high-pressure steam resistance, 4K video recording, 6000mAh battery, and military drop shock absorption.',
    features: [
      'Dual IP68 and IP69+ certified for hot water jets and underwater immersion',
      '4K stabilized video recording with dual EIS stabilization algorithm',
      '6000mAh large capacity battery with smart battery health saver',
      'High-strength aerospace alloy frame with 360-degree shock cushioning',
      'Smooth 120Hz display with Wet-Touch technology for rainy day use'
    ],
    specs: {
      'Display': '6.72" 120Hz FHD+ Sunlight Display (Wet-Touch)',
      'Processor': 'Qualcomm Snapdragon 6 Gen 1 (4nm)',
      'Camera': '50MP 4K Main Camera + 2MP Depth + 4K Video',
      'RAM & Storage': '8GB LPDDR4X + 128GB UFS 2.2',
      'Battery': '6000 mAh with 44W FlashCharge',
      'Color': 'Obsidian Armor Black'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_iqoo_z11x.png'
    ],
    warranty: '1 Year iQOO Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-turbo-5',
    name: 'REDMI Turbo 5 5G (Dimensity 8500 Ultra · 100W HyperCharge · 50MP OIS)',
    slug: 'redmi-turbo-5-5g-dimensity-8500-100w-hypercharge',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 2499900, // ₹24,999.00
    originalPricePaise: 2999900, // ₹29,999.00
    discountPercentage: 17,
    rating: 4.9,
    reviewCount: 460,
    stock: 52,
    isFeatured: true,
    isNewArrival: true,
    sku: 'REDMI-TURBO-5-100W',
    description: 'Speed champion powered by MediaTek Dimensity 8500 Ultra 4nm chip with 100W HyperCharge (0-100% in 19 mins), 1.5K 120Hz OLED, and 50MP Sony LYT-600 OIS camera.',
    features: [
      'MediaTek Dimensity 8500 Ultra 4nm CPU with 1.75M AnTuTu score',
      'Blazing-fast 100W HyperCharge: full charge in less than 20 minutes',
      '1.5K 120Hz LTPS OLED screen with 2400 nits brightness and HDR10+',
      '50MP Sony LYT-600 OIS primary camera with 4K 60fps recording',
      'Xiaomi HyperOS with AI Subtitles, AI Expansion, and AI Writing'
    ],
    specs: {
      'Display': '6.67" 1.5K 120Hz OLED (2400 nits, Dolby Vision)',
      'Processor': 'MediaTek Dimensity 8500 Ultra (4nm)',
      'Camera': '50MP Sony LYT-600 OIS + 8MP Ultra-Wide',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 4.0',
      'Battery': '5500 mAh with 100W HyperCharge',
      'Color': 'Carbon Black Carbon Fiber Texture'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_redmi_turbo_5.png'
    ],
    warranty: '1 Year Xiaomi Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-15c-prime',
    name: 'REDMI 15C 5G Prime Edition (Royale Blue · 6000mAh Big Boss Battery · 120Hz)',
    slug: 'redmi-15c-5g-prime-edition-royale-blue-6000mah',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 1099900, // ₹10,999.00
    originalPricePaise: 1499900, // ₹14,999.00
    discountPercentage: 27,
    rating: 4.7,
    reviewCount: 580,
    stock: 75,
    isFeatured: true,
    isNewArrival: true,
    sku: 'REDMI-15C-PRIME-BLUE',
    description: "6000mAh Big Boss Battery with segment's largest 6.9\" (17.53cm) smoothest 120Hz display and Royale Design finished in shimmering Royale Blue.",
    features: [
      "Massive 6000mAh Big Boss Battery for up to 3 days standby and gaming",
      "Segment's largest 6.9\" (17.53cm) 120Hz ultra-fluid immersive display",
      'Royale Design with feather-touch micro-crystalline light pattern',
      '50MP AI Dual Camera with Night Mode and portrait bokeh algorithms',
      'MediaTek Dimensity 6100+ 5G processor with dual 5G SIM standby'
    ],
    specs: {
      'Display': '6.9" 120Hz HD+ Big Screen Display',
      'Processor': 'MediaTek Dimensity 6100+ 5G (6nm)',
      'Camera': '50MP AI Primary + Depth Sensor',
      'RAM & Storage': '6GB RAM (+6GB Virtual) + 128GB Storage',
      'Battery': '6000 mAh with 18W Fast Charging',
      'Color': 'Royale Blue'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_redmi_15c_prime.png'
    ],
    warranty: '1 Year Xiaomi Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-a7-pro-5g',
    name: 'REDMI A7 Pro 5G (Fastest Segment Processor · 6500mAh · 6.9" Immersive)',
    slug: 'redmi-a7-pro-5g-fastest-processor-6500mah',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 849900, // ₹8,499.00
    originalPricePaise: 1199900, // ₹11,999.00
    discountPercentage: 29,
    rating: 4.6,
    reviewCount: 640,
    stock: 80,
    isFeatured: true,
    isNewArrival: true,
    sku: 'REDMI-A7-PRO-5G',
    description: "Unbeatable value! Segment's fastest 5G processor, massive 6500mAh battery, 6.9\" immersive display, and 50MP AI camera in Slate Grey.",
    features: [
      "Segment's fastest processor in the under-₹10K category",
      'Massive 6500mAh battery with Type-C fast charging support',
      '6.9" expansive screen with eye-care low blue light mode',
      '50MP AI camera with HDR portrait and time-lapse video',
      'Clean Xiaomi HyperOS with FM Radio, 3.5mm jack, and micro-SD slot'
    ],
    specs: {
      'Display': '6.9" HD+ 90Hz Adaptive Display',
      'Processor': 'Unisoc T760 5G Octa-Core (6nm)',
      'Camera': '50MP AI Main + 5MP Front Camera',
      'RAM & Storage': '4GB RAM + 64GB Storage (expandable up to 1TB)',
      'Battery': '6500 mAh with 18W Type-C Charge',
      'Color': 'Slate Grey'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_redmi_a7_pro_5g.png'
    ],
    warranty: '1 Year Xiaomi Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-17-5g',
    name: 'REDMI 17 5G (7000mAh Marathon Battery · Snapdragon 4 Gen 5 · Astral Black)',
    slug: 'redmi-17-5g-7000mah-snapdragon-4-gen-5',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 1249900, // ₹12,499.00
    originalPricePaise: 1599900, // ₹15,999.00
    discountPercentage: 22,
    rating: 4.8,
    reviewCount: 390,
    stock: 65,
    isFeatured: true,
    isNewArrival: true,
    sku: 'REDMI-17-5G-BLACK',
    description: '7000mAh marathon battery with Qualcomm Snapdragon 4 Gen 5 4nm processor, 6.79" 120Hz FHD+ display, and Astral Black glass-like design.',
    features: [
      '7000mAh marathon battery supporting multi-day heavy usage',
      'Qualcomm Snapdragon 4 Gen 5 (4nm) with 5G carrier aggregation',
      '6.79" 120Hz FHD+ display with SGS Low Blue Light certification',
      '50MP AI camera with night mode and document scanner mode',
      'IP53 splash and dust resistance with side-mounted fingerprint'
    ],
    specs: {
      'Display': '6.79" 120Hz FHD+ DotDisplay',
      'Processor': 'Qualcomm Snapdragon 4 Gen 5 (4nm)',
      'Camera': '50MP AI Primary + 2MP Depth',
      'RAM & Storage': '6GB RAM + 128GB Storage (expandable up to 1TB)',
      'Battery': '7000 mAh with 33W Fast Charge',
      'Color': 'Astral Black'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_redmi_17_5g.png'
    ],
    warranty: '1 Year Xiaomi Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-note-17-5g',
    name: 'REDMI Note 17 5G (Mint Frost · 6500mAh · Snapdragon 6 Gen 4 · 120Hz AMOLED)',
    slug: 'redmi-note-17-5g-mint-frost-6500mah',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 1899900, // ₹18,999.00
    originalPricePaise: 2299900, // ₹22,999.00
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 430,
    stock: 55,
    isFeatured: true,
    isNewArrival: true,
    sku: 'REDMI-NOTE-17-MINT',
    description: 'Snapdragon 6 Gen 4 powerhouse with 6500mAh battery, 120Hz AMOLED with Corning Gorilla Glass Victus, and 108MP OIS camera in Mint Frost.',
    features: [
      'Snapdragon 6 Gen 4 4nm processor with high-efficiency octa-core CPU',
      '6.67" 120Hz AMOLED display with Corning Gorilla Glass Victus protection',
      '108MP Ultra-Clear OIS camera with 3x in-sensor lossless zoom',
      '6500mAh battery with 45W Turbo Charge and smart health engine',
      'Refreshing Mint Frost matte glass design with symmetrical bezels'
    ],
    specs: {
      'Display': '6.67" 120Hz AMOLED (Corning Gorilla Glass Victus)',
      'Processor': 'Qualcomm Snapdragon 6 Gen 4 (4nm)',
      'Camera': '108MP OIS Main + 8MP Ultra-Wide + 2MP Macro',
      'RAM & Storage': '8GB LPDDR4X + 256GB UFS 2.2',
      'Battery': '6500 mAh with 45W Turbo Charge',
      'Color': 'Mint Frost'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_redmi_note_17_5g.png'
    ],
    warranty: '1 Year Xiaomi Brand Warranty'
  },
  {
    id: 'prod-phone-redmi-note-17-promax',
    name: 'Redmi Note 17 Pro Max 5G (7000mAh · 1.5K TrueColor AMOLED · 200MP OIS)',
    slug: 'redmi-note-17-pro-max-5g-200mp-ois-7000mah',
    brand: 'Redmi',
    category: 'smartphones',
    pricePaise: 2799900, // ₹27,999.00
    originalPricePaise: 3399900, // ₹33,999.00
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 520,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'REDMI-NOTE-17-PROMAX',
    description: 'Ultimate Note flagship! 200MP Samsung HP3 OIS camera, 7000mAh battery with 90W HyperCharge, 1.5K 120Hz curved AMOLED, and Dimensity 7300 Ultra in Pistachio Green.',
    features: [
      '200MP Samsung HP3 flagship sensor with OIS and 4x in-sensor zoom',
      '7000mAh battery with 90W HyperCharge (0-100% in 28 minutes)',
      '1.5K 120Hz 3D Curved TrueColor AMOLED with 1920Hz PWM dimming',
      'MediaTek Dimensity 7300 Ultra 4nm energy-efficient processor',
      'IP68 flagship water and dust resistance certification'
    ],
    specs: {
      'Display': '6.67" 1.5K 120Hz 3D Curved AMOLED (1800 nits, IP68)',
      'Processor': 'MediaTek Dimensity 7300 Ultra (4nm)',
      'Camera': '200MP Samsung HP3 OIS + 8MP Ultra-Wide + 2MP Macro',
      'RAM & Storage': '12GB LPDDR5 + 256GB UFS 3.1',
      'Battery': '7000 mAh with 90W HyperCharge',
      'Color': 'Pistachio Green Ceramic Feel'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_redmi_note_17_promax.png'
    ],
    warranty: '1 Year Xiaomi Brand Warranty'
  },
  {
    id: 'prod-phone-itel-zeno-100-pro',
    name: 'itel ZENO 100 PRO (Military Grade Certified · 5000mAh · IR Blaster)',
    slug: 'itel-zeno-100-pro-military-grade-5000mah',
    brand: 'itel',
    category: 'smartphones',
    pricePaise: 649900, // ₹6,499.00
    originalPricePaise: 899900, // ₹8,999.00
    discountPercentage: 28,
    rating: 4.6,
    reviewCount: 280,
    stock: 70,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ITEL-ZENO-100-PRO',
    description: 'Rugged military grade shockproof certification with 5000mAh battery, IR Blaster remote control for appliances, and 50MP AI camera in Titanium Blue.',
    features: [
      'Military Grade drop and shock resistance certification',
      'Built-in IR Blaster to control TVs, ACs, and home appliances directly',
      '5000mAh all-day battery with smart power master management',
      '50MP AI Dual Camera with night portrait mode and HDR',
      'Dynamic Bar notification island for calls and battery alerts'
    ],
    specs: {
      'Display': '6.6" 90Hz HD+ Dynamic Bar Display',
      'Processor': 'Unisoc T606 Octa-Core Processor',
      'Camera': '50MP AI Primary + Flash + IR Blaster',
      'RAM & Storage': '4GB RAM (+4GB Virtual) + 64GB Storage',
      'Battery': '5000 mAh with 18W Type-C Fast Charge',
      'Color': 'Titanium Blue'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_itel_zeno_100_pro.png'
    ],
    warranty: '1 Year itel Brand Warranty'
  },
  {
    id: 'prod-phone-oppo-reno16-5g',
    name: 'OPPO Reno16 5G (Pearl White Glow · 50MP 3.5x Telephoto Portrait · 4K HDR)',
    slug: 'oppo-reno16-5g-pearl-white-50mp-telephoto',
    brand: 'OPPO',
    category: 'smartphones',
    pricePaise: 3799900, // ₹37,999.00
    originalPricePaise: 4399900, // ₹43,999.00
    discountPercentage: 14,
    rating: 4.9,
    reviewCount: 440,
    stock: 42,
    isFeatured: true,
    isNewArrival: true,
    sku: 'OPPO-RENO16-WHITE',
    description: 'Portrait expert! 50MP 3.5x Telephoto portrait camera, 4K 60fps HDR video, MediaTek Dimensity 8350, 1.5K 120Hz quad-curved AMOLED, and 80W SUPERVOOC in Pearl White Glow.',
    features: [
      '50MP 3.5x Periscope Telephoto portrait camera with optical image stabilization',
      '4K 60fps HDR video recording with cinematic bokeh and live LUTs',
      'MediaTek Dimensity 8350 4nm power-efficient flagship processor',
      '1.5K 120Hz Quad-Curved AMOLED with Splash Touch and eye comfort',
      'Mesmerizing Pearl White Glow finish inspired by natural sea shells'
    ],
    specs: {
      'Display': '6.7" 1.5K 120Hz Quad-Curved AMOLED (2400 nits)',
      'Processor': 'MediaTek Dimensity 8350 (4nm)',
      'Camera': '50MP Sony OIS Main + 50MP 3.5x Telephoto + 8MP Ultra-Wide',
      'RAM & Storage': '12GB LPDDR5X + 256GB UFS 3.1',
      'Battery': '5600 mAh with 80W SUPERVOOC Fast Charge',
      'Color': 'Pearl White Glow'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_oppo_reno16_5g.png'
    ],
    warranty: '1 Year OPPO Brand Warranty'
  },
  {
    id: 'prod-phone-lava-bold-n4-lite',
    name: 'LAVA BOLD N4 LITE (Military Grade Certified · 6.56" Display · 5000mAh)',
    slug: 'lava-bold-n4-lite-military-grade-5000mah',
    brand: 'LAVA',
    category: 'smartphones',
    pricePaise: 599900, // ₹5,999.00
    originalPricePaise: 799900, // ₹7,999.00
    discountPercentage: 25,
    rating: 4.6,
    reviewCount: 310,
    stock: 75,
    isFeatured: true,
    isNewArrival: true,
    sku: 'LAVA-BOLD-N4-LITE',
    description: 'Proudly made in India! Military Grade certified shockproof construction with 6.56" display, 3GB+3GB RAM, 32GB ROM, and 5000mAh battery in Champagne Gold.',
    features: [
      'Certified Military Grade shock and drop durability',
      '6.56" (16.66cm) clear qHD display with vibrant color reproduction',
      '3GB + 3GB Virtual RAM for smooth multitasking with Android 14 Go',
      '5000mAh battery providing up to 36 hours of calling and standby',
      'Clean stock Android experience with no ads, no bloatware, and free service at home'
    ],
    specs: {
      'Display': '6.56" (16.66cm) qHD+ Punch Hole Display',
      'Processor': 'Octa-Core Processor with Indian Band 5G Ready',
      'Camera': '13MP AI Main Camera + LED Flash + 5MP Front',
      'RAM & Storage': '3GB RAM (+3GB Virtual) + 32GB Storage (expandable up to 512GB)',
      'Battery': '5000 mAh with Type-C Charging',
      'Color': 'Champagne Gold'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_lava_bold_n4_lite.png'
    ],
    warranty: '1 Year LAVA Brand Warranty (Free Service at Home)'
  },
  {
    id: 'prod-phone-vivo-x200-olive-circle',
    name: 'Vivo X200 5G (Olive Green · Zeiss Multi-Matrix Circular 50MP OIS)',
    slug: 'vivo-x200-5g-olive-green-zeiss-multi-matrix',
    brand: 'Vivo',
    category: 'smartphones',
    pricePaise: 6499900, // ₹64,999.00
    originalPricePaise: 7299900, // ₹72,999.00
    discountPercentage: 11,
    rating: 4.9,
    reviewCount: 490,
    stock: 35,
    isFeatured: true,
    isNewArrival: true,
    sku: 'VIVO-X200-OLIVE-GREEN',
    description: 'Zeiss optics master with iconic circular multi-matrix camera island, Sony LYT-818 50MP sensor, Dimensity 9400 3nm chip, and 5800mAh BlueVolt battery in Olive Green.',
    features: [
      'Zeiss T* Coated Optics with multi-matrix circular camera architecture',
      '50MP Sony LYT-818 main sensor with VCS True Color OIS technology',
      'MediaTek Dimensity 9400 3nm flagship platform with generative AI',
      '5800mAh semi-solid silicon BlueVolt battery with 90W FlashCharge',
      'Nature-inspired Olive Green frosted glass with aerospace metal rim'
    ],
    specs: {
      'Display': '6.67" 120Hz 1.5K LTPS AMOLED (4500 nits peak)',
      'Processor': 'MediaTek Dimensity 9400 (3nm)',
      'Camera': '50MP Zeiss Sony LYT-818 OIS + 50MP Zeiss Telephoto + 50MP Ultra-Wide',
      'RAM & Storage': '16GB LPDDR5X + 512GB UFS 4.0',
      'Battery': '5800 mAh with 90W FlashCharge',
      'Color': 'Olive Green'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_vivo_x200_olive_circle.png'
    ],
    warranty: '1 Year Vivo Brand Warranty'
  },
  {
    id: 'prod-phone-itel-zeno-300',
    name: 'itel ZENO 300 (Ceramic Silver · 6000mAh Monster Battery · 12GB Dynamic RAM)',
    slug: 'itel-zeno-300-ceramic-silver-6000mah-12gb-ram',
    brand: 'itel',
    category: 'smartphones',
    pricePaise: 799900, // ₹7,999.00
    originalPricePaise: 1099900, // ₹10,999.00
    discountPercentage: 27,
    rating: 4.7,
    reviewCount: 340,
    stock: 60,
    isFeatured: true,
    isNewArrival: true,
    sku: 'ITEL-ZENO-300-SILVER',
    description: 'Monster 6000mAh battery with military grade durability, up to 12GB Dynamic RAM (4+8GB), 128GB ROM, and 50MP Super Night AI camera in Ceramic Silver.',
    features: [
      'Massive 6000mAh battery with smart battery saver and reverse charging',
      'Certified Military Grade drop shock and impact resistance',
      'Up to 12GB Dynamic RAM (4GB hardware + 8GB extended RAM)',
      '128GB spacious storage with dedicated triple card slot (2 SIM + 1 SD)',
      'Elegant Ceramic Silver glossy finish with dual ring camera matrix'
    ],
    specs: {
      'Display': '6.6" 90Hz HD+ Dynamic Bar Display',
      'Processor': 'Unisoc T606 Octa-Core Processor (12nm)',
      'Camera': '50MP Super Night AI Camera + LED Flash',
      'RAM & Storage': '4GB+8GB Dynamic RAM + 128GB Storage',
      'Battery': '6000 mAh with 18W Type-C Charge',
      'Color': 'Ceramic Silver'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_itel_zeno_300.png'
    ],
    warranty: '1 Year itel Brand Warranty'
  },
  {
    id: 'prod-phone-moto-edge-70-fusion',
    name: 'Motorola Edge 70 Fusion 5G (Viva Magenta · Luxurious Vegan Fabric · 50MP Sony LYT 710)',
    slug: 'motorola-edge-70-fusion-5g-viva-magenta-fabric',
    brand: 'Motorola',
    category: 'smartphones',
    pricePaise: 2399900, // ₹23,999.00
    originalPricePaise: 2899900, // ₹28,999.00
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 460,
    stock: 45,
    isFeatured: true,
    isNewArrival: true,
    sku: 'MOTO-EDGE-70-MAGENTA',
    description: 'Curved endless edge pOLED display with Pantone Color of the Year Viva Magenta in a warm luxurious vegan fabric finish. Featuring 50MP Sony LYT 710 OIS and 7000mAh battery.',
    features: [
      'Pantone Viva Magenta curated design in warm luxurious vegan fabric texture',
      '50MP Sony LYT 710 sensor with Optical Image Stabilization (OIS)',
      '6.7" 144Hz Endless Edge 10-bit curved pOLED with 100% DCI-P3 color',
      '7000mAh high-density battery with 68W TurboPower charging',
      'IP68 underwater protection and Moto Hello UI with seamless gestures'
    ],
    specs: {
      'Display': '6.7" 144Hz Endless Edge 10-bit Curved pOLED (IP68)',
      'Processor': 'Qualcomm Snapdragon 7s Gen 3 (4nm)',
      'Camera': '50MP Sony LYT 710 OIS + 13MP Ultra-Wide/Macro',
      'RAM & Storage': '12GB LPDDR5 + 256GB UFS 2.2',
      'Battery': '7000 mAh with 68W TurboPower Fast Charge',
      'Color': 'Viva Magenta Vegan Fabric'
    },
    images: [
      '/images/smartphones/uploads_nov/phone_moto_edge_70_fusion.png'
    ],
    warranty: '1 Year Motorola Brand Warranty'
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    code: 'WELCOME10',
    discountType: 'percentage',
    discountValue: 10,
    minOrderValuePaise: 99900, // ₹999 min
    maxDiscountPaise: 100000, // ₹1,000 max
    isActive: true,
    description: 'Get 10% instant discount on your order (Min order ₹999)'
  },
  {
    code: 'FESTIVE20',
    discountType: 'percentage',
    discountValue: 20,
    minOrderValuePaise: 499900, // ₹4,999 min
    maxDiscountPaise: 200000, // ₹2,000 max
    isActive: true,
    description: 'Mega Fest: 20% off up to ₹2,000 on premium gadgets'
  },
  {
    code: 'FLAT500',
    discountType: 'fixed',
    discountValue: 50000, // ₹500 off
    minOrderValuePaise: 299900, // ₹2,999 min
    isActive: true,
    description: 'Flat ₹500 discount on orders above ₹2,999'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'prod-1',
    authorName: 'Rohan Sharma',
    rating: 5,
    title: 'Unbelievable Sound Clarity and Build',
    comment: 'The hybrid ANC on the Zyntra Apex headphones completely blocks out metro and flight noise. Bass is punchy without distorting vocals. Battery really lasted over 4 days of heavy usage!',
    verifiedPurchase: true,
    date: '2026-09-18'
  },
  {
    id: 'rev-2',
    productId: 'prod-2',
    authorName: 'Ananya Deshmukh',
    rating: 5,
    title: 'Looks and feels like a ₹25,000 luxury watch',
    comment: 'Titanium finish is exquisite and does not scratch easily. The AMOLED screen is bright under intense sunlight. Heart rate and step tracking match my medical monitor closely.',
    verifiedPurchase: true,
    date: '2026-09-24'
  },
  {
    id: 'rev-3',
    productId: 'prod-3',
    authorName: 'Vikramaditya Sengupta',
    rating: 5,
    title: 'Best TWS buds under ₹5k hands down',
    comment: 'Mic quality on office calls is exceptional. My coworkers heard me clearly even while walking in breezy outdoor weather. Fast pairing was seamless on both my phone and laptop.',
    verifiedPurchase: true,
    date: '2026-10-02'
  },
  {
    id: 'rev-4',
    productId: 'prod-4',
    authorName: 'Pooja Nair',
    rating: 5,
    title: 'Blazing fast performance and stunning photos',
    comment: 'The 50MP Sony sensor clicks natural skin tones and crystal clear night photos. The 100W charger juices up the battery from 5% to 100% in just 26 minutes!',
    verifiedPurchase: true,
    date: '2026-10-08'
  }
];

export const INITIAL_USERS: User[] = [
  {
    id: 'admin-yashika',
    name: 'Yashika (Store Admin)',
    email: 'cutiee0701@gmail.com',
    role: 'admin',
    phone: '+91 98765 43210',
    createdAt: '2026-01-01T00:00:00Z'
  },
  {
    id: 'user-customer',
    name: 'Aarav Patel',
    email: 'customer@zyntra.com',
    role: 'customer',
    phone: '+91 98234 56789',
    addresses: [
      {
        id: 'addr-1',
        name: 'Aarav Patel',
        street: 'Flat 402, Green Glen Heights, Outer Ring Road, Bellandur',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560103',
        phone: '+91 98234 56789',
        isDefault: true
      }
    ],
    createdAt: '2026-03-15T00:00:00Z'
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-101',
    orderNumber: 'ZYN-2026-89421',
    userId: 'user-customer',
    customerName: 'Aarav Patel',
    customerEmail: 'customer@zyntra.com',
    customerPhone: '+91 98234 56789',
    shippingAddress: {
      id: 'addr-1',
      name: 'Aarav Patel',
      street: 'Flat 402, Green Glen Heights, Outer Ring Road, Bellandur',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560103',
      phone: '+91 98234 56789',
      isDefault: true
    },
    items: [
      {
        productId: 'prod-1',
        productName: 'Zyntra Apex Noir Wireless ANC Headphones',
        productImage: '/src/assets/images/product_premium_headphones_1791888605100.jpg',
        pricePaise: 799900,
        quantity: 1,
        totalPaise: 799900
      }
    ],
    subtotalPaise: 799900,
    discountPaise: 79990, // WELCOME10
    shippingPaise: 0,
    taxPaise: 0,
    totalPaise: 719910,
    couponCode: 'WELCOME10',
    paymentMethod: 'razorpay',
    paymentStatus: 'paid',
    orderStatus: 'Shipped',
    razorpayPaymentId: 'pay_NZy68249QxLz90',
    trackingNumber: 'BLUEDART-882941092',
    courier: 'Blue Dart Express',
    createdAt: '2026-10-10T14:32:00Z',
    estimatedDelivery: '2026-10-14'
  },
  {
    id: 'ord-102',
    orderNumber: 'ZYN-2026-77312',
    userId: 'user-customer',
    customerName: 'Aarav Patel',
    customerEmail: 'customer@zyntra.com',
    customerPhone: '+91 98234 56789',
    shippingAddress: {
      id: 'addr-1',
      name: 'Aarav Patel',
      street: 'Flat 402, Green Glen Heights, Outer Ring Road, Bellandur',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560103',
      phone: '+91 98234 56789',
      isDefault: true
    },
    items: [
      {
        productId: 'prod-3',
        productName: 'Zyntra Orbit Buds Pro ANC Earbuds',
        productImage: '/src/assets/images/product_wireless_earbuds_1791888607829.jpg',
        pricePaise: 349900,
        quantity: 1,
        totalPaise: 349900
      }
    ],
    subtotalPaise: 349900,
    discountPaise: 0,
    shippingPaise: 0,
    taxPaise: 0,
    totalPaise: 349900,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    orderStatus: 'Processing',
    trackingNumber: 'DELHIVERY-992015881',
    courier: 'Delhivery Surface',
    createdAt: '2026-10-12T09:15:00Z',
    estimatedDelivery: '2026-10-16'
  }
];

export const INITIAL_SUBSCRIBERS: NewsletterSubscriber[] = [
  { id: 'sub-1', email: 'techlover@gmail.com', subscribedAt: '2026-09-10T10:00:00Z' },
  { id: 'sub-2', email: 'aarav.gadgets@outlook.com', subscribedAt: '2026-09-25T14:20:00Z' }
];

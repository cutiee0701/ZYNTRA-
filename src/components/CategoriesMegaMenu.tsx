import React, { useRef, useEffect } from 'react';
import { 
  Smartphone, Headphones, Watch, Tablet, Activity, Cable,
  ArrowRight, Sparkles, X, ChevronRight, Layers
} from 'lucide-react';
import { Category, Product } from '../types';

interface CategoriesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (slug: string) => void;
  onSelectProduct: (product: Product) => void;
  featuredProduct?: Product;
}

export const CategoriesMegaMenu: React.FC<CategoriesMegaMenuProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectProduct,
  featuredProduct,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navigateToCategory = (slug: string) => {
    onSelectCategory(slug);
    onClose();
    const el = document.getElementById('catalogue');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const otherCategories = [
    {
      name: 'Smart Watches',
      slug: 'smartwatches',
      description: 'Noise, Fire-Boltt, boAt & AMOLED',
      icon: <Watch className="w-3 h-3 text-white" />,
      topBadge: 'Up to 94% OFF',
      itemCount: '18 Models',
      image: '/public/images/smartwatches/noise_twist_round_black.png',
      fallbackImage: '/public/assets/aistudio/images__2__e9f9ae5c.jpg',
      startPrice: 'From ₹1,199',
    },
    {
      name: 'Earbuds',
      slug: 'earbuds',
      description: 'True wireless stereo & ANC',
      icon: <Headphones className="w-3 h-3 text-white" />,
      topBadge: 'Gaming TWS',
      itemCount: '8 Models',
      image: '/public/images/earbuds/earbuds_glossy_black.jpg',
      fallbackImage: '/public/assets/aistudio/download__1__ab332ee4.webp',
      startPrice: 'From ₹1,299',
    },
    {
      name: 'Tablets',
      slug: 'tablets',
      description: 'Workstations & 4G VoLTE',
      icon: <Tablet className="w-3 h-3 text-white" />,
      topBadge: 'Android 15',
      itemCount: '14 Models',
      image: '/public/images/tablets/new_arrivals/tablet_4_skyblue_bundle.png',
      fallbackImage: '/public/assets/aistudio/Screenshot_2026-10-31_145833_5c450782.png',
      startPrice: 'From ₹5,999',
    },
    {
      name: 'Neckbands',
      slug: 'neckband',
      description: 'Sport & transparent cyberpunk',
      icon: <Activity className="w-3 h-3 text-white" />,
      topBadge: '60H Playtime',
      itemCount: '13 Models',
      image: '/images/neckbands/uploads_nov/neckband_cyberwave_skyblue.webp',
      fallbackImage: '/public/assets/aistudio/blue_main_image-533_a25cdb96.webp',
      startPrice: 'From ₹799',
    },
    {
      name: 'Leads',
      slug: 'leads',
      description: 'Type-C DAC & 3.5mm Gold',
      icon: <Cable className="w-3 h-3 text-white" />,
      topBadge: '24-bit DAC',
      itemCount: '14 Models',
      image: '/public/images/leads/orange_typec_earphones.jpg',
      fallbackImage: '/public/assets/aistudio/images__7__9d4ec62b.jpg',
      startPrice: 'From ₹399',
    },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute left-0 right-0 top-full bg-white border-b border-[#E6E6E6] shadow-2xl z-40 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#E6E6E6]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#A20B1A] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Explore Categories</span>
            </span>
            <span className="text-[#777777]">·</span>
            <span className="text-xs text-[#777777] hidden sm:inline">
              High-resolution collections, flagship gadgets & genuine craftsmanship
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateToCategory('all')}
              className="text-xs font-bold text-[#A20B1A] hover:underline cursor-pointer hidden sm:flex items-center gap-1"
            >
              <span>View All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#777777] hover:text-[#232429] hover:bg-[#F5F5F7] rounded-lg transition-colors cursor-pointer"
              aria-label="Close categories menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Primary Highlight Showcase: Smartphones & Flag Bags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-5">
          {/* Card 1: Smartphones Category */}
          <div
            onClick={() => navigateToCategory('smartphones')}
            className="group relative rounded-2xl overflow-hidden border border-[#E6E6E6] bg-zinc-950 hover:border-[#A20B1A] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-end"
          >
            {/* Image Container with aspect ratio and smooth zoom */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src="/images/smartphones_category.jpg"
                alt="Premium modern 5G smartphones with curved OLED displays and titanium finish"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/src/assets/images/smartphones_category_1792148922139.jpg';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Category Pill Tag */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 bg-[#A20B1A] text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-md">
                <Smartphone className="w-3.5 h-3.5 text-white" />
                <span>Smartphones</span>
              </div>

              {/* Right Discount / Popularity Pill */}
              <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#232429] text-[10px] font-extrabold rounded-full shadow-xs">
                Featured Series
              </div>

              {/* Card Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-200 transition-colors flex items-center gap-1.5">
                    <span>Smartphones & Flagships</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                  </h3>
                  <span className="text-[11px] font-semibold text-zinc-300 bg-black/40 px-2 py-0.5 rounded-md border border-white/10 shrink-0">
                    79 Models
                  </span>
                </div>

                <p className="text-xs text-zinc-200 mt-1 line-clamp-1">
                  120Hz LTPO OLED curved displays, 4nm flagship processors & pro camera systems
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-3 py-1 rounded-lg backdrop-blur-xs transition-colors flex items-center gap-1">
                    <span>Shop Smartphones</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                  <span className="text-[11px] text-zinc-300 hidden sm:inline">
                    Starts at ₹7,499
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Headphones Category */}
          <div
            onClick={() => navigateToCategory('headphones')}
            className="group relative rounded-2xl overflow-hidden border border-[#E6E6E6] bg-zinc-900 hover:border-[#A20B1A] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col justify-end"
          >
            {/* Image Container with aspect ratio and smooth zoom */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <img
                src="/images/headphones/uploads_nov/headphone_sennheiser_momentum4_black_case.jpg"
                alt="Studio grade ANC headphones and high-fidelity acoustics"
                referrerPolicy="no-referrer"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/headphones/apex_noir_black.jpg';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Category Pill Tag */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 bg-[#A20B1A] text-white text-[11px] font-black rounded-full uppercase tracking-wider shadow-md">
                <Headphones className="w-3.5 h-3.5 text-white" />
                <span>Headphones</span>
              </div>

              {/* Right Discount / Popularity Pill */}
              <div className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#232429] text-[10px] font-extrabold rounded-full shadow-xs">
                Sennheiser & Apple
              </div>

              {/* Card Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-200 transition-colors flex items-center gap-1.5">
                    <span>Headphones & Studio ANC</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                  </h3>
                  <span className="text-[11px] font-semibold text-zinc-300 bg-black/40 px-2 py-0.5 rounded-md border border-white/10 shrink-0">
                    15 Models
                  </span>
                </div>

                <p className="text-xs text-zinc-200 mt-1 line-clamp-1">
                  Sennheiser Momentum 4, AirPods Max, planar magnetic & Pioneer DJ cans
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-3 py-1 rounded-lg backdrop-blur-xs transition-colors flex items-center gap-1">
                    <span>Shop Headphones</span>
                    <ChevronRight className="w-3 h-3" />
                  </span>
                  <span className="text-[11px] text-zinc-300 hidden sm:inline">
                    Starts at ₹1,799
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Secondary Categories Row: Styled identically to Smartphones and Headphones */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5 pt-1">
          {otherCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => navigateToCategory(cat.slug)}
              className="group relative rounded-xl overflow-hidden border border-[#E6E6E6] bg-zinc-950 hover:border-[#A20B1A] transition-all duration-300 shadow-xs hover:shadow-lg cursor-pointer flex flex-col justify-end text-left h-44 sm:h-48 w-full"
            >
              {/* Image Container with aspect ratio and smooth zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    if (cat.fallbackImage) {
                      (e.target as HTMLImageElement).src = cat.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />

                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25" />

                {/* Category Pill Tag */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 bg-[#A20B1A] text-white text-[9.5px] font-black rounded-full uppercase tracking-wider shadow-md">
                  {cat.icon}
                  <span>{cat.name}</span>
                </div>

                {/* Right Badge Pill */}
                {cat.topBadge && (
                  <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[#232429] text-[9px] font-black rounded-full shadow-xs">
                    {cat.topBadge}
                  </div>
                )}

                {/* Card Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-red-200 transition-colors flex items-center gap-1 truncate">
                      <span>{cat.name}</span>
                      <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-1 transition-transform duration-300 shrink-0" />
                    </h4>
                    <span className="text-[9px] font-semibold text-zinc-300 bg-black/50 px-1.5 py-0.2 rounded-xs border border-white/10 shrink-0">
                      {cat.itemCount}
                    </span>
                  </div>

                  <p className="text-[10px] text-zinc-200 mt-0.5 line-clamp-1">
                    {cat.description}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-1">
                    <span className="text-[10px] font-bold text-white bg-white/20 group-hover:bg-white/30 px-2 py-0.5 rounded-md backdrop-blur-xs transition-colors flex items-center gap-0.5">
                      <span>Shop</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </span>
                    <span className="text-[10px] text-zinc-300 font-medium">
                      {cat.startPrice}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* 3. Footer Strip */}
        <div className="mt-4 pt-3 border-t border-[#E6E6E6] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#777777]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Fast Dispatch on all Smartphones and Premium Gadgets across India</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigateToCategory('deals')}
              className="text-[#A20B1A] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Deals & Offers</span>
            </button>
            <span className="text-[#E6E6E6]">|</span>
            <button
              onClick={() => navigateToCategory('all')}
              className="hover:text-[#232429] font-medium cursor-pointer"
            >
              Browse Complete Catalogue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

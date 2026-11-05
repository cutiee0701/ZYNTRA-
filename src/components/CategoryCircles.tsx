import React from 'react';
import { Category } from '../types';

export interface ExploreCategoryItem {
  id: string;
  slug: string;
  name: string;
  image: string;
  description?: string;
}

export const EXPLORE_CATEGORIES: ExploreCategoryItem[] = [
  {
    id: 'exp-smartphones',
    slug: 'smartphones',
    name: 'Smart Phones',
    image: '/public/images/smartphones/iphone16_pro_burgundy_titanium.jpg',
    description: 'Apple, Samsung, OPPO, Redmi, POCO, realme, realme Narzo & OnePlus',
  },
  {
    id: 'exp-earbuds',
    slug: 'earbuds',
    name: 'Earbuds',
    image: '/public/images/earbuds/earbuds_glossy_black.jpg',
    description: 'True wireless stereo earbuds with low-latency drivers',
  },
  {
    id: 'exp-smartwatches',
    slug: 'smartwatches',
    name: 'Smart Watches',
    image: '/public/images/smartwatches/noise_twist_round_black.png',
    description: 'Noise, Fire-Boltt, boAt & Zyntra Bluetooth Calling Watches from ₹1,199',
  },
  {
    id: 'exp-tablets',
    slug: 'tablets',
    name: 'Tablets',
    image: '/public/images/tablets/galaxy_tab_a11_plus.png',
    description: 'Flagship 3.2K & AMOLED entertainment & productivity tablets',
  },
  {
    id: 'exp-neckbands',
    slug: 'neckband',
    name: 'Neckbands',
    image: '/public/images/neckbands/neckband_cyber_transparent_mbuddy.webp',
    description: 'Flexible sport Bluetooth neckbands with magnetic clips',
  },
  {
    id: 'exp-headphones',
    slug: 'headphones',
    name: 'Headphones',
    image: '/public/images/headphones/apex_noir_black.jpg',
    description: 'Studio over-ear active noise cancelling headphones',
  },
  {
    id: 'exp-leads',
    slug: 'leads',
    name: 'Leads',
    image: '/public/images/leads/orange_typec_earphones.jpg',
    description: 'High-fidelity Type-C DAC, Lightning & 3.5mm gold-plated audio leads',
  },
];

interface CategoryCirclesProps {
  categories?: Category[];
  activeCategory: string;
  onSelectCategory: (categorySlug: string) => void;
}

export const CategoryCircles: React.FC<CategoryCirclesProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section 
      id="categories-section" 
      aria-label="Explore Categories"
      className="py-10 sm:py-12 bg-[#F5F5F7] border-b border-[#E6E6E6] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-7 sm:mb-9">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232429] tracking-tight">
            Explore Categories
          </h2>
          <p className="text-xs sm:text-sm text-[#777777] mt-1.5 font-normal max-w-xl mx-auto">
            Shop curated collections across your favorite tech essentials
          </p>
        </div>

        {/* 7 Circular Categories Row */}
        <div 
          role="tablist"
          aria-label="Explore Product Categories"
          className="flex items-start justify-start md:justify-center lg:justify-between gap-5 sm:gap-6 md:gap-6 lg:gap-8 overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 -mx-2"
        >
          {EXPLORE_CATEGORIES.map((cat) => {
            const isActive = activeCategory.toLowerCase() === cat.slug.toLowerCase();
            const isSmartphones = cat.slug.toLowerCase() === 'smartphones';
            const isSmartwatch = cat.slug.toLowerCase() === 'smartwatches';
            const isTablet = cat.slug.toLowerCase() === 'tablets';

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  onSelectCategory(cat.slug);
                  const target = document.getElementById('featured-products');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectCategory(cat.slug);
                    const target = document.getElementById('featured-products');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}
                className="flex flex-col items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A20B1A] focus-visible:ring-offset-2 rounded-2xl p-1.5 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 cursor-pointer relative"
              >
                {/* Circular image container with refined ring and shadow */}
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center p-[3px] transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-[#A20B1A] via-[#C91A2B] to-[#E52E3E] shadow-xl shadow-red-900/30 scale-105 ring-4 ring-[#A20B1A]/20'
                      : isSmartphones || isSmartwatch
                      ? 'bg-gradient-to-b from-white to-[#F0F2F6] border-2 border-[#CBD5E1] shadow-md group-hover:border-[#A20B1A] group-hover:shadow-xl group-hover:shadow-red-900/20 group-hover:scale-105'
                      : 'bg-white border-2 border-[#E1E4EA] shadow-sm group-hover:border-[#A20B1A]/60 group-hover:shadow-lg group-hover:shadow-[#A20B1A]/15 group-hover:scale-105'
                  }`}
                >
                  {/* Inner image container */}
                  <div
                    className={`w-full h-full rounded-full overflow-hidden transition-all duration-300 relative flex items-center justify-center ${
                      isActive
                        ? 'border-2 border-white bg-white shadow-inner'
                        : isSmartwatch || isSmartphones
                        ? 'border border-slate-200/90 bg-white shadow-[inset_0_1px_4px_rgba(0,0,0,0.06)] group-hover:border-[#A20B1A]/50'
                        : 'border border-transparent bg-gradient-to-b from-white to-[#F8F9FA]'
                    }`}
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (isSmartphones) {
                          target.src = '/public/assets/aistudio/images__10__c8f9cc7e.jpg';
                        }
                      }}
                      className={`w-full h-full transition-transform duration-300 group-hover:scale-110 ${
                        isSmartwatch
                          ? 'object-contain p-1.5 drop-shadow-md group-hover:scale-115'
                          : isSmartphones
                          ? 'object-contain p-1.5 drop-shadow-md group-hover:scale-115'
                          : isTablet
                          ? 'object-contain p-2 drop-shadow-md'
                          : 'object-cover'
                      }`}
                    />
                    {/* Subtle specular ambient sheen */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-transparent to-black/[0.04] pointer-events-none" />
                  </div>

                  {/* 5G micro badge for Smart Phones */}
                  {isSmartphones && (
                    <span 
                      aria-label="5G Network Flagship"
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-[#A20B1A] via-[#C91A2B] to-[#E52E3E] text-[9px] font-black text-white px-1.5 py-0.5 rounded-full shadow-md uppercase tracking-wider ring-2 ring-white scale-90 sm:scale-100 z-10 transition-transform duration-300 group-hover:scale-105"
                    >
                      5G
                    </span>
                  )}

                  {/* GPS micro badge for Smart Watches */}
                  {isSmartwatch && (
                    <span 
                      aria-label="GPS Always-On AMOLED"
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] text-[8.5px] font-black text-white px-1.5 py-0.5 rounded-full shadow-md uppercase tracking-wider ring-2 ring-white scale-90 sm:scale-100 z-10 transition-all duration-300 group-hover:scale-105 group-hover:from-[#A20B1A] group-hover:to-[#E52E3E]"
                    >
                      GPS
                    </span>
                  )}
                </div>

                {/* Category label directly below image */}
                <div className="flex flex-col items-center gap-1">
                  <span
                    className={`text-xs sm:text-sm tracking-tight text-center whitespace-nowrap transition-colors duration-200 ${
                      isActive
                        ? 'text-[#A20B1A] font-bold'
                        : 'text-[#232429] font-medium group-hover:text-[#A20B1A]'
                    }`}
                  >
                    {cat.name}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A20B1A] animate-pulse" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

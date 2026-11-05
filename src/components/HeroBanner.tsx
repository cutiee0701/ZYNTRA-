import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Sparkles, Truck } from 'lucide-react';

interface HeroBannerProps {
  onShopNow: (category?: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onShopNow }) => {
  const slides = [
    {
      id: 1,
      badge: 'ZYNTRA TECH ECOSYSTEM · ALL ESSENTIALS',
      title: 'Everything Tech, All in One Place',
      subtitle: 'Discover the ultimate destination for next-gen 5G smartphones, smart-touch ANC earbuds, wireless Bluetooth neckbands, and rugged outdoor smartwatches.',
      cta: 'SHOP ALL TECH',
      secondaryCta: 'Explore Deals',
      category: 'all',
      image: '/public/images/smartphones/flagship_trio_showcase.jpg',
      label: 'Smartphones',
      highlightTag: 'Save Up to 45% Off',
    },
    {
      id: 2,
      badge: 'MAGNETIC BUDS · 40H PLAYTIME',
      title: 'Hi-Fi Wireless Sport Neckbands',
      subtitle: 'Featherlight skin-friendly collar band with digital battery display, 10mm bass boost drivers, and rapid Type-C fast charging.',
      cta: 'SHOP NECKBANDS',
      secondaryCta: 'View Neckbands',
      category: 'neckband',
      image: '/public/images/neckbands/neckband_gunmetal_sport.jpg',
      label: 'Neckbands',
      highlightTag: 'Starting at ₹1,499',
    },
    {
      id: 3,
      badge: 'SMART INTERACTIVE CASE · 40dB ANC',
      title: 'MBUDS Elite ANC Earbuds',
      subtitle: 'Smart touchscreen pebble charging case with real-time incoming call display, 40dB active noise cancellation, and 42-hour combined battery reserve.',
      cta: 'SHOP EARBUDS',
      secondaryCta: 'View Earbuds',
      category: 'earbuds',
      image: '/public/images/earbuds/earbuds_emerald_green.jpg',
      label: 'ANC Earbuds',
      highlightTag: 'Special Launch Deal ₹2,499',
    },
    {
      id: 4,
      badge: 'IP68 WATERPROOF · AMOLED DISPLAY',
      title: 'Waterproof Smartwatch',
      subtitle: 'Rugged water-resistant chassis, vibrant color touch display with interactive dynamic fitness dials, heart rate tracking, and 14-day endurance.',
      cta: 'SHOP WATCHES',
      secondaryCta: 'View Smartwatches',
      category: 'wearables',
      image: '/public/assets/aistudio/71t64ouihLL_d309fcd9.jpg',
      label: 'Smartwatches',
      highlightTag: 'Flat ₹3,500 Off',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-[#FEEEEF] border-b border-[#E6E6E6]">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[440px]">
          
          {/* Left Text Column: Soft Pink backdrop with Dark Headlines */}
          <div className="lg:col-span-7 space-y-5 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-red-200 rounded-md text-[11px] font-bold tracking-wider text-[#A20B1A] uppercase shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#A20B1A]" />
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#232429] leading-[1.1] text-balance">
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base text-[#777777] max-w-xl leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onShopNow(slide.category)}
                className="px-7 py-3.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md shadow-red-900/20 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>{slide.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const target = document.getElementById('featured-products');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-white hover:bg-zinc-50 text-[#232429] border border-[#E6E6E6] text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                {slide.secondaryCta}
              </button>
            </div>

            {/* Quick Micro Trust strip */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#232429] bg-white/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#E6E6E6] shadow-2xs">
                <Shield className="w-3.5 h-3.5 text-[#16803C]" />
                <span>1 Year Warranty</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#4B5563] bg-white/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#E6E6E6] shadow-2xs">
                <Truck className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Express Delivery in 48h</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#A20B1A] font-semibold bg-white/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-red-100 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#A20B1A]" />
                <span>100% Genuine Tech</span>
              </span>
            </div>
          </div>

          {/* Right Showcase Image Column */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center gap-3.5">
            {/* Main Featured Image Card (matches CSS selector 2: div:nth-of-type(2) > div:nth-of-type(1) > img:nth-of-type(1)) */}
            <div className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-slate-950 group">
              <img
                src={slide.image}
                alt={slide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Highlight badge overlay */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#E6E6E6] shadow-md">
                <p className="text-[10px] text-[#777777] uppercase tracking-wider font-bold">{slide.label}</p>
                <p className="text-xs font-extrabold text-[#A20B1A]">{slide.highlightTag}</p>
              </div>

              {/* Counter Pill */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/20">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>

            {/* 4 Interactive Tech Image Thumbnails Strip */}
            <div className="w-full max-w-lg grid grid-cols-4 gap-2 sm:gap-2.5">
              {slides.map((s, idx) => {
                const isSelected = currentSlide === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`flex flex-col items-center gap-1.5 p-1.5 rounded-xl transition-all cursor-pointer text-left ${
                      isSelected
                        ? 'bg-white shadow-md border-2 border-[#A20B1A] ring-2 ring-red-100 scale-102'
                        : 'bg-white/80 hover:bg-white border border-[#E6E6E6] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full aspect-square rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                      <img
                        src={s.image}
                        alt={s.label}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className={`text-[10px] sm:text-[11px] font-bold truncate w-full text-center ${
                      isSelected ? 'text-[#A20B1A]' : 'text-[#232429]'
                    }`}>
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Prev / Next Carousel Controls */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#232429] shadow-md flex items-center justify-center border border-[#E6E6E6] transition-all cursor-pointer z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#232429] shadow-md flex items-center justify-center border border-[#E6E6E6] transition-all cursor-pointer z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Carousel dots */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              currentSlide === idx ? 'w-6 bg-[#A20B1A]' : 'w-2 bg-[#A20B1A]/30 hover:bg-[#A20B1A]/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Sparkles, Flame } from 'lucide-react';

interface PromoBannerProps {
  onShopDeals: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onShopDeals }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Warm Cream Banner Container */}
        <div className="relative rounded-2xl overflow-hidden bg-[#FEF3DF] border border-[#E6E6E6] text-[#232429] shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Promotional Text Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-amber-300/80 rounded-md text-xs font-bold text-[#A20B1A] uppercase tracking-wide shadow-2xs">
                <Flame className="w-3.5 h-3.5 text-[#A20B1A]" />
                <span>Home & Smart Living Festival · Up to 50% Off</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#232429] leading-tight text-balance">
                Smart Home Tech & Appliances Deals
              </h2>

              <p className="text-sm text-[#777777] max-w-xl leading-relaxed">
                Elevate your connected living space. Apply coupon code <strong className="text-[#A20B1A] font-extrabold">FESTIVE20</strong> at checkout for an instant 20% discount up to ₹2,000 across smart ambient lighting, audio gear, and lifestyle electronics.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                {/* Coupon Code Pill */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-white border border-[#E6E6E6] rounded-lg shadow-xs">
                  <span className="text-xs font-mono font-extrabold text-[#A20B1A] tracking-wider">
                    FESTIVE20
                  </span>
                  <button
                    onClick={() => copyCode('FESTIVE20')}
                    className="p-1 text-[#777777] hover:text-[#232429] transition-colors cursor-pointer"
                    title="Copy code"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#16803C]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <button
                  onClick={onShopDeals}
                  className="px-6 py-2.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md shadow-red-900/10 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>SHOP DEALS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Product Showcase Graphic */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden border border-[#E6E6E6] shadow-md bg-white">
                <img
                  src="/src/assets/images/hero_audio_experience_1791888604955.jpg"
                  alt="Home Living & Smart Audio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

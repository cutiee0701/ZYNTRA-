import React from 'react';
import { 
  ShieldCheck, Award, Sparkles, Heart, Headphones, 
  Smartphone, Truck, RotateCcw, Clock, MapPin, 
  Phone, Mail, ArrowRight, CheckCircle2, Zap, 
  Users, Star, ChevronRight
} from 'lucide-react';
import { ZyntraLogo } from './ZyntraLogo';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onShopNow: (category?: string) => void;
  onOpenContact: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackToHome,
  onShopNow,
  onOpenContact,
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Breadcrumbs & Top Bar */}
      <div className="bg-[#FAFBFD] border-b border-[#E6E6E6] py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-zinc-500 font-medium">
            <button 
              onClick={onBackToHome}
              className="hover:text-[#A20B1A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[#232429] font-bold">About Us</span>
          </div>
          <button
            onClick={onBackToHome}
            className="text-xs font-bold text-[#A20B1A] hover:underline cursor-pointer flex items-center gap-1"
          >
            <span>← Back to Store</span>
          </button>
        </div>
      </div>

      {/* 2. Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#232429] to-[#18191D] text-white py-16 sm:py-24 px-4">
        {/* Subtle decorative radial highlights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A20B1A]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-rose-200 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Zyntra Story · Bengaluru, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Engineering Flagship Technology & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-200">Acoustic Purity</span> for India
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            We started Zyntra with a simple conviction: Indian tech enthusiasts shouldn’t have to compromise between exorbitant legacy luxury markups and fragile budget knock-offs. We build precision electronics designed to elevate your everyday rhythm.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onShopNow('all')}
              className="px-6 py-3 bg-gradient-to-r from-[#A20B1A] to-[#810916] hover:brightness-110 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explore Our Collections</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer backdrop-blur-xs"
            >
              <span>Contact Headquarters</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Live Impact Metrics Strip */}
      <section className="bg-white border-b border-[#E6E6E6] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-zinc-200/80 space-y-1">
            <span className="text-2xl sm:text-4xl font-black text-[#A20B1A]">500,000+</span>
            <p className="text-xs font-bold text-zinc-800">Happy Indian Shoppers</p>
            <p className="text-[11px] text-zinc-500">From metro cities to tier-3 towns</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-zinc-200/80 space-y-1">
            <span className="text-2xl sm:text-4xl font-black text-zinc-900">19,000+</span>
            <p className="text-xs font-bold text-zinc-800">Pin Codes Covered</p>
            <p className="text-[11px] text-zinc-500">Via Blue Dart & Delhivery Express</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-zinc-200/80 space-y-1">
            <div className="flex items-center justify-center gap-1">
              <span className="text-2xl sm:text-4xl font-black text-amber-500">4.8</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 mb-1" />
            </div>
            <p className="text-xs font-bold text-zinc-800">Average Customer Rating</p>
            <p className="text-[11px] text-zinc-500">Verified buyer reviews & tests</p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-zinc-200/80 space-y-1">
            <span className="text-2xl sm:text-4xl font-black text-emerald-600">100%</span>
            <p className="text-xs font-bold text-zinc-800">QC Lab Certified</p>
            <p className="text-[11px] text-zinc-500">1-Year Doorstep Warranty</p>
          </div>
        </div>
      </section>

      {/* 4. Genesis & Our Story */}
      <section className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#A20B1A] text-xs font-extrabold uppercase tracking-wider">
                Our Genesis & Mission
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#232429] tracking-tight leading-tight">
                Born in Bengaluru. Built for Those Who Demand True Excellence.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Zyntra began as an engineering lab in the vibrant technology corridor of Bellandur, Bengaluru. Our acoustic specialists, industrial designers, and hardware engineers set out to answer one nagging question:
            </p>

            <blockquote className="p-4 bg-[#FEEEEF] border-l-4 border-[#A20B1A] rounded-r-xl text-xs sm:text-sm font-semibold text-zinc-800 italic">
              "Why should Indian consumers have to pay 300% brand markups for flagship sound, high-refresh OLEDs, and smart devices that last?"
            </blockquote>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              By working directly with precision manufacturers and cutting out traditional distributor layers, we bring you world-class components: custom 40mm titanium diaphragms, lossless 24-bit DAC chips, 144Hz AMOLED panels, and aircraft-grade aerospace aluminum enclosures at honest direct-to-consumer prices.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-50 text-[#A20B1A] rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">Zero Middlemen Markup</h4>
                  <p className="text-[11px] text-zinc-500">Pure engineering value directly passed to you.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-50 text-[#A20B1A] rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">Strict Quality Audits</h4>
                  <p className="text-[11px] text-zinc-500">Every unit tested for frequency response and drop safety.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 p-8 text-white space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <ZyntraLogo size="sm" showTagline={false} />
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#A20B1A]/30 text-rose-300 border border-[#A20B1A]/40">
                  Engineering Standards 2026
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                  "We obsess over milliwatts, frequency responses, and tactile clicks so you hear music exactly as the artist intended."
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every pair of Zyntra headphones, every 5G smartphone, and every calling smartwatch passes through 32 individual stress tests before it reaches our shipping depot in Bengaluru.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-zinc-800 text-center">
                <div>
                  <span className="block text-base font-black text-white">40mm</span>
                  <span className="text-[10px] text-zinc-500">Titanium Drivers</span>
                </div>
                <div>
                  <span className="block text-base font-black text-amber-400">24-Bit</span>
                  <span className="text-[10px] text-zinc-500">Digital DACs</span>
                </div>
                <div>
                  <span className="block text-base font-black text-emerald-400">IP68</span>
                  <span className="text-[10px] text-zinc-500">Water Sealing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Four Core Pillars of Zyntra */}
      <section className="bg-[#FAFBFD] border-y border-[#E6E6E6] py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#A20B1A] text-xs font-extrabold uppercase tracking-wider">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#232429]">
              The Four Pillars Behind Every Zyntra Product
            </h2>
            <p className="text-xs text-zinc-500">
              How our design philosophy shapes everything from headphones to flagship smartphones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] shadow-xs space-y-3 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#FEEEEF] text-[#A20B1A] flex items-center justify-center">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold text-[#232429]">Acoustic Authenticity</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Tuned with balanced bass cavities and crystal-clear highs. No artificial frequency muddying—just pure, immersive dynamic sound.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] shadow-xs space-y-3 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold text-[#232429]">Flagship Performance</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                High-refresh 120Hz/144Hz displays, 4nm and 6nm high-efficiency chipsets, and rapid GaN charging technology built to keep up with your day.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] shadow-xs space-y-3 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold text-[#232429]">1-Year Doorstep Warranty</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                We back our engineering. If anything malfunctions within 365 days, our courier picks it up directly from your doorstep with zero repair hassle.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] shadow-xs space-y-3 hover:border-zinc-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-extrabold text-[#232429]">Pan-India Express Logistics</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Direct dispatch from state hubs within 24 hours. Real-time courier SMS updates and live consignment tracking across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Shoppers Trust Zyntra */}
      <section className="py-16 sm:py-20 px-4 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#A20B1A] text-xs font-extrabold uppercase tracking-wider">
            Consumer Confidence
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#232429]">
            The Zyntra Direct Promise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
                <RotateCcw className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900">7-Day Replacement Policy</h3>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Found any hardware defect or courier damage? Contact our team within 7 days of delivery for a seamless, prompt replacement.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900">256-Bit Encrypted Payments</h3>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Powered by Razorpay. Seamlessly pay via Google Pay, PhonePe, Paytm, credit/debit cards, net banking, or choose Cash on Delivery at your door.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-zinc-900">Live Customer Support</h3>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Speak to real human tech specialists based at our Bengaluru headquarters. Available 7 days a week from 9:00 AM to 9:00 PM IST.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Headquarters & Lab Contact Strip */}
      <section className="bg-[#232429] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-rose-300 uppercase tracking-wider">
              Bengaluru Innovation Hub
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Zyntra Technologies India Pvt. Ltd.
            </h3>
            <p className="text-xs text-zinc-400 max-w-xl">
              Tower 3, Outer Ring Road Technology Corridor, Bellandur, Bengaluru, Karnataka 560103
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800">
              <Phone className="w-4 h-4 text-[#A20B1A]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-900 px-4 py-2.5 rounded-xl border border-zinc-800">
              <Mail className="w-4 h-4 text-[#A20B1A]" />
              <span>support@zyntra.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-white via-rose-50/40 to-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-[#232429]">
            Ready to Upgrade Your Tech Experience?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-xl mx-auto">
            Browse our verified lineup of high-performance smartphones, flagship tablets, smart wearables, and audiophile sound gear.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onShopNow('smartphones')}
              className="px-5 py-2.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              Shop Flagship Smartphones
            </button>
            <button
              onClick={() => onShopNow('tablets')}
              className="px-5 py-2.5 bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-bold rounded-xl border border-zinc-300 transition-all cursor-pointer"
            >
              Shop Tablets & Bundles
            </button>
            <button
              onClick={() => onShopNow('audio')}
              className="px-5 py-2.5 bg-white hover:bg-zinc-100 text-zinc-800 text-xs font-bold rounded-xl border border-zinc-300 transition-all cursor-pointer"
            >
              Shop Audio Gear
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

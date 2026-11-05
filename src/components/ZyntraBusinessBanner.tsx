import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, Sparkles, X, FileText, 
  ArrowRight, ShieldCheck, ChevronUp, Percent, Gift, TrendingDown
} from 'lucide-react';

interface ZyntraBusinessBannerProps {
  onBackToTop?: () => void;
}

export const ZyntraBusinessBanner: React.FC<ZyntraBusinessBannerProps> = ({ onBackToTop }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [docType, setDocType] = useState<'GST' | 'UDYAM' | 'FSSAI'>('GST');
  const [regNumber, setRegNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleBackToTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setErrorMsg('Please enter your business or company name.');
      return;
    }
    if (!regNumber.trim() || regNumber.trim().length < 6) {
      setErrorMsg(`Please enter a valid ${docType} registration number.`);
      return;
    }

    setErrorMsg('');
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      setVerified(true);
    }, 1200);
  };

  const resetForm = () => {
    setBusinessName('');
    setRegNumber('');
    setVerified(false);
    setErrorMsg('');
    setModalOpen(false);
  };

  // Generate glowing marquee bulb dots
  const bulbCount = 42;
  const bulbs = Array.from({ length: bulbCount });

  return (
    <div className="w-full select-none">
      {/* ================= WHOLESALE ELECTRONICS BANNER ================= */}
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#031d44] via-[#003e85] to-[#042452] text-white border-y border-[#1e4976] shadow-2xl">
        
        {/* Top Marquee Light Bulbs Border */}
        <div className="w-full flex items-center justify-between px-2 py-1 bg-[#021430]/90 border-b border-[#2d5d8f]/40 overflow-hidden">
          {bulbs.map((_, i) => (
            <span
              key={`top-bulb-${i}`}
              className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#fff4cc] shrink-0 mx-auto"
              style={{
                boxShadow: i % 2 === 0 
                  ? '0 0 6px 2px rgba(255, 235, 140, 0.9), 0 0 12px rgba(255, 200, 50, 0.6)' 
                  : '0 0 5px 1px rgba(255, 255, 255, 0.8), 0 0 8px rgba(220, 240, 255, 0.5)',
                opacity: (i % 3 === 0) ? 0.95 : 0.8
              }}
            />
          ))}
        </div>

        {/* Ambient Glitter / Sparkle Background Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 15% 30%, rgba(255,255,255,0.7) 1px, transparent 1px),
                              radial-gradient(circle at 85% 65%, rgba(255,255,255,0.6) 1.5px, transparent 1.5px),
                              radial-gradient(circle at 45% 80%, rgba(255,230,120,0.8) 1.2px, transparent 1.2px),
                              radial-gradient(circle at 70% 20%, rgba(255,255,255,0.7) 1px, transparent 1px),
                              radial-gradient(circle at 30% 60%, rgba(255,215,0,0.9) 1.5px, transparent 1.5px)`,
            backgroundSize: '80px 80px, 110px 110px, 90px 90px, 130px 130px, 70px 70px'
          }}
        />

        {/* Diagonal Light Beam / Lens Flare */}
        <div 
          className="absolute -top-24 -left-20 w-96 h-96 pointer-events-none opacity-20"
          style={{
            background: 'conic-gradient(from 45deg, transparent, rgba(255,255,255,0.6), transparent 35%)',
            transform: 'rotate(-25deg)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Brand Badge: ZYNTRA BUSINESS */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-block relative">
                {/* zyntra text */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                    zyntra
                  </span>
                </div>

                {/* Curved Arrow / Smile Swoosh */}
                <div className="relative w-full -mt-1 sm:-mt-1.5 mb-1 flex justify-center lg:justify-start">
                  <svg className="w-28 sm:w-36 h-3 text-[#ff9900]" viewBox="0 0 140 16" fill="none">
                    <path
                      d="M 5 4 Q 70 18 135 4"
                      stroke="#ff9900"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 125 1 L 137 4 L 129 11 Z"
                      fill="#ff9900"
                    />
                  </svg>
                </div>

                {/* business text */}
                <div className="text-2xl sm:text-3xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow">
                  business
                </div>
              </div>

              <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-medium text-blue-100">
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>B2B Enterprise Portal</span>
              </div>
            </div>

            {/* Center Content: Headline, Cashback Perks & CTA Button */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-3">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-sm">
                  Wholesale pricing on
                </h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-0.5 drop-shadow-md">
                  Electronics
                </h2>
              </div>

              {/* Three Value Pillars with '+' separators */}
              <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-semibold text-white/95 max-w-lg">
                <span className="flex items-center gap-1">
                  10% Assured cashback*
                </span>
                <span className="text-amber-300 font-bold text-base leading-none">+</span>
                <span className="flex items-center gap-1">
                  Bulk order Discounts
                </span>
                <span className="text-amber-300 font-bold text-base leading-none">+</span>
                <span className="flex items-center gap-1">
                  Up to 18% GST input
                </span>
              </div>

              {/* Gold Pill Button: Check My Eligibility */}
              <div className="pt-1 flex flex-col items-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group relative inline-flex items-center justify-center px-7 sm:px-9 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold text-slate-900 shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden border border-yellow-200/70"
                  style={{
                    background: 'linear-gradient(180deg, #fce072 0%, #f7b731 50%, #e69d12 100%)',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Check My Eligibility</span>
                    <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Subtle glossy sheen */}
                  <div className="absolute inset-0 w-1/2 h-full bg-white/30 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
                </button>

                {/* Subtitle Under Button */}
                <p className="mt-2 text-[11px] sm:text-xs text-blue-100/90 font-medium tracking-wide">
                  *Using GST, Udyam or FSSAI
                </p>
              </div>
            </div>

            {/* Right Product Showcase Cluster: Laptop + Tablet + White Over-Ear Headphones */}
            <div className="lg:col-span-4 flex items-center justify-center relative">
              <div className="relative w-full max-w-sm flex items-end justify-center py-2">
                
                {/* 1. Modern Open Laptop (Center-Back) */}
                <div className="relative z-10 w-44 sm:w-52 h-28 sm:h-32 bg-slate-900 rounded-t-lg border-2 border-slate-700 shadow-2xl p-1.5 flex flex-col justify-between transform -rotate-1">
                  {/* Laptop Screen with Vibrant Colorful Display Wallpaper */}
                  <div className="w-full h-full rounded bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 overflow-hidden relative p-1.5 flex flex-col justify-between shadow-inner">
                    <div className="flex items-center justify-between text-[8px] text-white/90 font-mono">
                      <span className="font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        ZYNTRA PRO
                      </span>
                      <span>4K OLED</span>
                    </div>
                    <div className="text-center py-1">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-md text-[9px] font-bold text-white tracking-tight">
                        Intel Core Ultra 9
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[7px] text-white/80">
                      <span>Enterprise Ready</span>
                      <span>32GB · 1TB NVMe</span>
                    </div>
                  </div>
                  {/* Laptop Base Bevel */}
                  <div className="absolute -bottom-2 -left-3 -right-3 h-2 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-b shadow-md flex justify-center">
                    <div className="w-8 h-0.5 bg-slate-600 rounded-full mt-0.5" />
                  </div>
                </div>

                {/* 2. Tablet Propped in Front-Left (Lenovo/Zyntra Tab style) */}
                <div className="absolute -bottom-1 left-2 sm:left-4 z-20 w-28 sm:w-32 h-20 sm:h-24 bg-zinc-900 rounded-md border border-zinc-700 shadow-2xl p-1 transform -rotate-3 overflow-hidden">
                  <div className="w-full h-full rounded bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-700 p-1 flex flex-col justify-between text-white relative">
                    {/* Badge */}
                    <div className="flex justify-between items-center text-[7px]">
                      <span className="bg-amber-400 text-slate-900 font-extrabold px-1 rounded-sm text-[6px]">
                        SMART CHOICE
                      </span>
                      <span className="text-[7px] font-bold">11.5" 2K</span>
                    </div>
                    {/* Tablet Title */}
                    <div className="text-center text-[9px] font-black tracking-tight drop-shadow">
                      Zyntra Tab Pro
                    </div>
                    <div className="text-[6px] text-center text-cyan-100 font-medium">
                      MediaTek Helio · 8GB
                    </div>
                  </div>
                </div>

                {/* 3. White Wireless Over-Ear Headphones (Front-Right) */}
                <div className="absolute -bottom-2 right-2 sm:right-5 z-30 w-24 sm:w-28 h-24 sm:h-28 flex items-center justify-center transform rotate-6 drop-shadow-2xl">
                  <img
                    src="/images/headphones/pure_acoustic_white.webp"
                    alt="Zyntra Pure Acoustic White Wireless ANC Headphones"
                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
                    onError={(e) => {
                      // Fallback SVG representation if asset load varies
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Sparkle Glint next to products */}
                <div className="absolute top-1 right-12 z-30 pointer-events-none text-yellow-300 animate-pulse">
                  ✦
                </div>
                <div className="absolute -top-3 left-10 z-30 pointer-events-none text-white/80 text-xs">
                  ✧
                </div>
              </div>

              {/* Terms footnote at bottom right */}
              <div className="absolute bottom-0 right-1 text-[9px] sm:text-[10px] text-blue-200/80 font-normal">
                *T&C apply
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Marquee Light Bulbs Border */}
        <div className="w-full flex items-center justify-between px-2 py-1 bg-[#021430]/90 border-t border-[#2d5d8f]/40 overflow-hidden">
          {bulbs.map((_, i) => (
            <span
              key={`bottom-bulb-${i}`}
              className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#fff4cc] shrink-0 mx-auto"
              style={{
                boxShadow: i % 2 !== 0 
                  ? '0 0 6px 2px rgba(255, 235, 140, 0.9), 0 0 12px rgba(255, 200, 50, 0.6)' 
                  : '0 0 5px 1px rgba(255, 255, 255, 0.8), 0 0 8px rgba(220, 240, 255, 0.5)',
                opacity: (i % 4 === 0) ? 0.95 : 0.8
              }}
            />
          ))}
        </div>
      </div>

      {/* ================= CLASSIC "BACK TO TOP" BAR ================= */}
      <button
        onClick={handleBackToTop}
        className="w-full bg-[#37475A] hover:bg-[#485769] active:bg-[#232F3E] text-white py-3.5 sm:py-4 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-150 cursor-pointer flex items-center justify-center gap-1.5 shadow-inner"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4 text-zinc-300" />
        <span>Back to top</span>
      </button>

      {/* ================= INTERACTIVE BUSINESS ELIGIBILITY MODAL ================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#031d44] via-[#003e85] to-[#042452] p-5 text-white relative border-b border-blue-900/50">
              <button
                onClick={resetForm}
                className="absolute top-4 right-4 text-blue-200 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-white">zyntra</span>
                <span className="text-xl font-bold text-amber-300">business</span>
                <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase border border-amber-400/30 ml-auto mr-7">
                  Wholesale Gateway
                </span>
              </div>
              <p className="text-xs text-blue-100 max-w-sm">
                Register your enterprise to unlock 18% GST input credit, 10% wholesale cashback, and custom bulk pricing.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {!verified ? (
                <form onSubmit={handleVerify} className="space-y-4">
                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Company / Organization Legal Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 absolute left-3 top-3 text-zinc-400" />
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Apex Technologies Pvt Ltd"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>

                  {/* Document Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Verification Document Type
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['GST', 'UDYAM', 'FSSAI'] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setDocType(type)}
                          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                            docType === type
                              ? 'bg-amber-400/20 border-amber-400 text-amber-300 shadow-sm'
                              : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {type === 'GST' ? 'GSTIN (Tax)' : type === 'UDYAM' ? 'Udyam MSME' : 'FSSAI License'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Registration Number */}
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      {docType} Registration Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 absolute left-3 top-3 text-zinc-400" />
                      <input
                        type="text"
                        value={regNumber}
                        onChange={(e) => setRegNumber(e.target.value.toUpperCase())}
                        placeholder={
                          docType === 'GST' 
                            ? 'e.g. 29AAAAA0000A1Z5' 
                            : docType === 'UDYAM' 
                            ? 'e.g. UDYAM-KR-03-0001234' 
                            : 'e.g. 10019043002345'
                        }
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-500 font-mono focus:outline-none focus:border-amber-400 uppercase"
                        required
                      />
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-1 block">
                      Official government-issued tax or MSME enterprise identifier.
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="bg-zinc-800/60 border border-zinc-700/80 rounded-xl p-3 grid grid-cols-3 gap-2 text-center">
                    <div className="p-1.5">
                      <Percent className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <div className="text-[11px] font-bold text-white">18% GST</div>
                      <div className="text-[9px] text-zinc-400">Input Tax Credit</div>
                    </div>
                    <div className="p-1.5 border-x border-zinc-700/80">
                      <Gift className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <div className="text-[11px] font-bold text-white">10% Cashback</div>
                      <div className="text-[9px] text-zinc-400">On Bulk Orders</div>
                    </div>
                    <div className="p-1.5">
                      <TrendingDown className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-[11px] font-bold text-white">Tiered Bulk</div>
                      <div className="text-[9px] text-zinc-400">Up to 35% Off</div>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-2.5 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isVerifying}
                      className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-400/20 active:scale-[0.99] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isVerifying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                          <span>Verifying with Government Portal...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheck className="w-4 h-4 text-slate-900" />
                          <span>Check Eligibility & Activate Wholesale Rates</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Verification Success State */
                <div className="text-center py-4 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-2">
                      Enterprise Account Approved
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Congratulations, {businessName}!
                    </h3>
                    <p className="text-xs text-zinc-300 max-w-sm mx-auto mt-1 leading-relaxed">
                      Your <span className="font-semibold text-white">{docType} ({regNumber})</span> is verified. You now have instant access to wholesale electronics pricing and 18% GST invoice generation.
                    </p>
                  </div>

                  <div className="bg-zinc-800/90 border border-zinc-700 rounded-xl p-4 text-left space-y-2 text-xs">
                    <div className="flex justify-between items-center text-zinc-300">
                      <span>Assured Wholesale Cashback:</span>
                      <span className="font-bold text-emerald-400">10% Active</span>
                    </div>
                    <div className="flex justify-between items-center text-zinc-300">
                      <span>GST Tax Invoicing:</span>
                      <span className="font-bold text-amber-300">Enabled (B2B Tax Credit)</span>
                    </div>
                    <div className="flex justify-between items-center text-zinc-300">
                      <span>Dedicated Corporate Manager:</span>
                      <span className="font-bold text-white">corporate@zyntra.com</span>
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg cursor-pointer"
                  >
                    Start Shopping with Wholesale Benefits
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

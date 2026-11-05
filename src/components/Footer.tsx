import React from 'react';
import { 
  ShieldCheck, Truck, RotateCcw, Mail, Phone, MapPin, 
  ExternalLink, Heart
} from 'lucide-react';
import { ZyntraBusinessBanner } from './ZyntraBusinessBanner';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenTracking: () => void;
  onOpenAdmin: () => void;
  onOpenPolicy?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenTracking,
  onOpenAdmin,
  onOpenPolicy,
}) => {
  return (
    <footer id="footer-section" className="bg-[#232429] text-zinc-400 text-xs border-t border-zinc-800">
      {/* Zyntra Business Wholesale Electronics Banner & Back-to-Top bar */}
      <ZyntraBusinessBanner />

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#A20B1A] to-[#810916] flex items-center justify-center text-white shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16l-12 16h12" />
                  <circle cx="12" cy="12" r="9" strokeOpacity="0.4" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                ZYNTRA
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Zyntra is India's premier destination for high-performance audio, flagship smart devices, wearables, and electronics designed to connect your world with uncompromising build quality.
            </p>

            <div className="space-y-2 text-zinc-400 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#A20B1A]" />
                <span>Customer Care: +91 98765 43210 (9 AM - 9 PM IST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#A20B1A]" />
                <span>support@zyntra.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#A20B1A]" />
                <span>Bengaluru Tech Park, Karnataka, 560103</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Shop Collections</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('smartphones')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Flagship Smartphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('audio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Wireless ANC Headphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('wearables')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Titanium Smartwatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('gaming')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mechanical Gaming Gear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('accessories')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  GaN Chargers & MagPulse
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectCategory('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Zyntra
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTracking}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Truck className="w-3.5 h-3.5 text-[#A20B1A]" />
                  <span>Track Consignment</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onOpenPolicy) {
                      onOpenPolicy();
                    } else {
                      const el = document.getElementById('benefits');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  7-Day Replacement Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('benefits');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Warranty Registration
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAdmin}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group text-left"
                  title="Secure Admin Portal (Password Protected)"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A20B1A] group-hover:scale-110 transition-transform shrink-0" />
                  <span>Admin Management Portal</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © 2026 Zyntra Technologies India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onSelectCategory('about')}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              About Us
            </button>
            <span>·</span>
            <button 
              onClick={onOpenPolicy}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button 
              onClick={onOpenPolicy}
              className="hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <span className="text-zinc-500">Security Audits</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

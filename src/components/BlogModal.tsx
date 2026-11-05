import React, { useState } from 'react';
import { X, BookOpen, Clock, Tag, ArrowRight, Sparkles, Share2, Check } from 'lucide-react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreProduct?: () => void;
}

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  author: string;
  tags: string[];
}

export const BlogModal: React.FC<BlogModalProps> = ({
  isOpen,
  onClose,
  onExploreProduct,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const articles: Article[] = [
    {
      id: 'art-1',
      title: 'How Hybrid 45dB Active Noise Cancellation Actually Works in 2026',
      category: 'Audio Engineering',
      readTime: '4 min read',
      date: 'October 12, 2026',
      summary: 'Explore the difference between feedforward, feedback, and adaptive hybrid ANC algorithms. Learn why titanium dynamic drivers combined with quad-mic environmental suppression deliver studio-master quality even on noisy metro commutes.',
      author: 'Rohit Sharma · Audio Architect',
      tags: ['ANC', 'Hi-Res Audio', 'Bluetooth 5.4'],
    },
    {
      id: 'art-2',
      title: 'Titanium vs Aluminium: Choosing the Ultimate Chassis for Your Smartwatch',
      category: 'Wearables Guide',
      readTime: '5 min read',
      date: 'October 8, 2026',
      summary: 'A deep-dive into aerospace titanium alloys, sapphire crystal scratch-resistance, and dual-frequency GPS antennas. Discover why marathoners, hikers, and daily commuters are upgrading to unibody titanium smartwatches.',
      author: 'Ananya Deshmukh · Wearables Editor',
      tags: ['Smartwatch', 'Titanium', 'Fitness Tech'],
    },
    {
      id: 'art-3',
      title: 'GaN III Fast Charging Explained: Why Silicon Power Bricks are Obsolete',
      category: 'Hardware & Power',
      readTime: '3 min read',
      date: 'September 29, 2026',
      summary: 'Gallium Nitride (GaN) semiconductors generate 40% less thermal heat while enabling triple the charging wattage in half the physical volume. Find out how smart power distribution charges your laptop, phone, and earbuds safely from one pocket adapter.',
      author: 'Vikram Mehta · Electronics Specialist',
      tags: ['GaN 65W', 'USB-C PD', 'Fast Charge'],
    },
  ];

  const handleCopy = (id: string) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E6E6E6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#232429]">
                Zyntra Tech Journal & Buying Guides
              </h2>
              <p className="text-xs text-[#777777]">Expert engineering insights and hardware guides</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#777777] hover:text-[#232429] rounded-lg cursor-pointer"
            aria-label="Close Blog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          {articles.map((art) => (
            <article 
              key={art.id}
              className="p-5 rounded-2xl border border-[#E6E6E6] bg-white hover:border-[#A20B1A]/40 hover:bg-[#F5F5F7]/40 transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="px-2 py-0.5 rounded-md bg-[#FEEEEF] text-[#A20B1A] font-bold">
                  {art.category}
                </span>
                <div className="flex items-center gap-3 text-[#777777]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </span>
                  <span>·</span>
                  <span>{art.date}</span>
                </div>
              </div>

              <h3 className="text-base font-extrabold text-[#232429] hover:text-[#A20B1A] transition-colors cursor-pointer">
                {art.title}
              </h3>

              <p className="text-xs text-[#777777] leading-relaxed">
                {art.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E6E6E6]">
                <div className="flex items-center gap-1.5">
                  {art.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] bg-[#F5F5F7] text-[#232429] px-2 py-0.5 rounded border border-[#E6E6E6] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(art.id)}
                    className="p-1.5 text-[#777777] hover:text-[#232429] rounded-lg border border-[#E6E6E6] text-xs flex items-center gap-1 cursor-pointer"
                    title="Share Article Link"
                  >
                    {copiedId === art.id ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                    <span className="text-[11px]">{copiedId === art.id ? 'Copied' : 'Share'}</span>
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onExploreProduct?.();
                    }}
                    className="text-xs font-bold text-[#A20B1A] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Related Hardware</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

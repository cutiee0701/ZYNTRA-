import React, { useState, useMemo } from 'react';
import { 
  Trophy, Medal, Star, Heart, ShoppingBag, Eye, 
  Sparkles, Flame, SlidersHorizontal, ArrowUpDown, 
  ChevronRight, ArrowRight, ShieldCheck, Check 
} from 'lucide-react';
import { Product } from '../types';
import { formatRupee } from '../lib/api';

interface BestSellersPageProps {
  products: Product[];
  wishlistIds: string[];
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onBackToHome: () => void;
}

export const BestSellersPage: React.FC<BestSellersPageProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rank');

  // Compute verifiable popularity score:
  // (reviewCount * 2) + (rating * 100) + (discountPercentage * 1.5)
  const rankedProducts = useMemo(() => {
    return [...products]
      .map((p) => {
        const popularityScore = Math.round((p.reviewCount * 2.2) + (p.rating * 120) + (p.discountPercentage * 1.8));
        return {
          ...p,
          popularityScore,
        };
      })
      .sort((a, b) => b.popularityScore - a.popularityScore)
      .map((p, index) => ({
        ...p,
        bestsellerRank: index + 1,
      }));
  }, [products]);

  // Filter and sort
  const displayedProducts = useMemo(() => {
    return rankedProducts
      .filter((p) => {
        if (selectedCategory === 'all') return true;
        return p.category.toLowerCase() === selectedCategory.toLowerCase();
      })
      .sort((a, b) => {
        if (sortBy === 'rank') return a.bestsellerRank - b.bestsellerRank;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
        if (sortBy === 'price-low') return a.pricePaise - b.pricePaise;
        if (sortBy === 'price-high') return b.pricePaise - a.pricePaise;
        if (sortBy === 'discount') return b.discountPercentage - a.discountPercentage;
        return 0;
      });
  }, [rankedProducts, selectedCategory, sortBy]);

  const top3 = rankedProducts.slice(0, 3);

  const categories = [
    { label: 'All Bestsellers', value: 'all' },
    { label: 'Audio & Sound', value: 'audio' },
    { label: 'Wearables', value: 'wearables' },
    { label: 'Smartphones', value: 'smartphones' },
    { label: 'Accessories', value: 'accessories' },
    { label: 'Home Appliances', value: 'home-kitchen' },
  ];

  return (
    <div className="bg-[#F5F5F7]/50 min-h-screen pb-16">
      {/* 1. Breadcrumbs */}
      <div className="bg-white border-b border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto px-4 py-3 text-xs flex items-center gap-2 text-[#777777]">
          <button 
            onClick={onBackToHome}
            className="hover:text-[#A20B1A] transition-colors cursor-pointer font-medium"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-bold text-[#232429]">Best Sellers</span>
        </div>
      </div>

      {/* 2. Hero Header Banner */}
      <section className="bg-white border-b border-[#E6E6E6] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEEEEF] text-[#A20B1A] text-xs font-bold tracking-wide uppercase mb-3">
                <Flame className="w-4 h-4 text-[#A20B1A]" />
                <span>Verified Customer Favorites · Updated Daily</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[#232429] tracking-tight">
                Zyntra Best Sellers
              </h1>
              <p className="text-sm text-[#777777] mt-2 max-w-2xl leading-relaxed">
                Our most in-demand gadgets, audio hardware, and smart lifestyle accessories. Ranked dynamically based on genuine verified buyer reviews, highest star ratings, and community popularity.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-[#F5F5F7] p-3 rounded-2xl border border-[#E6E6E6] text-xs text-[#232429]">
              <Trophy className="w-5 h-5 text-[#A20B1A] shrink-0" />
              <div>
                <p className="font-bold">Transparent Ranking</p>
                <p className="text-[11px] text-[#777777]">Based on verified review volume & customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pt-8">
        {/* 3. Top 3 Spotlight Podium */}
        {top3.length >= 3 && selectedCategory === 'all' && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-extrabold text-[#232429] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#A20B1A]" />
                <span>Top 3 Customer Hall of Fame</span>
              </h2>
              <span className="text-xs text-[#777777]">Leaderboard positions #1 – #3</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {top3.map((prod, index) => {
                const rankLabels = ['#1 Overall Best Seller', '#2 Trending Favorite', '#3 Top Performer'];
                const badgeStyles = [
                  'bg-gradient-to-r from-amber-500 to-yellow-600 text-white',
                  'bg-gradient-to-r from-slate-400 to-zinc-500 text-white',
                  'bg-gradient-to-r from-amber-700 to-amber-900 text-white',
                ];

                return (
                  <div 
                    key={prod.id}
                    className="relative bg-white rounded-2xl border border-[#E6E6E6] p-5 shadow-xs hover:shadow-md hover:border-[#A20B1A]/40 transition-all flex flex-col justify-between group"
                  >
                    {/* Podium Rank Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-black flex items-center gap-1.5 shadow-2xs ${badgeStyles[index]}`}>
                        <Medal className="w-3.5 h-3.5" />
                        <span>{rankLabels[index]}</span>
                      </span>

                      <button
                        onClick={() => onToggleWishlist(prod.id)}
                        className="p-1.5 rounded-full hover:bg-[#F5F5F7] text-[#777777] hover:text-[#A20B1A] transition-colors cursor-pointer"
                        title={wishlistIds.includes(prod.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      >
                        <Heart 
                          className={`w-4 h-4 ${wishlistIds.includes(prod.id) ? 'fill-[#A20B1A] text-[#A20B1A]' : ''}`} 
                        />
                      </button>
                    </div>

                    {/* Image */}
                    <div 
                      onClick={() => onSelectProduct(prod)}
                      className="cursor-pointer overflow-hidden rounded-xl bg-[#F5F5F7] aspect-4/3 mb-4 flex items-center justify-center relative"
                    >
                      <img 
                        src={prod.images[0]} 
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/75 text-white text-[10px] font-bold rounded">
                        {prod.discountPercentage}% OFF
                      </span>
                    </div>

                    {/* Info */}
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-500" />
                        </div>
                        <span className="text-xs font-bold text-[#232429]">{prod.rating}</span>
                        <span className="text-xs text-[#777777]">({prod.reviewCount} reviews)</span>
                      </div>

                      <h3 
                        onClick={() => onSelectProduct(prod)}
                        className="text-sm font-bold text-[#232429] group-hover:text-[#A20B1A] transition-colors cursor-pointer line-clamp-2 min-h-[40px]"
                      >
                        {prod.name}
                      </h3>

                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-base font-black text-[#A20B1A] tabular-nums">
                          {formatRupee(prod.pricePaise)}
                        </span>
                        <span className="text-xs text-[#777777] line-through tabular-nums">
                          {formatRupee(prod.originalPricePaise)}
                        </span>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="mt-4 pt-3 border-t border-[#E6E6E6] flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart(prod.id)}
                        className="flex-1 py-2 px-3 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </button>
                      <button
                        onClick={() => onSelectProduct(prod)}
                        className="p-2 border border-[#E6E6E6] hover:bg-[#F5F5F7] rounded-xl text-[#232429] cursor-pointer"
                        title="Quick View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 4. Controls: Categories Filter & Sorting */}
        <div className="bg-white rounded-2xl border border-[#E6E6E6] p-4 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#A20B1A] text-white shadow-xs'
                    : 'bg-[#F5F5F7] text-[#232429] hover:bg-zinc-200/80 border border-[#E6E6E6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Selection */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <span className="text-xs text-[#777777] font-medium flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort By:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="py-1.5 pl-2.5 pr-8 text-xs font-bold bg-[#F5F5F7] border border-[#E6E6E6] rounded-xl text-[#232429] outline-none cursor-pointer focus:border-[#A20B1A]"
            >
              <option value="rank">Popularity Rank</option>
              <option value="rating">Customer Rating</option>
              <option value="reviews">Review Volume</option>
              <option value="discount">Biggest Savings</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* 5. Complete Best Seller Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <div 
              key={prod.id}
              className="relative bg-white rounded-2xl border border-[#E6E6E6] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Top Banner with Rank */}
              <div className="p-3 pb-0 flex items-center justify-between">
                <span className="px-2 py-0.5 bg-[#FEEEEF] text-[#A20B1A] text-[11px] font-black rounded-md border border-red-100 flex items-center gap-1">
                  <span>#{prod.bestsellerRank}</span>
                  <span className="text-[10px] font-bold text-[#777777]">Bestseller</span>
                </span>

                <button
                  onClick={() => onToggleWishlist(prod.id)}
                  className="p-1.5 rounded-full hover:bg-[#F5F5F7] text-[#777777] hover:text-[#A20B1A] transition-colors cursor-pointer"
                  title={wishlistIds.includes(prod.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart 
                    className={`w-4 h-4 ${wishlistIds.includes(prod.id) ? 'fill-[#A20B1A] text-[#A20B1A]' : ''}`} 
                  />
                </button>
              </div>

              {/* Product Image */}
              <div 
                onClick={() => onSelectProduct(prod)}
                className="p-4 cursor-pointer flex items-center justify-center relative aspect-square bg-[#F5F5F7] m-3 rounded-xl overflow-hidden"
              >
                <img 
                  src={prod.images[0]} 
                  alt={prod.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {prod.discountPercentage > 0 && (
                  <span className="absolute top-2 left-2 bg-[#A20B1A] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
                    {prod.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Product Details */}
              <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-1.5">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                    </div>
                    <span className="text-xs font-bold text-[#232429]">{prod.rating}</span>
                    <span className="text-xs text-[#777777]">({prod.reviewCount})</span>
                  </div>

                  <p className="text-[11px] text-[#777777] uppercase font-semibold tracking-wide">
                    {prod.brand}
                  </p>

                  <h3 
                    onClick={() => onSelectProduct(prod)}
                    className="text-xs font-bold text-[#232429] group-hover:text-[#A20B1A] transition-colors cursor-pointer line-clamp-2 min-h-[34px] mt-0.5"
                  >
                    {prod.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mt-2.5">
                    <span className="text-sm font-black text-[#A20B1A] tabular-nums">
                      {formatRupee(prod.pricePaise)}
                    </span>
                    <span className="text-xs text-[#777777] line-through tabular-nums">
                      {formatRupee(prod.originalPricePaise)}
                    </span>
                  </div>
                </div>

                {/* Add to Cart button */}
                <div className="mt-4 pt-3 border-t border-[#E6E6E6] flex items-center gap-2">
                  <button
                    onClick={() => onAddToCart(prod.id)}
                    className="flex-1 py-2 px-3 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => onSelectProduct(prod)}
                    className="p-2 border border-[#E6E6E6] hover:bg-[#F5F5F7] rounded-xl text-[#232429] cursor-pointer"
                    title="View Specs & Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

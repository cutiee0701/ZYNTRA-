import React, { useState } from 'react';
import { Star, Heart, ShoppingBag, Check, Eye } from 'lucide-react';
import { Product } from '../types';
import { formatRupee } from '../lib/api';

interface ProductCardProps {
  product: Product;
  isInWishlist: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (productId: string) => Promise<void> | void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInWishlist,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCartClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.stock <= 0) return;
    setIsAdding(true);
    try {
      await onAddToCart(product.id);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
    } finally {
      setIsAdding(false);
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product.id);
  };

  const isLowStock = product.stock > 0 && product.stock <= 20;

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="group relative bg-white border border-[#E6E8EC] hover:border-[#A20B1A]/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-900/10 hover:-translate-y-1.5 cursor-pointer"
    >
      {/* 1. Image Showcase Container */}
      <div className="relative aspect-[4/3] bg-gradient-to-b from-[#FAFBFD] via-[#FFFFFF] to-[#F3F4F6] overflow-hidden flex items-center justify-center p-3.5 sm:p-4.5 rounded-t-2xl">
        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes('/public/')) {
              target.src = target.src.replace('/public/', '/');
            } else if (product.images[1]) {
              target.src = product.images[1];
            }
          }}
          className="w-full h-full object-contain transition-all duration-500 ease-out group-hover:scale-108 filter drop-shadow-md group-hover:drop-shadow-xl select-none transform-gpu will-change-transform"
        />

        {/* Subtle ambient specular highlight */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-white/40 pointer-events-none" />

        {/* Discount Badge */}
        {product.discountPercentage > 0 && (
          <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-[#A20B1A] to-[#C91A2B] text-white text-[10.5px] font-black px-2 py-0.5 rounded-md shadow-sm uppercase tracking-wider">
            {product.discountPercentage}% OFF
          </div>
        )}

        {/* Wishlist Toggle Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs ${
            isInWishlist
              ? 'bg-[#A20B1A] text-white shadow-md'
              : 'bg-white/90 text-zinc-600 hover:text-[#A20B1A] hover:bg-white shadow-xs'
          }`}
          aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-white' : ''}`} />
        </button>

        {/* Category-Specific Tech Tag for Leads */}
        {product.category === 'leads' && (
          <div className="absolute bottom-2.5 left-2.5 bg-zinc-900/85 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1 z-10 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {product.specs['Connector']?.toLowerCase().includes('type-c') 
                ? 'Type-C DAC'
                : product.specs['Jack']?.toLowerCase().includes('3.5mm')
                ? '3.5mm Gold'
                : product.specs['Connector']?.toLowerCase().includes('lightning') || product.name.includes('Lightning')
                ? 'Lightning MFi'
                : 'Hi-Fi Audio'}
            </span>
          </div>
        )}

        {/* Category-Specific Tech Tag for Smartphones */}
        {product.category === 'smartphones' && (
          <div className="absolute bottom-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1.5 z-10 pointer-events-none border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-wide">
              {product.name.includes('iPhone 18')
                ? 'A19 Pro · 2nm'
                : product.name.includes('iPhone 17')
                ? 'A18 Pro · Titanium'
                : product.name.includes('Fold8')
                ? 'Snapdragon 8 Gen 4'
                : product.name.includes('X200 Pro')
                ? 'Zeiss 200MP APO'
                : product.name.includes('X200') || product.name.includes('X100')
                ? 'Zeiss Optics 5G'
                : product.name.includes('V40') || product.name.includes('V50')
                ? 'Zeiss Aura Light'
                : product.name.includes('Find X8 Pro')
                ? 'Hasselblad Quad'
                : product.name.includes('Find X8')
                ? 'Hasselblad 50MP'
                : product.name.includes('S25')
                ? 'Snapdragon 8 Gen 4'
                : product.name.includes('Note 15 Pro')
                ? 'SD 7sGen4 · 16GB'
                : product.name.includes('Note 15 SE')
                ? 'SD 6 Gen 3 · 5G'
                : product.name.includes('A7 Pro')
                ? '6300mAh · 6.9"'
                : product.name.includes('Orbital') || product.name.includes('14 Pro+')
                ? 'Periscope 120x'
                : product.name.includes('Flagship Trio')
                ? 'Flagship Trio Elite'
                : product.name.includes('iPhone 16')
                ? 'A18 Pro · 3nm'
                : product.name.includes('S24 Ultra')
                ? 'Snapdragon 8 Gen 3'
                : product.name.includes('Find X7')
                ? 'Quad Hasselblad'
                : product.name.includes('OnePlus 11')
                ? '100W SUPERVOOC'
                : product.name.includes('Nord')
                ? '100W Flash · 5G'
                : product.name.includes('Realme P1')
                ? '120Hz AMOLED'
                : product.name.includes('BMW') || product.name.includes('iQOO 15 5G')
                ? 'Snapdragon 8 Elite'
                : product.name.includes('iQOO 15R')
                ? 'SD 8 Gen 3 · 6000mAh'
                : product.name.includes('Turbo 5')
                ? '100W · Dimensity 8500'
                : product.name.includes('9000mAh') || product.name.includes('Nord 6')
                ? '9000mAh Monster Battery'
                : product.name.includes('8000mAh') || product.name.includes('Nord CE6')
                ? '8000mAh · 144 FPS'
                : product.name.includes('OnePlus 15R')
                ? '16GB+512GB · 100W'
                : product.name.includes('Edge 70 Fusion')
                ? 'Sony LYT 710 · Fabric'
                : product.name.includes('Reno16')
                ? '50MP 3.5x Telephoto'
                : product.name.includes('LAVA BOLD')
                ? 'Military Grade · 5000mAh'
                : product.name.includes('ZENO')
                ? '6000mAh · Military Drop'
                : product.name.includes('POCO C75')
                ? '4nm Snapdragon'
                : product.name.includes('PEACE')
                ? 'Ceramic 5G'
                : product.name.includes('Reno10')
                ? '32MP Telephoto'
                : '5G Flagship'}
            </span>
          </div>
        )}

        {/* Category-Specific Tech Tag for Smart Watches */}
        {product.category === 'smartwatches' && (
          <div className="absolute bottom-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1.5 z-10 pointer-events-none border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="tracking-wide">
              {product.name.includes('Turn-by-Turn') || product.name.includes('Sigma 3')
                ? 'Turn-by-Turn GPS'
                : product.name.includes('Gold Mesh') || product.name.includes('Milanese')
                ? 'Milanese Mesh'
                : product.name.includes('Metallic Link') || product.name.includes('Chain')
                ? 'Metal Chain'
                : product.name.includes('Round dial') || product.name.includes('Twist')
                ? 'Round Dial · BT Call'
                : product.name.includes('1.85"') || product.name.includes('Pulse 2 Max')
                ? '1.85" 550 Nits'
                : product.name.includes('Ninja Call')
                ? 'BT Calling · 1.83"'
                : product.name.includes('Apex') || product.name.includes('Titanium')
                ? 'Titanium AMOLED'
                : 'BT Calling · SpO2'}
            </span>
          </div>
        )}

        {/* Category-Specific Tech Tag for Tablets */}
        {product.category === 'tablets' && (
          <div className="absolute bottom-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1.5 z-10 pointer-events-none border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide">
              {product.name.includes('WorkStation') || product.name.includes('Keyboard & Mouse')
                ? 'WorkStation Bundle'
                : product.name.includes('Pink Edition')
                ? 'Stylus + Stand'
                : product.name.includes('Sky Blue') || product.name.includes('Studio Bundle')
                ? '5G WiFi 6 · L1 HD'
                : product.name.includes('IKALL')
                ? '4G LTE VoLTE'
                : product.name.includes('Lenovo')
                ? 'Dolby Atmos · 9"'
                : product.name.includes('ArmorTab') || product.name.includes('Shockproof')
                ? 'Rugged Grip · Android 14'
                : product.name.includes('PlayTab')
                ? 'Origami Folio'
                : product.name.includes('14.6')
                ? '14.6" AMOLED 2X'
                : product.name.includes('144Hz')
                ? '3.2K · 144Hz'
                : 'IPS HD Display'}
            </span>
          </div>
        )}

        {/* Category-Specific Tech Tag for Neckbands */}
        {product.category === 'neckband' && (
          <div className="absolute bottom-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1.5 z-10 pointer-events-none border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="tracking-wide">
              {product.name.includes('CyberWave') || product.name.includes('CyberPulse')
                ? 'Cyberpunk Transparent'
                : product.name.includes('boAt') || product.name.includes('Rockerz')
                ? 'boAt Signature Bass'
                : product.name.includes('UBON')
                ? '32H · Magnetic Buds'
                : product.name.includes('Zebronics') || product.name.includes('Raga')
                ? 'Made in India · ENC'
                : product.name.includes('Landmark')
                ? 'Braided Cord · 30H'
                : product.name.includes('Velcon') || product.name.includes('Promate')
                ? 'Dynamic Bass · Vibe'
                : product.name.includes('EQ-Charge') || product.name.includes('Navy')
                ? 'EQ Rapid Charge'
                : 'Magnetic Fast Pair'}
            </span>
          </div>
        )}

        {/* Category-Specific Tech Tag for Headphones */}
        {product.category === 'headphones' && (
          <div className="absolute bottom-2.5 left-2.5 bg-zinc-950/85 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1.5 z-10 pointer-events-none border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="tracking-wide">
              {product.name.includes('Momentum 4') && product.name.includes('Hard Travel Case')
                ? '60H ANC · Travel Case'
                : product.name.includes('Momentum 4') && product.name.includes('Special Edition')
                ? 'Special Copper Edition'
                : product.name.includes('Momentum 4')
                ? 'Sennheiser 60H ANC'
                : product.name.includes('AirPods Max')
                ? 'Spatial Audio · H1'
                : product.name.includes('Planar')
                ? 'Planar Magnetic · Open-Back'
                : product.name.includes('Pioneer') || product.name.includes('HDJ')
                ? 'Pro DJ Swivel · 2000mW'
                : product.name.includes('Edifier') || product.name.includes('W820NB')
                ? 'Hi-Res LDAC · -43dB ANC'
                : product.name.includes('Portronics')
                ? 'Velour Comfort · 35H'
                : product.name.includes('Rockerz 550') || product.name.includes('boAt')
                ? '50mm Drivers · Bass'
                : product.name.includes('Bronze') || product.name.includes('Lumina')
                ? 'Hi-Res Bio-Cellulose'
                : product.name.includes('Apex Noir')
                ? '45dB Hybrid ANC'
                : 'Studio Reference'}
            </span>
          </div>
        )}

        {/* Quick View Hover Action */}
        <div className="absolute inset-x-0 bottom-2 px-3 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-black/80 backdrop-blur-xs text-white text-xs font-semibold py-1 px-3 rounded-full flex items-center gap-1 shadow-md">
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </span>
        </div>
      </div>

      {/* 2. Product Meta & Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Brand & Stock Status */}
          <div className="flex items-center justify-between text-[11px] text-[#777777] mb-1">
            <span className="font-semibold uppercase tracking-wider text-zinc-500">
              {product.brand}
            </span>
            {isLowStock ? (
              <span className="text-amber-700 font-semibold">
                Only {product.stock} left
              </span>
            ) : product.stock > 0 ? (
              <span className="text-emerald-700 font-semibold">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-semibold">
                Sold Out
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="text-sm font-bold text-[#232429] line-clamp-2 leading-snug group-hover:text-[#A20B1A] transition-colors">
            {product.name}
          </h3>

          {/* Storage & RAM Variant Badge */}
          {product.specs['RAM & Storage'] ? (
            <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[10.5px] font-semibold border border-zinc-200">
                {product.specs['RAM & Storage']}
              </span>
            </div>
          ) : product.specs['Storage'] ? (
            <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[10.5px] font-semibold border border-zinc-200">
                {product.specs['Storage']}
              </span>
            </div>
          ) : null}

          {/* Star Rating & Review Count */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-bold text-zinc-800 ml-1">
                {product.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-[11px] text-[#888888]">
              ({product.reviewCount} reviews)
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-2 border-t border-zinc-100">
          <div className="flex items-baseline justify-between mb-2.5">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-extrabold text-[#232429] tabular-nums">
                {formatRupee(product.pricePaise)}
              </span>
              {product.originalPricePaise > product.pricePaise && (
                <span className="text-xs text-[#888888] line-through tabular-nums">
                  {formatRupee(product.originalPricePaise)}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="text-[11px] font-bold text-[#A20B1A] hover:text-[#810916] hover:underline cursor-pointer"
            >
              View Details
            </button>
          </div>

          <button
            onClick={handleAddToCartClick}
            disabled={product.stock <= 0 || isAdding}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-98 ${
              product.stock <= 0
                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                : justAdded
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-gradient-to-r from-[#A20B1A] via-[#B81122] to-[#810916] hover:brightness-110 text-white shadow-sm hover:shadow-md hover:shadow-red-900/20'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart</span>
              </>
            ) : product.stock <= 0 ? (
              <span>Out of Stock</span>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

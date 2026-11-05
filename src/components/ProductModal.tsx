import React, { useState } from 'react';
import { 
  X, Star, Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw, 
  Check, Share2, Plus, Minus, Zap 
} from 'lucide-react';
import { Product } from '../types';
import { formatRupee } from '../lib/api';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isInWishlist: boolean;
  onToggleWishlist: (productId: string) => void;
  onAddToCart: (productId: string, quantity: number) => Promise<void> | void;
  onBuyNow: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isInWishlist,
  onToggleWishlist,
  onAddToCart,
  onBuyNow,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => {
      const next = prev + delta;
      if (next < 1) return 1;
      if (next > product.stock) return product.stock;
      return next;
    });
  };

  const handleAddToCart = async () => {
    if (product.stock <= 0) return;
    setIsAdding(true);
    try {
      await onAddToCart(product.id, quantity);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1500);
    } finally {
      setIsAdding(false);
    }
  };

  const savingsPaise = product.originalPricePaise > product.pricePaise 
    ? product.originalPricePaise - product.pricePaise 
    : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#FAFBFD] to-[#F5F5F7] border border-[#E6E6E6] flex items-center justify-center p-4">
              <img
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (product.images[1] && target.src !== product.images[1]) {
                    target.src = product.images[1];
                  } else if (target.src.includes('/public/')) {
                    target.src = target.src.replace('/public/', '/');
                  }
                }}
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
              {product.discountPercentage > 0 && (
                <div className="absolute top-3 left-3 bg-[#A20B1A] text-white text-xs font-bold px-2.5 py-1 rounded shadow-xs">
                  {product.discountPercentage}% OFF
                </div>
              )}
            </div>

            {/* Thumbnail switcher if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer p-1 bg-white ${
                      activeImageIndex === idx ? 'border-[#A20B1A] ring-2 ring-[#FEEEEF]' : 'border-[#E6E6E6] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt="" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.includes('/public/')) {
                          target.src = target.src.replace('/public/', '/');
                        }
                      }}
                      className="w-full h-full object-contain" 
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Guarantee badges */}
            <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E6E6E6] space-y-2 text-xs text-[#777777]">
              <div className="flex items-center gap-2 text-zinc-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>Free Express Shipping across India</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>7-Day Replacement Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details & Purchase Form */}
          <div className="md:col-span-6 space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs text-[#777777] mb-1">
                <span className="font-bold uppercase tracking-wider text-[#A20B1A]">
                  {product.brand}
                </span>
                <span className="font-mono text-zinc-400">SKU: {product.sku}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#232429] leading-tight">
                {product.name}
              </h2>

              {/* Star Rating & Reviews */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-zinc-200'
                      }`}
                    />
                  ))}
                  <span className="text-xs font-bold text-zinc-900 ml-1.5">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-xs text-[#777777]">
                  ({product.reviewCount} customer reviews)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200/80">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#232429] tabular-nums">
                  {formatRupee(product.pricePaise)}
                </span>
                {product.originalPricePaise > product.pricePaise && (
                  <span className="text-sm text-zinc-400 line-through tabular-nums">
                    {formatRupee(product.originalPricePaise)}
                  </span>
                )}
                {savingsPaise > 0 && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    You save {formatRupee(savingsPaise)}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-zinc-500 mt-1">
                Inclusive of all taxes. Free shipping applied automatically.
              </p>
            </div>

            {/* Stock status indicator */}
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${product.stock > 0 ? 'bg-emerald-500' : 'bg-[#FEEEEF]0'}`} />
              <span className="text-xs font-semibold text-zinc-700">
                {product.stock > 20
                  ? `In Stock (${product.stock} units ready to dispatch)`
                  : product.stock > 0
                  ? `Hurry, only ${product.stock} units left in stock!`
                  : 'Currently Out of Stock'}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs text-[#555555] leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-1.5 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  Key Highlights
                </h4>
                <ul className="space-y-1">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#555555]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technical Specifications */}
            {product.specs && (
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-2">
                  Technical Specifications
                </h4>
                <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-lg overflow-hidden text-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex py-1.5 px-3 bg-white even:bg-zinc-50">
                      <span className="w-40 font-medium text-zinc-600">{key}</span>
                      <span className="flex-1 font-semibold text-zinc-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="pt-4 border-t border-zinc-200 space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-zinc-700">Quantity:</span>
                <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="p-2 text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-zinc-900 tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stock}
                    className="p-2 text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Wishlist toggle */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                    isInWishlist
                      ? 'border-[#A20B1A] bg-[#FEEEEF] text-[#A20B1A]'
                      : 'border-zinc-300 hover:border-zinc-400 text-zinc-600'
                  }`}
                  title={isInWishlist ? 'In your wishlist' : 'Add to wishlist'}
                >
                  <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-[#A20B1A]' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0 || isAdding}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    justAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border-2 border-[#A20B1A] text-[#A20B1A] hover:bg-[#FEEEEF]'
                  }`}
                >
                  {justAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    onAddToCart(product.id, quantity);
                    onBuyNow(product, quantity);
                    onClose();
                  }}
                  disabled={product.stock <= 0}
                  className="py-3 px-4 rounded-xl text-xs font-bold bg-[#A20B1A] hover:bg-[#810916] text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

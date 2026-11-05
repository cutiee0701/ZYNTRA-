import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { formatRupee } from '../lib/api';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#A20B1A] fill-[#A20B1A]" />
            <h2 className="text-base font-extrabold text-[#232429]">
              Saved Wishlist Items ({wishlistProducts.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#FEEEEF] text-[#A20B1A] flex items-center justify-center">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-sm font-bold text-zinc-800">Your wishlist is empty</h3>
              <p className="text-xs text-zinc-500">Tap the heart icon on any device to save it for later.</p>
            </div>
          ) : (
            <div className="divide-y divide-[#E6E6E6]">
              {wishlistProducts.map((p) => (
                <div key={p.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                  <div 
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="flex items-center gap-3 flex-1 min-w-0 cursor-pointer group"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover rounded-lg bg-zinc-100 border border-zinc-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-zinc-900 truncate group-hover:text-[#A20B1A] transition-colors">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-zinc-500">{p.brand} · {p.category}</p>
                      <p className="text-xs font-bold text-[#A20B1A] tabular-nums mt-0.5">
                        {formatRupee(p.pricePaise)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        onAddToCart(p.id);
                        onRemoveFromWishlist(p.id);
                      }}
                      className="px-3 py-1.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Cart</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(p.id)}
                      className="p-1.5 text-zinc-400 hover:text-red-600 transition-colors cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

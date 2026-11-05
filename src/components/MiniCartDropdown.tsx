import React, { useRef, useEffect } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { formatRupee } from '../lib/api';

interface MiniCartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => Promise<void> | void;
  onRemoveItem: (itemId: string) => Promise<void> | void;
  onOpenFullCart: () => void;
  onProceedToCheckout: () => void;
}

export const MiniCartDropdown: React.FC<MiniCartDropdownProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onOpenFullCart,
  onProceedToCheckout,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const subtotalPaise = cartItems.reduce(
    (sum, item) => sum + item.product.pricePaise * item.quantity,
    0
  );
  const freeShippingThresholdPaise = 99900;
  const isFreeShipping = subtotalPaise >= freeShippingThresholdPaise;
  const neededForFreeShipping = Math.max(0, freeShippingThresholdPaise - subtotalPaise);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white border border-[#E6E6E6] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[540px] animate-in fade-in slide-in-from-top-2 duration-200"
    >
      {/* Dropdown Header */}
      <div className="p-3.5 bg-white border-b border-[#E6E6E6] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-[#A20B1A]" />
          <span className="text-xs font-extrabold text-[#232429]">
            My Shopping Bag ({totalCount})
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1 text-[#777777] hover:text-[#232429] rounded-md transition-colors cursor-pointer"
          aria-label="Close cart preview"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Free Delivery Bar */}
      {cartItems.length > 0 && (
        <div className="px-4 py-2 bg-[#FEEEEF]/70 border-b border-[#E6E6E6] text-[11px]">
          {isFreeShipping ? (
            <span className="text-[#16803C] font-bold flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5" />
              <span>You've unlocked FREE Express Shipping!</span>
            </span>
          ) : (
            <span className="text-[#232429] font-medium flex items-center justify-between">
              <span>Add <strong className="text-[#A20B1A]">{formatRupee(neededForFreeShipping)}</strong> for Free Delivery</span>
              <span className="text-[#777777]">₹999</span>
            </span>
          )}
        </div>
      )}

      {/* Items List */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#E6E6E6] p-3 max-h-72">
        {cartItems.length === 0 ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#777777]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#232429]">Your bag is currently empty</p>
              <p className="text-[11px] text-[#777777] mt-0.5">Explore deals and add trending electronics.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="py-2.5 first:pt-0 last:pb-0 flex items-center gap-3">
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                referrerPolicy="no-referrer"
                className="w-13 h-13 object-cover rounded-lg bg-[#F5F5F7] border border-[#E6E6E6] shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-[#232429] truncate leading-tight">
                  {item.product.name}
                </h4>
                <p className="text-[11px] text-[#777777] mt-0.5 tabular-nums">
                  {formatRupee(item.product.pricePaise)} each
                </p>

                {/* Quantity + Price */}
                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center border border-[#E6E6E6] rounded-md bg-[#F5F5F7]">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-1 text-[#777777] hover:text-[#232429] cursor-pointer"
                      title="Decrease"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="px-2 text-[11px] font-bold text-[#232429] tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      disabled={item.quantity >= item.product.stock}
                      className="p-1 text-[#777777] hover:text-[#232429] cursor-pointer disabled:opacity-30"
                      title="Increase"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  <span className="text-xs font-extrabold text-[#A20B1A] tabular-nums">
                    {formatRupee(item.product.pricePaise * item.quantity)}
                  </span>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-1 text-[#777777] hover:text-[#DC2626] transition-colors cursor-pointer self-start"
                title="Remove item"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Dropdown Footer */}
      {cartItems.length > 0 && (
        <div className="p-3.5 bg-[#F5F5F7] border-t border-[#E6E6E6] space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#777777] font-medium">Estimated Subtotal</span>
            <span className="font-extrabold text-[#232429] tabular-nums text-sm">
              {formatRupee(subtotalPaise)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                onClose();
                onOpenFullCart();
              }}
              className="py-2.5 px-3 bg-white hover:bg-zinc-100 text-[#232429] border border-[#E6E6E6] rounded-xl text-xs font-bold transition-colors cursor-pointer text-center"
            >
              View Full Cart
            </button>

            <button
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="py-2.5 px-3 bg-[#A20B1A] hover:bg-[#810916] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[10px] text-center text-[#777777] flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#16803C]" />
            <span>256-Bit Encrypted Razorpay Checkout</span>
          </p>
        </div>
      )}
    </div>
  );
};

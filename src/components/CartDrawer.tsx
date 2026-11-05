import React, { useState } from 'react';
import { 
  X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, 
  Tag, ShieldCheck, Truck, Check, AlertCircle 
} from 'lucide-react';
import { CartItem, Coupon } from '../types';
import { formatRupee, api } from '../lib/api';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => Promise<void> | void;
  onRemoveItem: (itemId: string) => Promise<void> | void;
  onCheckout: (appliedCoupon?: Coupon, discountPaise?: number) => void;
  appliedCoupon: Coupon | null;
  discountPaise: number;
  onApplyCoupon: (coupon: Coupon, discount: number) => void;
  onRemoveCoupon: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  appliedCoupon,
  discountPaise,
  onApplyCoupon,
  onRemoveCoupon,
}) => {
  if (!isOpen) return null;

  const [couponInput, setCouponInput] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponError, setCouponError] = useState('');

  // Cart financial math
  const subtotalPaise = cartItems.reduce(
    (sum, item) => sum + item.product.pricePaise * item.quantity,
    0
  );

  const freeDeliveryThresholdPaise = 99900; // ₹999
  const amountToFreeShipping = Math.max(0, freeDeliveryThresholdPaise - subtotalPaise);
  const isFreeShipping = subtotalPaise >= freeDeliveryThresholdPaise;
  const shippingPaise = cartItems.length === 0 || isFreeShipping ? 0 : 9900; // ₹99 delivery fee if below threshold
  const totalPaise = Math.max(0, subtotalPaise - discountPaise + shippingPaise);

  const handleApplyCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    setCouponLoading(true);
    setCouponError('');
    try {
      const res = await api.validateCoupon(couponInput.trim(), subtotalPaise);
      onApplyCoupon(res.coupon, res.discountPaise);
      setCouponInput('');
    } catch (err: any) {
      setCouponError(err.message || 'Invalid coupon code');
    } finally {
      setCouponLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A20B1A]" />
              <h2 className="text-base font-extrabold text-[#232429]">
                Your Shopping Cart ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-5 py-3 bg-[#FEEEEF] border-b border-red-100 text-xs">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-emerald-700 font-bold">
                <Truck className="w-4 h-4 shrink-0" />
                <span>You unlocked FREE Express Delivery on this order!</span>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-zinc-700">
                  <span className="font-medium">
                    Add <strong className="text-[#A20B1A]">{formatRupee(amountToFreeShipping)}</strong> more for Free Shipping
                  </span>
                  <span className="font-bold text-zinc-500">Threshold: ₹999</span>
                </div>
                <div className="w-full bg-zinc-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#A20B1A] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotalPaise / freeDeliveryThresholdPaise) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Item List / Empty State */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#E6E6E6]">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-zinc-500 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-800">Your cart is empty</h3>
                  <p className="text-xs text-zinc-500 mt-1">Explore our flagship deals and add items to your cart.</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-lg bg-zinc-100 border border-zinc-200 shrink-0"
                  />
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-[#232429] line-clamp-2 leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-red-600 transition-colors cursor-pointer p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-zinc-500 capitalize mt-0.5">
                        Brand: {item.product.brand}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E6E6E6] rounded-md bg-[#F5F5F7]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 text-zinc-600 hover:bg-zinc-200 transition-colors cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-zinc-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="p-1.5 text-zinc-600 hover:bg-zinc-200 transition-colors cursor-pointer disabled:opacity-40"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-extrabold text-[#232429] tabular-nums">
                        {formatRupee(item.product.pricePaise * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Module */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E6E6E6] bg-[#F5F5F7] space-y-4">
              {/* Coupon Redemption Box */}
              {appliedCoupon ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-emerald-800">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    <div>
                      <span className="font-bold">{appliedCoupon.code}</span> applied!
                      <p className="text-[10px] text-emerald-700">Saved {formatRupee(discountPaise)}</p>
                    </div>
                  </div>
                  <button
                    onClick={onRemoveCoupon}
                    className="text-xs font-semibold text-red-600 hover:underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => {
                        setCouponInput(e.target.value.toUpperCase());
                        setCouponError('');
                      }}
                      placeholder="Coupon Code (e.g. WELCOME10)"
                      className="flex-1 text-xs uppercase px-3 py-2 bg-white border border-[#E6E6E6] rounded-lg outline-none focus:border-[#A20B1A]"
                    />
                    <button
                      type="submit"
                      disabled={couponLoading || !couponInput.trim()}
                      className="px-4 py-2 bg-[#232429] hover:bg-black text-white text-xs font-bold rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {couponLoading ? 'Checking...' : 'Apply'}
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{couponError}</span>
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 pt-0.5">
                    <span>Try:</span>
                    <button 
                      type="button" 
                      onClick={() => setCouponInput('WELCOME10')} 
                      className="text-[#A20B1A] font-semibold underline cursor-pointer"
                    >
                      WELCOME10
                    </button>
                    <span>·</span>
                    <button 
                      type="button" 
                      onClick={() => setCouponInput('FLAT500')} 
                      className="text-[#A20B1A] font-semibold underline cursor-pointer"
                    >
                      FLAT500
                    </button>
                  </div>
                </form>
              )}

              {/* Price Calculations */}
              <div className="space-y-2 text-xs border-t border-[#E6E6E6] pt-3">
                <div className="flex justify-between text-[#777777]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-900 tabular-nums">{formatRupee(subtotalPaise)}</span>
                </div>

                {discountPaise > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Coupon Discount</span>
                    <span className="tabular-nums">- {formatRupee(discountPaise)}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#777777]">
                  <span>Shipping Fee</span>
                  <span className="font-semibold tabular-nums">
                    {shippingPaise === 0 ? (
                      <span className="text-emerald-700 font-bold">FREE</span>
                    ) : (
                      formatRupee(shippingPaise)
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-extrabold text-[#232429] border-t border-[#E6E6E6] pt-2">
                  <span>Grand Total</span>
                  <span className="tabular-nums text-[#A20B1A]">{formatRupee(totalPaise)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => {
                  onCheckout(appliedCoupon || undefined, discountPaise);
                }}
                className="w-full py-3.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>256-Bit Razorpay Encrypted Checkout</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

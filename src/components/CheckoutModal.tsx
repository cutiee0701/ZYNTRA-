import React, { useState } from 'react';
import { 
  X, ShieldCheck, Truck, CreditCard, Banknote, CheckCircle2, 
  ArrowRight, Lock, Check, AlertCircle 
} from 'lucide-react';
import { CartItem, Coupon, Order, Address } from '../types';
import { formatRupee, api } from '../lib/api';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  appliedCoupon: Coupon | null;
  discountPaise: number;
  onOrderSuccess: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  appliedCoupon,
  discountPaise,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  // Form states
  const [name, setName] = useState('Aarav Patel');
  const [email, setEmail] = useState('customer@zyntra.com');
  const [phone, setPhone] = useState('9823456789');
  const [street, setStreet] = useState('Flat 402, Green Glen Heights, Outer Ring Road, Bellandur');
  const [city, setCity] = useState('Bengaluru');
  const [state, setState] = useState('Karnataka');
  const [pincode, setPincode] = useState('560103');

  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cod' | 'upi'>('razorpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [razorpayStep, setRazorpayStep] = useState<'idle' | 'simulating' | 'done'>('idle');

  // Calculations
  const subtotalPaise = cartItems.reduce(
    (sum, item) => sum + item.product.pricePaise * item.quantity,
    0
  );
  const shippingPaise = subtotalPaise >= 99900 ? 0 : 9900;
  const totalPaise = Math.max(0, subtotalPaise - discountPaise + shippingPaise);

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !street.trim() || !pincode.trim()) {
      setErrorMessage('Please fill in all delivery details.');
      return;
    }

    setIsProcessing(true);
    setErrorMessage('');

    const shippingAddress: Address = {
      id: `addr-${Date.now()}`,
      name,
      street,
      city,
      state,
      pincode,
      phone,
    };

    const orderPayload = {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      shippingAddress,
      items: cartItems.map((ci) => ({
        productId: ci.productId,
        productName: ci.product.name,
        quantity: ci.quantity,
        pricePaise: ci.product.pricePaise,
      })),
      couponCode: appliedCoupon?.code,
      paymentMethod,
    };

    try {
      if (paymentMethod === 'razorpay' || paymentMethod === 'upi') {
        // Step 1: Initialize simulated Razorpay Gateway
        setRazorpayStep('simulating');
        const rzpData = await api.initRazorpayPayment(totalPaise);

        // Step 2: Simulate Razorpay Gateway Processing
        setTimeout(async () => {
          try {
            const fakePaymentId = `pay_${Math.random().toString(36).substring(2, 14)}`;
            const confirmedOrder = await api.verifyRazorpayPayment({
              razorpayOrderId: rzpData.orderId,
              razorpayPaymentId: fakePaymentId,
              orderDetails: orderPayload,
            });

            setIsProcessing(false);
            setRazorpayStep('done');
            onOrderSuccess(confirmedOrder);
          } catch (err: any) {
            setIsProcessing(false);
            setRazorpayStep('idle');
            setErrorMessage(err.message || 'Payment verification failed');
          }
        }, 1200);

      } else {
        // Cash on Delivery direct order
        const createdOrder = await api.createOrder(orderPayload);
        setIsProcessing(false);
        onOrderSuccess(createdOrder);
      }
    } catch (err: any) {
      setIsProcessing(false);
      setRazorpayStep('idle');
      setErrorMessage(err.message || 'Failed to place order. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#A20B1A]" />
            <div>
              <h2 className="text-base font-extrabold text-[#232429]">
                Secure Express Checkout
              </h2>
              <p className="text-[10.5px] text-zinc-500 flex items-center gap-1.5 font-medium mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Supabase Backend: <code className="text-zinc-700 font-mono bg-zinc-100 px-1 py-0.2 rounded text-[10px]">hlkfzjejkmqumnyrddcv</code></span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Razorpay Gateway Simulation Modal Overlay */}
        {razorpayStep === 'simulating' && (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center animate-pulse">
              <CreditCard className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900">Connecting to Razorpay Test Mode</h3>
              <p className="text-xs text-zinc-500 mt-1">
                Authenticating encrypted transaction of <strong className="text-zinc-900">{formatRupee(totalPaise)}</strong>...
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>Razorpay Sandbox 256-bit AES Protocol</span>
            </div>
          </div>
        )}

        {razorpayStep !== 'simulating' && (
          <form onSubmit={handleSubmitOrder} className="p-5 sm:p-6 space-y-6">
            {errorMessage && (
              <div className="p-3 bg-[#FEEEEF] border border-red-200 rounded-lg text-xs text-red-600 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. Customer & Shipping Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-2">
                <span>1. Shipping & Contact Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 mb-1">Email (for Order Tracking)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 mb-1">Postal Code (PIN)</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="e.g. 560103"
                    className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-zinc-600 mb-1">Street Address / House / Flat</label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-zinc-600 mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Payment Method Selection */}
            <div className="space-y-3 pt-2 border-t border-zinc-200">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                2. Select Payment Method
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Razorpay Online */}
                <label
                  className={`p-3.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'razorpay'
                      ? 'border-[#A20B1A] bg-[#FEEEEF]'
                      : 'border-[#E6E6E6] hover:border-zinc-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'razorpay'}
                    onChange={() => setPaymentMethod('razorpay')}
                    className="mt-0.5 accent-[#A20B1A]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#A20B1A]" />
                      <span className="text-xs font-bold text-zinc-900">Razorpay (Cards / UPI / NetBanking)</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      Instant verification · Zero extra fee
                    </p>
                  </div>
                </label>

                {/* Cash on Delivery */}
                <label
                  className={`p-3.5 rounded-xl border-2 flex items-start gap-3 cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-[#A20B1A] bg-[#FEEEEF]'
                      : 'border-[#E6E6E6] hover:border-zinc-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="mt-0.5 accent-[#A20B1A]"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-zinc-900">Cash on Delivery</span>
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-0.5">
                      Pay cash/UPI at doorstep upon delivery
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* 3. Order Summary & Price Breakdown */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs">
              <div className="flex justify-between text-zinc-600">
                <span>Items ({cartItems.reduce((a, b) => a + b.quantity, 0)})</span>
                <span className="font-semibold text-zinc-900 tabular-nums">{formatRupee(subtotalPaise)}</span>
              </div>
              {discountPaise > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Coupon Discount ({appliedCoupon?.code})</span>
                  <span className="tabular-nums">- {formatRupee(discountPaise)}</span>
                </div>
              )}
              <div className="flex justify-between text-zinc-600">
                <span>Shipping</span>
                <span className="font-semibold tabular-nums">
                  {shippingPaise === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : formatRupee(shippingPaise)}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-zinc-900 border-t border-zinc-200 pt-2">
                <span>Total Amount Due</span>
                <span className="text-[#A20B1A] tabular-nums">{formatRupee(totalPaise)}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-3.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span>
                {isProcessing
                  ? 'Processing Order...'
                  : paymentMethod === 'razorpay'
                  ? `Pay ${formatRupee(totalPaise)} with Razorpay`
                  : `Confirm Order with Cash on Delivery`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

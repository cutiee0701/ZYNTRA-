import React from 'react';
import { CheckCircle2, Truck, PackageCheck, Copy, ArrowRight, ShieldCheck, X } from 'lucide-react';
import { Order } from '../types';
import { formatRupee } from '../lib/api';

interface OrderSuccessModalProps {
  order: Order | null;
  onClose: () => void;
  onTrackOrder: (orderNumber: string) => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose,
  onTrackOrder,
}) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h2 className="text-2xl font-extrabold text-[#232429]">
          Order Confirmed!
        </h2>
        <p className="text-xs text-[#777777] mt-1">
          Thank you for shopping with Zyntra, <strong className="text-zinc-900">{order.customerName}</strong>! We've sent a detailed receipt to <span className="font-semibold">{order.customerEmail}</span>.
        </p>

        {/* Order Identifier Card */}
        <div className="mt-5 p-4 rounded-xl bg-[#F5F5F7] border border-[#E6E6E6] text-left space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-2.5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Order Reference</span>
              <p className="text-sm font-extrabold text-[#232429] font-mono">{order.orderNumber}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Total Paid</span>
              <p className="text-sm font-extrabold text-[#A20B1A] tabular-nums">{formatRupee(order.totalPaise)}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-600">
            <div>
              <span className="text-[10px] text-zinc-400 block uppercase">Payment Method</span>
              <span className="font-bold text-zinc-800 capitalize">
                {order.paymentMethod === 'razorpay' ? 'Razorpay (Paid Online)' : 'Cash on Delivery'}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-zinc-400 block uppercase">Estimated Delivery</span>
              <span className="font-bold text-emerald-700">
                {order.estimatedDelivery || 'Within 3 business days'}
              </span>
            </div>
          </div>

          {/* Delivery Address Snapshot */}
          <div className="pt-2 border-t border-zinc-200 text-xs text-zinc-600">
            <span className="text-[10px] text-zinc-400 block uppercase">Delivery Address</span>
            <p className="text-xs text-zinc-800 font-medium">
              {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
            </p>
          </div>

          {/* Supabase Backend Sync Status */}
          <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 font-medium text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Saved to Supabase Backend (orders table)</span>
            </span>
            <span className="font-mono text-[10px] text-zinc-500 bg-zinc-200/60 px-1.5 py-0.5 rounded">
              hlkfzjejkmqumnyrddcv
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onTrackOrder(order.orderNumber);
            }}
            className="flex-1 py-3 px-4 bg-zinc-900 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Truck className="w-4 h-4 text-[#A20B1A]" />
            <span>Track This Consignment</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

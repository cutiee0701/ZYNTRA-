import React, { useState } from 'react';
import { 
  X, Search, Truck, CheckCircle2, Clock, Package, 
  MapPin, AlertCircle, Calendar, ArrowRight 
} from 'lucide-react';
import { Order } from '../types';
import { api, formatRupee } from '../lib/api';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialOrderNumber?: string;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  isOpen,
  onClose,
  initialOrderNumber = '',
}) => {
  if (!isOpen) return null;

  const [searchCode, setSearchCode] = useState(initialOrderNumber || 'ZYN-2026-89421');
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchCode.trim()) return;

    setLoading(true);
    setError('');
    try {
      const data = await api.trackOrder(searchCode.trim());
      setOrder(data);
    } catch (err: any) {
      setOrder(null);
      setError(err.message || 'Order reference not found. Please verify the code.');
    } finally {
      setLoading(false);
    }
  };

  const getTimelineSteps = (status: Order['orderStatus']) => {
    const steps = [
      { name: 'Order Placed', desc: 'Received & logged in system' },
      { name: 'Confirmed', desc: 'Inventory allocated & verified' },
      { name: 'Processing', desc: 'Securely packaged at warehouse' },
      { name: 'Shipped', desc: 'In transit with courier partner' },
      { name: 'Delivered', desc: 'Package handed over to recipient' },
    ];

    let activeIndex = 0;
    if (status === 'Confirmed') activeIndex = 1;
    if (status === 'Processing') activeIndex = 2;
    if (status === 'Shipped') activeIndex = 3;
    if (status === 'Delivered') activeIndex = 4;

    return { steps, activeIndex };
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#A20B1A]" />
            <h2 className="text-base font-extrabold text-[#232429]">
              Track Your Zyntra Consignment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-6">
          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value.toUpperCase())}
                placeholder="Enter Order Number (e.g. ZYN-2026-89421)"
                className="w-full text-xs font-mono uppercase py-2.5 px-3 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer disabled:opacity-50"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </form>

          {/* Quick Demo suggestions */}
          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <span>Quick test orders:</span>
            <button
              type="button"
              onClick={() => {
                setSearchCode('ZYN-2026-89421');
                setTimeout(() => handleSearch(), 50);
              }}
              className="font-mono text-[#A20B1A] underline cursor-pointer"
            >
              ZYN-2026-89421 (Shipped)
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => {
                setSearchCode('ZYN-2026-77312');
                setTimeout(() => handleSearch(), 50);
              }}
              className="font-mono text-[#A20B1A] underline cursor-pointer"
            >
              ZYN-2026-77312 (Processing)
            </button>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-600 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Order Found Data */}
          {order && (
            <div className="space-y-6">
              {/* Order Meta Header */}
              <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E6E6E6] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-zinc-400">Order Number</span>
                    <h3 className="text-sm font-extrabold text-zinc-900 font-mono">{order.orderNumber}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-md font-bold bg-red-100 text-[#A20B1A]">
                      Status: {order.orderStatus}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-zinc-600">
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Carrier</span>
                    <span className="font-bold text-zinc-800">{order.courier || 'Blue Dart Express'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Tracking ID</span>
                    <span className="font-mono font-bold text-zinc-800">{order.trackingNumber || 'ZYN-EXP-88912'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase">Estimated Delivery</span>
                    <span className="font-bold text-emerald-700">{order.estimatedDelivery || 'In 2 days'}</span>
                  </div>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="py-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-4">
                  Consignment Milestone Journey
                </h4>

                {(() => {
                  const { steps, activeIndex } = getTimelineSteps(order.orderStatus);
                  return (
                    <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-zinc-200">
                      {steps.map((st, idx) => {
                        const isPastOrCurrent = idx <= activeIndex;
                        const isCurrent = idx === activeIndex;

                        return (
                          <div key={idx} className="relative flex items-start gap-4">
                            <div
                              className={`absolute -left-6 top-0 w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                                isPastOrCurrent
                                  ? 'bg-[#A20B1A] border-[#A20B1A] text-white shadow-xs'
                                  : 'bg-white border-zinc-300 text-transparent'
                              }`}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>

                            <div className="flex-1">
                              <p className={`text-xs font-bold ${isPastOrCurrent ? 'text-zinc-900' : 'text-zinc-400'}`}>
                                {st.name} {isCurrent && <span className="text-[#A20B1A] font-normal">(Current Stage)</span>}
                              </p>
                              <p className="text-[11px] text-zinc-500 mt-0.5">{st.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>

              {/* Items in Consignment */}
              <div className="pt-2 border-t border-zinc-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 mb-3">
                  Items in this Consignment ({order.items.length})
                </h4>
                <div className="divide-y divide-zinc-200 border border-zinc-200 rounded-xl overflow-hidden">
                  {order.items.map((it, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between gap-3 bg-white">
                      <div className="flex items-center gap-3">
                        {it.productImage && (
                          <img
                            src={it.productImage}
                            alt=""
                            className="w-10 h-10 object-cover rounded-md bg-zinc-100 border border-zinc-200 shrink-0"
                          />
                        )}
                        <div>
                          <p className="text-xs font-bold text-zinc-900">{it.productName}</p>
                          <p className="text-[11px] text-zinc-500">Qty: {it.quantity}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-zinc-900 tabular-nums">
                        {formatRupee(it.pricePaise * it.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 text-xs text-zinc-600">
                <span className="text-[10px] text-zinc-400 uppercase block font-bold">Delivery Destination</span>
                <p className="font-medium text-zinc-800 mt-0.5">
                  {order.shippingAddress.name} · {order.shippingAddress.phone}
                </p>
                <p className="text-zinc-500">
                  {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

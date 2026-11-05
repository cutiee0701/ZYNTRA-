import React, { useState, useEffect } from 'react';
import { 
  X, BarChart3, Package, ShoppingCart, Tag, Users, 
  AlertTriangle, Check, Plus, Edit, Trash2, ArrowUpRight, 
  DollarSign, RefreshCw, ShieldAlert, ShieldCheck, LogOut, Github
} from 'lucide-react';
import { Product, Order, Coupon, User } from '../types';
import { api, formatRupee } from '../lib/api';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRefreshProducts: () => void;
  currentUser?: User | null;
  onRequireAdminLogin?: () => void;
  onLogout?: () => void;
  onOpenGitHubSync?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  products,
  onRefreshProducts,
  currentUser,
  onRequireAdminLogin,
  onLogout,
  onOpenGitHubSync,
}) => {
  if (!isOpen) return null;

  // Enforce Administrator role protection in UI
  if (!currentUser || currentUser.role !== 'admin') {
    return (
      <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl border border-zinc-200 animate-in fade-in zoom-in-95 duration-150">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-base font-extrabold text-[#232429]">Administrator Access Required</h3>
            <p className="text-xs text-[#777777] leading-relaxed">
              {currentUser 
                ? `You are currently signed in as "${currentUser.name}" with a customer account. Only authenticated administrators have permission to access the store management dashboard.`
                : 'This protected dashboard requires administrative credentials. Please sign in with an authorized administrator account.'}
            </p>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            {onRequireAdminLogin && (
              <button
                onClick={() => {
                  onClose();
                  onRequireAdminLogin();
                }}
                className="w-full py-2.5 px-4 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Sign In as Administrator
              </button>
            )}
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-[#F5F5F7] hover:bg-zinc-200 text-[#232429] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Return to Store
            </button>
          </div>
        </div>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'inventory' | 'coupons' | 'subscribers'>('overview');
  const [stats, setStats] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // New product quick state
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('');
  const [newProdStock, setNewProdStock] = useState('20');
  const [newProdCategory, setNewProdCategory] = useState<'smartphones' | 'audio' | 'wearables' | 'accessories' | 'gaming' | 'smarthome'>('audio');
  const [newProdDesc, setNewProdDesc] = useState('');
  const [showAddProductModal, setShowAddProductModal] = useState(false);

  const fetchAdminData = async () => {
    setLoading(true);
    try {
      const [s, o, c, sub] = await Promise.all([
        api.getAdminStats(),
        api.getAdminOrders(),
        api.getAdminCoupons(),
        api.getAdminSubscribers(),
      ]);
      setStats(s);
      setOrders(o);
      setCoupons(c);
      setSubscribers(sub);
    } catch (err) {
      console.error('Failed to load admin telemetry', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleUpdateOrderStatus = async (orderId: string, newStatus: Order['orderStatus']) => {
    try {
      await api.updateOrderStatus(orderId, newStatus);
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, orderStatus: newStatus } : o))
      );
    } catch (err) {
      alert('Status update failed');
    }
  };

  const handleUpdateStock = async (productId: string, currentStock: number, delta: number) => {
    const updated = Math.max(0, currentStock + delta);
    try {
      await api.updateAdminProduct(productId, { stock: updated });
      onRefreshProducts();
    } catch (err) {
      alert('Stock update failed');
    }
  };

  const handleAddProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice) return;

    try {
      const pricePaise = Math.round(parseFloat(newProdPrice) * 100);
      await api.createAdminProduct({
        name: newProdName,
        brand: 'Zyntra Signature',
        category: newProdCategory,
        pricePaise,
        originalPricePaise: Math.round(pricePaise * 1.3),
        discountPercentage: 23,
        stock: parseInt(newProdStock, 10) || 20,
        sku: `ZYN-${Date.now().toString().slice(-6)}`,
        description: newProdDesc || 'High quality electronics tuned by Zyntra acoustics.',
        features: ['High durability engineering', 'Official 1-year brand warranty'],
        specs: { Category: newProdCategory, Origin: 'Zyntra Labs' },
        images: ['/src/assets/images/hero_audio_experience_1791888604955.jpg'],
        warranty: '1 Year Warranty',
      });

      setShowAddProductModal(false);
      setNewProdName('');
      setNewProdPrice('');
      setNewProdDesc('');
      onRefreshProducts();
      fetchAdminData();
    } catch (err) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-zinc-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 border-b border-[#E6E6E6] flex items-center justify-between bg-zinc-950 text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#A20B1A] flex items-center justify-center text-white">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-white flex items-center gap-2">
                <span>Zyntra Admin Control Room</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Supabase: hlkfzjejkmqumnyrddcv</span>
                </span>
              </h2>
              <p className="text-xs text-zinc-400">Store telemetry, live inventory & Supabase orders database</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {currentUser && (
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-bold text-white flex items-center gap-1 justify-end">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{currentUser.name || 'Yashika'}</span>
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">{currentUser.email}</span>
              </div>
            )}

            {onOpenGitHubSync && (
              <button
                onClick={onOpenGitHubSync}
                className="px-3 py-1.5 text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer border border-purple-500"
                title="Direct Push Website to GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Push to GitHub</span>
              </button>
            )}

            <button
              onClick={fetchAdminData}
              className="p-2 text-zinc-400 hover:text-white rounded-lg cursor-pointer transition-colors"
              title="Refresh Telemetry"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            {onLogout && (
              <button
                onClick={() => {
                  onClose();
                  onLogout();
                }}
                className="px-2.5 py-1.5 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white rounded-lg border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Sign Out from Admin"
              >
                <LogOut className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg cursor-pointer transition-colors"
              title="Close Admin Panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="flex border-b border-[#E6E6E6] bg-[#F5F5F7] px-6 gap-2 text-xs font-bold overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview Metrics', icon: <BarChart3 className="w-3.5 h-3.5" /> },
            { id: 'orders', label: `Orders (${orders.length})`, icon: <ShoppingCart className="w-3.5 h-3.5" /> },
            { id: 'inventory', label: `Inventory (${products.length})`, icon: <Package className="w-3.5 h-3.5" /> },
            { id: 'coupons', label: `Coupons (${coupons.length})`, icon: <Tag className="w-3.5 h-3.5" /> },
            { id: 'subscribers', label: `Subscribers (${subscribers.length})`, icon: <Users className="w-3.5 h-3.5" /> },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`py-3 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap cursor-pointer transition-colors ${
                activeTab === t.id
                  ? 'border-[#A20B1A] text-[#A20B1A] bg-white'
                  : 'border-transparent text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Total Revenue</span>
                  <p className="text-xl font-extrabold text-zinc-900 mt-1 tabular-nums">
                    {stats ? formatRupee(stats.totalRevenuePaise) : '₹0'}
                  </p>
                  <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">Paid Orders</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Total Orders</span>
                  <p className="text-xl font-extrabold text-zinc-900 mt-1 tabular-nums">
                    {stats ? stats.totalOrders : 0}
                  </p>
                  <span className="text-[11px] text-zinc-500 font-medium mt-1 block">Recorded to date</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Active Products</span>
                  <p className="text-xl font-extrabold text-zinc-900 mt-1 tabular-nums">
                    {products.length}
                  </p>
                  <span className="text-[11px] text-zinc-500 font-medium mt-1 block">Live in catalogue</span>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Low Stock Alerts</span>
                  <p className="text-xl font-extrabold text-amber-900 mt-1 tabular-nums">
                    {products.filter((p) => p.stock < 25).length}
                  </p>
                  <span className="text-[11px] text-amber-700 font-semibold mt-1 block">&lt; 25 units left</span>
                </div>
              </div>

              {/* Supabase Backend Integration Status Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/60 to-teal-50/40 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    S
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-900">Supabase Backend Connected</span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Live Database Target
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-600 font-mono mt-0.5">
                      Target URL: https://hlkfzjejkmqumnyrddcv.supabase.co · Table: public.orders
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-zinc-500 block">Schema migration file ready:</span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-white px-2 py-1 rounded border border-emerald-200 block mt-0.5">
                    /supabase_schema.sql
                  </span>
                </div>
              </div>

              {/* Recent Orders Overview */}
              <div className="border border-[#E6E6E6] rounded-xl overflow-hidden">
                <div className="p-3.5 bg-[#F5F5F7] border-b border-[#E6E6E6] flex items-center justify-between">
                  <h3 className="text-xs font-bold text-zinc-800 uppercase tracking-wider">Latest Orders</h3>
                  <button
                    onClick={() => setActiveTab('orders')}
                    className="text-xs font-semibold text-[#A20B1A] hover:underline cursor-pointer"
                  >
                    View All Orders →
                  </button>
                </div>
                <div className="divide-y divide-[#E6E6E6]">
                  {orders.slice(0, 3).map((ord) => (
                    <div key={ord.id} className="p-3.5 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-mono font-bold text-zinc-900">{ord.orderNumber}</span>
                        <p className="text-[11px] text-zinc-500">{ord.customerName} · {ord.paymentMethod.toUpperCase()}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-zinc-900 tabular-nums">{formatRupee(ord.totalPaise)}</span>
                        <p className="text-[11px] font-bold text-[#A20B1A]">{ord.orderStatus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ORDERS MANAGEMENT */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-zinc-900">Manage Customer Consignments</h3>
                <span className="text-xs text-zinc-500">Live order transitions</span>
              </div>

              <div className="border border-[#E6E6E6] rounded-xl overflow-hidden divide-y divide-[#E6E6E6]">
                {orders.map((ord) => (
                  <div key={ord.id} className="p-4 bg-white space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 pb-2">
                      <div>
                        <span className="font-mono font-bold text-xs text-zinc-900">{ord.orderNumber}</span>
                        <p className="text-xs text-zinc-600 font-medium">
                          Customer: {ord.customerName} ({ord.customerEmail})
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-zinc-900 tabular-nums">
                          {formatRupee(ord.totalPaise)}
                        </span>
                        {/* Status switcher */}
                        <select
                          value={ord.orderStatus}
                          onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value as any)}
                          className="text-xs font-bold py-1 px-2.5 rounded-lg border border-zinc-300 bg-zinc-50 text-zinc-800 outline-none focus:border-[#A20B1A]"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                      </div>
                    </div>

                    <div className="text-xs text-zinc-500">
                      <p className="line-clamp-1">
                        Destination: {ord.shippingAddress.street}, {ord.shippingAddress.city} - {ord.shippingAddress.pincode}
                      </p>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        Tracking ID: {ord.trackingNumber || 'Pending pickup'} ({ord.courier || 'Blue Dart'})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INVENTORY MANAGEMENT */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">Stock & Catalogue Management</h3>
                  <p className="text-xs text-zinc-500">Adjust stock quantities and add new SKUs</p>
                </div>
                <button
                  onClick={() => setShowAddProductModal(true)}
                  className="px-3 py-1.5 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Product</span>
                </button>
              </div>

              {/* Product inventory table */}
              <div className="border border-[#E6E6E6] rounded-xl overflow-hidden divide-y divide-[#E6E6E6]">
                {products.map((p) => (
                  <div key={p.id} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.images[0]}
                        alt=""
                        className="w-12 h-12 object-cover rounded-lg bg-zinc-100 border border-zinc-200 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-zinc-900">{p.name}</h4>
                        <p className="text-[11px] text-zinc-500">SKU: {p.sku} · {formatRupee(p.pricePaise)}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Stock controls */}
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-zinc-600">Stock:</span>
                        <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50">
                          <button
                            onClick={() => handleUpdateStock(p.id, p.stock, -5)}
                            className="px-2 py-1 text-zinc-600 hover:bg-zinc-200 cursor-pointer font-bold"
                          >
                            -5
                          </button>
                          <span className={`px-2.5 font-bold tabular-nums ${p.stock < 20 ? 'text-amber-700' : 'text-zinc-900'}`}>
                            {p.stock}
                          </span>
                          <button
                            onClick={() => handleUpdateStock(p.id, p.stock, 5)}
                            className="px-2 py-1 text-zinc-600 hover:bg-zinc-200 cursor-pointer font-bold"
                          >
                            +5
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: COUPONS */}
          {activeTab === 'coupons' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-900">Active Store Coupons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {coupons.map((c) => (
                  <div key={c.code} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-extrabold text-[#A20B1A]">{c.code}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600">{c.description}</p>
                    <p className="text-[11px] text-zinc-400">
                      Min Order: {formatRupee(c.minOrderValuePaise)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: SUBSCRIBERS */}
          {activeTab === 'subscribers' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-zinc-900">Newsletter Subscribers ({subscribers.length})</h3>
              <div className="border border-[#E6E6E6] rounded-xl overflow-hidden divide-y divide-[#E6E6E6]">
                {subscribers.map((sub, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between text-xs bg-white">
                    <span className="font-semibold text-zinc-800">{sub.email}</span>
                    <span className="text-[11px] text-zinc-400">{sub.subscribedAt?.split('T')[0] || 'Recently'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Add Product Modal Sub-view */}
        {showAddProductModal && (
          <div className="fixed inset-0 z-60 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
              <button
                onClick={() => setShowAddProductModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-base font-bold text-zinc-900 mb-4">Add New Catalogue Item</h3>

              <form onSubmit={handleAddProductSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-zinc-700 mb-1">Product Title</label>
                  <input
                    type="text"
                    required
                    value={newProdName}
                    onChange={(e) => setNewProdName(e.target.value)}
                    placeholder="e.g. Zyntra Pulse Studio Mic"
                    className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">Price (₹)</label>
                    <input
                      type="number"
                      required
                      value={newProdPrice}
                      onChange={(e) => setNewProdPrice(e.target.value)}
                      placeholder="e.g. 3499"
                      className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-zinc-700 mb-1">Stock Units</label>
                    <input
                      type="number"
                      value={newProdStock}
                      onChange={(e) => setNewProdStock(e.target.value)}
                      className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-zinc-700 mb-1">Category</label>
                  <select
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value as any)}
                    className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                  >
                    <option value="smartphones">Smartphones</option>
                    <option value="audio">Audio</option>
                    <option value="wearables">Wearables</option>
                    <option value="accessories">Accessories</option>
                    <option value="gaming">Gaming</option>
                    <option value="smarthome">Smart Home</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-zinc-700 mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    value={newProdDesc}
                    onChange={(e) => setNewProdDesc(e.target.value)}
                    placeholder="Summary of product..."
                    className="w-full p-2 border border-zinc-200 rounded-lg outline-none focus:border-[#A20B1A]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddProductModal(false)}
                    className="px-3 py-2 text-zinc-600 hover:bg-zinc-100 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#A20B1A] text-white font-bold rounded-lg cursor-pointer hover:bg-[#810916]"
                  >
                    Save SKU
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

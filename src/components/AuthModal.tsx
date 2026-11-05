import React, { useState, useEffect } from 'react';
import { 
  X, User as UserIcon, LogOut, Package, 
  ShieldCheck, ArrowRight, ExternalLink, Lock, Eye, EyeOff, ShieldAlert
} from 'lucide-react';
import { User, Order } from '../types';
import { api, formatRupee } from '../lib/api';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onLoginSuccess: (user: User) => void;
  onLogout: () => void;
  onTrackOrder: (orderNumber: string) => void;
  adminMode?: boolean;
  onOpenAdminDashboard?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout,
  onTrackOrder,
  adminMode = false,
  onOpenAdminDashboard,
}) => {
  if (!isOpen) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userOrders, setUserOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (currentUser) {
      api.getMyOrders().then(setUserOrders).catch(() => {});
    }
  }, [currentUser]);

  // Pre-fill email field when switching or if empty
  useEffect(() => {
    if (adminMode && !currentUser) {
      setEmail('');
      setPassword('');
      setError('');
    }
  }, [adminMode, currentUser]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide an email address.');
      return;
    }

    if (adminMode && !password) {
      setError('Password is required for Administrator authentication.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const user = await api.login(email, password);
      onLoginSuccess(user);
      
      if (adminMode && user.role === 'admin') {
        onClose();
        if (onOpenAdminDashboard) {
          onOpenAdminDashboard();
        }
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickCustomerLogin = async (targetEmail: string) => {
    setEmail(targetEmail);
    setLoading(true);
    setError('');
    try {
      const user = await api.login(targetEmail);
      onLoginSuccess(user);
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  // Determine if we should show the admin authentication form
  const showAdminLoginForm = adminMode && (!currentUser || currentUser.role !== 'admin');
  const showAdminAlreadyLoggedIn = adminMode && currentUser && currentUser.role === 'admin';
  const showCustomerProfile = !adminMode && currentUser;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#E6E6E6] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            {adminMode ? (
              <div className="w-8 h-8 rounded-lg bg-[#FEEEEF] flex items-center justify-center text-[#A20B1A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-800">
                <UserIcon className="w-5 h-5" />
              </div>
            )}
            <div>
              <h2 className="text-base font-extrabold text-[#232429]">
                {adminMode ? 'Zyntra Administrator Portal' : (currentUser ? 'My Zyntra Account' : 'Welcome to Zyntra')}
              </h2>
              <p className="text-[11px] text-zinc-500">
                {adminMode 
                  ? 'Role-based access & protected store management' 
                  : 'Track consignments, manage orders & customer profile'}
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

        {/* 1. Admin Mode: Already Logged In as Admin */}
        {showAdminAlreadyLoggedIn && (
          <div className="p-6 space-y-5">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Administrator Authenticated</span>
              </div>
              <p className="text-xs text-emerald-700">
                You are currently signed in as <strong>{currentUser.name}</strong> ({currentUser.email}) with full Administrator access rights.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              {onOpenAdminDashboard && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenAdminDashboard();
                  }}
                  className="w-full py-3 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Open Admin Control Room</span>
                </button>
              )}
              <button
                onClick={onLogout}
                className="w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out from Admin</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. Admin Mode: Login Form with Email & Password */}
        {showAdminLoginForm && (
          <div className="p-6 space-y-5">
            {/* Security Alert Header */}
            <div className="p-3.5 bg-[#FEEEEF] border border-[#A20B1A]/20 rounded-xl space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A20B1A]">
                <Lock className="w-4 h-4" />
                <span>Protected Management Console</span>
              </div>
              <p className="text-[11px] text-zinc-600 leading-relaxed">
                Only authorized store administrators with verified credentials can access this section. 
                All route operations and database queries are authenticated by the backend.
              </p>
              {currentUser && currentUser.role === 'customer' && (
                <div className="mt-2 pt-2 border-t border-[#A20B1A]/10 text-[11px] text-zinc-700">
                  <span className="font-semibold text-zinc-900">Current Session:</span> Signed in as customer <em>{currentUser.name}</em>. Enter administrator credentials below to elevate privileges.
                </div>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span className="font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Administrator Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter authorized administrator email"
                    className="w-full text-xs p-3 bg-zinc-50 border border-[#E6E6E6] rounded-xl outline-none focus:bg-white focus:border-[#A20B1A] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Administrator Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter administrator password"
                    className="w-full text-xs p-3 pr-10 bg-zinc-50 border border-[#E6E6E6] rounded-xl outline-none focus:bg-white focus:border-[#A20B1A] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 cursor-pointer p-1"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-[10px] text-zinc-400 mt-1">
                  Backend verification enforced with role-based session tokens.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{loading ? 'Verifying Admin Credentials...' : 'Authenticate & Open Admin Portal'}</span>
              </button>
            </form>
          </div>
        )}

        {/* 3. Customer Profile View (when logged in and not in admin mode) */}
        {showCustomerProfile && (
          <div className="p-6 space-y-6">
            <div className="p-4 rounded-xl bg-[#F5F5F7] border border-[#E6E6E6] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#A20B1A] text-white flex items-center justify-center font-bold text-lg">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900">{currentUser.name}</h3>
                  <p className="text-xs text-zinc-500">{currentUser.email}</p>
                  <span className={`inline-block mt-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                    currentUser.role === 'admin' ? 'bg-[#A20B1A] text-white' : 'bg-[#FEEEEF] text-[#A20B1A]'
                  }`}>
                    Role: {currentUser.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {currentUser.role === 'admin' && onOpenAdminDashboard && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAdminDashboard();
                    }}
                    className="px-3 py-1.5 text-xs font-bold text-white bg-[#A20B1A] hover:bg-[#810916] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Admin Panel</span>
                  </button>
                )}
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:text-red-600 hover:bg-white rounded-lg border border-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Order History */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-[#A20B1A]" />
                  <span>Recent Order History</span>
                </h4>
                <span className="text-xs text-zinc-500">{userOrders.length} orders logged</span>
              </div>

              {userOrders.length === 0 ? (
                <p className="text-xs text-zinc-500 py-4 text-center">No orders placed yet.</p>
              ) : (
                <div className="space-y-3">
                  {userOrders.map((ord) => (
                    <div
                      key={ord.id}
                      className="p-3.5 rounded-xl border border-[#E6E6E6] bg-white space-y-2 hover:border-zinc-300 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-zinc-900">{ord.orderNumber}</span>
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-zinc-100 text-zinc-800">
                          {ord.orderStatus}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-zinc-600">
                        <span>{ord.items.length} items · Total {formatRupee(ord.totalPaise)}</span>
                        <button
                          onClick={() => {
                            onClose();
                            onTrackOrder(ord.orderNumber);
                          }}
                          className="text-xs font-semibold text-[#A20B1A] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Track</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. Customer Login Form (when not logged in and not in admin mode) */}
        {!adminMode && !currentUser && (
          <div className="p-6 space-y-5">
            {/* Quick Demo Access for Shoppers */}
            <div className="p-3 bg-[#FEEEEF] border border-red-200/60 rounded-xl space-y-2">
              <span className="text-[10px] font-bold uppercase text-[#A20B1A] tracking-wide block">
                Instant One-Click Customer Demo
              </span>
              <button
                type="button"
                onClick={() => handleQuickCustomerLogin('customer@zyntra.com')}
                className="w-full py-2 px-3 bg-white hover:bg-zinc-50 border border-red-200 rounded-lg text-xs font-bold text-zinc-800 shadow-xs cursor-pointer text-left flex items-center justify-between"
              >
                <div>
                  <span className="block text-[#A20B1A]">Customer Demo Account</span>
                  <span className="text-[10px] text-zinc-500 font-normal">Aarav Patel (customer@zyntra.com)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A20B1A]" />
              </button>
            </div>

            {error && (
              <div className="p-2.5 bg-[#FEEEEF] text-red-600 text-xs rounded-lg font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. yourname@example.com"
                  className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs p-2.5 bg-zinc-50 border border-[#E6E6E6] rounded-lg outline-none focus:bg-white focus:border-[#A20B1A]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#A20B1A] hover:bg-[#810916] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Authenticating...' : 'Sign In as Shopper'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

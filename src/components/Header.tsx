import React, { useState } from 'react';
import { 
  ShoppingBag, Heart, User as UserIcon, Menu, X, 
  ChevronDown, Truck, Tag, HelpCircle, PhoneCall,
  SlidersHorizontal, Sparkles, Flame
} from 'lucide-react';
import { Product, Category, User, CartItem } from '../types';
import { formatRupee } from '../lib/api';
import { ZyntraLogo } from './ZyntraLogo';
import { SearchBar } from './SearchBar';
import { MiniCartDropdown } from './MiniCartDropdown';
import { CategoriesMegaMenu } from './CategoriesMegaMenu';

interface HeaderProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  cartCount: number;
  cartSubtotalPaise: number;
  wishlistCount: number;
  currentUser: User | null;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => Promise<void> | void;
  onRemoveCartItem: (itemId: string) => Promise<void> | void;
  onOpenCart: () => void;
  onOpenCheckout: () => void;
  onOpenWishlist: () => void;
  onOpenAuth: () => void;
  onOpenTracking: () => void;
  onOpenAdmin: () => void;
  onOpenBlog?: () => void;
  onOpenContact?: () => void;
  onSearch: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  products: Product[];
}

export const Header: React.FC<HeaderProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  cartCount,
  cartSubtotalPaise,
  wishlistCount,
  currentUser,
  cartItems,
  onUpdateQuantity,
  onRemoveCartItem,
  onOpenCart,
  onOpenCheckout,
  onOpenWishlist,
  onOpenAuth,
  onOpenTracking,
  onOpenAdmin,
  onOpenBlog,
  onOpenContact,
  onSearch,
  onSelectProduct,
  products,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E6E6E6] shadow-xs">
      {/* 1. Announcement Bar */}
      <div className="bg-[#ad3e4e] text-white text-xs py-2 px-4 border-b border-[#ad3e4e]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-bold">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-rose-100">
              <Truck className="w-3.5 h-3.5 text-white" />
              <span>FREE Express Shipping on all orders above ₹999</span>
            </span>
            <span className="hidden md:inline-block text-rose-300">|</span>
            <span className="flex items-center gap-1.5 text-rose-100">
              <Tag className="w-3.5 h-3.5 text-white" />
              <span>Use voucher <strong className="text-white font-semibold">WELCOME10</strong> for 10% instant off</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-rose-100">
            <button 
              onClick={onOpenTracking} 
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <Truck className="w-3.5 h-3.5 text-rose-200" />
              <span>Track Order</span>
            </button>
            <span className="text-rose-300">|</span>
            <button 
              onClick={() => {
                const el = document.getElementById('benefits');
                el?.scrollIntoView({ behavior: 'smooth' });
              }} 
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <HelpCircle className="w-3.5 h-3.5 text-rose-200" />
              <span>Help & FAQ</span>
            </button>
            <span className="text-rose-300">|</span>
            <span className="hidden lg:flex items-center gap-1 text-rose-100">
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>+91 98765 43210</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header (approx 74–78px height) */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5">
        <div className="flex items-center justify-between gap-4 md:gap-8 min-h-[52px]">
          
          {/* Left section: Zyntra Logo in bold primary red */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                onSelectCategory('all');
                onSearch('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center py-1 px-1.5 -ml-1.5 rounded-xl hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-[#A20B1A] transition-all text-left group cursor-pointer"
              aria-label="Zyntra Homepage"
            >
              <ZyntraLogo size="md" showTagline={true} />
            </button>
          </div>

          {/* Center section: Smart, Prominent Search Bar */}
          <div className="hidden md:flex flex-1 justify-center px-2">
            <SearchBar
              products={products}
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={onSelectCategory}
              onSearch={onSearch}
              onSelectProduct={onSelectProduct}
            />
          </div>

          {/* Right section: Account, Wishlist, Shopping Cart */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
            {/* Account Icon & Label */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-[#232429] hover:text-[#A20B1A] rounded-xl hover:bg-[#F5F5F7] transition-colors cursor-pointer"
              title="My Account"
              aria-label="Account profile"
            >
              <div className="w-8 h-8 rounded-full bg-[#F5F5F7] border border-[#E6E6E6] flex items-center justify-center text-[#232429]">
                <UserIcon className="w-4 h-4" />
              </div>
              <div className="hidden lg:block text-left">
                <span className="block text-[10px] text-[#777777] leading-none">
                  {currentUser ? 'Welcome' : 'Hello, Sign In'}
                </span>
                <span className="block text-xs font-bold text-[#232429] truncate max-w-[100px]">
                  {currentUser ? currentUser.name : 'Account'}
                </span>
              </div>
            </button>

            {/* Wishlist Icon with Live Count */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-[#232429] hover:text-[#A20B1A] hover:bg-[#F5F5F7] rounded-xl transition-colors cursor-pointer"
              title="Saved Wishlist"
              aria-label={`Wishlist with ${wishlistCount} items`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#A20B1A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Module with Live Item Count & Subtotal */}
            <div className="relative">
              <button
                onClick={() => {
                  // On mobile open drawer directly; on desktop toggle mini-cart
                  if (window.innerWidth < 768) {
                    onOpenCart();
                  } else {
                    setMiniCartOpen(!miniCartOpen);
                  }
                }}
                className="flex items-center gap-2.5 px-3 py-1.5 bg-white hover:bg-[#F5F5F7] border border-[#E6E6E6] rounded-xl transition-all cursor-pointer group shadow-2xs"
                title="Shopping Bag"
                aria-label={`Cart with ${cartCount} items`}
              >
                <div className="relative">
                  <ShoppingBag className="w-5 h-5 text-[#232429] group-hover:text-[#A20B1A] transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2 bg-[#A20B1A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                      {cartCount}
                    </span>
                  )}
                </div>
                <div className="hidden sm:block text-left">
                  <span className="block text-[10px] text-[#777777] leading-none uppercase tracking-wide">
                    Cart
                  </span>
                  <span className="block text-xs font-bold text-[#232429] tabular-nums">
                    {formatRupee(cartSubtotalPaise)}
                  </span>
                </div>
              </button>

              {/* Desktop Mini-Cart Dropdown */}
              <MiniCartDropdown
                isOpen={miniCartOpen}
                onClose={() => setMiniCartOpen(false)}
                cartItems={cartItems}
                onUpdateQuantity={onUpdateQuantity}
                onRemoveItem={onRemoveCartItem}
                onOpenFullCart={() => {
                  setMiniCartOpen(false);
                  onOpenCart();
                }}
                onProceedToCheckout={() => {
                  setMiniCartOpen(false);
                  onOpenCheckout();
                }}
              />
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#232429] hover:bg-[#F5F5F7] rounded-xl cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar View */}
        <div className="mt-3 md:hidden">
          <SearchBar
            products={products}
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
            onSearch={onSearch}
            onSelectProduct={onSelectProduct}
          />
        </div>
      </div>

      {/* 3. Horizontal Navigation Bar with Exact Order */}
      <div className="relative border-t border-[#E6E6E6] bg-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center gap-7 lg:gap-8 overflow-x-auto no-scrollbar pt-2.5 pb-0.5">
            {/* 1. Home */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onSelectCategory('all');
                onSearch('');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 ${
                activeCategory === 'all'
                  ? 'text-[#232429] font-extrabold border-[#A20B1A]'
                  : 'text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]'
              }`}
            >
              Home
            </button>

            {/* 2. Shop */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onSelectCategory('all');
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]"
            >
              Shop
            </button>

            {/* 3. Categories with Mega Menu toggle */}
            <button
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              className={`text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 flex items-center gap-1 ${
                megaMenuOpen
                  ? 'text-[#A20B1A] font-extrabold border-[#A20B1A]'
                  : 'text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]'
              }`}
            >
              <span>Categories</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#A20B1A]' : ''}`} />
            </button>

            {/* 4. Deals (with small red SALE badge) */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onSelectCategory('deals');
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 flex items-center gap-1.5 ${
                activeCategory === 'deals'
                  ? 'text-[#232429] font-extrabold border-[#A20B1A]'
                  : 'text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]'
              }`}
            >
              <span>Deals</span>
              <span className="px-1.5 py-0.2 bg-[#A20B1A] text-white text-[9px] font-black rounded-sm tracking-tight animate-pulse">
                SALE
              </span>
            </button>

            {/* 5. New Arrivals */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onSelectCategory('new');
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 ${
                activeCategory === 'new'
                  ? 'text-[#232429] font-extrabold border-[#A20B1A]'
                  : 'text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]'
              }`}
            >
              New Arrivals
            </button>

            {/* 6. Best Sellers */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                onSelectCategory('bestsellers');
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 flex items-center gap-1 ${
                activeCategory === 'bestsellers'
                  ? 'text-[#232429] font-extrabold border-[#A20B1A]'
                  : 'text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]'
              }`}
            >
              <span>Best Sellers</span>
              <Flame className="w-3 h-3 text-[#A20B1A]" />
            </button>

            {/* Contact Us */}
            <button
              onClick={() => {
                setMegaMenuOpen(false);
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  const el = document.getElementById('footer-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors pb-2 border-b-2 text-[#232429] font-semibold border-transparent hover:text-[#A20B1A]"
            >
              Contact Us
            </button>
          </nav>

          <div className="flex items-center gap-3 text-xs text-[#777777]">
            <button
              onClick={onOpenTracking}
              className="hover:text-[#A20B1A] font-medium transition-colors flex items-center gap-1.5 cursor-pointer pb-2"
            >
              <Truck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Track Delivery</span>
            </button>
          </div>
        </div>

        {/* Categories Mega Menu Dropdown */}
        <CategoriesMegaMenu
          isOpen={megaMenuOpen}
          onClose={() => setMegaMenuOpen(false)}
          onSelectCategory={(slug) => {
            onSelectCategory(slug);
            setMegaMenuOpen(false);
          }}
          onSelectProduct={(prod) => {
            onSelectProduct(prod);
            setMegaMenuOpen(false);
          }}
          featuredProduct={products.find(p => p.id === 'prod-1')}
        />
      </div>

      {/* 4. Responsive Mobile Slide-out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E6E6] bg-white px-4 py-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <p className="text-[11px] font-bold text-[#777777] uppercase tracking-wider">
            Navigation Menu
          </p>

          <div className="flex flex-col gap-1 text-xs">
            {/* 1. Home */}
            <button
              onClick={() => {
                onSelectCategory('all');
                onSearch('');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold transition-colors flex items-center justify-between cursor-pointer ${
                activeCategory === 'all' ? 'bg-[#FEEEEF] text-[#A20B1A]' : 'bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100'
              }`}
            >
              <span>Home</span>
              {activeCategory === 'all' && <span className="w-2 h-2 rounded-full bg-[#A20B1A]"></span>}
            </button>

            {/* 2. Shop */}
            <button
              onClick={() => {
                onSelectCategory('all');
                setMobileMenuOpen(false);
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <span>Shop</span>
            </button>

            {/* 3. Categories (collapsible section) */}
            <div className="rounded-xl bg-[#F5F5F7] overflow-hidden">
              <button
                onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                className="w-full min-h-[44px] px-3.5 py-2.5 text-left font-bold text-[#232429] flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Categories</span>
                <ChevronDown className={`w-4 h-4 text-[#777777] transition-transform duration-200 ${mobileCategoriesOpen ? 'rotate-180 text-[#A20B1A]' : ''}`} />
              </button>

              {mobileCategoriesOpen && (
                <div className="p-2.5 pt-0 space-y-2 border-t border-[#E6E6E6]/60">
                  {/* Visual featured cards for Smartphones & Flag Bags */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <button
                      onClick={() => {
                        onSelectCategory('smartphones');
                        setMobileMenuOpen(false);
                        const el = document.getElementById('catalogue');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group relative rounded-xl overflow-hidden border border-[#E6E6E6] bg-zinc-950 text-left flex flex-col justify-end h-28 cursor-pointer shadow-xs"
                    >
                      <img
                        src="/images/smartphones_category.jpg"
                        alt="Smartphones"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/src/assets/images/smartphones_category_1792148922139.jpg';
                        }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="relative p-2 text-white">
                        <span className="text-[9px] font-black uppercase text-[#A20B1A] bg-white px-1.5 py-0.5 rounded-xs">
                          Smartphones
                        </span>
                        <p className="text-xs font-bold mt-1 text-white leading-tight">
                          5G Flagships
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onSelectCategory('headphones');
                        setMobileMenuOpen(false);
                        const el = document.getElementById('catalogue');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group relative rounded-xl overflow-hidden border border-[#E6E6E6] bg-zinc-900 text-left flex flex-col justify-end h-28 cursor-pointer shadow-xs"
                    >
                      <img
                        src="/images/headphones/uploads_nov/headphone_sennheiser_momentum4_black_case.jpg"
                        alt="Headphones & Sound"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/headphones/apex_noir_black.jpg';
                        }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="relative p-2 text-white">
                        <span className="text-[9px] font-black uppercase text-[#A20B1A] bg-white px-1.5 py-0.5 rounded-xs">
                          Headphones
                        </span>
                        <p className="text-xs font-bold mt-1 text-white leading-tight">
                          Studio ANC
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Rest of categories */}
                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    {categories.filter(c => c.slug !== 'smartphones' && c.slug !== 'headphones').map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          onSelectCategory(cat.slug);
                          setMobileMenuOpen(false);
                          const el = document.getElementById('catalogue');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`min-h-[36px] px-2.5 py-1.5 text-[11px] rounded-lg border text-left transition-colors cursor-pointer truncate ${
                          activeCategory === cat.slug
                            ? 'border-[#A20B1A] bg-white text-[#A20B1A] font-bold shadow-2xs'
                            : 'border-[#E6E6E6] bg-white text-[#232429] hover:border-[#A20B1A]/40'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. Deals */}
            <button
              onClick={() => {
                onSelectCategory('deals');
                setMobileMenuOpen(false);
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold flex items-center justify-between transition-colors cursor-pointer ${
                activeCategory === 'deals' ? 'bg-[#FEEEEF] text-[#A20B1A]' : 'bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100'
              }`}
            >
              <span>Deals</span>
              <span className="px-1.5 py-0.5 bg-[#A20B1A] text-white text-[9px] rounded-xs font-black tracking-wide">
                SALE
              </span>
            </button>

            {/* 5. New Arrivals */}
            <button
              onClick={() => {
                onSelectCategory('new');
                setMobileMenuOpen(false);
                const el = document.getElementById('catalogue');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold flex items-center justify-between transition-colors cursor-pointer ${
                activeCategory === 'new' ? 'bg-[#FEEEEF] text-[#A20B1A]' : 'bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100'
              }`}
            >
              <span>New Arrivals</span>
              {activeCategory === 'new' && <span className="w-2 h-2 rounded-full bg-[#A20B1A]"></span>}
            </button>

            {/* 6. Best Sellers */}
            <button
              onClick={() => {
                onSelectCategory('bestsellers');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold flex items-center justify-between transition-colors cursor-pointer ${
                activeCategory === 'bestsellers' ? 'bg-[#FEEEEF] text-[#A20B1A]' : 'bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100'
              }`}
            >
              <span>Best Sellers</span>
              <Flame className="w-3.5 h-3.5 text-[#A20B1A]" />
            </button>

            {/* 7. About Us */}
            <button
              onClick={() => {
                onSelectCategory('about');
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold flex items-center justify-between transition-colors cursor-pointer ${
                activeCategory === 'about' ? 'bg-[#FEEEEF] text-[#A20B1A]' : 'bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100'
              }`}
            >
              <span>About Us</span>
              {activeCategory === 'about' && <span className="w-2 h-2 rounded-full bg-[#A20B1A]"></span>}
            </button>

            {/* 8. Contact Us */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="min-h-[44px] px-3.5 py-2.5 text-left rounded-xl font-bold bg-[#F5F5F7] text-[#232429] hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Action Links */}
          <div className="pt-3 border-t border-[#E6E6E6] flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenTracking();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2 text-xs font-semibold text-[#232429] hover:bg-[#F5F5F7] rounded-xl text-left"
            >
              <Truck className="w-4 h-4 text-[#A20B1A]" />
              <span>Track Consignment</span>
            </button>
            <button
              onClick={() => {
                onOpenAuth();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2 text-xs font-semibold text-[#232429] hover:bg-[#F5F5F7] rounded-xl text-left"
            >
              <UserIcon className="w-4 h-4 text-[#A20B1A]" />
              <span>{currentUser ? `Signed in as ${currentUser.name}` : 'Login / Register'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

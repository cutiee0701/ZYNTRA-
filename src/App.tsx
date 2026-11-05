import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryCircles } from './components/CategoryCircles';
import { ProductCard } from './components/ProductCard';
import { PromoBanner } from './components/PromoBanner';
import { StoreBenefits } from './components/StoreBenefits';
import { ReviewsSection } from './components/ReviewsSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { AuthModal } from './components/AuthModal';
import { WishlistModal } from './components/WishlistModal';
import { BestSellersPage } from './components/BestSellersPage';
import { AboutUsPage } from './components/AboutUsPage';
import { BlogModal } from './components/BlogModal';
import { ContactModal } from './components/ContactModal';
import { PolicyModal } from './components/PolicyModal';
import { FAQSection } from './components/FAQSection';
import { AdminDashboard } from './components/AdminDashboard';
import { Toast, ToastMessage } from './components/Toast';
import { 
  Product, Category, CartItem, Order, User, Coupon, Review 
} from './types';
import { api, getStoredUser, setStoredUser, formatRupee } from './lib/api';
import { Filter, SlidersHorizontal, Tag, Sparkles, ChevronDown, Smartphone, Watch, Zap, ShieldCheck, Cable, Tablet, Headphones } from 'lucide-react';

export default function App() {
  // State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(getStoredUser());

  // Filter & Search
  const [activeCategory, setActiveCategory] = useState<string>('smartphones');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('price-high');
  const [priceFilter, setPriceFilter] = useState<number | null>(null);

  // Smartphone Specific Advanced Filters & Pagination
  const [phoneBrandFilter, setPhoneBrandFilter] = useState<string>('all');
  const [phonePriceTier, setPhonePriceTier] = useState<string>('all');
  const [phoneRamFilter, setPhoneRamFilter] = useState<string>('all');
  const [phoneStorageFilter, setPhoneStorageFilter] = useState<string>('all');
  const [phoneInStockOnly, setPhoneInStockOnly] = useState<boolean>(false);
  const [visiblePhoneCount, setVisiblePhoneCount] = useState<number>(24);

  // Smartwatch Specific Brand Filter
  const [watchBrandFilter, setWatchBrandFilter] = useState<string>('all');

  // Cart & Coupon
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [discountPaise, setDiscountPaise] = useState<number>(0);

  // Modals
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOrder, setSuccessOrder] = useState<Order | null>(null);
  const [trackingOpen, setTrackingOpen] = useState(false);
  const [trackingOrderNumber, setTrackingOrderNumber] = useState<string>('');
  const [authOpen, setAuthOpen] = useState(false);
  const [authAdminMode, setAuthAdminMode] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (type: 'success' | 'error' | 'info', text: string) => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Initial load
  const loadInitialData = async () => {
    try {
      const [prodsData, catsData, revsData, cartData, wishData] = await Promise.all([
        api.getProducts(),
        api.getCategories(),
        api.getReviews(),
        api.getCart(),
        api.getWishlist(),
      ]);
      setProducts(prodsData.products);
      setCategories(catsData);
      setReviews(revsData);
      setCartItems(cartData);
      setWishlistIds(wishData.productIds);
    } catch (err) {
      console.error('Error loading initial store data', err);
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  // Filtered Products
  const filteredProducts = products.filter((p) => {
    // Category check
    if (activeCategory === 'deals') {
      if (p.discountPercentage < 30) return false;
    } else if (activeCategory === 'new') {
      if (!p.isNewArrival) return false;
    } else if (activeCategory === 'smartwatches') {
      if (p.category.toLowerCase() !== 'smartwatches' && p.category.toLowerCase() !== 'wearables') return false;
      if (watchBrandFilter !== 'all') {
        const brandLower = p.brand.toLowerCase();
        const target = watchBrandFilter.toLowerCase();
        if (!brandLower.includes(target) && !p.name.toLowerCase().includes(target)) return false;
      }
    } else if (activeCategory !== 'all' && p.category.toLowerCase() !== activeCategory.toLowerCase()) {
      return false;
    }

    // Advanced Smartphone Specific Filters
    if (activeCategory === 'smartphones') {
      // 1. Brand Filter
      if (phoneBrandFilter !== 'all') {
        const brandLower = p.brand.toLowerCase();
        const target = phoneBrandFilter.toLowerCase();
        if (target === 'apple' && !brandLower.includes('apple')) return false;
        if (target === 'samsung' && !brandLower.includes('samsung')) return false;
        if (target === 'vivo' && !brandLower.includes('vivo')) return false;
        if (target === 'oppo' && !brandLower.includes('oppo')) return false;
        if (target === 'redmi' && !brandLower.includes('redmi')) return false;
        if (target === 'poco' && !brandLower.includes('poco')) return false;
        if (target === 'iqoo' && !brandLower.includes('iqoo')) return false;
        if (target === 'motorola' && !brandLower.includes('motorola')) return false;
        if (target === 'lava' && !brandLower.includes('lava')) return false;
        if (target === 'itel' && !brandLower.includes('itel')) return false;
        if (target === 'realme narzo') {
          if (!brandLower.includes('narzo') && !p.name.toLowerCase().includes('narzo')) return false;
        } else if (target === 'realme') {
          if (!brandLower.includes('realme') || brandLower.includes('narzo') || p.name.toLowerCase().includes('narzo')) return false;
        } else if (target === 'oneplus') {
          if (!brandLower.includes('oneplus')) return false;
        }
      }

      // 2. Price Tier Filter
      if (phonePriceTier === 'ultra-flagship') {
        if (p.pricePaise < 10000000) return false; // ₹1,00,000+
      } else if (phonePriceTier === 'flagship') {
        if (p.pricePaise < 5000000 || p.pricePaise >= 10000000) return false; // ₹50,000 - ₹1,00,000
      } else if (phonePriceTier === 'upper-mid') {
        if (p.pricePaise < 2500000 || p.pricePaise >= 5000000) return false; // ₹25,000 - ₹50,000
      } else if (phonePriceTier === 'mid') {
        if (p.pricePaise < 1500000 || p.pricePaise >= 2500000) return false; // ₹15,000 - ₹25,000
      } else if (phonePriceTier === 'budget') {
        if (p.pricePaise >= 1500000) return false; // Under ₹15,000
      }

      // 3. RAM Filter
      if (phoneRamFilter !== 'all') {
        const ramStr = `${p.specs['RAM & Storage'] || ''} ${p.specs['RAM'] || ''} ${p.description || ''}`;
        if (!ramStr.toLowerCase().includes(phoneRamFilter.toLowerCase())) return false;
      }

      // 4. Storage Filter
      if (phoneStorageFilter !== 'all') {
        const storageStr = `${p.specs['RAM & Storage'] || ''} ${p.specs['Storage'] || ''} ${p.description || ''} ${p.name}`;
        if (!storageStr.toLowerCase().includes(phoneStorageFilter.toLowerCase())) return false;
      }

      // 5. In-Stock Filter
      if (phoneInStockOnly && p.stock <= 0) {
        return false;
      }
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Price filter
    if (priceFilter !== null && p.pricePaise > priceFilter) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-high') return b.pricePaise - a.pricePaise;
    if (sortBy === 'price-low') return a.pricePaise - b.pricePaise;
    if (sortBy === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
    if (sortBy === 'popular') return b.reviewCount - a.reviewCount;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'discount') return b.discountPercentage - a.discountPercentage;
    if (activeCategory === 'smartphones') return b.pricePaise - a.pricePaise;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });


  // Cart operations
  const handleAddToCart = async (productId: string, quantity = 1) => {
    try {
      const updated = await api.addToCart(productId, quantity);
      setCartItems(updated);
      const prod = products.find((p) => p.id === productId);
      addToast('success', `Added ${prod ? prod.name : 'item'} to cart`);
    } catch (err: any) {
      addToast('error', err.message || 'Could not add to cart');
    }
  };

  const handleUpdateQuantity = async (itemId: string, quantity: number) => {
    try {
      const updated = await api.updateCartItem(itemId, quantity);
      setCartItems(updated);
    } catch (err: any) {
      addToast('error', err.message || 'Could not update quantity');
    }
  };

  const handleRemoveCartItem = async (itemId: string) => {
    try {
      const updated = await api.removeCartItem(itemId);
      setCartItems(updated);
      addToast('info', 'Item removed from cart');
    } catch (err: any) {
      addToast('error', 'Failed to remove item');
    }
  };

  // Wishlist operations
  const handleToggleWishlist = async (productId: string) => {
    try {
      const res = await api.toggleWishlist(productId);
      if (res.isInWishlist) {
        setWishlistIds((prev) => [...prev, productId]);
        addToast('success', 'Added item to Wishlist');
      } else {
        setWishlistIds((prev) => prev.filter((id) => id !== productId));
        addToast('info', 'Removed item from Wishlist');
      }
    } catch (err: any) {
      addToast('error', 'Failed to update wishlist');
    }
  };

  // Buy Now immediate checkout
  const handleBuyNow = async (product: Product, quantity: number) => {
    await handleAddToCart(product.id, quantity);
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  // Order Placed Success
  const handleOrderSuccess = (order: Order) => {
    setCartItems([]);
    setAppliedCoupon(null);
    setDiscountPaise(0);
    setCheckoutOpen(false);
    setSuccessOrder(order);
    addToast('success', `Order ${order.orderNumber} successfully confirmed!`);
  };

  // Cart calculations for Header
  const cartSubtotalPaise = cartItems.reduce(
    (sum, item) => sum + item.product.pricePaise * item.quantity,
    0
  );
  const cartTotalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header with Announcement Bar, Search, Categories */}
      <Header
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
          const el = document.getElementById('catalogue');
          if (cat !== 'all') {
            el?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        cartCount={cartTotalCount}
        cartSubtotalPaise={cartSubtotalPaise}
        wishlistCount={wishlistIds.length}
        currentUser={currentUser}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveCartItem={handleRemoveCartItem}
        onOpenCart={() => setCartOpen(true)}
        onOpenCheckout={() => setCheckoutOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenAuth={() => {
          setAuthAdminMode(false);
          setAuthOpen(true);
        }}
        onOpenTracking={() => {
          setTrackingOrderNumber('');
          setTrackingOpen(true);
        }}
        onOpenAdmin={() => {
          if (currentUser?.role === 'admin') {
            setAdminOpen(true);
          } else {
            setAuthAdminMode(true);
            setAuthOpen(true);
          }
        }}
        onOpenContact={() => setContactOpen(true)}
        onSearch={(q) => {
          setSearchQuery(q);
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectProduct={(p) => setSelectedProduct(p)}
        products={products}
      />

      {activeCategory === 'bestsellers' ? (
        <BestSellersPage
          products={products}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onBackToHome={() => {
            setActiveCategory('all');
            setSearchQuery('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : activeCategory === 'about' ? (
        <AboutUsPage
          onBackToHome={() => {
            setActiveCategory('all');
            setSearchQuery('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onShopNow={(category) => {
            if (category) setActiveCategory(category);
            else setActiveCategory('all');
            setSearchQuery('');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              const el = document.getElementById('catalogue');
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          onOpenContact={() => setContactOpen(true)}
        />
      ) : (
        <>
          {/* 2. Hero Promotional Carousel Banner */}
          <HeroBanner
        onShopNow={(category) => {
          if (category) setActiveCategory(category);
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Circular Category Icons */}
      <CategoryCircles
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSearchQuery('');
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />


      {/* 4. Product Catalogue Section with Filter & Sort Controls */}
      <main id="catalogue" className="flex-1 max-w-7xl mx-auto px-4 py-10 w-full">
        {/* Section Title & Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E6E6E6]">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#A20B1A] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {activeCategory === 'all'
                  ? 'Official Store Catalogue'
                  : activeCategory === 'deals'
                  ? 'Hot Discount Deals'
                  : activeCategory === 'new'
                  ? 'Recently Added Hardware'
                  : activeCategory === 'smartphones'
                  ? 'Smart Phones & 5G Flagship Collection'
                  : activeCategory === 'earbuds'
                  ? 'True Wireless Earbuds Collection'
                  : activeCategory === 'smartwatches'
                  ? 'Titanium & AMOLED Smartwatches Collection'
                  : activeCategory === 'tablets'
                  ? 'Ultra-Slim AMOLED & Productivity Tablets'
                  : activeCategory === 'neckband'
                  ? 'Wireless Bluetooth Sport Neckbands'
                  : activeCategory === 'headphones'
                  ? 'Wireless Studio & ANC Headphones'
                  : activeCategory === 'leads'
                  ? 'Fast Charging Cables & Data Leads'
                  : `${activeCategory.toUpperCase()} COLLECTION`}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#232429]">
                {searchQuery 
                  ? `Search results for "${searchQuery}"` 
                  : activeCategory === 'smartphones'
                  ? 'Smart Phones'
                  : activeCategory === 'earbuds'
                  ? 'Earbuds'
                  : activeCategory === 'smartwatches'
                  ? 'Smart Watches'
                  : activeCategory === 'tablets'
                  ? 'Tablets'
                  : activeCategory === 'neckband'
                  ? 'Neckbands'
                  : activeCategory === 'headphones'
                  ? 'Headphones'
                  : activeCategory === 'leads'
                  ? 'Leads'
                  : activeCategory === 'deals'
                  ? 'Hot Deals'
                  : activeCategory === 'new'
                  ? 'New Arrivals'
                  : 'Featured Products'}
              </h2>
              {activeCategory !== 'all' && (
                <button
                  onClick={() => setActiveCategory('all')}
                  className="px-2.5 py-0.5 text-[11px] font-bold text-[#A20B1A] bg-[#FEEEEF] hover:bg-red-100 rounded-full border border-red-200 transition-colors cursor-pointer"
                  title="Clear category filter"
                >
                  ✕ View All
                </button>
              )}
            </div>
            <p className="text-xs text-[#777777] mt-1">
              {activeCategory === 'smartphones'
                ? `Showing ${Math.min(visiblePhoneCount, filteredProducts.length)} of ${filteredProducts.length} smartphones · Sorted: ${
                    sortBy === 'price-high' 
                      ? 'Price: High to Low (Flagships First)' 
                      : sortBy === 'price-low'
                      ? 'Price: Low to High'
                      : sortBy === 'newest'
                      ? 'Newest Releases'
                      : sortBy === 'popular'
                      ? 'Most Popular'
                      : 'Featured'
                  }`
                : activeCategory === 'smartwatches'
                ? `Showing ${filteredProducts.length} smartwatches · Noise, Fire-Boltt, boAt & Zyntra with deals up to 94% off`
                : activeCategory === 'headphones'
                ? `Showing ${filteredProducts.length} studio & ANC headphones · Sennheiser, Apple AirPods Max, Edifier, Pioneer DJ & boAt`
                : activeCategory === 'neckband'
                ? `Showing ${filteredProducts.length} wireless neckbands · boAt, Zebronics, UBON, Landmark, Promate & Zyntra`
                : `Showing ${filteredProducts.length} verified authentic products`}
            </p>
          </div>

          {/* Quick Controls: Price Filter & Sort */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Quick Price Filters */}
            <div className="flex items-center gap-1 bg-[#F5F5F7] p-1 rounded-lg border border-[#E6E6E6] text-xs">
              <button
                onClick={() => setPriceFilter(null)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                  priceFilter === null ? 'bg-white font-bold text-zinc-900 shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                All Prices
              </button>
              <button
                onClick={() => setPriceFilter(300000)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                  priceFilter === 300000 ? 'bg-white font-bold text-[#A20B1A] shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Under ₹3,000
              </button>
              <button
                onClick={() => setPriceFilter(500000)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                  priceFilter === 500000 ? 'bg-white font-bold text-[#A20B1A] shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Under ₹5,000
              </button>
              <button
                onClick={() => setPriceFilter(2500000)}
                className={`px-2.5 py-1 rounded-md transition-colors font-medium cursor-pointer ${
                  priceFilter === 2500000 ? 'bg-white font-bold text-[#A20B1A] shadow-xs' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                Under ₹25,000
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-semibold py-2 pl-3 pr-8 bg-white border border-[#E6E6E6] rounded-lg text-zinc-700 outline-none focus:border-[#A20B1A] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div id="featured-products" className="pt-6">
          {/* Smartphones Spotlight Showcase Header & Brand/Specs Filter Bar */}
          {activeCategory === 'smartphones' && (
            <div className="mb-8 space-y-4 animate-in fade-in duration-300">
              {/* 1. Spotlight Showcase Hero Card */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-white via-[#FFF8F8] to-[#FFF1F2] rounded-2xl border border-red-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#A20B1A] text-white text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Premium Smartphones Collection</span>
                    </span>
                    <span className="text-xs font-bold text-[#810916] bg-red-100/70 px-2 py-0.5 rounded-md border border-red-200/60">
                      Arranged: High to Low Price
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#232429]">
                    Latest Flagship & Performance Smartphones
                  </h3>
                  <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                    Featuring latest releases across Apple iPhone, Samsung Galaxy, Vivo, OPPO, Redmi, POCO, realme, realme Narzo & OnePlus with authentic Indian market pricing, manufacturer warranty, and 0% No-Cost EMI options.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-red-100 shadow-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sealed Indian Stock</span>
                  </span>
                  <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-red-100 shadow-xs flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#A20B1A]" />
                    <span>0% No Cost EMI</span>
                  </span>
                </div>
              </div>

              {/* 2. Brand Filter Pills Strip */}
              <div className="bg-white p-3.5 rounded-xl border border-[#E6E6E6] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-[#A20B1A]" />
                    <span>Filter by Brand:</span>
                  </span>
                  {phoneBrandFilter !== 'all' && (
                    <button
                      onClick={() => setPhoneBrandFilter('all')}
                      className="text-[11px] font-bold text-[#A20B1A] hover:underline cursor-pointer"
                    >
                      Clear Brand
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {[
                    { id: 'all', label: 'All Brands' },
                    { id: 'Apple', label: 'Apple iPhone' },
                    { id: 'Samsung', label: 'Samsung Galaxy' },
                    { id: 'OnePlus', label: 'OnePlus' },
                    { id: 'iQOO', label: 'iQOO' },
                    { id: 'Redmi', label: 'Redmi' },
                    { id: 'POCO', label: 'POCO' },
                    { id: 'realme', label: 'realme' },
                    { id: 'realme Narzo', label: 'realme Narzo' },
                    { id: 'Vivo', label: 'Vivo Zeiss' },
                    { id: 'OPPO', label: 'OPPO' },
                    { id: 'Motorola', label: 'Motorola' },
                    { id: 'LAVA', label: 'LAVA' },
                    { id: 'itel', label: 'itel' }
                  ].map((brand) => {
                    const isSelected = phoneBrandFilter === brand.id;
                    const allPhones = products.filter((p) => p.category === 'smartphones');
                    const count = brand.id === 'all' 
                      ? allPhones.length 
                      : allPhones.filter((p) => {
                          const b = p.brand.toLowerCase();
                          const target = brand.id.toLowerCase();
                          if (target === 'apple') return b.includes('apple');
                          if (target === 'samsung') return b.includes('samsung');
                          if (target === 'vivo') return b.includes('vivo');
                          if (target === 'oppo') return b.includes('oppo');
                          if (target === 'redmi') return b.includes('redmi');
                          if (target === 'poco') return b.includes('poco');
                          if (target === 'iqoo') return b.includes('iqoo');
                          if (target === 'motorola') return b.includes('motorola');
                          if (target === 'lava') return b.includes('lava');
                          if (target === 'itel') return b.includes('itel');
                          if (target === 'realme narzo') return b.includes('narzo') || p.name.toLowerCase().includes('narzo');
                          if (target === 'realme') return b.includes('realme') && !b.includes('narzo') && !p.name.toLowerCase().includes('narzo');
                          if (target === 'oneplus') return b.includes('oneplus');
                          return b.includes(target);
                        }).length;

                    return (
                      <button
                        key={brand.id}
                        onClick={() => {
                          setPhoneBrandFilter(brand.id);
                          setVisiblePhoneCount(12);
                        }}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#A20B1A] to-[#810916] text-white shadow-sm'
                            : 'bg-[#F5F5F7] text-zinc-700 hover:bg-zinc-200/80 border border-[#E6E6E6]'
                        }`}
                      >
                        <span>{brand.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white text-zinc-500 border border-zinc-200'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Detailed Filters Strip: Price Range, RAM, Storage & Stock */}
              <div className="bg-[#FAFBFD] p-3.5 rounded-xl border border-[#E6E6E6] flex flex-wrap items-center justify-between gap-3 text-xs">
                {/* Left: Price Tiers */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-bold text-zinc-500 text-[11px] mr-1">Price Tier:</span>
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: 'ultra-flagship', label: '> ₹1,00,000' },
                    { id: 'flagship', label: '₹50K - ₹1L' },
                    { id: 'upper-mid', label: '₹25K - ₹50K' },
                    { id: 'mid', label: '₹15K - ₹25K' },
                    { id: 'budget', label: '< ₹15,000' }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => {
                        setPhonePriceTier(tier.id);
                        setVisiblePhoneCount(12);
                      }}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors cursor-pointer ${
                        phonePriceTier === tier.id
                          ? 'bg-[#A20B1A] text-white font-bold shadow-2xs'
                          : 'bg-white text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>

                {/* Right: RAM & Storage Quick Pickers */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* RAM Picker */}
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-zinc-500 text-[11px]">RAM:</span>
                    <select
                      value={phoneRamFilter}
                      onChange={(e) => {
                        setPhoneRamFilter(e.target.value);
                        setVisiblePhoneCount(12);
                      }}
                      className="bg-white border border-zinc-300 rounded-md py-1 px-2 text-[11px] font-semibold text-zinc-700 outline-none cursor-pointer focus:border-[#A20B1A]"
                    >
                      <option value="all">All RAM</option>
                      <option value="6GB">6GB RAM</option>
                      <option value="8GB">8GB RAM</option>
                      <option value="12GB">12GB RAM</option>
                      <option value="16GB">16GB RAM</option>
                    </select>
                  </div>

                  {/* Storage Picker */}
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-zinc-500 text-[11px]">Storage:</span>
                    <select
                      value={phoneStorageFilter}
                      onChange={(e) => {
                        setPhoneStorageFilter(e.target.value);
                        setVisiblePhoneCount(12);
                      }}
                      className="bg-white border border-zinc-300 rounded-md py-1 px-2 text-[11px] font-semibold text-zinc-700 outline-none cursor-pointer focus:border-[#A20B1A]"
                    >
                      <option value="all">All Storage</option>
                      <option value="128GB">128GB</option>
                      <option value="256GB">256GB</option>
                      <option value="512GB">512GB</option>
                    </select>
                  </div>

                  {/* In-Stock Toggle */}
                  <label className="flex items-center gap-1.5 cursor-pointer select-none bg-white px-2.5 py-1 rounded-md border border-zinc-300">
                    <input
                      type="checkbox"
                      checked={phoneInStockOnly}
                      onChange={(e) => {
                        setPhoneInStockOnly(e.target.checked);
                        setVisiblePhoneCount(12);
                      }}
                      className="rounded accent-[#A20B1A] cursor-pointer"
                    />
                    <span className="text-[11px] font-semibold text-zinc-700">In Stock Only</span>
                  </label>

                  {/* Reset All Filters button */}
                  {(phoneBrandFilter !== 'all' || phonePriceTier !== 'all' || phoneRamFilter !== 'all' || phoneStorageFilter !== 'all' || phoneInStockOnly) && (
                    <button
                      onClick={() => {
                        setPhoneBrandFilter('all');
                        setPhonePriceTier('all');
                        setPhoneRamFilter('all');
                        setPhoneStorageFilter('all');
                        setPhoneInStockOnly(false);
                        setVisiblePhoneCount(12);
                      }}
                      className="px-2.5 py-1 text-[11px] font-bold text-[#A20B1A] bg-red-50 hover:bg-red-100 rounded-md border border-red-200 transition-colors cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Smartwatches Spotlight Showcase Header */}
          {activeCategory === 'smartwatches' && (
            <div className="mb-8 space-y-4 animate-in fade-in duration-300">
              {/* Spotlight Info & Guarantee Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-white via-[#F8FAFC] to-[#F1F5F9] rounded-2xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="bg-zinc-900 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                      <Watch className="w-3 h-3 text-amber-400" />
                      <span>Smart Wearables & Health Telemetry</span>
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">
                      Noise · Fire-Boltt · boAt · Zyntra
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#232429]">
                    Bluetooth Calling, AMOLED & Sports Telemetry Watches
                  </h3>
                  <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                    Choose from turn-by-turn navigation smartwatches, premium Milanese mesh and metallic chain bands, 1.85" 550-nit outdoor displays, and 100+ sports modes with IP68 water resistance.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>7-14 Day Battery</span>
                  </span>
                  <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-slate-200 shadow-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>1-Year Warranty</span>
                  </span>
                </div>
              </div>

              {/* 3. Brand Filter Pills Strip */}
              <div className="bg-white p-3.5 rounded-xl border border-[#E6E6E6] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-[#A20B1A]" />
                    <span>Filter by Smartwatch Brand:</span>
                  </span>
                  {watchBrandFilter !== 'all' && (
                    <button
                      onClick={() => setWatchBrandFilter('all')}
                      className="text-[11px] font-bold text-[#A20B1A] hover:underline cursor-pointer"
                    >
                      Clear Brand
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {[
                    { id: 'all', label: 'All Smartwatches' },
                    { id: 'Noise', label: 'Noise' },
                    { id: 'Fire-Boltt', label: 'Fire-Boltt' },
                    { id: 'boAt', label: 'boAt' },
                    { id: 'Zyntra', label: 'Zyntra Titanium' },
                  ].map((brand) => {
                    const isSelected = watchBrandFilter === brand.id;
                    const allWatches = products.filter((p) => p.category === 'smartwatches' || p.category === 'wearables');
                    const count = brand.id === 'all'
                      ? allWatches.length
                      : allWatches.filter((p) => {
                          const b = p.brand.toLowerCase();
                          const target = brand.id.toLowerCase();
                          return b.includes(target) || p.name.toLowerCase().includes(target);
                        }).length;

                    return (
                      <button
                        key={brand.id}
                        onClick={() => setWatchBrandFilter(brand.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#A20B1A] to-[#810916] text-white shadow-sm'
                            : 'bg-[#F5F5F7] text-zinc-700 hover:bg-zinc-200/80 border border-[#E6E6E6]'
                        }`}
                      >
                        <span>{brand.label}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-zinc-200 text-zinc-600'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Tablets Spotlight Showcase Header */}
          {activeCategory === 'tablets' && (
            <div className="mb-6 p-5 sm:p-6 bg-gradient-to-r from-white via-[#F0FDF4] to-[#ECFDF5] rounded-2xl border border-emerald-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-300">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <Tablet className="w-3 h-3 text-emerald-200" />
                    <span>Android 15 Workstation & Calling Tablets</span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-900/80">
                    Keyboard Bundles · 5G WiFi 6 · Widevine L1 Netflix HD · 4G VoLTE Calling
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#232429]">
                  Smart WorkStation & Entertainment Tablets
                </h3>
                <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                  Featuring 2-in-1 Bluetooth keyboard and optical mouse workstations, high-fidelity Dolby Atmos tablets, dual SIM 4G VoLTE voice calling, and shockproof rugged kid-safe cases with built-in kickstands.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-emerald-100 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>14 Models · From ₹5,999</span>
                </span>
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-emerald-100 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>1-Year Replacement</span>
                </span>
              </div>
            </div>
          )}

          {/* Neckbands Spotlight Showcase Header */}
          {activeCategory === 'neckband' && (
            <div className="mb-6 p-5 sm:p-6 bg-gradient-to-r from-white via-[#F0FDF4] to-[#ECFEFF] rounded-2xl border border-cyan-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-300">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-[#0e7490] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <Headphones className="w-3 h-3 text-cyan-200" />
                    <span>Cyberpunk & Sport Neckbands</span>
                  </span>
                  <span className="text-xs font-semibold text-cyan-900/80">
                    boAt · Zebronics · UBON · Landmark · Promate · Zyntra
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#232429]">
                  Ultra-Flexible Sport Neckbands & Transparent Acoustics
                </h3>
                <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                  Featuring transparent cybernetic casings with visible circuitry, boAt Signature Bass, Zebronics Made in India ENC clear calling, UBON magnetic clasp buds, and Landmark braided tangle-proof cables with up to 60H battery.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-cyan-200 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                  <span>13 Models · From ₹799</span>
                </span>
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-cyan-200 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>IPX5 Sweat-Proof</span>
                </span>
              </div>
            </div>
          )}

          {/* Headphones Spotlight Showcase Header */}
          {activeCategory === 'headphones' && (
            <div className="mb-6 p-5 sm:p-6 bg-gradient-to-r from-white via-[#F5F3FF] to-[#EDE9FE] rounded-2xl border border-violet-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-300">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-[#6D28D9] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <Headphones className="w-3 h-3 text-violet-200" />
                    <span>Studio Over-Ear & Audiophile ANC</span>
                  </span>
                  <span className="text-xs font-semibold text-violet-900/80">
                    Sennheiser · Apple AirPods Max · Edifier · Pioneer DJ · boAt · Zyntra
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#232429]">
                  Studio Reference, Hybrid ANC & Pro Monitoring Headphones
                </h3>
                <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                  Featuring Sennheiser Momentum 4 with 60-hour playback and travel case, Apple AirPods Max with computational Spatial Audio, Edifier Hi-Res LDAC wireless, Pioneer DJ swivel monitoring, and planar magnetic open-back reference cans.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-violet-200 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-600" />
                  <span>15 Models · From ₹1,799</span>
                </span>
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-violet-200 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Up to 2-Yr Warranty</span>
                </span>
              </div>
            </div>
          )}

          {/* Leads Spotlight Showcase Header */}
          {activeCategory === 'leads' && (
            <div className="mb-6 p-5 sm:p-6 bg-gradient-to-r from-white via-[#FFF5F5] to-[#FEECEE] rounded-2xl border border-red-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in duration-300">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="bg-[#A20B1A] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                    <Cable className="w-3 h-3" />
                    <span>Hi-Fi Audio Leads & Type-C DAC</span>
                  </span>
                  <span className="text-xs font-semibold text-zinc-500">
                    Type-C DAC · 3.5mm Gold-Plated · Braided Durability
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#232429]">
                  High-Fidelity Audio Leads & In-Ear Studio Earphones
                </h3>
                <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
                  Featuring lossless 24-bit digital DAC chips, tangle-resistant woven braided cables, gold-plated contacts, high-sensitivity in-line microphones, and acoustic noise-isolating comfort earbuds.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-red-100 shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A20B1A]" />
                  <span>24-bit HD DAC</span>
                </span>
                <span className="px-3 py-1 bg-white text-zinc-700 text-xs font-bold rounded-lg border border-red-100 shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Doorstep Warranty</span>
                </span>
              </div>
            </div>
          )}

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-[#F5F5F7] rounded-2xl border border-[#E6E6E6] p-8 space-y-3">
              <h3 className="text-base font-bold text-zinc-800">No matching products found</h3>
              <p className="text-xs text-zinc-500 max-w-md mx-auto">
                {activeCategory === 'smartphones'
                  ? 'No smartphones match your selected filters. Try clearing brand, price tier, or RAM filters to view the full flagship lineup.'
                  : 'Try loosening your search terms or clearing price filters to view our full collection.'}
              </p>
              <button
                onClick={() => {
                  if (activeCategory === 'smartphones') {
                    setPhoneBrandFilter('all');
                    setPhonePriceTier('all');
                    setPhoneRamFilter('all');
                    setPhoneStorageFilter('all');
                    setPhoneInStockOnly(false);
                    setVisiblePhoneCount(12);
                  }
                  setActiveCategory('all');
                  setSearchQuery('');
                  setPriceFilter(null);
                }}
                className="px-4 py-2 bg-[#A20B1A] text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-[#810916]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-2">
                {(activeCategory === 'smartphones' ? filteredProducts.slice(0, visiblePhoneCount) : filteredProducts).map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    isInWishlist={wishlistIds.includes(prod.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onSelectProduct={(p) => setSelectedProduct(p)}
                  />
                ))}
              </div>

              {/* Load More Pagination for Large Smartphone Collection */}
              {activeCategory === 'smartphones' && filteredProducts.length > visiblePhoneCount && (
                <div className="mt-10 py-6 border-t border-zinc-200 flex flex-col items-center justify-center space-y-3">
                  <p className="text-xs font-semibold text-zinc-500">
                    Showing {Math.min(visiblePhoneCount, filteredProducts.length)} of {filteredProducts.length} smartphones
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setVisiblePhoneCount((prev) => prev + 12)}
                      className="px-6 py-2.5 bg-gradient-to-r from-[#A20B1A] to-[#810916] hover:brightness-110 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                    >
                      <span>Load More Smartphones (+12)</span>
                    </button>
                    <button
                      onClick={() => setVisiblePhoneCount(filteredProducts.length)}
                      className="px-5 py-2.5 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-700 text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                    >
                      Show All ({filteredProducts.length})
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      {/* 5. Mid-Page Promotional Banner */}
      <PromoBanner
        onShopDeals={() => {
          setActiveCategory('deals');
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. Store Trust Highlights (Shipping, Replacement, Security, Support) */}
      <StoreBenefits />

      {/* 7. Genuine Customer Testimonials & Reviews */}
      <ReviewsSection
        reviews={reviews}
        onReviewAdded={(newRev) => {
          setReviews((prev) => [newRev, ...prev]);
          addToast('success', 'Your review was published successfully!');
        }}
      />

      {/* 8. Newsletter Subscription */}
      <Newsletter />
        </>
      )}

      {/* 9. Interactive FAQ Section */}
      <FAQSection
        onOpenTracking={() => {
          setTrackingOrderNumber('');
          setTrackingOpen(true);
        }}
        onOpenContact={() => setContactOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenPolicy={() => setPolicyOpen(true)}
        onExploreProducts={() => {
          setActiveCategory('all');
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 10. Dark Luxury Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTracking={() => {
          setTrackingOrderNumber('');
          setTrackingOpen(true);
        }}
        onOpenAdmin={() => {
          if (currentUser?.role === 'admin') {
            setAdminOpen(true);
          } else {
            setAuthAdminMode(true);
            setAuthOpen(true);
          }
        }}
        onOpenPolicy={() => setPolicyOpen(true)}
      />

      {/* ================= MODALS & DRAWERS ================= */}

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isInWishlist={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Saved Wishlist Modal */}
      <WishlistModal
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistProducts={products.filter((p) => wishlistIds.includes(p.id))}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={(coupon, discount) => {
          setCartOpen(false);
          setAppliedCoupon(coupon || null);
          setDiscountPaise(discount || 0);
          setCheckoutOpen(true);
        }}
        appliedCoupon={appliedCoupon}
        discountPaise={discountPaise}
        onApplyCoupon={(c, d) => {
          setAppliedCoupon(c);
          setDiscountPaise(d);
          addToast('success', `Coupon ${c.code} applied! Saved ${formatRupee(d)}`);
        }}
        onRemoveCoupon={() => {
          setAppliedCoupon(null);
          setDiscountPaise(0);
          addToast('info', 'Coupon removed');
        }}
      />

      {/* Multi-step Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={cartItems}
        appliedCoupon={appliedCoupon}
        discountPaise={discountPaise}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Confirmed Modal */}
      <OrderSuccessModal
        order={successOrder}
        onClose={() => setSuccessOrder(null)}
        onTrackOrder={(orderNum) => {
          setTrackingOrderNumber(orderNum);
          setTrackingOpen(true);
        }}
      />

      {/* Order Tracking Modal */}
      <OrderTrackingModal
        isOpen={trackingOpen}
        onClose={() => setTrackingOpen(false)}
        initialOrderNumber={trackingOrderNumber}
      />

      {/* User Account / Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => {
          setAuthOpen(false);
          setAuthAdminMode(false);
        }}
        currentUser={currentUser}
        adminMode={authAdminMode}
        onOpenAdminDashboard={() => setAdminOpen(true)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          setStoredUser(user);
          setAuthOpen(false);
          addToast('success', `Welcome back, ${user.name}!`);
          if (authAdminMode) {
            if (user.role === 'admin') {
              setAdminOpen(true);
            } else {
              addToast('error', 'The signed-in account is a customer account. Administrator role required for dashboard access.');
            }
            setAuthAdminMode(false);
          }
        }}
        onLogout={async () => {
          await api.logout();
          setCurrentUser(null);
          setStoredUser(null);
          setAuthOpen(false);
          setAuthAdminMode(false);
          setAdminOpen(false);
          addToast('info', 'Signed out successfully');
        }}
        onTrackOrder={(orderNum) => {
          setTrackingOrderNumber(orderNum);
          setTrackingOpen(true);
        }}
      />

      {/* Tech Blog & Buying Guides Modal */}
      <BlogModal
        isOpen={blogOpen}
        onClose={() => setBlogOpen(false)}
        onExploreProduct={() => {
          setActiveCategory('all');
          const el = document.getElementById('catalogue');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Customer Support & Contact Us Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        onSubmitInquiry={(msg) => {
          addToast('success', 'Your inquiry was received. A support agent will contact you shortly.');
        }}
      />

      {/* Returns & Refund Policy Modal */}
      <PolicyModal
        isOpen={policyOpen}
        onClose={() => setPolicyOpen(false)}
        onOpenContact={() => {
          setPolicyOpen(false);
          setContactOpen(true);
        }}
      />

      {/* Admin Dashboard */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        products={products}
        onRefreshProducts={loadInitialData}
        currentUser={currentUser}
        onRequireAdminLogin={() => {
          setAuthAdminMode(true);
          setAuthOpen(true);
        }}
        onLogout={async () => {
          await api.logout();
          setCurrentUser(null);
          setStoredUser(null);
          setAdminOpen(false);
          setAuthAdminMode(false);
          addToast('info', 'Administrator signed out successfully.');
        }}
      />

      {/* Floating Toast Notification Stack */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

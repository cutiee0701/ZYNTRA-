import { INITIAL_PRODUCTS, INITIAL_CATEGORIES, INITIAL_COUPONS, INITIAL_REVIEWS, INITIAL_USERS, INITIAL_ORDERS, INITIAL_SUBSCRIBERS } from '../src/data/mockDatabase';
import { Product, Category, Coupon, Review, Order, User, NewsletterSubscriber, CartItem } from '../src/types';

// In-memory persistent state for the Express server session
class DatabaseStore {
  products: Product[] = [...INITIAL_PRODUCTS];
  categories: Category[] = [...INITIAL_CATEGORIES];
  coupons: Coupon[] = [...INITIAL_COUPONS];
  reviews: Review[] = [...INITIAL_REVIEWS];
  users: User[] = [...INITIAL_USERS];
  orders: Order[] = [...INITIAL_ORDERS];
  subscribers: NewsletterSubscriber[] = [...INITIAL_SUBSCRIBERS];
  carts: Map<string, CartItem[]> = new Map(); // sessionId / userId -> CartItem[]
  wishlists: Map<string, string[]> = new Map(); // sessionId / userId -> productIds[]

  constructor() {
    // Seed initial cart for demo customer
    this.carts.set('user-customer', [
      {
        id: 'cart-init-1',
        productId: 'prod-2',
        product: this.products.find(p => p.id === 'prod-2')!,
        quantity: 1
      }
    ]);
    this.wishlists.set('user-customer', ['prod-1', 'prod-3']);
  }

  // Product Queries
  getProducts(filters: {
    category?: string;
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
    page?: number;
    limit?: number;
  }) {
    let result = [...this.products];

    if (filters.category && filters.category !== 'all') {
      result = result.filter(p => p.category.toLowerCase() === filters.category!.toLowerCase());
    }

    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
      );
    }

    if (filters.minPrice !== undefined) {
      result = result.filter(p => p.pricePaise >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      result = result.filter(p => p.pricePaise <= filters.maxPrice!);
    }

    // Sorting
    switch (filters.sort) {
      case 'price-asc':
        result.sort((a, b) => a.pricePaise - b.pricePaise);
        break;
      case 'price-desc':
        result.sort((a, b) => b.pricePaise - a.pricePaise);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
      default:
        // Featured and new arrivals first
        result.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
    }

    const page = filters.page || 1;
    const limit = filters.limit || 300;
    const total = result.length;
    const startIndex = (page - 1) * limit;
    const paginatedProducts = result.slice(startIndex, startIndex + limit);

    return {
      products: paginatedProducts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  }

  getProductByIdOrSlug(idOrSlug: string): Product | undefined {
    return this.products.find(p => p.id === idOrSlug || p.slug === idOrSlug);
  }

  // Stock deduction
  deductStock(productId: string, quantity: number): boolean {
    const product = this.products.find(p => p.id === productId);
    if (!product || product.stock < quantity) {
      return false;
    }
    product.stock -= quantity;
    return true;
  }

  // Cart operations
  getCart(sessionKey: string): CartItem[] {
    return this.carts.get(sessionKey) || [];
  }

  setCart(sessionKey: string, items: CartItem[]) {
    this.carts.set(sessionKey, items);
  }

  // Wishlist operations
  getWishlist(sessionKey: string): string[] {
    return this.wishlists.get(sessionKey) || [];
  }

  toggleWishlist(sessionKey: string, productId: string): { isInWishlist: boolean; count: number } {
    const current = this.getWishlist(sessionKey);
    let updated: string[];
    let isInWishlist: boolean;

    if (current.includes(productId)) {
      updated = current.filter(id => id !== productId);
      isInWishlist = false;
    } else {
      updated = [...current, productId];
      isInWishlist = true;
    }

    this.wishlists.set(sessionKey, updated);
    return { isInWishlist, count: updated.length };
  }

  // Coupon
  validateCoupon(code: string, subtotalPaise: number): { valid: boolean; coupon?: Coupon; error?: string; discountPaise: number } {
    const cleanCode = code.trim().toUpperCase();
    const coupon = this.coupons.find(c => c.code.toUpperCase() === cleanCode);

    if (!coupon) {
      return { valid: false, error: 'Invalid coupon code. Try WELCOME10 or FLAT500', discountPaise: 0 };
    }

    if (!coupon.isActive) {
      return { valid: false, error: 'This coupon code has expired.', discountPaise: 0 };
    }

    if (subtotalPaise < coupon.minOrderValuePaise) {
      const minRequiredRupees = coupon.minOrderValuePaise / 100;
      return {
        valid: false,
        error: `Minimum cart value of ₹${minRequiredRupees.toLocaleString('en-IN')} required for this coupon.`,
        discountPaise: 0
      };
    }

    let discountPaise = 0;
    if (coupon.discountType === 'percentage') {
      discountPaise = Math.round((subtotalPaise * coupon.discountValue) / 100);
      if (coupon.maxDiscountPaise && discountPaise > coupon.maxDiscountPaise) {
        discountPaise = coupon.maxDiscountPaise;
      }
    } else {
      discountPaise = coupon.discountValue;
    }

    return { valid: true, coupon, discountPaise };
  }

  // Orders
  createOrder(orderData: Omit<Order, 'id' | 'orderNumber' | 'createdAt'>): Order {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const orderNumber = `ZYN-2026-${randomDigits}`;
    const newOrder: Order = {
      ...orderData,
      id: `ord-${Date.now()}`,
      orderNumber,
      createdAt: new Date().toISOString(),
      trackingNumber: `ZYN-EXP-${randomDigits}`,
      courier: 'Blue Dart Surface Express',
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };

    // Deduct inventory
    for (const item of newOrder.items) {
      this.deductStock(item.productId, item.quantity);
    }

    this.orders.unshift(newOrder);
    return newOrder;
  }

  updateOrderStatus(orderId: string, status: Order['orderStatus']): Order | null {
    const order = this.orders.find(o => o.id === orderId || o.orderNumber === orderId);
    if (!order) return null;
    order.orderStatus = status;
    return order;
  }

  // Newsletter
  addSubscriber(email: string): { success: boolean; error?: string } {
    const cleanEmail = email.toLowerCase().trim();
    if (this.subscribers.some(s => s.email === cleanEmail)) {
      return { success: false, error: 'This email is already subscribed to Zyntra updates.' };
    }
    const subscriber: NewsletterSubscriber = {
      id: `sub-${Date.now()}`,
      email: cleanEmail,
      subscribedAt: new Date().toISOString()
    };
    this.subscribers.push(subscriber);
    return { success: true };
  }
}

export const dbStore = new DatabaseStore();

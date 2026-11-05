import { Product, Category, CartItem, Order, User, Coupon, Review } from '../types';

// Client session storage key
const SESSION_KEY = 'zyntra_session_id';
const USER_KEY = 'zyntra_user_info';
const TOKEN_KEY = 'zyntra_auth_token';

export const getSessionId = (): string => {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
};

export const getStoredUser = (): User | null => {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const setStoredUser = (user: User | null) => {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    localStorage.removeItem(TOKEN_KEY);
  }
};

const headers = () => {
  const user = getStoredUser();
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    'x-session-id': getSessionId(),
    ...(token ? {
      'authorization': `Bearer ${token}`,
      'x-admin-token': token,
    } : (user ? {
      'x-user-id': user.id,
      'authorization': `Bearer ${user.id}`,
    } : {})),
  };
};

export const api = {
  // Products
  async getProducts(params?: {
    category?: string;
    search?: string;
    sort?: string;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    limit?: number;
  }): Promise<{ products: Product[]; pagination: any }> {
    const query = new URLSearchParams();
    if (params?.category) query.set('category', params.category);
    if (params?.search) query.set('search', params.search);
    if (params?.sort) query.set('sort', params.sort);
    if (params?.minPrice) query.set('minPrice', params.minPrice.toString());
    if (params?.maxPrice) query.set('maxPrice', params.maxPrice.toString());
    if (params?.page) query.set('page', params.page.toString());
    if (params?.limit) query.set('limit', params.limit.toString());

    const res = await fetch(`/api/v1/products?${query.toString()}`);
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to fetch products');
    return data.data;
  },

  async getProduct(idOrSlug: string): Promise<Product> {
    const res = await fetch(`/api/v1/products/${encodeURIComponent(idOrSlug)}`);
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Product not found');
    return data.data;
  },

  // Categories
  async getCategories(): Promise<Category[]> {
    const res = await fetch('/api/v1/categories');
    const data = await res.json();
    return data.data;
  },

  // Cart
  async getCart(): Promise<CartItem[]> {
    const res = await fetch('/api/v1/cart', { headers: headers() });
    const data = await res.json();
    return data.data || [];
  },

  async addToCart(productId: string, quantity = 1): Promise<CartItem[]> {
    const res = await fetch('/api/v1/cart/items', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ productId, quantity }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Could not add to cart');
    return data.data;
  },

  async updateCartItem(itemId: string, quantity: number): Promise<CartItem[]> {
    const res = await fetch(`/api/v1/cart/items/${itemId}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({ quantity }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Could not update cart');
    return data.data;
  },

  async removeCartItem(itemId: string): Promise<CartItem[]> {
    const res = await fetch(`/api/v1/cart/items/${itemId}`, {
      method: 'DELETE',
      headers: headers(),
    });
    const data = await res.json();
    return data.data;
  },

  async clearCart(): Promise<void> {
    await fetch('/api/v1/cart/clear', {
      method: 'DELETE',
      headers: headers(),
    });
  },

  // Wishlist
  async getWishlist(): Promise<{ productIds: string[]; products: Product[] }> {
    const res = await fetch('/api/v1/wishlist', { headers: headers() });
    const data = await res.json();
    return data.data;
  },

  async toggleWishlist(productId: string): Promise<{ isInWishlist: boolean; count: number }> {
    const res = await fetch('/api/v1/wishlist/toggle', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ productId }),
    });
    const data = await res.json();
    return data.data;
  },

  // Coupons
  async validateCoupon(code: string, subtotalPaise: number): Promise<{ coupon: Coupon; discountPaise: number }> {
    const res = await fetch('/api/v1/coupons/validate', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ code, subtotalPaise }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Invalid coupon');
    return data.data;
  },

  // Orders
  async createOrder(orderPayload: any): Promise<Order> {
    const res = await fetch('/api/v1/orders', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(orderPayload),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Order creation failed');
    return data.data;
  },

  async trackOrder(orderNumber: string): Promise<Order> {
    const res = await fetch(`/api/v1/orders/track/${encodeURIComponent(orderNumber)}`);
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Order not found');
    return data.data;
  },

  async getMyOrders(): Promise<Order[]> {
    const res = await fetch('/api/v1/orders/my-orders', { headers: headers() });
    const data = await res.json();
    return data.data || [];
  },

  // Razorpay simulation
  async initRazorpayPayment(amountPaise: number): Promise<any> {
    const res = await fetch('/api/v1/payments/create', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ amountPaise }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Payment initiation failed');
    return data.data;
  },

  async verifyRazorpayPayment(payload: { razorpayOrderId: string; razorpayPaymentId: string; orderDetails: any }): Promise<Order> {
    const res = await fetch('/api/v1/payments/verify', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Payment verification failed');
    return data.data;
  },

  // Newsletter
  async subscribeNewsletter(email: string): Promise<string> {
    const res = await fetch('/api/v1/newsletter/subscribe', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Subscription failed');
    return data.message;
  },

  // Reviews
  async getReviews(productId?: string): Promise<Review[]> {
    const url = productId ? `/api/v1/reviews?productId=${productId}` : '/api/v1/reviews';
    const res = await fetch(url);
    const data = await res.json();
    return data.data || [];
  },

  async submitReview(review: Omit<Review, 'id' | 'verifiedPurchase' | 'date'>): Promise<Review> {
    const res = await fetch('/api/v1/reviews', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(review),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Could not post review');
    return data.data;
  },

  // Auth
  async login(email: string, password?: string): Promise<User> {
    const res = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-session-id': getSessionId(),
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Login failed');
    setStoredUser(data.data.user);
    if (data.data.token) {
      setAuthToken(data.data.token);
    }
    return data.data.user;
  },

  async logout(): Promise<void> {
    try {
      await fetch('/api/v1/auth/logout', {
        method: 'POST',
        headers: headers(),
      });
    } catch {
      // ignore
    } finally {
      setStoredUser(null);
      setAuthToken(null);
    }
  },

  // Admin
  async getAdminStats() {
    const res = await fetch('/api/v1/admin/stats', { headers: headers() });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Unauthorized admin access');
    return data.data;
  },

  async getAdminOrders(): Promise<Order[]> {
    const res = await fetch('/api/v1/admin/orders', { headers: headers() });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Unauthorized admin access');
    return data.data;
  },

  async updateOrderStatus(orderId: string, status: Order['orderStatus']): Promise<Order> {
    const res = await fetch(`/api/v1/admin/orders/${orderId}/status`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Update failed');
    return data.data;
  },

  async createAdminProduct(productData: any): Promise<Product> {
    const res = await fetch('/api/v1/admin/products', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to create product');
    return data.data;
  },

  async updateAdminProduct(id: string, updates: any): Promise<Product> {
    const res = await fetch(`/api/v1/admin/products/${id}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify(updates),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to update product');
    return data.data;
  },

  async deleteAdminProduct(id: string): Promise<void> {
    const res = await fetch(`/api/v1/admin/products/${id}`, {
      method: 'DELETE',
      headers: headers(),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Failed to delete product');
  },

  async getAdminCoupons(): Promise<Coupon[]> {
    const res = await fetch('/api/v1/admin/coupons', { headers: headers() });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Unauthorized admin access');
    return data.data;
  },

  async getAdminSubscribers(): Promise<any[]> {
    const res = await fetch('/api/v1/admin/subscribers', { headers: headers() });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || 'Unauthorized admin access');
    return data.data;
  },
};

// Currency helper: formats paise integer to Indian Rupee formatted string (e.g. ₹7,999)
export const formatRupee = (paise: number): string => {
  const rupees = Math.round(paise / 100);
  return `₹${rupees.toLocaleString('en-IN')}`;
};

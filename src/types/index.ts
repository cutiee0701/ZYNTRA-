export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: 'electronics' | 'fashion' | 'home-kitchen' | 'beauty' | 'sports' | 'toys-games' | 'audio' | 'wearables' | 'smartphones' | 'accessories' | 'gaming' | 'smarthome' | string;
  pricePaise: number; // e.g. 299900 = ₹2,999.00
  originalPricePaise: number;
  discountPercentage: number;
  rating: number;
  reviewCount: number;
  stock: number;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  sku: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  images: string[];
  warranty: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  itemCount: number;
  image?: string;
  badge?: string;
  description?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin';
  phone?: string;
  addresses?: Address[];
  createdAt: string;
}

export interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault?: boolean;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  pricePaise: number;
  quantity: number;
  totalPaise: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  userId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: Address;
  items: OrderItem[];
  subtotalPaise: number;
  discountPaise: number;
  shippingPaise: number;
  taxPaise: number;
  totalPaise: number;
  couponCode?: string;
  paymentMethod: 'razorpay' | 'cod' | 'upi';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  orderStatus: 'Pending' | 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  razorpayPaymentId?: string;
  trackingNumber?: string;
  courier?: string;
  createdAt: string;
  estimatedDelivery?: string;
}

export interface Coupon {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number; // e.g. 10 for 10% or 50000 for ₹500
  minOrderValuePaise: number;
  maxDiscountPaise?: number;
  isActive: boolean;
  description: string;
}

export interface Review {
  id: string;
  productId: string;
  authorName: string;
  rating: number;
  title: string;
  comment: string;
  verifiedPurchase: boolean;
  date: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

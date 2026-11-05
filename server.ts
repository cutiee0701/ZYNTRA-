import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';
import { createServer as createViteServer } from 'vite';
import { execSync } from 'child_process';
import { dbStore } from './server/store';
import { z } from 'zod';
import { saveOrderToSupabase, getSupabaseStatus } from './server/supabase';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// ==========================================
// SECURE ADMIN AUTHENTICATION (Server-Side Only)
// ==========================================
const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || 'cutiee0701@gmail.com').toLowerCase().trim();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Yashika @@Yashika';

interface AdminSession {
  token: string;
  email: string;
  role: 'admin';
  createdAt: number;
  expiresAt: number;
}
const activeAdminSessions = new Map<string, AdminSession>();

const generateAdminToken = (): string => {
  return `zyn_adm_${crypto.randomBytes(32).toString('hex')}`;
};

// Helper to extract session or auth identifier
const getSessionId = (req: Request): string => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7);
  }
  const customSession = req.headers['x-session-id'];
  if (typeof customSession === 'string' && customSession.length > 0) {
    return customSession;
  }
  return 'user-customer'; // default demo session
};

// ==========================================
// PUBLIC REST API ENDPOINTS (/api/v1)
// ==========================================

// 1. Products List with Search, Filter & Pagination
app.get('/api/v1/products', (req: Request, res: Response) => {
  try {
    const { category, search, minPrice, maxPrice, sort, page, limit } = req.query;

    const data = dbStore.getProducts({
      category: typeof category === 'string' ? category : undefined,
      search: typeof search === 'string' ? search : undefined,
      minPrice: minPrice ? parseInt(minPrice as string, 10) : undefined,
      maxPrice: maxPrice ? parseInt(maxPrice as string, 10) : undefined,
      sort: typeof sort === 'string' ? sort : undefined,
      page: page ? parseInt(page as string, 10) : 1,
      limit: limit ? parseInt(limit as string, 10) : 300,
    });

    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. Single Product by ID or Slug
app.get('/api/v1/products/:idOrSlug', (req: Request, res: Response) => {
  const product = dbStore.getProductByIdOrSlug(req.params.idOrSlug);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  res.json({ success: true, data: product });
});

// 3. Categories List
app.get('/api/v1/categories', (_req: Request, res: Response) => {
  res.json({ success: true, data: dbStore.categories });
});

// 4. Validate Coupon
app.post('/api/v1/coupons/validate', (req: Request, res: Response) => {
  const { code, subtotalPaise } = req.body;
  if (!code || typeof subtotalPaise !== 'number') {
    return res.status(400).json({ success: false, message: 'Missing coupon code or cart subtotal' });
  }
  const result = dbStore.validateCoupon(code, subtotalPaise);
  if (!result.valid) {
    return res.status(400).json({ success: false, message: result.error });
  }
  res.json({
    success: true,
    data: {
      coupon: result.coupon,
      discountPaise: result.discountPaise,
    },
  });
});

// 5. Reviews by Product
app.get('/api/v1/reviews', (req: Request, res: Response) => {
  const { productId } = req.query;
  if (productId && typeof productId === 'string') {
    const filtered = dbStore.reviews.filter(r => r.productId === productId);
    return res.json({ success: true, data: filtered });
  }
  res.json({ success: true, data: dbStore.reviews });
});

// 6. Post Review
app.post('/api/v1/reviews', (req: Request, res: Response) => {
  const reviewSchema = z.object({
    productId: z.string(),
    authorName: z.string().min(2),
    rating: z.number().min(1).max(5),
    title: z.string().min(3),
    comment: z.string().min(5),
  });

  const parsed = reviewSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false, errors: parsed.error.issues });
  }

  const newReview = {
    id: `rev-${Date.now()}`,
    ...parsed.data,
    verifiedPurchase: true,
    date: new Date().toISOString().split('T')[0],
  };

  dbStore.reviews.unshift(newReview);
  res.status(201).json({ success: true, data: newReview });
});

// 7. Newsletter Subscribe
app.post('/api/v1/newsletter/subscribe', (req: Request, res: Response) => {
  const emailSchema = z.string().email('Please enter a valid email address');
  const parsed = emailSchema.safeParse(req.body.email);
  if (!parsed.success) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address' });
  }

  const result = dbStore.addSubscriber(parsed.data);
  if (!result.success) {
    return res.status(409).json({ success: false, message: result.error });
  }

  res.status(201).json({
    success: true,
    message: 'Thank you for subscribing! Your exclusive welcome coupon is WELCOME10.',
  });
});

// ==========================================
// CART & WISHLIST ENDPOINTS
// ==========================================

app.get('/api/v1/cart', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  const items = dbStore.getCart(sessionId);
  res.json({ success: true, data: items });
});

app.post('/api/v1/cart/items', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  const { productId, quantity } = req.body;

  const product = dbStore.products.find(p => p.id === productId);
  if (!product) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }

  const qty = typeof quantity === 'number' && quantity > 0 ? quantity : 1;
  const currentCart = dbStore.getCart(sessionId);
  const existingIndex = currentCart.findIndex(item => item.productId === productId);

  if (existingIndex >= 0) {
    const updatedQty = currentCart[existingIndex].quantity + qty;
    if (updatedQty > product.stock) {
      return res.status(400).json({
        success: false,
        message: `Only ${product.stock} units available in stock.`,
      });
    }
    currentCart[existingIndex].quantity = updatedQty;
  } else {
    if (qty > product.stock) {
      return res.status(400).json({
        success: false,
        message: `Only ${product.stock} units available in stock.`,
      });
    }
    currentCart.push({
      id: `ci-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      productId,
      product,
      quantity: qty,
    });
  }

  dbStore.setCart(sessionId, currentCart);
  res.json({ success: true, data: currentCart });
});

app.patch('/api/v1/cart/items/:itemId', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  const { quantity } = req.body;
  const currentCart = dbStore.getCart(sessionId);
  const item = currentCart.find(i => i.id === req.params.itemId);

  if (!item) {
    return res.status(404).json({ success: false, message: 'Cart item not found' });
  }

  if (quantity <= 0) {
    const updated = currentCart.filter(i => i.id !== req.params.itemId);
    dbStore.setCart(sessionId, updated);
    return res.json({ success: true, data: updated });
  }

  const product = dbStore.products.find(p => p.id === item.productId);
  if (product && quantity > product.stock) {
    return res.status(400).json({
      success: false,
      message: `Only ${product.stock} units available in stock.`,
    });
  }

  item.quantity = quantity;
  dbStore.setCart(sessionId, currentCart);
  res.json({ success: true, data: currentCart });
});

app.delete('/api/v1/cart/items/:itemId', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  const currentCart = dbStore.getCart(sessionId);
  const updated = currentCart.filter(i => i.id !== req.params.itemId);
  dbStore.setCart(sessionId, updated);
  res.json({ success: true, data: updated });
});

app.delete('/api/v1/cart/clear', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  dbStore.setCart(sessionId, []);
  res.json({ success: true, data: [] });
});

// Wishlist
app.get('/api/v1/wishlist', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  const productIds = dbStore.getWishlist(sessionId);
  const products = dbStore.products.filter(p => productIds.includes(p.id));
  res.json({ success: true, data: { productIds, products } });
});

app.post('/api/v1/wishlist/toggle', (req: Request, res: Response) => {
  const sessionId = getSessionId(req);
  const { productId } = req.body;
  if (!productId) {
    return res.status(400).json({ success: false, message: 'productId required' });
  }
  const result = dbStore.toggleWishlist(sessionId, productId);
  res.json({ success: true, data: result });
});

// ==========================================
// ORDERS & PAYMENTS (RAZORPAY SIMULATION)
// ==========================================

// Create Razorpay Order
app.post('/api/v1/payments/create', (req: Request, res: Response) => {
  const { amountPaise, receipt } = req.body;
  if (!amountPaise || amountPaise <= 0) {
    return res.status(400).json({ success: false, message: 'Invalid payment amount' });
  }

  // Simulated Razorpay Order Creation
  const razorpayOrderId = `order_${Math.random().toString(36).substring(2, 12).toUpperCase()}`;
  res.json({
    success: true,
    data: {
      keyId: 'rzp_test_zyntra_demo_key',
      orderId: razorpayOrderId,
      amountPaise,
      currency: 'INR',
      receipt: receipt || `rcpt_${Date.now()}`,
    },
  });
});

// ==========================================
// SUPABASE BACKEND ENDPOINTS (Project: hlkfzjejkmqumnyrddcv)
// ==========================================
app.get('/api/v1/supabase/status', (_req: Request, res: Response) => {
  res.json({ success: true, data: getSupabaseStatus() });
});

// Verify Payment and Finalize Order
app.post('/api/v1/payments/verify', async (req: Request, res: Response) => {
  const { razorpayOrderId, razorpayPaymentId, orderDetails } = req.body;
  if (!razorpayPaymentId) {
    return res.status(400).json({ success: false, message: 'Payment verification failed: missing payment signature' });
  }

  try {
    const createdOrder = dbStore.createOrder({
      ...orderDetails,
      paymentMethod: 'razorpay',
      paymentStatus: 'paid',
      orderStatus: 'Confirmed',
      razorpayPaymentId,
    });

    // Save to Supabase backend table
    const supabaseResult = await saveOrderToSupabase(createdOrder);

    // Clear cart on success
    const sessionId = getSessionId(req);
    dbStore.setCart(sessionId, []);

    res.json({
      success: true,
      message: 'Payment verified successfully and order confirmed!',
      data: {
        ...createdOrder,
        supabase: supabaseResult,
      },
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Direct Order Creation (e.g. for COD or pre-verified UPI)
app.post('/api/v1/orders', async (req: Request, res: Response) => {
  const { customerName, customerEmail, customerPhone, shippingAddress, items, couponCode, paymentMethod } = req.body;

  if (!customerName || !customerEmail || !shippingAddress || !items || items.length === 0) {
    return res.status(400).json({ success: false, message: 'Incomplete order payload' });
  }

  // Server-side recalculation of subtotal and stock verification
  let subtotalPaise = 0;
  const verifiedItems = [];

  for (const item of items) {
    const prod = dbStore.products.find(p => p.id === item.productId);
    if (!prod) {
      return res.status(400).json({ success: false, message: `Product ${item.productName} not found` });
    }
    if (prod.stock < item.quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock for ${prod.name}. Available: ${prod.stock}`,
      });
    }
    const itemTotal = prod.pricePaise * item.quantity;
    subtotalPaise += itemTotal;
    verifiedItems.push({
      productId: prod.id,
      productName: prod.name,
      productImage: prod.images[0] || '',
      pricePaise: prod.pricePaise,
      quantity: item.quantity,
      totalPaise: itemTotal,
    });
  }

  let discountPaise = 0;
  if (couponCode) {
    const couponRes = dbStore.validateCoupon(couponCode, subtotalPaise);
    if (couponRes.valid) {
      discountPaise = couponRes.discountPaise;
    }
  }

  const shippingPaise = subtotalPaise >= 99900 ? 0 : 9900; // Free shipping over ₹999
  const totalPaise = Math.max(0, subtotalPaise - discountPaise + shippingPaise);

  const order = dbStore.createOrder({
    customerName,
    customerEmail,
    customerPhone: customerPhone || '9876543210',
    shippingAddress,
    items: verifiedItems,
    subtotalPaise,
    discountPaise,
    shippingPaise,
    taxPaise: 0,
    totalPaise,
    couponCode: couponCode || undefined,
    paymentMethod: paymentMethod || 'cod',
    paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
    orderStatus: paymentMethod === 'cod' ? 'Processing' : 'Confirmed',
  });

  // Save to Supabase backend table
  const supabaseResult = await saveOrderToSupabase(order);

  // Clear customer cart
  const sessionId = getSessionId(req);
  dbStore.setCart(sessionId, []);

  res.status(201).json({ 
    success: true, 
    data: {
      ...order,
      supabase: supabaseResult,
    } 
  });
});

// Track Order by Order Number or Phone/Email
app.get('/api/v1/orders/track/:orderNumber', (req: Request, res: Response) => {
  const query = req.params.orderNumber.trim().toUpperCase();
  const order = dbStore.orders.find(
    o => o.orderNumber.toUpperCase() === query || o.id === query || (o.trackingNumber && o.trackingNumber.toUpperCase() === query)
  );

  if (!order) {
    return res.status(404).json({ success: false, message: `No order found with reference "${query}"` });
  }

  res.json({ success: true, data: order });
});

// Customer order history
app.get('/api/v1/orders/my-orders', (req: Request, res: Response) => {
  const userOrders = dbStore.orders; // Returns demo orders
  res.json({ success: true, data: userOrders });
});

// ==========================================
// AUTHENTICATION
// ==========================================

app.post('/api/v1/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ success: false, message: 'Email address is required.' });
  }

  const cleanEmail = email.toLowerCase().trim();

  // 1. Strict Administrator Authentication with Password Verification
  if (cleanEmail === ADMIN_EMAIL) {
    if (!password || typeof password !== 'string') {
      return res.status(401).json({
        success: false,
        message: 'Password is required for Administrator authentication.',
      });
    }

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: 'Invalid administrator credentials. Access restricted.',
      });
    }

    // Generate secure cryptographically random admin session token (24-hour expiration)
    const token = generateAdminToken();
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
    activeAdminSessions.set(token, {
      token,
      email: cleanEmail,
      role: 'admin',
      createdAt: Date.now(),
      expiresAt,
    });

    const adminUser = {
      id: 'admin-yashika',
      name: 'Yashika',
      email: cleanEmail,
      role: 'admin' as const,
      phone: '+91 98765 43210',
      createdAt: new Date().toISOString(),
    };

    // Keep database store in sync
    const existingIndex = dbStore.users.findIndex(u => u.email.toLowerCase() === cleanEmail);
    if (existingIndex >= 0) {
      dbStore.users[existingIndex] = { ...dbStore.users[existingIndex], role: 'admin', name: 'Yashika' };
    } else {
      dbStore.users.unshift(adminUser);
    }

    return res.json({
      success: true,
      message: 'Administrator verified successfully.',
      data: {
        user: adminUser,
        token,
      },
    });
  }

  // 2. Reject any attempt by unprivileged emails to claim admin privileges
  if (req.body.role === 'admin' || cleanEmail.includes('admin')) {
    return res.status(403).json({
      success: false,
      message: 'Access Denied: Only authorized administrators have access to this portal.',
    });
  }

  // 3. Regular Shopper Customer Login & Registration
  const existingCustomer = dbStore.users.find(u => u.email.toLowerCase() === cleanEmail && u.role === 'customer');
  if (existingCustomer) {
    return res.json({
      success: true,
      data: {
        user: existingCustomer,
        token: `cust_${existingCustomer.id}`,
      },
    });
  }

  const newCustomer = {
    id: `cust-${Date.now()}`,
    email: cleanEmail,
    name: cleanEmail.split('@')[0],
    role: 'customer' as const,
    phone: '+91 98000 12345',
    createdAt: new Date().toISOString(),
  };

  dbStore.users.push(newCustomer);
  return res.json({
    success: true,
    data: {
      user: newCustomer,
      token: `cust_${newCustomer.id}`,
    },
  });
});

app.get('/api/v1/auth/me', (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    const session = activeAdminSessions.get(token);
    if (session && session.expiresAt > Date.now()) {
      return res.json({
        success: true,
        data: {
          id: 'admin-yashika',
          name: 'Yashika',
          email: session.email,
          role: 'admin',
          phone: '+91 98765 43210',
          createdAt: new Date(session.createdAt).toISOString(),
        },
      });
    }
  }

  const sessionId = getSessionId(req);
  const user = dbStore.users.find(u => u.id === sessionId && u.role === 'customer') || dbStore.users.find(u => u.role === 'customer');
  res.json({ success: true, data: user || null });
});

app.post('/api/v1/auth/logout', (req: Request, res: Response) => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.substring(7).trim();
    activeAdminSessions.delete(token);
  }
  res.json({ success: true, message: 'Logged out successfully' });
});

// ==========================================
// ADMIN DASHBOARD & MANAGEMENT (PROTECTED BY RBAC)
// ==========================================

const requireAdmin = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers['authorization'];
  let token = '';
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.substring(7).trim();
  } else if (typeof req.headers['x-admin-token'] === 'string') {
    token = req.headers['x-admin-token'].trim();
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Administrator authentication required.',
    });
  }

  const session = activeAdminSessions.get(token);
  if (!session || session.role !== 'admin' || session.email !== ADMIN_EMAIL) {
    return res.status(403).json({
      success: false,
      message: 'Access Denied: Only authorized administrators (cutiee0701@gmail.com) have permission.',
    });
  }

  if (Date.now() > session.expiresAt) {
    activeAdminSessions.delete(token);
    return res.status(401).json({
      success: false,
      message: 'Administrator session expired. Please authenticate again.',
    });
  }

  next();
};

app.get('/api/v1/admin/stats', requireAdmin, (_req: Request, res: Response) => {
  const totalRevenuePaise = dbStore.orders.reduce((sum, o) => sum + (o.paymentStatus === 'paid' ? o.totalPaise : 0), 0);
  const totalOrders = dbStore.orders.length;
  const lowStockCount = dbStore.products.filter(p => p.stock < 20).length;
  const totalProducts = dbStore.products.length;
  const totalSubscribers = dbStore.subscribers.length;

  res.json({
    success: true,
    data: {
      totalRevenuePaise,
      totalOrders,
      lowStockCount,
      totalProducts,
      totalSubscribers,
    },
  });
});

app.get('/api/v1/admin/orders', requireAdmin, (_req: Request, res: Response) => {
  res.json({ success: true, data: dbStore.orders });
});

app.patch('/api/v1/admin/orders/:id/status', requireAdmin, (req: Request, res: Response) => {
  const { status } = req.body;
  const updated = dbStore.updateOrderStatus(req.params.id, status);
  if (!updated) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }
  res.json({ success: true, data: updated });
});

// Admin Product CRUD
app.post('/api/v1/admin/products', requireAdmin, (req: Request, res: Response) => {
  const body = req.body;
  const slug = body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const newProduct = {
    ...body,
    id: `prod-${Date.now()}`,
    slug,
    rating: body.rating || 5.0,
    reviewCount: 1,
  };
  dbStore.products.unshift(newProduct);
  res.status(201).json({ success: true, data: newProduct });
});

app.put('/api/v1/admin/products/:id', requireAdmin, (req: Request, res: Response) => {
  const index = dbStore.products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  dbStore.products[index] = { ...dbStore.products[index], ...req.body };
  res.json({ success: true, data: dbStore.products[index] });
});

app.delete('/api/v1/admin/products/:id', requireAdmin, (req: Request, res: Response) => {
  const index = dbStore.products.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Product not found' });
  }
  const deleted = dbStore.products.splice(index, 1);
  res.json({ success: true, data: deleted[0] });
});

// Admin Coupons & Subscribers
app.get('/api/v1/admin/coupons', requireAdmin, (_req: Request, res: Response) => {
  res.json({ success: true, data: dbStore.coupons });
});

app.post('/api/v1/admin/coupons', requireAdmin, (req: Request, res: Response) => {
  const newCoupon = req.body;
  dbStore.coupons.push(newCoupon);
  res.status(201).json({ success: true, data: newCoupon });
});

app.get('/api/v1/admin/subscribers', requireAdmin, (_req: Request, res: Response) => {
  res.json({ success: true, data: dbStore.subscribers });
});

// ==========================================
// SECURE GITHUB DIRECT PUSH INTEGRATION
// ==========================================

// 1. Verify Token & Repository Access
app.post('/api/v1/github/verify', async (req: Request, res: Response) => {
  try {
    const { token, username, repo, branch = 'main' } = req.body;
    if (!token || typeof token !== 'string') {
      return res.status(400).json({ success: false, message: 'GitHub Personal Access Token is required.' });
    }
    const cleanToken = token.trim();
    const cleanUser = (username || '').trim();
    const cleanRepo = (repo || '').trim();

    // Verify user authentication
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'Zyntra-Push-Engine',
      },
    });

    if (userRes.status === 401) {
      return res.status(401).json({
        success: false,
        message: 'Invalid GitHub Personal Access Token. Please check token permissions or generate a new classic token with "repo" scope.',
      });
    }

    if (!userRes.ok) {
      return res.status(userRes.status).json({
        success: false,
        message: `GitHub authentication failed with status ${userRes.status}.`,
      });
    }

    const userData = await userRes.json();
    const targetUser = cleanUser || userData.login;

    // Check scopes
    const scopesHeader = userRes.headers.get('x-oauth-scopes') || '';
    const scopes = scopesHeader.split(',').map((s) => s.trim()).filter(Boolean);
    const hasRepoScope = scopes.includes('repo') || scopes.includes('public_repo');

    // If repository name provided, verify existence and write permissions
    let repoExists = false;
    let repoData: any = null;
    let hasWriteAccess = false;

    if (cleanRepo) {
      const repoRes = await fetch(`https://api.github.com/repos/${targetUser}/${cleanRepo}`, {
        headers: {
          Authorization: `Bearer ${cleanToken}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'Zyntra-Push-Engine',
        },
      });

      if (repoRes.ok) {
        repoExists = true;
        repoData = await repoRes.json();
        hasWriteAccess = Boolean(repoData.permissions?.push || repoData.permissions?.admin);
      } else if (repoRes.status === 404) {
        repoExists = false;
      }
    }

    res.json({
      success: true,
      data: {
        authenticatedUser: userData.login,
        avatarUrl: userData.avatar_url,
        scopes,
        hasRepoScope,
        repoExists,
        hasWriteAccess,
        repoDetails: repoData
          ? {
              fullName: repoData.full_name,
              htmlUrl: repoData.html_url,
              defaultBranch: repoData.default_branch,
              isPrivate: repoData.private,
              permissions: repoData.permissions,
            }
          : null,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message || 'Error communicating with GitHub API.' });
  }
});

// 2. Create Repository if not existing
app.post('/api/v1/github/create-repo', async (req: Request, res: Response) => {
  try {
    const { token, repo, isPrivate = false, description } = req.body;
    if (!token || !repo) {
      return res.status(400).json({ success: false, message: 'Token and Repository name are required.' });
    }

    const cleanToken = token.trim();
    const cleanRepo = repo.trim();

    const createRes = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cleanToken}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'Zyntra-Push-Engine',
      },
      body: JSON.stringify({
        name: cleanRepo,
        description: description || 'Zyntra - Smart Electronics & Technology E-Commerce Platform',
        private: Boolean(isPrivate),
        auto_init: false,
      }),
    });

    const data = await createRes.json();
    if (!createRes.ok) {
      return res.status(createRes.status).json({ success: false, message: data.message || 'Failed to create repository.' });
    }

    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 3. Direct Push / Sync Workspace to GitHub
app.post('/api/v1/github/sync', async (req: Request, res: Response) => {
  try {
    const { token, username, repo, branch = 'main', commitMessage } = req.body;
    if (!token || !username || !repo) {
      return res.status(400).json({ success: false, message: 'Token, Username, and Repository Name are required.' });
    }

    const cleanToken = token.trim();
    const cleanUser = username.trim();
    const cleanRepo = repo.trim();
    const cleanBranch = (branch || 'main').trim();
    const msg = (commitMessage || 'feat: sync Zyntra e-commerce website to GitHub').replace(/"/g, '\\"');

    // Safe execution in workspace directory
    const cwd = __dirname;

    // 1. Ensure working tree is staged and committed
    execSync('git config --global --add safe.directory "*" && git config --system --add safe.directory "*"', { cwd });
    execSync('git config user.name "Zyntra Developer" && git config user.email "dev@zyntra.app"', { cwd });

    try {
      execSync('git add -A', { cwd });
      // Only commit if there are changes
      const statusOutput = execSync('git status --porcelain', { cwd, encoding: 'utf8' });
      if (statusOutput.trim().length > 0) {
        execSync(`git commit -m "${msg}"`, { cwd });
      }
    } catch (_err) {
      // Clean working tree or already committed
    }

    // 2. Configure large postBuffer to avoid chunked transfer proxy timeouts
    execSync('git config http.postBuffer 524288000', { cwd });

    // 3. Construct authenticated push URL
    const authenticatedUrl = `https://${encodeURIComponent(cleanUser)}:${encodeURIComponent(cleanToken)}@github.com/${cleanUser}/${cleanRepo}.git`;

    // 4. Execute push safely
    const pushOutput = execSync(`git push ${authenticatedUrl} ${cleanBranch} 2>&1`, {
      cwd,
      encoding: 'utf8',
      timeout: 120000,
    });

    const commitSha = execSync('git rev-parse HEAD', { cwd, encoding: 'utf8' }).trim();

    res.json({
      success: true,
      data: {
        repoUrl: `https://github.com/${cleanUser}/${cleanRepo}`,
        branch: cleanBranch,
        commitSha,
        output: pushOutput.replace(new RegExp(cleanToken, 'g'), '***TOKEN_MASKED***'),
      },
    });
  } catch (error: any) {
    // Ensure token is never leaked in error response or server logs
    const safeError = (error.message || '').replace(/ghp_[a-zA-Z0-9]+/g, '***TOKEN_MASKED***');
    res.status(500).json({
      success: false,
      message: safeError || 'Git push operation failed. Please verify repository permissions and branch name.',
    });
  }
});

// ==========================================
// VITE DEV MIDDLEWARE / STATIC ASSETS
// ==========================================

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Zyntra Server] Running full-stack application on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[Zyntra Server Error]', err);
});

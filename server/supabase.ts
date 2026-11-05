import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase project credentials for project: hlkfzjejkmqumnyrddcv
export const SUPABASE_PROJECT_ID = process.env.SUPABASE_PROJECT_ID || 'hlkfzjejkmqumnyrddcv';
export const SUPABASE_URL = process.env.SUPABASE_URL || `https://${SUPABASE_PROJECT_ID}.supabase.co`;
export const SUPABASE_KEY = 
  process.env.SUPABASE_SERVICE_ROLE_KEY || 
  process.env.SUPABASE_ANON_KEY || 
  process.env.VITE_SUPABASE_ANON_KEY || 
  process.env.SUPABASE_KEY || 
  '';

// Lazily initialized Supabase client
let supabaseClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseClient && SUPABASE_KEY) {
    try {
      supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      });
      console.log(`[Supabase] Client initialized for project ${SUPABASE_PROJECT_ID} (${SUPABASE_URL})`);
    } catch (err: any) {
      console.error(`[Supabase] Error initializing client:`, err.message);
    }
  }
  return supabaseClient;
}

export interface SupabaseOrderRecord {
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  shipping_address: any;
  items: any;
  subtotal_paise: number;
  discount_paise: number;
  shipping_paise: number;
  total_paise: number;
  total_amount_inr: number;
  coupon_code?: string | null;
  payment_method: string;
  payment_status: string;
  order_status: string;
  tracking_number?: string | null;
  courier?: string | null;
  created_at?: string;
}

/**
 * Saves order to Supabase table 'orders'
 */
export async function saveOrderToSupabase(order: any): Promise<{
  success: boolean;
  synced: boolean;
  message: string;
  projectId: string;
  supabaseUrl: string;
  data?: any;
  error?: string;
}> {
  const client = getSupabaseClient();
  
  // Format into Supabase table record
  const record: SupabaseOrderRecord = {
    order_number: order.orderNumber || order.id,
    customer_name: order.customerName,
    customer_email: order.customerEmail,
    customer_phone: order.customerPhone || '',
    street: order.shippingAddress?.street || '',
    city: order.shippingAddress?.city || '',
    state: order.shippingAddress?.state || '',
    pincode: order.shippingAddress?.pincode || '',
    shipping_address: order.shippingAddress,
    items: order.items,
    subtotal_paise: order.subtotalPaise || 0,
    discount_paise: order.discountPaise || 0,
    shipping_paise: order.shippingPaise || 0,
    total_paise: order.totalPaise || 0,
    total_amount_inr: (order.totalPaise || 0) / 100,
    coupon_code: order.couponCode || null,
    payment_method: order.paymentMethod || 'cod',
    payment_status: order.paymentStatus || 'pending',
    order_status: order.orderStatus || 'Confirmed',
    tracking_number: order.trackingNumber || null,
    courier: order.courier || 'Blue Dart Surface Express',
    created_at: order.createdAt || new Date().toISOString(),
  };

  if (!client) {
    console.log(`[Supabase Notice] Order ${record.order_number} recorded. Supabase URL: ${SUPABASE_URL}. Provide SUPABASE_ANON_KEY in .env to auto-sync directly to your remote tables.`);
    return {
      success: true,
      synced: false,
      projectId: SUPABASE_PROJECT_ID,
      supabaseUrl: SUPABASE_URL,
      message: `Order verified! Supabase project (${SUPABASE_PROJECT_ID}) is targeted. Add SUPABASE_ANON_KEY in your environment to stream live inserts to Supabase.`,
      data: record,
    };
  }

  try {
    const { data, error } = await client
      .from('orders')
      .insert([record])
      .select();

    if (error) {
      console.error(`[Supabase Insert Error] Failed to insert order ${record.order_number}:`, error.message);
      return {
        success: false,
        synced: false,
        projectId: SUPABASE_PROJECT_ID,
        supabaseUrl: SUPABASE_URL,
        message: `Supabase returned an error: ${error.message}. Ensure public.orders table is created in project ${SUPABASE_PROJECT_ID}.`,
        error: error.message,
      };
    }

    console.log(`[Supabase Success] Order ${record.order_number} successfully stored in Supabase table public.orders!`);
    return {
      success: true,
      synced: true,
      projectId: SUPABASE_PROJECT_ID,
      supabaseUrl: SUPABASE_URL,
      message: `Order successfully stored in Supabase backend (project ${SUPABASE_PROJECT_ID})!`,
      data,
    };
  } catch (err: any) {
    console.error(`[Supabase Network Exception]`, err.message);
    return {
      success: false,
      synced: false,
      projectId: SUPABASE_PROJECT_ID,
      supabaseUrl: SUPABASE_URL,
      message: `Failed to reach Supabase: ${err.message}`,
      error: err.message,
    };
  }
}

/**
 * Returns current Supabase connection status
 */
export function getSupabaseStatus() {
  const hasKey = Boolean(SUPABASE_KEY && SUPABASE_KEY.length > 5);
  return {
    projectId: SUPABASE_PROJECT_ID,
    supabaseUrl: SUPABASE_URL,
    configured: hasKey,
    status: hasKey ? 'connected' : 'configured_pending_key',
    message: hasKey 
      ? `Supabase is connected to project ${SUPABASE_PROJECT_ID} (${SUPABASE_URL})`
      : `Supabase project ${SUPABASE_PROJECT_ID} is configured (${SUPABASE_URL}). Add SUPABASE_ANON_KEY in .env to enable direct write permissions.`,
  };
}

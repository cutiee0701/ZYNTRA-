-- ====================================================================
-- ZYNTRA E-COMMERCE - COMPLETE SUPABASE POSTGRESQL SCHEMA
-- Project ID: hlkfzjejkmqumnyrddcv
-- Supabase Dashboard URL: https://supabase.com/dashboard/project/hlkfzjejkmqumnyrddcv/sql/new
-- ====================================================================
-- Instructions:
-- 1. Open your Supabase Dashboard -> SQL Editor (or visit link above)
-- 2. Paste this entire SQL file and click "Run" (or Ctrl+Enter / Cmd+Enter)
-- 3. All required tables, indexes, and RLS policies will be created instantly.
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ====================================================================
-- 2. ORDERS TABLE (Actively integrated with Zyntra checkout & tracking)
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number TEXT UNIQUE NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    street TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    pincode TEXT NOT NULL,
    shipping_address JSONB NOT NULL,
    items JSONB NOT NULL,
    subtotal_paise BIGINT NOT NULL,
    discount_paise BIGINT DEFAULT 0,
    shipping_paise BIGINT DEFAULT 0,
    total_paise BIGINT NOT NULL,
    total_amount_inr NUMERIC(12, 2) NOT NULL,
    coupon_code TEXT,
    payment_method TEXT NOT NULL DEFAULT 'cod',
    payment_status TEXT NOT NULL DEFAULT 'pending',
    order_status TEXT NOT NULL DEFAULT 'Confirmed',
    tracking_number TEXT,
    courier TEXT DEFAULT 'Blue Dart Surface Express',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for lightning fast lookups
CREATE INDEX IF NOT EXISTS idx_orders_order_number ON public.orders(order_number);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON public.orders(customer_email);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow inserts from public/anon and service_role (when customers place orders)
DROP POLICY IF EXISTS "Enable insert for all orders" ON public.orders;
CREATE POLICY "Enable insert for all orders" 
ON public.orders 
FOR INSERT 
TO anon, authenticated, service_role 
WITH CHECK (true);

-- Allow reading orders for live tracking and order history
DROP POLICY IF EXISTS "Enable select for order tracking" ON public.orders;
CREATE POLICY "Enable select for order tracking" 
ON public.orders 
FOR SELECT 
TO anon, authenticated, service_role 
USING (true);

-- Allow admin updates (status changes, tracking updates)
DROP POLICY IF EXISTS "Enable update for service_role" ON public.orders;
CREATE POLICY "Enable update for service_role" 
ON public.orders 
FOR UPDATE 
TO service_role, authenticated 
USING (true);

-- ====================================================================
-- 3. NEWSLETTER SUBSCRIBERS TABLE
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon newsletter subscribe" ON public.newsletter_subscribers;
CREATE POLICY "Allow anon newsletter subscribe" 
ON public.newsletter_subscribers 
FOR INSERT 
TO anon, authenticated, service_role 
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read newsletter subscribers" ON public.newsletter_subscribers;
CREATE POLICY "Allow read newsletter subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
TO anon, authenticated, service_role 
USING (true);

-- ====================================================================
-- 4. CONTACT INQUIRIES TABLE
-- ====================================================================
CREATE TABLE IF NOT EXISTS public.contact_inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anon submit contact inquiry" ON public.contact_inquiries;
CREATE POLICY "Allow anon submit contact inquiry" 
ON public.contact_inquiries 
FOR INSERT 
TO anon, authenticated, service_role 
WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read contact inquiries" ON public.contact_inquiries;
CREATE POLICY "Allow read contact inquiries" 
ON public.contact_inquiries 
FOR SELECT 
TO service_role, authenticated 
USING (true);

-- ====================================================================
-- 5. AUTO-UPDATE TIMESTAMP TRIGGER FUNCTION
-- ====================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_orders_updated_at ON public.orders;
CREATE TRIGGER update_orders_updated_at
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- ====================================================================
-- 6. VERIFICATION QUERIES (Run these after inserting an order)
-- ====================================================================
-- View all orders:
-- SELECT id, order_number, customer_name, total_amount_inr, payment_status, order_status, created_at FROM public.orders ORDER BY created_at DESC;

-- Count total orders:
-- SELECT COUNT(*) AS total_orders FROM public.orders;

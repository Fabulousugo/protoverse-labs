// User Types
export interface User {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  avatar_url?: string;
  user_type: 'customer' | 'admin' | 'partner';
  created_at: string;
  updated_at: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description?: string;
  price: number;
  compare_at_price?: number;
  currency: string;
  sku: string;
  category_id: string;
  category?: Category;
  stock_quantity: number;
  images: string[];
  features?: ProductFeature[];
  specifications?: Record<string, string>;
  is_featured: boolean;
  is_active: boolean;
  weight?: number;
  dimensions?: ProductDimensions;
  age_range?: string;
  average_rating?: number;
  review_count?: number;
  created_at: string;
  updated_at: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductDimensions {
  length: number;
  width: number;
  height: number;
  unit: 'cm' | 'in';
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  parent_id?: string;
  image_url?: string;
  display_order: number;
  is_active: boolean;
  product_count?: number;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

// Order Types
export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  subtotal: number;
  shipping_cost: number;
  tax: number;
  total: number;
  currency: string;
  payment_method: string;
  payment_status: PaymentStatus;
  stripe_payment_intent_id?: string;
  shipping_address: Address;
  billing_address: Address;
  tracking_number?: string;
  notes?: string;
  items: OrderItem[];
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  product_sku: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  product?: Product;
}

// Address Types
export interface Address {
  full_name: string;
  email: string;
  phone: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

// Review Types
export interface Review {
  id: string;
  product_id: string;
  user_id: string;
  user?: User;
  rating: number;
  title?: string;
  comment: string;
  is_verified_purchase: boolean;
  helpful_count: number;
  created_at: string;
  updated_at: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
  children?: NavItem[];
}

// Homepage Types
export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta_text: string;
  cta_link: string;
}

export interface ProgramCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'government' | 'corporate' | 'education' | 'ngo';
  website?: string;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  capacity?: number;
  registered?: number;
  is_featured: boolean;
  category: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

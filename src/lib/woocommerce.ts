const WOOCOMMERCE_URL = process.env.EXPO_PUBLIC_WOOCOMMERCE_URL || '';
const WOOCOMMERCE_CONSUMER_KEY = process.env.EXPO_PUBLIC_WOOCOMMERCE_CONSUMER_KEY || '';
const WOOCOMMERCE_CONSUMER_SECRET = process.env.EXPO_PUBLIC_WOOCOMMERCE_CONSUMER_SECRET || '';

export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  images: Array<{
    id: number;
    src: string;
    name: string;
    alt: string;
  }>;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  stock_status: string;
  stock_quantity: number | null;
  rating_count: number;
  average_rating: string;
}

export interface CartItem {
  product: WooProduct;
  quantity: number;
}

class WooCommerceAPI {
  private baseUrl: string;
  private auth: string;

  constructor() {
    this.baseUrl = `${WOOCOMMERCE_URL}/wp-json/wc/v3`;
    this.auth = btoa(`${WOOCOMMERCE_CONSUMER_KEY}:${WOOCOMMERCE_CONSUMER_SECRET}`);
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `Basic ${this.auth}`,
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`WooCommerce API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getProducts(params?: {
    category?: string;
    per_page?: number;
    page?: number;
    search?: string;
    orderby?: string;
    order?: string;
  }): Promise<WooProduct[]> {
    const queryParams = new URLSearchParams();

    if (params?.category) queryParams.append('category', params.category);
    if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.search) queryParams.append('search', params.search);
    if (params?.orderby) queryParams.append('orderby', params.orderby);
    if (params?.order) queryParams.append('order', params.order);

    const query = queryParams.toString();
    const endpoint = `/products${query ? `?${query}` : ''}`;

    return this.request<WooProduct[]>(endpoint);
  }

  async getProduct(id: number): Promise<WooProduct> {
    return this.request<WooProduct>(`/products/${id}`);
  }

  async getCategories(): Promise<Array<{ id: number; name: string; slug: string; count: number }>> {
    return this.request('/products/categories');
  }

  async createOrder(data: {
    payment_method: string;
    payment_method_title: string;
    set_paid: boolean;
    billing: {
      first_name: string;
      last_name: string;
      address_1: string;
      address_2?: string;
      city: string;
      state: string;
      postcode: string;
      country: string;
      email: string;
      phone: string;
    };
    shipping: {
      first_name: string;
      last_name: string;
      address_1: string;
      address_2?: string;
      city: string;
      state: string;
      postcode: string;
      country: string;
    };
    line_items: Array<{
      product_id: number;
      quantity: number;
    }>;
  }) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const wooCommerceAPI = new WooCommerceAPI();

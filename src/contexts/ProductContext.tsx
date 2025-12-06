import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { WooProduct, wooCommerceAPI } from '../lib/woocommerce';

interface ProductContextType {
  products: WooProduct[];
  categories: Array<{ id: number; name: string; slug: string; count: number }>;
  loading: boolean;
  error: string | null;
  selectedCategory: string;
  searchQuery: string;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  fetchProducts: () => Promise<void>;
  getProductById: (id: number) => Promise<WooProduct | null>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<WooProduct[]>([]);
  const [categories, setCategories] = useState<Array<{ id: number; name: string; slug: string; count: number }>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const params: any = {
        per_page: 20,
      };

      if (selectedCategory) {
        params.category = selectedCategory;
      }

      if (searchQuery) {
        params.search = searchQuery;
      }

      const data = await wooCommerceAPI.getProducts(params);
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await wooCommerceAPI.getCategories();
      setCategories(data);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const getProductById = async (id: number): Promise<WooProduct | null> => {
    try {
      const product = await wooCommerceAPI.getProduct(id);
      return product;
    } catch (err) {
      console.error('Error fetching product:', err);
      return null;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        loading,
        error,
        selectedCategory,
        searchQuery,
        setSelectedCategory,
        setSearchQuery,
        fetchProducts,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}

import { ChevronLeftIcon, ShoppingCartIcon, HeartIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { useProducts } from "../../../contexts/ProductContext";
import { useCart } from "../../../contexts/CartContext";
import { WooProduct } from "../../../lib/woocommerce";

export const ProductDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<WooProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    if (!id) return;

    setLoading(true);
    const data = await getProductById(parseInt(id));
    setProduct(data);
    setLoading(false);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      navigate('/homepage');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary-0">
        <div className="text-primary-500">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-primary-0">
        <div className="text-primary-500">Product not found</div>
      </div>
    );
  }

  const price = parseFloat(product.price) || 0;
  const regularPrice = parseFloat(product.regular_price) || 0;
  const hasDiscount = regularPrice > price;

  return (
    <div className="bg-primary-0 w-full min-w-[390px] min-h-screen flex flex-col">
      <header className="relative w-full h-[47px] flex-shrink-0">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <div className="font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] [font-style:var(--callout-bold-font-style)]">
            9:41
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between px-6 py-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e6e6e6]">
          <ChevronLeftIcon className="w-6 h-6 text-primary-900" />
        </button>
        <h1 className="font-h3-semibold font-[number:var(--h3-semibold-font-weight)] text-primary-900 text-[length:var(--h3-semibold-font-size)] tracking-[var(--h3-semibold-letter-spacing)] leading-[var(--h3-semibold-line-height)] [font-style:var(--h3-semibold-font-style)]">
          Product Details
        </h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e6e6e6]">
          <HeartIcon className="w-6 h-6 text-primary-900" />
        </button>
      </div>

      <main className="flex-1 flex flex-col">
        <div className="relative w-full aspect-square bg-primary-100">
          <img
            src={product.images[selectedImage]?.src || 'https://via.placeholder.com/400'}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {product.images.length > 1 && (
          <div className="flex items-center gap-2 px-6 py-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-primary-900' : 'border-transparent'
                }`}
              >
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="flex-1 px-6 py-4">
          <h2 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)] mb-2">
            {product.name}
          </h2>

          <div className="flex items-center gap-2 mb-4">
            <span className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
              ${price.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] line-through">
                ${regularPrice.toFixed(2)}
              </span>
            )}
          </div>

          {product.categories.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              {product.categories.map((category) => (
                <span
                  key={category.id}
                  className="px-3 py-1 bg-primary-100 rounded-full font-b2-regular font-[number:var(--b2-regular-font-weight)] text-primary-900 text-[length:var(--b2-regular-font-size)] tracking-[var(--b2-regular-letter-spacing)] leading-[var(--b2-regular-line-height)] [font-style:var(--b2-regular-font-style)]"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] mb-2">
              Description
            </h3>
            <div
              className="font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]"
              dangerouslySetInnerHTML={{ __html: product.short_description || product.description }}
            />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
              Quantity:
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e6e6e6] font-b1-medium text-primary-900"
              >
                -
              </button>
              <span className="w-12 text-center font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#e6e6e6] font-b1-medium text-primary-900"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8">
          <Button
            onClick={handleAddToCart}
            className="w-full h-[54px] bg-primary-900 hover:bg-primary-900/90 text-primary-0 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] flex items-center justify-center gap-2"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            Add to Cart
          </Button>
        </div>
      </main>
    </div>
  );
};

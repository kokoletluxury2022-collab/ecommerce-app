import { ShoppingCartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { WooProduct } from "../lib/woocommerce";
import { useCart } from "../contexts/CartContext";
import { Button } from "./ui/button";

interface ProductCardProps {
  product: WooProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const imageUrl = product.images[0]?.src || 'https://via.placeholder.com/200';
  const price = parseFloat(product.price) || 0;

  return (
    <div
      onClick={handleClick}
      className="bg-primary-0 rounded-[10px] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full aspect-square bg-primary-100">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] line-clamp-2 mb-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <span className="font-h3-semibold font-[number:var(--h3-semibold-font-weight)] text-primary-900 text-[length:var(--h3-semibold-font-size)] tracking-[var(--h3-semibold-letter-spacing)] leading-[var(--h3-semibold-line-height)] [font-style:var(--h3-semibold-font-style)]">
            ${price.toFixed(2)}
          </span>

          <Button
            size="icon"
            onClick={handleAddToCart}
            className="w-9 h-9 bg-primary-900 hover:bg-primary-900/90 rounded-lg"
          >
            <ShoppingCartIcon className="w-5 h-5 text-primary-0" />
          </Button>
        </div>
      </div>
    </div>
  );
}

import {
  BellIcon,
  MicIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  ShoppingCartIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ProductCard } from "../../../components/ProductCard";
import { useProducts } from "../../../contexts/ProductContext";
import { useCart } from "../../../contexts/CartContext";

export const Homepage = (): JSX.Element => {
  const navigate = useNavigate();
  const { products, loading, categories, selectedCategory, setSelectedCategory, setSearchQuery } = useProducts();
  const { getCartCount } = useCart();
  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const cartCount = getCartCount();

  return (
    <div className="bg-primary-0 overflow-hidden w-full min-w-[390px] min-h-screen relative flex flex-col">
      <header className="relative w-full h-[47px] flex-shrink-0">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <div className="w-[54px] h-[21px] flex rounded-3xl">
            <div className="mt-px w-[54px] h-5 font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] whitespace-nowrap [font-style:var(--callout-bold-font-style)]">
              9:41
            </div>
          </div>
        </div>

        <div className="absolute top-[19px] left-[286px] w-[77px] h-[13px]">
          <div className="absolute top-0 left-[calc(50.00%_+_11px)] w-[27px] h-[13px]">
            <img
              className="absolute w-[calc(100%_-_2px)] top-[calc(50.00%_-_6px)] left-0 h-[13px]"
              alt="Outline"
              src="https://c.animaapp.com/miuwuy0kQowZpp/img/outline.svg"
            />
            <img
              className="absolute top-[calc(50.00%_-_2px)] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuwuy0kQowZpp/img/battery-end.svg"
            />
            <img
              className="absolute w-[calc(100%_-_6px)] top-[calc(50.00%_-_4px)] left-0.5 h-[9px]"
              alt="Fill"
              src="https://c.animaapp.com/miuwuy0kQowZpp/img/fill.svg"
            />
          </div>
          <img
            className="absolute w-[21.96%] h-[91.03%] top-[7.69%] left-[33.59%]"
            alt="Wifi"
            src="https://c.animaapp.com/miuwuy0kQowZpp/img/wifi.svg"
          />
          <img
            className="absolute top-px left-[calc(50.00%_-_39px)] w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuwuy0kQowZpp/img/icon---mobile-signal.svg"
          />
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 pt-3 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
            Discover
          </h1>
          <div className="flex items-center gap-4">
            <BellIcon className="w-6 h-6 text-primary-900" />
            <button onClick={() => navigate('/cart')} className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-primary-900" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <form onSubmit={handleSearch} className="flex items-center gap-2 mb-4">
          <div className="flex-1 flex items-center justify-between px-5 py-3.5 rounded-[10px] border border-solid border-[#e6e6e6] h-[52px]">
            <div className="flex items-center gap-3 flex-1">
              <SearchIcon className="w-6 h-6 text-primary-400" />
              <Input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search for clothes..."
                className="flex-1 border-0 p-0 h-auto font-b1-regular font-[number:var(--b1-regular-font-weight)] text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <MicIcon className="w-6 h-6 text-primary-400" />
          </div>
          <Button
            size="icon"
            type="button"
            className="w-[52px] h-[52px] bg-primary-900 hover:bg-primary-900/90 rounded-[10px]"
          >
            <SlidersHorizontalIcon className="w-6 h-6" />
          </Button>
        </form>

        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <Button
            onClick={() => setSelectedCategory('')}
            variant={!selectedCategory ? "default" : "outline"}
            className={`h-9 px-5 py-4 rounded-[10px] whitespace-nowrap ${
              !selectedCategory
                ? "bg-primary-900 text-primary-0 hover:bg-primary-900/90"
                : "bg-transparent border-[#e6e6e6] text-primary-900 hover:bg-primary-100"
            }`}
          >
            <span className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
              All
            </span>
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id.toString())}
              variant={selectedCategory === category.id.toString() ? "default" : "outline"}
              className={`h-9 px-5 py-4 rounded-[10px] whitespace-nowrap ${
                selectedCategory === category.id.toString()
                  ? "bg-primary-900 text-primary-0 hover:bg-primary-900/90"
                  : "bg-transparent border-[#e6e6e6] text-primary-900 hover:bg-primary-100"
              }`}
            >
              <span className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
                {category.name}
              </span>
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-primary-500">Loading products...</div>
          </div>
        ) : products.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-primary-500">No products found</div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

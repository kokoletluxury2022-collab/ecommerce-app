import { ArrowLeftIcon, BellIcon, HeartIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";
import { ProductImageSection } from "./sections/ProductImageSection";
import { ProductInfoSection } from "./sections/ProductInfoSection";

export const ProductDetails = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/homepage');
  };

  const relatedProducts = [
    {
      name: "Regular fit color block",
      price: "PKR 1,690",
    },
    {
      name: "Regular fit v-neck",
      price: "PKR 1,290",
    },
  ];

  return (
    <div className="bg-primary-0 overflow-hidden w-full min-w-[390px] min-h-screen relative flex flex-col">
      {/* Status Bar */}
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
              src="https://c.animaapp.com/miux5j0uRTE48M/img/outline.svg"
            />
            <img
              className="absolute top-[calc(50.00%_-_2px)] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miux5j0uRTE48M/img/battery-end.svg"
            />
            <img
              className="absolute w-[calc(100%_-_6px)] top-[calc(50.00%_-_4px)] left-0.5 h-[9px]"
              alt="Fill"
              src="https://c.animaapp.com/miux5j0uRTE48M/img/fill.svg"
            />
          </div>
          <img
            className="absolute w-[21.96%] h-[91.03%] top-[7.69%] left-[33.59%]"
            alt="Wifi"
            src="https://c.animaapp.com/miux5j0uRTE48M/img/wifi.svg"
          />
          <img
            className="absolute top-px left-[calc(50.00%_-_39px)] w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miux5j0uRTE48M/img/icon---mobile-signal.svg"
          />
        </div>
      </header>

      {/* Navigation Header */}
      <nav className="relative w-full h-[47px] flex items-center justify-between px-6 flex-shrink-0">
        <Button variant="ghost" size="icon" onClick={handleBackClick} className="h-6 w-6 p-0">
          <ArrowLeftIcon className="w-6 h-6 text-primary-900" />
        </Button>

        <h1 className="font-h3-semibold font-[number:var(--h3-semibold-font-weight)] text-primary-900 text-[length:var(--h3-semibold-font-size)] text-center tracking-[var(--h3-semibold-letter-spacing)] leading-[var(--h3-semibold-line-height)] [font-style:var(--h3-semibold-font-style)]">
          Details
        </h1>

        <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
          <BellIcon className="w-6 h-6 text-primary-900" />
        </Button>
      </nav>

      {/* Main Product Image Section */}
      <section className="relative w-full px-6 pt-2 flex-shrink-0">
        <div className="relative w-full">
          <img
            className="w-full h-[369px] object-cover"
            alt="Product Image"
            src="https://c.animaapp.com/miux5j0uRTE48M/img/image.png"
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-0 h-auto w-auto p-[11.29px] bg-primary-0 rounded-[11.29px] shadow-[0px_11.29px_14.12px_#51515140] hover:bg-primary-0"
          >
            <HeartIcon className="w-[25.41px] h-[25.41px] text-primary-900" />
          </Button>
        </div>
      </section>

      {/* Product Info Section */}
      <ProductInfoSection />

      {/* Related Products Section */}
      <ProductImageSection />

      {/* Product Details Section */}
      <ProductDetailsSection />
    </div>
  );
};

import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const ProductDetailsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-primary-0 border-t border-[#e6e6e6]">
      <div className="flex items-end justify-between px-6 py-[22px]">
        <div className="flex flex-col gap-1">
          <div className="font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
            Price
          </div>
          <div className="font-h3-semibold font-[number:var(--h3-semibold-font-weight)] text-primary-900 text-[length:var(--h3-semibold-font-size)] tracking-[var(--h3-semibold-letter-spacing)] leading-[var(--h3-semibold-line-height)] [font-style:var(--h3-semibold-font-style)]">
            $ 1,190
          </div>
        </div>

        <Button className="h-[54px] w-60 bg-primary-900 hover:bg-primary-900/90 rounded-[10px] gap-2 px-[84px] py-4">
          <ShoppingBagIcon className="w-6 h-6" />
          <span className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
            Add to Cart
          </span>
        </Button>
      </div>

      <div className="flex items-end justify-center h-[27px] bg-primary-0">
        <div className="mb-2 w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
      </div>
    </section>
  );
};

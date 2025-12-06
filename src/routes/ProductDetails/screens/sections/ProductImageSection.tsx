import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

const sizes = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
];

export const ProductImageSection = (): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <section className="inline-flex flex-col items-start gap-3">
      <h2 className="relative w-fit mt-[-2.00px] ml-[-1.00px] [-webkit-text-stroke:1px_#e6e6e6] font-h4-semibold font-[number:var(--h4-semibold-font-weight)] text-primary-900 text-[length:var(--h4-semibold-font-size)] tracking-[var(--h4-semibold-letter-spacing)] leading-[var(--h4-semibold-line-height)] whitespace-nowrap [font-style:var(--h4-semibold-font-style)]">
        Choose size
      </h2>

      <div
        className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
        role="group"
        aria-label="Size selection"
      >
        {sizes.map((size) => (
          <Button
            key={size.value}
            variant="outline"
            onClick={() => setSelectedSize(size.value)}
            className={`flex flex-col w-[50px] h-auto items-center justify-center gap-[12.5px] p-[12.5px] bg-primary-0 rounded-[10px] overflow-hidden border-[1.35px] border-solid border-[#e6e6e6] hover:bg-primary-0 hover:border-primary-900 ${
              selectedSize === size.value ? "border-primary-900" : ""
            }`}
          >
            <span className="relative w-fit mt-[-2.31px] font-h4-medium font-[number:var(--h4-medium-font-weight)] text-primary-900 text-[length:var(--h4-medium-font-size)] tracking-[var(--h4-medium-letter-spacing)] leading-[var(--h4-medium-line-height)] whitespace-nowrap [font-style:var(--h4-medium-font-style)]">
              {size.label}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};

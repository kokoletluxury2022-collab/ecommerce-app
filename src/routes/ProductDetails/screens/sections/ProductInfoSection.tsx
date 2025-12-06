import { StarIcon } from "lucide-react";
import React from "react";

export const ProductInfoSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-start gap-[13px]">
      <div className="inline-flex flex-col items-start gap-[13px]">
        <h2 className="font-h3-semibold font-[number:var(--h3-semibold-font-weight)] text-primary-900 text-[length:var(--h3-semibold-font-size)] tracking-[var(--h3-semibold-letter-spacing)] leading-[var(--h3-semibold-line-height)] [font-style:var(--h3-semibold-font-style)]">
          Regular Fit Slogan
        </h2>

        <div className="inline-flex items-center gap-1.5">
          <StarIcon className="w-[18.85px] h-[17.97px] fill-current text-primary-900" />

          <div className="[font-family:'General_Sans-Medium',Helvetica] font-normal text-primary-900 text-base tracking-[0] leading-4">
            <span className="font-medium text-[#191919] leading-[22.4px] underline">
              4.0/5
            </span>
            <span className="font-[number:var(--b1-medium-font-weight)] text-[#7f7f7f] leading-[var(--b1-medium-line-height)] font-b1-medium [font-style:var(--b1-medium-font-style)] tracking-[var(--b1-medium-letter-spacing)] text-[length:var(--b1-medium-font-size)]">
              {" "}
              (45 reviews)
            </span>
          </div>
        </div>
      </div>

      <p className="w-[341px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#7f7f7f] text-base tracking-[0] leading-[var(--b1-regular-line-height)] font-b1-regular [font-style:var(--b1-regular-font-style)] font-[number:var(--b1-regular-font-weight)] tracking-[var(--b1-regular-letter-spacing)] text-[length:var(--b1-regular-font-size)]">
        The name says it all, the right size slightly snugs the body leaving
        enough room for comfort in the sleeves and waist.
      </p>
    </section>
  );
};

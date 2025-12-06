import React from "react";
import { Button } from "../../../../components/ui/button";

export const ResendCodeSection = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <p className="[font-family:'General_Sans-Regular',Helvetica] font-normal text-base text-center leading-[22.4px]">
        <span className="text-[#7f7f7f] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] font-b1-regular [font-style:var(--b1-regular-font-style)] font-[number:var(--b1-regular-font-weight)] text-[length:var(--b1-regular-font-size)]">
          Email not received?
        </span>
        <span className="[font-family:'General_Sans-Medium',Helvetica] font-medium text-[#191919] tracking-[0] leading-[0.1px]">
          &nbsp;
        </span>
        <Button
          variant="link"
          className="[font-family:'General_Sans-Medium',Helvetica] font-medium text-[#191919] tracking-[0] leading-[22.4px] underline p-0 h-auto inline"
        >
          Resend code
        </Button>
      </p>
    </div>
  );
};

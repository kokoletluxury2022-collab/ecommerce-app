import React from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export const EmailInputSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-1">
      <Label className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
        Email
      </Label>

      <Input
        type="email"
        defaultValue="cody.fisher45@example.com"
        className="h-[52px] px-5 py-3.5 w-full rounded-[10px] border border-solid border-[#e6e6e6] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]"
      />
    </div>
  );
};

import { EyeOffIcon } from "lucide-react";
import React from "react";
import { Label } from "../../../../components/ui/label";

export const PasswordInputSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-1">
      <Label className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
        Password
      </Label>

      <div className="flex h-[52px] items-center justify-between px-5 py-3.5 w-full rounded-[10px] overflow-hidden border border-solid border-[#e6e6e6]">
        <div className="justify-center gap-3 flex-1 grow flex items-center">
          <div className="flex-1 font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
            **********
          </div>
        </div>

        <EyeOffIcon className="w-6 h-6 text-primary-900 cursor-pointer" />
      </div>
    </div>
  );
};

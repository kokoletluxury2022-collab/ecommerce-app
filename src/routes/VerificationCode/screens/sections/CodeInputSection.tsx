import React from "react";

export const CodeInputSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-2 w-full">
      <h1 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
        Enter 4 Digit Code
      </h1>

      <p className="font-b1-regular font-[number:var(--b1-regular-font-weight)] text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
        <span className="text-[#7f7f7f]">
          Enter 4 digit code that your receive on your email (
        </span>
        <span className="text-[#191919]">cody.fisher45@example.com</span>
        <span className="text-[#7f7f7f]">).</span>
      </p>
    </section>
  );
};

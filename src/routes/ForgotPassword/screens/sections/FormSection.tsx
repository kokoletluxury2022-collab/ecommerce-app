import React from "react";

export const FormSection = (): JSX.Element => {
  return (
    <section className="flex flex-col gap-2 w-full">
      <h1 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
        Forgot password
      </h1>

      <p className="font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
        Enter your email for the verification process. We will send 4 digits
        code to your email.
      </p>
    </section>
  );
};

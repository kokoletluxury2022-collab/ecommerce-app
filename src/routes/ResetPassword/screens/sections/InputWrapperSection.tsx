import { CheckCircle2Icon } from "lucide-react";
import React from "react";

export const InputWrapperSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-center py-4">
      <CheckCircle2Icon className="w-12 h-12 text-green-600" strokeWidth={2} />
    </section>
  );
};

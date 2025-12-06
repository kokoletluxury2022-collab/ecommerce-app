import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { CodeInputSection } from "./sections/CodeInputSection";
import { NumericInputSection } from "./sections/NumericInputSection";
import { ResendCodeSection } from "./sections/ResendCodeSection";

const codeDigits = [
  { value: "1" },
  { value: "4" },
  { value: "2" },
  { value: "0" },
];

export const VerificationCode = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/forgot-password');
  };

  const handleContinueClick = () => {
    navigate('/reset-password');
  };

  return (
    <div className="bg-primary-0 overflow-hidden w-full min-w-[390px] min-h-[844px] flex flex-col relative">
      <header className="w-full h-[47px] flex-shrink-0 relative">
        <img
          className="absolute top-0 left-[calc(50%_-_86px)] w-px h-px"
          alt="Notch"
        />

        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <div className="w-[54px] h-[21px] flex rounded-3xl">
            <time className="mt-px w-[54px] h-5 font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] whitespace-nowrap [font-style:var(--callout-bold-font-style)]">
              9:41
            </time>
          </div>
        </div>

        <div className="absolute top-[19px] left-[286px] w-[77px] h-[13px]">
          <div className="absolute top-0 left-[calc(50%_+_11px)] w-[27px] h-[13px]">
            <img
              className="absolute w-[calc(100%_-_2px)] top-[calc(50%_-_6px)] left-0 h-[13px]"
              alt="Outline"
              src="https://c.animaapp.com/miuw6x1asCEtc3/img/outline.svg"
            />

            <img
              className="absolute top-[calc(50%_-_2px)] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuw6x1asCEtc3/img/battery-end.svg"
            />

            <img
              className="absolute w-[calc(100%_-_6px)] top-[calc(50%_-_4px)] left-0.5 h-[9px]"
              alt="Fill"
              src="https://c.animaapp.com/miuw6x1asCEtc3/img/fill.svg"
            />
          </div>

          <img
            className="absolute w-[21.96%] h-[91.03%] top-[7.69%] left-[33.59%]"
            alt="Wifi"
            src="https://c.animaapp.com/miuw6x1asCEtc3/img/wifi.svg"
          />

          <img
            className="absolute top-px left-[calc(50%_-_39px)] w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuw6x1asCEtc3/img/icon---mobile-signal.svg"
          />
        </div>
      </header>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleBackClick}
        className="absolute top-[61px] left-6 w-6 h-6 p-0"
        aria-label="Go back"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </Button>

      <CodeInputSection />

      <div className="flex justify-center gap-[12px] px-6 mt-[160px]">
        {codeDigits.map((digit, index) => (
          <div
            key={index}
            className="flex flex-col w-16 h-[60px] items-center justify-center gap-1"
          >
            <Input
              type="text"
              defaultValue={digit.value}
              maxLength={1}
              className="flex items-center justify-center px-5 py-3.5 h-[60px] text-center rounded-[10px] border border-solid border-[#e6e6e6] font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]"
            />
          </div>
        ))}
      </div>

      <ResendCodeSection />

      <Button 
        onClick={handleContinueClick}
        className="w-[341px] h-[54px] mx-6 mt-[109px] bg-primary-900 hover:bg-primary-900/90 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
        Continue
      </Button>

      <NumericInputSection />
    </div>
  );
};

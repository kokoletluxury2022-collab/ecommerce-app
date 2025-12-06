import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { EmailInputSection } from "./sections/EmailInputSection";
import { FormSection } from "./sections/FormSection";
import { KeyboardSection } from "./sections/KeyboardSection";

export const ForgotPassword = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/login');
  };

  const handleSendCodeClick = () => {
    navigate('/verification-code');
  };

  return (
    <div className="bg-primary-0 overflow-hidden w-full min-w-[390px] min-h-[844px] flex flex-col relative">
      <header className="w-full h-[47px] relative flex-shrink-0">
        <img
          className="absolute top-0 left-[calc(50.00%_-_86px)] w-px h-px"
          alt="Notch"
        />

        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <div className="w-[54px] h-[21px] flex rounded-3xl">
            <div className="mt-px w-[54px] h-5 font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] whitespace-nowrap [font-style:var(--callout-bold-font-style)]">
              9:41
            </div>
          </div>
        </div>

        <div className="absolute top-[19px] left-[286px] w-[77px] h-[13px]">
          <div className="absolute top-0 left-[calc(50.00%_+_11px)] w-[27px] h-[13px]">
            <img
              className="absolute w-[calc(100%_-_2px)] top-[calc(50.00%_-_6px)] left-0 h-[13px]"
              alt="Outline"
              src="https://c.animaapp.com/miuvyoq5GGbt0v/img/outline.svg"
            />

            <img
              className="absolute top-[calc(50.00%_-_2px)] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuvyoq5GGbt0v/img/battery-end.svg"
            />

            <img
              className="absolute w-[calc(100%_-_6px)] top-[calc(50.00%_-_4px)] left-0.5 h-[9px]"
              alt="Fill"
              src="https://c.animaapp.com/miuvyoq5GGbt0v/img/fill.svg"
            />
          </div>

          <img
            className="absolute w-[21.96%] h-[91.03%] top-[7.69%] left-[33.59%]"
            alt="Wifi"
            src="https://c.animaapp.com/miuvyoq5GGbt0v/img/wifi.svg"
          />

          <img
            className="absolute top-px left-[calc(50.00%_-_39px)] w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuvyoq5GGbt0v/img/icon-mobile-signal.svg"
          />
        </div>
      </header>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleBackClick}
        className="absolute top-[61px] left-6 w-6 h-6 p-0"
      >
        <img
          className="w-6 h-6"
          alt="Arrow"
          src="https://c.animaapp.com/miuvyoq5GGbt0v/img/arrow.svg"
        />
      </Button>

      <main className="flex-1 flex flex-col relative">
        <FormSection />

        <EmailInputSection />

        <Button 
          onClick={handleSendCodeClick}
          className="w-[341px] h-[54px] absolute top-[429px] left-6 bg-primary-900 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] h-auto">
          Send Code
        </Button>
      </main>

      <KeyboardSection />
    </div>
  );
};

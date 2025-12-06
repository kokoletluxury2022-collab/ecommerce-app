import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export const Onboarding = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="bg-primary-0 w-full min-w-[390px] min-h-[844px] relative flex flex-col">
      <img
        className="absolute top-[99px] left-0 w-[390px] h-[745px] pointer-events-none"
        alt="Element"
        src="https://c.animaapp.com/miuqn5vnLu00l9/img/element.svg"
      />

      <header className="relative w-full h-[47px] flex items-center justify-between px-[27px]">
        <div className="flex items-center justify-center w-[54px] h-[21px]">
          <div className="font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] whitespace-nowrap [font-style:var(--callout-bold-font-style)]">
            9:41
          </div>
        </div>

        <div className="flex items-center gap-[5px] h-[13px]">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuqn5vnLu00l9/img/icon---mobile-signal.svg"
          />

          <img
            className="w-[17px] h-[11.83px]"
            alt="Wifi"
            src="https://c.animaapp.com/miuqn5vnLu00l9/img/wifi.svg"
          />

          <div className="relative w-[27px] h-[13px]">
            <img
              className="absolute w-[25px] h-[13px] top-0 left-0"
              alt="Outline"
              src="https://c.animaapp.com/miuqn5vnLu00l9/img/outline.svg"
            />

            <img
              className="absolute top-[4.5px] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuqn5vnLu00l9/img/battery-end.svg"
            />

            <img
              className="absolute w-[21px] h-[9px] top-[2px] left-0.5"
              alt="Fill"
              src="https://c.animaapp.com/miuqn5vnLu00l9/img/fill.svg"
            />
          </div>
        </div>
      </header>

      <main className="relative flex-1 flex flex-col">
        <h1 className="relative z-10 mt-3 mx-6 w-[324px] font-h1-semibold font-[number:var(--h1-semibold-font-weight)] text-primary-900 text-[length:var(--h1-semibold-font-size)] tracking-[var(--h1-semibold-letter-spacing)] leading-[var(--h1-semibold-line-height)] [font-style:var(--h1-semibold-font-style)]">
          Define yourself in your unique way.
        </h1>

        <img
          className="absolute top-[30px] left-3 w-[378px] h-[767px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/miuqn5vnLu00l9/img/image.png"
        />
      </main>

      <footer className="relative w-full h-[107px] flex flex-col justify-between items-center bg-primary-0 border-t border-solid border-[#e6e6e6]">
        <Button 
          onClick={handleGetStarted}
          className="mt-[22px] h-[54px] w-[341px] bg-primary-900 hover:bg-primary-900/90 text-primary-0 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
          Get Started
          <ArrowRightIcon className="w-6 h-6 ml-2.5" />
        </Button>

        <div className="h-[27px] w-full flex items-end justify-center bg-primary-0 pb-2">
          <div className="w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
        </div>
      </footer>
    </div>
  );
};

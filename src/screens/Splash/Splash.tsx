import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Splash = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main
      className="bg-primary-900 w-full min-w-[390px] min-h-[844px] flex flex-col relative overflow-hidden"
      data-model-id="136:1469"
    >
      <img
        className="absolute top-0 left-0 w-[390px] h-[571px] opacity-0 animate-fade-in [--animation-delay:0ms]"
        alt="Decorative background element"
        src="https://c.animaapp.com/miuq9ynlM7LhqV/img/element.svg"
      />

      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-[390px] h-[47px]">
        <div className="absolute top-3.5 left-[27px] w-[54px] h-[21px] flex justify-center">
          <time className="w-[54px] h-[21px] flex rounded-3xl">
            <span className="mt-px w-[54px] h-5 font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-0 text-[length:var(--callout-bold-font-size)] text-center tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] whitespace-nowrap [font-style:var(--callout-bold-font-style)]">
              9:41
            </span>
          </time>
        </div>

        <div className="absolute top-[19px] left-[286px] w-[77px] h-[13px]">
          <div className="absolute top-0 left-[calc(50.00%_+_11px)] w-[27px] h-[13px]">
            <img
              className="absolute w-[calc(100%_-_2px)] top-[calc(50.00%_-_6px)] left-0 h-[13px]"
              alt="Battery outline"
              src="https://c.animaapp.com/miuq9ynlM7LhqV/img/outline.svg"
            />

            <img
              className="absolute top-[calc(50.00%_-_2px)] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuq9ynlM7LhqV/img/battery-end.svg"
            />

            <img
              className="absolute w-[calc(100%_-_6px)] top-[calc(50.00%_-_4px)] left-0.5 h-[9px]"
              alt="Battery fill"
              src="https://c.animaapp.com/miuq9ynlM7LhqV/img/fill.svg"
            />
          </div>

          <img
            className="absolute w-[21.96%] h-[91.03%] top-[7.69%] left-[33.59%]"
            alt="WiFi signal"
            src="https://c.animaapp.com/miuq9ynlM7LhqV/img/wifi.svg"
          />

          <img
            className="absolute top-px left-[calc(50.00%_-_39px)] w-[18px] h-3"
            alt="Mobile signal"
            src="https://c.animaapp.com/miuq9ynlM7LhqV/img/icon---mobile-signal.svg"
          />
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center">
        <img
          className="w-[134px] h-[133px] opacity-0 animate-fade-in [--animation-delay:200ms]"
          alt="App logo"
          src="https://c.animaapp.com/miuq9ynlM7LhqV/img/vector.svg"
        />
      </section>

      <div className="flex justify-center mb-[72px] opacity-0 animate-fade-in [--animation-delay:400ms]">
        <div className="w-[55px] h-[55px] flex">
          <div className="w-[55.49px] h-[55.49px] flex bg-[url(https://c.animaapp.com/miuq9ynlM7LhqV/img/3.svg)] bg-[100%_100%] animate-spin">
            <div className="mt-[47.2px] w-[8.32px] h-[8.32px] ml-[23.9px] bg-primary-0 rounded-[4.16px]" />
          </div>
        </div>
      </div>

      <footer className="w-full h-[27px] flex items-end justify-center bg-primary-900">
        <div className="mb-2 w-[134px] h-[5px] bg-primary-0 rounded-[100px]" />
      </footer>
    </main>
  );
};

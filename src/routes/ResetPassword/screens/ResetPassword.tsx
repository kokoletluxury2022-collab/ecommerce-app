import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { InputWrapperSection } from "./sections/InputWrapperSection";
import { KeyboardSection } from "./sections/KeyboardSection";
import { NotificationPopupSection } from "./sections/NotificationPopupSection";
import { PasswordInputSection } from "./sections/PasswordInputSection";

export const ResetPassword = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/verification-code');
  };

  return (
    <div className="bg-primary-0 overflow-hidden w-full min-w-[390px] min-h-[844px] relative flex flex-col">
      <header className="relative w-full h-[47px] flex-shrink-0">
        <img
          className="absolute top-0 left-[calc(50%_-_86px)] w-px h-px"
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
          <div className="absolute top-0 left-[calc(50%_+_11px)] w-[27px] h-[13px]">
            <img
              className="absolute w-[calc(100%_-_2px)] top-[calc(50%_-_6px)] left-0 h-[13px]"
              alt="Outline"
              src="https://c.animaapp.com/miuwhuqjs9jfDm/img/outline.svg"
            />

            <img
              className="absolute top-[calc(50%_-_2px)] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuwhuqjs9jfDm/img/battery-end.svg"
            />

            <img
              className="absolute w-[calc(100%_-_6px)] top-[calc(50%_-_4px)] left-0.5 h-[9px]"
              alt="Fill"
              src="https://c.animaapp.com/miuwhuqjs9jfDm/img/fill.svg"
            />
          </div>

          <img
            className="absolute w-[21.96%] h-[91.03%] top-[7.69%] left-[33.59%]"
            alt="Wifi"
            src="https://c.animaapp.com/miuwhuqjs9jfDm/img/wifi.svg"
          />

          <img
            className="absolute top-px left-[calc(50%_-_39px)] w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuwhuqjs9jfDm/img/icon---mobile-signal.svg"
          />
        </div>
      </header>

      <div className="relative flex-1 flex flex-col">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBackClick}
          className="absolute top-[14px] left-6 w-6 h-6 p-0"
        >
          <img
            className="w-6 h-6"
            alt="Arrow"
            src="https://c.animaapp.com/miuw9zgu4g9VRZ/img/arrow.svg"
          />
        </Button>

        <h1 className="absolute top-[52px] left-6 w-[335px] font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
          Reset Password
        </h1>

        <p className="absolute top-[92px] left-6 w-[341px] font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
          Set the new password for your account so you can login and access all
          the features.
        </p>

        <div className="absolute top-[146px] left-6 w-[341px]">
          <PasswordInputSection />
        </div>

        <div className="absolute top-[224px] left-6 w-[341px]">
          <PasswordInputSection />
        </div>

        <Button className="absolute top-[429px] left-6 w-[341px] h-[54px] bg-primary-900 hover:bg-primary-900/90 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
          Continue
        </Button>

        <div className="absolute top-[483px] left-0 w-full">
          <KeyboardSection />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-[#19191933] pointer-events-none" />

        <div className="absolute top-[230px] left-6">
          <NotificationPopupSection />
        </div>
      </div>
    </div>
  );
};

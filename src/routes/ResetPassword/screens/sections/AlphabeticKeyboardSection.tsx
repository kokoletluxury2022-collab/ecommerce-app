import React from "react";
import { Button } from "../../../../components/ui/button";

const firstRowKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const secondRowKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const thirdRowKeys = ["Z", "X", "C", "V", "B", "N", "M"];

export const AlphabeticKeyboardSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#d1d3d9] backdrop-blur-[54.37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(54.37px)_brightness(100%)] pb-[34px]">
      <div className="w-full px-[3px] pt-2 flex flex-col gap-3">
        <div className="flex gap-1.5 h-[42px]">
          {firstRowKeys.map((key) => (
            <Button
              key={key}
              variant="ghost"
              className="flex-1 h-[42px] bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0"
            >
              <span className="font-title2-regular font-[number:var(--title2-regular-font-weight)] text-primary-900 text-[length:var(--title2-regular-font-size)] tracking-[var(--title2-regular-letter-spacing)] leading-[var(--title2-regular-line-height)] [font-style:var(--title2-regular-font-style)]">
                {key}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex gap-1.5 h-[42px] px-[19px]">
          {secondRowKeys.map((key) => (
            <Button
              key={key}
              variant="ghost"
              className="flex-1 h-[42px] bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0"
            >
              <span className="font-title2-regular font-[number:var(--title2-regular-font-weight)] text-primary-900 text-[length:var(--title2-regular-font-size)] tracking-[var(--title2-regular-letter-spacing)] leading-[var(--title2-regular-line-height)] [font-style:var(--title2-regular-font-style)]">
                {key}
              </span>
            </Button>
          ))}
        </div>

        <div className="flex gap-1.5 h-[42px]">
          <Button
            variant="ghost"
            className="w-[42px] h-[42px] bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0 flex items-center justify-center"
          >
            <img
              className="h-[16.3px] w-[19px]"
              alt="Shift active"
              src="https://c.animaapp.com/miuw9zgu4g9VRZ/img/shift-active.svg"
            />
          </Button>

          <div className="flex-1 flex gap-1.5">
            {thirdRowKeys.map((key) => (
              <Button
                key={key}
                variant="ghost"
                className="flex-1 h-[42px] bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0"
              >
                <span className="font-title2-regular font-[number:var(--title2-regular-font-weight)] text-primary-900 text-[length:var(--title2-regular-font-size)] tracking-[var(--title2-regular-letter-spacing)] leading-[var(--title2-regular-line-height)] [font-style:var(--title2-regular-font-style)]">
                  {key}
                </span>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-[42px] h-[42px] bg-[#abb0bc] rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-[#9ca1ad] p-0 flex items-center justify-center"
          >
            <img
              className="h-[17px] w-[23px]"
              alt="Backspace"
              src="https://c.animaapp.com/miuw9zgu4g9VRZ/img/union.svg"
            />
          </Button>
        </div>
      </div>

      <div className="flex w-full px-[3px] items-start gap-1.5 mt-3">
        <Button
          variant="ghost"
          className="w-[91px] h-[42px] bg-[#abb0bc] rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-[#9ca1ad] p-0"
        >
          <span className="font-default-regular-callout font-[number:var(--default-regular-callout-font-weight)] text-primary-900 text-[length:var(--default-regular-callout-font-size)] tracking-[var(--default-regular-callout-letter-spacing)] leading-[var(--default-regular-callout-line-height)] [font-style:var(--default-regular-callout-font-style)]">
            123
          </span>
        </Button>

        <Button
          variant="ghost"
          className="flex-1 h-[42px] bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0"
        >
          <span className="font-default-regular-callout font-[number:var(--default-regular-callout-font-weight)] text-primary-900 text-[length:var(--default-regular-callout-font-size)] tracking-[var(--default-regular-callout-letter-spacing)] leading-[var(--default-regular-callout-line-height)] [font-style:var(--default-regular-callout-font-style)]">
            space
          </span>
        </Button>

        <Button
          variant="ghost"
          className="w-[91px] h-[42px] bg-[#abb0bc] rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-[#9ca1ad] p-0"
        >
          <span className="font-default-regular-callout font-[number:var(--default-regular-callout-font-weight)] text-primary-900 text-[length:var(--default-regular-callout-font-size)] tracking-[var(--default-regular-callout-letter-spacing)] leading-[var(--default-regular-callout-line-height)] [font-style:var(--default-regular-callout-font-style)]">
            return
          </span>
        </Button>
      </div>

      <div className="w-full px-[31px] mt-[13px]">
        <img
          className="w-full h-7"
          alt="Emoji dictation"
          src="https://c.animaapp.com/miuw9zgu4g9VRZ/img/emoji---dictation.svg"
        />
      </div>

      <div className="w-full flex items-end justify-center mt-[11px]">
        <div className="w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
      </div>
    </section>
  );
};

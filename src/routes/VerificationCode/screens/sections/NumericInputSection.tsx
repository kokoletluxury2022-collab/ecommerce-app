import React from "react";
import { Button } from "../../../../components/ui/button";

const firstRowKeys = [
  { letter: "Q", left: "left-0" },
  { letter: "W", left: "left-10" },
  { letter: "E", left: "left-[78px]" },
  { letter: "R", left: "left-[118px]" },
  { letter: "T", left: "left-[156px]" },
  { letter: "Y", left: "left-[196px]" },
  { letter: "U", left: "left-[235px]" },
  { letter: "I", left: "left-[273px]" },
  { letter: "O", left: "left-[313px]" },
  { letter: "P", left: "left-[351px]" },
];

const secondRowKeys = [
  { letter: "A", left: "left-0" },
  { letter: "S", left: "left-10" },
  { letter: "D", left: "left-[78px]" },
  { letter: "F", left: "left-[118px]" },
  { letter: "G", left: "left-[157px]" },
  { letter: "H", left: "left-[196px]" },
  { letter: "J", left: "left-[235px]" },
  { letter: "K", left: "left-[275px]" },
  { letter: "L", left: "left-[313px]" },
];

const thirdRowKeys = [
  { letter: "Z", left: "left-0" },
  { letter: "X", left: "left-[39px]" },
  { letter: "C", left: "left-[78px]" },
  { letter: "V", left: "left-[117px]" },
  { letter: "B", left: "left-[158px]" },
  { letter: "N", left: "left-[196px]" },
  { letter: "M", left: "left-[236px]" },
];

export const NumericInputSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#d1d3d9] backdrop-blur-[54.37px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(54.37px)_brightness(100%)] py-2 px-[3px]">
      <div className="flex flex-col gap-3">
        <div className="relative h-[42px]">
          {firstRowKeys.map((key, index) => (
            <Button
              key={`first-${index}`}
              variant="ghost"
              className={`absolute w-10 h-[42px] ${key.left} top-0 bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0`}
            >
              <span className="font-title2-regular font-[number:var(--title2-regular-font-weight)] text-primary-900 text-[length:var(--title2-regular-font-size)] tracking-[var(--title2-regular-letter-spacing)] leading-[var(--title2-regular-line-height)] [font-style:var(--title2-regular-font-style)]">
                {key.letter}
              </span>
            </Button>
          ))}
        </div>

        <div className="relative h-[42px] ml-[19px] mr-[19px]">
          {secondRowKeys.map((key, index) => (
            <Button
              key={`second-${index}`}
              variant="ghost"
              className={`absolute w-10 h-[42px] ${key.left} top-0 bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0`}
            >
              <span className="font-title2-regular font-[number:var(--title2-regular-font-weight)] text-primary-900 text-[length:var(--title2-regular-font-size)] tracking-[var(--title2-regular-letter-spacing)] leading-[var(--title2-regular-line-height)] [font-style:var(--title2-regular-font-style)]">
                {key.letter}
              </span>
            </Button>
          ))}
        </div>

        <div className="relative h-[42px]">
          <Button
            variant="ghost"
            className="absolute top-0 left-0 w-[42px] h-[42px] bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0 flex items-center justify-center"
          >
            <img
              className="mt-[0.3px] h-[16.3px] ml-px w-[19px]"
              alt="Shift active"
              src="https://c.animaapp.com/miuw6x1asCEtc3/img/shift-active.svg"
            />
          </Button>

          <div className="absolute w-[calc(100%_-_116px)] top-0 left-[58px] h-[42px]">
            {thirdRowKeys.map((key, index) => (
              <Button
                key={`third-${index}`}
                variant="ghost"
                className={`absolute w-[39px] h-[42px] ${key.left} top-0 bg-primary-0 rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-primary-100 p-0`}
              >
                <span className="font-title2-regular font-[number:var(--title2-regular-font-weight)] text-primary-900 text-[length:var(--title2-regular-font-size)] tracking-[var(--title2-regular-letter-spacing)] leading-[var(--title2-regular-line-height)] [font-style:var(--title2-regular-font-style)]">
                  {key.letter}
                </span>
              </Button>
            ))}
          </div>

          <Button
            variant="ghost"
            className="absolute top-0 right-0 w-[42px] h-[42px] bg-[#abb0bc] rounded-[4.6px] shadow-[0px_1px_0px_#0000004c] hover:bg-[#9ca1ad] p-0 flex items-center justify-center"
          >
            <img
              className="-mt-px h-[17px] -ml-px w-[23px]"
              alt="Union"
              src="https://c.animaapp.com/miuw6x1asCEtc3/img/union.svg"
            />
          </Button>
        </div>
      </div>

      <div className="flex items-start gap-1.5 mt-3">
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

      <div className="mt-3">
        <img
          className="w-full h-7 px-[31px]"
          alt="Emoji dictation"
          src="https://c.animaapp.com/miuw6x1asCEtc3/img/emoji---dictation.svg"
        />
      </div>

      <div className="flex items-end justify-center mt-3 pb-2">
        <div className="w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
      </div>
    </section>
  );
};

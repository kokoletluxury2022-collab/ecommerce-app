import { HeartIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FilterSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/product-details');
  };

  return (
    <Card 
      onClick={handleProductClick}
      className="w-[161px] border-0 shadow-none bg-transparent cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="p-0 flex flex-col gap-2">
        <div className="relative w-full h-[174px] bg-primary-100 rounded-[10px] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            alt="Image"
            src="https://c.animaapp.com/miuwuy0kQowZpp/img/image-3.png"
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-auto w-auto p-2 bg-primary-0 rounded-lg shadow-[0px_8px_10px_#51515140] hover:bg-primary-0"
          >
            <HeartIcon className="w-[18px] h-[18px] text-primary-900" />
          </Button>
        </div>

        <div className="flex flex-col gap-[3px]">
          <h3 className="font-b1-semibold font-[number:var(--b1-semibold-font-weight)] text-primary-900 text-[length:var(--b1-semibold-font-size)] tracking-[var(--b1-semibold-letter-spacing)] leading-[var(--b1-semibold-line-height)] [font-style:var(--b1-semibold-font-style)]">
            Regular Fit Polo
          </h3>

          <div className="text-primary-500 font-b3-medium font-[number:var(--b3-medium-font-weight)] text-[length:var(--b3-medium-font-size)] tracking-[var(--b3-medium-letter-spacing)] leading-[var(--b3-medium-line-height)] [font-style:var(--b3-medium-font-style)]">
            <span className="text-[#7f7f7f] font-b3-medium [font-style:var(--b3-medium-font-style)] font-[number:var(--b3-medium-font-weight)] tracking-[var(--b3-medium-letter-spacing)] leading-[var(--b3-medium-line-height)] text-[length:var(--b3-medium-font-size)]">
              $ 1,100
            </span>
            <span className="text-[#ec1010] font-b3-medium [font-style:var(--b3-medium-font-style)] font-[number:var(--b3-medium-font-weight)] tracking-[var(--b3-medium-letter-spacing)] leading-[var(--b3-medium-line-height)] text-[length:var(--b3-medium-font-size)]">
              {" "}
              -52%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

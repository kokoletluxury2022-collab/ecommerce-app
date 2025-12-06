import { HeartIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProductGridSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/product-details');
  };

  return (
    <div className="inline-flex flex-col items-start gap-2">
      <Card 
        onClick={handleProductClick}
        className="w-[161px] h-[174px] bg-primary-100 rounded-[10px] overflow-hidden border-0 shadow-none p-0 cursor-pointer hover:shadow-md transition-shadow">
        <CardContent className="relative w-full h-full p-0">
          <img
            className="h-[174px] w-[161px] object-cover"
            alt="Image"
            src="https://c.animaapp.com/miuwuy0kQowZpp/img/image-2.png"
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-auto w-auto p-2 bg-primary-0 rounded-lg shadow-[0px_8px_10px_#51515140] hover:bg-primary-0"
          >
            <HeartIcon className="w-[18px] h-[18px] text-primary-900" />
          </Button>
        </CardContent>
      </Card>

      <div className="inline-flex flex-col items-start gap-[3px]">
        <div className="font-b1-semibold font-[number:var(--b1-semibold-font-weight)] text-primary-900 text-[length:var(--b1-semibold-font-size)] tracking-[var(--b1-semibold-letter-spacing)] leading-[var(--b1-semibold-line-height)] [font-style:var(--b1-semibold-font-style)]">
          Regular Fit Slogan
        </div>

        <div className="font-b3-medium font-[number:var(--b3-medium-font-weight)] text-primary-500 text-[length:var(--b3-medium-font-size)] tracking-[var(--b3-medium-letter-spacing)] leading-[var(--b3-medium-line-height)] [font-style:var(--b3-medium-font-style)]">
          $ 1,190
        </div>
      </div>
    </div>
  );
};

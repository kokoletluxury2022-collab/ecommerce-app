import { HeartIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProductCardGridSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/product-details');
  };

  return (
    <Card 
      onClick={handleProductClick}
      className="inline-flex flex-col items-start gap-2 w-[161px] border-0 shadow-none bg-transparent cursor-pointer hover:shadow-md transition-shadow">
      <CardContent className="relative w-full h-[174px] bg-primary-100 rounded-[10px] overflow-hidden p-0">
        <img
          className="h-[121px] absolute top-0 left-0 w-full object-cover"
          alt="Image"
          src="https://c.animaapp.com/miuwuy0kQowZpp/img/image-1.png"
        />

        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 h-auto w-auto p-2 bg-primary-0 rounded-lg shadow-[0px_8px_10px_#51515140] hover:bg-primary-0"
        >
          <HeartIcon className="w-[18px] h-[18px] text-primary-900" />
        </Button>
      </CardContent>

      <div className="inline-flex flex-col items-start gap-[3px] px-0">
        <h3 className="font-b1-semibold font-[number:var(--b1-semibold-font-weight)] text-primary-900 text-[length:var(--b1-semibold-font-size)] tracking-[var(--b1-semibold-letter-spacing)] leading-[var(--b1-semibold-line-height)] [font-style:var(--b1-semibold-font-style)]">
          Regular Fit V-Neck
        </h3>

        <p className="text-primary-500 font-b3-medium font-[number:var(--b3-medium-font-weight)] text-[length:var(--b3-medium-font-size)] tracking-[var(--b3-medium-letter-spacing)] leading-[var(--b3-medium-line-height)] [font-style:var(--b3-medium-font-style)]">
          $ 1,290
        </p>
      </div>
    </Card>
  );
};

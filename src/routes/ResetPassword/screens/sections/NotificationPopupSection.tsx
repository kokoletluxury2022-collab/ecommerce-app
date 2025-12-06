import { CheckCircle2Icon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const NotificationPopupSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center w-full">
      <Card className="w-[341px] bg-primary-0 rounded-[20px] overflow-hidden border-0 shadow-lg">
        <CardContent className="flex flex-col items-center justify-center gap-6 p-6">
          <div className="flex flex-col justify-center gap-3 w-full items-center">
            <CheckCircle2Icon
              className="w-[78px] h-[78px] text-successgreen"
              strokeWidth={1.5}
            />

            <div className="flex flex-col gap-2 w-full items-center">
              <h4 className="font-h4-semibold font-[number:var(--h4-semibold-font-weight)] text-primary-900 text-[length:var(--h4-semibold-font-size)] text-center tracking-[var(--h4-semibold-letter-spacing)] leading-[var(--h4-semibold-line-height)] [font-style:var(--h4-semibold-font-style)]">
                Password Changed!
              </h4>

              <p className="font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] text-center tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
                Your can now use your new password to login to your account.
              </p>
            </div>
          </div>

          <Button 
            onClick={handleLoginClick}
            className="w-full h-[54px] bg-primary-900 hover:bg-primary-900/90 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

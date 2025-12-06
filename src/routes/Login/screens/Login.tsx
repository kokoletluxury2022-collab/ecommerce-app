import { EyeOffIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Separator } from "../../../components/ui/separator";
import { useAuth } from "../../../contexts/AuthContext";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleJoinClick = () => {
    navigate('/signup');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await signIn(email, password);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      navigate('/homepage');
    }
  };

  return (
    <div className="bg-primary-0 w-full min-w-[390px] min-h-[844px] flex flex-col">
      <header className="w-full h-[47px] flex items-center justify-between px-[27px] py-3.5">
        <div className="w-[54px] h-[21px] flex items-center justify-center">
          <div className="font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] [font-style:var(--callout-bold-font-style)]">
            9:41
          </div>
        </div>

        <div className="flex items-center gap-[5px]">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuqz64q9izT9X/img/icon---mobile-signal.svg"
          />
          <img
            className="w-[17px] h-[11.88px]"
            alt="Wifi"
            src="https://c.animaapp.com/miuqz64q9izT9X/img/wifi.svg"
          />
          <div className="w-[27px] h-[13px] relative">
            <img
              className="absolute w-[25px] h-[13px] top-0 left-0"
              alt="Outline"
              src="https://c.animaapp.com/miuqz64q9izT9X/img/outline.svg"
            />
            <img
              className="absolute top-[4px] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuqz64q9izT9X/img/battery-end.svg"
            />
            <img
              className="absolute w-[21px] h-[9px] top-[2px] left-0.5"
              alt="Fill"
              src="https://c.animaapp.com/miuqz64q9izT9X/img/fill.svg"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col px-6 pt-3">
        <h1 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
          Login to your account
        </h1>

        <p className="mt-10 font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
          It&apos;s great to see you again.
        </p>

        <form onSubmit={handleLogin}>
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-1 mt-[46px]">
            <Label
              htmlFor="email"
              className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="h-[52px] px-5 py-3.5 rounded-[10px] border border-solid border-[#e6e6e6] font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-900 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] placeholder:text-primary-400"
            />
          </div>

          <div className="flex flex-col gap-1 mt-[42px]">
            <Label
              htmlFor="password"
              className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]"
            >
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="h-[52px] px-5 py-3.5 pr-14 rounded-[10px] border border-solid border-[#e6e6e6] font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-900 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] placeholder:text-primary-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeIcon className="w-6 h-6 text-primary-900" />
                ) : (
                  <EyeOffIcon className="w-6 h-6 text-primary-900" />
                )}
              </button>
            </div>
          </div>

          <p className="mt-[36px] font-b2-regular font-[number:var(--b2-regular-font-weight)] text-primary-900 text-[length:var(--b2-regular-font-size)] tracking-[var(--b2-regular-letter-spacing)] leading-[var(--b2-regular-line-height)] [font-style:var(--b2-regular-font-style)]">
            Forgot your password?{" "}
            <button type="button" className="underline">Reset your password</button>
          </p>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-[54px] mt-11 bg-primary-200 hover:bg-primary-200/90 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="flex items-center gap-4 mt-[78px]">
          <Separator className="flex-1 bg-primary-100" />
          <span className="font-b2-regular font-[number:var(--b2-regular-font-weight)] text-primary-500 text-[length:var(--b2-regular-font-size)] tracking-[var(--b2-regular-letter-spacing)] leading-[var(--b2-regular-line-height)] [font-style:var(--b2-regular-font-style)]">
            Or
          </span>
          <Separator className="flex-1 bg-primary-100" />
        </div>

        <Button
          variant="outline"
          className="w-full h-14 mt-11 rounded-[10px] border border-solid border-[#cccccc] bg-transparent hover:bg-primary-100/50 font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] gap-2.5"
        >
          <img
            className="w-6 h-6"
            alt="Logos google icon"
            src="https://c.animaapp.com/miuqz64q9izT9X/img/logos-google-icon.svg"
          />
          Login with Google
        </Button>

        <Button className="w-full h-14 mt-[18px] bg-[#1877f2] hover:bg-[#1877f2]/90 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-0 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] gap-2.5">
          <img
            className="w-6 h-6"
            alt="Logos facebook"
            src="https://c.animaapp.com/miuqz64q9izT9X/img/logos-facebook.svg"
          />
          Login with Facebook
        </Button>

        <p className="mt-auto mb-[32px] text-center font-b1-regular font-[number:var(--b1-regular-font-weight)] text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
          <span className="text-primary-500">Don&apos;t have an account?</span>{" "}
          <button 
            onClick={handleJoinClick}
            className="font-[family-name:'General_Sans-Medium',Helvetica] font-medium text-primary-900 underline">
            Join
          </button>
        </p>
      </main>

      <footer className="w-full h-[27px] flex items-end justify-center bg-primary-0 pb-2">
        <div className="w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
      </footer>
    </div>
  );
};

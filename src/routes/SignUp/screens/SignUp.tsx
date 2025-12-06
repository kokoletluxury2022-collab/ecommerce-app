import { EyeOffIcon, EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useAuth } from "../../../contexts/AuthContext";

export const SignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await signUp(email, password, fullName);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      navigate('/homepage');
    }
  };

  return (
    <div className="bg-primary-0 w-full min-w-[390px] min-h-[844px] flex flex-col">
      <header className="w-full h-[47px] flex items-center justify-between px-[27px] pt-3.5">
        <div className="w-[54px] h-[21px] flex items-center justify-center">
          <div className="font-callout-bold font-[number:var(--callout-bold-font-weight)] text-primary-900 text-[length:var(--callout-bold-font-size)] tracking-[var(--callout-bold-letter-spacing)] leading-[var(--callout-bold-line-height)] [font-style:var(--callout-bold-font-style)]">
            9:41
          </div>
        </div>

        <div className="flex items-center gap-[5px]">
          <img
            className="w-[18px] h-3"
            alt="Icon mobile signal"
            src="https://c.animaapp.com/miuqrghpYehOeN/img/icon---mobile-signal.svg"
          />
          <img
            className="w-[17px] h-[11.87px]"
            alt="Wifi"
            src="https://c.animaapp.com/miuqrghpYehOeN/img/wifi.svg"
          />
          <div className="relative w-[27px] h-[13px]">
            <img
              className="absolute w-[25px] h-[13px] top-0 left-0"
              alt="Outline"
              src="https://c.animaapp.com/miuqrghpYehOeN/img/outline.svg"
            />
            <img
              className="absolute top-[4px] right-0 w-px h-1"
              alt="Battery end"
              src="https://c.animaapp.com/miuqrghpYehOeN/img/battery-end.svg"
            />
            <img
              className="absolute w-[21px] h-[9px] top-[2px] left-0.5"
              alt="Fill"
              src="https://c.animaapp.com/miuqrghpYehOeN/img/fill.svg"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 px-6 pt-3 pb-[27px] flex flex-col">
        <h1 className="font-h2-semibold font-[number:var(--h2-semibold-font-weight)] text-primary-900 text-[length:var(--h2-semibold-font-size)] tracking-[var(--h2-semibold-letter-spacing)] leading-[var(--h2-semibold-line-height)] [font-style:var(--h2-semibold-font-style)]">
          Create an account
        </h1>

        <p className="mt-10 font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-500 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
          Let&apos;s create your account.
        </p>

        <form onSubmit={handleSignUp}>
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-6 mt-[46px]">
            <div className="flex flex-col gap-1">
              <Label className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
                Full Name
              </Label>
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="h-[52px] px-5 py-3.5 rounded-[10px] border-[#e6e6e6] font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-900 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] placeholder:text-primary-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
                Email
              </Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="h-[52px] px-5 py-3.5 rounded-[10px] border-[#e6e6e6] font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-900 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] placeholder:text-primary-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label className="font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)]">
                Password
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  minLength={6}
                  className="h-[52px] px-5 py-3.5 pr-14 rounded-[10px] border-[#e6e6e6] font-b1-regular font-[number:var(--b1-regular-font-weight)] text-primary-900 text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)] placeholder:text-primary-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeIcon className="w-6 h-6 text-primary-400" />
                  ) : (
                    <EyeOffIcon className="w-6 h-6 text-primary-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <p className="mt-[38px] font-b2-regular font-[number:var(--b2-regular-font-weight)] text-primary-900 text-[length:var(--b2-regular-font-size)] tracking-[var(--b2-regular-letter-spacing)] leading-[var(--b2-regular-line-height)] [font-style:var(--b2-regular-font-style)]">
            By signing up you agree to our{" "}
            <a href="#" className="underline">
              Terms
            </a>
            ,{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            , and{" "}
            <a href="#" className="underline">
              Cookie Use
            </a>
          </p>

          <Button
            type="submit"
            disabled={loading}
            className="mt-16 h-[54px] bg-primary-200 hover:bg-primary-200/90 text-primary-0 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create an Account"}
          </Button>
        </form>

        <div className="flex items-center gap-3 mt-[24px]">
          <div className="flex-1 h-px bg-primary-100" />
          <span className="font-b2-regular font-[number:var(--b2-regular-font-weight)] text-primary-500 text-[length:var(--b2-regular-font-size)] tracking-[var(--b2-regular-letter-spacing)] leading-[var(--b2-regular-line-height)] [font-style:var(--b2-regular-font-style)]">
            Or
          </span>
          <div className="flex-1 h-px bg-primary-100" />
        </div>

        <Button
          variant="outline"
          className="mt-[44px] h-14 bg-primary-0 hover:bg-primary-0/90 border-[#cccccc] rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-primary-900 text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] gap-2"
        >
          <img
            className="w-6 h-6"
            alt="Google icon"
            src="https://c.animaapp.com/miuqrghpYehOeN/img/logos-google-icon.svg"
          />
          Sign Up with Google
        </Button>

        <Button className="mt-4 h-14 bg-[#1877f2] hover:bg-[#1877f2]/90 text-primary-0 rounded-[10px] font-b1-medium font-[number:var(--b1-medium-font-weight)] text-[length:var(--b1-medium-font-size)] tracking-[var(--b1-medium-letter-spacing)] leading-[var(--b1-medium-line-height)] [font-style:var(--b1-medium-font-style)] gap-2">
          <img
            className="w-6 h-6"
            alt="Facebook icon"
            src="https://c.animaapp.com/miuqrghpYehOeN/img/logos-facebook.svg"
          />
          Sign Up with Facebook
        </Button>

        <p className="mt-[40px] text-center font-b1-regular font-[number:var(--b1-regular-font-weight)] text-[length:var(--b1-regular-font-size)] tracking-[var(--b1-regular-letter-spacing)] leading-[var(--b1-regular-line-height)] [font-style:var(--b1-regular-font-style)]">
          <span className="text-[#7f7f7f]">Already have an account?</span>{" "}
          <button
            onClick={handleLoginClick}
            className="text-primary-900 font-[family-name:'General_Sans-Medium',Helvetica] font-medium underline"
          >
            Log In
          </button>
        </p>
      </main>

      <footer className="w-full h-[27px] flex items-end justify-center bg-primary-0">
        <div className="mb-2 w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
      </footer>
    </div>
  );
};

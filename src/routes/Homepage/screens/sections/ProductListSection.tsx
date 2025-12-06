import {
  HeartIcon,
  HomeIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import React from "react";

const navigationItems = [
  {
    icon: HomeIcon,
    label: "Home",
    isActive: true,
    iconSrc: "https://c.animaapp.com/miuwuy0kQowZpp/img/home.svg",
  },
  {
    icon: SearchIcon,
    label: "Search",
    isActive: false,
    iconSrc: "https://c.animaapp.com/miuwuy0kQowZpp/img/search.svg",
  },
  {
    icon: HeartIcon,
    label: "Saved",
    isActive: false,
    iconSrc: "https://c.animaapp.com/miuwuy0kQowZpp/img/heart.svg",
  },
  {
    icon: ShoppingCartIcon,
    label: "Cart",
    isActive: false,
    iconSrc: "https://c.animaapp.com/miuwuy0kQowZpp/img/cart.svg",
  },
  {
    icon: UserIcon,
    label: "Account",
    isActive: false,
    iconSrc: "https://c.animaapp.com/miuwuy0kQowZpp/img/user.svg",
  },
];

export const ProductListSection = (): JSX.Element => {
  return (
    <nav className="w-full flex flex-col justify-between items-center bg-primary-0 border-t [border-top-style:solid] border-[#e6e6e6]">
      <div className="flex w-full max-w-[342px] h-[41px] mt-4 items-center justify-center gap-10">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            className="inline-flex flex-col items-center flex-[0_0_auto] cursor-pointer bg-transparent border-none p-0"
          >
            <img className="w-6 h-6" alt={item.label} src={item.iconSrc} />
            <span
              className={`font-b3-medium font-[number:var(--b3-medium-font-weight)] text-[length:var(--b3-medium-font-size)] tracking-[var(--b3-medium-letter-spacing)] leading-[var(--b3-medium-line-height)] whitespace-nowrap [font-style:var(--b3-medium-font-style)] ${
                item.isActive ? "text-primary-900" : "text-primary-400"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="h-[27px] w-full flex items-end justify-center bg-primary-0">
        <div className="mb-2 w-[134px] h-[5px] bg-primary-900 rounded-[100px]" />
      </div>
    </nav>
  );
};
